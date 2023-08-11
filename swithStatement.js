function calculate(operator, num1, num2) {
    let result;
  
    switch (operator) {
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
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Cannot divide by zero';
        }
        break;
      default:
        result = 'Invalid operator';
    }
  
    return result;
  }
  
  const addition = calculate('+', 5, 3); // Result: 8
  const subtraction = calculate('-', 10, 4); // Result: 6
  const multiplication = calculate('*', 6, 2); // Result: 12
  const division = calculate('/', 8, 2); // Result: 4
  const divisionByZero = calculate('/', 10, 0); // Result: "Cannot divide by zero"
  const invalidOperator = calculate('%', 5, 2); // Result: "Invalid operator"
  