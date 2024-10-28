//variables para los selectores

const formulario = document.getElementById('agregar-gasto');
const listagod = document.getElementById('#gastos ul ');


//creacion de eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded',preguntarPreosupuesto);
    formulario.addEventListener('submit',agregarGasto);

}


//crear la clase principal
class Presupuesto
{
    constructor(presupuesto)
    {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos =[... this.gastos,gasto];
        this.calcularRestante();
    }

    calcularRestante(){

    }


}
//clase que maneja la intefaz de usuario
class UI
{
    insertatpresupuesto(cantidad){
        document.getElementById('#total').textContent = cantidad.presupuesto;
        document.getElementById('#restante').textContent = cantidad.presupuesto;
    }
    ImprimirAlerta(mensaje,tipo){

       //crear el div
       const divmensaje = document.createElement('div');
       divmensaje.classList.add('text-center','alert');

       //Si es tipo de error se debe ingresar a la clase
       if(tipo === 'error'){
           divmensaje.classList.add('alert-danger');
        }else{
            divmensaje.classList.add('alert-primary');
        }
        //mensaje de error
        divmensaje.textContent = mensaje;
        //insertar en el DOM
        const contenidoprincipal = document.querySelector('.contenido-gastos');
        contenidoprincipal.insertBefore(divmensaje,formulario);
        
        //programar el tiempo que dura la alerta
        setTimeout(()=>{
            document.querySelector('.contenido-principal .alert').remove();
        },3000);

    }
    
    //insertar el gasto en la lista
    agregarGastolistado(gastos){

    }





}

//crear un objeto de la clase UI
const ui = new UI();
let presupuesto;

function preguntarPreosupuesto(){
    const valorpre = prompt('Cual es tu presupuesto?');
   
    //validar lo ingreso por el usuario
    if(valorpre === '' || valorpre === null || isNaN(valorpre|| valorpre <= 0))
    {
        window.location.reload();
    }
    //presupuesto valido
    presupuesto = new Presupuesto(valorpre);


   console.log(valorpre);
   //mostrar en el html el valior del presupuesto ingresado
    ui.insertatpresupuesto(presupuesto);
}
//leer lo ingresado por el formulario
function agregarGasto(e){
    e.preventDefault();

    //definir las variables del formulario
    const Nombre = document.getElementById('#gasto').value;
    const valor = Number(document.querySelector('#cantidad').value);

    //validar los campos el formulario
    if(Nombre==='' || valor === ''){

        ui.ImprimirAlerta('Ambos campos son obligatorios','error');
        //return;
    }else if(valor <= 0 || isNaN(valor)){
        ui.ImprimirAlerta('Cantidad no valida','error');
    }
}


