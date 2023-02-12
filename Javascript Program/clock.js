   let hour, min, x;
    x = prompt("Enter the value of x which runs faster ");
    hour =   prompt("Enter the hour: ");
    min = prompt("\n Enter the minutes: \n ");
    let actualHour = 0;

    while (hour > 0)
    {
        if (min - x < 0)
        {
            min = 60 - x;
            hour = hour - 2;
            actualHour++;
        }
        else
        {
            min = min - x;
            hour = hour - 1;
            actualHour++;
        }
    }
    alert(`Actual Hour:  ${actualHour}`);
