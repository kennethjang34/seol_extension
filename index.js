const folderPath = "./assets/images";
const seol_photos = ["0.jpeg", "1.jpeg"];
document.getElementById("i").src =
  folderPath + "/" + Math.floor(Math.random() * seol_photos.length) + ".jpeg";
