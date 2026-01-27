const menu=document.querySelector(".menu")
const menuOptions=document.querySelector(".menu-options")
menu.addEventListener("click",()=>{
    if(menuOptions.classList.contains('top-0')){
        menuOptions.classList.remove('top-0')
        menuOptions.classList.add('-top-96')
    }else{
        menuOptions.classList.remove('-top-96');
        menuOptions.classList.add('top-0')
    }
})