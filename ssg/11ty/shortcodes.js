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
function card(content, backgroundColor, type) {
	const bgClass = colors.includes(backgroundColor) ? `bg-${backgroundColor}` : "";
	const typeClass = ["shadowed", "outlined"].includes(type)
		? `card--${card.type}`
		: "";

	const parsedContent = markdownIt.render(content);
	return outdent`<div class="card stack ${bgClass} ${typeClass}}">${parsedContent}</div>`;
}

function cardGrid(content) {
	return `<div class="card-grid card-grid--spaced">${content}</div>`;
}

module.exports = {
	bleed,
	container,
	card,
	cardGrid
};
