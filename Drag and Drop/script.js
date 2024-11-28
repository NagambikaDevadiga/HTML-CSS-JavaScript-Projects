let dropArea = document.querySelector(".drop");
let inputFile = document.querySelector("#input-file");
let image = document.querySelector(".image");

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
  // inputFile.files[0]
  let imgLink = URL.createObjectURL(inputFile.files[0]);

  image.style.backgroundImage = `url(${imgLink})`;
  // image.style.backgroundPosition = "center";
  // image.style.backgroundSize = "cover";
  image.textContent = "";
  image.style.border = "none";
}

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage()
});
