// // Header
// function createHeader() {
//   const header = document.createElement('header');
//   const container = createContainer();

//   header.classList.add('header');
//   container.classList.add('header-container')

//   container.append(createNav(), createHeaderSocial())
//   header.append(container)
//   return header
// }

// // Container
// function createContainer() {
//   const container = document.createElement('div');
//   container.classList.add('container')

//   return container
// }

// function createHeaderSocial() {
//   const social = document.createElement('div');
//   const socialLink = document.createElement('a');
 

//   social.classList.add('header-social');
//   socialLink.classList.add('socila-item');

//   socialLink.href = "https://www.instagram.com/food_nutrition_cuisines/";
 
//   socialLink.append(createSvg())
//   social.append(socialLink)
//   return social
// }

// function createSvg() {
//   // const socialSvg = document.createElement('svg');
//   // const socialPath = document.createElement('path');
//   // const socialCircle_1 = document.createElement('circle');
//   // const socialCircle_2 = document.createElement('circle');

//   // socialSvg.setAttributeNS(null,'width','28px');
//   // socialSvg.setAttributeNS(null, 'height','30px');
//   // socialSvg.setAttributeNS(null, 'viewbox','0 0 192 192');
//   // // socialSvg.setAttributeNS(null, "xmlns", "http://www.w3.org/2000/svg");
//   // socialSvg.setAttributeNS(null, "fill", "none");
//   // socialPath.setAttributeNS(null, "stroke", "none");
//   // socialPath.setAttributeNS(null, "stroke-width",  "14");
//   // socialPath.setAttributeNS(null, "d","M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z");
//   // socialCircle_1.setAttributeNS(null, "cx","96");
//   // socialCircle_1.setAttributeNS(null, "cy","96");
//   // socialCircle_1.setAttributeNS(null, "r","30");
//   // socialCircle_1.setAttributeNS(null, "stroke","none");
//   // socialCircle_1.setAttributeNS(null, "stroke-width","12");
//   // socialCircle_2.setAttributeNS(null, "cx","135");
//   // socialCircle_2.setAttributeNS(null, "cy","57");
//   // socialCircle_2.setAttributeNS(null, "r","9");
//   // socialCircle_2.setAttributeNS(null, "fill","yellow");

 
//   // socialSvg.append(socialPath, socialCircle_1, socialCircle_2);


//   const xmlns = "http://www.w3.org/2000/svg";
//   const boxWidth = 64;
//   const boxHeight = 64;
  
//   const svg = document.createElementNS(xmlns, "svg");
//   svg.setAttributeNS(null, "viewBox", "0 0 " + boxWidth / 2 + " " + boxHeight / 2);
//   svg.setAttributeNS(null, "width", boxWidth);
//   svg.setAttributeNS(null, "height", boxHeight);
  
//   const circle = document.createElementNS(xmlns, "circle");
//   circle.setAttributeNS(null, 'cx', '50%');
//   circle.setAttributeNS(null, 'cy', '50%');
//   circle.setAttributeNS(null, 'r', '15');
//   circle.setAttributeNS(null, 'stroke-width', '1px');
//   circle.setAttributeNS(null, 'stroke', 'red');
//   const circle1 = document.createElementNS(xmlns, "circle");
//   circle1.setAttributeNS(null, 'cx', '100%');
//   circle1.setAttributeNS(null, 'cy', '50%');
//   circle1.setAttributeNS(null, 'r', '15');
//   circle1.setAttributeNS(null, 'stroke-width', '1px');
//   circle1.setAttributeNS(null, 'stroke', 'yellow');
  
//   svg.append(circle, circle1)
  
//   document.body.append(svg);
//   return svg
// }

// // Navigation
// function createNav(path){
//   const nav = document.createElement('nav');
//   const button = document.createElement('button');
//   const burgerLine_1 = document.createElement('span');
//   const burgerLine_2 = document.createElement('span');
//   const burgerLine_3 = document.createElement('span');
//   const navList =  document.createElement('ul');

//   nav.classList.add('nav');
//   button.classList.add('button-burger', 'btn-reset');
//   button.setAttribute('aria-label', "Открыть меню");
//   burgerLine_1.classList.add('burger-line', 'bar1');
//   burgerLine_2.classList.add('burger-line', 'bar2');
//   burgerLine_3.classList.add('burger-line', 'bar3');
//   navList.classList.add('nav-list', 'list-reset');

//   const navLinkText = ['Գլխավոր', 'Բլոգ', 'Սննդակարգեր', 'Կատեգորիա', 'Տեղեկություն', 'Կապ'];

//   for(let i = 0; i < 6; i++) {
//     const navLink = document.createElement('a')
//     const navItem = document.createElement('li');

//     navItem.classList.add('nav-item');
//     navLink.classList.add('nav__link' + i);
//     navLink.href = "";
//     navLink.textContent = navLinkText[i] 
    
//     navLink.addEventListener('click', (e)=>{
//       e.preventDefault()
//       let page = e.target.textContent
//       switch(page) {
//         case 'Գլխավոր': mainBlog();
//         break;
//       }
      
//     })
  
//     navItem.append(navLink)
//     navList.append(navItem)
//   }

//   button.append(burgerLine_1, burgerLine_2, burgerLine_3);
//   nav.append(button);
//   nav.append(navList)
//   return nav
// }


//   function mainBlog() {
//     const main = document.createElement('main');
//     const mainBlog = document.createElement('div');
//     const blogPage = document.createElement('div');
//     const a = document.createElement('a')
//     a.textContent = 'link'
  
  
//     blogPage.classList.add('blog-page')
//     mainBlog.classList.add('main-blog')
  
//     console.log('adghj');
  
//     mainBlog.append(blogPage)
//     main.append(mainBlog)
//     return main
//   }
  
//   mainBlog()


// function mainPage(){
//   const root = document.getElementById('root');
//   root.append(createHeader())

//   return root
// }

// mainPage()