window.onload = (e) => {
  let input = document.querySelector('.input');
  // console.log(input.oninput);
  console.log(555);
  input.oninput = function () {
    let value = this.value.trim()
    let list = document.querySelectorAll('.nutrition__text')
    if(value != '') {
      list.forEach(el=> {
        if(el.innerHTML.search(value)== -1) {
          console.log(el);
          // el.toLowerCase()
          el.parentElement.parentElement.classList.add('hide');
        }
      });
    }else {
      list.forEach(el=> {
        console.log(333);
        el.parentElement.parentElement.classList.remove('hide');
      })
    }
    // console.log(this.value);
  };
};

const searchBtn = document.querySelector('.search-btn')

searchBtn.addEventListener('click',(e) => {
  e.preventDefault();

})