
function dateDifference(first,second){
const diffTime = Math.abs(second - first);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
//console.log(diffDays);
return diffDays;
}

function testCaseFunction(d1,d2,expected){

    //console.log(dateDifference(d1,d2));
    if(dateDifference(d1,d2)===expected)
    {
    console.log(`Test case Passed`);
    }
    else
    {
    console.log(`Test Case Failed`);
    }


}

const date1 = new Date('1/1/2010');
const date2 = new Date('12/15/2018');
const date3 = new Date('4/12/2012');
const date4 = new Date('4/12/2024');


testCaseFunction(date1,date2,3270);
testCaseFunction(date1,date3,832);
testCaseFunction(date2,date4,1945);
testCaseFunction(date1,date4,5215);


