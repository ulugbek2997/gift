function toggleDropdownMenu(){
  let dropdawnMenu=document.querySelector('.dropdown__menu');
  console.log(dropdawnMenu)
  dropdawnMenu.classList.toggle('activ');
  console.log("helo")
}

let dropdawnBtn=document.querySelector('.dropdown__btn');
  dropdawnBtn.addEventListener('click',toggleDropdownMenu);

let headerBurgerBtn=document.querySelector('.header__burger');
  headerBurgerBtn.addEventListener('click',toggleHeaderMenu);


function toggleHeaderMenu(){
  let headerMenu=document.querySelector('.header__menu');
  console.log(headerMenu)
  headerMenu.classList.toggle('activ');
}