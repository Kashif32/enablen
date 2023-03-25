class IncludeHtml extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    fetch(this.getAttribute('src'))
      .then(response => response.text())
      .then(text => {
        var _text = text;
        const tempEl = document.createElement("div");
        tempEl.innerHTML = _text
        if (tempEl.firstElementChild != null) {
          for (var i=0; i<this.classList; i++) {
            tempEl.firstElementChild.classList.add(this.classList[i])
          }
          this.replaceWith(...tempEl.children)
        }
      });
  }

  onchange() {

  }
}
customElements.define('include-html', IncludeHtml);