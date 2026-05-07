<script lang="ts">
    import Button from "$lib/components/inputs/Button/index.svelte";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Input from "$components/inputs/Input/index.svelte";
    import Select from "$components/inputs/Select/Select.svelte";
    import Text from "$lib/components/Text.svelte";
    import Tooltip from "$lib/components/Tooltip.svelte";
    import { colorStyleParts, type ColorStyle, type ColorStyleType } from "$lib/styles/color.js";

    const positionOptions = [
        { value: "top", label: "Top" },
        { value: "right", label: "Right" },
        { value: "bottom", label: "Bottom" },
        { value: "left", label: "Left" }
    ];

    let position: "top" | "right" | "bottom" | "left" = $state("top");
</script>

<div class="w-full h-screen flex pt-20 pl-12">
    <div class="w-3/4 flex-center px-10">
        <Tooltip text="This is a much more detailed tooltip! This is a much more detailed tooltip! This is a much more detailed tooltip!" {position}>
            <Button color="blue">
                H
            </Button>
        </Tooltip>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">
        <Select divClass="w-full" options={positionOptions} bind:value={position} label="Position"/>
    </div>
</div>