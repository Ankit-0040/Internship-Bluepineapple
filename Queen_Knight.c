#include <math.h>
#include <stdio.h>

char board[8][8] = {{'.', '.', '.', '.', '.', '.', '.', '.'},
                    {'.', '.', '.', '.', '.', '.', '.', '.'},
                    {'.', '.', '.', '.', '.', '.', '.', '.'},
                    {'.', '.', '.', '.', '.', '.', '.', '.'},
                    {'.', '.', '.', '.', '.', '.', '.', '.'},
                    {'.', '.', '.', '.', '.', '.', '.', '.'},
                    {'.', '.', '.', '.', '.', '.', '.', '.'},
                    {'.', '.', '.', '.', '.', '.', '.', '.'}};

void print_Board()
{

    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            printf("%c \t", board[i][j]);
        }
        printf("\n");
    }
}

void check_queen_kills(int rowQ, int colQ)
{
    // rowQ=5 colQ=5
    // rowK=4 colK=5

    int i;
    int j;
    int flag = 0;
    // upward-downward check
    for (i = 0; i < 8; i++)
    {
        if (board[i][colQ] == 'K')
        {
            flag = 1;
        }
    }

    // left-right check
    for (i = 0; i < 8; i++)
    {
        if (board[rowQ][i] == 'K')
        {
            flag = 1;
        }
    }

    // top-left check
    for (i = rowQ - 1, j = colQ - 1; i >= 0, j >= 0; i--, j--)
    {

        if (board[i][j] == 'K')
        {
            flag = 1;
        }
    }

    // top-right check
    for (i = rowQ - 1, j = colQ + 1; i >= 0, j < 8; i--, j++)
    {

        if (board[i][j] == 'K')
        {
            flag = 1;
        }
    }

    // bottom-right
    for (i = rowQ + 1, j = colQ + 1; i < 8, j < 8; i++, j++)
    {

        if (board[i][j] == 'K')
        {
            flag = 1;
        }
    }

    // bottom-left check
    for (i = rowQ + 1, j = colQ - 1; i < 8, j >= 0; i++, j--)
    {

        if (board[i][j] == 'K')
        {
            flag = 1;
        }
    }

    if (flag)
    {
        printf("Queen Kill Knight\n");
    }
    else
    {
        printf("Queen doesnot kill Knight\n");
    }
}

void check_knight_kill(int rowK, int colK)
{
    int i, j;
    int flag = 0;
    // top-left
    if (board[rowK - 2][colK - 1] == 'Q')
    {
        flag = 1;
    }

    else if (board[rowK - 1][colK - 2] == 'Q')
    {
        flag = 1;
    }

    // top-right

    else if (board[rowK - 2][colK + 1] == 'Q')
    {
        flag = 1;
    }

    else if (board[rowK - 1][colK + 2] == 'Q')
    {
        flag = 1;
    }

    // bottom-left

    else if (board[rowK + 2][colK - 1] == 'Q')
    {
        flag = 1;
    }

    else if (board[rowK + 1][colK - 2] == 'Q')
    {
        flag = 1;
    }

    // bottom-right

    else if (board[rowK + 1][colK + 2] == 'Q')
    {
        flag = 1;
    }

    else if (board[rowK + 2][colK + 1] == 'Q')
    {
        flag = 1;
    }

    /////////////////////////////////
    if (flag)
    {
        printf("Knight Kill Queen \n");
    }
    else
    {
        printf("Knight doesnot kill Queen\n");
    }
}

int main()
{

    int rowQ, colQ;
    int rowK, colK;
    int i, j;

    printf("Enter the position of queen");
    scanf("%d %d", &rowQ, &colQ);
    rowQ = rowQ - 1;
    colQ = colQ - 1;
    board[rowQ][colQ] = 'Q';

    printf("Enter the position of knight");
    scanf("%d %d", &rowK, &colK);
    rowK = rowK - 1;
    colK = colK - 1;
    board[rowK][colK] = 'K';
    print_Board();
    check_queen_kills(rowQ, colQ);
    check_knight_kill(rowK, colK);
}