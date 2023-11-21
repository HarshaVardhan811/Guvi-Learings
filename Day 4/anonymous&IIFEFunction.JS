// a. Print odd numbers in an array

// Arrowfunction
var OddNumbers = function(array) {
    for (let num of array) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
};
OddNumbers([1, 2, 3, 4, 5]);

// IIFE
(function(array) {
    for (let num of array) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
})([1, 2, 3, 4, 5]);

// b.Convert all the strings to title caps in a string array

// Arrowfunction
var stringArray =["ram", "charan", "tej"];

var titleCaseStrings = function (arr) {
  return arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
}(stringArray);

console.log(titleCaseStrings);

// IIFE
var stringArray = ["ram", "charan", "tej"];

var titleCaseStrings = (function (arr) {
  return arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
})(stringArray);

console.log(titleCaseStrings);

// c.Sum of all numbers in an array

// Arrowfunction
var numberArray = [1, 2, 3, 4, 5];

var sum = function (arr) {
  return arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);
}(numberArray);
console.log(sum);

// IIFE
var numberArray = [10, 20, 30, 40, 50];

var sum = (function (arr) {
  return arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);
})(numberArray);

console.log(sum);

// d.Return all the prime numbers in an array

// Arrowfunction
var numberArr = [2, 3, 5, 8, 11, 13, 17];

var getPrimes = function (arr) {
  return arr.filter(function (num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
}(numberArr);

console.log(getPrimes);

// IIFE
var numberArray = [7, 9, 12, 19, 23, 29];

var getPrimes1 = (function (arr) {
  return arr.filter(function (num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
})(numberArray);

console.log(getPrimes1);

// e.Return all the palindromes in an array

// Arrowfunction
var stringArray = ["level", "hello", "civic", "world", "radar"];

var getPalindromes = function (arr) {
  return arr.filter(function (str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  });
}(stringArray1);

console.log(getPalindromes);

// IIFE
var stringArray1 = ["madam", "hello", "noon", "world", "deed"];

var getPalindromes1 = (function (arr) {
  return arr.filter(function (str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  });
})(stringArray1);

console.log(getPalindromes1);

// f.Return median of two sorted arrays of the same size

// Arrowfunction
var array1 = [10, 20, 30, 40, 50];
var array2 = [60, 70, 80, 90, 100];

var median1 = function (arr1, arr2) {
    var mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    var mid = Math.floor(mergedArray.length / 2);
  
  if (mergedArray.length % 2 === 0) {
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    return mergedArray[mid];
  }
}(array1, array2);

console.log(median1);

// IIFE
var array5 = [11, 12, 13, 14, 15];
var array6 = [16, 17, 18, 19, 20];

var median2 = (function (arr1, arr2) {
    var mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    var mid = Math.floor(mergedArray.length / 2);
  
  if (mergedArray.length % 2 === 0) {
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    return mergedArray[mid];
  }
})(array5, array6);

console.log(median2);

// g.Remove duplicates from an array

// Arrowfunction
var array = [1, 2, 2, 3, 4, 4, 5];

var removeDuplicates = function (arr) {
  return arr.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}(array);

console.log(removeDuplicates);

// IIFE
var array = [5, 6, 7, 6, 8, 9, 9];

var removeDuplicates = (function (arr) {
  return arr.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
})(array);

console.log(removeDuplicates);

// h.Rotate an array by k times

// Arrowfunction
var rotateArrayAnonymous = function(arr, k) {
    for (let i = 0; i < k; i++) {
      let temp = arr.pop();
      arr.unshift(temp);
    }
    return arr;
  };

// IIFE
  var rotateArrayIIFE = (function(arr, k) {
    for (let i = 0; i < k; i++) {
      let temp = arr.pop();
      arr.unshift(temp);
    }
    return arr;
  })([1, 2, 3, 4, 5], 2);