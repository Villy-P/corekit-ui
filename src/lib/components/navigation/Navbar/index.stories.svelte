<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Navbar from "./index.svelte";
    import NavbarElement from "./NavbarElement.svelte";
  import NavbarSeparator from "./NavbarSeparator.svelte";
  import NavbarDropdown from "./NavbarDropdown.svelte";

	const { Story } = defineMeta({
		title: "Components/Navigation/Navbar",
		component: Navbar,
		argTypes: {

		},
	});
</script>

<Story name="Default" args={{ color: "primary", size: "md" }}>
    <NavbarElement href="/">Home</NavbarElement>
    <NavbarElement href="/library">Library</NavbarElement>
    <NavbarElement>Data</NavbarElement>

    <NavbarSeparator/>

    <NavbarDropdown label="More">
        <NavbarElement href="/about">About</NavbarElement>
        <NavbarSeparator variant="horizontal"/>
        <NavbarElement href="/contact">Contact</NavbarElement>
    </NavbarDropdown>
</Story>
