const bundlerPlugin = require("@11ty/eleventy-plugin-bundle");

// Config based on https://github.com/11ty/eleventy-base-blog/blob/main/eleventy.config.js
module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(bundlerPlugin);

	// Universal Shortcodes (Adds to Liquid, Nunjucks, JavaScript, Handlebars)
	eleventyConfig.addPairedShortcode("fullbleed", function (content, backgroundColor, spaced) {
		const bgClass = `bg-${backgroundColor}`;
		return `<div class="bleed stack ${bgClass} ${spaced ? 'bleed--spaced' : ''}">${content}</div>`;
	});

	eleventyConfig.addPairedShortcode("container", function (content) {
		return `<div class="container stack">${content}</div>`;
	});

	/**
	 * card-grid shortcode is a container for cards.
	 * It automatically places cards and adds spacing between them.
	 */
	eleventyConfig.addPairedShortcode("card-grid", function (content) {
		return `<div class="card-grid card-grid--spaced">${content}</div>`;
	});

	const colors = ["yellow", "blue", "pink"]

	/**
	 * card shortcode is a card container.
	 */
	eleventyConfig.addPairedShortcode("card", function (content, backgroundColor, type) {
		const bgClass = colors.includes(backgroundColor) ? `bg-${backgroundColor}` : '';
		const typeClass = ["shadowed", "outlined"].includes(type) ? `card--${type}`: '';

		return `<div class="card stack ${bgClass} ${typeClass}">${content}</div>`;
	});

	return {
		// These are all optional:
		dir: {
			input: "content", // default: "."
			includes: "../_includes", // default: "_includes"
			data: "../_data", // default: "_data"
			output: "_site",
		},
	};
};
