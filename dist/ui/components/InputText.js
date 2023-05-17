class InputText extends HTMLElement {
    constructor() {
        super();
        const id = this.getAttribute('id');
        const idCapitalize = capitalizeWords(id);
        const labelTexto = this.getAttribute('label');
        const placeholder = this.getAttribute('placeholder');
        // Render HTML
        this.innerHTML = `               
        <div>
            <div class="flex flex-row gap-x-1">
                <label for="input${idCapitalize}" class="text-sm font-semibold leading-6 text-gray-900">${labelTexto}</label>
                <span class="text-red-500">*</span>
            </div>

            <div class="mt-1.5">
                <input autocomplete="off" type="text" name="input${idCapitalize}" id="input${idCapitalize}" autocomplete="${id}" placeholder="${placeholder}" class="rounded-md border bg-white/5 w-full px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
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
    customElements.define('input-text', InputText);
}
