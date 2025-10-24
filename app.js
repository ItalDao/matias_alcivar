function saludar(nombre) {
    return `Hola ${nombre}, bienvenido al examen DevOps!`;
}

function sumar(a, b) {
    return a + b ; //correjido
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { saludar, sumar };
}

console.log(saludar('Matias Alcivar'));
console.log('La suma de 2 + 3 es:', sumar(2, 3));
