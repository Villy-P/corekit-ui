import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'node:path';

export default {
    preprocess: vitePreprocess(),
    kit: undefined,
    alias: {
        $lib: path.resolve('./src/lib'),
        $types: path.resolve('./src/lib/types'),
        $components: path.resolve('./src/lib/components'),
        $styles: path.resolve('./src/lib/styles'),
    }
};