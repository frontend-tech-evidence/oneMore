/**
 * @author Raul Galindo
 * @description Responsabilidad:
 */

import { Divisas } from '../domain/entidades/Divisas'

export function cambiarDeDivisa(
    moneda: Divisas,
    cantidadAConvertir: number
): number {
    return cantidadAConvertir * moneda.precioMoneda
}
