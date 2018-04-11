export class Player{
    private name:string;
    private lastname:string;
    private birthdate:string;
    private dni:string;
    private email:string;
    private teamId:string;
    private league:string;
    private position:string;
    private country:string;
    private dorsal:string;
    private leader:boolean;

    constructor(name, lastname, birthdate, dni, email, teamId, league, position, country, dorsal, leader){
        this.name = name;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.dni = dni;
        this.email = email;
        this.teamId = teamId;
        this.league = league;
        this.position = position;
        this.country = country;
        this.dorsal = dorsal;
        this.leader = leader;
    }
}