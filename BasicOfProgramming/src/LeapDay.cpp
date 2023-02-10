// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

int leapDay(int yr, int mnth, int d)
{
    if (yr % 4 == 0 && (yr % 100 != 0 || yr % 400 == 0))
    {
        if (mnth == 2)
        {
            if (d == 29)
            {
                // cout<<"It is a Leap Day";
                return 1;
            }
        }
    }
    else
    {
        // cout<<"Not a Leap day";
        return 0;
    }
}

void testCheckLeapDayFunc(int yr, int mnth, int d, int expectedOutput)
{
    if (leapDay(yr, mnth, d) == expectedOutput)
    {
        cout << "Successful for " << yr << "-" << mnth << "-" << d << "\n";
    }
    else
    {
        cout << "UnSuccessful for " << yr << "-" << mnth << "-" << d << "\n";
    }
}

int main()
{
    // std::cout << "Hello world!";
    // int year, month , day;

    // cout<<"Enter year ";
    // cin>>year;
    // cout<<"Enter month ";
    // cin>>month;
    // cout<<"Enter day ";
    // cin>>day;
    //     leapDay(year,month,day);
    // testCheckLeapDayFunc(2000,2,29,1);
    int year = 2800, expectedOutcome = 1, day;
    for (int i = 1; i <= 4; i++)
    {
        testCheckLeapDayFunc(year, 2, 29, expectedOutcome);
        year = year + 100;
        expectedOutcome = 0;
    }

    year = 1996, day = 25, expectedOutcome = 0;
    for (int i = 1; i <= 5; i++)
    {
        if (day == 29)
        {
            expectedOutcome = 1;
        }
        testCheckLeapDayFunc(year, 2, day++, expectedOutcome);
    }

    return 0;
}