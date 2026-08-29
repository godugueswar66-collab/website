Object Oriented Programming JAVA
About Oops:
       Oops is also known as the ObjectOrientedProgramming language used in java.
About JAVAC:
      Javac is used to compile the java program file to mission understandable code. 
About KeyWords:
    There are 50 key words in the java language. They are:
Yes. Here are 50 Java keywords:
Java Keyword
Definition




Assert
Used to test a condition during program execution. If the condition is false, an AssertionError is generated.
Boolean
Used to declare a variable that can store only true or false.
Break
Used to terminate a loop or switch statement immediately.
Byte
A data type used to store 8-bit signed integer values from -128 to 127.
Case
Used inside a switch statement to define a block of code for a particular value.
Catch
Used to handle exceptions thrown by a try block.
Char
A data type used to store a single 16-bit Unicode character.
Class
Used to declare a class in Java.
Const
Reserved keyword in Java but not used. Java uses final instead.
Continue
Used to skip the current iteration of a loop and move to the next iteration.
Default
Used in a switch statement to execute code when no case matches.
Do
Used with while to create a loop that executes at least once.
Double
A data type used to store 64-bit floating-point numbers.
Else
Used with if to execute a block when the condition is false.
Enum
Used to define a fixed set of named constants.
Extends
Used to create inheritance by deriving one class from another class.
Final
Used to make a variable constant, prevent method overriding, or prevent class inheritance.
Finally
Used with exception handling to execute a block of code whether an exception occurs or not.
Float
A data type used to store 32-bit floating-point numbers.
For
Used to create a loop that repeatedly executes a block of code.
Goto
Reserved keyword in Java but not used.
If
Used to execute a block of code when a specified condition is true.
Implements
Used by a class to implement an interface.
Import
Used to access classes and interfaces from another package.
Instanceof
Used to check whether an object belongs to a particular class or interface.
Int
A data type used to store 32-bit signed integer values.
Interface
Used to declare an interface containing abstract methods, constants, and other members.
Long
A data type used to store 64-bit signed integer values.
Native
Indicates that a method is implemented using native code outside Java, usually through JNI.
New
Used to create a new object or array.
Package
Used to group related classes and interfaces.
Private
An access modifier that allows access only within the same class.
Protected
An access modifier that allows access within the same package and through inheritance.
Public
An access modifier that allows access from anywhere, subject to other rules.
Return
Used to return a value from a method or terminate a method.
Short
A data type used to store 16-bit signed integer values.
Static
Used to make a variable, method, or member belong to the class rather than individual objects.
Strictfp
Used to ensure consistent floating-point calculations across different platforms.
Super
Used to refer to the immediate parent class's members or constructor.
Switch
Used to select and execute one block of code from multiple possible choices.
Synchronized
Used to control access to a shared resource by multiple threads.
This
Refers to the current object of a class.
Throw
Used to explicitly throw an exception.
Throws
Used in a method declaration to specify exceptions that the method may throw.
Transient
Used to prevent a variable from being serialized.
Try
Used to define a block of code where exceptions may occur.
Void
Specifies that a method does not return any value.
Volatile
Indicates that a variable's value may be changed by different threads and should be read from main memory.
While
Used to repeatedly execute a block of code while a condition is true.


JAVA Keyword Example:
1.Assert:
class Test {
    public static void main(String[] args) {
        int age = 20;
        assert age >= 18;
        System.out.println("Adult");
    }
}
2.Boolean:
class Test {
    public static void main(String[] args) {
        boolean result = true;
        System.out.println(result);
    }
}

3. Break:
class Test {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i == 3)
                break;
            System.out.println(i);}
  }      }
