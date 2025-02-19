function change(evt, tabId) {  
    const tabContents = document.querySelectorAll('.shuru');  
    const tabButtons = document.querySelectorAll('.bq');  

    // 隐藏所有选项卡内容  
    tabContents.forEach(content => {  
        content.classList.remove('active');  
        content.style.display = "none";  
    });  

    // 移除所有按钮的激活状态  
    tabButtons.forEach(button => {  
        button.classList.remove('active');  
    });  

    // 显示当前选中的选项卡内容  
    const currentTab = document.getElementById(tabId);  
    currentTab.style.display = "block";  
    setTimeout(() => {  
        currentTab.classList.add('active');  
    }, 75);  

    // 添加激活状态到当前按钮  
    evt.currentTarget.classList.add('active');  
}  

// 默认打开选项卡  
document.addEventListener('DOMContentLoaded', () => {  
    const firstButton = document.querySelector('.bq'); // 获取第一个按钮  
    if (firstButton) {  
        change({ currentTarget: firstButton }, 'a1');  
    }
});