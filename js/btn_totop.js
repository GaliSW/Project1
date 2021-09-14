
var btn_totop = document.querySelector(".btn_totop");
btn_totop.addEventListener('click', function () {
    var time = setInterval(function () {
        let top = pageYOffset;
        let step = Math.ceil(top / 50);
        window.scroll(0, top - step);
        if (top == 0) {
            clearInterval(time);
        }
    })
})
window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 0) {
        btn_totop.style.right = 10 + "px";
    } else {
        btn_totop.style.right = -55 + "px"
    }
})
