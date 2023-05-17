class HeadTable extends HTMLElement {
    constructor() {
        super();
        // Render HTML
        this.innerHTML = `               
         <table class="h-fit w-[114.2rem] border-collapse items-end mx-10" style="
                        scrollbar-width: thin;
                        scrollbar-color: #3b83f6 darkgray;
                    ">
                <tbody>
                    <!-- Cards Paquetes -->
                    <tr class="flex h-fit w-[114.2rem] items-end justify-center">
                        <!-- Vacio -->
                        <th class="h-[21.5rem] w-[14rem] border-r border-b p-0">
                        </th>

                        <!-- Grow -->
                        <th class="flex flex-col justify-center rounded-t-lg p-0">
                            <paquete-card id="grow" top="false"></paquete-card>
                        </th>

                        <!-- Institutional -->
                        <th class="flex flex-col justify-center rounded-t-lg p-0">
                            <paquete-card id="institutional" top="true"></paquete-card>
                        </th>

                        <!-- Manufacturing -->
                        <th class="flex flex-col justify-center rounded-t-lg p-0">
                            <paquete-card id="manufacturing" top="false"></paquete-card>
                        </th>

                        <!-- Enterprise -->
                        <th class="flex flex-col justify-center rounded-t-lg p-0">
                            <paquete-card id="enterprise" top="false"></paquete-card>
                        </th>

                        <!-- International Enterprise -->
                        <th
                            class="flex h-[21.5rem] w-[20rem] flex-col justify-center border-r border-y border-gray-900/10 p-0">
                            <div class="flex flex-col justify-center gap-y-6">
                                <!-- Header -->
                                <div class="flex flex-col items-center gap-y-1 px-4">
                                    <img class="w-10" src="/src/assets/evidence-logos/international enterprise-icon.svg"
                                        alt="Icono de logo International Enterprise" />

                                    <span
                                        class="flex items-center justify-center gap-x-1 text-center text-lg text-sm font-semibold leading-6 text-gray-900">
                                        International Enterprise</span>
                                </div>

                                <!-- Precios -->
                                <div class="flex flex-col items-center gap-y-1 px-4">
                                    <!-- Costo inicial -->
                                    <div class="flex flex-col items-center justify-center gap-y-4 text-gray-900">
                                        <span class="text-[1.5rem] font-bold leading-6 text-black">¿Te interesa este
                                            paquete?</span>

                                        <span class="w-[13rem] text-xs font-semibold leading-6 text-black">Contactanos
                                            para
                                            obtener más
                                            información sobre este
                                            paquete</span>

                                        <!-- CTA -->
                                        <div class="mt-3 flex flex-col gap-y-2 text-sm font-semibold">
                                            <a href="http://127.0.0.1:8000/contacto"
                                                class="flex items-center justify-center gap-x-0.5 rounded-full bg-blue-500 px-8 py-2 text-white">Contactar
                                                Ahora
                                                <span> &rarr;</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </th>
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
    customElements.define('head-table', HeadTable);
}
