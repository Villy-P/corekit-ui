<script lang="ts">
    import { Navbar, Button, NavbarElement, NavbarSeparator } from '$lib/index.js';
	import './../lib/styles/layout.css';

	const { children } = $props();
</script>

<Navbar classTop="bg-transparent backdrop-blur-[3px] border-transparent">
    <Button href="/">
        <p>Valerius</p>
    </Button>
    <NavbarSeparator/>
    <NavbarElement href="/button" classTop="hover:bg-transparent">Button</NavbarElement>
</Navbar>
{@render children()}
