/**
 * @author Raul Galindo
 * @description Test for
 */

function calcularCostoImplementacion(
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

function calcularCostoMembresia(
    costoBaseMensual,
    mesesDeRegalo,
    isPagoMensual = false,
    isFirstYear = true
) {
    const mesesDelAño = 12
    if (isPagoMensual) {
        return costoBaseMensual
    }

    if (isFirstYear === true && isPagoMensual === false) {
        return costoBaseMensual * (mesesDelAño - mesesDeRegalo)
    }

    if (isFirstYear === false && isPagoMensual === false) {
        return costoBaseMensual * mesesDelAño
    }

    return costoBaseMensual
}

function calcularCostoTimbres(
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

function calcularCostoFacturacionAnual(costoBaseMensual) {
    const mesesDelAño = 12
    return costoBaseMensual * mesesDelAño
}

function calcularCostoUsuario(
    cantidadUsuariosRequeridos,
    cantidadGratisIncluidos,
    costoUsuarioExtra,
    hasPrecioUsuarioExtraVariable = false,
    costoUsuarioExtraDespuesDeLimite,
    cantidadDeUsuariosAntesDelDescuento
) {
    if (hasPrecioUsuarioExtraVariable) {
        if (cantidadUsuariosRequeridos > cantidadDeUsuariosAntesDelDescuento) {
            const cantidadAntesDelRango =
                cantidadDeUsuariosAntesDelDescuento - cantidadGratisIncluidos
            const cantidadDespuesDelRango =
                cantidadUsuariosRequeridos - cantidadDeUsuariosAntesDelDescuento
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

function calcularCostoPrimerAno(
    costoImplementacion,
    costoMembresia,
    costoTimbres,
    costoUsuarios
) {
    return Math.round(
        costoImplementacion + costoMembresia + costoTimbres + costoUsuarios
    )
}

function calcularCostoSegundoAno(costoMembresia, costoTimbres, costoUsuarios) {
    return Math.round(costoMembresia + costoTimbres + costoUsuarios)
}

describe('Calcular costos de paquetes', () => {
    describe('🎨 Paquete Grow', () => {
        describe('• Implementacion', () => {
            it('Costo Implementacion anual', () => {
                expect(
                    calcularCostoImplementacion(9800, 9800, 9800, 10, false)
                ).toBe(26460)
            })

            it('Costo Implementacion mensual', () => {
                expect(
                    calcularCostoImplementacion(9800, 9800, 9800, 10, true)
                ).toBe(2450)
            })
        })

        describe('• Membresia', () => {
            it('Costo membresia mensual', () => {
                expect(calcularCostoMembresia(2990, 1, true)).toBe(2990)
            })

            it('Costo membresia anual', () => {
                expect(calcularCostoMembresia(2990, 1, false)).toBe(32890)
            })
        })

        describe('• Timbres', () => {
            it('Costo timbres', () => {
                expect(calcularCostoTimbres(100, 100, 1)).toBe(0)
            })

            it('Costo timbres extras', () => {
                expect(calcularCostoTimbres(101, 100, 1)).toBe(1)
            })
        })

        describe('• Facturacion', () => {
            it('Costo facturacion anual', () => {
                expect(calcularCostoFacturacionAnual(2990)).toBe(35880)
            })
        })

        describe('• Usuario', () => {
            it('Costo 1 usuario', () => {
                expect(calcularCostoUsuario(1, 1, 499, false, 499, 1)).toBe(0)
            })

            it('Costo 2 usuarios', () => {
                expect(calcularCostoUsuario(2, 1, 499, false, 499, 1)).toBe(499)
            })
        })

        describe('• Primer año', () => {
            it('Costo primer año con membresia anual, implementacion anual, 100 timbres, 1 usuario', () => {
                expect(
                    calcularCostoPrimerAno(
                        calcularCostoImplementacion(
                            9800,
                            9800,
                            9800,
                            10,
                            false
                        ),
                        calcularCostoMembresia(2990, 1, false),
                        calcularCostoTimbres(100, 100, 1),
                        calcularCostoUsuario(1, 1, 499, false, 499, 1)
                    )
                ).toBe(59350)
            })

            it('Costo primer año con membresia mensual, implementacion anual, 100 timbres, 1 usuario', () => {
                expect(
                    calcularCostoPrimerAno(
                        calcularCostoImplementacion(
                            9800,
                            9800,
                            9800,
                            10,
                            false
                        ),
                        calcularCostoMembresia(2990, 1, true),
                        calcularCostoTimbres(100, 100, 1),
                        calcularCostoUsuario(1, 1, 499, false, 499, 1)
                    )
                ).toBe(29450)
            })

            it('Costo primer año con membresia anual, implementacion mensual, 100 timbres, 1 usuario', () => {
                expect(
                    calcularCostoPrimerAno(
                        calcularCostoImplementacion(9800, 9800, 9800, 10, true),
                        calcularCostoMembresia(2990, 1, false),
                        calcularCostoTimbres(100, 100, 1),
                        calcularCostoUsuario(1, 1, 499, false, 499, 1)
                    )
                ).toBe(35340)
            })
        })

        describe('• Segundo año', () => {
            it('Costo segundo año con 1 usuario, 100 timbres, membresia mensual', () => {
                expect(
                    calcularCostoSegundoAno(
                        calcularCostoMembresia(2990, 1, true),
                        calcularCostoTimbres(100, 100, 1),
                        calcularCostoUsuario(1, 1, 499, false, 499, 1)
                    )
                ).toBe(2990)
            })

            it('Costo segundo año con 1 usuario, 100 timbres, membresia anual', () => {
                expect(
                    calcularCostoSegundoAno(
                        calcularCostoMembresia(2990, 1, false, false),
                        calcularCostoTimbres(100, 100, 1),
                        calcularCostoUsuario(1, 1, 499, false, 499, 1)
                    )
                ).toBe(35880)
            })
        })
    })

    describe('🎨 Paquete Manufacturing', () => {
        describe('• Usuario', () => {
            it('Costo 1 usuario', () => {
                expect(calcularCostoUsuario(1, 1, 829, true, 499, 49)).toBe(0)
            })

            it('Costo 49 usuarios', () => {
                expect(calcularCostoUsuario(49, 1, 829, true, 499, 49)).toBe(
                    39792
                )
            })

            it('Costo 50 usuarios', () => {
                expect(calcularCostoUsuario(50, 1, 829, true, 499, 49)).toBe(
                    40291
                )
            })
        })
    })
})
