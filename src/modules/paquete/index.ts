/**
 * @author Raul Galindo
 * @description Unicamente interaccion con la UI.
 */

import {
    costosGrow,
    costosInstitutional,
    costosManufacturing,
    costosEnterprise,
    costosInternationalEnterprise,
} from './domain/entidades/CostosPaquetes.js'

import {
    detallesGrow,
    detallesInstitutional,
    detallesManufacturing,
    detallesEnterprise,
    detallesInternationalEnterprise,
} from './domain/entidades/DetallesPaquetes.js'

import { Inputs } from './domain/entidades/InterfaceInputs.js'

import { getAllCostosPaquetes } from './application/CostosPaquete.js'

import { printDetallePaquete } from './application/PrintPaquete.js'

const inputsEnDOM: Inputs[] = [
    {
        id: 'Usuarios',
        type: 'number',
        minValue: 1,
        maxValue: 10000,
    },

    {
        id: 'Empleados',
        type: 'number',
        minValue: 1,
        maxValue: 10000,
    },

    {
        id: 'Sucursales',
        type: 'number',
        minValue: 1,
        maxValue: 10000,
    },

    {
        id: 'Timbres',
        type: 'number',
        minValue: 1,
        maxValue: 10000,
    },

    // Pagos

    {
        id: 'ImplementacionMensual',
        type: 'checkbox',
    },

    {
        id: 'MembresiaMensual',
        type: 'checkbox',
    },
]

function getCostosPaquetes() {
    let timbresAgregados = document.getElementById(
        'Timbres'
    ) as HTMLInputElement

    let empleadosAgregados = document.getElementById(
        'Empleados'
    ) as HTMLInputElement

    let usuariosAgregados = document.getElementById(
        'Usuarios'
    ) as HTMLInputElement

    let sucursalesAgregados = document.getElementById(
        'Sucursales'
    ) as HTMLInputElement

    // pagos
    let isPagoImplementacionMensual = document.getElementById(
        'ImplementacionMensual'
    ) as HTMLInputElement

    let isPagoMembresiaMensual = document.getElementById(
        'MembresiaMensual'
    ) as HTMLInputElement

    const atributosDeCostosDinamicosPaquetes = {
        timbresRequeridos: parseInt(timbresAgregados.value),
        empleadosAgregados: parseInt(empleadosAgregados.value),
        usuariosRequeridos: parseInt(usuariosAgregados.value),
        sucursalesAgregados: parseInt(sucursalesAgregados.value),
        // pagos
        isPagoImplementacionMensual: Boolean(
            isPagoImplementacionMensual.checked
        ),
        isPagoMensualidadMensual: Boolean(isPagoMembresiaMensual.checked),
    }

    let costosPaquetes = getAllCostosPaquetes(
        atributosDeCostosDinamicosPaquetes,
        costosGrow,
        costosInstitutional,
        costosManufacturing,
        costosEnterprise,
        costosInternationalEnterprise
    )

    return costosPaquetes
}

function hideShowElementHidden(id: string) {
    const element = document.getElementById(id)
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden')
    } else {
        element.classList.add('hidden')
    }
}

function printModalidadPagos() {
    let isPagoMembresiaMensual = document.getElementById(
        'MembresiaMensual'
    ) as HTMLInputElement

    let sufijoPagos = 'año'

    if (isPagoMembresiaMensual.checked) {
        sufijoPagos = 'mes'
    }

    const spans = document.querySelectorAll(`.spanPagos`)

    spans.forEach((elemento) => {
        elemento.textContent = `/${sufijoPagos}`
    })
}

function printMoneda() {
    let moneda = localStorage.getItem('moneda')
    if (moneda === null) {
        moneda = 'mxn'
    }

    const spans = document.querySelectorAll(`.spanMoneda`)

    spans.forEach((elemento) => {
        elemento.textContent = moneda
    })

    updateMoneda(moneda)
}

function printCostosPaquetes() {
    let costosPaquetes = getCostosPaquetes()
    for (const paquete in costosPaquetes) {
        const costosEnPaquete = costosPaquetes[paquete]

        for (const costo in costosEnPaquete) {
            const selector = `${costo}${paquete}`
            const spans = document.querySelectorAll(`.${selector}`)

            spans.forEach((elemento) => {
                const costoFormateado = `$${costosEnPaquete[costo]
                    .toLocaleString()
                    .replace(/\./g, ',')}`
                elemento.textContent = costoFormateado
            })
        }
    }
}

function updateValorInputNumber(id: string, min: number, max: number): void {
    const input = document.getElementById(id) as HTMLInputElement
    if (isNaN(parseFloat(input.value))) {
        input.value = '1'
        localStorage.setItem(id, input.value)
        return
    }

    if (parseInt(input.value) < min) {
        input.value = '1'
        localStorage.setItem(id, input.value)
        return
    }

    if (parseInt(input.value) > max) {
        input.value = '10000'
        localStorage.setItem(id, input.value)
        return
    }

    localStorage.setItem(id, input.value)
}

