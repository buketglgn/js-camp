import { users } from "../data/users";



export default class EmployeeService{
    constructor(loggerService){
        this.employees=users.filter(user => user.type==='employee')
        this.loggerService=loggerService
        

    }

    add(){


    }
    
    listEmployees(){
        //return this.users.map(user=>console.log(user.firstName +  " "+ user.lastName))
        return this.employees
     }

    getEmployeesById(id){
        return this.employees.find(u=> u.id==id)
    }
}