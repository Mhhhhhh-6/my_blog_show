console.log("一言脚本：已加载"); // 控制台打个招呼

function updateHitokoto() {
  // 【关键修改】Stack 主题的副标题类名其实是 .site-description
  // 为了保险，我们两个都找一下
  const element = document.querySelector('.site-description') || document.querySelector('.sidebar .subtitle');

  if (!element) {
    console.error("一言脚本：找不到 .site-description 元素！");
    return;
  }

  fetch('https://v1.hitokoto.cn/?c=a&c=b&c=c')
    .then(response => response.json())
    .then(data => {
      // 填入数据
      element.innerText = `${data.hitokoto} —— ${data.from}`;
      console.log("一言脚本：更新成功");
    })
    .catch(err => console.error("一言脚本：请求失败", err));
}

// 确保页面加载完再执行
window.addEventListener('load', updateHitokoto);