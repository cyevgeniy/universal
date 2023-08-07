---
title: Card shortcode
---

{% raw %}
```
{% card "pink" %}
![Bender Rodrigez](/img/bender.png)
{% endcard %}
```
{% endraw %}

{% card "pink" %}
![Bender Rodrigez](/img/bender.png)
{% endcard %}

The `card` shortcode  has the form of
{% raw %}
```
{% card color type isCentered %}
```
{% endraw %}

- `color` - card's background color. Possible values are `yellow`, `blue`, `pink`, `yellow-soft`, `blue-soft`, `pink-soft`
- `type` - `outlined` or `shadowed`
- `isCentered` - if true, card's content will be centered

Cards accept markdown as their content:

{% raw %}
```
{% card "blue-soft" "outlined" true %}
## Header

A list inside a card:

- Choose for short description
- Looks nice in cards
- Non-boring
{% endcard %}
```
{% endraw %}

{% card "blue-soft" "outlined" true %}
## Header

A list inside a card:

- Choose for short description
- Looks nice in cards
- Non-boring
{% endcard %}

You can also use another shortcodes inside your cards, like
[button](/docs/shortcode-button), for example.

{% aside "yellow-soft" %}
**PRO TIP**:

Place list's items in text length descending or
ascending  order if you use centered cards.
{% endaside %}

As you may see, essentially cards are just blocks
with some background and content inside. In some cases it's
ok to use them alone, but they work better when they're inside
the [card grid shorcode](/docs/shortcode-card-grid).


## Examples

### Shadowed
{% card "pink" "shadowed" true %}
![Bender Rodrigez](/img/bender.png)
{% endcard %}

### Outlined

{% card "pink" "outlined" true %}
![Bender Rodrigez](/img/bender.png)
{% endcard %}

### Centered

{% raw %}
```
{% card "pink-soft" "outlined" true %}
## Bender rodrigez poster

![Bender Rodrigez](/img/bender.png)

{% button "BUY THIS PRODUCT" "#" "yellow" %}
{% endcard %}
```
{% endraw %}


{% card "pink-soft" "outlined" true %}
## Bender rodrigez poster

![Bender Rodrigez](/img/bender.png)

{% button "BUY THIS PRODUCT" "#" "yellow" %}
{% endcard %}
