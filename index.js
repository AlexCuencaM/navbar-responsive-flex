document.getElementsByClassName("navbar__button")[0].addEventListener("click",()=>{
    const list = document.getElementsByClassName("navbar__list")[0];
    list.classList.toggle("active");
})