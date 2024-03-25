#include <stdio.h>
#include <math.h>
#include <string.h>    // for strlen, strcpy, strcat
#include <stdlib.h>    // for malloc

int square(int x);

void minus10(int* v);

int main()
{
	/*  // output string - adds \n
	puts("Hello world.");
	// output formatted string - doesn't add \n
	printf("Hello world.\n");
	// formatted strings
	printf("%s %d %% \n", "Me when.", 100);    // d - int, s - string, c - char, f - float, %% - %
	int age = 19;
	printf("I am %d years old", age);*/

	/*int a, b;
	printf("Enter 2 letters: ");
	a = getchar();
	b = getchar();
	printf("You entered: '");
	putchar(a);
	printf("' and '");
	putchar(b);
	printf("' and I add '");
	putchar('c');
	printf("'.\n");

	int c;
	do
	{
		c = getchar();
		c = toupper(c);
		putchar(c);
	} while (c != '\n');*/
	
	/*float x, y;
	printf("Enter two floats: ");
	scanf_s("%f %f", &x, &y);
	printf("%f - %f = %f\n", x, y, x-y);*/
	
	/*char password[] = "password";
	printf("Password: %s\n", password);

	char name[20];
	printf("Enter your username: ");
	fgets(name, 20, stdin);
	printf("Username: %s\n", name);

	float p, s;
	p = pow(2.0, 8.0);
	s = sqrt(64.0);
	printf("2**8 = %f\n", p);*/

	/*if (0 == 0) printf("if");
	else if (0 == 1) printf("else if");
	else printf("else");
	
	char a = 'A';
	switch (a)
	{
		case 'A':
			puts("A");
			break;
		case 'B':
			puts("B");
			break;
		default:
			puts("Invalid choice.");
			break;
	}*/

	/*int x = 0;
	while (x < 10)
	{
		printf("%d", x);
		x++;
	}

	x = 0;
	do
	{
		printf("%d", x);
		x++;
	} while (x < 10);
	
	for (int i = 0; i < 10; i++)
	{
		printf("%d", i);
	}*/

	// printf("2 Squared = %d\n", square(2));

	// string functions: tolower, toupper, isalpha, strlen, strcat, strcpy

	/*char first[] = "Hello ";
	char second[] = "world.\n";
	int len = strlen(first) + strlen(second) + 1;
	char buffer[14];
	strcpy_s(buffer, len, first);
	strcat_s(buffer, len, second);
	printf("%s", buffer);*/

# define VERSION 3

	// if (VERSION) printf("Version: %d", VERSION);
	
	// float temps[4] = { 16.9, 21.6, 17.8, 14.5 };

	/*char greeting[] = { 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '.', '\0' };
	puts(greeting);*/

    /*struct bank {
		int account;
		float balance;
	};
	struct bank checking;
	checking.account = 1234;
	checking.balance = 600.00;
	struct bank account = { 1234, 600.00 };
	printf("%d %f", account.account, account.balance);*/

	/*int a = 5;
	int* p;
	printf("%%a: %p\n", &a);
	p = &a;
	printf(" p: %p\n", p);
	printf(" a: %d\n", a);
	printf("*p: %d\n", *p);
	p = NULL;*/

	/*int array[] = { 11, 13, 15, 17 };
	int* aptr;
	aptr = array;
	for (int x = 0; x < 4; x++) {
		printf("%d\n", *aptr);
		aptr++;
	}*/

	/*int value = 100;
	minus10(&value);
	printf("%d", value);*/

	/*int* scores, x;
	scores = malloc(sizeof(int) * 4);
	if (scores == NULL) {
		puts("Unable to allocate.");
		return 1;
	}
	*scores = 100;
	*(scores + 1) = 99;
	*(scores + 2) = 98;
	*(scores + 3) = 97;
	for (x = 0; x < 4; x++) {
		printf("Score %d: %d\n", x + 1, *(scores + x));
	}*/

	return 0;
}

int square(int x)
{
	return x * x;
}

void minus10(int* v)
{
	*v -= 10;
}
