function ImageGallery() {
    const images = document.querySelectorAll('.images img');
    const displayImage = document.querySelector('.display-image');
    const button = document.querySelector('.display-image span');
    images.forEach(image => {
        image.onclick = () => {
            displayImage.style.display = "block";
            displayImage.querySelector('img').src = image.src;
        };
    });
    button.onclick = () => {
        displayImage.style.display = "none";
    };
}
document.addEventListener("imageGalleryLoaded", ImageGallery);
ImageGallery(); 

