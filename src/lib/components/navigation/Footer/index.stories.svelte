<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Footer from "./index.svelte";
    import { Link } from "../../typography";

	const { Story } = defineMeta({
		title: "Components/Navigation/Footer",
		component: Footer,
		argTypes: {

		},
	});
</script>

<Story name="Default">
    <Link href="mailto:example@gmail.com">mailto:example@gmail.com</Link>
</Story>
