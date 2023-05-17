/**
 * @author Raul Galindo
 * @description Responsabilidad: Imprimir los valores en el DOM de los paquetes
 */
function obtenerElementosDelDom(selector) {
    return document.querySelectorAll(selector);
}
function obtenerElementoDelDomConId(selector) {
    return document.getElementById(selector);
}
function actualizarTextContent(elemento, texto) {
    elemento.textContent = texto;
}
// Hacer que solo sea uno, refactorizar para que se pueda con todos los paquetes
export function printDetallePaquete(DetallesPaquetes, idPaquete) {
    for (const detalle in DetallesPaquetes) {
        const elemento = obtenerElementoDelDomConId(`${detalle}${idPaquete}`);
        if (elemento) {
            actualizarTextContent(elemento, DetallesPaquetes[detalle]);
        }
    }
}
