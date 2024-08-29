var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.33,
    centeredSlides: true,
    spaceBetween: 16,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
});
const menu = document.querySelector(".ri-menu-line");
const close = document.querySelector(".ri-close-line");
const nav = document.querySelector(".repo-main");

menu.addEventListener("click", function () {
  nav.style.top = "0%"
})

close.addEventListener("click", function () {
  nav.style.top = "-100%"
})
const store = document.querySelector("#store");
const SubMenu = document.querySelector(".sub-menu");

store.addEventListener("mousemove", function() {
  SubMenu.style.top = "5%";
})
store.addEventListener("mouseleave", function(){
  SubMenu.style.top = "-100%";
})