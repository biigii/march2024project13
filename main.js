


var mainHeading = document.createElement("h1");
mainHeading.textContent = "homepage"
document.body.appendChild(mainHeading);

var image = document.createElement('img')
image.src = "https://picsum.photos/id/1050/300"
image.alt = "my very awesome photo"
image.style.borderRadius = "50%"
image.style.border = "3px solid"
document.getElementById("image-holder").appendChild(image)