const burgerBtn = document.querySelector(".button-burger");
const navList = document.querySelector(".nav-list");

burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("change");
  navList.classList.toggle("active");
});

const btnBack = document.querySelector('.btn__back')
btnBack.addEventListener('click', () =>{
  window.history.back()
})

