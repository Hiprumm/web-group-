function openTab(evt, tabId) {  
    const tabContents = document.querySelectorAll('.tabcontent');  
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

function openTabl(evt, tabId) {  
    const tabContents = document.querySelectorAll('.tabcontent1');  
    const tabButtons = document.querySelectorAll('.bql');  

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
    // 水平选项卡默认打开第一个选项  
    const firstHorizontalButton = document.querySelector('.bq'); // 获取第一个按钮  
    if (firstHorizontalButton) {  
        openTab({ currentTarget: firstHorizontalButton }, 'b1');  
    }  

    // 垂直选项卡默认打开第一个选项  
    const firstVerticalButton = document.querySelector('.bql'); // 获取第一个按钮  
    if (firstVerticalButton) {  
        openTabl({ currentTarget: firstVerticalButton }, 'b1l');  
    }  
});