const nav = document.getElementsByClassName("nav")[0];  
const up = document.getElementsByClassName("up")[0];  
const SCROLL_THRESHOLD = 80;  
const LOCAL_STORAGE_KEY = "navCollapsed";  

function checkNavState() {  
    const isCollapsed = localStorage.getItem(LOCAL_STORAGE_KEY);  
    if (isCollapsed === "true") {  
        setNavCollapsed(true);   
    }  
}  

function updateNavState(isCollapsed) {  
    localStorage.setItem(LOCAL_STORAGE_KEY, isCollapsed);  
}  

function setNavCollapsed(isCollapsed) {  
    if (isCollapsed) {  
        nav.style.padding = "0px";
        nav.style.top = "0px";
        up.style.top = "-60px";
        up.style.opacity = "0.5";
        nav.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";  
    } else {  
        nav.style.padding = "20px 0";  
        nav.style.top = "65px";  
        up.style.top = "0px";  
        up.style.opacity = "1";  
        nav.style.boxShadow = "none";  
    }  
}  

function handleScroll() {  
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;  
    const shouldCollapse = scrollTop > SCROLL_THRESHOLD;  

    setNavCollapsed(shouldCollapse);  
    updateNavState(shouldCollapse ? "true" : "false");  
}  

window.addEventListener("load", () => {  
    checkNavState();  
    window.addEventListener("scroll", handleScroll);  
});