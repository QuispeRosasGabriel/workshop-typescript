/*
    ===== Código de TypeScript =====
*/

class Heroe {
    private alterEgo: string;
    public edad: number;
    static nombreReal: string;

    imprimirNombre(){
        return this.alterEgo + ' ' + this.edad;
    }

}

const spiderMan = new Heroe();
console.log(spiderMan);
