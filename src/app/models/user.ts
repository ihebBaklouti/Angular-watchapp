export class User {
    constructor(
       public id:number,
       public fName:string,
       public lName:string,
       public email:string,
       public pwd:number,
       public confirmPwd:number,
       public tel:number,
       public adresse:string
    ){}
}