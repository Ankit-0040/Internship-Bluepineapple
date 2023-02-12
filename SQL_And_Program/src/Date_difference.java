import java.util.*;
class Date_difference{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int d1[] = new int[3];
        int d2[] = new int[3];

        System.out.println("Enter First Date: ");
        System.out.print("Enter Day: ");
        d1[0] = sc.nextInt();
        System.out.print("Enter Month: ");
        d1[1] = sc.nextInt();
        System.out.print("Enter Year: ");
        d1[2] = sc.nextInt();
        System.out.println("Enter Second Date: ");
        System.out.print("Enter Day: ");
        d2[0] = sc.nextInt();
        System.out.print("Enter Month: ");
        d2[1] = sc.nextInt();
        System.out.print("Enter Year: ");
        d2[2] = sc.nextInt();
        int monthDays[] = {31, 28, 31, 30, 31, 30, 
                            31, 31, 30, 31, 30, 31};
                            
        int n1 = d1[2] * 365 + d1[0];
        int n2 = d2[2] * 365 + d2[0];
        
        for (int i = 0; i < d1[1] - 1; i++) {
            n1 += monthDays[i];
        }
        
        for (int i = 0; i < d2[1] - 1; i++) {
            n2 += monthDays[i];
        }
        
        int y = d1[1] <= 2 ? d1[2] - 1 : d1[2];
        n1 += y / 4 - y / 100 + y / 400;
        
        y = d2[1] <= 2 ? d2[2] - 1 : d2[2];
        n2 += y / 4 - y / 100 + y / 400;
        
        int daysElapsed = Math.abs(n2 - n1);
        System.out.println("No of days = " + daysElapsed);
    }
}

       //System.out.println("Hello");