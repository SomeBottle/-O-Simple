/*The underline of navigation*/
B.nav({
    activeclass: 'current',
    navclass: 'nvbtn'
});
B.navcheck();
/*The function for toggling the lazyload*/
var onlazy = true;
function togglelazy(element) {
    if (onlazy) {
        onlazy = false;
        element.innerHTML = "我要加载图片！";
        B.lazy(false);
    } else {
        onlazy = true;
        element.innerHTML = "不要加载图片";
        B.lazy(true);
    }
}
/*The listener of 'backtotop' button*/
window.addEventListener("scroll", () => {
    if (document.body.scrollTop <= 700) {
        SC("backtop").style.opacity = 0;
    } else {
        SC("backtop").style.opacity = 1;
    }
}, false);