let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 当用户下滑时，隐藏导航栏
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-60px"; // 隐藏导航栏 (根据导航栏的高度调整)
    } 
    // 当用户上滑时，显示导航栏
    else {
        navbar.style.top = "0"; // 显示导航栏
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 确保 scrollTop 不为负值
});
