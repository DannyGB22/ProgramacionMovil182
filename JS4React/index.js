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
const suma=(a, b)=> a+b


const usuario = {
    nombre: "Daniel",
    Apellido: "Galvan",
    edad: 22,

    Direccion:{
        pais: 'Mexico', ciudad:'Queretaro', calle:'La misma 123'
    },

    amigos: ['Alex', 'Carlos'],
    estatus: true,
    enviaCorreo: enviaCorr=()=>'enviado...'

}

// imprimimos los datos del objeto
console.log(usuario)

console.log(usuario.Direccion.ciudad)

console.log(usuario.amigos)

// Metodos
console.log(usuario.enviaCorreo())



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




