const $template = document.createElement("template");
$template.innerHTML = `
    <div class="film-container">
        <div class="film-image">
            <div class="film-type"></div>
        </div>
        <div class="film-info">
            <div class="film-originalName">KẺ VÔ DANH</div>
            <div class="film-name"></div>
            <div class="film-duration"></div>
        </div>
    </div>
`;

export default class FilmContainer extends HTMLElement {
	constructor() {
		super();
		this.appendChild($template.content.cloneNode(true));
		this.$originalName = this.querySelector(".film-originalName");
		this.$name = this.querySelector(".film-name");
		this.$duration = this.querySelector(".film-duration");
		this.$image = this.querySelector(".film-image");
		this.$type = this.querySelector(".film-type");
	}

	// Định nghĩa thuộc tính cho thẻ
	static get observedAttributes() {
		return ["originalName", "name", "duration", "image", "type"];
	}

	// Chạy khi giá trị của thuộc tính được định nghĩa ở trên thay đổi
	attributeChangedCallback(attrName, oldValue, newValue) {
		if (attrName == "originalName") {
			this.$originalName.innerHTML = newValue;
		} else if (attrName == "name") {
			this.$name.innerHTML = newValue;
		} else if (attrName == "duration") {
			this.$duration.innerHTML = newValue;
		} else if (attrName == "image") {
			this.$image.style.backgroundImage = `url('${newValue}')`;
		} else if (attrName == "type") {
			this.$type.innerHTML = newValue;
		}
	}
}
window.customElements.define("film-container", FilmContainer);
