---
title: Content. Blog
---

All blog posts are located in the `content/blog` directory and accessible
through the `/blog` URL.

The minimum frontmatter for a blog post should include a `title` parameter:

```
---
title: Content. Blog
---
```

## Blog posts order

Besides title, it's **highly recommended** to add a `date` to the
frontmatter:

``` markdown
---
title: Content.Blog
date: 2023-01-02
---
```

This is highly recommended because posts are ordered by
the date that was set in the frontmatter. If it's omitted,
file's creation date will be used instead.


## How to exclude a post from the list

If you want to exclude a post from the posts list, add
`excludeFromCollections: true` to the frontmatter.

## How to hide the site's title on some blog post?

Add  `showSiteTitle: false` to the post's frontmatter.

## Limit blog posts for the /blog URL

When a user click on the "blog" navigation menu, he'll see
a `postsCount` last posts and a button that navigates to the
full list. You can set `postsCount` in the `_data/meta.js` file.

## Hide publish dates in the posts list

Set `showPostDate: true` in the `_data/meta.js` file.
