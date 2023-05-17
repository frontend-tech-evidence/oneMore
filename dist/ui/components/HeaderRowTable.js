class RowTable extends HTMLElement {
    constructor() {
        super();
        const id = this.getAttribute('id');
        const thText = this.getAttribute('thText');
        const td1 = this.getAttribute('td1');
        const td2 = this.getAttribute('td2');
        const td3 = this.getAttribute('td3');
        const td4 = this.getAttribute('td4');
        const td5 = this.getAttribute('td5');
        const labelTexto = this.getAttribute('label');
        // Render HTML
        this.innerHTML = `               
        <!-- Row -->
        <table
                    class="mx-10 h-fit w-[114.2rem] border-collapse items-end"
                    style="
                        scrollbar-width: thin;
                        scrollbar-color: #3b83f6 darkgray;
                    "
                >
                    <tbody>
                        <tr
                            class="flex h-fit w-[114.2rem] items-end justify-center"
                        >
                            <!-- Vacio -->
                            <th
                                class="flex w-[14rem] flex-col justify-center p-0"
                            >
                                <span class="border-x border-b px-4 py-4">
                                    ${thText}
                                </span>
                            </th>

                            <!-- Grow -->
                            <td
                                class="flex w-[20rem] flex-col justify-center rounded-t-lg p-0"
                            >
                                <span class="border-b border-r px-4 py-4">
                                ${td1}
                                </span>
                            </td>

                            <!-- Institutional -->
                            <td
                                class="flex w-[20rem] flex-col justify-center rounded-t-lg p-0"
                            >
                                <span class="border-b border-r px-4 py-4">
                                    ${td2}
                                </span>
                            </td>

                            <!-- Manufacturing -->
                            <td
                                class="flex w-[20rem] flex-col justify-center rounded-t-lg p-0"
                            >
                                <span class="border-b border-r px-4 py-4">
                                    ${td3}
                                </span>
                            </td>

                            <!-- Enterprise -->
                            <td
                                class="flex w-[20rem] flex-col justify-center rounded-t-lg p-0"
                            >
                                <span class="border-b border-r px-4 py-4">
                                    ${td4}
                                </span>
                            </td>
                            
                            <!-- International Enterprise -->
                            <td
                                class="flex w-[20rem] flex-col justify-center rounded-t-lg p-0"
                            >
                                <span class="border-b border-r px-4 py-4">
                                    ${td5}
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
