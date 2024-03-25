#include <iostream>
#include <string>
#include <vector>
#include "cow.h"
#include <fstream>

using namespace std;

#define DEBUG true;

int square(int x);

void doubleByValue(int* x) {
    *x = *x * 2;
}

void doubleByAddress(int& x) {
    x *= 2;
}

int main()
{
    /*cout << "hello world" << endl;

    string str;
    cout << "enter your name: ";
    cin >> str;
    cout << "Hello " << str << endl;*/

#ifdef DEBUG
    std::cout << "Debugging..." << std::endl;
#endif

    /*const int LENGTH = 5;
    int arr[LENGTH] = {0 * 5};

    for (int i = 0; i < 5; i++)
    {
        arr[i] = i + 1;
        cout << arr[i];
    }
    cout << endl;*/

    /*int a = 5;
    int* ptr;
    ptr = &a;
    cout << "ptr is pointing to address: " << ptr << endl;
    cout << "the address of a:           " << &a << endl;
    cout << "value in ptr address: " << *ptr << endl;
    cout << "value of a:           " << a << endl;
    ptr = NULL;*/

    /*cow* c1 = new cow("Betsy", 5, hide);
    cout << (*c1).get_name() << " is a type-" << (int)c1->get_purpose() << " cow." << endl;
    // (*c1).func() or c1->func()
    delete c1;*/

    /*vector<cow> cattle;

    cattle.push_back(cow("Betsy", 6, meat));
    cattle.push_back(cow("Libby", 4, hide));
    cattle.push_back(cow("Trudy", 2, dairy));
    cout << "Vector size: " << cattle.size() << endl;
    cout << "The first cow is " << cattle.begin()->get_name() << endl;
    cout << "At index 1 we have " << cattle[1].get_name() << endl;
    cout << "Before the last cow is " << prev(cattle.end(), 2)->get_name() << endl;
    cout << "The last cow is " << (cattle.end() - 1)->get_name() << endl;*/

    /*cout << "enter 2 numbers:" << endl;
    float num1, num2, result = 0;
    cin >> num1 >> num2;
    cout << "enter an operator:" << endl;
    char operation;
    cin >> operation;

    switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    }
    cout << "The result is " << result << endl;*/

    /*vector<int> numbers = { 12, 25, 31, 47, 53 };
    auto ptr = numbers.begin();

    while (ptr != numbers.end()) {
        cout << *ptr << " ";
        ptr = next(ptr, 1);
    }
    cout << endl;*/

    /*int a = 9, b;
    int& aReference = a;
    int* aPointer = &a;
    b = square(*aPointer);
    cout << "a = " << a << endl;
    doubleByValue(&a);
    cout << "a = " << a << endl;
    doubleByAddress(a);
    cout << "a = " << a << endl;

    int* pInts;
    int iCount = 144;
    pInts = (int*)calloc(iCount, sizeof(int));
    int* pIndex = pInts;
    for (int i = 0; i < 12; i++) {
        for (int j = 0; j < 12; j++) {
            *pIndex = i * j;
            pIndex++;
        }
    }
    pIndex = pInts;
    int i, j;
    cout << "Enter a number: ";
    cin >> i;
    cout << "Enter a number: ";
    cin >> j;
    pIndex += i * 12 + j;
    cout << i << " * " << j << " = " << *pIndex << endl;
    free(pInts);*/

    ifstream inFile;
    string str;
    inFile.open("notes.txt");
    if (!inFile.fail()) {
        while (!inFile.eof()) {
            getline(inFile, str);
            if (str != "") cout << str << endl;
        }
        inFile.close();
    }
    else cout << "File not found!" << endl;

    ofstream outFile;
    outFile.open("notes.txt");
    if (!outFile.fail()) {
        outFile << "Create a new project" << endl;
        outFile << "Console app" << endl;
        outFile.close();
        cout << "File written successfully" << endl;
    }
    else cout << "File not found!" << endl;

    return 0;
}

int square(int x) {
    x = x * x;
    return x;
}
