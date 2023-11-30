// Header
function createHeader() {
  const header = document.createElement('header');
  const container = createContainer();

  header.classList.add('header');
  container.classList.add('header-container')

  container.append(createNav(), createHeaderSocial())
  header.append(container)
  return header
}

// Container
function createContainer() {
  const container = document.createElement('div');
  container.classList.add('container')

  return container
}

function createHeaderSocial() {
  const social = document.createElement('div');
  const socialLink = document.createElement('a');
 

  social.classList.add('header-social');
  socialLink.classList.add('socila-item');

  socialLink.href = "https://www.instagram.com/food_nutrition_cuisines/";
 

  social.append(socialLink)
  return social
}

// Navigation
function createNav(path){
  const nav = document.createElement('nav');
  const button = document.createElement('button');
  const burgerLine_1 = document.createElement('span');
  const burgerLine_2 = document.createElement('span');
  const burgerLine_3 = document.createElement('span');
  const navList =  document.createElement('ul');

  nav.classList.add('nav');
  button.classList.add('button-burger', 'btn-reset');
  button.setAttribute('aria-label', "Открыть меню");
  burgerLine_1.classList.add('burger-line', 'bar1');
  burgerLine_2.classList.add('burger-line', 'bar2');
  burgerLine_3.classList.add('burger-line', 'bar3');
  navList.classList.add('nav-list', 'list-reset');

  const navLinkText = ['Գլխավոր', 'Բլոգ', 'Սննդակարգեր', 'Կատեգորիա', 'Տեղեկություն', 'Կապ'];

  for(let i = 0; i < 6; i++) {
    const navLink = document.createElement('a')
    const navItem = document.createElement('li');

    navItem.classList.add('nav-item');
    navLink.classList.add('nav__link' + i);
    navLink.href = "";
    navLink.textContent = navLinkText[i] 
    
    navLink.addEventListener('click', (e)=>{
      e.preventDefault()
      let page = e.target.textContent
      switch(page) {
        case 'Գլխավոր': createMain()
        break;
        case 'Բլոգ': navLink.setAttribute('href', './index/blog.html')
        console.log(navLink);
          //  mainPage().append(blogPage());
        break;
      }
      
    })
  
    navItem.append(navLink)
    navList.append(navItem)
  }

  button.append(burgerLine_1, burgerLine_2, burgerLine_3);
  nav.append(button);
  nav.append(navList)
  return nav
}


function createMain() {
  const page = mainPage();
  const main = document.createElement('main');

  main.classList.add('main');
 
  main.append(createHeroPage());
  page.append(main)
  return page
}
// Main page
function createHeroPage() {
  // const main = mainPage()
  const mainHero = document.createElement('div');
  mainHero.classList.add('main-hero');

  mainHero.append(createAboutSection(), createBlogSection(), createNewsSection());
  // main.append(mainHero)
  return mainHero
}

function createAboutSection() {
  const section = document.createElement('section');
  const container = document.createElement('div');
  const aboutBlock = document.createElement('div');
  const img = document.createElement('img');
  const aboutDesc = document.createElement('div');
  const title = document.createElement('h2');
  const text1 = document.createElement('p');
  const text2 = document.createElement('p');
  const aboutBtn = document.createElement('a')

  section.classList.add('about');
  container.classList.add('container');
  aboutBlock.classList.add('about-block');
  img.classList.add('about-img');
  aboutDesc.classList.add('about-desc');
  title.classList.add('about__title');
  text1.classList.add('about__text');
  text2.classList.add('about__text');
  aboutBtn.classList.add('about__btn');

  img.setAttribute('src', "./img/hero-1.jpeg");
  aboutBtn.setAttribute('href', '#')

  title.textContent = 'Hello';
  text1.textContent = `I started Evidence-Based Nutrition with the goal of offering readers a state of the
  art knowledge in nutrition and health, as well as to share my thoughts and experiences. Take some time
  to
  explore the blog, make your own decisions on what and how to eat based on Evidence-Based knowledge.`;
  text2.textContent = `Create, mix, improvise! Make your own fun meal using ingredients that make you happy and, the most important, enjoy your food!`;
  aboutBtn.textContent = 'Read more';

  aboutDesc.append(title, text1, text2, aboutBtn)
  aboutBlock.append(img, aboutDesc);
  container.append(aboutBlock);
  section.append(container);

  return section
}

function createBlogSection() {
  const section = document.createElement('section');
  const container = document.createElement('div');
  const blogBlock = document.createElement('div');
  const span = document.createElement('span');
  const blogDesc = document.createElement('div');
  const blogTitle = document.createElement('h2');
  const blogText = document.createElement('p');
  const blogBtn = document.createElement('a');

  section.classList.add('blog');
  container.classList.add('container', 'blog-container');
  blogBlock.classList.add('blog-block');
  span.classList.add('blog-img');
  blogDesc.classList.add('blog-desc');
  blogTitle.classList.add('blog__title');
  blogText.classList.add('blog__text');
  blogBtn.classList.add('hero-blog__btn')
  

  blogTitle.textContent = 'Բլոգ';
  blogText.textContent = `Find new recipes, meal plans, menu, learn what are the latest discoveries in
  nutritional science.`;
  blogBtn.textContent = 'Կարդալ ավելին';

  blogBtn.href = "./index/blog.html"

  blogDesc.append(blogTitle, blogText, blogBtn)
  blogBlock.append(span, blogDesc)
  container.append(blogBlock)
  section.append(container)
  return section
}

function createNewsSection() {
  const section = document.createElement('section');
  const container = document.createElement('div');
  const newsList = document.createElement('ul');

  section.classList.add('news');
  container.classList.add('container', 'gallery-container');
  newsList.classList.add('gallery-list', 'list-reset');


  for(let i = 0; i < 3; i++) {
    const newsItem = document.createElement('li');
    const newsLInk = document.createElement('a');
    const newsImg = document.createElement('span');
    const galleryText = document.createElement('p');
  
    galleryText.classList.add('gallery__text', 'gallery-text-' + [i] )
    newsImg.classList.add('gallery-img', 'bg-img', 'gallery-img-'+ [i+1]);
    newsItem.classList.add('gallery-item');
 
    switch(galleryText.classList[1]) {
      case 'gallery-text-0': 
      newsLInk.href = './index/shorus.html';
      galleryText.textContent = 'Շուրոս';
      break;
      case 'gallery-text-1': 
      newsLInk.href = './index/salmon.html';
      galleryText.textContent = 'Սաղմոն Ջեռոցում Բաթաթով և Սնկով';
      break;
      case 'gallery-text-2': 
      newsLInk.href = './index/macchees.html';
      galleryText.textContent = 'Mac and Cheese';
      break;
    }

    newsLInk.append(newsImg, galleryText)
    newsItem.append(newsLInk)
    newsList.append(newsItem)

  }
  container.append(newsList);
  section.append(container);
  return section
}


function mainPage(){
  const root = document.getElementById('root');
  

  root.append(createHeader())
  return root
}

function blogPage() {
  console.log(55888);
  const a = document.createElement('a');
  a.setAttribute('href', './index/blog.html');
 a.textContent = 'blog'
 
  return a
}
mainPage()