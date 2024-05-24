console.log('Hola Mundo')


// function suma(a, b){
//     return a+b

// }



// console.log(suma(2,3));

// function fatArrow
// const suma=(a, b)=>{
//     return a+b
// }

// console.log(suma(2,2));

//

// function fat Arrow simplificada
// const suma=(a, b)=> a+b


// const usuario = {
//     nombre: "Daniel",
//     Apellido: "Galvan",
//     edad: 22,

//     Direccion:{
//         pais: 'Mexico', ciudad:'Queretaro', calle:'La misma 123'
//     },

//     amigos: ['Alex', 'Carlos'],
//     estatus: true,
//     enviaCorreo: enviaCorr=()=>'enviado...'

// }

// imprimimos los datos del objeto
// console.log(usuario)

// console.log(usuario.Direccion.ciudad)

// console.log(usuario.amigos)

//  Metodos
// console.log(usuario.enviaCorreo())



// Trabajo con el DOM
const titulo = document.createElement('h1')
titulo.innerText = 'Soy un titulo creado con JS'
document.body.append(titulo)

const boton = document.createElement('button')
boton.innerText = 'Presione'
document.body.append(boton)

boton.addEventListener('click', function () {
    //console.log('Evento click ejecutando')
    titulo.innerText= 'Evento click ejecutando'
    alert('Exito')
})



// Trabajo con arreglos

// const nombres = ['Alan', 'Isa','Pablo', 'Juan Luis']

// for (let i = 0 ; i< nombres.length; i++){
//     const elemento = nombres[i]
//     console.log(elemento)

// }


// nombres.forEach(function (nombre){
//     console.log(nombre)
// })

// const nombres = ['Alan', 'Isa','Pablo', 'Juan Luis']

// const array2 = nombres.map(function (nombre){
//     console.log(nombre)
//     return nombre
// })

// console.log(nombres)
// console.log(array2)


// Funcion  Find: Ubicar Elemntos en un arreglo

// const resultado = nombres.find(function (nombre){
//     if(nombre === 'Pablo'){
//         return nombre
//     }
// })

// console.log(resultado)


// Funcion Filter: recorre el Arreglo filtrando un resultado en otro

// const resultado = nombres.filter(function (nombre){
//     if(nombre != 'Pablo'){
//         return nombre
//     }
// })
// console.log(nombres)
// console.log(resultado)


// Funcion concat: 

// const edades = [22, 17, 19, 24, 15, 33]

// console.log(nombres.concat(edades))

// spread Operator
// console.log([...nombres,...edades])


// Modulos: Import & Export

import {suma, resta} from "./calculadora.js"
import * as calc from "./calculadora.js"

console.log(suma(22,22))
console.log(resta(22,9))

