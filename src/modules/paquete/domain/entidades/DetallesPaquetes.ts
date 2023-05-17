/**
 * @author Raul Galindo
 * @description Datos de paquetes
 */

import { DetallesPaquete } from './InterfacePaquete'

export const detallesGrow: DetallesPaquete = {
    // implementacion
    costoActivacion: 9800,
    costoCapacitacion: 9800,
    costoMigracion: 9800,
    // base
    costoBaseMensual: 2999,
    // usuarios
    costoUsuarioExtra: 499,
    hasPrecioUsuarioExtraVariable: false,
    // timbres
    costoTimbreExtra: 1,
    // razon social
    costoRazonSocial: 'Paquetes de 1000',
    costoUsuarioExtraRazonSocial: 199,
    // soporte
    costoHoraVirtualAdicionalCapacitacion: 948,
    costoUpgradeDeVersion: 16421,
    costoCapacitacionUsuarioExtra: 'N/A',
    // regalos
    usuariosGratisIncluidos: 1,
    mesesDeRegaloPorSeleccionUnPagoDeMembresia: 1,
    descuentoPorSeleccionUnPagoDeImplementacion: 10,
    timbresGratisIncluidos: 100,
    //limites
    maxUsuarios: 14,
    maxSucursales: 2,
    maxEmpleados: 29,
    // capacitacion
    diasDeAsesorCapacitacion:
        '25 días de incorporación  con un entrenador especializado',
    usuariosIncluidosCapacitacion: '3  ',
    horasIncluidasCapacitacion: 10,
    horasDisponibleSemanalesCapacitacion: 3,
    // soporte
    tiempoPromedioRespuesta: 'Menos de 24 horas',
    via: 'Email, Whatsapp y Videollamada',
    horarioAtencion: 'Lunes a Viernes de  09:00 AM a 01:00 PM',
    upTime: '99.00%',
    cantAsesoriasEspecializadas: 2,
    almacenamientoAdicional:
        '0,500 USD por GB al mes sobre  20 GB máximo 100 GB',
    horasDesarrolloExtras: 'No incluido',
}

export const detallesInstitutional: DetallesPaquete = {
    // implementacion
    costoActivacion: 19000,
    costoCapacitacion: 19000,
    costoMigracion: 19000,
    // base
    costoBaseMensual: 8990,
    // usuarios
    costoUsuarioExtra: 716,
    hasPrecioUsuarioExtraVariable: false,
    // timbres
    costoTimbreExtra: 1,
    // razon social
    costoRazonSocial: 'Paquetes de 1000',
    costoUsuarioExtraRazonSocial: 199,
    // soporte
    costoHoraVirtualAdicionalCapacitacion: 948,
    costoUpgradeDeVersion: 27600,
    costoCapacitacionUsuarioExtra: 499,
    usuariosGratisIncluidos: 1,
    mesesDeRegaloPorSeleccionUnPagoDeMembresia: 1,
    descuentoPorSeleccionUnPagoDeImplementacion: 10,
    timbresGratisIncluidos: 100,
    // limites
    maxUsuarios: 29,
    maxSucursales: 10,
    maxEmpleados: 99,

    diasDeAsesorCapacitacion:
        '90 días de incorporación  con un entrenador especializado',
    usuariosIncluidosCapacitacion: '10 ',
    horasIncluidasCapacitacion: 25,
    horasDisponibleSemanalesCapacitacion: 5,

    tiempoPromedioRespuesta: '1 a 16 horas',
    via: 'Email, Whatsapp y Videollamada',
    horarioAtencion: 'Lunes a Viernes de  09:00 AM a 07:00 PM',
    upTime: '99.49%',
    cantAsesoriasEspecializadas: 3,
    almacenamientoAdicional:
        '0,500 USD por GB al mes sobre  20 GB máximo 2.5 Terabytes',
    horasDesarrolloExtras: 'Opcional',
}

export const detallesManufacturing: DetallesPaquete = {
    // implementacion
    costoActivacion: 19000,
    costoCapacitacion: 49000,
    costoMigracion: 29000,
    // base
    costoBaseMensual: 14990,
    // usuarios
    costoUsuarioExtra: 829,
    hasPrecioUsuarioExtraVariable: true,
    costoUsuarioExtraDespuesDeLimite: 499,
    // timbres
    costoTimbreExtra: 1,
    // razon social
    costoRazonSocial: 'Paquetes de 1000',
    costoUsuarioExtraRazonSocial: 299,
    // soporte
    costoHoraVirtualAdicionalCapacitacion: 948,
    costoUpgradeDeVersion: 40000,
    costoCapacitacionUsuarioExtra: 924,
    usuariosGratisIncluidos: 1,
    mesesDeRegaloPorSeleccionUnPagoDeMembresia: 1,
    descuentoPorSeleccionUnPagoDeImplementacion: 10,
    timbresGratisIncluidos: 100,
    // limites
    maxUsuarios: 99,
    maxSucursales: 15,
    maxEmpleados: 299,
    // capacitaciones
    diasDeAsesorCapacitacion:
        '90 días de incorporación  con un entrenador especializado',
    usuariosIncluidosCapacitacion: '20 ',
    horasIncluidasCapacitacion: 100,
    horasDisponibleSemanalesCapacitacion: 5,
    // soporte
    tiempoPromedioRespuesta: '30 minutos a 14 horas',
    via: 'Email, Whatsapp y Videollamada',
    horarioAtencion: 'Lunes a Viernes de  09:00 AM a 07:00 PM',
    upTime: '99.49%',
    cantAsesoriasEspecializadas: 4,
    almacenamientoAdicional:
        '0,500 USD por GB al mes sobre  100 MB sin límites',
    horasDesarrolloExtras: 'Opcional',
}

