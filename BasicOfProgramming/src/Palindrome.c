#include <stdio.h>
int is_palindrome(char *str, int flag)
{
    int length;

    length = strlen(str);
    // printf("%d",length);
    for (int i = 0; i < length; i++)
    {
        if (str[i] != str[length - i - 1])
        {
            flag = 1;
            break;
        }
    }
    if (flag == 0)
        printf("The string %s is palindrome   ", str);
    else
        printf("The string %s is not palindrome  ", str);
    // printf("%d",flag);
    // return flag;
}

int main(void)
{
    int flag = 0;
    char str[100] = "madam";
    is_palindrome(str, flag);
    printf("Test case pass\n");

    char str1[100] = "wow";
    is_palindrome(str1, flag);
    printf("Test case pass \n");

    char str2[100] = "ankit";
    is_palindrome(str2, flag);
    printf("Test case pass \n");

    char str3[100] = "singh";
    is_palindrome(str3, flag);
    printf("Test case pass \n");

    // printf("%d",flag);
    return 0;
}