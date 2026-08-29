/**
 * Java Keywords & OOP Explorer - JavaScript Application Logic
 * Single Source of Truth: Java_OOP_Extracted_Content.md
 */

// Global Keyword Dataset
const javaKeywordsData = [
    {
        id: 1,
        name: "assert",
        category: "Exception Handling & Debugging",
        definition: "Used to test a condition during program execution. If the condition is false, an AssertionError is generated.",
        code: `class Test {
    public static void main(String[] args) {
        int age = 20;
        assert age >= 18;
        System.out.println("Adult");
    }
}`
    },
    {
        id: 2,
        name: "boolean",
        category: "Primitive Data Types",
        definition: "Used to declare a variable that can store only true or false.",
        code: `class Test {
    public static void main(String[] args) {
        boolean result = true;
        System.out.println(result);
    }
}`
    },
    {
        id: 3,
        name: "break",
        category: "Control Flow & Loops",
        definition: "Used to terminate a loop or switch statement immediately.",
        code: `class Test {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i == 3)
                break;
            System.out.println(i);
        }
    }
}`
    },
    {
        id: 4,
        name: "byte",
        category: "Primitive Data Types",
        definition: "A data type used to store 8-bit signed integer values from -128 to 127.",
        code: `class Test {
    public static void main(String[] args) {
        byte age = 25;
        System.out.println(age);
    }
}`
    },
    {
        id: 5,
        name: "case",
        category: "Control Flow & Loops",
        definition: "Used inside a switch statement to define a block of code for a particular value.",
        code: `class Test {
    public static void main(String[] args) {
        int day = 1;
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
        }
    }
}`
    },
    {
        id: 6,
        name: "catch",
        category: "Exception Handling & Debugging",
        definition: "Used to handle exceptions thrown by a try block.",
        code: `class Test {
    public static void main(String[] args) {
        try {
            int x = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Exception handled");
        }
    }
}`
    },
    {
        id: 7,
        name: "char",
        category: "Primitive Data Types",
        definition: "A data type used to store a single 16-bit Unicode character.",
        code: `class Test {
    public static void main(String[] args) {
        char grade = 'A';
        System.out.println(grade);
    }
}`
    },
    {
        id: 8,
        name: "class",
        category: "OOP & Declarations",
        definition: "Used to declare a class in Java.",
        code: `class Student {
    int age = 20;
}`
    },
    {
        id: 9,
        name: "const",
        category: "Reserved Words",
        definition: "Reserved keyword in Java but not used. Java uses final instead.",
        code: `// const int x = 10;  // Invalid in Java
final int x = 10;     // Correct`
    },
    {
        id: 10,
        name: "continue",
        category: "Control Flow & Loops",
        definition: "Used to skip the current iteration of a loop and move to the next iteration.",
        code: `class Test {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i == 3)
                continue;
            System.out.println(i);
        }
    }
}`
    },
    {
        id: 11,
        name: "default",
        category: "Control Flow & Loops",
        definition: "Used in a switch statement to execute code when no case matches.",
        code: `class Test {
    public static void main(String[] args) {
        int n = 5;

        switch (n) {
            default:
                System.out.println("Invalid number");
        }
    }
}`
    },
    {
        id: 12,
        name: "do",
        category: "Control Flow & Loops",
        definition: "Used with while to create a loop that executes at least once.",
        code: `class Test {
    public static void main(String[] args) {
        int i = 1;

        do {
            System.out.println(i);
            i++;
        } while (i <= 3);
    }
}`
    },
    {
        id: 13,
        name: "double",
        category: "Primitive Data Types",
        definition: "A data type used to store 64-bit floating-point numbers.",
        code: `class Test {
    public static void main(String[] args) {
        double price = 99.99;
        System.out.println(price);
    }
}`
    },
    {
        id: 14,
        name: "else",
        category: "Control Flow & Loops",
        definition: "Used with if to execute a block when the condition is false.",
        code: `class Test {
    public static void main(String[] args) {
        int age = 15;

        if (age >= 18)
            System.out.println("Eligible");
        else
            System.out.println("Not Eligible");
    }
}`
    },
    {
        id: 15,
        name: "enum",
        category: "OOP & Declarations",
        definition: "Used to define a fixed set of named constants.",
        code: `enum Color {
    RED, GREEN, BLUE
}

class Test {
    public static void main(String[] args) {
        Color c = Color.RED;
        System.out.println(c);
    }
}`
    },
    {
        id: 16,
        name: "extends",
        category: "OOP & Declarations",
        definition: "Used to create inheritance by deriving one class from another class.",
        code: `class Animal {
    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking");
    }
}`
    },
    {
        id: 17,
        name: "final",
        category: "Modifiers & Keywords",
        definition: "Used to make a variable constant, prevent method overriding, or prevent class inheritance.",
        code: `class Test {
    public static void main(String[] args) {
        final int x = 10;
        System.out.println(x);
    }
}`
    },
    {
        id: 18,
        name: "finally",
        category: "Exception Handling & Debugging",
        definition: "Used with exception handling to execute a block of code whether an exception occurs or not.",
        code: `class Test {
    public static void main(String[] args) {
        try {
            System.out.println("Try block");
        } finally {
            System.out.println("Finally block");
        }
    }
}`
    },
    {
        id: 19,
        name: "float",
        category: "Primitive Data Types",
        definition: "A data type used to store 32-bit floating-point numbers.",
        code: `class Test {
    public static void main(String[] args) {
        float marks = 85.5f;
        System.out.println(marks);
    }
}`
    },
    {
        id: 20,
        name: "for",
        category: "Control Flow & Loops",
        definition: "Used to create a loop that repeatedly executes a block of code.",
        code: `class Test {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            System.out.println(i);
        }
    }
}`
    },
    {
        id: 21,
        name: "if",
        category: "Control Flow & Loops",
        definition: "Used to execute a block of code when a specified condition is true.",
        code: `class Test {
    public static void main(String[] args) {
        int age = 20;

        if (age >= 18)
            System.out.println("Adult");
    }
}`
    },
    {
        id: 22,
        name: "implements",
        category: "OOP & Declarations",
        definition: "Used by a class to implement an interface.",
        code: `interface Animal {
    void sound();
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Bark");
    }
}`
    },
    {
        id: 23,
        name: "import",
        category: "Packages & Imports",
        definition: "Used to access classes and interfaces from another package.",
        code: `import java.util.Scanner;

class Test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`
    },
    {
        id: 24,
        name: "instanceof",
        category: "Operators & Expressions",
        definition: "Used to check whether an object belongs to a particular class or interface.",
        code: `class Test {
    public static void main(String[] args) {
        String name = "Eswar";

        System.out.println(name instanceof String);
    }
}`
    },
    {
        id: 25,
        name: "int",
        category: "Primitive Data Types",
        definition: "A data type used to store 32-bit signed integer values.",
        code: `class Test {
    public static void main(String[] args) {
        int age = 20;
        System.out.println(age);
    }
}`
    },
    {
        id: 26,
        name: "interface",
        category: "OOP & Declarations",
        definition: "Used to declare an interface containing abstract methods, constants, and other members.",
        code: `interface Animal {
    void sound();
}`
    },
    {
        id: 27,
        name: "long",
        category: "Primitive Data Types",
        definition: "A data type used to store 64-bit signed integer values.",
        code: `class Test {
    public static void main(String[] args) {
        long population = 1000000000L;
        System.out.println(population);
    }
}`
    },
    {
        id: 28,
        name: "native",
        category: "Modifiers & Keywords",
        definition: "Indicates that a method is implemented using native code outside Java, usually through JNI.",
        code: `class Test {
    public native void display();
}`
    },
    {
        id: 29,
        name: "new",
        category: "Operators & Memory",
        definition: "Used to create a new object or array.",
        code: `class Student {
}
class Test {
    public static void main(String[] args) {
        Student s = new Student();
    }
}`
    },
    {
        id: 30,
        name: "package",
        category: "Packages & Imports",
        definition: "Used to group related classes and interfaces.",
        code: `package mypackage;
class Test {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}`
    },
    {
        id: 31,
        name: "private",
        category: "Access Modifiers",
        definition: "An access modifier that allows access only within the same class.",
        code: `class Student {
    private int age = 20;
}`
    },
    {
        id: 32,
        name: "protected",
        category: "Access Modifiers",
        definition: "An access modifier that allows access within the same package and through inheritance.",
        code: `class Student {
    protected int age = 20;
}`
    },
    {
        id: 33,
        name: "public",
        category: "Access Modifiers",
        definition: "An access modifier that allows access from anywhere, subject to other rules.",
        code: `public class Test {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}`
    },
    {
        id: 34,
        name: "return",
        category: "Control Flow & Loops",
        definition: "Used to return a value from a method or terminate a method.",
        code: `class Test {
    static int add() {
        return 10 + 20;
    }
    public static void main(String[] args) {
        System.out.println(add());
    }
}`
    },
    {
        id: 35,
        name: "short",
        category: "Primitive Data Types",
        definition: "A data type used to store 16-bit signed integer values.",
        code: `class Test {
    public static void main(String[] args) {
        short number = 1000;
        System.out.println(number);
    }
}`
    },
    {
        id: 36,
        name: "static",
        category: "Modifiers & Keywords",
        definition: "Used to make a variable, method, or member belong to the class rather than individual objects.",
        code: `class Student {
    static String college = "ABC College";
    public static void main(String[] args) {
        System.out.println(college);
    }
}`
    },
    {
        id: 37,
        name: "strictfp",
        category: "Modifiers & Keywords",
        definition: "Used to ensure consistent floating-point calculations across different platforms.",
        code: `strictfp class Test {
    public static void main(String[] args) {
        double x = 10.5;
        System.out.println(x);
    }
}`
    },
    {
        id: 38,
        name: "super",
        category: "OOP & Declarations",
        definition: "Used to refer to the immediate parent class's members or constructor.",
        code: `class Animal {
    String name = "Animal";
}
class Dog extends Animal {
    String name = "Dog";
    void display() {
        System.out.println(super.name);
    }
}`
    },
    {
        id: 39,
        name: "switch",
        category: "Control Flow & Loops",
        definition: "Used to select and execute one block of code from multiple possible choices.",
        code: `class Test {
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
}`
    },
    {
        id: 40,
        name: "synchronized",
        category: "Concurrency & Threading",
        definition: "Used to control access to a shared resource by multiple threads.",
        code: `class Test {
    synchronized void display() {
        System.out.println("Hello");
    }
}`
    },
    {
        id: 41,
        name: "this",
        category: "OOP & Declarations",
        definition: "Refers to the current object of a class.",
        code: `class Student {
    int age;
    Student(int age) {
        this.age = age;
    }
}`
    },
    {
        id: 42,
        name: "throw",
        category: "Exception Handling & Debugging",
        definition: "Used to explicitly throw an exception.",
        code: `class Test {
    public static void main(String[] args) {
        throw new ArithmeticException("Error occurred");
    }
}`
    },
    {
        id: 43,
        name: "throws",
        category: "Exception Handling & Debugging",
        definition: "Used in a method declaration to specify exceptions that the method may throw.",
        code: `class Test {
    static void display() throws Exception {
        System.out.println("Hello");
    }
}`
    },
    {
        id: 44,
        name: "transient",
        category: "Serialization & Modifiers",
        definition: "Used to prevent a variable from being serialized.",
        code: `import java.io.Serializable;
class Student implements Serializable {
    String name = "Eswar";
    transient int age = 20;
}`
    },
    {
        id: 45,
        name: "try",
        category: "Exception Handling & Debugging",
        definition: "Used to define a block of code where exceptions may occur.",
        code: `class Test {
    public static void main(String[] args) {
        try {
            int x = 10 / 2;
            System.out.println(x);
        } catch (Exception e) {
            System.out.println("Error");
        }
    }
}`
    },
    {
        id: 46,
        name: "void",
        category: "Return Types & Methods",
        definition: "Specifies that a method does not return any value.",
        code: `class Test {
    static void display() {
        System.out.println("Hello");
    }
}`
    },
    {
        id: 47,
        name: "volatile",
        category: "Concurrency & Threading",
        definition: "Indicates that a variable's value may be changed by different threads and should be read from main memory.",
        code: `class Test {
    volatile boolean running = true;
}`
    },
    {
        id: 48,
        name: "while",
        category: "Control Flow & Loops",
        definition: "Used to repeatedly execute a block of code while a condition is true.",
        code: `class Test {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 3) {
            System.out.println(i);
            i++;
        }
    }
}`
    },
    {
        id: 49,
        name: "goto",
        category: "Reserved Words",
        definition: "Reserved keyword in Java but not used.",
        code: `class Test {
    public static void main(String[] args) {
        // goto is not supported in Java
        System.out.println("Java does not use goto");
    }
}`
    },
    {
        id: 50,
        name: "float",
        category: "Primitive Data Types",
        definition: "A data type used to store 32-bit floating-point numbers.",
        code: `class Test {
    public static void main(String[] args) {
        float marks = 85.5f;
        System.out.println(marks);
    }
}`
    }
];

