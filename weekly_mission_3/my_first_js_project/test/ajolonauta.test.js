const Ajolonauta = require('./../app/Ajolonauta')

describe("Pruebas de unidad de Ajolonauta", () => {
    test('Caso de prueba 1: Creación de objeto', () => {

        //Aqui puedes usar el codigo
        const woopa = new Ajolonauta("Woopa")

        //Validar el resultado
        expect(woopa.name).toBe("Woopa");
    })
})