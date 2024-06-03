// Declara el siguiente arreglo
// estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, {
// name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },];
// II. Crea una función asíncrona que recorra el arreglo estudiantes y que guarde en un
// nuevo arreglo solo los nombres de los estudiantes que tienen mas de 18 años
// III. Imprimir los 2 arreglos como resultado

const estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, {
    name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },];

    async function recorrer(){
        estudiantes.forEach(function (estudiante){
              console.log(estudiante)
        })
        
        mayor = estudiantes.map(function (estudiante){
            if(estudiante.age > 18)
                console.log(estudiante.name)
                return estudiante.name
           
        })


    }

    

recorrer()

// console.log(estudiantes)

console.log(mayor)
