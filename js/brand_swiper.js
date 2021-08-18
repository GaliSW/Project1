
var brands_index = 1;
function brand_next() {
    if (brands_index == 3) {
        brands_index = 1;
        $(".brands_swiper").css("transition", "left 1.5s")
        $(".brands_swiper").css("left", "-3150px")

        setTimeout(
            () => {
                $(".brands_swiper").css("transition", "")
                $(".brands_swiper").css("left", "0px")
            }, 1500
        )
        // $(".d3").removeClass("color")
        // $(".d1").addClass("color")
    } else {
        // let str = ".d" + brands_index
        // $(str).removeClass("color")
        // console.log(str)
        // brands_index = brands_index + 1
        // str = ".d" + brands_index
        // console.log(str)
        // $(str).addClass("color")
        let width = "-" + (brands_index - 1) * 1050 + "px"
        $(".brands_swiper").css("transition", "left 1.5s")
        $(".brands_swiper").css("left", width)
        setTimeout(
            () => {
                $(".brands_swiper").css("transition", "")
            }, 1500
        )
    }
}
function brand_pre() {
    if (brands_index == 1) {
        brands_index = 3;
        $(".brands_swiper").css("left", "-3150px")

        setTimeout(
            () => {
                $(".brands_swiper").css("transition", "left 1.5s")
                $(".brands_swiper").css("left", "-2100px")
            }, 1500
        )
        $(".brands_swiper").css("transition", "")
        // $(".d1").removeClass("color")
        // $(".d3").addClass("color")
    } else {
        // let str = ".d" + brands_index
        // $(str).removeClass("color")
        // console.log(str)
        // brands_index = brands_index - 1
        // str = ".d" + index
        // console.log(str)
        // $(str).addClass("color")
        let width = "-" + (brands_index - 1) * 1050 + "px"
        $(".brands_swiper").css("transition", "left 1.5s")
        $(".brands_swiper").css("left", width)
        setTimeout(
            () => {
                $(".brands_swiper").css("transition", "")
            }, 1500
        )
    }
}
// $(".right").click(function () {
//     brand_next()
// })
// $(".left").click(function () {
//     brand_pre()
// })

                // function setTimer() {
                //     setInterval(() => {
                //         next()
                //     }, 5000)
                // }
                // setTimer()
