const input = document.querySelector('.input')
const searchBtn = document.querySelector('.serach-btn')

const arr = ['shugar', 'tomat', 'snund', 'hagust']

searchBtn.addEventListener('click', () => {
  // const newArr = [];
  for(const el of arr) {
    if(input.value === el) {
      console.log(el)
    }
  }
  console.log(newArr);
  let result =  arr.filter(el => input.value === el)

console.log(result);
})

let result =  arr.filter(el => input.value === el)

console.log(result);