// Single Large Combined Demo Program Code Verbatim
const javaKeywordsDemoCode = `// Program to demonstrate Java Keywords

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
        System.out.println("\\n===== IF ELSE =====");
        if (number > 40) {
            System.out.println("Number is greater than 40");
        } else {
            System.out.println("Number is less than or equal to 40");
        }
        // for, continue and break keywords
        System.out.println("\\n===== FOR LOOP =====");
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
        System.out.println("\\n===== WHILE LOOP =====");
        int i = 1;
        while (i <= 3) {
            System.out.println("While: " + i);
            i++;
        }
        // do keyword
        System.out.println("\\n===== DO WHILE LOOP =====");
        int j = 1;
        do {
            System.out.println("Do While: " + j);
            j++;
        } while (j <= 2);
        // switch, case and default keywords
        System.out.println("\\n===== SWITCH =====");
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
        System.out.println("\\n===== ENUM =====");
        Color color = Color.RED;
        System.out.println("Color = " + color);
        // new keyword
        Dog d = new Dog(20);
        // extends, implements, this and super
        System.out.println("\\n===== INHERITANCE =====");
        d.show();
        d.sound();
        // instanceof keyword
        System.out.println("\\n===== INSTANCEOF =====");
        if (d instanceof Dog) {
            System.out.println("d is an object of Dog");
        }
        // final keyword
        System.out.println("\\n===== FINAL =====");
        final int MAX = 100;
        System.out.println("Final value = " + MAX);
        // static keyword
        System.out.println("\\n===== STATIC =====");
        JavaKeywordsDemo.count++;
        System.out.println("Count = " + JavaKeywordsDemo.count);
        // return keyword
        System.out.println("\\n===== RETURN =====");
        int result = add(10, 20);
        System.out.println("Addition = " + result);
        // try, catch and finally
        System.out.println("\\n===== EXCEPTION HANDLING =====");
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
        System.out.println("\\n===== THROW =====");
        try {
            throw new Exception("My Exception");
        } catch (Exception e) {
            System.out.println("Exception thrown manually");
        }
        // assert keyword
        System.out.println("\\n===== ASSERT =====");
        assert number > 0 : "Number must be positive";
        System.out.println("Assertion passed");


        // synchronized keyword
        System.out.println("\\n===== SYNCHRONIZED =====");
        synchronized (JavaKeywordsDemo.class) {
            System.out.println("Synchronized block executed");
        }
        // transient keyword
        System.out.println("\\n===== TRANSIENT =====");
        JavaKeywordsDemo obj = new JavaKeywordsDemo();
        System.out.println("Transient value = " + obj.temp);
        // volatile keyword
        System.out.println("\\n===== VOLATILE =====");
        obj.running = false;
        System.out.println("Running = " + obj.running);
        // const and goto are reserved keywords
        System.out.println("\\n===== RESERVED KEYWORDS =====");
        System.out.println("const and goto are reserved keywords");
        System.out.println("They are not used in Java");
        // strictfp keyword
        System.out.println("\\n===== STRICTFP =====");
        System.out.println("strictfp is a Java keyword");
        // native keyword
        System.out.println("\\n===== NATIVE =====");
        System.out.println("native is used for methods implemented outside Java");
        // package keyword
        System.out.println("\\n===== PACKAGE =====");
        System.out.println("package is used to group related classes");
        // throws keyword
        System.out.println("\\n===== THROWS =====");
        System.out.println("throws specifies exceptions that a method may throw");
    }
  // static, int and return keywords
    static int add(int a, int b) {
        return a + b;
    }
}`;

