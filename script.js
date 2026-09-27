// ============================
// MENU MOBILE
// ============================

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// ============================
// TUTUP MENU SETELAH DIKLIK
// ============================

const navLinks =
    document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ============================
// BACK TO TOP
// ============================

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ============================
// TAHUN FOOTER OTOMATIS
// ============================

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();