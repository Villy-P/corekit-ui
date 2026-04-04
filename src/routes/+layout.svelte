<script lang="ts">
    import { Navbar, Button, NavbarElement, NavbarSeparator } from '$lib/index.js';
	import './../lib/styles/layout.css';

	const { children } = $props();
</script>

<Navbar>
    <Button href="/">
        <p>Valerius</p>
    </Button>
    <NavbarSeparator/>
    <NavbarElement href="/button">Button</NavbarElement>
</Navbar>
{@render children()}
