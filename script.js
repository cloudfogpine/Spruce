// 页面加载完成后触发
/*window.addEventListener('load', () => {

  // 隐藏加载动画
  document.querySelector('.loader').style.display = 'none';

  // 显示页面内容
  document.querySelector('.content').style.display = 'block'; 
});*/
//测试模式，下面这段代码正常情况下是注释了，下面这段代码仅供测试使用
document.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {
    document.querySelector('.loader').style.display = 'none'; 
    document.querySelector('.content').style.display = 'block';
  }, 500);

});
// 导航栏效果实现