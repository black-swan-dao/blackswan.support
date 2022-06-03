<script>
  import has from "lodash/has.js"
  import truncate from "lodash/truncate.js"
  import { toPlainText, urlFor } from "$lib/modules/sanity"
  import { page as pageStore } from "$app/stores"
  export let page = {}
  import {
    BASE_URL,
    DEFAULT_DESCRIPTION,
    DEFAULT_IMAGE,
  } from "$lib/modules/global.js"

  const title = page.title ? page.title : "Black Swan"

  let description = ""
  if (has(page, "content.content")) {
    description = truncate(toPlainText(page.content.content), { length: 160 })
  } else {
    description = DEFAULT_DESCRIPTION
  }

  const url = BASE_URL + $pageStore.url.pathname

  const image = has(page, "mainImage.asset")
    ? urlFor(page.mainImage)
    : DEFAULT_IMAGE
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={url} />
  <meta property="og:url" content={url} />
  <meta property="og:type" content="article" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="image" content={image} />
  <meta property="og:image" content={image} />
  <meta property="twitter:image" content={image} />
  <meta property="og:site_name" content="Platform Labor" />
</svelte:head>