// Single Large Combined Demo Console Output Verbatim
const javaKeywordsDemoOutput = `===== DATA TYPES =====
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
throws specifies exceptions that a method may throw`;

// Application Initialization
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderKeywordsTable(javaKeywordsData);
    renderKeywordsAccordion(javaKeywordsData);
    renderFullDemoProgram();
    setupSearchAndFilter();
    setupBackToTop();
    setupDeepLinking();
});

// Theme Management (Light / Dark mode using Bootstrap 5.3 data-bs-theme)
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('javaExplorerTheme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('javaExplorerTheme', newTheme);
        });
    }
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.className = 'bi bi-sun-fill text-warning';
        } else {
            themeIcon.className = 'bi bi-moon-stars-fill text-secondary';
        }
    }
}

// Render Keywords Reference Table
function renderKeywordsTable(data) {
    const tableBody = document.getElementById('keywordsTableBody');
    const countBadge = document.getElementById('tableCountBadge');

    if (!tableBody) return;
    tableBody.innerHTML = '';

    if (countBadge) {
        countBadge.textContent = `${data.length} keywords found`;
    }

    if (data.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center py-5 text-muted">
                    <i class="bi bi-search fs-1 d-block mb-3 opacity-50"></i>
                    No keywords match your search filter.
                </td>
            </tr>
        `;
        return;
    }

    data.forEach(item => {
        const row = document.createElement('tr');
        row.id = `table-row-${item.name}`;
        row.innerHTML = `
            <td class="text-muted fw-bold">${item.id}</td>
            <td>
                <span class="keyword-badge">${escapeHtml(item.name)}</span>
            </td>
            <td><span class="badge bg-secondary bg-opacity-25 text-body border">${escapeHtml(item.category)}</span></td>
            <td>${escapeHtml(item.definition)}</td>
            <td class="text-end">
                <a href="#keyword-${item.name}" class="btn btn-sm btn-outline-danger me-1" onclick="navigateToKeyword('${item.name}')">
                    <i class="bi bi-code-slash me-1"></i> Example
                </a>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Render Keyword Examples Accordion
function renderKeywordsAccordion(data) {
    const accordionContainer = document.getElementById('keywordsAccordion');
    if (!accordionContainer) return;
    accordionContainer.innerHTML = '';

    data.forEach(item => {
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item custom-card mb-3 shadow-sm';
        accordionItem.id = `keyword-${item.name}`;

        accordionItem.innerHTML = `
            <h2 class="accordion-header" id="heading-${item.id}">
                <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${item.id}" aria-expanded="false" aria-controls="collapse-${item.id}">
                    <span class="badge bg-danger me-3 font-mono">#${item.id}</span>
                    <strong class="font-mono fs-5 text-java me-3">${escapeHtml(item.name)}</strong>
                    <span class="badge bg-secondary bg-opacity-25 text-body border me-auto">${escapeHtml(item.category)}</span>
                </button>
            </h2>
            <div id="collapse-${item.id}" class="accordion-collapse collapse" aria-labelledby="heading-${item.id}" data-bs-parent="#keywordsAccordion">
                <div class="accordion-body">
                    <p class="lead fs-6 mb-3 text-body-secondary">${escapeHtml(item.definition)}</p>
                    
                    <div class="code-block-wrapper mb-3">
                        <div class="code-header">
                            <span><i class="bi bi-file-earmark-code me-2"></i>${escapeHtml(item.name)}.java</span>
                            <button class="btn btn-copy" onclick="copyCode(this, \`keyword-code-${item.id}\`)">
                                <i class="bi bi-clipboard me-1"></i> Copy Code
                            </button>
                        </div>
                        <pre><code id="keyword-code-${item.id}" class="language-java">${escapeHtml(item.code)}</code></pre>
                    </div>

                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted font-mono">Anchor: #keyword-${item.name}</small>
                        <button class="btn btn-sm btn-link text-decoration-none" onclick="copyDirectLink('${item.name}')">
                            <i class="bi bi-link-45deg me-1"></i> Share Direct Link
                        </button>
                    </div>
                </div>
            </div>
        `;
        accordionContainer.appendChild(accordionItem);
    });

    if (window.Prism) {
        Prism.highlightAll();
    }
}

// Render Combined Demo Program
function renderFullDemoProgram() {
    const demoCodeElement = document.getElementById('fullDemoCode');
    const demoOutputElement = document.getElementById('fullDemoOutput');

    if (demoCodeElement) {
        demoCodeElement.textContent = javaKeywordsDemoCode;
    }
    if (demoOutputElement) {
        demoOutputElement.textContent = javaKeywordsDemoOutput;
    }

    if (window.Prism) {
        Prism.highlightAll();
    }
}

// Live Search & Category Filtering
function setupSearchAndFilter() {
    const searchInput = document.getElementById('keywordSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    const filterPills = document.querySelectorAll('.pill-filter');

    let currentSearch = '';
    let currentCategory = 'ALL';

    function applyFilter() {
        const filtered = javaKeywordsData.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(currentSearch) ||
                                  item.definition.toLowerCase().includes(currentSearch) ||
                                  item.category.toLowerCase().includes(currentSearch);
            
            const matchesCategory = currentCategory === 'ALL' || item.category === currentCategory;

            return matchesSearch && matchesCategory;
        });

        renderKeywordsTable(filtered);
        
        // Hide/Show Accordion Items
        javaKeywordsData.forEach(item => {
            const accEl = document.getElementById(`keyword-${item.name}`);
            if (accEl) {
                const isMatch = filtered.some(f => f.id === item.id);
                if (isMatch) {
                    accEl.classList.remove('d-none');
                } else {
                    accEl.classList.add('d-none');
                }
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.trim().toLowerCase();
            if (clearBtn) {
                clearBtn.style.display = currentSearch ? 'block' : 'none';
            }
            applyFilter();
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            currentSearch = '';
            clearBtn.style.display = 'none';
            applyFilter();
        });
    }

    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.getAttribute('data-category');
            applyFilter();
        });
    });
}

