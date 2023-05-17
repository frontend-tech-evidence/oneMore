/**
 * @author Raul Galindo
 * @description Entidad paquete
 */

export interface CostosPaquete {
    nombre: string
    // implementacion
    costoActivacion: number | string
    costoCapacitacion: number | string
    costoMigracion: number | string
    // base
    costoBaseMensual: number | string
    // usuarios
    costoUsuarioExtra: number | string
    hasPrecioUsuarioExtraVariable: boolean
    costoUsuarioExtraDespuesDeLimite?: number | string
    // timbres
    costoTimbreExtra: number | string
    // razon social
    costoRazonSocial: number | string
    costoUsuarioExtraRazonSocial: number | string
    // soporte
    costoHoraVirtualAdicionalCapacitacion: number | string
    costoUpgradeDeVersion: number | string
    costoCapacitacionUsuarioExtra: number | string
    // regalos
    usuariosGratisIncluidos: number | string
    mesesDeRegaloPorSeleccionUnPagoDeMembresia: number | string
    descuentoPorSeleccionUnPagoDeImplementacion: number | string
    timbresGratisIncluidos: number | string
}

export interface DetallesPaquete {
    //limites
    maxUsuarios: number | string
    maxSucursales: number | string
    maxEmpleados: number | string
    // capacitacion
    diasDeAsesorCapacitacion: number | string
    usuariosIncluidosCapacitacion: number | string
    horasIncluidasCapacitacion: number | string
    horasDisponibleSemanalesCapacitacion: number | string
    // soporte
    tiempoPromedioRespuesta: number | string
    via: string
    horarioAtencion: string
    upTime: number | string
    cantAsesoriasEspecializadas: number | string
    almacenamientoAdicional: number | string
    horasDesarrolloExtras: number | string
    // implementacion
    costoActivacion: number | string
    costoCapacitacion: number | string
    costoMigracion: number | string
    // base
    costoBaseMensual: number | string
    // usuarios
    costoUsuarioExtra: number | string
    hasPrecioUsuarioExtraVariable: boolean
    costoUsuarioExtraDespuesDeLimite?: number | string
    // timbres
    costoTimbreExtra: number | string
    // razon social
    costoRazonSocial: number | string
    costoUsuarioExtraRazonSocial: number | string
    // soporte
    costoHoraVirtualAdicionalCapacitacion: number | string
    costoUpgradeDeVersion: number | string
    costoCapacitacionUsuarioExtra: number | string
    // regalos
    usuariosGratisIncluidos: number | string
    mesesDeRegaloPorSeleccionUnPagoDeMembresia: number | string
    descuentoPorSeleccionUnPagoDeImplementacion: number | string
    timbresGratisIncluidos: number | string
}

export interface AtributosDeCostosDinamicosPaquetes {
    timbresRequeridos: number
    usuariosRequeridos: number
    empleadosAgregados: number
    sucursalesAgregados: number
    // pagos
    isPagoImplementacionMensual: boolean
    isPagoMensualidadMensual: boolean
}
