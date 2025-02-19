const box = document.getElementsByClassName("searchbox")[0];

let isDragging = false;  
let offsetX, offsetY;  

// 鼠标按下事件  
box.addEventListener("mousedown", (e) => {  
    // 获取鼠标位置相对盒子的位置  
    const rect = box.getBoundingClientRect();  
    
    // 只在边缘区域进行拖动  
    if (e.clientX >= rect.left && e.clientX <= rect.right &&   
        (Math.abs(e.clientY - rect.top) <= 10 || Math.abs(e.clientY - rect.bottom) <= 10 ||  
        Math.abs(e.clientX - rect.left) <= 10 || Math.abs(e.clientX - rect.right) <= 10)) {  
        
        isDragging = true;  
        offsetX = e.clientX - rect.left;  
        offsetY = e.clientY - rect.top;  

        document.addEventListener("mousemove", mouseMoveHandler);  
        document.addEventListener("mouseup", mouseUpHandler);  
    }  
});  

// 鼠标移动事件  
function mouseMoveHandler(e) {  
    if (isDragging) {  
        box.style.transition = "none";
        box.style.left = `${e.clientX - offsetX}px`;  
        box.style.top = `${e.clientY - offsetY}px`;  
    }
}  

// 鼠标抬起事件  
function mouseUpHandler() {  
    isDragging = false;  
    document.removeEventListener("mousemove", mouseMoveHandler);  
    document.removeEventListener("mouseup", mouseUpHandler);
    box.style.transition = "opacity 0.3s ease,top 0.3s ease";
}