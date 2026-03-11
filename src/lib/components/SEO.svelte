<script lang="ts">
    import { page } from '$app/state';

    const DEFAULT_TITLE = "My SvelteKit App";
    const DEFAULT_DESCRIPTION = "Description of your website.";
    const DEFAULT_IMAGE = "/favicon.png";
      
	interface SEOProps {
        websiteName: string;
		title?: string;
		description?: string;
		image?: any;
	}

	let { websiteName, title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION, image = DEFAULT_IMAGE }: SEOProps = $props();

    let fullUrl = $derived(`${websiteName}${page.url.pathname.toString()}`);
</script>
  
<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description}>
    <meta property="og_site_name" content={websiteName}>
    <meta property="og:url" content={fullUrl}>
    <meta property="og:type" content="website">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content={description}>
    <meta property="og:image" content={image}>
  
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content={websiteName}>
    <meta property="twitter:url" content={fullUrl}>
    <meta name="twitter:title" content="{title}">
    <meta name="twitter:description" content={description}>
    <meta name="twitter:image" content={image}>
    {@html `  <script type="application/ld+json">{
     "@context": "https://schema.org",
     "@type": "Website",
     "name": "${title}",
     "url": "${fullUrl}",
     "logo": "${image}"  }</script>`}

    <meta name="google-site-verification" content="F6vDzwDyZfebc9kWIZlhzpsAm5zhanaPkOArdCZdDSU" />
</svelte:head>