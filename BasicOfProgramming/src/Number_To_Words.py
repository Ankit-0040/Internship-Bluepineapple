from num2words import  num2words

def TestCase(actual,expected):
    for i in range(11):
        if actual[i] == expected[i]:
            print(f"Test Case for {number[i]} is successfull.");
        else :
            print(f"Test Case for {number[i]} is successfull.");

number=[1,10,35,100,150,500,1000,1050,10000,25000,890763]            
actual=[]
expected=["one","ten","thirty five","one hundred","one hundred and fifty","five hundred","one thousand","one thousand and fifty",
         "ten thousand","twenty five thousand","eight hundred ninety thousand seven hundred sixty three"]
num=0

for item in number:
    actual.append(num2words(item))
   
TestCase(actual,expected)