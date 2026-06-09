<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Button from "../../inputs/Button/index.svelte";
    import Text from "../../typography/Text/index.svelte";
    import Modal from "./index.svelte";
	import { sizeStyles } from "../../../styles/size";

	const { Story } = defineMeta({
		title: "Components/Feedback/Modal",
		component: Modal,
		argTypes: {
			variant: {
				control: "select",
				options: ["bordered", "elevated"],
			},
			size: {
				control: "select",
				options: sizeStyles,
			},
			radius: {
				control: "select",
				options: sizeStyles,
			},
			href: { control: "text" },
			external: { control: "boolean" },
		},
	});
</script>

<Story name="Default" args={{ variant: "bordered", size: "md" }}>
    <Text tag="h2" class="text-2xl font-bold mb-4">Customizable Modal</Text>
    <Text class="mb-4">This is a customizable modal component. You can add any content here and style it as needed.</Text>
    <Button href="https://example.com" target="_blank">Learn More</Button>
</Story>