// Copy Code to Clipboard with Toast Feedback
function copyCode(btnElement, targetElementId) {
    const codeElement = document.getElementById(targetElementId);
    if (!codeElement) return;

    const textToCopy = codeElement.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('Code copied to clipboard!');
        
        if (btnElement) {
            const originalHTML = btnElement.innerHTML;
            btnElement.innerHTML = '<i class="bi bi-check2 me-1"></i> Copied!';
            btnElement.classList.add('btn-success');
            btnElement.classList.remove('btn-copy');
            setTimeout(() => {
                btnElement.innerHTML = originalHTML;
                btnElement.classList.remove('btn-success');
                btnElement.classList.add('btn-copy');
            }, 2000);
        }
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Copy Direct Deep Link
function copyDirectLink(keywordName) {
    const url = `${window.location.origin}${window.location.pathname}#keyword-${keywordName}`;
    navigator.clipboard.writeText(url).then(() => {
        showToast(`Link for #${keywordName} copied to clipboard!`);
    });
}

// Show Toast Notification
function showToast(message) {
    const toastMessage = document.getElementById('toastMessage');
    const toastElement = document.getElementById('copyToast');

    if (toastMessage) toastMessage.textContent = message;
    if (toastElement && window.bootstrap) {
        const toast = new bootstrap.Toast(toastElement, { delay: 2500 });
        toast.show();
    }
}

// Back to Top Floating Button
function setupBackToTop() {
    const backToTopBtn = document.getElementById('btnBackToTop');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Deep Linking Handler (#keyword-[name] or #keyword-[id])
function setupDeepLinking() {
    window.addEventListener('hashchange', handleHash);
    handleHash();
}

function handleHash() {
    const hash = window.location.hash;
    if (!hash) return;

    const targetEl = document.querySelector(hash);
    if (targetEl) {
        setTimeout(() => {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            targetEl.classList.add('highlight-target');
            setTimeout(() => targetEl.classList.remove('highlight-target'), 2000);

            // If inside accordion, trigger expand
            const collapseChild = targetEl.querySelector('.accordion-collapse');
            if (collapseChild && window.bootstrap) {
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseChild);
                bsCollapse.show();
            }
        }, 150);
    }
}

function navigateToKeyword(name) {
    window.location.hash = `#keyword-${name}`;
}

// Helper to escape HTML characters
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
