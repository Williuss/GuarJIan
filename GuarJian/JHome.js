// Class Active

const navbarnav = document.querySelector(".navbar-nav");

document.querySelector("#ddmenu").onclick = () => {
  navbarnav.classList.toggle("active");
};

//ddmenu

const ddmenu = document.querySelector("#ddmenu");

document.addEventListener("click", function (e) {
  if (!ddmenu.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

// validasi contact us

const form = document.querySelector("#btn");

form.addEventListener("click", (e) => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("add").value;
  const password = document.getElementById("pass").value;
  const check = document.getElementById("checkbox");

  if (name === "") {
    alert("Please Input Your Name");
    return false;
  }
  if (email === "") {
    alert("Please Input Your Email");
    return false;
  }
  if (address === "") {
    alert("Please Input Your Address");
    return false;
  }
  if (password === "") {
    alert("Please Input Your Password");
    return false;
  }
  if (!check.checked) {
    alert("You Should Agree To Our Terms of Servive & Privacy Policy");
    return false;
  }

  if (email.includes("@") !== true) {
    alert("Please Input @ into Your Email !");
    return false;
  } else if (email.split("@")[1].includes(".") !== true) {
    alert("Please Input The Right Email Fomat.");
    return false;
  }
  alert("Thank You !");
});
