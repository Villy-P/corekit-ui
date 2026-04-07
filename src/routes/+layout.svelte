<script lang="ts">
    import { Navbar, Button, NavbarElement, NavbarSeparator } from '$lib/index.js';
	import './../styles/layout.css';

	const { children } = $props();
</script>

<Navbar>
    <Button href="/">
        <p>Valerius</p>
    </Button>
    <NavbarSeparator/>
    <NavbarElement activeClass="font-semibold" href="/button">Button</NavbarElement>
    <NavbarElement activeClass="font-semibold" href="/card">Card</NavbarElement>
    <NavbarElement activeClass="font-semibold" href="/input">Input</NavbarElement>
</Navbar>
{@render children()}
