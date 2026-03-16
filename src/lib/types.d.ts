export type TypewriterAction =
    | { type: "write", value: string | (() => string), color?: string | (() => string), minspeed?: number, maxspeed?: number, label?: string }
    | { type: "delete", to: string, minspeed?: number, maxspeed?: number, label?: string }    
    | { type: "pause", duration: number, label?: string }
    | { type: "jump", position: string, label?: string };

export interface DisplaySegment {
    text: string;
    color?: string;
    label?: string;
};