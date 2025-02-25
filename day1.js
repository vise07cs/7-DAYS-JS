//  day 01


// closures
// -----------------

// A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing. This allows the inner function to access and manipulate those variables even when called later.

// rejouice website

// example 1


function abc(){
  let x=10;
  function xyz(){
    console.log(x+10);
  }
  xyz()
}
abc();

// example 2

function  abc(){
  let x=10;
  function xyz(){
    x=x+20;
    return x;
     
  }
  let result=xyz();
  console.log(result);
}
abc();


// example 3;
function outer() {
  let message = "Hello, Closures!"; // Outer function variable

  return function inner() {
      console.log(message); // Inner function remembers `message`
  };
}

const myClosure = outer(); // outer() executes and returns inner function
myClosure(); // Output: Hello, Closures!


// example 4;

function outer() {
  let count = 0; // `count` is in the outer function scope

  return function inner() {
      count++;
      console.log(count);
  };
}

const counter = outer();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3



// example 5

function createCounter() {
  let count = 0;

  return {
      increment: function () {
          count++;
          console.log(count);
      },
      decrement: function () {
          count--;
          console.log(count);
      }
  };
}

const counter2 = createCounter();
counter2.increment(); // Output: 1
counter2.increment(); // Output: 2
counter2.decrement(); // Output: 1




