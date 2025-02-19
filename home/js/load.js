// 记录页面加载开始时间  
const startTime = performance.now();  

window.onload = function() {  
    // 获取加载界面元素  
    var load = document.getElementsByClassName("ccc")[0];  

    // 计算页面加载时间  
    const endTime = performance.now();  
    const loadTime = endTime - startTime;  

    // 确保至少 300 毫秒后隐藏加载界面  
    setTimeout(() => {  
        load.style.display = "none";  
    }, Math.max(loadTime, 300)); // 使用最大值，确保至少等待 300 毫秒  
}; 