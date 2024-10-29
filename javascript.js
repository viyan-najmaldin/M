
const elements1 = document.querySelectorAll('.fade-in1');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .4
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}

let observer1 = new IntersectionObserver(callbacks, options);
elements1.forEach(element => {
  observer1.observe(element);
});

const picsDiv = document.querySelector(".pics");
let arr = [];
for (let i = 1; i < 158; i++){
   arr.push(`../images/photo (${i}).jpg`)
   let pic = document.createElement("img");
   let modal = document.createElement("div");
   let bigdiv = document.createElement("div");
   let spann = document.createElement("span");
   let modalImg = document.createElement("img");
   modalImg.classList.add("modal-content")
   modalImg.setAttribute("id",`img${i}`)
   pic.setAttribute("id",`myImg${i}`)
   modal.classList.add("modal")
   spann.classList.add("close")
   spann.innerHTML="&times;";
   modal.setAttribute("id",`myModal${i}`)
   pic.classList.add("h-auto", "max-w-full","rounded-lg")
    pic.src=`${arr[i-1]}`
    modal.appendChild(spann)
    modal.appendChild(modalImg)
    bigdiv.appendChild(modal)
    bigdiv.appendChild(pic)
    picsDiv.appendChild(bigdiv)
    modal.style.display = "none";

  pic.onclick = function(){
  pic.style.display = "none";
  modal.style.display = "block";
  modalImg.src = this.src;
}


spann.onclick = function() { 
  modal.style.display = "none";
  pic.style.display = "block";

}




function myFunction(x) {
  if (x.matches) { // If media query matches
    pic.onclick = function(){
      modal.style.display = "none";
    }
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 700px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});







 };


// Get the image and insert it inside the modal - use its "alt" text as a caption

// var captionText = document.getElementById("caption");

// Get the <span> element that closes the modal
// var span.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal



  


 /////////////////////////////////////////////

 const elements = document.querySelectorAll('.fade-in');
const optionss = {
  root: null,
  rootMargin: '0px',
  threshold: .4
}
const callbackss = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('activee');
    }
  });
}
let observer = new IntersectionObserver(callbackss, optionss);
elements.forEach(element => {
  observer.observe(element);
});


//////////////////////////////////////////////



