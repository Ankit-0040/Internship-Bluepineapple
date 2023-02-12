function occurance_digit(number){
    let arr = [0,0,0,0,0,0,0,0,0,0];
    
   while(number>0){
      arr[number % 10]++;
        number = Math.trunc(number/10);
    }
    for(let i =0; i<arr.length;i++){
        
         console.log(`count of ${i} is ${arr[i]}`);
    }    
} 


occurance_digit(112)
occurance_digit(1111111111111111) //Upto 16digit number only
