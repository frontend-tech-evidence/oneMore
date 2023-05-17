/**
 * @author Raul Galindo
 * @description Responsabilidad: Retornar los costos relacionado con un paquete en especifico.
 */

import { CostosPaquete } from '../domain/entidades/InterfacePaquete'
import { AtributosDeCostosDinamicosPaquetes } from '../domain/entidades/InterfacePaquete'

export function calcularCostoImplementacion(
    costoActivacion,
    costoMigracion,
    costoCapacitacion,
    descuento,
    isPagoMensual = false
) {
    const costoTotal = costoActivacion + costoMigracion + costoCapacitacion
    const descuentoEnDecimal = descuento / 100
    const numeroMeses = 12
    if (isPagoMensual) {
        return costoTotal / numeroMeses
    }
    return costoTotal * (1 - descuentoEnDecimal)
}

export function calcularCostoMembresia(
    costoBaseMensual,
    mesesDeRegalo,
    isPagoMensual = false
) {
    const mesesDelAño = 12
    if (isPagoMensual) {
        return costoBaseMensual
    }
    return costoBaseMensual * (mesesDelAño - mesesDeRegalo)
}

export function calcularCostoFacturacionAnual(costoBaseMensual) {
    const mesesDelAño = 12
    return costoBaseMensual * mesesDelAño
}

export function calcularCostoTimbres(
    timbresRequeridos,
    timbresGratis,
    precioTimbreExtra
) {
    let costoTotal = 0
    if (timbresRequeridos > timbresGratis) {
        costoTotal = (timbresRequeridos - timbresGratis) * precioTimbreExtra
        return costoTotal
    }
    return costoTotal
}

export function calcularCostoUsuario(
    cantidadUsuariosRequeridos,
    cantidadGratisIncluidos,
    costoUsuarioExtra,
    hasPrecioUsuarioExtraVariable = false,
    costoUsuarioExtraDespuesDeLimite?,
    cantidadDeUsuariosSinDescuento?
) {
    if (hasPrecioUsuarioExtraVariable) {
        if (cantidadUsuariosRequeridos > cantidadDeUsuariosSinDescuento) {
            const cantidadAntesDelRango =
                cantidadDeUsuariosSinDescuento - cantidadGratisIncluidos
            const cantidadDespuesDelRango =
                cantidadUsuariosRequeridos - cantidadDeUsuariosSinDescuento
            const costoDespuesDelLimite =
                cantidadDespuesDelRango * costoUsuarioExtraDespuesDeLimite
            const costoAntesDelLimite =
                cantidadAntesDelRango * costoUsuarioExtra
            return costoDespuesDelLimite + costoAntesDelLimite
        }
    }
    const costo = Math.abs(
        (cantidadGratisIncluidos - cantidadUsuariosRequeridos) *
            costoUsuarioExtra
    )
    return costo
}

export function calcularCostoPrimerAno(
    costoImplementacion: number,
    costoMembresia: number,
    costoTimbres: number,
    costoUsuarios: number
): number {
    return Math.round(
        costoImplementacion + costoMembresia + costoTimbres + costoUsuarios
    )
}

export function calcularCostoSegundoAno(
    costoMembresia,
    costoTimbres,
    costoUsuarios
) {
    return Math.round(costoMembresia + costoTimbres + costoUsuarios)
}

export function getAllCostosPaquete(
    atributosDeCostosDinamicosPaquetes: AtributosDeCostosDinamicosPaquetes,
    paquete: CostosPaquete
) {
    const costoImplementacion = calcularCostoImplementacion(
        paquete.costoActivacion,
        paquete.costoMigracion,
        paquete.costoCapacitacion,
        paquete.descuentoPorSeleccionUnPagoDeImplementacion,
        atributosDeCostosDinamicosPaquetes.isPagoImplementacionMensual
    )

    const costoMembresia = calcularCostoMembresia(
        paquete.costoBaseMensual,
        paquete.mesesDeRegaloPorSeleccionUnPagoDeMembresia,
        atributosDeCostosDinamicosPaquetes.isPagoMensualidadMensual
    )

    const costoFacturacionAnual = calcularCostoFacturacionAnual(
        paquete.costoBaseMensual
    )

    const costoTimbres = calcularCostoTimbres(
        atributosDeCostosDinamicosPaquetes.timbresRequeridos,
        paquete.timbresGratisIncluidos,
        paquete.costoTimbreExtra
    )

    const costoUsuarios = calcularCostoUsuario(
        atributosDeCostosDinamicosPaquetes.usuariosRequeridos,
        paquete.usuariosGratisIncluidos,
        paquete.costoUsuarioExtra,
        paquete.hasPrecioUsuarioExtraVariable
    )

    const costoPrimerAno = calcularCostoPrimerAno(
        costoImplementacion,
        costoMembresia,
        costoTimbres,
        costoUsuarios
    )

    const costoSegundoAno = calcularCostoSegundoAno(
        costoMembresia,
        costoTimbres,
        costoUsuarios
    )

    const costosPaquete = {
        costoImplementacion,
        costoMembresia,
        costoTimbres,
        costoUsuarios,
        costoFacturacionAnual,
        costoPrimerAno,
        costoSegundoAno,
    }

    return costosPaquete
}

export function getAllCostosPaquetes(
    atributosDeCostosDinamicosPaquetes: AtributosDeCostosDinamicosPaquetes,
    ...paquetes: CostosPaquete[]
) {
    let costosPaquetes = {}

    for (const paquete of paquetes) {
        const costoImplementacion = calcularCostoImplementacion(
            paquete.costoActivacion,
            paquete.costoMigracion,
            paquete.costoCapacitacion,
            paquete.descuentoPorSeleccionUnPagoDeImplementacion,
            atributosDeCostosDinamicosPaquetes.isPagoImplementacionMensual
        )

        const costoMembresia = calcularCostoMembresia(
            paquete.costoBaseMensual,
            paquete.mesesDeRegaloPorSeleccionUnPagoDeMembresia,
            atributosDeCostosDinamicosPaquetes.isPagoMensualidadMensual
        )

        const costoFacturacionAnual = calcularCostoFacturacionAnual(
            paquete.costoBaseMensual
        )

        const costoTimbres = calcularCostoTimbres(
            atributosDeCostosDinamicosPaquetes.timbresRequeridos,
            paquete.timbresGratisIncluidos,
            paquete.costoTimbreExtra
        )

        const costoUsuarios = calcularCostoUsuario(
            atributosDeCostosDinamicosPaquetes.usuariosRequeridos,
            paquete.usuariosGratisIncluidos,
            paquete.costoUsuarioExtra,
            paquete.hasPrecioUsuarioExtraVariable
        )

        const costoPrimerAno = calcularCostoPrimerAno(
            costoImplementacion,
            costoMembresia,
            costoTimbres,
            costoUsuarios
        )

        const costoSegundoAno = calcularCostoSegundoAno(
            costoMembresia,
            costoTimbres,
            costoUsuarios
        )

        const costosPaquete = {
            costoImplementacion,
            costoMembresia,
            costoFacturacionAnual,
            costoPrimerAno,
            costoSegundoAno,
        }

        costosPaquetes[paquete.nombre] = costosPaquete
    }

    return costosPaquetes
}
