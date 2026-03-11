<script lang="ts">
    import { twMerge } from "tailwind-merge";

    type ButtonType = "button" | "pill" | "icon";

    let { 
        children, 
        class: className, 
        type = "button" 
    } = $props();

    let pillClass = "rounded-full px-4 py-2";
    let iconClass = "p-2 aspect-square";
    let typeClass = $derived(() => {
        switch (type) {
            case "pill":
                return pillClass;
            case "icon":
                return iconClass;
            default:
                return "";
        }
    });
    let defaultClass = $derived("text-white cursor-pointer " + typeClass());

    let combinedClass = $derived(twMerge(defaultClass, className));
</script>

<button class={combinedClass}> {@render children?.()} </button>