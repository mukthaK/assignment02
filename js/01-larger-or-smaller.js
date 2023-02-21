let num1 = parseInt(prompt('enter first integer'));
let num2 = parseInt(prompt('enter second integer'));
if (num1 > num2){
    document.write(`Larger number is ${num1}`);
} else if (num2 > num1) {
    document.write(`Larger number is ${num2}`);
} else {
    document.write('Both numbers are Equal');
}