// adding 100 para

const t1= performance.now();
for( let i=1; i<=100; i++ ){
    let newElement = document.createElement('p');
    newElement.textContent= 'this is para' + i;

    document.body.appendChild(newElement);
}
const t2= performance.now();
console.log('this took'+ (t2-t1) + ' miliseconds');

//optiizing a bit
const t3=performance.now();
let myDiv = document.createElement('div');

for(let i=1; i<100; i++){
    let element= document.createElement('p');
    Element.textContent= 'this is para' + i;

    myDiv.appendChild(element);
}document.body.appendChild(myDiv);
const t4= performance.now();

console.log('this took'+ (t4-t3) + ' miliseconds');

// now how can we measure performance
// performance.now(); //aa method ek time span provide kare, vadhu padatu accurate

// 1]Reflow: jab bhi naya element dalte hai tab kuch calculation hoti hai, eski dimention kitna hai, naye vale element ni positioning kya hai, vo sari mathematic calculation karne vale function ko reflow bolte hai,( dom attech karya,dom update thayu, delete karvathi thai, )
// { it is a process of calculation dimentions and positions of page elements, this is computationly intensive task(slow  hota hai)}{ koi circle ke triangle ne add karvu che to, eni size kevdi che, eni dimentions shu che, kaha par lagayenge  vo circle, triangle vo sari calculated reflow ma aavshe}

// 2]Repaint: sari calculation kar li,naye screen ka layout aa gaya, have naye screen ke layout ko aapki display par pixel by pixel show karna(reflow karta faster but etlo be faster nathi)

// ti 1st paragraph aavshe enu reflow thashe and repaint tashe, and 2nd paragraph mate be reflow and repaint thashe

// good practice: kam se kam reflow and km se km repaint


//DOCUMENT FRAMGMENT (light weight document object)

// have je 100 page banata tha ene first framgment ma add karashe( aana mate na to reflow hoi na hi repaint)
// have aa document ma aa fregment add karishu tyare 1 reflow and 1 repaint thashe

const t5= performance.now();
let fragment = document.createDocumentFragment();
for(let i=1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent=" this is para"+ i;

    fragment.appendChild(newElement);
}
document.body.appendChild(fragment);// 1 reflow and 1 repaint
const t6= performance.now();

console.log( 'time t3 is'+ (t6-t5) + 'ms');



// call stack
// single  threading =one command at a time. js is single threaded language

function addPara(){
    let para= document.createElement('p');
    para.textContent="js is single threaded language";
    document.body.appendChild(para);
}

function appendNewMessage(){
    let para= document.createElement('p');
    para.textContent= "kya haal chal";
    document.body.appendChild(para);
}

addPara();
appendNewMessage();

// code uper thi niche taraf execute thashe, means synchronous

// observervation
//1. Run to completion( har line executed thashe adhuru nai muke vachhethi)
//2. js doesn't execute multiple line/ function at a time

//eventlistner and network call Asynchronous in nature. event par(like click karyu tyare j  start thashe). jya lakhyu che tya j chalva manashe evu nathi



// event loop
// 3 topic knowledge joie
// 1.call stack
// 2.browser
//3. event queue

// addevent listener jyare stack ma add thashe tyare e browser ne etlu kaine stack mathi nikli jashe ke onclick par aa function run karavjo.

//click karavathi browser mathi e function ni entry queue ma aavi gai

// queue evu keshe: jab tak mera call stack empty nahi hota tab tak mere andar jo bhi hai usko me execute nahi hone dungi

// js me async code -> js event loop concept use kare 
// handling is done by browser


// set timeout
setTimeout(function() {
    console.log("hey");
}, 4000);  
// 4000ms pachi j code execute thashe, evu nathi ke 4000ms pachi code execute thai j kjashe, minimum 4000ms time to lagashe j, e queue ma wait karshe( pela stack ma async code stack aavshe, have browser ne kai deshe 4000ms pachi code ne run karvano che, 4000ms pachi te browser mathi queue ma jatu reshe, have queue ene call stack empty thashe pachi j run karavshe)

setTimeout(function()  {
    console.log("hy");
}, 0);
  // aa code be direct execute nai thai. event loop ma jashe.first call stack ma tyathi te browser ne kai deshe 0ms pachi chalavjo and 0ms pachi browser tene queue ma nakhi deshe, have queue tene call stack empty thashe pachi run karavshe

  // whenever you are  trying to defer something until stack is cleared