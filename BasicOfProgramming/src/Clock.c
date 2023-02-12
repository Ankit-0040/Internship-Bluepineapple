#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int hour, min, x;
    printf("Enter the value of x which runs faster ");
    scanf("%d", &x);
    printf("\nEnter the hour: \n");
    while (1)
    {
        scanf("%d", &hour);
        if (hour <= 24 && hour > 0)
        {
            break;
        }
        else
        {
            printf("\n Enter the valid hour ");
        }
    }
    printf("\n Enter the minutes: \n ");
    while (1)
    {
        scanf("%d", &min);
        if (min <= 60 && hour > 0)
        {
            break;
        }
        else
        {
            printf("\n Enter the valid minute ");
        }
    }
    int actualHour = 0;

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
    printf("Actual Hour: %d", actualHour);
}