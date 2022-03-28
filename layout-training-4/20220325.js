let Click_hash = document.getElementById("hash");
let hush = document.getElementById("hush");
let hesh = document.getElementById("hesh");
let eash = document.querySelectorAll("div.hash");
let r = parseInt(Math.random()*255);
let g = parseInt(Math.random()*255);
let b = parseInt(Math.random()*255);
        
Click_hash.addEventListener("click", event => {
  Click_hash.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log("h");
});
hush.addEventListener("mouseover", event => {
  console.log("hey");
  hush.style.backgroundColor = "rgb(" + r  + "," + g + "," + b + ")";
});
hesh.addEventListener("mouseenter", event => {
  hesh.style.backgroundColor = "rgb(" + r  + "," + g + "," + b + ")";
  console.log("hi");
});
[].forEach.call(eash,function(eash){
  eash.addEventListener("click", event => {
    console.log("heng");
    eash.style.backgroundColor = "rgb(" + r  + "," + g + "," + b + ")";
  });
});
