function is_perfect(number){
let factor =0;
for(let i = 1; i<number; i++){
    if(number%i==0){
        factor += i;
    }
}
    if(factor === number && factor!=0 )
    {
        return 1;
        //console.log("It is a perfect number");
    }
    else
    {
        return 0;
        //console.log("It is not a perfect number");
    }

}
function testCase_isPerfect(number,expected){
    if(is_perfect(number)==expected){
        console.log("Test Case passed");
    }
    else{
        console.log("Test Case falied");
    }
}
testCase_isPerfect(33,1);
testCase_isPerfect(6,1);
testCase_isPerfect(28,1);
testCase_isPerfect(7,1);
