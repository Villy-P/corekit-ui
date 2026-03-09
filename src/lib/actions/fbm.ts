export interface FBMBackgroundOptions {
    octaves?: number;
    warps?: number;
    seed?: number;
}

interface ProgramInfo {
    program: WebGLProgram;
    attribLocations: {
        vertexPosition: number;
    };
    uniformLocations: {
        resolution: WebGLUniformLocation | null;
        seed: WebGLUniformLocation | null;
        time: WebGLUniformLocation | null;
        octaves: WebGLUniformLocation | null;
        warp: WebGLUniformLocation | null;
    };
}

const FBM_VERTEX_SHADER_SOURCE = `
attribute vec4 aVertexPosition;

void main() {
    gl_Position = aVertexPosition;
}`;

const FBM_FRAGMENT_SHADER_SOURCE = `
precision mediump float;

uniform vec2 u_resolution;
uniform float u_seed;
uniform float u_time;
uniform int u_octaves;
uniform int u_warp;

const int maxOctaves = 20;
const int maxWarps = 5;
float scale = u_time * 0.022 + 1.0;

float rand(vec2 n) { 
    return fract(sin(dot(n.xy, vec2(12., 7.23))) * u_seed);
}

float noise(vec2 p){
    vec2 i = floor(p);
    vec2 f = fract(p);

    // Four corners in 2D of a tile
    float a = rand(i);
    float b = rand(i + vec2(1.0, 0.0));
    float c = rand(i + vec2(0.0, 1.0));
    float d = rand(i + vec2(1.0, 1.0));

    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
    
    return mix(a, b, u.x) +
            (c - a)*  u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

float fbm( in vec2 x, in float H ) {
    float v = 00.0000;
    float a = 0.5;
    vec2 shift = vec2(100);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5),
                    -sin(0.5), cos(0.50));
    for (int i = 0; i < maxOctaves; ++i) {
        v += a * noise(x);
        x = rot * x * 2.0 + shift;
        a *= 0.5;
        if (i > u_octaves) break;
    }
    return v;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.x *= u_resolution.x / u_resolution.y;

    float baseNoise = fbm(uv * scale, 1.2);

    vec2 warp = uv;
    for (int i = 0; i < maxWarps; ++i) {
        warp += vec2(fbm(warp * 2.0, 1.0), fbm(warp * 4.0 + vec2(10.2), 1.0));
        if (i > u_warp) break;
    }

    baseNoise = fbm(warp * scale, 1.2);

    gl_FragColor = vec4(vec3(baseNoise), 1.0);
}`;

function loadShaders(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
    const shader = gl.createShader(type);
    if (!shader) {
        console.error("Unable to create shader");
        return null;
    }

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

function initializeShaders(gl: WebGLRenderingContext, vertexSource: string, fragmentSource: string): WebGLProgram | null {
    const vertexShader = loadShaders(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = loadShaders(gl, gl.FRAGMENT_SHADER, fragmentSource);
    
    if (!vertexShader || !fragmentShader)
        return null;

    const shaderProgram = gl.createProgram();

    if (!shaderProgram) {
        console.error("Unable to create shader program");
        return null;
    }

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error("Unable to initialize the shader program: " + gl.getProgramInfoLog(shaderProgram));
        return null;
    }
    
    return shaderProgram;
}

function initBuffers(gl: WebGLRenderingContext) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
    const vertices = new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
         1.0,  1.0,
    ]);

    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    
    return {
        position: positionBuffer,
    };
}

export function fbmBackground(canvas: HTMLCanvasElement, options: FBMBackgroundOptions = {}) {
    let gl = canvas.getContext("webgl", { antialias: true }) as WebGLRenderingContext | null;
    if (!gl) {
        console.error("WebGL not supported");
        return;
    }

    const OCTAVES = options.octaves || 4;
    const WARPS = options.warps || 2;
    const SEED = options.seed || Math.random() * 1000;

    const shaderProgram = initializeShaders(gl, FBM_VERTEX_SHADER_SOURCE, FBM_FRAGMENT_SHADER_SOURCE);
    if (!shaderProgram) {
        console.error("Failed to initialize shaders");
        return;
    }
    const programInfo: ProgramInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
        },
        uniformLocations: {
            resolution: gl.getUniformLocation(shaderProgram, "u_resolution"),
            seed: gl.getUniformLocation(shaderProgram, "u_seed"),
            time: gl.getUniformLocation(shaderProgram, "u_time"),
            octaves: gl.getUniformLocation(shaderProgram, "u_octaves"),
            warp: gl.getUniformLocation(shaderProgram, "u_warp"),
        }
    };
    const buffers = initBuffers(gl);
    
    function updateCanvasSize() {
        const DPR = window.devicePixelRatio || 1;
        canvas.width = Math.floor(canvas.clientWidth * DPR);
        canvas.height = Math.floor(canvas.clientHeight * DPR);

        console.log(`Canvas resized to ${canvas.width}x${canvas.height}`);
    }

    function render() {
        updateCanvasSize();

        if (!gl) return;

        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0, 0, 0, 1);
        gl.clearDepth(1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);

        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
        gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

        gl.useProgram(programInfo.program);
        
        gl.uniform2f(programInfo.uniformLocations.resolution, canvas.width, canvas.height);
        gl.uniform1f(programInfo.uniformLocations.seed, SEED);
        gl.uniform1i(programInfo.uniformLocations.octaves, OCTAVES);
        gl.uniform1i(programInfo.uniformLocations.warp, WARPS);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    const resizeObserver = new ResizeObserver(() => {
        render();
    });
    resizeObserver.observe(canvas);
}