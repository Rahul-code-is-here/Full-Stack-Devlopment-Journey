console.log("chalo sharu karte hain");

//object create
let rectangle = {
    length: 1,
    breadth: 1,

    draw: function (){  //object ni andar function call method
        console.log("draw rectangle");
    }
}

// aava bija ghana object banaava hoi to abdhi vaar kai funnction banava to nai besai tenathi code bulky thai jashe, error gotvi hard padashe

// factory function
//1] camel case:numberOfStudents
// je rectangle object return karshe but aama lenght, breadth fix hashe
function createRectangle(){
    return rectangle = {
        length: 1,
        breadth: 1,
    
        draw: function (){  //object ni andar function call method
            console.log("draw rectangle");
        }
    }
    // return rectangle;
}

// now length and width ne badhi vkhagte alag alag rkhva mate

function createRectangle1(length,breadth){
    return rectangle = {
        length: length,
        breadth: breadth,
    
        draw: function (){  //object ni andar function call method
            console.log("draw rectangle");
        }
    }
    // return rectangle;
}

let rectangleobj1 = createRectangle1(5,4);
 

//constructor function -> 2] pascal notation -> pascal notation: first letter capital
// fctory function return kare, 
//costructer function -> property/method -> initialize/define
function Rectangle(){
    this.length =1;
    this.breadth =2;
    this.draw= function(){
        console.log("drawing");
    }
}

function Rectangle1(lenght,breadth){
    this.length =lenght;
    this.breadth =breadth;
    this.draw= function(){
        console.log("drawing");
    }
}

Rectangle1.lenght;

// new empty object banave

//oject creation using constructor function
let rectObject = new Rectangle();
let rectObject1= new Rectangle1(8,9);

rectObject1.color='yellow';
console.log(rectObject1);

//dynamic nature of object 
delete rectObject1.color;
console.log(rectObject1);

let Rectangle3 = new Function('lenght','breadth',
`this.length =lenght;
this.breadth =breadth;
this.draw= function(){
console.log("drawing");
}`);    // internaly aa rite 

 let rectObject0= new Rectangle3(8,9); 
//  rectObject1 nu constructor Rectangle1
// Rectangle1 nu constructor kyu? to e Function aave
// and aa Fundction uper batavyu e rite work kare. 
//first length, width pass kare and pachi entire code.  aa rite internally work kare.


// #types in js
// 1]primitive or value type
// 2] refrence type
//-object are objects
//-functions are object
//-arrays are object

// aa premitive aama copy bane  "pass by value"
// 
// let a1=10;
// let b1=a1;

// a1++;  
//console.log(a1);  //11
//console.log(b1);  //10

// let a2=10;
// function increment(a2){ //  aa to function no a2 che
//     a2++;
// }
// console.log(a2); // aama output 10 j aavshe, primitive pass thai tyare copy bane

// refrence ma same object ne j refer kare
let a3={value: 10};
function increment(a3){
    a3.value++;
}
increment(a3);
console.log("a3 is", a3);


// aa refrence type, same adreess ne point kare
let a1= {value: 10};
let b1=a1;


a1.value++;

console.log(a1.value); //11
console.log(b1.value);  //11


let recta= {
    length:2,
    breadth:4
}

// for inloop
for(let key in recta){
    // keys are reflectef through key variable
    //values are reflected through rectangle[key]
    console.log(key,recta[key]);  // dot sivai ni notation, bracket notation ahi use thai
}

// for of loop itetables par use thai. (iterables are arrays, map) ,
// for off loop sidhu vaprie to error aave

// for(let key of recta){
//     console.log(key);
// } 

// hack of how use for-off loop on recta
for(let key of Object.keys(recta)){
    console.log(key);  // keys print thai
}

for(let key of Object.entries(recta)){
    console.log(key);
}


//koi object ni andar koi property ce ke nai te kai rite find thshe?
if('length' in recta){
    console.log("present");
}else{
    console.log("absent");
}

//object cloning  origanal par + or -  ni effect nai thai

//1.through iterration 
let src=  {a:10,
b:20,
c:30};
let dest={};
for(let key in src){
   dest[key]=src[key];
}
console.log(dest);
//origanal par + or -  ni effect nai thai
src.a++;
console.log(dest);

//2.through assiign

let src1={
    a:10,
    b:20,
    c:30
};

let dest1= Object.assign({},src, src1);  // multiple object ni badhi property ne ek object ma copy kari shakie
console.log(dest1);
//origanal par + or -  ni effect nai thai
src1.a++;
console.log(dest1);


//3. through spread

let dest3={...src};
console.log(dest3);

src.a++;
console.log(dest3);

// garbage collection
// we have no control on garbage collector
// background ma run thaya kare