export class Player{
    id:string;
    nombre:string;
    apellidos:string;
    fechaNacimiento:string;
    dni:string;
    email:string;
    fotoJugador:string;
    equipo:string;
    liga:string;
    posicion:string;
    lugarNacimiento:string;
    nacionalidad:string;
    dorsal:number;
    capitan:boolean;

    constructor();
    constructor(nombre?, apellidos?, fechaNacimiento?, dni?, email?, fotoJugador?, equipo?, liga?, posicion?, lugarNacimiento?, nacionalidad?, dorsal?, capitan?){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.email = email;
        this.fotoJugador = fotoJugador;
        this.equipo = equipo;
        this.liga = liga;
        this.posicion = posicion;
        this.lugarNacimiento = lugarNacimiento;
        this.nacionalidad = nacionalidad;
        this.dorsal = dorsal;
        this.capitan = capitan;
    }

    toString(): string{
        return "Player: [nombre: " + this.nombre + ", apellidos: " + this.apellidos 
        + ", fechaNacimiento: " + this.fechaNacimiento + ", dni: " + this.dni + ", email: " + this.email + 
        ", fotoJugador: " + this.fotoJugador + ", equipo: " + this.equipo + ", liga: " + this.liga + 
        ", posicion: " + this.posicion + ", lugarNacimiento: " + this.lugarNacimiento + ", nacionalidad: " + this.nacionalidad + 
        ", dorsal: " + this.dorsal + ", capitan: " + this.capitan; 
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
        this.liga = other.liga;
        this.posicion = other.posicion;
        this.lugarNacimiento = other.lugarNacimiento;
        this.nacionalidad = other.nacionalidad;
        this.dorsal = other.dorsal;
        this.capitan = other.capitan;
    }
}