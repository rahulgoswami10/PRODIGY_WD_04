let menuBtn = document.querySelector("#menu-btn");
let navBar = document.querySelector(".header .flex .navbar");

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}



//============== active on scroll ==============//
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    section.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};





let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content .project");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");
let fourth = document.querySelector("#fourth");
let fifth = document.querySelector("#fifth");
let sixth = document.querySelector("#sixth");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabs[index].classList.add("active");
  })
})

one.addEventListener('click', () => {
  first.style.display = "flex";
  second.style.display = "flex";
  third.style.display = "flex";
  fourth.style.display = "none";
  fifth.style.display = "none";
  sixth.style.display = "none";
})

two.addEventListener('click', () => {
  first.style.display = "none";
  second.style.display = "none";
  third.style.display = "none";
  fourth.style.display = "flex";
  fifth.style.display = "none";
  sixth.style.display = "none";

})

three.addEventListener('click', () => {
  first.style.display = "none";
  second.style.display = "none";
  third.style.display = "none";
  fourth.style.display = "none";
  fifth.style.display = "flex";
  sixth.style.display = "flex";
})