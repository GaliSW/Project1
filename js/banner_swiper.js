
var index = 1;
function next() {
    if (index == 3) {
        index = 1;
        $(".swiper").css("transition", "left 1.5s")
        $(".swiper").css("left", "-3150px")

        setTimeout(
            () => {
                $(".swiper").css("transition", "")
                $(".swiper").css("left", "0px")
            }, 1500
        )
        $(".d3").removeClass("color")
        $(".d1").addClass("color")
    } else {
        let str = ".d" + index
        $(str).removeClass("color")
        console.log(str)
        index = index + 1
        str = ".d" + index
        console.log(str)
        $(str).addClass("color")
        let width = "-" + (index - 1) * 1050 + "px"
        $(".swiper").css("transition", "left 1.5s")
        $(".swiper").css("left", width)
        setTimeout(
            () => {
                $(".swiper").css("transition", "")
            }, 1500
        )
    }
}
function pre() {
    if (index == 1) {
        index = 3;
        $(".swiper").css("left", "-3150px")

        setTimeout(
            () => {
                $(".swiper").css("transition", "left 1.5s")
                $(".swiper").css("left", "-2100px")
            }, 1500
        )
        $(".swiper").css("transition", "")
        $(".d1").removeClass("color")
        $(".d3").addClass("color")
    } else {
        let str = ".d" + index
        $(str).removeClass("color")
        console.log(str)
        index = index - 1
        str = ".d" + index
        console.log(str)
        $(str).addClass("color")
        let width = "-" + (index - 1) * 1050 + "px"
        $(".swiper").css("transition", "left 1.5s")
        $(".swiper").css("left", width)
        setTimeout(
            () => {
                $(".swiper").css("transition", "")
            }, 1500
        )
    }
}
$(".right").click(function () {
    next()
})
$(".left").click(function () {
    pre()
})

function setTimer() {
    setInterval(() => {
        next()
    }, 5000)
}
setTimer()
