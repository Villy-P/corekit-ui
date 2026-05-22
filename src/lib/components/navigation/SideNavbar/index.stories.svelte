<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import SideNavbar from "./index.svelte";

    import Home from "@lucide/svelte/icons/home";
    import Book from "@lucide/svelte/icons/book";
    import Database from "@lucide/svelte/icons/database";

	const { Story } = defineMeta({
		title: "Components/Navigation/SideNavbar",
		component: SideNavbar,
        parameters: {
            layout: "fullscreen",
        },
	});
</script>

<Story name="Default"  args={{ items: [
    { label: "Home", href: "/", icon: Home },
    { label: "Library", href: "/library", icon: Book },
    { label: "Data", href: "/data", icon: Database },
], offset: "0" }}></Story>