export const detallesEnterprise: DetallesPaquete = {
    // implementacion
    costoActivacion: 449980,
    costoCapacitacion: 449980,
    costoMigracion: 295541,
    // base
    costoBaseMensual: 49990,
    // usuarios
    costoUsuarioExtra: 998,
    hasPrecioUsuarioExtraVariable: true,
    costoUsuarioExtraDespuesDeLimite: 499,
    // timbres
    costoTimbreExtra: 1,
    // razon social
    costoRazonSocial: 'Paquetes de 1000',
    costoUsuarioExtraRazonSocial: 399,
    // soporte
    costoHoraVirtualAdicionalCapacitacion: 948,
    costoUpgradeDeVersion: 1098501,
    costoCapacitacionUsuarioExtra: 924,
    usuariosGratisIncluidos: 1,
    mesesDeRegaloPorSeleccionUnPagoDeMembresia: 1,
    descuentoPorSeleccionUnPagoDeImplementacion: 10,
    timbresGratisIncluidos: 100,
    //
    maxUsuarios: 499,
    maxSucursales: 100,
    maxEmpleados: 999,

    diasDeAsesorCapacitacion:
        'Arquitecto de exito asignado  para garantizar la transformacion',
    usuariosIncluidosCapacitacion: '20 ',
    horasIncluidasCapacitacion: '120 ',
    horasDisponibleSemanalesCapacitacion: '10 ',

    tiempoPromedioRespuesta: '15 minutos a 12 horas',
    via: 'Email, Whatsapp y Videollamada',
    horarioAtencion: 'Lunes a Viernes  24/7 **',
    upTime: '99.49%',
    cantAsesoriasEspecializadas: 6,
    almacenamientoAdicional: '0,500 USD por GB al mes sobre  1 TB sin límites',
    horasDesarrolloExtras: 'Incluido',
}

export const detallesInternationalEnterprise: DetallesPaquete = {
    // implementacion
    costoActivacion: 'Contacta a ventas',
    costoCapacitacion: 'Contacta a ventas',
    costoMigracion: 'Contacta a ventas',
    // base
    costoBaseMensual: 'Contacta a ventas',
    // usuarios
    costoUsuarioExtra: 'Contacta a ventas',
    hasPrecioUsuarioExtraVariable: false,
    // timbres
    costoTimbreExtra: 'Contacta a ventas',
    // razon social
    costoRazonSocial: 'Contacta a ventas',
    costoUsuarioExtraRazonSocial: 'Contacta a ventas',
    // soporte
    costoHoraVirtualAdicionalCapacitacion: 'Contacta a ventas',
    costoUpgradeDeVersion: 'Contacta a ventas',
    costoCapacitacionUsuarioExtra: 'Contacta a ventas',
    usuariosGratisIncluidos: 'Contacte a ventas',
    mesesDeRegaloPorSeleccionUnPagoDeMembresia: 1,
    descuentoPorSeleccionUnPagoDeImplementacion: 10,
    timbresGratisIncluidos: 'Contacte a ventas',
    //
    maxUsuarios: 'Ilimitados',
    maxSucursales: 'Ilimitadas',
    maxEmpleados: 'Ilimitados',

    diasDeAsesorCapacitacion: 'Contacte a ventas para mayor informacion',
    usuariosIncluidosCapacitacion: 'Contacte a ventas',
    horasIncluidasCapacitacion: 'Contacte a ventas',
    horasDisponibleSemanalesCapacitacion:
        'Contacte a ventas para mayor informacion',

    tiempoPromedioRespuesta: '15 minutos a 8 horas',
    via: 'Email, Whatsapp y Videollamada',
    horarioAtencion: 'Lunes a Viernes  24/7 **',
    upTime: '99.68%',
    cantAsesoriasEspecializadas: 'Contacte a ventas',
    almacenamientoAdicional: 'Contacte a ventas para mayor informacion',
    horasDesarrolloExtras: 'Contacte a ventas',
}
