document.getElementById('category-img').src = "image/category.png";
document.getElementById('mypage-img').src = "image/user.png";
document.getElementById('cart-img').src = "image/cart.png";

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
  item.src = `image/man${idx}.jpg`;
  setTimeout(() => ShowImage(idx, item), 5000);
}
mainImg.forEach((item, idx) => {
  if (idx > 12)
    item.src = `image/man${idx + 1}.jpg`;
  setTimeout(() => ShowImage(idx + 1, item), 5000);

})

const sliderContainer = document.querySelector("#slider-items");
const slidesCount = document.querySelectorAll(".slide").length;
let currentIdx = 1;
if (sliderContainer) {
  function movingSlider(index) {
    const sliderContainer = document.getElementById('slider-items');
    const slideWidth = 29;  // 슬라이드 너비를 100%로 설정
    sliderContainer.style.transition = "transform 0.5s ease";
    sliderContainer.style.transform = `translateX(-${slideWidth * index}%)`; // 퍼센트 단위로 이동
  }
  function AutoSlider() {
    currentIdx = (currentIdx + 1) % slidesCount;
    if (currentIdx > 3) {
      currentIdx = 0;
    }
    movingSlider(currentIdx);
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
}


document.querySelector(".mypage").addEventListener("click", () => {
  window.location.href = "login.html";
});
document.querySelector(".home").addEventListener("click", () => {
  window.location.href = "index.html";
});
if (document.querySelector("#SignM")) {
  document.querySelector("#SignM").addEventListener("click", () => {
    window.location.href = "Signup.html";
  });
}
if (document.querySelector("#loginM")) {
  document.querySelector("#loginM").addEventListener("click", () => {
    window.location.href = "login.html";
  });
}



document.addEventListener('DOMContentLoaded', async () => {
  try {
    // API 호출
    let productList = await fetch("http://localhost:8080/getAllProducts", { method: "GET" });
    let products = await productList.json();

    // 요소 생성
    let mainContainer = document.querySelector("#main-container");

    // 12개의 제품을 2개씩 묶어서 main-wrap에 넣기
    let currentWrap = null;

    products.forEach((product, index) => {
      // 2개의 제품마다 새 main-wrap 생성
      if (index % 2 === 0) {
        currentWrap = document.createElement('div');
        currentWrap.classList.add("main-wrap");
        mainContainer.appendChild(currentWrap);
      }
      //  item-box  생성
      let itemBox = document.createElement('div');
      itemBox.classList.add('item-box');
      // 이미지 추가
      let img = document.createElement('img');
      img.src = `image/${product.image}`; 

      // name 추가
      let nameSpan = document.createElement('span');
      nameSpan.textContent = product.productname;
      // dscript 추가
      let descriptionSpan = document.createElement('span');
      descriptionSpan.textContent = product.descript;
      // 가격 추가
      let priceSpan = document.createElement('span');
      priceSpan.textContent = `${product.price.toLocaleString()}원`;
      // 태그 추가가
      let tagDiv = document.createElement("div");
      tagDiv.classList.add('tagList');
      let tagCnt =1;
      product.tag.forEach((t)=> {
        if(tagCnt<=3) {
          let TagSpan = document.createElement('span');
          TagSpan.textContent = t;
          tagDiv.appendChild(TagSpan);
        }
        tagCnt++;
      })
      let ColorDiv = document.createElement("div");
      ColorDiv.classList.add('ColorList');
      let colorCnt =1;
      product.color.forEach((t)=> {
        if(colorCnt<=3) {
          let ColorSpan = document.createElement('span');
          ColorSpan.style.backgroundColor=t;
          ColorDiv.appendChild(ColorSpan);
        }
        colorCnt++;
      })
      itemBox.appendChild(img);
      itemBox.appendChild(nameSpan);
      itemBox.appendChild(descriptionSpan);
      itemBox.appendChild(priceSpan);
      itemBox.appendChild(tagDiv);
      itemBox.appendChild(ColorDiv);
      // currentWrap에 item-box 추가
      currentWrap.appendChild(itemBox);
    });
  } catch (error) {
    console.error("Error fetching product list:", error);
  }
});


