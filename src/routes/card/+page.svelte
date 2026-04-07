<script lang="ts">
    import Button from "$lib/components/Button.svelte";
  import Card from "$lib/components/Card.svelte";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import FloatingInput from "$lib/components/FloatingInput.svelte";
    import FloatingSelect from "$lib/components/FloatingSelect.svelte";
    import Text from "$lib/components/Text.svelte";
    import { colorStyleParts, type ColorStyle } from "$lib/styles/color.js";

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

<div class="w-full h-screen flex pt-20">
    <div class="w-3/4 flex-center">
        <Card>
            <Text tag="h2" class="text-2xl font-bold mb-4">Customizable Card</Text>
            <Text class="mb-4">This is a customizable card component. You can add any content here and style it as needed.</Text>
            <Button color="blue" href="https://example.com" target="_blank">Learn More</Button>
        </Card>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">
        
    </div>
</div>