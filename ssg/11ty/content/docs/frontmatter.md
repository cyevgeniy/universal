---
title: Frontmatter variables
---

For each page you can set these variables in the
frontmatter:

- `title` - The main heading of the page.
  This text will be rendered as the `<h1>` tag
- `eleventyNavigation` - allows to add the page
  to the navigation menu. [There is a separate page
    for it.](/docs/navigation)
- `showSiteTitle` - if true, hides the site title. This option
  is useful if you want to minimize distraction of a visitor
  from the content
- `date` - the publication date. This date is shown after the post's title
  in a blog posts list (`/blog` and `/blog/all` routes).
  Note that you can disable publication date
  displaying with `showPostDate` variable in the `_meta.js` file.
- `toc` - if true, shows a table of content at the beginning of a page
- `description` - short description of a page. Used for [open graph's](/blog/opengraph) description
  tag.
- `image` - open graph's thumbnail image
