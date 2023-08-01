---
title: Fullbleed shortcode
---

Fullbleeds are blocks that occupy full width of the page,
breaking the visual pattern and so grabbing user's attention.

To add a full-bleed block, use the {% raw %}`{% fullbleed %}`{% endraw %}
shortcode. It accepts background color and `spaced` boolean
flag, which adds some paddings to the block:


{% raw %}
```
{% fullbleed "yellow-soft", false %}
{% container %}
    # HELLO
{% endcontainer %}
{% endfullbleed %}
```
{% endraw %}

{% fullbleed "yellow-soft", false %}
{% container %}
    # HELLO
{% endcontainer %}
{% endfullbleed %}

You may have noticed that we were using another shortcode, called `container`.
This container creates a block that is also centered as has the same width
as the content block. Also this shortcode can render markdown inside itself,
so you can write your content as usual:

{% fullbleed "blue-soft", false %}
{% container %}
   # Full bleed demo

    You can use markdown inside container shortcode, and combining
    it with the fullbleed block is very cool.

   ![Bender](/img/bender.png)

   You can insert images, **lists**, cards, everything.
{% endcontainer %}
{% endfullbleed %}

This is the source for the full-bleed block above:

{% raw %}
``` markdown
{% fullbleed "blue-soft", false %}
{% container %}
   # Full bleed demo

    You can use markdown inside container shortcode, and combining
    it with the fullbleed block is very cool.

   ![Bender](/img/bender.png)

   You can insert images, **lists**, cards, everything.
{% endcontainer %}
{% endfullbleed %}
```
{% endraw %}

## Colors

{% fullbleed "blue", false %}
{% container %}
    ### Blue
{% endcontainer %}
{% endfullbleed %}

{% fullbleed "blue-soft", false %}
{% container %}
    ### Blue-soft
{% endcontainer %}
{% endfullbleed %}

{% fullbleed "yellow", false %}
{% container %}
    ### Yellow
{% endcontainer %}
{% endfullbleed %}

{% fullbleed "yellow-soft", false %}
{% container %}
    ### Yellow-soft
{% endcontainer %}
{% endfullbleed %}

{% fullbleed "pink", false %}
{% container %}
    ### Pink
{% endcontainer %}
{% endfullbleed %}

{% fullbleed "pink-soft", false %}
{% container %}
    ### Pink-soft
{% endcontainer %}
{% endfullbleed %}
