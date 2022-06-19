function moduloEx6(num1, num2) {
  let result;
  if (num1 > num2 && num1 % num2 !== 0) {
    result = `The number ${num1} is bigger than ${num2}. But the modulo of ${num1} % ${num2} is ${num1 % num2}`;
  } else if (num1 > num2) {
    result = `The number ${num1} is bigger than ${num2}`;
  } else if (num1 === num2) {
    result = `The number ${num1} is equal to ${num2}`;
  } else {
    result = `The number ${num1} is less than ${num2}`;
  }
  const modulo = document.getElementById('output');
  modulo.innerText = result;
}

moduloEx6(7, 2)