---
layout: layouts/base-centered.njk
eleventyNavigation:
  key: Home
  order: 1
---

It's hard to find a theme that will fit all your needs, especially
for static site generator like 11ty. With the Universal theme,
you can easily create a site for your needs, **or use it as a starter template**.


{% fullbleed "pink-soft", true %}
{% container %}
	## Welcome the Universal theme

	- Fast and easy to use
	- two
	- three
{% endcontainer %}
{% endfullbleed %}


> This is some blockquote
> another blockquote
> And another blockquote

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{% fullbleed "blue", true %}
{% container %}

<h2> This is great that I can use it in the full-bleed </h2>
<p> I also like everything </p>
{% endcontainer %}

{% endfullbleed %}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{% card-grid %}
	{% card "yellow" "outlined" true %}
		<h2> Buy fresh version!! </h2>
		<p> Pick our solution, and you won't miss your
			current theme!
		</p>
		<img src="https://i.pinimg.com/originals/00/d1/a4/00d1a42f05c2d02cf29bee4b6a7ce614.jpg">
		<p> Buy our product <strong>NOW</strong> and get 10% discont <strong>forever</strong></p>
	{% endcard  %}
	{% card "blue" "outlined" %}
		<h2> Benefits of Universal theme </h2>
		<ul>
			<li> Looks nice </li>
			<li> Blazingly fast </li>
			<li> Responsive </li>
		</ul>

		<ol>
			<li> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</li>

			</ol>
	{% endcard %}
	{% card "pink" "shadowed" true %}

		## Hi there, this is a rendered card, written in markdown!
	    fasdf

		**We also have lists**:

		- Works with 11ty, hugo, hexo and jekyll
		- Css bundle size is **very small**
		- Clean
	{% endcard %}
{% endcard-grid %}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


<figure>
  <img src="https://i.pinimg.com/originals/00/d1/a4/00d1a42f05c2d02cf29bee4b6a7ce614.jpg" alt="The beautiful MDN logo." />
  <figcaption>MDN Logo</figcaption>
</figure>

{% figure "https://i.pinimg.com/originals/00/d1/a4/00d1a42f05c2d02cf29bee4b6a7ce614.jpg" "The beautiful picture", "The beautiful picture alternate" %}


And this is some code:

```
function print() {
	console.log("hello, World")
}
```

And this is a link to [Google search engine](https://vk.com)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{% fullbleed "pink-soft" true %}
	{% card-grid %}
		{% card "blue-soft" "shadowed" true %}
			![some image](https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Glenn_Quagmire.png/220px-Glenn_Quagmire.png)

			If you want to use an image inside centered card, you should write card's content
			in HTML, because markdown wraps images in p tags.

			### Benefits

			- Only useful shortcodes
			- Install and start use
		{% endcard %}
		{% card "yellow-soft" "shadowed"  %}
			### Bonuses

			- Tips and trics for usage

			**It's not just a theme for 11ty**
		{% endcard %}
		{% card "blue-soft" "shadowed" %}
			### Cards shortcodes

			**I Really love cards, what about you?**
		{% endcard %}
	{% endcard-grid %}
{% endfullbleed %}
