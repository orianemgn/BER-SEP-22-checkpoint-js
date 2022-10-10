const image = document.getElementById('avatar'); 
//console.log("Image", image)

image.addEventListener('click', changeImage); 
//
function changeImage(e){
    const img1 = "http://127.0.0.1:5500/site/image/avatar.svg";
    const img2 = "http://127.0.0.1:5500/site/image/avatar-bis.png";
    image.src = (image.src === img1)? img2 : img1;
}

const submitName = document.getElementById('submitName');
const background = document.getElementsByClassName('description'); 
console.log("Backgroud", background[0].style)
console.log(submitName);
submitName.addEventListener('click', changeName); 

function changeName(e){
    const name = document.getElementById('name'); 
    let newBackground = prompt("Please enter a color", " #750ff7");
    let person = prompt("Please enter your name", "Harry Potter");
    console.log(newBackground)
        background[0].style.backgroundColor  = newBackground;
        submitName.style.backgroundColor = newBackground;
        name.innerHTML = person;

}

