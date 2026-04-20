<script lang="ts">
    import Loader from "$lib/components/Loader.svelte";
    import Select from "$lib/components/Select.svelte";
    import Text from "$lib/components/Text.svelte";
    import Button from "$lib/components/Button.svelte";
    import { colorStyleParts, type ColorStyle } from "$lib/styles/color.js";
    import Checkbox from "$lib/components/Checkbox.svelte";

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

    let size: string = $state("md");
    let color: ColorStyle = $state("blue");
</script>

<div class="w-full h-screen flex pt-20 pl-12">
    <div class="w-3/4 flex-center px-10">
        <Checkbox label="Default Checkbox"/>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">

    </div>
</div>