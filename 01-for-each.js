const letters = ['a','b','c','d']

for(let index = 0; index < letters.length; index++) {
    const element = letters[index]
    console.log('For con 4 lineas => resultado',element)
}

letters.forEach(item => console.log('Foreach realizado con una linea',item))