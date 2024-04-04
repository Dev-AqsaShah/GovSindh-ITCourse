//Question Num 73- Assigning and updating Variables:
function updateVariable() {
    var number = 10;
    console.log("Inintial value:", number);
    number = 20;
    console.log("Updated value:", number);
}
updateVariable();
//Question Number 74- Swapping Variables:
function swapValues() {
    var a = 5, b = 10;
    console.log("Before swap: a =", a, "b =, b");
    var temp = a;
    a = b;
    b = temp;
    console.log("After swap: a =", a, "b =", b);
}
swapValues();
//Question num 75- Compound Assignment Operators:
function useCompoundOperators() {
    var x = 4;
    console.log("Initial x:", x);
    x += 2;
    console.log("After addition:", x);
    x -= 1;
    console.log("After subtraction:", x);
    x *= 3;
    console.log("After Multiplication:", x);
    x /= 2;
    console.log("After division:", x);
}
useCompoundOperators();
