const num1 = +prompt("Enter first number");
const num2 = +prompt("Enter second number");
const symbol = prompt("Enter the math symbol");

function calc(a, b, s) {
    try {
        if (!isNaN(parseInt(a)) && !isNaN(parseInt(b)) ) {
            switch (s) {
                case "+":
                    return a + b;
                case "-":
                    return a - b;
                case "*":
                    return a * b;
                case "/":
                    try {
                        if (b === 0) {
                            throw Error("number is not divided to 0");
                        }
                    } catch (err) {
                        console.log(err);
                    }
                    return a / b;

                default:
                    try {
                        if(s !== "+" || s !== "-" || s !== "*" || s !== "/") {
                            throw Error("Wrong symbol");
                        }
                    } catch (err) {
                        return err;
                    }
            }
        } else {
            throw Error("Num1 or Num2 is not a number");
        }
    } catch (err) {
        return err;
    }
}

console.log(calc(num1, num2, symbol));

console.log("Out of function");