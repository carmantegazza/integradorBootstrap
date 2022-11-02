//obejtos y arrays
let descuentos = [];

class Descuento {
    constructor(nombre, porcentaje, color) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.color = color;
    }
}

let descuento1 = new Descuento('estudiante', 80, 'primary');
let descuento2 = new Descuento('trainee', 50, 'secondary');
let descuento3 = new Descuento('junior', 15, 'warning');

descuentos.push(descuento1, descuento2, descuento3);

console.log(descuentos);

//renderizar cards con descuentos
let renderizarDescuentos = () => {
    let contDescuentos = document.getElementById('contDescuentos');
    contDescuentos.innerHTML = '';

    descuentos.forEach(
        (descuento) => {
            let cardDescuento = document.createElement('div');
            cardDescuento.classList = 'col.md-2';
            cardDescuento.innerHTML = `
            <div class="card">
            <div class="card-body border border-${descuento.color}">
            <h5 class="card-title text-capitalize">${descuento.nombre}</h5>
            <p class="card-text">Tienen un descuento</p>
            <p><strong>${descuento.porcentaje}%</strong></p>
            <p><small>*presentar documentacion</small></p>
            </div>
            </div>
            `
            contDescuentos.append(cardDescuento);
        }
    )
}
renderizarDescuentos();

//variables
const valorEntrada = 200;

//variables del DOM
let inputCantidadEntradas = document.getElementById('cantidadEntradas');
let inputDescuentoSeleccionado = document.getElementById('descuentoSeleccionado');


//funciones 
let calcularTotal = (cantidadEntradas, descuento) => {
    let total = (cantidadEntradas*valorEntrada)*((100-descuento.porcentaje)/100);
    return total
}

console.log(calcularTotal(3, descuento1))