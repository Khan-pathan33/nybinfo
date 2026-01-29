import { Computer } from "./computer.js"
// default export

 class Macbook extends Computer{
    constructor(name, company){
        super(name)
        this.company=company
    }
    logIn(){
        console.log("you are logged into a Macbook " + this .name)
    }
}
export default Macbook