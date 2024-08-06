
const togglebtn = document.querySelector(".toggle-bar");
const navlist = document.querySelector(".nav-list");

togglebtn.addEventListener("click", () =>{
    navlist.classList.toggle("active")
})