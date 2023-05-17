/**
 * @author Raul Galindo
 * @description Datos de paquetes
 */

import { CostosPaquete } from './InterfacePaquete'

export const costosGrow: CostosPaquete = {
    nombre: 'Grow',
    // implementacion
    costoActivacion: 9800,
    costoCapacitacion: 9800,
    costoMigracion: 9800,
    // base
    costoBaseMensual: 2990,
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
    usuariosGratisIncluidos: 1,
    mesesDeRegaloPorSeleccionUnPagoDeMembresia: 1,
    descuentoPorSeleccionUnPagoDeImplementacion: 10,
    timbresGratisIncluidos: 100,
}

export const costosInstitutional: CostosPaquete = {
    nombre: 'Institutional',
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
}

export const costosManufacturing: CostosPaquete = {
    nombre: 'Manufacturing',
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
}

export const costosEnterprise: CostosPaquete = {
    nombre: 'Enterprise',
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
}

export const costosInternationalEnterprise: CostosPaquete = {
    nombre: 'International Enterprise',
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
}
