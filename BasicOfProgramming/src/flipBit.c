#include <stdio.h>
#include <string.h>
#include <math.h>

int convertBinary(int ch)
{
    int buf[7] = {0};
    int remainder, i = 0;

    while (ch > 0)
    {
        int remainder = ch % 2;
        ch /= 2;
        buf[i++] = remainder;
    }
    for (i = 6; i >= 0; i--)
    {
        printf("%d", buf[i]);
    }
    flipBit(buf);
}

int flipBit(int buf[])
{
    int offset;
    int i;
    printf("\nEnter the offset value to change the bit from right ");
    scanf("%d", &offset);
    if (buf[offset - 1] == 1)
    {
        buf[offset - 1] = 0;
    }
    else
    {
        buf[(offset - 1)] = 1;
    }

    for (i = 6; i >= 0; i--)
    {
        printf("%d", buf[i]);
    }

    int decimal = 0;
    double base = 2;
    for (i = 0; i < 7; i++)
    {
        if (buf[i] == 1)
        {
            decimal += pow(base, i);
        }
    }
    printf("\nNew character %c ", decimal);
}

void main()
{
    int ch;
    printf("Enter the character ");
    scanf("%c", &ch);
    convertBinary(ch);
    // printf("%d", ch);
}
