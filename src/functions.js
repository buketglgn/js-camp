
function addToCart(quantity,productName="Elma"){
    console.log(productName +" sepete eklendi. Adet= "+ quantity)
}


//addToCart()
//addToCart(17)
//addToCart(15)

//------------ARROW FUNCTİONS---------------
let sayHello =()=>{
    console.log("Hello World!")
}
//sayHello()

let sayHello2= function (){
    console.log("hello 2")
}
//sayHello2()

function addToCart2(productName, quantity, unitPrice){

}
let product1 = {productName:"Elma", unitPrice:10, quantity:5}


function addToCart3(product){
    console.log("productName = "+ product.productName+" unitPrice = "+ product.unitPrice)
}

//addToCart3(product1)

let product2 = {productName:"Armut", unitPrice:15, quantity:8}
let product3 = {productName:"Armut", unitPrice:15, quantity:8}

product2=product3
product2.productName="KARPUZ"
//console.log(product3.productName)

function addToCart4(products){
    console.log(products)
}

let products = [product1, product2, product3]

addToCart4(products)

function add(bisey,...numbers){
    let total=0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(bisey)
    console.log(total)
    
}

//add(20,30,40,50)

let numberss = [30, 10, 500, 600, 120]
//console.log(Math.max(...numberss))

let [icAnadolu, marmara, karadeniz,[icAnadoluSehirleri]] = [
    {name: "İç Anadolu", population:"20M"},
    {name: "Marmara", population:"30M"},
    {name: "Karadeniz", population:"10M"},
    [
        "icanlllladolusehirleri"
    
    ]
]
console.log(icAnadoluSehirleri)
//console.log(MarmaraSehirleri)
//console.log(icAnadolu.population)

let newProductName, newUnitPrice,newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
= {productName:"Elmaaa", unitPrice:10, quantity:5})

 console.log(newProductName)