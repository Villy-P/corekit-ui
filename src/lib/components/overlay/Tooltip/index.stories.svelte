<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Tooltip from "./index.svelte";
    import Button from "../../inputs/Button/index.svelte";

	const { Story } = defineMeta({
		title: "Components/Overlay/Tooltip",
		component: Tooltip
	});
</script>

<Story name="Default" args={{ color: "primary", size: "md" }}>
    <Button>Hover me</Button>
</Story>
