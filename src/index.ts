/*
    ===== Código de TypeScript =====
*/

class Heroe {
    private alterEgo: string;
    public edad: number;
    static nombreReal: string;

    public constructor(alterEgo: string) {
        this.alterEgo = alterEgo;
    }

    public imprimirNombre(){
        return this.alterEgo + ' ' + this.edad;
    }

}

const spiderMan = new Heroe('Batman');
console.log(spiderMan);
