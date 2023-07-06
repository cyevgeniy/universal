const markdownIt = require("./markdown.js");
const outdent = require('outdent');

function bleed(content, backgroundColor, spaced) {
	const bgClass = `bg-${backgroundColor}`;
	return `<div class="bleed stack ${bgClass} ${
		spaced ? "bleed--spaced" : ""
	}">${content}</div>`;
}

function container(content) {
	return `<div class="container stack">${content}</div>`;
}

const colors = ["yellow", "blue", "pink"];

// Credits to Aleksandr Hovhannisyan for his great article on how
// to parse markdown inside 11ty's shortcodes
//
// https://www.aleksandrhovhannisyan.com/blog/custom-markdown-components-in-11ty/
// 
// Also, markdown indentation inside a shortcode should be consistent - 
// you should not mix tabs vs spaces and use different indentation sizes.
// 
// If you get any unexpected rendering behavior, just remove all indentations!
//
function card(content, backgroundColor, type) {
	const bgClass = colors.includes(backgroundColor) ? `bg-${backgroundColor}` : "";
	const typeClass = ["shadowed", "outlined"].includes(type)
		? `card--${type}`
		: "";

	const parsedContent = markdownIt.render(outdent.string(content));
	return outdent`<div class="card stack ${bgClass} ${typeClass}">${parsedContent}</div>`;
}

function cardGrid(content) {
	return `<div class="card-grid card-grid--spaced">${content}</div>`;
}

function figure(src, caption, alt) {
	return `<figure><img src="${src}" alt="${alt}"><figcaption>${caption}</figcaption> </figure>`
}

module.exports = {
	bleed,
	container,
	card,
	cardGrid,
	figure
};