function updateValorInputSwitch(id: string): void {
    const input = document.getElementById(id) as HTMLInputElement
    const labelDescuento = document.getElementById(
        `${id}LabelDescuento`
    ) as HTMLInputElement

    if (input.checked) {
        localStorage.setItem(id, 'true')
        labelDescuento.classList.add('hidden')
        return
    }

    labelDescuento.classList.remove('hidden')
    localStorage.setItem(id, 'false')
}

function updateMoneda(moneda: string): void {
    const monedaUSD = document.getElementById('monedaUSD')
    const monedaMXN = document.getElementById('monedaMXN')

    if (moneda === 'usd') {
        monedaUSD.classList.add('bg-blue-500', 'text-white')
        monedaUSD.classList.remove('text-blue-500', 'border', 'border-blue-500')
        monedaMXN.classList.add('text-blue-500', 'border', 'border-blue-500')
        monedaMXN.classList.remove('bg-blue-500', 'text-white')
    } else if (moneda === 'mxn') {
        monedaUSD.classList.remove('bg-blue-500', 'text-white')
        monedaUSD.classList.add('text-blue-500', 'border', 'border-blue-500')
        monedaMXN.classList.remove('text-blue-500', 'border', 'border-blue-500')
        monedaMXN.classList.add('bg-blue-500', 'text-white')
    }

    localStorage.setItem('moneda', moneda)
    // Si entro
}

function handleIncrementClick(inputId: string, minValue: number) {
    const input = document.getElementById(inputId) as HTMLInputElement
    if (parseInt(input.value) < minValue) {
        input.value = (parseInt(input.value) + 1).toString()
        window.localStorage.setItem(input.id, input.value)
    }

    printCostosPaquetes()
}

function handleDecrementClick(inputId: string, maxValue: number) {
    const input = document.getElementById(inputId) as HTMLInputElement
    if (parseInt(input.value) > maxValue) {
        input.value = (parseInt(input.value) - 1).toString()
        window.localStorage.setItem(input.id, input.value)
    }

    printCostosPaquetes()
}

function reloadValorInputSwitch(id: string): void {
    const storedValue = window.localStorage.getItem(id)
    const inputValue = document.getElementById(id) as HTMLInputElement
    const labelDescuento = document.getElementById(`${id}LabelDescuento`)

    if (storedValue && storedValue === 'true') {
        inputValue.checked = true
        labelDescuento.classList.add('hidden')
    } else {
        window.localStorage.setItem(id, 'false')
    }
}

function handleClick(targetElement, entity, maxValue, minValue) {
    if (targetElement.matches(`#decrement${entity}`)) {
        handleDecrementClick(entity, minValue)
    }

    if (targetElement.matches(`#increment${entity}`)) {
        handleIncrementClick(entity, maxValue)
    }
}

function addInputListeners(inputs: Inputs[]): void {
    for (const input of inputs) {
        const inputElement = document.getElementById(
            input.id
        ) as HTMLInputElement

        if (input.type === 'number') {
            inputElement.addEventListener('change', () => {
                updateValorInputNumber(input.id, input.minValue, input.maxValue)
                printCostosPaquetes()
                return
            })

            inputElement.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === 'Escape') {
                    inputElement.blur()
                    updateValorInputNumber(
                        input.id,
                        input.minValue,
                        input.maxValue
                    )
                    printCostosPaquetes()
                    return
                }
            })
        }

        if (input.type === 'checkbox') {
            inputElement.addEventListener('click', () => {
                updateValorInputSwitch(input.id)
                printModalidadPagos()
                printCostosPaquetes()
                return
            })
        }
    }
}

window.document.addEventListener('click', (e) => {
    const targetElement = e.target as Element

    handleClick(targetElement, 'Usuarios', 10000, 1)
    handleClick(targetElement, 'Empleados', 10000, 1)
    handleClick(targetElement, 'Timbres', 10000, 1)
    handleClick(targetElement, 'Sucursales', 10000, 1)

    if (targetElement.matches('#btnVerDemo')) {
        hideShowElementHidden('demoModal')
    }

    if (targetElement.closest('#closeModal')) {
        hideShowElementHidden('demoModal')
    }

    if (targetElement.matches('#monedaMXN')) {
        updateMoneda('mxn')
        // siempre al final
        printMoneda()
    }

    if (targetElement.matches('#monedaUSD')) {
        updateMoneda('usd')
        // siempre al final
        printMoneda()
    }
})

reloadValorInputSwitch('ImplementacionMensual')
reloadValorInputSwitch('MembresiaMensual')
addInputListeners(inputsEnDOM)

// Siempre por debajo de todo para que pueda tomar los valores anteriores.
printCostosPaquetes()
printMoneda()
printModalidadPagos()
printDetallePaquete(detallesGrow, 'Grow')
printDetallePaquete(detallesInstitutional, 'Institutional')
printDetallePaquete(detallesManufacturing, 'Manufacturing')
printDetallePaquete(detallesEnterprise, 'Enterprise')
printDetallePaquete(detallesInternationalEnterprise, 'InternationalEnterprise')
