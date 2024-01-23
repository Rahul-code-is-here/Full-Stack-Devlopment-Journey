Math.round(1.8);
Math.min(2,3); // inbuilt method
Math.abs(-8); // inbuilt method output 8

// strings are two types  
//1] primitives type
let lastname= "babbabb";
//2] object types
let lastName= new String("babbar");

// primitive to object convert   : .notation lagavie etle js tene object lai leshe
//examples :
lastname.toLowerCase();
lastname.toUpperCase();
lastname.length;
lastname.startsWith('ba'); 
lastname.endsWith('nj');
lastname.trim();
lastname.trimStart();
lastname.trimEnd();
lastname.indexOf('lastname');
lastname.replace('ba', 'ca');
lastname.includes('ba');

let message =" this is my first message ";
let words= message.split(' ');

console.log(words);

// 3] templet literals

  // escape notation  ', " " banne ne sathe use na kari shakaoi
  //                   '\ " " aa rite use kari shakie

  let message1 =" this \n is my first message ";
  console.log(message1)

  // \n na use vagar new line message na amuk part ne new line ma kai rite print karavi
  // e templet literals thi possible 
  // `` no use karine ne kari shakie e 

  let mess= `this
  is 
  new 
  mess with backtik`;
  console.log(mess);

  // we can also use dynamic also
  
  let mess1= `this is ${lastname}`;  // this is place holder
  console.log(mess1);

  //date and time
  
  let date = new Date();
  console.log(date);  // current date

  let date2= new Date('june 20 1998 07:15');
  console.log(date2);

  let date3= new Date(1998,11,20,7);  //0 thi month ni counting thashe so 11 means december
  console.log(date3);

  date3.setUTCFullYear(1947);
  // date3.getTime();  getter setter through time be nikali shakie
  console.log(date3);


  // Array

  let numbers= [2,3,4,5,8];
  console.log(numbers);

  console.log[0];

  // insertion operation on array
  // -1] end
  numbers.push(9);
  console.log(numbers);

// -2]begin
 numbers.unshift(8);
 console.log(numbers);

 // -3] middle
//  numbers.splice(index, delete count, je insert karvu hoi e ahi);
 numbers.splice(2,0,'a','b','c');
 console.log(numbers);


 //searching
 console.log(numbers);

 console.log(numbers.indexOf(9));  //output  9 kem ke 9 array ma che

 if(numbers.indexOf(4) != -1){
     console.log("present");
 }

 //best practice aa che .include
 console.log(numbers.includes(10));
 
 // 4 numbers ma exist kare che k nahi e be 2nd index thi check karshe. 2nd to last sudhi 4 exist kare ke nahi?
 console.log(numbers.indexOf(4,2)); 


 //noww lwt's talk about object
 let courses = [  
  {no:1, naam:'Love'},
  {no:2, naam:'Rahul'}
 ]
 
 console.log(courses);
 console.log(courses.indexOf({no:1, naam:'Love'}));  //output -1 but why?
 console.log(courses.includes({no:1, naam:'Love'}));  //output -1 but why?

 // because uper primitive ni vaat thati ti, primitive ma original value ne point etle emne compare  kare and have object aavyo
 // object ma baane course no {no:1, naam:'Love'} and console.log no {no:1, naam:'Love'} banne alag adress par che

 //etle object ma search karva "call back" function no use thai

 //callback funsction is function passed into another functionas an argument
//  example

// function greeting(name){
//   alert('hello, ${name}');
// }

// function processUserInput(callback) {
//   const name= prompt("please enter your name");
//   callback(name);
// }

// processUserInput(greeting);

//function 1 ni andar function 2 che.  function 2 ne call karie chie amuk kam ne fullfill arva tene call back function kahie chie

let courses1 = [  
  {no:1, naam:'Love'},
  {no:2, naam:'Rahul'}
 ]  

 //predicate function
let course= courses.find(function(course){//function na input parameter array ni andar je object che e aavshe
  return course.naam === 'Love';  // je value nai hoi ena mate undefine
})

//object ma search karva arrayname.find and pachi prediket function(call back function)(comparison function) (kis condition ke aadhar pe us function ko find karne vale ho)

console.log(course);

// aa function ne short ma lakhvani method arrow function

//function remove kari arrow lagavo
//input parameter single hoi to () remove
// agar singlr line of code che to  aa bracket {} ne pan kadhi and return pan kadhi nakkho
let coursee=courses1.find(course =>  course.naam === 'Rahul');
//koi esa course find out karo jiska name Rahul  ho


//Removing elements

//1] end -> pop
//2] begin ->shift
//3 middle ->splice(3,4)  3 index and 4 ketala element remove

let arr = [1,2,3,4,5,6,7,8];
arr.pop();
arr.shift();
arr.splice(2,1);

console.log(arr);



//emptying array
let numbers1=[1,2,3,4,5,6,7,8];
let numbers2=numbers1;

// numbers1 =[];  // aa method efficient nathi

//better method
numbers1.length=0;

console.log(numbers1);
console.log(numbers2);

// 3rd method
numbers1.splice(0,numbers1.length);

//4th method
while(numbers1.length>0){
  numbers1.pop();
}



//combinig & slicing Arrays

let first= [1,2,3];
let second= [4,5,6];

let combined = first.concat(second);
console.log(combined);

let sliced= combined.slice(2,3);  // 2 ne include karashe 3 ne nai kare etle only 2nd index e je che e ans
console.log(sliced);

let marks= [10,20,30,40,50,60,70,80];
let slice1=marks.slice(2,6); 
console.log(slice1);// 2 thi 5 index sudhina array elemnt print thashe

console.log(marks.slice());  //aakho array copy

//spread operator

let first1= [1,2,3];
let second2= [4,5,6];

let comnbination = [...first1, ...second2];  // vache value add karava , pachi je add karavu e add  kari devnau
console.log(comnbination);

//copy
let another =[...comnbination];

//iterating array
let arr2= [10,20,30,40,50];
for(let value of arr){
  console.log(value);
}

//forEach loop
arr.forEach(function(number){  // for each in andar call-back function 
  console.log(number);
})

// convert into arrow function
arr.forEach(number => console.log(number));


//joining array

let arr3= [10,20,30,40,50];
const joined= arr3.join(',');

console.log(joined);

// split the array

let messages = "this is my first messsagess";
let parts= messages.split(' ');
console.log(parts);

let joined1=parts.join('_');
console.log(joined1)

//sort
arr3.sort;
arr3.reverse;

//filtering array   filter method and e ni andar call back thai jashe. 

let num = [1,2,-1,-4];

let filtred= num.filter(function(value){
  return value>=0;
})

console.log(filtred);
//convertib in arrow function

let filtred1= num.filter(value => value>=0);


//mapping map() thi thashe

let nums= [7,8,9,10];

let items= nums.map(function(value){
  return 'student_no ' + value;
})

//convertib in arrow function
let items1= nums.map(value =>  'student_no ' + value);

let items2= filtred.map(function(num){
  return {value: num}; //object literals
})

console.log(items2);

//convertib in arrow function
let items3= filtred.map(num =>  {value: num});


//chainning  filter ni jgyae e filter ma je store karyu e j direct tya past
let item23= 
num.filter(value => value>=0)
.map(num =>  {value: num})

console.log(item23);