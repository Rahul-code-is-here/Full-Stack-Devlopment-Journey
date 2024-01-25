//window ek global object
// browser window control kari shakie using this object

// dom is tree like structure

//BOM: content se deal karne ke alava koi bhi metter hai, ex) jema tame js ne browser sathe communicate karava mago cho.

// how dom internally working?
// <html> string-> tags -> tokens ->nodes -> dom

document.getElementById('content');
// 1. it's called on document object
//2. it's return a single object

// getElementByclassName e array like object che(array nathi)
// e ek html collection check


// multiple object return kare
document.getElementsByClassName('hidden');

document.getElementsByTagName('p');

document.getElementsByTagName('h1');

// previous je element ne inspect thi visit karyu tu e select thai jashe
let para = $0;
let classNaam=$0.getElementsByClassName;

console.log(classNaam);
console.log(para);

//querly selectors
// single object output
// jo multiple object select thaya to first one is output

let a= document.querySelector('.text-textpara');

// multiple object select karava querySelectorall

document.querySelectorAll('hiddeen');

// whole web page is ready now we need to update it

// 1] .innnerHTML
// 2] .outerHTML
// 3] .textContent
// 4] .innerText

//1].innnerHTML : get an element or jetla be nodes eni niche che e game te ek return karavi shake
//              : set element html content

let codingEx= document.querySelector('.code-example');
console.log.log(codingEx);

codingEx.innerHTML // aanathi code-example class ma jitna bhi content pada hua tha vo sara ka sara contet aap is property se dekh sakte ho

codingEx.innerHTML=''; 

// 3] .textContent
// 4] .innerText      get and set texual content

// .innner html thi element select karie e mano ke bold tag ma che to .innner html tene render karashe tene samjvatry karashe. etle vichitra javab output aapshe

let company = document.querySelector('.companyAnz');
company.innerHTML;
company.textContent; // aa bold tag ne be <b> this show karashe, etle e tag ne as a text treat kiya jayega

//now let's see diffrence between 
// 3] .textContent
// 4] .innerText      

let content = document.querySelector('.textContent');
content.textContent; // aama display hidden be show karashe
content.innerText;  // jeni be display hidden hogi vo .innertext me visisble nahi hoga


// Addding new element/content by create element


let content1= document.querySelector('.paraClass');
console.log(content1.innerText);

let newPara=document.createElement('p');
console.log(newPara);  // output: <p></p>

content1.appendChild(newPara); // create thai gyu have tene append karvanu, last ma append thai

//output : 

// <p class="paraclass">
//   "data structure";
//   <p></p>  // last ma j aapend thayu
// </p>


// how to create text-node
// <p></p> add to thayo but ema kai content nathi 

let content2= document.querySelector('.paraClass');
let newpara= document.createElement('p');
let textpara= document.createTextNode("I am the text");

newpara= appendChild(textpara);
content2.appendChild(newpara);

// easy way to add content im created element
let mypara= document.createElement('p');  // creating element 
mypara.textContent = " i am the text";  // adding text
content2.appendChild(mypara); // adding/append content

//but aama hamesha last ma j add thashe

// so aane overcome karava we use insertAdjacent HTML() method no use karishu

// insertAdjacent HTML()

// condition
//1] it has to be called 2 arguments
//2] location/portion(where)(kaha insert karna hai)  1.before end 2.after end 3.beforebegin 4.afterbegin
//3] html text content konsa hai jo tum insert karna chahte ho (kya insert karna hai)

let newtext=document.createElement('h3'); 
newtext.textContent = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabc';
content.insertAdjacentElement('beforebegin', newtext);

//Remove element:   removeChild()

//condition
//1.parent khabarv hovi joie
//2. kisko remove kar rahe ho

let perentElement= document.querySelector('.content');
console.log(perentElement);
let childElement=document.querySelector('.child');
console.log(childElement);

parentElement.removeChild(childElement);

//evi method jema prent em nam mali jashe
// child.parent thi nikli jashe


// js no use karine ne style chaange 
//1. .style
//2. .cssText
//3. .setattribute
//4. .className]
//5. .classList

//1. .style
let conten = $0;
console.log(conten);

conten.style.color = 'white';
conten.style.backgroundColor = 'red';  // at a time ek j property moodifeid thai

//2. .cssText    // at a time multiple property moodifeid thai
content.style.cssText = 'color:white, background-color:yellow, font-size:25px;'

conten.setAttribute('style', 'colors:white');

//setAtributes thi id aapi shkie
content.setAttribute('id', 'headingId');

let contents= document.querySelector('.paraClass');

contents.className;  // string malashe content ma jetla class name hashe

let className= content.className.split(' ');
// now array bani jashe string jya space hashe tyathi


//class List -> return array of classes
// 1 push karva mate add()
//2 remove karva remove()
//3 toggler (element hajar hashe to delete, nai ho to add)
//4. array ma elemmnts exist kare ke nathi karato?