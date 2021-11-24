

import DataError from "../models/dataError.js"

export  class CheckCustomerValidity{
    constructor(){
        this.errors=[]
    }

    checkCustomerValidity(user){
    
         
        
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors= false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field}`, user))
            }
        }

        if(Number.isNaN(Number.parseInt(user.age))){
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
    }
        return hasErrors
    }
        






    
}
