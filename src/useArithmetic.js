const plus = (x,y) => {
    return x+y;
}

const minus = (x,y) => {
    return x-y;
}

const multiply = (x,y) => {
    return x*y;
}

const divide = (x,y) => {
    return x/y;
}

const modulus = (x,y) => {
    return x%y;
}

const toThePower = (x,y) => {
    return x**y;
}

const comparison = (x,y) => {
    return x === y;
}

export default function useArithmetic(x,y,operator){
    switch(operator){
        case "+": 
            return plus(x,y);
        case "-": 
            return minus(x,y);
        case "*":
            return multiply(x,y);
        case "/":
            return divide(x,y);
        case "%":
            return modulus(x,y);
        case "**":
            return toThePower(x,y);
        default:
            return comparison(x,y);
    }
}
