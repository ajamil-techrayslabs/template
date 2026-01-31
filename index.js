
//adding menu bar for the small devices view
const menu = document.querySelector(".menu")
const menuOptions = document.querySelector(".menu-options")
const musicDurationElement = document.querySelector("#music-duration")
const currentDurationElement = document.querySelector("#current-duration")
const seekTrack=document.querySelector("#seek-track")
const seekMove=document.querySelector("#seek-move")
const volumnTrack=document.querySelector("#volume-track")
const volumnMove=document.querySelector("#volume-move")
const musicProgress=document.querySelector("#progress")
const volumeProgress=document.querySelector("#volume-progress")
const waveDivs=document.querySelectorAll(".wave-div")
const music = new Audio("./music.mp3");
menu.addEventListener("click", () => {
    if (menuOptions.classList.contains('top-0')) {
        menuOptions.classList.remove('top-0')
        menuOptions.classList.add('-top-96')
    } else {
        menuOptions.classList.remove('-top-96');
        menuOptions.classList.add('top-0')
    }
})
//adding play pause toggle 
const play = document.querySelector(".play")
const icon = document.querySelector(".icon")
play.addEventListener("click", () => {
    if (icon.classList.contains('fa-play')) {
        icon.classList.remove('fa-play')
        icon.classList.add('fa-pause')
        music.play();
        waveDivs.forEach((ele)=> ele.classList.add("wave"))
    } else {
        icon.classList.remove('fa-pause')
        icon.classList.add('fa-play')
        music.pause();
        waveDivs.forEach((ele)=> ele.classList.remove("wave"))
    }
})
// converting seconds into min : sec format
const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.round(seconds % 60);
    return { min, sec };
}

music.addEventListener("canplay", ()=>{
    const {min, sec}=formatTime(music.duration);
    musicDurationElement.innerText=`${min.toString().padStart(2,'0')}:${String(sec).padStart(2,'0')}`
    volumnMove.style.left=(music.volume*100)+'%';
})
// seek bar updation for music
music.addEventListener("timeupdate",(e)=>{
    const {min,sec}=formatTime(music.currentTime);
    currentDurationElement.innerText=`${min.toString().padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
    seekMove.style.left=((music.currentTime/music.duration)*100)+'%';
    musicProgress.style.width=((music.currentTime/music.duration)*100)+'%';
    if(music.currentTime==music.duration && icon.classList.contains('fa-pause')){
        icon.classList.remove('fa-pause')
        icon.classList.add('fa-play')
        waveDivs.forEach((ele)=> ele.classList.remove("wave"))

    }

})
seekTrack.addEventListener("click",(e)=>{
    const percetage=(e.offsetX/e.currentTarget.getBoundingClientRect().width)*100
    seekMove.style.left=percetage+"%";
    music.currentTime=music.duration*(percetage/100)
})
// volumn seekbar
volumnTrack.addEventListener("click",(e)=>{
    const percetage=(e.offsetX/e.currentTarget.getBoundingClientRect().width)*100
    volumnMove.style.left=percetage+"%";
    music.volume=percetage/100;
    volumeProgress.style.width=(music.volume*100)+'%'
})

// note 1 : current target and target is different
// note 2 : stopPropogation method can be used to prevent child element events occuring
//  making active bar show
// const allLinks=document.querySelectorAll(".links")
// allLinks.forEach((link)=>{
//     link.addEventListener("click", ()=>{
//         allLinks.forEach((a)=>a.classList.remove("underline"));
//         link.classList.add("underline");
//     })

// })