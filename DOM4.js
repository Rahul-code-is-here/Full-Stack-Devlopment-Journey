// features of async code
//1.clean and concise
//2.bettter error handling
//3. easier to debug async


// //01-synchronous
let a=prompt("enter a number");
console.log(a);

let num1=45;
let num2=45;

console.log(num1,num2);
console.log("sum: ", num1+num2);

// //02-asynchronous
let num3 = 10;
let num4 = 20;

setTimeout(() => {
  console.log(num3, num4);
}, 5000);

setTimeout(() => {
  console.log("Sum: ", num3 + num4);
}, 5000);

console.log("Hellow World: ");


// promise 
// background ma koi bhi cheez parallaly execute karava magie chie to promise use thai

//synchronous
let meraPromise =new Promise(function(resolve,reject){
    console.log("i am inside promise");
    resolve(1998);
})

console.log("pahela");

// asynchronous

//async code complete thayo ke nai te promise batave
// promise 3 state: pending(settimeout vakhate), resolved, rejected
let meraPromise2 = new Promise(function(resolve,reject){  //callbacks [function
    setTimeout(function()  {
        console.log("i am inside promise2");
        }, 5000);
        resolve(1999);  // successfully callback function chali jashe to resolve nahitar reject
        // reject(new Error("bhai sahab error aaye hai"));
})

let meraPromise3 =new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log("i am inside a promise3");
    }, 3000);
    resolve(2000);
})

console.log("pahela");   // first aa chalshe, pachi 3s valu and pachi 5s valu. badha parallay chalshe

// aa promise par 2(fullfill and rejected mate) method apply kari shakie, fullfill mate 'then' and rejected mate 'catch'

let meraPromise5= new Promise(function(resolve,reject){
    setTimeout(function()  {
        console.log("i am inside a promise5");
    }, 5000);
    // resolve(1999);  
    reject(new Error("bhai sahab error aaye hai"));
});

meraPromise5.then(function(value){
    console.log(value);
});

meraPromise5.catch(function(error){
    console.log("recieved error: " + error);
})

// short ma banne sathe 
meraPromise5.then(value => {console.log(value)}), (error) => {console.log("recieved error: " + error)};

// prommise ek prakar na task che jene complete karva magie chie, tena 2 output hoi shake promise completely fullfill thashe ya fir nahi thai

// js synchronous code chalave vachhe network call aaavyo and ena mate vadhu time joie che to kai etlo time wait to nai karavai user ne, bachground ma network call chale te mate promise,

//suppose 3 promise che badhane varafarti chalavana che che so ek complete thayu ke nai kyare khabar padashe? then vali method thi. 1st pate etle ena then ma 2nd promise, 2nd pate etle eni then ma 3rs promise

let wadda1= new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("set timeout started");
    }, 2000);  // aa 2sec mate stack mathi bowser and tythi queue ma gyu
    resolve(true); //haji broser 2sec gane tya bijo code execution start: resolve true mark thai gayu
})

let output = wadda1.then(function(){
    let wadda2= new Promise(function(resolve,reject){
        setTimeout(function() {
            console.log("set timeout started2");
        }, 3000); // aa 3sec mate stack mathi bowser and tythi queue ma gyu
        resolve("wadda 2 resolved");  //wadda2 resolve true mark thai
    });
    return wadda2;  // wadda1.then promise return kare che
})

output.then(function(value){
    console.log(value); //wadda 2 resolved ne print kari deshe
})

// 50 promise che to 50 vaar then then lagavsho? nahi, eslie aaya Async await 
// Async await: special syntax used to work with promise
// Async await function: always promise return kare 

async function abcd(){
    return "kya hoga tera";
}

console.log(abcd());
// abcd(); 


async function utility(){

let delhiMausam = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve("delhi me bahot garami hain");
    }, 1000);
});

let hyMausam = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("hy is cool");
    },5000)
})
  
    // let dm =delhiMausam;   // aa parallel chalshe
    // let hm= hyMausam;

    let dm = await delhiMausam;   // aa line execute na thai jai tya sudhi nicheni line execute nai thai
    let hm = await hyMausam;

    return [dm,hm];
}


//fetch api: return promise

//1.get call
async function utility1(){
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let output =await data.json();
    console.log(output);
}
utility1();

//2.post call  : yad rakhvani jarur nathi, jsonPlaceholder site par jaine code uthavi lyo

 async function helper() {
    
let options ={
  method: 'POST',
  body: JSON.stringify({   // json ne string ma convert kare
  title: 'Babbar',//title,body,userId,,weight aa 4 field ne server(frtch vali link par)par send kariechie 
  body: 'tagadi',// and aa data ne store karvanu kahie chie
  userId: 1998, //aa output ma print thashe 
  weight:90,
}),
headers: {
  'Content-type': 'application/json; charset=UTF-8',
},
};

let result = await fetch('https://jsonplaceholder.typicode.com/posts',options);
let response = result.json();
return response;

 }

async function uti(){
    let ans = await helper();
    console.log(ans);
}

uti();


// closure
// function ni andar function 

let name= "sher";
function init(){
  let name = "mozilla";
  function displayName(){
    let name= "babbar";
    console.log(name);
  }  // babbar print tahse
  displayName();
}

init();



function init1() {
  let name = "sher";  // function name to function complete thata e pan destroy thai jai
  function displayName(){
    // displayname() is a function that forms the closure
    console.log(name);// use variable declaration in parent function
  }
  return displayName;
}

let  b= init1();

b();

// jyare be aavi rite nested function create karie tyare har function ka closure banata hai.

// closure: function ko uske required data ke sath bind kiya jata hai

// uper na example ma function no context shu che? name variable. kem ke eno use karavano che

// so, name variable shu value hashe e context ma save thai jashe,  in short eno closure bani jashe

// closure top level entity che, jema function ka pura logic pada honga or sath hoi sath function jo bhi parameter use kar raha hai, jiska pata is inner vale function ko hona chahie 

// jene lexical environments or  surrounding state  be kahevai che 

// refrence  hashe

// so basically, closure ma inner function and outer function na je variable inner ma use thaya eno refrences thashe te padya hashe

// nested function -> closure -> refrence hashe(not copy)