<script lang="ts">
  import SideNavbar from '$lib/components/SideNavbar.svelte';
    import { Navbar, Button, NavbarElement, NavbarSeparator } from '$lib/index.js';
	import './../lib/styles/layout.css';

    import MousePointerClick from "@lucide/svelte/icons/mouse-pointer-click";
    import Square from "@lucide/svelte/icons/square";
    import Signature from "@lucide/svelte/icons/signature";
    import File from "@lucide/svelte/icons/file";
    import SquareChevronDown from "@lucide/svelte/icons/square-chevron-down";
    import Ellipsis from "@lucide/svelte/icons/ellipsis";
    import Table from "@lucide/svelte/icons/table";
    import CircleAlert from "@lucide/svelte/icons/circle-alert";
    import NavbarDropdown from '$lib/components/NavbarDropdown.svelte';
    import SquareDashed from "@lucide/svelte/icons/square-dashed";
    import List from "@lucide/svelte/icons/list";

    import Settings from "@lucide/svelte/icons/settings";
    import User from "@lucide/svelte/icons/user";

	const { children } = $props();

    const sidebarElements = [
        { href: "/button", label: "Button", icon: MousePointerClick },
        { href: "/card", label: "Card", icon: Square },
        { href: "/input", label: "Input", icon: Signature },
        { href: "/input-file", label: "File Input", icon: File },
        { href: "/select", label: "Select", icon: SquareChevronDown },
        { href: "/combobox", label: "Combobox", icon: List },
        { href: "/progress", label: "Progress", icon: Ellipsis },
        { href: "/modal", label: "Modal", icon: SquareDashed },
        { href: "/table", label: "Table", icon: Table },
        { href: "/toast", label: "Toast", icon: CircleAlert }
    ];
</script>

<Navbar>
    <Button href="/">
        <p>Valerius</p>
    </Button>

    <NavbarSeparator/>

    <NavbarElement href="https://github.com/Villy-P/corekit-ui" activeClass="bg-main-text/10">Github</NavbarElement>
    <NavbarSeparator variant="vertical"/>
    <NavbarDropdown>
        {#snippet element()}
            <div class="rounded-full bg-linear-to-r from-emerald-500 to-emerald-900 flex-center p-2 aspect-square h-10 w-10">VP</div>
        {/snippet}

        <NavbarElement href="/profile"><User size={16}/>Profile</NavbarElement>
        <NavbarSeparator variant="horizontal"/>
        <NavbarElement href="/settings"><Settings size={16}/>Settings</NavbarElement>
    </NavbarDropdown>
</Navbar>

<SideNavbar items={sidebarElements}/>
{@render children()}
