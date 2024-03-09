console.log("Hello world")
//Re-declaration & reinitialization
var a = 25;
var a = 15;
console.log(a);

//let
let b = 30;
// let b =35; redeclaration is not possible
b = 35 ; // reinitialization is possible.
console.log(b);
// const
const c =30;
//const c =25; redeclaration and reinitialization is not possible.
console.log(c);
//block scope(let and const)
if (true){
    var x = "aravind"
    console.log("inblock",x);
}
console.log("outblock",x);
//let and const  cant access outside block
//(var can be accessed outside the block)
if(true){    
let xyz = 20;
//console.log(xyz); not (inner to outer)
if(true){
    let zyx = 15;
    console.log("Inner block", zyx);//outer to inner
}
}
function scopefun(){
    let func_var = 36; //console.log(func_var); inner to outer (error)
    if (true){
        //let func_var = 36;
        console.log(func_var) // outer to inner (possible)
    }
}
scopefun();

//shadowing property
if (true)
{
    const shadow_var = "aravind";
    if(true){
        const shadow_var = "balakrishnan"
        console.log("sub block",shadow_var);
    }
    console.log("sub block",shadow_var);
}

// spread and rest operator
const col_arr = ["apple", "bannana","grapes", "milk"];
console.log(col_arr);
console.log(...col_arr);
const batch1 = ["aravind","balakrishnan"]
const batch2 = ["arun","kumar"]
const batch3 = ["anand","balakrishnan"]
console.log(batch1,batch2,batch3)
const allBatch = [...batch1,...batch2,...batch3] 
console.log(allBatch);
//rest operator.

function getAllData(data1,data2,...all){
    console.log(data1);
    console.log(data2);
    console.log("remaining:",all)
}2
getAllData('aravind', 'balakrishnan', 'arun', 'kumar', 'anand', 'balakrishnan')

//Array destructuring...
//["ele", "ele2"]
const studArr = ["subash", "sanjai", ["aravind", "prahsall"]];
console.log("--------normal structure---------");
console.log(studArr);
console.log(studArr[0]);
console.log(studArr[1]);
console.log("--------de structure---------");
const [name1, , [name3, name4]] = studArr;
//[name1, ,name3] = ["subash", "sanjai", ["aravind", "prahsall"]]
//name1 = subash
// , , = sanjai
//[name3, name4] = ["aravind", "prahsall"]
console.log(name1);
console.log(name3);
console.log(name4);
//task
const men_Arr = [1, 3, 5, 6, ["Sanjay", 25], 9];
const [, , , , [menName, menAge]] = men_Arr;
//mentorName and MentorAge
console.log("task---------", menName, menAge);
//Object destructuring
const data = {
  firstName: "sanjay",
  lastname: "guvi",
  pos: "mentor",
  loc: "chennai",
  company: {
    loc: "chennai",
    country: "India",
    state: "Tamil Nandu",
  },
};
console.log("....normal structure");
console.log(data);
console.log(data.firstName, data.lastname);
const {
  firstName,
  pos,
  lastname: lName,
  company: { loc, state: comState, country },
} = data;

console.log(firstName); //sanjay
console.log(pos); //mentor
console.log(lName); // guvi (renamed)
console.log(loc); //chennai
console.log(comState); //tamil nadu (nested, renamed)
console.log(country); // INDIA

//property shorthand
let batch = "FSD55WD2";
let Time = "8.00 AM";

const schedule = {
  topic: "ES6 JS",
  batch,
  time: Time,
};
console.log(schedule);

// Template literals
const greet = "how are your";
const yourSelf = "I am mentor in guvi";
const totalGreetMsg = "Hi " + greet + " " + yourSelf;
const templateStr = `Hi 
${greet} 
${yourSelf}
`;
console.log(totalGreetMsg);
console.log(templateStr);