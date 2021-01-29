/*
    ===== Código de TypeScript =====
*/
 
interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 20
}

const calculaImpuestos = (productos: Array<Producto>) => {
    let total = 0;

    productos.forEach((producto: Producto, idx: number, arr) => {
        total += producto.precio;
    });
    return total * 15;
}


const productos = [telefono]
const isv = calculaImpuestos(productos);

console.log('isv', isv);
