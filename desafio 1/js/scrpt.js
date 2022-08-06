class Usuario {
    constructor (nombre, apellido, libros, mascotas)
}
const operacion = (numero1, numero2 ,callback) => {    
    return callback(numero1, numero2)
}

const suma = (num1, num2) => num1 + num2
const resta = (num1, num2) => num1 - num2
const multiplicacion = (num1, num2) => num1 * num2
const div = (num1, num2) => num1 / num2

console.log(operacion(5, 10, suma))
console.log(operacion(5, 10, resta))
console.log(operacion(5, 10, multiplicacion))
console.log(operacion(5, 10, div))
