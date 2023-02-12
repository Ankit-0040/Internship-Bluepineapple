function reverseString(str){
    let newstr = "";
    for (let i= str.length-1 ; i>=0 ; i-- ){
        newstr += str[i];
    } 
    
    return(is_palidrome(newstr,str));
}
function is_palidrome(new1,str){
    if(new1 === str){
        //console.log("It is palindrome");
        return 1;
    }
    else
    {
        return 0;

        //console.log("It is not a palindrome")
    }
}

function testfunction(result,expected){
    let x = reverseString(result)
        if(x==expected){
            console.log("Test case passed")
        }
        else{
            console.log("Test case failed")
        }

}
 testfunction('madam',1)
 testfunction('ankit',0)
