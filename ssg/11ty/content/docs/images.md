---
title: Images
---

You can insert images with the standard markdown
syntax:

```
![alt Text](/img/bender.png)
```

![alt Text](/img/bender.png)

## Figure

To add an image  as a `figure` tag, use
the {% raw %}`{% figure %}`{% endraw %} shortcode. It takes three arguments:
**Image source**, **caption** and *Alt text*:

{% raw %}
```
{% figure "/img/bender.png", "The Bender", "Nice character" %}
```
{% endraw %}

{% figure "/img/bender.png", "The Bender", "Nice character" %}
