class InputSelect extends HTMLElement {
    constructor() {
        super()

        const id = this.getAttribute('id')
        const texto = this.getAttribute('texto')

        // Render HTML
        this.innerHTML = `                                  
          
          `
    }

    /**
     * Runs each time the element is appended to or moved in the DOM
     */
    connectedCallback() {}

    /**
     * Runs when the element is removed from the DOM
     */
    disconnectedCallback() {}
}

if ('customElements' in window) {
    customElements.define('input-select', InputSelect)
}
