<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Navbar from "./index.svelte";
    import NavbarElement from "./NavbarElement.svelte";
    import NavbarSeparator from "./NavbarSeparator.svelte";
    import NavbarDropdown from "./NavbarDropdown.svelte";
    import NavbarStoryWrapper from "./NavbarStoryWrapper.svelte";
    import type { Component } from "svelte";
    import type { NavbarProps } from "./types";

	const { Story } = defineMeta({
		title: "Components/Navigation/Navbar",
		component: Navbar,
		argTypes: {

		},
        parameters: {
            layout: "fullscreen",
        },
        decorators: [
            () => ({ Component: NavbarStoryWrapper as unknown as Component<NavbarProps, {}, "element"> })
        ]
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
        <NavbarElement>No Link</NavbarElement>
    </NavbarDropdown>

    <NavbarElement color="primary">Action</NavbarElement>
</Story>
