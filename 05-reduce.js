const totals = [1,2,3,4,5,6,7,8]

const respuesta = totals.reduce((sum, element) => sum + element, 0)

console.log(respuesta)

// Reload ==>

const items = [1,3,2,3, 1, 10, 3 ,2]

const rta = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] +1
    }
    return obj

}, {})

console.log(rta)