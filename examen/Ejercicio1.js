
// Crea una función asíncrona que recorra el arreglo numeros y genere uno nuevo
// llamado pares que contenga solo los pares de arreglo numeros
// III. Imprimir los 2 arreglos como resultado

const numeros= [9,2,8,7,5,6,6,1,3,4,2,8,1,7,6]

async function recorrer(){
    numeros.forEach(function (numero){
        console.log(numero)
    })

    pares = numeros.filter(function (numero){
        if(numero % 2 == 0)
            return numero
       
    })
}
    

recorrer()
console.log(pares)
console.log(numeros)



