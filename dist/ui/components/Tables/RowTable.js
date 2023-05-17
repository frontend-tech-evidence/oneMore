class RowTable extends HTMLElement {
    constructor() {
        super();
        const id = this.getAttribute('id');
        const atributo = this.getAttribute('atributo');
        const thTexto = this.getAttribute('thTexto');
        // Render HTML
        this.innerHTML = `               
        <!-- Row -->
        <table class="mx-10 h-fit w-[114.2rem] border-collapse items-end mx-10" style="scrollbar-width: thin; scrollbar-color: #3b83f6 darkgray;">
    <tbody>
        <tr class="flex w-[114.2rem] justify-center">
            <!-- Titulo -->
            <th class="flex w-[14rem] flex-col justify-center border-x border-b px-4 py-4 ">
                <span class="text-center">                                    
                    ${thTexto}
                </span>
            </th>

            <!-- Grow -->
            <td class="flex w-[20rem] flex-col justify-center border-b border-r px-4 py-4">
                <span id="${atributo}Grow" class="text-center">                              
                </span>
            </td>

            <!-- Institutional -->
            <td class="flex w-[20rem] flex-col justify-center border-b border-r px-4 py-4">
                <span id="${atributo}Institutional" class="text-center">
                </span>
            </td>

            <!-- Manufacturing -->
            <td class="flex w-[20rem] flex-col justify-center border-b border-r px-4 py-4 ">
                <span id="${atributo}Manufacturing" class=" text-center">
                </span>
            </td>

            <!-- Enterprise -->
            <td class="flex w-[20rem] flex-col justify-center border-b border-r px-4 py-4 ">
                <span id="${atributo}Enterprise" class=" text-center">
                </span>
            </td>

            <!-- International Enterprise -->
            <td class="flex w-[20rem] flex-col justify-center border-b border-r px-4 py-4 ">
                <span id="${atributo}InternationalEnterprise" class=" text-center">
                </span>
            </td>
        </tr>
    </tbody>
</table>

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
    customElements.define('row-table', RowTable);
}
