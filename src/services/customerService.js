import { users } from "../data/users.js"
import { CheckCustomerValidity } from "../validations/checkCustomerValidity.js"



export default class CustomerService{

    constructor(loggerService){

        this.customers =users.filter(user=> user.type === 'customer')
        this.loggerService=loggerService
        this.checkvalidity= new CheckCustomerValidity()

       
    }

    add(user){
        if(!this.checkvalidity.checkCustomerValidity(user)){
            this.customers.push(user)
        }
        else{
            this.errors.push(new DataError("This user cannot be added. ", user))
        }
        this.loggerService.log(user)

    }

    listCustomers(){
        //return this.users.map(user=>console.log(user.firstName +  " "+ user.lastName))
        return this.customers
     }

    getCustomerById(id){
        return this.customers.find(u=> u.id==id)
    }
}