interface Personaje {
    nombre: string;
    hp: number;
    habilidades: Array<string>;
    puebloNatal?: string;
}

let habilidades: Array<string> = [];

const personaje: Personaje = {
    nombre: 'Spiderman',
    hp:100,
    habilidades: ['volar']
};

personaje.puebloNatal = 'pueblo paleta';

console.table(personaje)