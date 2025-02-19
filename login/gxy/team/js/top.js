const button = document.getElementById("top");  

// 页面加载时检查 localStorage 中的值  
if (localStorage.getItem("top") === "true") {  
    button.style.bottom = "50px";  
}  

// 监听滚动事件  
window.onscroll = function () {  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {  
        button.style.bottom = "50px";  // 显示按钮  
        localStorage.setItem("top", "true");  
    } else {  
        button.style.bottom = "-75px";  // 隐藏按钮  
        localStorage.setItem("top", "false");  
    }  
};  

// 点击按钮时执行回到顶部的功能  
button.onclick = function() {  
    topFunction();  
};  

// 回到顶部的平滑滚动方法  
function topFunction() {  
    window.scrollTo({ 
        top: 0,  
        behavior: "smooth"  
    });  
}