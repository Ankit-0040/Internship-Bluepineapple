#include<stdio.h>
#include<string.h>

int check_OccuranceOfDigit(char str[]);

	int check_OccuranceOfDigit(char str[]){
		char x;
		
		int i, cnt_0=0, cnt_1=0, cnt_2=0, cnt_3=0,cnt_4=0, cnt_5=0 , cnt_6=0, cnt_7=0, cnt_8=0, cnt_9=0;
		
		
		for( i =0; i<strlen(str);i++){
			x=str[i];
			if(x=='0'){
				cnt_0++;
			}
			else if(x=='1'){
				cnt_1++;
			}
			
			else if(x=='2'){
				cnt_2++;
			}
			
			else if(x=='3'){
				cnt_3++;
			}
			
			else if(x=='4'){
				cnt_4++;
			}
		
			else if(x=='5'){
				cnt_5++;
			}
			
			else if(x=='6'){
				cnt_6++;
			}
			
			else if(x=='7'){
				cnt_7++;
			}
			
			else if(x=='8'){
				cnt_8++;
			}
	 		else if(x=='9'){
				cnt_9++;
			}	
			
	}
	
	printf("count of 0: %d \n", cnt_0);
	printf("count of 1: %d \n", cnt_1);
	printf("count of 2: %d \n", cnt_2);
	printf("count of 3: %d \n", cnt_3);
	printf("count of 4: %d \n", cnt_4);
	printf("count of 5: %d \n", cnt_5);
	printf("count of 6: %d \n", cnt_6);
	printf("count of 7: %d \n", cnt_7);
	printf("count of 8: %d \n", cnt_8);
	printf("count of 9: %d \n", cnt_9);
	
	
	}
	

   int main(){
	
		char str[100];
		// printf("Enter the number");
	// scanf("%d",&number);
	
	 check_OccuranceOfDigit("232");
	
	 printf("Test case sucessfull \n");
	
	check_OccuranceOfDigit("888888");
	printf("Test Case sucessfull\n");

	check_OccuranceOfDigit("123456");
	printf("Test Case sucessfull\n");

	
	check_OccuranceOfDigit("876452");
	printf("Test Case sucessfull\n");

}
