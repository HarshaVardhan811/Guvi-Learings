//a. Print odd numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = numbers.filter(number => number % 2 !== 0);
oddNumbers.forEach(oddNumber => console.log(oddNumber))

// b.Convert all the strings to title caps in a string arra

var stringArray = ["hello world", "javascript is awesome", "arrow functions are cool"];
var titleCapsArray = stringArray.map(str => str.split(' ')
     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
     .join(' ')
 console.log(titleCapsArray)
      
// c.Sum of all numbers in an array

var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 console.log(sum)

// d.Return all the prime numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 var isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
 };
var primeNumbers = numbers.filter(number => isPrime(number));
console.log(primeNumbers);

// e.Return all the palindromes in an array

var words = ["level", "hello", "radar", "world", "deed"];
var isPalindrome = word => {
var reversedWord = word.split('').reverse().join('');
   return word === reversedWord;
 };
   const palindromeWords = words.filter(word => isPalindrome(word));

   console.log(palindromeWords);