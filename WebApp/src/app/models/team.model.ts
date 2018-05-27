import { Player } from './player.model';

export class Team {
    nombre:string;
    ciudad:string;
    plantillaEquipo: Array<Player> = [];

    constructor(nombre, ciudad){
        this.nombre = nombre;
        this.ciudad = ciudad;
    }
}
