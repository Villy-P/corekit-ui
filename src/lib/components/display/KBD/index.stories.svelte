<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import KBD from "./index.svelte";
	import { colorStyles, colorStyleTypes } from "$lib/styles/color.js";
    import { sizeStyles } from "$lib/styles/size.js";

	const { Story } = defineMeta({
		title: "Components/Display/KBD",
		component: KBD,
	});
</script>

<Story name="Default">Ctrl</Story>