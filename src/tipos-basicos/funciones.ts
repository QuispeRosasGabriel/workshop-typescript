//Primero oblgiatorios, luego opcionales y finalmente los que tienen valor por defecto
function sumar(a:number,b?:number, c:number = 2) {
    return a + b;
}

const resultado = sumar(2);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curarPersonaje(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
    console.log(personaje);
    
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Pepe',
    pv: 50,
    mostrarHp () {
        console.log('este es mi hp', this.pv);
        
    }
}

curarPersonaje(nuevoPersonaje, 40);