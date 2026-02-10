let yes = document.getElementById("yesBtn");
let no = document.getElementById("noBtn");
let message = document.getElementById("message");

let yesSize = 1; // starts normal size

// When mouse goes near "No" → it runs away!
no.addEventListener("mouseover", function() {
  let x = Math.random() * (window.innerWidth - 200);
  let y = Math.random() * (window.innerHeight - 200);
  
  no.style.position = "absolute";
  no.style.left = x + "px";
  no.style.top = y + "px";
});

// Every time you try to click No → Yes gets BIGGER!
no.addEventListener("click", function(e) {
  e.preventDefault(); // stops normal click
  yesSize += 0.4;
  yes.style.transform = "scale(" + yesSize + ")";
  
  // If Yes gets too big, maybe show message anyway 😄
  if (yesSize > 4) {
    message.classList.remove("hidden");
    no.style.display = "none";
  }
});

// When they click Yes → happy ending!
yes.addEventListener("click", function() {
  message.classList.remove("hidden");
  no.style.display = "none";
  yes.style.display = "none"; // hide buttons
  // You can add more fun here later (confetti, music...)
});
