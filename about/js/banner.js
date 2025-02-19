window.addEventListener('scroll', function() {  
    const imgElement = document.querySelector('.imgs img'); // 选择图像  
    const offset = window.pageYOffset; // 获取页面滚动的距离

    // 实现视差效果  
    imgElement.style.transform = `translateY(${offset * 0.5}px)`; // 背景图像以不同速度移动  
});