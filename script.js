//obejtos y arrays
let descuentos = [];

class Descuento {
    constructor(nombre, porcentaje, color) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.color = color;
    }
}

let descuento1 = new Descuento('Estudiante', 80, 'primary');
let descuento2 = new Descuento('Trainee', 50, 'secondary');
let descuento3 = new Descuento('Junior', 15, 'warning');

descuentos.push(descuento1, descuento2, descuento3);
let opcionesDescuentos = document.getElementById('opcionesDescuentos');

//variables
const valorEntrada = 200;
let cantidad;
let tipoDescuento;
let descuentoElegido;
let total;

//funciones

//renderizar valor entrada
let valorTicket = document.getElementById('valorTicket');
valorTicket.innerText = valorEntrada;

//renderizar cards con descuentos
let renderizarDescuentos = () => {
    let contDescuentos = document.getElementById('contDescuentos');
    contDescuentos.innerHTML = '';

    descuentos.forEach(
        (descuento) => {
            let cardDescuento = document.createElement('div');
            cardDescuento.classList = 'col-md-2';
            cardDescuento.innerHTML = `
            <div class="card">
            <div class="card-body border border-${descuento.color}">
            <h5 class="card-title">${descuento.nombre}</h5>
            <p class="card-text">Tienen un descuento</p>
            <p><strong>${descuento.porcentaje}%</strong></p>
            <p><small>*presentar documentacion</small></p>
            </div>
            </div>
            `
            contDescuentos.append(cardDescuento);

            let opcionDescuento = document.createElement('option');
            opcionDescuento.innerText = descuento.nombre;

            opcionesDescuentos.append(opcionDescuento);
        }
    )
}
renderizarDescuentos();

//calcular total 
let calcularTotal = () => {
    cantidad = document.getElementById('cantidad').value;
    tipoDescuento = opcionesDescuentos.selectedIndex-1;
    descuentoElegido = descuentos[tipoDescuento];
    if (tipoDescuento == -1) {
        total = cantidad*valorEntrada
    } else {
        total = (cantidad * valorEntrada) * ((100 - descuentoElegido.porcentaje) / 100);
    }
    return total
}
//eventos
//borrar
let botonBorrar = document.getElementById('botonBorrar');
let formulario = document.getElementById('formEntradas');
botonBorrar.onclick = () => formulario.reset();

//resumen
let botonResumen = document.getElementById('botonResumen');
let totalApagar = document.getElementById('totalAPagar');
botonResumen.onclick = () => {
    totalApagar.innerText = calcularTotal()
}