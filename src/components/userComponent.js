import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import CustomerService from "../services/customerService.js"
import UserService from "../services/userService.js"

import Customer from "../models/customer.js"



//console.log("User Component Loaded.")



//let user1 = new User(1,"Buket","Gülgün","İzmir")
// let user2 = new User(2,"Ceylin","Gülgün","İzmir")
// let user3 = new User(3,"Bertan","Taner","İzmir")


//userService.add(user1)
//userService.add(user2)
//userService.add(user3)
//console.log(userService.list())
//console.log(userService.getById(2))


// let customer = {id:1, firstName:"Buket"}
// customer.lastName="Gülgün"
//console.log(customer.lastName)

console.log("-------------------------")

//userService.load()

//let customerToAdd = new Customer(5,"Ceylin","Gülgün","İzmir","shhdsh")
//customerToAdd.type= "customer"
//customerToAdd e type alanı ekledik.

//userService.add(customerToAdd)

//console.log(userService.customers)
//console.log(userService.employees)
//console.log(userService.errors)

//console.log(userService.getCustomersSorted())

//userService.checkEmployeeValidity()

console.log("**************SON HALİ************")
let logger1= new ElasticLogger()

let userService = new UserService(logger1)

let customerService = new CustomerService(logger1)

let customerToAdd = new Customer(7,"CEYO","Gülgün","İzmir","asah")

customerToAdd.type= "customer"



customerService.add(customerToAdd)
console.log(customerService.listCustomers())

//userService.load()


//customerService.add(customerToAdd)
//customerService.listCustomers()
