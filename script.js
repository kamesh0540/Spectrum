// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}


const form= document.getElementById('form');
    const name= document.getElementById('name');
    const age= document.getElementById('chage');
    const bdate= document.getElementById('bdate');
    const tdate= document.getElementById('tdate');
    var gender= document.getElementsByName('gender');

    form.addEventListener('submit',function(){  
      const nameval=name.value;
      const chageval=chage.value;
      const bdateval=bdate.value;
      const tdateval=tdate.value;
      var gval;
      for(var i = 0; i < gender.length; i++){
          if(gender[i].checked){
              gval = gender[i].value;
          }
      }

      localStorage.setItem('Chname',nameval);
      localStorage.setItem('Chage',chageval);
      localStorage.setItem('Cbdate',bdateval);
      localStorage.setItem('Tdate',tdateval);
      localStorage.setItem('Gval',gval);
    })

