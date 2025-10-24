const { saludar, sumar } = require('./app');

test('debe saludar correctamente', () => {
    expect(saludar('Juan')).toBe('Hola Juan, bienvenido al examen DevOps!');
});

test('debe sumar dos números correctamente', () => {
    expect(sumar(5, 3)).toBe(8);
    expect(sumar(10, -5)).toBe(5);
});

