---
title: Button shortcode
---

Buttons in The Universal Theme are implemented as links.

{% raw %}
```
{% button "Click me" "https://google.com" "pink" %}
{% button "Click me" "https://the-universal-theme.netlify.app" "yellow" %}
{% button "Click me" "#" "blue" %}
```

The first parameter is button's text, the second is a link, and the third
parameter is a link color. There're three button colors:
{% endraw %}

{% button "Click me" "https://google.com" "pink" %}
{% button "Click me" "https://the-universal-theme.netlify.app" "yellow" %}
{% button "Click me" "#" "blue" %}

Note that buttons may be used right inside a paragraph of
text, like {% button "This" "#" "blue" %}
