const markdownIt = require("./markdown.js");
const outdent = require('outdent');

function bleed(content, backgroundColor, spaced) {
	const bgClass = `bg-${backgroundColor}`;
	return `<div class="bleed stack ${bgClass} ${
		spaced ? "bleed--spaced" : ""
	}">${content}</div>`;
}

function container(content) {
	const parsedContent = markdownIt.render(outdent.string(content));
	return `<div class="container stack">${parsedContent}</div>`;
}

const colors = ["yellow", "yellow-soft",  "blue", "blue-soft", "pink", "pink-soft"];

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
function card(content, backgroundColor, type, centered) {
	const bgClass = colors.includes(backgroundColor) ? `bg-${backgroundColor}` : "";
	const typeClass = ["shadowed", "outlined"].includes(type)
		? `card--${type}`
		: "";
	const centeredClass = centered ? "card--centered" : undefined;

	const parsedContent = markdownIt.render(outdent.string(content));
	return outdent`<div class="card stack ${bgClass} ${typeClass} ${centeredClass}">${parsedContent}</div>`;
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
