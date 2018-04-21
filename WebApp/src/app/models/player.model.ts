export class Player{
    private nombre:string;
    private apellidos:string;
    private fechaNacimiento:string;
    private dni:string;
    private email:string;
    private fotoJugador:string;
    private teamId:string;
    private liga:string;
    private posicion:string;
    private lugarNacimiento:string;
    private nacionalidad:string;
    private dorsal:string;
    private capitan:boolean;

    constructor(nombre, apellidos, fechaNacimiento, dni, email, fotoJugador, teamId, liga, posicion, lugarNacimiento, nacionalidad, dorsal, capitan){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.email = email;
        this.fotoJugador = fotoJugador;
        this.teamId = teamId;
        this.liga = liga;
        this.posicion = posicion;
        this.lugarNacimiento = lugarNacimiento;
        this.nacionalidad = nacionalidad;
        this.dorsal = dorsal;
        this.capitan = capitan;
    }
}