4. Byte:class Test {
    public static void main(String[] args) {
        byte age = 25;
        System.out.println(age);
    }
}
5.Case:
class Test {
    public static void main(String[] args) {
        int day = 1;
 switch (day) {
            case 1:
                System.out.println("Monday");
                break;
        }
    }
}
6.Catch:
class Test {
    public static void main(String[] args) {
        try {
            int x = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Exception handled");
        }
    }
}
7.Char:
class Test {
    public static void main(String[] args) {
        char grade = 'A';
        System.out.println(grade);
    }
}
8.Class:
class Student {
    int age = 20;
}
9.Const:
// const int x = 10;  // Invalid in Java
final int x = 10;     // Correct
10.Continue:
class Test {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i == 3)
                continue;7t
            System.out.println(i);
        }
    }
}
11.default:
class Test {
    public static void main(String[] args) {
        int n = 5;

        switch (n) {
            default:
                System.out.println("Invalid number");
        }
    }
}
12.do:
class Test {
    public static void main(String[] args) {
        int i = 1;

        do {
            System.out.println(i);
            i++;
        } while (i <= 3);
    }
}
13.double:
class Test {
    public static void main(String[] args) {
        double price = 99.99;
        System.out.println(price);
    }
}
14.else:
class Test {
    public static void main(String[] args) {
        int age = 15;

        if (age >= 18)
            System.out.println("Eligible");
        else
            System.out.println("Not Eligible");
    }
}
15.enum:
enum Color {
    RED, GREEN, BLUE
}

class Test {
    public static void main(String[] args) {
        Color c = Color.RED;
        System.out.println(c);
    }
}
16.extends:
class Animal {
    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking");
    }
}


17.final:
class Test {
    public static void main(String[] args) {
        final int x = 10;
        System.out.println(x);
    }
}
18.finally:
class Test {
    public static void main(String[] args) {
        try {
            System.out.println("Try block");
        } finally {
            System.out.println("Finally block");
        }
    }
}
19.float:
class Test {
    public static void main(String[] args) {
        float marks = 85.5f;
        System.out.println(marks);
    }
}
20.for:
class Test {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            System.out.println(i);
        }
    }
}
21.if:
class Test {
    public static void main(String[] args) {
        int age = 20;

        if (age >= 18)
            System.out.println("Adult");
    }
}
22.implement:
interface Animal {
    void sound();
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Bark");
    }
}
23.import:
import java.util.Scanner;

class Test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}
24.instanceof:
class Test {
    public static void main(String[] args) {
        String name = "Eswar";

        System.out.println(name instanceof String);
    }
}
25.int:
class Test {
    public static void main(String[] args) {
        int age = 20;
        System.out.println(age);
    }
}
26.interface:
interface Animal {
    void sound();
}
27.long:
class Test {
    public static void main(String[] args) {
        long population = 1000000000L;
        System.out.println(population);
    }
}
28.native:
class Test {
    public native void display();
}
29.new:
class Student {
}
class Test {
    public static void main(String[] args) {
        Student s = new Student();
    }
}
30.package:
package mypackage;
class Test {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
31.private:
class Student {
    private int age = 20;
}
32.protected:
class Student {
    protected int age = 20;
}
33.public:
public class Test {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
34.return:
class Test {
    static int add() {
        return 10 + 20;
    }
  public static void main(String[] args) {
        System.out.println(add());
    }
}
35.short:
class Test {
    public static void main(String[] args) {
        short number = 1000;
        System.out.println(number);
    }
}
36.static:
class Student {
    static String college = "ABC College";
    public static void main(String[] args) {
        System.out.println(college);
    }
}
37.strictfp:
strictfp class Test {
    public static void main(String[] args) {
        double x = 10.5;
        System.out.println(x);
    }
}
38.super:
class Animal {
    String name = "Animal";
}
class Dog extends Animal {
    String name = "Dog";
    void display() 
      System.out.println(super.name);    
}
}
39.switch:
class Test {
    public static void main(String[] args) {
        int n = 2;
 switch (n) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
        }
    }
}


40.synchronized:
class Test {
    synchronized void display() {
        System.out.println("Hello");
    }
}
41.this:
class Student {
    int age;
Student(int age) {
        this.age = age;
    }
}
42.throw:
class Test {
    public static void main(String[] args) {
        throw new ArithmeticException("Error occurred");
    }
}
43.throws:
class Test {
    static void display() throws Exception {
        System.out.println("Hello");
    }
}
44.transient:
import java.io.Serializable;
class Student implements Serializable {
    String name = "Eswar";
    transient int age = 20;
}
45.try:
class Test {
    public static void main(String[] args) {
        try {
            int x = 10 / 2;
            System.out.println(x);
        } catch (Exception e) {
            System.out.println("Error");
        }
    }
}
46.void:
class Test {
    static void display() {
        System.out.println("Hello");
    }
}
47.volatile:
class Test {
    volatile boolean running = true;
}
48.while:
class Test {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 3) {
            System.out.println(i);
            i++;
        }
    }
}
49.goto:
class Test {
    public static void main(String[] args) {
        // goto is not supported in Java
        System.out.println("Java does not use goto");
    }
}


