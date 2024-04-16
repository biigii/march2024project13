// document.querySelector('h1').style.backgroundColor = "red"
// document.querySelector(".heading").style.backgroundColor = "red"
// document.querySelector('#heading').style.backgroundColor = "yellow"

// here is a function which adds an image to html when button clicked
function addImageToMyPage() {
    var image = document.createElement("img")
    image.setAttribute("src", "https://picsum.photos/id/1060/200")
    image.setAttribute("alt", "this image is being added to html via JS")
    image.classList.add('my-photo')
    document.body.appendChild(image);
}

document.querySelector("#add-image").addEventListener("click",addImageToMyPage)

function myFirstFunction() {
   document.querySelector("h1").style.color = "red"
   document.querySelector("h1").style.textAlign = "center"
   document.body.style.backgroundColor = "#f99"
}

document.querySelector("#btn").addEventListener("click",myFirstFunction)