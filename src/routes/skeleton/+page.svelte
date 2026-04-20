<script lang="ts">
    import Input from "$lib/components/Input.svelte";
    import Select from "$lib/components/Select.svelte";
    import Skeleton from "$lib/components/Skeleton.svelte";
    import type { SkeletonVariant } from "$lib/types/Skeleton.js";

    const sizeOptions = [
        { value: "xs", label: "Extra Small" },
        { value: "sm", label: "Small" },
        { value: "md", label: "Medium" },
        { value: "lg", label: "Large" },
        { value: "xl", label: "Extra Large" },
        { value: "2xl", label: "2X Large" },
        { value: "3xl", label: "3X Large" },
        { value: "4xl", label: "4X Large" },
        { value: "5xl", label: "5X Large" },
        { value: "6xl", label: "6X Large" },
        { value: "full", label: "Full" },
        { value: "none", label: "None" }
    ];
    const variantOptions = [
        { value: "default", label: "Default" },
        { value: "text", label: "Text" },
        { value: "image", label: "Image" },
        { value: "video", label: "Video" },
        { value: "card", label: "Card" }
    ];

    let variant: SkeletonVariant = $state("text");
    let count: number = $state(19);
    let size: string = $state("md");
</script>

<div class="w-full h-screen flex pt-20 pl-12">
    <div class="w-3/4 flex-center px-10">
        <Skeleton {variant} {count} {size}/>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">
        <Select divClass="w-full" options={variantOptions} bind:value={variant} label="Variant"/>
        <Select divClass="w-full" options={sizeOptions} bind:value={size} label="Size"/>
        <Input size="full" label="Count" type="number" min={1} bind:value={count}/>
    </div>
</div>