50.float:
class Test {
    public static void main(String[] args) {
        float marks = 85.5f;
        System.out.println(marks);
    }
}
Example programs which is having all the keywords:
// Program to demonstrate Java Keywords

import java.io.Serializable;   // import keyword
// enum keyword
enum Color {
    RED, GREEN, BLUE
}
// interface keyword
interface Animal {
    void sound();              // void keyword
}
// Parent class
class Parent {
    protected int value = 100; // protected keyword
    void display() {
        System.out.println("Parent class");
    }
}
// extends and implements keywords
class Dog extends Parent implements Animal {
    // private keyword
    private int age;
    // Constructor
    Dog(int age) {
        this.age = age;        // this keyword
    }
// public and void keywords
    public void sound() {
        System.out.println("Dog barks");
    }
    void show() {
        System.out.println("Age = " + this.age);
        // super keyword
        System.out.println("Parent value = " + super.value);
    }
}
// Main class
public class JavaKeywordsDemo implements Serializable {
    // static keyword
    static int count = 0;
    // transient keyword
    transient int temp = 10;
    // volatile keyword
    volatile boolean running = true;
    public static void main(String[] args) {
    // boolean keyword
        boolean flag = true;
        // byte keyword
     byte b = 10;
        // char keyword
        char ch = 'A';
        // short keyword
        short s = 100;
        // int keyword
        int number = 50;
        // long keyword
        long population = 100000L;
        // float keyword
        float marks = 85.5f;

        // double keyword
        double price = 99.99;
        System.out.println("===== DATA TYPES =====");
        System.out.println("Boolean = " + flag);
        System.out.println("Byte = " + b);
        System.out.println("Character = " + ch);
        System.out.println("Short = " + s);
        System.out.println("Integer = " + number);
        System.out.println("Long = " + population);
        System.out.println("Float = " + marks);
        System.out.println("Double = " + price);
        // if and else keywords
        System.out.println("\n===== IF ELSE =====");
        if (number > 40) {
            System.out.println("Number is greater than 40");
        } else {
            System.out.println("Number is less than or equal to 40");
        }
        // for, continue and break keywords
        System.out.println("\n===== FOR LOOP =====");
        for (int i = 1; i <= 5; i++) {
            // continue keyword
            if (i == 2) {
                continue;
            }
            // break keyword
            if (i == 5) {
                break;
            }
            System.out.println("i = " + i);
        }
        // while keyword
        System.out.println("\n===== WHILE LOOP =====");
        int i = 1;
        while (i <= 3) {
            System.out.println("While: " + i);
            i++;
        }
        // do keyword
        System.out.println("\n===== DO WHILE LOOP =====");
        int j = 1;
        do {
            System.out.println("Do While: " + j);
            j++;
        } while (j <= 2);
        // switch, case and default keywords
        System.out.println("\n===== SWITCH =====");
        int day = 2;
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            default:
                System.out.println("Invalid Day");
        }
        // enum keyword
        System.out.println("\n===== ENUM =====");
        Color color = Color.RED;
        System.out.println("Color = " + color);
        // new keyword
        Dog d = new Dog(20);
        // extends, implements, this and super
        System.out.println("\n===== INHERITANCE =====");
        d.show();
        d.sound();
        // instanceof keyword
        System.out.println("\n===== INSTANCEOF =====");
        if (d instanceof Dog) {
            System.out.println("d is an object of Dog");
        }
        // final keyword
        System.out.println("\n===== FINAL =====");
        final int MAX = 100;
        System.out.println("Final value = " + MAX);
        // static keyword
        System.out.println("\n===== STATIC =====");
        JavaKeywordsDemo.count++;
        System.out.println("Count = " + JavaKeywordsDemo.count);
        // return keyword
        System.out.println("\n===== RETURN =====");
        int result = add(10, 20);
        System.out.println("Addition = " + result);
        // try, catch and finally
        System.out.println("\n===== EXCEPTION HANDLING =====");
        try {
            int x = 10 / 0;
            System.out.println(x);
        }
 catch (ArithmeticException e) {
            System.out.println("Exception caught");
        }
 finally {
            System.out.println("Finally block executed");
        }
        // throw keyword
        System.out.println("\n===== THROW =====");
        try {
            throw new Exception("My Exception");
        } catch (Exception e) {
            System.out.println("Exception thrown manually");
        }
        // assert keyword
        System.out.println("\n===== ASSERT =====");
        assert number > 0 : "Number must be positive";
        System.out.println("Assertion passed");


