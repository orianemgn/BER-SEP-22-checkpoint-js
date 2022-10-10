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
const titleH2 = document.getElementsByClassName('pink-text'); 
// console.log("H2", titleH2);
// console.log("Backgroud", background[0].style)
// console.log(submitName);
submitName.addEventListener('click', changeName); 

function changeName(e){
    const name = document.getElementById('name'); 
    let newBackground = prompt("Please enter a color", " #750ff7");
    let person = prompt("Please enter your name", "Harry Potter");
    //console.log(newBackground)
    for (let i = 0; i < background.length; i++){

        background[i].style.backgroundColor  = newBackground;
    }

    for ( let j = 0; j <titleH2.length; j++){
        titleH2[j].style.color = newBackground; 
    }
        
        submitName.style.backgroundColor = newBackground;
        name.innerHTML = person;
}


const list = document.querySelectorAll("#front-dev-tools li"); 
//console.log(list)
const submitList = document.getElementById("submitList")

const newList = ["VSCode","Terminal", "GitHub"]

submitList.addEventListener("click", changeList); 

function changeList(e){
    for (let i = 0; i < list.length; i++){
        //console.log(list[i].innerHTML)
        
            list[i].innerHTML = newList[i]
    }
}


const listBackend = document.getElementById('backend-dev-tools'); 
console.log("LIST", listBackend)
const submitNew = document.getElementById("submitNew"); 

let arrayListBackend = []; 

submitNew.addEventListener("click", addNew); 

function addNew(e){

    e.preventDefault()
    const input = document.getElementById("submitValue");
    console.log(input.value)
    const newValue = input.value; 
    //listBackend.appendChild(newValue);
    arrayListBackend.push(newValue); 
}

console.log("ARRAY", arrayListBackend)



for (let i = 0; i < listBackend.length; i++){
    //console.log(listBackend[i])
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(arrayListBackend[i]));
    listBackend.appendChild(li);
}









