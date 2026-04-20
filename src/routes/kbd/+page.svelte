<script lang="ts">
    import Loader from "$lib/components/Loader.svelte";
    import Select from "$lib/components/Select.svelte";
    import Text from "$lib/components/Text.svelte";
    import Button from "$lib/components/Button.svelte";
    import { colorStyleParts, type ColorStyle } from "$lib/styles/color.js";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import KBD from "$lib/components/KBD.svelte";

    import ChevronUp from "@lucide/svelte/icons/chevron-up";
    import ChevronDown from "@lucide/svelte/icons/chevron-down";
    import ChevronRight from "@lucide/svelte/icons/chevron-right";
    import ChevronLeft from "@lucide/svelte/icons/chevron-left";

    const sizeOptions = [
        { value: "xs", label: "Extra Small" },
        { value: "sm", label: "Small" },
        { value: "md", label: "Medium" },
        { value: "lg", label: "Large" },
        { value: "xl", label: "Extra Large" },
        { value: "2xl", label: "2X Large" },
        { value: "3xl", label: "3X Large" },
        { value: "4xl", label: "4X Large" },
        { value: "5xl", label: "5X Large" },
        { value: "6xl", label: "6X Large" },
        { value: "full", label: "Full" },
        { value: "none", label: "None" }
    ];

    let size: string = $state("md");
    let color: ColorStyle = $state("blue");
</script>

<div class="w-full h-screen flex pt-20 pl-12">
    <div class="w-full mx-8 p-8 bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800">
        <div class="grid grid-cols-24 gap-1.5">

            <KBD class="col-span-1">Esc</KBD>
            <div class="col-span-1"></div>
            <KBD class="col-span-1">F1</KBD>
            <KBD class="col-span-1">F2</KBD>
            <KBD class="col-span-1">F3</KBD>
            <KBD class="col-span-1">F4</KBD>
            <KBD class="col-span-1">F5</KBD>
            <KBD class="col-span-1">F6</KBD>
            <div class="col-span-1"></div>
            <KBD class="col-span-1">F7</KBD>
            <KBD class="col-span-1">F8</KBD>
            <KBD class="col-span-1">F9</KBD>
            <KBD class="col-span-1">F10</KBD>
            <KBD class="col-span-1">F11</KBD>
            <KBD class="col-span-1">F12</KBD>
            <div class="col-span-1"></div>
            <KBD class="col-span-1">prt sc<br>sys rq</KBD>
            <KBD class="col-span-1">scr lk</KBD>
            <KBD class="col-span-1">pause<br>break</KBD>
            <div class="col-span-5"></div>
            
            {#each ['`~', '1!', '2@', '3#', '4$', '5%', '6^', '7&', '8*', '9(', '0)', '-_', '=+'] as key}
                <KBD class="col-span-1">{key[0]}{#snippet subtext()}{key[1]}{/snippet}</KBD>
            {/each}
            <KBD class="col-span-2">←</KBD>
            <div class="col-span-1"></div>
            <KBD class="col-span-1">ins</KBD>
            <KBD class="col-span-1">home</KBD>
            <KBD class="col-span-1">page<br>up</KBD>
            <div class="col-span-1"></div>
            <KBD class="col-span-1">num lk</KBD>
            <KBD class="col-span-1">/</KBD>
            <KBD class="col-span-1">*</KBD>
            <KBD class="col-span-1">-</KBD>

            <KBD class="col-span-2">Tab</KBD>
            {#each 'QWERTYUIOP'.split('') as letter}
                <KBD class="col-span-1">{letter}</KBD>
            {/each}
            <KBD class="col-span-1">[{#snippet subtext()}{"{"}{/snippet}</KBD>
            <KBD class="col-span-1">]{#snippet subtext()}{"}"}{/snippet}</KBD>
            <KBD class="col-span-1">\{#snippet subtext()}|{/snippet}</KBD>
            <div class="col-span-1"></div>
            <KBD class="col-span-1">del</KBD>
            <KBD class="col-span-1">end</KBD>
            <KBD class="col-span-1">page<br>down</KBD>
            <div class="col-span-1"></div>
            <KBD class="col-span-1">7{#snippet subtext()}home{/snippet}</KBD>
            <KBD class="col-span-1">8{#snippet subtext()}˄{/snippet}</KBD>
            <KBD class="col-span-1">9{#snippet subtext()}pg up{/snippet}</KBD>
            <KBD class="col-span-1 row-span-2">+</KBD>

            <KBD class="col-span-2">Caps Lock</KBD>
            {#each 'ASDFGHJKL'.split('') as letter}
                <KBD class="col-span-1">{letter}</KBD>
            {/each}
            <KBD class="col-span-1">;{#snippet subtext()}:{/snippet}</KBD>
            <KBD class="col-span-1">'{#snippet subtext()}"{/snippet}</KBD>
            <KBD class="col-span-2">Enter</KBD>
            <div class="col-span-5"></div>
            <KBD class="col-span-1">4{#snippet subtext()}˂{/snippet}</KBD>
            <KBD class="col-span-1">5</KBD>
            <KBD class="col-span-1">6{#snippet subtext()}˃{/snippet}</KBD>

            <KBD class="col-span-2">Shift</KBD>
            {#each 'ZXCVBNM'.split('') as letter}
                <KBD class="col-span-1">{letter}</KBD>
            {/each}
            <KBD class="col-span-1">,{#snippet subtext()}&lt;{/snippet}</KBD>
            <KBD class="col-span-1">.{#snippet subtext()}&gt;{/snippet}</KBD>
            <KBD class="col-span-1">/{#snippet subtext()}?{/snippet}</KBD>
            <KBD class="col-span-3">Shift</KBD>
            <div class="col-span-2"></div>
            <KBD class="col-span-1">˄</KBD>
            <div class="col-span-2"></div>
            <KBD class="col-span-1">1{#snippet subtext()}end{/snippet}</KBD>
            <KBD class="col-span-1">2{#snippet subtext()}˅{/snippet}</KBD>
            <KBD class="col-span-1">3{#snippet subtext()}pg dn{/snippet}</KBD>
            <KBD class="col-span-1 row-span-2">Enter</KBD>

            <KBD class="col-span-1">Ctrl</KBD>
            <KBD class="col-span-1">⊞</KBD>
            <KBD class="col-span-1">Alt</KBD>
            <KBD class="col-span-8">Space</KBD>
            <KBD class="col-span-1">Alt</KBD>
            <KBD class="col-span-1">Fn</KBD>
            <KBD class="col-span-1">Menu</KBD>
            <KBD class="col-span-1">Ctrl</KBD>
            <div class="col-span-1"></div>
            <KBD class="col-span-1">˂</KBD>
            <KBD class="col-span-1">˅</KBD>
            <KBD class="col-span-1">˃</KBD>
            <div class="col-span-1"></div>
            <KBD class="col-span-2">0{#snippet subtext()}ins{/snippet}</KBD>
            <KBD class="col-span-1">.{#snippet subtext()}del{/snippet}</KBD>
        </div>
    </div>
</div>