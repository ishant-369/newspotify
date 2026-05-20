const song = document.getElementById("song");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    song.play();
    playBtn.innerText = "⏸";
    isPlaying = true;
  } else {
    song.pause();
    playBtn.innerText = "▶";
    isPlaying = false;
  }
});

song.addEventListener("timeupdate", () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

progress.addEventListener("input", () => {
  song.currentTime = progress.value;
});
document.querySelector(".home-btn").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


function logout() {
  window.location.href = "signlog.html";
}
function showSignup() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
}
async function login() {
  const email = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;

  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    alert("Login successful");
    window.location.href = "homwpage.html";
  } else {
    alert(data.message || "Login failed");
  }
}
async function signup() {
  const name = document.getElementById("signUpName").value;

  const email = document.getElementById("signUpEmail").value;

  const password = document.getElementById("signUpPass").value;

  const response = await fetch("http://localhost:3000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    alert("User created successfully");
    window.location.href = "signlog.html";

  } else {
    alert(data.message || "Signup failed");
  }
}