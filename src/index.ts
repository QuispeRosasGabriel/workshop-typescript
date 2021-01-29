/*
    ===== Código de TypeScript =====
*/

// los decoradores son funciones
function classDecorator<T extends {new (...args: Array<any>): {}}>(constructor: T) {
    return class extends constructor {
        newProperty: 'new';
        hello: 'override';
    }
}

@classDecorator
class miSuperClase {
    public miPropiedad: string;

    public imprimir() {
        console.log('Hola');
    }
}

console.log('decoradores', miSuperClase);
