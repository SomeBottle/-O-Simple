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

/*Darkmode Support 20241105*/
let themeMode = localStorage.getItem("o_simple_darkmode");
if (themeMode == null) {
    // 尚未定义，检测浏览器目前的主题
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeMode = "dark";
    } else {
        themeMode = "light";
    }
    localStorage.setItem("o_simple_darkmode", themeMode);
}
document.body.setAttribute("data-theme", themeMode);

SC("darkmode-switch").addEventListener("click", () => {
    if (themeMode == "dark") {
        themeMode = "light";
    } else {
        themeMode = "dark";
    }
    localStorage.setItem("o_simple_darkmode", themeMode);
    document.body.setAttribute("data-theme", themeMode);
});