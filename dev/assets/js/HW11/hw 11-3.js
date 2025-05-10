const photoElemnt = document.querySelector(".photo")
function randomPhotos() {
	 return Math.floor(Math.random() * 9 + 1);
}

const imageNumber = randomPhotos();
photoElemnt.src = "img/" + randomPhotos() + ".jpg";