let numbers = [1, 2, 3];
console.log(numbers.length);

function isArrayLengthOdd(numbers) {
  if ((numbers.length - 1) / 2 == 1) {
    return true;
  } else {
    return false;
  }
}

console.log(isArrayLengthOdd(numbers));

let numbers2 = [1, 2, 3, 4];
console.log(numbers2.length);

function isArrayLengthEven(numbers2) {
  if (numbers2.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isArrayLengthEven(numbers2));

// ////////

const instructors = [`meshary`, `hasan`];
