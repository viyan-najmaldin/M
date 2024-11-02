
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
for (let i = 1; i < 9; i++){
  function Allphotos(i){
   arr.push(`images/photo (${i}).jpg`)
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

var x = window.matchMedia("(max-width: 700px)")
myFunction(x);
x.addEventListener("change", function() {
  myFunction(x);
});

}
Allphotos(i)
 };




 

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

const firebaseConfig = {
  apiKey: "AIzaSyCt2HnBM2t0tvJNRnsk0FsDLLvxiB3-0Ac",
  authDomain: "m-photo-16a53.firebaseapp.com",
  databaseURL: "https://m-photo-16a53-default-rtdb.firebaseio.com",
  projectId: "m-photo-16a53",
  storageBucket: "m-photo-16a53.firebasestorage.app",
  messagingSenderId: "30453910789",
  appId: "1:30453910789:web:eeaddf56fe3f71496e3b6c"
};

firebase.initializeApp(firebaseConfig);

const commentsDB = firebase.database().ref('comments')

const savee = (name , mesg) =>{
  var newcommentDB = commentsDB.push()

  newcommentDB.set({
      name: name,
      mesg :mesg,
  })
}




let Post = document.getElementById("post")
let username = document.getElementById("username");
let Chat = document.getElementById("chat");

const Comments = document.querySelector(".comments");


Post.addEventListener('submit', function (e) {
  e.preventDefault();
savee(username.value ,Chat.value)
});



commentsDB.on('child_added', (data) => {

    let Commentt = document.createElement("div");
    let commentlikediv = document.createElement("div");
    let User = document.createElement("h1");
    let text = document.createElement("p");
    let likes = document.createElement("input");
    let labelLike = document.createElement("label");
  
  likes.setAttribute("type","checkbox")
  likes.setAttribute("id","like")
  labelLike.setAttribute("for","like")
  labelLike.innerHTML= '&#9829'
  likes.classList.add("likes")
  commentlikediv.classList.add("flex" ,"justify-between")
  Commentt.classList.add("comment")
  User.innerHTML= data.val().name;
  text.innerHTML= data.val().mesg;  
  commentlikediv.appendChild(User);
  commentlikediv.appendChild(likes);
  commentlikediv.appendChild(labelLike);
  Commentt.appendChild(commentlikediv)
  Commentt.appendChild(text);
  Comments.appendChild(Commentt);

    
});




/////////////////////////////////////////////


const btnText = document.getElementById("myBtnn");

btnText.addEventListener('click' ,()=>{
  for (let i = 9; i < 159; i++){
    Allphotos(i)
     }
   btnText.setAttribute('disabled', ''); 
   btnText.style.display = "none";
})

