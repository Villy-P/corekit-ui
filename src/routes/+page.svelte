<script>
    import { fbmBackground } from "../lib/actions/fbm.ts";
    import Button from "$lib/components/Button.svelte";
    import { onMount } from "svelte";
    import SEO from "$lib/components/SEO.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import NavbarSeperator from "$lib/components/NavbarSeperator.svelte";
</script>

<Navbar class="bg-black">
    <Button class="h-14 w-14 ml-3 flex-center" href="/" icon>
        <p>Valerius Petrini</p>
    </Button>
    <NavbarSeperator/>
    <p class="text-white">Welcome to the homepage!</p>
    <p class="text-white p-5">This is a simple paragraph.</p>
</Navbar>

<canvas use:fbmBackground={{octaves: 10, warps: 2, scale: 3}} class="w-full h-screen block"></canvas>
<br><br>
<div class="flex w-full items-center justify-center gap-4">
    <Button class="bg-blue-500 hover:bg-blue-600">Normal</Button>
    <Button class="bg-green-500 hover:bg-green-600" pill>Pill</Button>
    <Button class="bg-red-500 hover:bg-red-600" href="https://www.google.com" target="_blank">Link</Button>
    <Button class="bg-purple-500 hover:bg-purple-600" pill href="https://www.google.com" target="_blank">Pill Link</Button>
    <Button class="bg-yellow-500 hover:bg-yellow-600" icon><img class="w-6 h-6" src="/favicon.svg" alt="Favicon"/></Button>
    <Button class="bg-pink-500 hover:bg-pink-600" icon href="https://www.google.com" target="_blank"><img class="w-6 h-6" src="/favicon.svg" alt="Favicon"/></Button>
    <Button class="bg-gray-500 hover:bg-gray-600" pill onclick={() => alert('Button clicked!')}>Onclick event</Button>
</div>

<SEO websiteName="website.com" title="Home" description="Welcome to the homepage of your SvelteKit app!" image="/favicon.png" />