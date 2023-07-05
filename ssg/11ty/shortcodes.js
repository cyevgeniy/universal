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

function card(content, backgroundColor, type) {
	const bgClass = colors.includes(backgroundColor) ? `bg-${backgroundColor}` : "";
	const typeClass = ["shadowed", "outlined"].includes(type)
		? `card--${card.type}`
		: "";

	return `<div class="card stack ${bgClass} ${typeClass}}">${content}</div>`;
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
