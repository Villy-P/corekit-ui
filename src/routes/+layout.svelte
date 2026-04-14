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

	const { children } = $props();

    const sidebarElements = [
        { href: "/button", label: "Button", icon: MousePointerClick },
        { href: "/card", label: "Card", icon: Square },
        { href: "/input", label: "Input", icon: Signature },
        { href: "/input-file", label: "File Input", icon: File },
        { href: "/progress", label: "Progress", icon: SquareChevronDown },
        { href: "/modal", label: "Modal", icon: Ellipsis },
        { href: "/table", label: "Table", icon: Table },
        { href: "/toast", label: "Toast", icon: CircleAlert }
    ];
</script>

<Navbar>
    <Button href="/">
        <p>Valerius</p>
    </Button>
</Navbar>

<SideNavbar items={sidebarElements}/>
{@render children()}
