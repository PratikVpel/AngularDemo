export class Skill {
    employeeId : string;
    skillDesc : string;
    skillType : string;
    yearOfExperience : number;
  static employeeId: any;

    constructor(  employeeId : string=" ", skillDesc:string=" ", skillType:string=" ", yearOfExperience:number=0){
        this.employeeId = employeeId;
        this.skillDesc = skillDesc;
        this.skillType = skillType;
        this. yearOfExperience =  yearOfExperience;
    }
}
