import FilmContainer from "./FilmContainer.js";
const $template = document.createElement("template");
$template.innerHTML = `<div class="film-list"></div>`;

export default class FilmList extends HTMLElement {
	constructor() {
		super();
		this.appendChild($template.content.cloneNode(true));
		this.$list = this.querySelector(".film-list");
	}

	static get observedAttributes() {
		return ["films"];
	}

	attributeChangedCallback(attrName, oldValue, newValue) {
		if (attrName == "films") {
			let data = JSON.parse(newValue);
			for (let filmData of data) {
				let $filmContainer = new FilmContainer();
				$filmContainer.setAttribute("id", filmData.id);
				$filmContainer.setAttribute("originalName", filmData.originalName);
				$filmContainer.setAttribute("name", filmData.name);
				$filmContainer.setAttribute("image", filmData.image);
				$filmContainer.setAttribute("duration", filmData.duration);
				$filmContainer.setAttribute("type", filmData.type);
				this.$list.appendChild($filmContainer);
			}
		}
	}
}
window.customElements.define("film-list", FilmList);
