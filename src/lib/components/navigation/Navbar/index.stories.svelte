<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Navbar from "./index.ts";
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
    <Navbar.Element href="/">Home</Navbar.Element>
    <Navbar.Element href="/library">Library</Navbar.Element>
    <Navbar.Element>Data</Navbar.Element>

    <Navbar.Separator/>

    <Navbar.Dropdown label="More">
        <Navbar.Element href="/about">About</Navbar.Element>
        <Navbar.Separator variant="horizontal"/>
        <Navbar.Element href="/contact">Contact</Navbar.Element>
        <Navbar.Element>No Link</Navbar.Element>
    </Navbar.Dropdown>

    <Navbar.Element color="primary">Action</Navbar.Element>
</Story>
