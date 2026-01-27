//adding menu bar for the small devices view
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
//adding play pause toggle icon
const play=document.querySelector(".play")
const icon=document.querySelector(".icon")
play.addEventListener("click",()=>{
    if(icon.classList.contains('fa-play')){
        icon.classList.remove('fa-play')
        icon.classList.add('fa-pause')
    }else{
        icon.classList.remove('fa-pause')
        icon.classList.add('fa-play')
    }

   
})