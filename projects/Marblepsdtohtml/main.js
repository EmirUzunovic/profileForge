let burger = document.querySelector('#burger-nav');
let list = document.querySelector('header nav ul');
console.log(list);
burger.addEventListener("click", function(){
    list.classList.toggle("open");
})