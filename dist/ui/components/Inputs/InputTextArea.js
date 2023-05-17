class InputTextArea extends HTMLElement {
    constructor() {
        super();
        const id = this.getAttribute('id');
        const idCapitalize = capitalizeWords(id);
        const labelTexto = this.getAttribute('label');
        const placeholder = this.getAttribute('placeholder');
        // Render HTML
        this.innerHTML = `               
        <div>
            <label for="input${idCapitalize}" class="block text-sm font-semibold leading-6 text-gray-900">${labelTexto}</label>
            <div class="mt-2.5">
                <textarea autocomplete="off" name="input${idCapitalize}" id="input${idCapitalize}" rows="4" placeholder="${placeholder}" class="block w-full rounded-md border bg-white/5 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"></textarea>
            </div>
        </div>
          `;
        function capitalizeWords(text) {
            const words = text.split(' ');
            const capitalizedWords = words.map((word) => {
                const firstLetter = word.charAt(0).toUpperCase();
                const restOfWord = word.slice(1);
                return firstLetter + restOfWord;
            });
            return capitalizedWords.join(' ');
        }
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
    customElements.define('input-textarea', InputTextArea);
}
