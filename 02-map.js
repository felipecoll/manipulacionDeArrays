const letras = ['a', 'b','c', 'd', 'f', 'g', 'h']

// Una linea
const newArray = letras.map(item => item + '++')


// Varias lineas

// const newArray = []
// for (let index = 0; index < letras.length; index++){
//     const element = letras[index]
//     newArray.push(element + '++')
// }

console.log('original', letras)
console.log('new', newArray)