const dropdowns = document.querySelectorAll('.dropdown');  

dropdowns.forEach(dropdown => {  
    let timeout;  

    const drop = dropdown.querySelector('.drop');  

    dropdown.addEventListener('mouseenter', function() {  
        clearTimeout(timeout);  
        drop.style.opacity = '1';  
        drop.style.top = '55px';  
        drop.style.visibility = 'visible';  
    });  

    dropdown.addEventListener('mouseleave', function() {  
        clearTimeout(timeout); // 清除上一个定时器  
        timeout = setTimeout(function() {  
            drop.style.opacity = '0';  
            drop.style.top = '65px';  
            // 使用另一个定时器来延迟隐藏  
            setTimeout(function() {  
                drop.style.visibility = 'hidden'; // 隐藏  
            }, 300); // 等待过渡时间  
        }, 300); // 设置延迟时间  
    });  
});