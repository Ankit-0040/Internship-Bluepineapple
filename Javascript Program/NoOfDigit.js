function NumberOfDigits(num) {
    let count = 0;
    if(num==0)
        return 1;
    else if(num<0)
        num = -num;
    while(num>0) {
        num = Math.trunc(num/10);
        count++;
    }
    return count;
}

function testFunction(num, expectedResult) {
    if(NumberOfDigits(num)===expectedResult)
        console.log('Test Case Pass');
    else    
        console.log('Test Case Failed');
}

console.log('Test Cases:');
testFunction(123,3);
testFunction(-12345, 5);
testFunction(12345977, 8);
