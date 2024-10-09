const loginButton = document.getElementById("login");
const onlineIdInput = document.getElementById("online-id");
const passwordInput = document.getElementById("password");
const onlineIdLabel = document.getElementById("label-online-id");
const passwordLabel = document.getElementById("label-password");
const onlineIdGroup = document.querySelector("#input-class-1");
const passwordGroup = document.querySelector("#input-class-2");
const togglePassword = document.getElementById("toggle-password");

// Remove the .image-section-fullscreen class after 3 seconds
setTimeout(() => {
  document
    .querySelector(".image-section")
    .classList.remove("image-section-fullscreen");
}, 3000);

document.addEventListener("DOMContentLoaded", function () {
  // Function to handle label visibility and input focus styling for Online ID
  onlineIdInput.addEventListener("keyup", function () {
    if (onlineIdInput.value.trim() !== "") {
      onlineIdLabel.style.visibility = "visible";
      onlineIdLabel.style.opacity = "1";
    } else {
      onlineIdLabel.style.visibility = "hidden";
      onlineIdLabel.style.opacity = "0";
    }
  });

  onlineIdInput.addEventListener("focus", function () {
    onlineIdGroup.classList.add("focused");
  });

  onlineIdInput.addEventListener("blur", function () {
    onlineIdGroup.classList.remove("focused");
  });

  // Function to handle label visibility and input focus styling for Password
  passwordInput.addEventListener("keyup", function () {
    if (passwordInput.value.trim() !== "") {
      passwordLabel.style.visibility = "visible";
      passwordLabel.style.opacity = "1";
    } else {
      passwordLabel.style.visibility = "hidden";
      passwordLabel.style.opacity = "0";
    }
  });

  passwordInput.addEventListener("focus", function () {
    passwordGroup.classList.add("focused");
  });

  passwordInput.addEventListener("blur", function () {
    passwordGroup.classList.remove("focused");
  });
});

// Function to enable/disable login button based on input fields
function toggleLoginButton() {
  if (onlineIdInput.value.trim().length > 0 && passwordInput.value.trim().length > 0) {
      loginButton.disabled = false;
      loginButton.classList.remove("disabled");
      loginButton.classList.add("enabled");
  } else {
      loginButton.disabled = true;
      loginButton.classList.remove("enabled");
      loginButton.classList.add("disabled");
  }
}

//show hide
passwordInput.addEventListener('keyup', function() {
  if (passwordInput.value.length > 0) {
      togglePassword.style.visibility = "visible";
      togglePassword.textContent = passwordInput.type === "password" ? "show" : "hide";
  } else {
      togglePassword.style.visibility = "hidden";
  }
});

// Toggle password visibility
togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "hide";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "show";
  }
});

 
onlineIdInput.addEventListener("keyup", toggleLoginButton);
passwordInput.addEventListener("keyup", toggleLoginButton);

 
loginButton.addEventListener("click", function () {
  loginButton.innerHTML = '<div class="loader"></div>'; 
  loginButton.disabled = true;  
  loginButton.classList.add("loading");

 
  setTimeout(() => {
    loginButton.innerHTML = "Login";
    loginButton.disabled = false;  
    loginButton.classList.remove("loading");
  }, 3000);  
});


document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const home = document.querySelector(".image-section");
  const logo = document.querySelector(".logo");
  const loginButton = document.querySelector(".login-button");

 
  setTimeout(() => {
    container.classList.add("loaded");
    logo.classList.add("moved");
  }, 500);

 
  loginButton.addEventListener("click", function () {
    container.classList.add("fade-out");
    logo.classList.add("center");
    home.classList.add("small");
  });
});

window.onload = function () {
  // Start with the image occupying the whole screen
  const container = document.querySelector(".container");
  const logo = document.querySelector(".logo");
  const imageSection = document.querySelector(".image-section");

  // After a slight delay, bring the logo to the center
  setTimeout(() => {
    logo.classList.remove("moved");  
  }, 1000);

  // After another delay, move everything to their final positions
  setTimeout(() => {
    container.classList.add("loaded"); 
    logo.classList.add("moved");  
  }, 3000);
};
 
toggleLoginButton();