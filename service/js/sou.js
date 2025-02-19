var searchbox=document.getElementsByClassName("searchbox")[0];
var x=1;

function openNav() {
    if(x==1){
        searchbox.style.opacity = "1";
        searchbox.style.top = "150px";
        searchbox.style.left = "1250px";
        x=0;
    }
    else{
        searchbox.style.opacity = "0";
        searchbox.style.top = "0px";
        x=1;
    }
}