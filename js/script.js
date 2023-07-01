// const galleryBtn = document.querySelector('.gallery-btn--active')
// const galleryModal = document.querySelector('.gallery-window');
// const modalCloseBtn = document.querySelector('.close-btn')

// const avocadoBtn = document.querySelector('.avocado-btn')

// const avocadoWindow = document.querySelector('.avocado-window');

// const blogPage = document.querySelector('.blog-page')

// const avocadoCloseBtn = document.querySelector('.close-btn')

// avocadoBtn.addEventListener('click', () => {
//   avocadoWindow.classList.add('avocado-window--active');
//   blogPage.classList.add('blog-page--inactive')
//   console.log(555);
// })

// avocadoCloseBtn.addEventListener('click', () => {
//   avocadoWindow.classList.remove('avocado-window--active')
//   blogPage.classList.remove('blog-page--inactive')
//   console.log(555);
// })

const burgerBtn = document.querySelector('.button-burger');
burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle('change');
  // burgerMenu.classList.toggle('header-nav--active');
})
