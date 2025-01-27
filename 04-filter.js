const palabras = ['spray', 'cemento','limit', 'elite', 'comida', 'perro']

// Metodologia anterior
const newArray = []
for (let index = 0; index < palabras.length; index++) {
    const item = palabras[index];
    if(item.length >= 6) {
        newArray.push(item)
    }
}

// console.log('newArray', newArray)
// console.log('original', palabras)

// Nuevo metodo 
const respuesta = palabras.filter(item => item.length >= 6)

console.log('newArray', newArray)
console.log('original', respuesta)