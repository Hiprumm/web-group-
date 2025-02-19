// 选择所有的手风琴按钮  
var accordions = document.querySelectorAll('.content .box3 .accordion');  

// 为每个手风琴按钮添加点击事件监听器  
accordions.forEach(function(acc) {  
    acc.addEventListener('click', function() {  
        // 切换当前面板的 "active" 类以改变样式  
        this.classList.toggle('active');  

        // 找到对应的面板  
        var panel = this.nextElementSibling; // 选择下一个兄弟元素  

        // 切换面板的显示状态  
        if (panel.style.maxHeight) {  
            panel.style.maxHeight = null; // 收缩面板  
        } else {  
            panel.style.maxHeight = panel.scrollHeight + "px"; // 展开面板并设置最大高度  
        }  
    });  
});