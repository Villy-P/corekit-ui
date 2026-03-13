<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import { onMount } from "svelte";

    let { actions = [] as TypewriterAction[], class: className = "" } = $props();

    let displaySegments = $state<DisplaySegment[]>([]);

    async function execute() {
        for (const action of actions) {
            switch (action.type) {
                case "write":
                    const segment = { text: "", color: action.color, label: action.label };
                    displaySegments.push(segment);

                    const segmentProxy = displaySegments[displaySegments.length - 1];
                    for (const char of action.value) {
                        segmentProxy.text += char;
                        const speed = Math.random() * ((action.maxspeed || 100) - (action.minspeed || 50)) + (action.minspeed || 50);
                        await new Promise(resolve => setTimeout(resolve, speed));
                    }
                    break;
                case "delete":
                    const index = displaySegments.findIndex(s => s.label === action.label);
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