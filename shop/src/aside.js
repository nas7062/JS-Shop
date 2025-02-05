import './style.css';

document.querySelector('#aside').innerHTML = `
  <aside id ="aside-bar">
    <h2>Shop</h2>
    <ul id ="side-list">
      <li class="cate">Best</li>
      <li class="cate">New arrivals[7% Off]</li>
      <li class="cate">Top</li>
      <li class="cate">Outer</li>
      <li class="cate">Bottom</li>
      <li class="cate">ACC</li>
    </ul>
  </aside>
`;

let cateBtn = document.querySelector('.category');
let aside_bar = document.querySelector('#aside-bar');
cateBtn.addEventListener("click", ()=> {
  aside_bar.style.transform = "translateX(400px)";
  aside_bar.style.transition = "transform 0.3s  ease-in-out";
  
})