let fs = require('fs');
//let fIput = "hello"
fs.readFile('Input.txt',(err,inputD)=>{
if(err) {
    throw err;
}
else{
    let count =0;
    let arr = [];
    arr = inputD.toString().split(" ");
    for(let i=0; i<arr.length;i++){
    if(arr[i]==='Arjuna'){
        count++;
    }
    
}
    //console.log(inputD)
   console.log(count)
}
})
