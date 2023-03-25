class CustomSVG extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      fetch(this.getAttribute('src'))
        .then(response => response.text())
        .then(text => {
          var _text = text;
          _text = _text.replace("[width]", this.getAttribute("width"));
          _text =_text.replace("[height]", this.getAttribute("height"));
          this.innerHTML = _text;
        });
    }

    onchange() {

    }
  }
  customElements.define('custom-svg', CustomSVG);