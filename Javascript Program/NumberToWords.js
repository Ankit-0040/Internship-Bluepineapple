const numberToWords ={
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
   13: "thirteen",
   14: "fourteen",
   15: "fifteen",
   16: "sixteen",
   17: "seventeen",
   18: "eighteen",
   19: "nineteen",
   20: "twenty",
   30: "thirty",
   40: "forty",
   50: "fifty",
   60: "sixty",
   70: "seventy",
   80: "eighty",
   90: "ninety",
};
function convertNumberToWords(number){
    if(number in numberToWords)
    {
        return numberToWords[number];
    }

//arab
    let words= ""
    if(number >=10000000000){
        if((Math.trunc(number/1000000000)) < 20) {
            words +=numberToWords[Math.trunc(number/1000000000)];
            number = number -((Math.trunc(number/1000000000))*1000000000);
    }
        else{
            words += numberToWords[Math.floor(number / 10000000000)*10];

            if((number % 10000000000 > 0) && numberToWords[number % 10000000000]){

                words += "-" + numberToWords[number % 10000000000];
            }
        }
    let w = (Math.trunc(number/1000000000))%10;
        if(w == 0 ){
            words += " arab ";

        }
        number %= 10000000000;
    }
     if(number >=1000000000){
        words +=convertNumberToWords(Math.floor(number/1000000000))+ " arab ";
        number %= 1000000000;
    }



//crore

    if(number >=100000000){
        if((Math.trunc(number/10000000)) < 20) {
            words +=numberToWords[Math.trunc(number/10000000)];
            number = number -((Math.trunc(number/10000000))*10000000);
    }
        else{
            words += numberToWords[Math.floor(number / 100000000)*10];

            if((number % 100000000 > 0) && numberToWords[number % 100000000]){

                words += "-" + numberToWords[number % 100000000];
            }
        }
    let w = (Math.trunc(number/10000000))%10;
        if(w == 0 ){
            words += " crore ";

        }
        number %= 100000000;
    }
     if(number >=10000000){
        words +=convertNumberToWords(Math.floor(number/10000000))+ " crore ";
        number %= 10000000;
    }


    //lakh
    if(number >=1000000){
        if((Math.trunc(number/100000)) < 20) {
            words +=numberToWords[Math.trunc(number/100000)];
            number = number -((Math.trunc(number/100000))*100000);
    }
        else{
            words += numberToWords[Math.floor(number / 1000000)*10];

            if((number % 1000000 > 0) && numberToWords[number % 1000000]){

                words += "-" + numberToWords[number % 1000000];
            }
        }
    let y = (Math.trunc(number/100000))%10;
        if(y == 0 ){
            words += " lakh ";

        }
        number %= 1000000;
    }

    if(number >=100000){
        words +=convertNumberToWords(Math.floor(number/100000))+ " lakh ";
        number %= 100000;
    }

    //thousand

    if(number >=10000){
        if((Math.trunc(number/1000)) < 20) {
            words +=numberToWords[Math.trunc(number/1000)];
            number = number -((Math.trunc(number/1000))*1000);
    }
        else{
            words += numberToWords[Math.floor(number / 10000)*10];

            if((number % 10000 > 0) && numberToWords[number % 10000]){

                words += "-" + numberToWords[number % 10000];
            }
        }
        //words +=convertNumberToWords(Math.floor(number/10000))+ " thousand ";
        let x = (Math.trunc(number/1000))%10;
        if(x == 0 ){
            words += " thousand";

        }
        number %= 10000;
    }
    if(number >=1000){
        words +=convertNumberToWords(Math.floor(number/1000))+ " thousand ";
        number %= 1000;
    }
    if(number >=100){
        words +=convertNumberToWords(Math.floor(number/100))+ " hundred";
        number %= 100;
    }

    if(number > 0 ){
        if(words !== "") words += " and ";

        if(number < 20) words +=numberToWords[number];
        else{
            words += numberToWords[Math.floor(number / 10)*10];

            if(number % 10 > 0){
                words += "-" + numberToWords[number % 10];
            }
        }
    }
    return words.trim();
}

function testCaseFunction(number,expected){
    let str = convertNumberToWords(number);
    // console.log(str);
    // console.log(expected);
        if(str===expected){
            console.log(`test case passed`);
        }
        else{
            console.log(`test case failed`);
        }
}
// console.log(convertNumberToWords(4765));
// console.log(convertNumberToWords(736281));
// console.log(convertNumberToWords(21100100));
testCaseFunction(1100000000,'one arab ten crore');
testCaseFunction(4765,'four thousand seven hundred and sixty-five');
testCaseFunction(736281,'seven lakh thirtysix thousand two hundred and eighty-one');
testCaseFunction(21100100,'two crore eleven lakh one hundred');



