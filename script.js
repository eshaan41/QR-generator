let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let button = document.getElementById("btn");

function generateQR() {
  // console.log('clicked');
  if (!qrText.value) {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 400);
  } else {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    imgBox.classList.add("show-img");
  }
}
