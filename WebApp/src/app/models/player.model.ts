export class Player{
    id:string;
    nombre:string;
    apellidos:string;
    fechaNacimiento:string;
    dni:string;
    email:string;
    fotoJugador:string;
    equipo:string;
    posicion:string;
    lugarNacimiento:string;
    nacionalidad:string;
    dorsal:number;
    delegado:boolean;

    constructor();
    constructor(nombre?, apellidos?, fechaNacimiento?, dni?, email?, fotoJugador?, equipo?, liga?, posicion?, lugarNacimiento?, nacionalidad?, dorsal?, delegado?){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.email = email;
        this.fotoJugador = fotoJugador;
        this.equipo = equipo;
        this.posicion = posicion;
        this.lugarNacimiento = lugarNacimiento;
        this.nacionalidad = nacionalidad;
        this.dorsal = dorsal;
        this.delegado = delegado;
    }

    toString(): string{
        return "Player: [id: " + this.id + ", nombre: " + this.nombre + ", apellidos: " + this.apellidos 
        + ", fechaNacimiento: " + this.fechaNacimiento + ", dni: " + this.dni + ", email: " + this.email + 
        ", fotoJugador: " + this.fotoJugador + ", equipo: " + this.equipo +
        ", posicion: " + this.posicion + ", lugarNacimiento: " + this.lugarNacimiento + ", nacionalidad: " + this.nacionalidad + 
        ", dorsal: " + this.dorsal + ", capitan: " + this.delegado; 
    }

    equals(otherPlayer: Player): boolean{
        return this.id === otherPlayer.id;
    }

    copy(other:Player){
        this.id = other.id;
        this.nombre = other.nombre;
        this.apellidos = other.apellidos;
        this.fechaNacimiento = other.fechaNacimiento;
        this.dni = other.dni;
        this.email = other.email;
        this.fotoJugador = other.fotoJugador;
        this.equipo = other.equipo;
        this.posicion = other.posicion;
        this.lugarNacimiento = other.lugarNacimiento;
        this.nacionalidad = other.nacionalidad;
        this.dorsal = other.dorsal;
        this.delegado = other.delegado;
    }

    isEmpty(): boolean{
        return this.nombre && this.apellidos && this.fechaNacimiento && this.dni && this.email &&
                this.fotoJugador && this.equipo && this.posicion && this.lugarNacimiento &&
                    this.nacionalidad && this.dorsal && this.delegado;
    }
}