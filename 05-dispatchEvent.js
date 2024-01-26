let event = new Event("hello",{bubbles:true});  // bydefault bubble false, trye karishu to j work karashe
addEventListener("hello",function(){ // when hello event trigger this function will work
    alert("Custom Event Dispatched");
});
document.dispatchEvent(event);  // dispatch thi auto triggr thai event


// html code
// <button id = "girlfriend" onclick=(function() {console.log("Do you love me?")}()">Girlfriend</button>

// you can auto trigger event without auto clicking on buttton, you can also dispatch a custom event you created
const girlfriend = document.querySelector("#girlfriend"); 

const iLoveYou = new Event("love", () => { // love event triggger thashe tyare aa function thashe
   console.log("I love you");
})
girlfriend.dispatchEvent(iLoveYou);

