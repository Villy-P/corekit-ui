<script lang="ts">
    import { fbmBackground } from "../lib/actions/fbm.ts";
    import Button from "$lib/components/Button.svelte";
    import { onMount } from "svelte";
    import SEO from "$lib/components/SEO.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import NavbarSeperator from "$lib/components/NavbarSeparator.svelte";
    import Typewriter from "$lib/components/Typewriter.svelte";
    import type { TypewriterAction } from "$lib/types/Typewriter.d.ts";
    import NavbarElement from "$lib/components/NavbarElement.svelte";
    import FloatingInput from "$lib/components/FloatingInput.svelte";

    let arrayOfValues = ["Hello", "World", "Svelte", "Kit", "Typewriter", "Effect"];

    function getNextWord() {
        const value = arrayOfValues[0];
        arrayOfValues.push(arrayOfValues.shift()!);
        return value;
    }

    let actions: TypewriterAction[] = [
        { type: "write", value: "I'm a software developer using tools like ", minspeed: 50, maxspeed: 100 },
        { type: "write", value: () => getNextWord(), color: () => "red", minspeed: 50, maxspeed: 100, label: "language1" },
        { type: "write", value: ", ", minspeed: 50, maxspeed: 100 },
        { type: "write", value: () => getNextWord(), color: () => "blue", minspeed: 50, maxspeed: 100 },
        { type: "write", value: ", and ", minspeed: 50, maxspeed: 100 },
        { type: "write", value: () => getNextWord(), color: () => "green", minspeed: 50, maxspeed: 100 },
        { type: "pause", duration: 3000 },
        { type: "delete", to: "language1", minspeed: 50, maxspeed: 100 },
        { type: "jump", position: "language1" }
    ];

</script>

<Navbar class="bg-black" classTop="bg-transparent backdrop-blur-[3px] bg-none">
    <Button size={14} class="ml-3" href="/" icon>
        <p>Valerius</p>
    </Button>
    <NavbarSeperator/>
    <NavbarElement class="hover:bg-gray-950" classTop="hover:bg-transparent">Welcome to the homepage!</NavbarElement>
    <NavbarElement class="hover:bg-gray-950" classTop="hover:bg-transparent">This is a simple paragraph.</NavbarElement>
</Navbar>

<canvas use:fbmBackground={{octaves: 10, warps: 2, scale: 3}} class="w-full h-screen block"></canvas>
<br><br>
<div class="w-full gap-4 flex-center">
    <FloatingInput validInputRegex={/^[A-Za-z\s]+$/}>First Name</FloatingInput>
    <Button color="blue">Normal</Button>
    <Button color="lightgreen" pill>Pill</Button>
    <Button color="red" href="https://www.google.com" target="_blank">Link</Button>
    <Button color="purple" pill href="https://www.google.com" target="_blank">Pill Link</Button>
    <Button color="yellow" icon><img class="w-6 h-6" src="/favicon.svg" alt="Favicon"/></Button>
    <Button color="pink" icon href="https://www.google.com" target="_blank"><img class="w-6 h-6" src="/favicon.svg" alt="Favicon"/></Button>
    <Button color="gray" pill onclick={() => alert('Button clicked!')}>Onclick event</Button>
</div>

<br><br><br>
<Typewriter {actions} />

<SEO websiteName="website.com" title="Home" description="Welcome to the homepage of your SvelteKit app!" image="/favicon.png" />