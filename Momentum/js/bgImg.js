const bgImg = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];

const randomBgImg = bgImg[Math.floor(Math.random() * bgImg.length)];

const imgTag = document.createElement("img");
imgTag.src = `img/${randomBgImg}`;

document.body.appendChild(imgTag);