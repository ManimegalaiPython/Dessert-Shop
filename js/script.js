

/*profile nav link dropdown*/
function toggleDropdown() {
  document.getElementById("dessertMenu").classList.toggle("show");
}

/* Close dropdown when clicking outside */
window.onclick = function(e) {
  if (!e.target.closest('.dropdown')) {
    document.getElementById("dessertMenu").classList.remove("show");
  }
}


/*Login with OTP*/
const overlay = document.getElementById("loginOverlay");
const loginInput = document.getElementById("loginInput");
const otpInput = document.getElementById("otpInput");
const verifyBtn = document.getElementById("verifyBtn");

let mode = "email";
let otp = "";

/* OPEN */
document.querySelector(".login-btn").onclick = () => {
  overlay.style.display = "block";
};

/* CLOSE */
function closeLogin(){
  overlay.style.display = "none";
  resetLogin();
}

/* TOGGLE EMAIL / MOBILE */
function toggleLoginMode(){
  if(mode === "email"){
    mode = "mobile";
    loginInput.placeholder = "Enter Mobile Number";
    document.querySelector(".switch").innerText = "With Email";
  }else{
    mode = "email";
    loginInput.placeholder = "Enter Email ID";
    document.querySelector(".switch").innerText = "With Mobile";
  }
}

/* SEND OTP */
function sendOTP(){
  if(loginInput.value.trim() === ""){
    alert("Please enter " + (mode === "email" ? "Email" : "Mobile Number"));
    return;
  }

  otp = Math.floor(1000 + Math.random() * 9000);
  alert("OTP Sent Successfully (Demo OTP: " + otp + ")");
  console.log("OTP:", otp);

  otpInput.classList.remove("hidden");
  verifyBtn.classList.remove("hidden");
}

/* VERIFY OTP */
function verifyOTP(){
  if(otpInput.value == otp){
    alert("Login Successful 🎉");
    closeLogin();
  }else{
    alert("Invalid OTP ❌");
  }
}

/* RESET */
function resetLogin(){
  loginInput.value = "";
  otpInput.value = "";
  otpInput.classList.add("hidden");
  verifyBtn.classList.add("hidden");
}






/*FAQ*/
const questions = document.querySelectorAll(".faq-question");

questions.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector(".icon");

    if(answer.style.display === "block"){
      answer.style.display = "none";
      icon.textContent = "+";
    } else {
      answer.style.display = "block";
      icon.textContent = "−";
    }
  });
});


/*submit button success alert msg*/
function showPopup(event) {
  event.preventDefault(); // stop page refresh
  document.getElementById("popupOverlay").style.display = "flex";
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}



/*hero-image-continuously changing*/

  const images = [
    "images/cake1.png",
    "images/ice1.png",
    "images/biscut1.png"
  ];

  let index = 0;
  const heroImage = document.getElementById("heroImage");

  setInterval(() => {
    index = (index + 1) % images.length;
    heroImage.style.opacity = 0;

    setTimeout(() => {
      heroImage.src = images[index];
      heroImage.style.opacity = 1;
    }, 500);
  }, 3000);


  /*testimonial one after another*/
let testimonials = document.querySelectorAll(".testimonial-box");
let index1 = 0;

setInterval(() => {
  testimonials[index1].classList.remove("active");

  index1 = (index1 + 1) % testimonials.length;

  testimonials[index1].classList.add("active");
}, 3000); // changes every 3 seconds


/*click to read  button*/
function toggleRead(btn) {
  const moreContent = btn.previousElementSibling;

  if (moreContent.style.display === "block") {
    moreContent.style.display = "none";
    btn.innerText = "Click to read";
  } else {
    moreContent.style.display = "block";
    btn.innerText = "Close";
  }
}

