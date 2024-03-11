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
  
  //Filters
console.log("-----------Filters---------")
const filter_Arr= mrf_arr.filter((val, index, accArr) =>{
  console.log(`
  Value : ${val}
  index : ${index}
  accArr : ${accArr}
  `);
  return val !=4;//boolean

});
console.log(mrf_arr);
console.log(filter_Arr);

//polyfill for filter

Array.prototype.guvifilter = function (fn) {
  let newArr = [];
  for (let i =0; i< this.length; i++){
    if(fn(this[i], this)){
      newArr.push(this[i]);
    }
  }
  return newArr;
};

console.log("-------guvi filter-------")
const guvifilter_Arr = mrf_arr.guvifilter((val, index, accArr) =>{
  console.log(`
  Value : ${val}
  Index: ${index}
  accArr: ${accArr}
  `);
  return val !=4; //boolean
});
console.log(mrf_arr);
console.log(guvifilter_Arr);

consolg.log("----------Reduce-----------")
const reducedvalue = mrf_arr.reduce((acc, val, index, accArr) => {
  console.log(`
  value: ${val}
  index: ${index}
  accArr: ${accArr}
  `);
  acc.value = acc.value + val;
  acc.length = index +1;
  return acc;
}
{value:0, length:0}
);

//Polyfill for accumlator

