console.log("Hello world")
//Method of Array
const arr = [1, 23, 54, 6, 7, 8, 32]
//PUSH
console.log(arr,"Original Value")
arr.push(59)
console.log(arr,"value pushed");
//POP
console.log(arr,"Original Value")
arr.pop();
console.log(arr,"last value removed");
//unshift
console.log(arr,"Original Value")
arr.unshift(59);
console.log(arr,"value added to begining");
//shift
console.log(arr,"Original Value")
arr.shift();
console.log(arr,"first value removed");
//sorting
console.log(arr,"Original Value")
arr.sort((a, b) => a - b);
console.log(arr,"sorted valued in ascending order");
//reverse
console.log(arr,"Original Value")
arr.reverse();
console.log(arr,"values reversed (descending order)")
//slice
console.log(arr,"Original Value")
//slice(starIndex, endIndex);
//startIndex included
//endIndex excluded
const newArr = arr.slice(2,4);
console.log(newArr,"sliced values");
//splice
//splice(start, delect count, item1, item2)
//return(deleted items)
console.log(arr,"Original Value")
const splArr = arr.splice(1, 2);
console.log(splArr,"spliced values");
//MRF(MAP, FILTER, REDUCE)
//Map returns a new array for given conditions
//and loop through original array

console.log("******MAP*****");
const mrf_arr = [1, 3, 4, 5, 7, 8, 9];
console.log("mrf arry", mrf_arr);

const mapped_Arr = mrf_arr.map((value, index, accArr) => {
    console.log(`
  Value : ${value}
  Index : ${index}
  accArr: ${accArr}
  `);
    return value * 2;
  });
  console.log("mrf array", mrf_arr);
  console.log("Mapped array", mapped_Arr);
  
  // mrf_arr.map((value, index, accArr) => {});
  //Polyfills
  Array.prototype.guviMap = function (fn) {
    let new_Arr = [];
    for (let i = 0; i < this.length; i++) {
      new_Arr.push(fn(this[i], i, this));
    }
    return new_Arr;
  };
  
  console.log("-------Guvi Map-------");
  
  const guviMapped = mrf_arr.guviMap((value, index, accArr) => {
    console.log(`
          Value : ${value}
          Index : ${index}
          accArr: ${accArr}
          `);
    return value * 2;
  });
  console.log("mrf guvi array", mrf_arr);
  console.log("Guvi arrayaravind", guviMapped);
  console.log("Hello world")