 function CheckAlphabet(ch){
                //let result;
                if( (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') )
                {
                    return 1;
                  //alert("Yes , it is a alphabet..");
                }
                else
                {
                    return 0;
                    //alert("No , it is not a alphabet..");
                }
            }

            function testCase(result,expectedOutput){
                if(CheckAlphabet(result)===expectedOutput){
                    alert('Testcase sucessfull');
                }
                else{
                    alert('Testcase unsuccessfull');
                }
            }
           // let ch = prompt("Enter value :",'');
            testCase('a',1);
            testCase('1',0);