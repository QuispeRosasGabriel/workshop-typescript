class PersonaNormal {
    public nombre: string;
    public direccion: string;
}

class Heroe extends PersonaNormal {
    private alterEgo: string;
    public edad: number;
    static nombreReal: string;

    public constructor(alterEgo: string) {
        super();
        this.alterEgo = alterEgo;
    }

    public imprimirNombre(){
        return this.alterEgo + ' ' + this.edad;
    }

}

const spiderMan = new Heroe('Batman');
spiderMan.direccion = 'xD'
console.log(spiderMan);
