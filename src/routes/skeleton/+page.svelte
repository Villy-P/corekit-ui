<script lang="ts">
    import Skeleton from "$lib/components/Skeleton.svelte";

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
</script>

<div class="w-full h-screen flex pt-20 pl-12">
    <div class="w-3/4 flex-center px-10">
        <Skeleton variant="text"/>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">

    </div>
</div>