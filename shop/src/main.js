import './style.css';
import CateImg from "../public/image/category.png";

document.querySelector('#app').innerHTML = `
  <header>
    <div class ="TopEvent">
      <div class ="Rolling-list">
      <ul>
        <li>클릭 시 5% 할인쿠폰 지급🧡</li>
        <li>클릭 시 5% 할인쿠폰 지급🧡</li>
        <li>클릭 시 5% 할인쿠폰 지급🧡</li>
        <li>클릭 시 5% 할인쿠폰 지급🧡</li>
        <li>클릭 시 5% 할인쿠폰 지급🧡</li>
        <li>클릭 시 5% 할인쿠폰 지급🧡</li>
      </div>
      </ul>
    </div>
    <div class ="topArea">
      <h1>10012</h1>
      <p class="left"><img /></p>
      <p class="right">마이페이지</p>
      <p class="right">장바구니</p>
    </div>
  </header>
`;

let roller = document.querySelector('.Rolling-list');// 롤링 배너 복제본 생성
roller.id = "roller1"; // 아이디 부여

let clone = roller.cloneNode(true) // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
clone.id = 'roller2';
document.querySelector('.TopEvent').appendChild(clone); // wrap 하위 자식으로 부착
document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.Rolling-list ul').offsetWidth + 'px';
// offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

roller.classList.add('original');
clone.classList.add('clone');

let category  =document.querySelector('.left');
let cateimage = document.createElement('img');
category.appendChild(cateimage).src =CateImg;