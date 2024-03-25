import java.util.Scanner;

public class Main {
	
    public static void greet(String name) {
        System.out.println("Hello " + name);
    }

	public static void main(String[] args) {
		System.out.println("Hello World");
        
        // int, double, char, boolean, String

        System.out.println("enter your name:");
        Scanner input = new Scanner(System.in);
        String name = input.next();
        input.close();
        greet(name);
        for (int i = 0; i < 5; i++) {
            System.out.print(i);
            if (i == 4) {
                System.out.println();
            }
            else {
                continue;
            }
        }

        Player p1 = new Player("Rock", 20);
        p1.takeDamage(5);
        System.out.println(p1.description());
    }
}