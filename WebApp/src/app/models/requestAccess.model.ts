export class RequestAccess{
    private nombreSolicitante:string;
    private apellidosSolicitante:string;
    private email:string;
    private nombreEquipo:string;
    private liga: string;
    private campus:string;
    private masInfo:string;
    private ip:string;
    constructor(nombreSolicitante, apellidosSolicitante, email, nombreEquipo, liga, campus, masInfo, ip){
        this.nombreSolicitante = nombreSolicitante;
        this.apellidosSolicitante = apellidosSolicitante;
        this.email = email;
        this.nombreEquipo = nombreEquipo;
        this.liga = liga;
        this.campus = campus;
        this.masInfo = masInfo;
        this.ip = ip;
    }
}