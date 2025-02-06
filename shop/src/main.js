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

const mainImg= document.querySelectorAll('.main-img');

function ShowImage (idx,item){
  idx+=3;
  if(idx > 6)
    idx = (idx) % 6;
   item.src= `../public/image/man${idx}.jpg`;
   setTimeout(() => ShowImage(idx, item), 3000);
}
mainImg.forEach((item,idx)=> {
  item.src= `../public/image/man${idx+1}.jpg`;
  setTimeout(() => ShowImage(idx+1, item), 3000);
  
})  