import './style.css';
import CateImg from "../public/image/category.png";
import userImg from "../public/image/user.png";
import cartImg from "../public/image/cart.png";

// 이미지 동적 추가
document.getElementById('category-img').src = CateImg;
document.getElementById('mypage-img').src = userImg;
document.getElementById('cart-img').src = cartImg;

// 롤링 배너 복제본 생성
const roller = document.querySelector('.Rolling-list');
roller.id = "roller1";
const clone = roller.cloneNode(true);
clone.id = 'roller2';
document.querySelector('.TopEvent').appendChild(clone);
document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.Rolling-list ul').offsetWidth + 'px';

roller.classList.add('original');
clone.classList.add('clone');


const mainImg = document.querySelectorAll('.slide');

function ShowImage(idx, item) {
  idx += 6;
  if (idx > 12)
    idx = (idx) % 12;
  item.src = `../public/image/man${idx}.jpg`;
  setTimeout(() => ShowImage(idx, item), 5000);
}
mainImg.forEach((item, idx) => {
  if (idx >12)
    item.src = `../public/image/man${idx + 1}.jpg`;
  setTimeout(() => ShowImage(idx + 1, item), 5000);

})

const sliderContainer = document.querySelector("#slider-items");
const slidesCount = document.querySelectorAll(".slide").length;
let currentIdx = 1;
function movingSlider(index) {
  sliderContainer.style.transition = "transform 0.5s ease";
  sliderContainer.style.transform = `translateX(-${575 * index}px)`;
  console.log("moving");
}
function AutoSlider() {
  currentIdx = (currentIdx + 1) % slidesCount;
  if (currentIdx > 3) {
    currentIdx = 0;
  }
  sliderContainer.style.transition = "transform 0.5s ease";
  sliderContainer.style.transform = `translateX(-${currentIdx * 575}px)`;
}
document.addEventListener("click", (e) => {
  let index = currentIdx;
  e.preventDefault();
  if (e.target.classList.contains("lBtn")) {
    currentIdx = currentIdx - 1 >= 0 ? currentIdx - 1 : slidesCount - 3;
  } else if (e.target.classList.contains("rBtn")) {
    currentIdx = currentIdx + 3 >= slidesCount ? 0 : currentIdx + 1;
  }

  movingSlider(index);
});
setInterval(AutoSlider, 8000);

const container = document.getElementsByClassName('.main-container');