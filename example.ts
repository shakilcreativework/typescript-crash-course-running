function divide(a:number, b:number):number{
    if(b === 0){
        throw new Error("Division by zero is no allowed");
    }
    return a / b;
}

console.log(divide(10, 5));