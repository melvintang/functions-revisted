// Long Question 1
function wordReverse(str){
  var strArr = str.split("")

  })

for (var i = str.length - 1; i>0; i--){
  console.log strArr[i]
}

lengths(words);

//Short Question 4a
// that sums all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10,
var x = [1,2,3,4];

function sumArray (x) {
  var total = x.reduce(function(a,b){
    return a+b;
   });
   return total
}
sumArray(x);

//Short Question 4b
var x = [1,2,3,4,5];

// that sums and multiplies (respectively) all the numbers in an array of numbers.
function multiplyArray(x){
   var result = x.reduce(function(a,b){
   	console.log(a,b)
    return a*b
   })
   return result
}
multiplyArray(x);




// Short Question 7
var strArr = ["hello", "it's", "me"]

strArr.reduce(function(prev, curr){
  console.log('prev: 'prev);
  console.log('curr: 'curr);

  if (prev.length > curr.length) {
    return prev.length
    else {
      return curr.length
    }
  }
})

//Short question 8
var strArr = ["hello", "it's", "me"]
strArr.forEach(foo);

// foo is the function, word is each word in the array
function foo(word) {
  console.log(word);
  console.console.log(word[0]);
}

// foo is the function, word is each word in the array
function foo(word, index) {
  if (index === 0 ) {
    console.log(word);
  }
}
