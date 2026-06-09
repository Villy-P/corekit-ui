<script lang="ts">
    import type { ImageProps } from './types';

    let { 
        src, 
        alt = "", 
        hideIfBroken = false, 
        fallbackSrc = "", 
        class: className = "",
        ...restProps
    }: ImageProps = $props();

    let isBroken = $state(false);

    function handleError() {
        if (fallbackSrc && !isBroken) {
            src = fallbackSrc;
        } else {
            isBroken = true;
        }
    }
</script>

{#if !isBroken || !hideIfBroken}
    <img
        {src}
        {alt}
        class={className}
        onerror={handleError}
        {...restProps}/>
{/if}