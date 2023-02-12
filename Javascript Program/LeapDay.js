function is_LeapDay(year,month,day){
    if(year%4==0 && (year%100!=0 || year%400==0)){
        if(month===2){
            if(day===29){
                return 1;
                //console.log(`It is a Leap Day`)
            }
        }   
    }
    else{
            return 0;
           // console.log(`It is not a Leap day`)
        }
}
function testcase_isLeapDay(year,month,day,expectedOutcome){
    if(is_LeapDay(year,month,day)==expectedOutcome){
        console.log(`Successfull for ${year} - ${month} - ${day}`)
    }
    else
    {
        console.log(`UnSuccessfull for ${year} - ${month} - ${day}`)
    }
    
}
//is_LeapDay(2012,2,29)
    let year=2000
    let expectedOutcome = 1
    let day;
    for (let i = 1; i <= 4; i++)
    {
        testcase_isLeapDay(year, 2, 29, expectedOutcome);
        year = year + 100;
        expectedOutcome = 0;
    }