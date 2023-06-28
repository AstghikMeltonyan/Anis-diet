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

// ========== Glavniy =======
const heroTabs = document.querySelectorAll('.glavniy-tabs');
const heroTabsBtn = document.querySelectorAll('.gallery-btn')
const mineHero = document.querySelector('.main-hero')


heroTabsBtn.forEach(function (element) {
 
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    console.log(e.currentTarget.dataset);
    heroTabsBtn.forEach(function (el) {
      el.classList.remove('active')
    });
    e.currentTarget.classList.add('active');

    heroTabs.forEach(function (el) {
      console.log(document.querySelector(`[data-target="${path}"]`));
      el.classList.remove('active');
      mineHero.classList.add('active')
      document.querySelector(`[data-target="${path}"]`).classList.add('active')
    })

  })
})
