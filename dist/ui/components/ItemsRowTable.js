class ItemRowTable extends HTMLElement {
    constructor() {
        super();
        const id = this.getAttribute('id');
        const labelTexto = this.getAttribute('label');
        // Render HTML
        this.innerHTML = `               
            <span class="py-4 px-4 border-x border-b">
          item row
        </span> 
          `;
    }
    /**
     * Runs each time the element is appended to or moved in the DOM
     */
    connectedCallback() { }
    /**
     * Runs when the element is removed from the DOM
     */
    disconnectedCallback() { }
}
if ('customElements' in window) {
    customElements.define('item-row-table', ItemRowTable);
}
