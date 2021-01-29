
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    cancion: 'xD',
    volumen: 90,
    segundo: 12,
    detalles: {
        autor: 'pepe',
        anio: 2020
    }
};

const {cancion, volumen, segundo, detalles: {autor, anio}} = reproductor;
console.log(autor, anio, cancion);


const dbz: string[] = ['Goku', 'Vegeta'];
const [a,b] = dbz;

console.log(a,b);


export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 20
}

export const calculaImpuestos = (productos: Array<Producto>) => {
    let total = 0;

    productos.forEach((producto: Producto, idx: number, arr) => {
        total += producto.precio;
    });
    return [total, total * 15];
}


const productos = [telefono]
const isv = calculaImpuestos(productos);

console.log('isv', isv);
