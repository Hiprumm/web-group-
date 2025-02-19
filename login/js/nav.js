const nav = document.getElementsByClassName("nav")[0]; // 获取导航栏元素  
const SCROLL_THRESHOLD = 80;  
const LOCAL_STORAGE_KEY = "navCollapsed";  

// 检查 localStorage 并设置导航状态  
function checkNavState() {  
    const isCollapsed = localStorage.getItem(LOCAL_STORAGE_KEY);  
    if (isCollapsed === "true") {  
        nav.style.padding = "0px"; // 直接设置内边距为 0  
    }  
}  

// 更新 localStorage 中的导航状态  
function updateNavState(isCollapsed) {  
    localStorage.setItem(LOCAL_STORAGE_KEY, isCollapsed);  
}  

// 处理滚动事件  
function handleScroll() {  
    const shouldCollapse = document.body.scrollTop > SCROLL_THRESHOLD || document.documentElement.scrollTop > SCROLL_THRESHOLD;  
    if (shouldCollapse) {  
        nav.style.padding = "0px"; // 收缩  
        updateNavState("true"); // 更新状态为收缩  
        nav.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    } else {  
        nav.style.padding = "20px 0";// 伸展 
        nav.style.boxShadow = "none";
        updateNavState("false"); // 更新状态为正常  
    }  
}  

// 页面加载时检查导航状态  
window.addEventListener("load", () => {  
    nav.style.transition = 'none';
    checkNavState();
    nav.style.transition = 'padding 0.25s';
    window.addEventListener("scroll", handleScroll);
});