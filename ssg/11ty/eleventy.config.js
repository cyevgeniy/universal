const bundlerPlugin = require("@11ty/eleventy-plugin-bundle");
const shortcodes = require("./shortcodes.js")

// Config based on https://github.com/11ty/eleventy-base-blog/blob/main/eleventy.config.js
module.exports = function (eleventyConfig) {

	eleventyConfig.addPlugin(bundlerPlugin);

	// Universal Shortcodes (Adds to Liquid, Nunjucks, JavaScript, Handlebars)
	eleventyConfig.addPairedShortcode(
		"fullbleed",
		shortcodes.bleed
	);

	eleventyConfig.addPairedShortcode("container", shortcodes.container);

	/**
	 * card-grid shortcode is a container for cards.
	 * It automatically places cards and adds spacing between them.
	 */
	eleventyConfig.addPairedShortcode("card-grid", shortcodes.cardGrid);


	/**
	 * card shortcode is a card container.
	 */
	eleventyConfig.addPairedShortcode(
		"card",
		shortcodes.card
	);

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
