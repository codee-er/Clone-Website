


//  left sidebar

let sidebar = document.querySelector(".left-sidebar");
let menuIcon = document.querySelector(".menu-icon");
let VidContainer = document.querySelector(".container");

console.log(VidContainer)

menuIcon.addEventListener('click' , function(){

    sidebar.classList.toggle("sm-sidebar")
    VidContainer.classList.toggle("large-container")

})


