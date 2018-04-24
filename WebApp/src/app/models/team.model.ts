import { Player } from './player.model';

export class Team {
    nombre:string;
    ciudad:string;
    plantillaEquipo: Array<Player> = [];

    constructor();
    constructor(nombre?, ciudad?, plantillaEquipo?){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.plantillaEquipo = plantillaEquipo;
    }
}
