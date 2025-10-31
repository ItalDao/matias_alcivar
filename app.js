const express = require('express');
const app = express();
const port = 3077;

function saludar(nombre) {
    return `Hola ${nombre}, bienvenido al examen DevOps!`;
}

function sumar(a, b) {
    return a + b;
}

app.get('/', (req, res) => {
    const mensaje = saludar('Matias Alcivar');
    const suma = sumar(2, 3);
    res.send(`${mensaje}<br>La suma de 2 + 3 es: ${suma}`);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
