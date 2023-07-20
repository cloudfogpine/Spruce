/* 文字动画 */

// 循环显示文字

// 添加 show 类

/* 展开动画 */

// 获取按钮
const btn = document.querySelector('.toggle-details');

// 点击处理
btn.addEventListener('click', () => {
  // 切换 open 类
});
// 文字动画
const spans = document.querySelectorAll('#intro span');

let index = 0;

function showText() {
  spans[index].classList.add("show");
  index++;
  
  if(index < spans.length){
    setTimeout(showText, 300); 
  }
}

showText();


// 展开动画
const btn = document.querySelector('.toggle-details');
const details = document.querySelector('.details');

btn.addEventListener('click', () => {
  details.classList.toggle('open'); 
});