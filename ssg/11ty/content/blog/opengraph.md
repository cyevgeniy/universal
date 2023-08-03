---
title: "Open graph: make links to your website looking good"
date: 2023-08-03
showSiteTitle: false
---

Did you ever thought how it works when you share a link over social
networks and it is rendered as a nice card with a title and picture?
This is all possible due [the open graph protocol](https://ogp.me/).
Social platforms utilise open graph meta tags from you page to display
more information about shared page.
These tags look like this:

```
<meta property="og:title" content="Article title" />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://supersite.com/" />
<meta property="og:image" content="https://supersite.com/img/somepic.webp" />
```

When a page has these meta tags in its `<header>` tag,
social networks read them and create a readable and attractive link preview
instead of a raw URL address.

{% aside 'yellow' %}
The Universal Theme
generates open graph tags automatically for each
of your pages.
{% endaside %}

You can check how a link to your web page will look in different
social networks and messangers via online services, like [this](https://www.opengraph.xyz/) or [this](https://robolly.com/open-graph-preview/).
You can also use [this extension for Chrome](https://chrome.google.com/webstore/detail/localhost-open-graph-chec/gcbnmkhkglonipggglncobhklaegphgn)
to test open graph on a site that is available on localhost.

## How to use open graph in The Universal Theme

1. Set the site's url in the `_meta.js` file:
   ```
   module.exports = {
      ...
      /**
       * This value is used for opengraph URL generation
       */
      siteURL: 'https://the-universal-theme.netlify.app',

      /**
       * Site's locale. Used in og:locale meta tag
       */
      locale: 'en_US'
    }
    ```
2. Add an image with the `image` frontmatter parameter:
   ```
   ---
   title: Cool web page
   date: 2023-08-01
   image: "/img/coolimage.png"
   ---
   ```
3. Add a description with the `description` frontmatter parameter:
   ```
   ---
   title: Cool web page
   date: 2023-08-01
   image: "/img/coolimage.png"
   description: "In this article I'll tell you how to get rich"
   ---
   ```

And that's all, your page is ready to be shared!
