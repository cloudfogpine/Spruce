//加载结束判断(手动控制)测试模式
// 加载动画文件目录
const gifPath = '/Loading/';

document.addEventListener('DOMContentLoaded', () => {

  // 生成随机数
  const randomNum = Math.floor(Math.random() * 1);

  // 拼接随机文件名
  const loaderImg = gifPath + 'loader-' + randomNum + '.gif';

  // 设置img的src为随机文件
  document.querySelector('.loader').src = loaderImg;

  // 3秒后隐藏动画
  setTimeout(() => {
    document.querySelector('.loader-mask').style.display = 'none';
  }, 3000);

});
//加载结束判断(自动检测)

// 设置加载动画文件的目录
/*const gifPath = '/Loading/';

// 页面加载完毕后执行
window.addEventListener('load', () => {

  // 生成一个随机数
  const randomNum = Math.floor(Math.random() * 1);

  // 拼接随机gif文件名
  let loaderImg = gifPath + 'loader-' + randomNum + '.gif';

  // 设置img标签的src为这个随机gif文件 
  document.querySelector('.loader').src = loaderImg;

  // 加载完成后隐藏动画
  document.querySelector('.loader').style.display = 'none';

});*/