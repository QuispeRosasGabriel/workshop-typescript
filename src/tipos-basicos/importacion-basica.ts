 
import {Producto, calculaImpuestos} from './destructuring';
const carritoCompras: Array<Producto> = [
    {
        desc: 'pan',
        precio: 20
    },
    {
        desc: 'carne',
        precio: 21
    }
];

const [total, isv] = calculaImpuestos(carritoCompras);
console.log(total, isv);
