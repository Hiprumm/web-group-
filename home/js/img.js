window.addEventListener('scroll', function() {  
    const scrolled = window.scrollY;  
    const parallaxBackground = document.querySelector('.banner .imgs img');
    parallaxBackground.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
});

window.addEventListener('scroll', function() {  
    // 获取当前的滚动位置  
    const currentScrollY = window.scrollY;  
    // 设置一个阈值  
    const threshold = 2500;  
    
    // 计算基于阈值的有效滚动距离  
    const effectiveScroll = Math.max(currentScrollY - threshold, 0);  
    
    const parallaxBackground = document.querySelector('.banner2 .imgs img');  
    
    // 使用 translateY 控制背景图像的移动  
    parallaxBackground.style.transform = 'translateY(' + (effectiveScroll * 0.5) + 'px)';  
});