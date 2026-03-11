<script lang="ts">
    import { page } from '$app/stores'

    let { measurementId } = $props();

    const ANALYTICS_URL = $derived(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`);

    $effect(() => {
        if (typeof gtag !== 'undefined') {
            gtag('config', 'MEASUREMENT_ID', {
                page_title: document.title,
                page_path: $page.url.pathname,
            })
        }
    })
</script>
  
<svelte:head>
    <script async src={ANALYTICS_URL}></script>
    <script>
        window.dataLayer = window.dataLayer || []
        const MEASUREMENT_ID = "YOUR_MEASUREMENT_ID_HERE";
    
        function gtag() {
            dataLayer.push(arguments)
        }
    
        gtag('js', new Date())
        gtag('config', MEASUREMENT_ID)
    </script>
</svelte:head>