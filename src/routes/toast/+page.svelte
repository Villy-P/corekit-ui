<script lang="ts">
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Input from "$lib/components/Input.svelte";
    import Progress from "$lib/components/Progress.svelte";
    import Text from "$lib/components/Text.svelte";
    import Button from "$lib/components/Button.svelte";
    import Select from "$lib/components/Select.svelte";
    import Table from "$lib/components/Table.svelte";

    import { colorStyleParts, type ColorStyle } from "$lib/styles/color.js";
    import type { SizeStyleTheme } from "$lib/styles/size.js";
    import Toast from "$lib/components/Toast.svelte";
    import type { ToastType } from "$lib/types/Toast.js";
    import { toast } from "$lib/actions/toast.svelte.js";
    import type { PositionStyle } from "$lib/styles/posititon.js";

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
    const toastTypeValues = [
        { value: "success", label: "Success" },
        { value: "error", label: "Error" },
        { value: "info", label: "Info" },
        { value: "warning", label: "Warning" }
    ]
    const positionOptions = [
        { value: "center", label: "Center" },
        { value: "top", label: "Top" },
        { value: "bottom", label: "Bottom" },
        { value: "left", label: "Left" },
        { value: "right", label: "Right" },
        { value: "top-left", label: "Top Left" },
        { value: "top-right", label: "Top Right" },
        { value: "bottom-left", label: "Bottom Left" },
        { value: "bottom-right", label: "Bottom Right" }
    ];

    let toastType: ToastType = $state("success");
    let size: SizeStyleTheme = $state("md");
    let radius: SizeStyleTheme = $state("md");
    let position: PositionStyle = $state("top-right");
</script>

<div class="w-full h-screen flex pt-20">
    <div class="w-3/4 flex-center">
        <Button color="blue" onclick={() => toast.add({ message: "This is a toast notification!", type: toastType, duration: 3000, position, size, radius })}>
            Show Toast
        </Button>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">
        <Select divClass="w-full" options={sizeOptions} bind:value={size} label="Size"/>
        <Select divClass="w-full" options={sizeOptions} bind:value={radius} label="Radius"/>
        <Select divClass="w-full" label="Toast Type" options={toastTypeValues} bind:value={toastType}/>
        <Select divClass="w-full" options={positionOptions} bind:value={position} label="Position"/>
    </div>
</div>