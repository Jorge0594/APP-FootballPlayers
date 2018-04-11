export class RequestAccess{
    private name:string;
    private lastName:string;
    private email:string;
    private teamname:string;
    private campus:string;
    private moreinfo:string;
    private ip:string;
    constructor(name, lastName, email, teamname, campus, moreinfo, ip){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.teamname = teamname;
        this.campus = campus;
        this.moreinfo = moreinfo;
        this.ip = ip;
    }
}