<script lang="ts">
    import { page } from '$app/stores'

    let { measurementId } = $props();

    const ANALYTICS_URL = $derived(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`);

    $effect(() => {
        if (typeof gtag !== 'undefined') {
            gtag('config', measurementId, {
                page_title: document.title,
                page_path: $page.url.pathname,
            })
        }
    })
</script>
  
<svelte:head>
    {#if measurementId}
        <script async src={ANALYTICS_URL}></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
        </script>
    {/if}
</svelte:head>