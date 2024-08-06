const images = document.querySelectorAll(".images");
var counter = 0;
// console.log(images);

images.forEach(
    (image,index) => {
        image.style.left = `${index * 100}%`
    }
)

const goleft = () =>{
    counter--;
    slideImage()
}

const goRight = () =>{
    counter++;
    slideImage()
}

const slideImage = () => {
    images.forEach((image)=>{
        console.log("slideimage")
        image.style.transform = `translateX(-${counter * 100}%)`
    }


const togglebtn = document.querySelector(".toggle-bar");
const navlist = document.getElementbyClass("nav-list");

togglebtn.addEventListener("click", () =>{
    navlist.classList.toggle(".active")
})