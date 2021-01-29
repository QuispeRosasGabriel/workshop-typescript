
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