        // synchronized keyword
        System.out.println("\n===== SYNCHRONIZED =====");
        synchronized (JavaKeywordsDemo.class) {
            System.out.println("Synchronized block executed");
        }
        // transient keyword
        System.out.println("\n===== TRANSIENT =====");
        JavaKeywordsDemo obj = new JavaKeywordsDemo();
        System.out.println("Transient value = " + obj.temp);
        // volatile keyword
        System.out.println("\n===== VOLATILE =====");
        obj.running = false;
        System.out.println("Running = " + obj.running);
        // const and goto are reserved keywords
        System.out.println("\n===== RESERVED KEYWORDS =====");
        System.out.println("const and goto are reserved keywords");
        System.out.println("They are not used in Java");
        // strictfp keyword
        System.out.println("\n===== STRICTFP =====");
        System.out.println("strictfp is a Java keyword");
        // native keyword
        System.out.println("\n===== NATIVE =====");
        System.out.println("native is used for methods implemented outside Java");
        // package keyword
        System.out.println("\n===== PACKAGE =====");
        System.out.println("package is used to group related classes");
        // throws keyword
        System.out.println("\n===== THROWS =====");
        System.out.println("throws specifies exceptions that a method may throw");
    }
  // static, int and return keywords
    static int add(int a, int b) {
        return a + b;
    }
}

Output:

===== DATA TYPES =====
Boolean = true
Byte = 10
Character = A
Short = 100
Integer = 50
Long = 100000
Float = 85.5
Double = 99.99

===== IF ELSE =====
Number is greater than 40

===== FOR LOOP =====
i = 1
i = 3
i = 4

===== WHILE LOOP =====
While: 1
While: 2
While: 3

===== DO WHILE LOOP =====
Do While: 1
Do While: 2

===== SWITCH =====
Tuesday

===== ENUM =====
Color = RED

===== INHERITANCE =====
Age = 20
Parent value = 100
Dog barks

===== INSTANCEOF =====
d is an object of Dog

===== FINAL =====
Final value = 100

===== STATIC =====
Count = 1

===== RETURN =====
Addition = 30

===== EXCEPTION HANDLING =====
Exception caught
Finally block executed

===== THROW =====
Exception thrown manually

===== ASSERT =====
Assertion passed

===== SYNCHRONIZED =====
Synchronized block executed

===== TRANSIENT =====
Transient value = 10

===== VOLATILE =====
Running = false

===== RESERVED KEYWORDS =====
const and goto are reserved keywords
They are not used in Java

===== STRICTFP =====
strictfp is a Java keyword

===== NATIVE =====
native is used for methods implemented outside Java

===== PACKAGE =====
package is used to group related classes

===== THROWS =====
throws specifies exceptions that a method may throw

3




ABOUT JAVA:
Java is high level language.
It is popularly used in world wide.
It’s  a platform independent in any Operating System.
It is developed by JamesGosling at SUNMICROSYSTEM.
Its applications majorly used in 5 types. They are:
Web Applications (like : Netflix , Amazon , etc…).
Big data technology(like: Quantum Computing, vedios,audios,etc…).
Mobile Applications(like: Java has served as the back bone for mobile devices particularly with in Andriod O.S).
Enterprises and Financial Applications(like: it is used mainly in security ,privacy/banks).
BASIC CONCEPTS IN JAVA:
There are 10  basic concepts in java .They are:
Variables
Datatypes
Operators
Method
Control Statements
Class & Objects
Encapsulation
Inheritance
Polymorphism
Abstraction




Class:
Aclass 

     

