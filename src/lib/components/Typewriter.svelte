<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import { onMount } from "svelte";

    import type { DisplaySegment, TypewriterAction } from "$lib/types.js";

    let { actions = [] as TypewriterAction[], class: className = "" } = $props();

    let displaySegments = $state<DisplaySegment[]>([]);

    async function execute() {
        for (let i = 0; i < actions.length; i++) {
            const action = actions[i];
            switch (action.type) {
                case "write":
                    const segment = { text: "", color: typeof action.color === "function" ? action.color() : action.color, label: action.label };
                    displaySegments.push(segment);

                    const segmentProxy = displaySegments[displaySegments.length - 1];

                    const resolvedValue = typeof action.value === "function" ? action.value() : action.value;
                    for (const char of resolvedValue) {
                        segmentProxy.text += char;
                        const speed = Math.random() * ((action.maxspeed || 100) - (action.minspeed || 50)) + (action.minspeed || 50);
                        await new Promise(resolve => setTimeout(resolve, speed));
                    }
                    break;
                case "delete":
                    const index = displaySegments.findIndex(s => s.label === action.to);
                    if (index === -1) break;
                    const deleteSegment = displaySegments[index];
                    while (deleteSegment.text.length > 0) {
                        deleteSegment.text = deleteSegment.text.slice(0, -1);
                        const speed = Math.random() * ((action.maxspeed || 100) - (action.minspeed || 50)) + (action.minspeed || 50);
                        await new Promise(resolve => setTimeout(resolve, speed));
                    }
                    displaySegments.splice(index, 1);
                    break;
                case "pause":
                    await new Promise(resolve => setTimeout(resolve, action.duration || 1000));
                    break;
                case "jump":
                    const position = actions.findIndex(a => a.label === action.position);
                    if (position !== -1)
                        i = position - 1;
                    break;
            }
        }
    }

    onMount(() => {
        execute();
    });

    let combinedClass = $derived(twMerge("typewriter w-fit", className));
</script>

<div class={combinedClass}>
    {#each displaySegments as segment}
        {#key segment}
            <span style="color: {segment.color}">{segment.text}</span>
        {/key}
    {/each}
</div>

<style>
    .typewriter::after {
        content: "\00a0";
        animation: blink .7s step-start infinite;
        text-decoration: underline;
    }

    @keyframes blink {
        50% { opacity: 0; }
    }
</style>