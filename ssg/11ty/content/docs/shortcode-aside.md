---
title: Aside shortcode
---

Use the `Aside` shortcode to give to a user *additional information* related
to the content's context.  Don't duplicate content in aside blocks - better use
[quotes](/docs/shortcode-quote) for this.

{% raw %}
```
{% aside 'blue-soft' %}
The Universal Theme
generates open graph tags automatically for each
of your pages.
{% endaside %}
```
{% endraw %}

{% aside 'blue-soft' %}
The Universal Theme
generates open graph tags automatically for each
of your pages.
{% endaside %}

Asides accept background color as the first argument.
Possible values are "yellow", "yellow-soft",  "blue", "blue-soft", "pink" and "pink-soft".
Inside the `aside` shortcode, you can use markdown as well as html markup.