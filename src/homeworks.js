function findPrime(...numbers){
     let arrayy=[]
     for (let i = 0; i < numbers.length ; i++) {
         let sayac=0
        
        //console.log(numbers[i])
        for (let x = 2; x < numbers[i]; x++) {
            if(numbers[i]%x == 0){
                sayac ++
            }           
        }
        if(sayac==0){
            arrayy.push(numbers[i])
            //console.log(numbers[i])
        }  
    }
    //console.log(arrayy)
}

//for (let index = 2; index <= 50; index++) {
    //findPrime(index)
    
//}

function findPerfectNumbers(...numberss){
    for (let i = 0; i < numberss.length ; i++) {
        let sayac=0
       
       //console.log(numbers[i])
       for (let x = 2; x < numberss[i]; x++) {
           if(numberss[i]%x == 0){
               sayac ++
           }           
       }
       if(sayac==0){
          console.log(Math.pow(2,(numberss[i]-1))*(Math.pow(2,numberss[i])-1))
       }  
   }
    
}

for (let index = 1; index <= 50; index++) {
    findPerfectNumbers(index)
    
}