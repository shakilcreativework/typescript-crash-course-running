function divide(a:number, b:number):number{
    if(b === 0){
        throw new Error("Division by zero is no allowed");
    }
    return a / b;
}

console.log(divide(15, 5));

const result = divide(32, 2);
console.log(result.toFixed(2));