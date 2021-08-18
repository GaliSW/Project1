$(document).ready(function () {
    $('.next').click(function () {
        $('.pagination_list').find('.pageNumber.focus').next().addClass('focus');
        $('.pagination_list').find('.pageNumber.focus').prev().removeClass('focus');
        console.log("next");
    })
    $('.prev').click(function () {
        $('.pagination_list').find('.pageNumber.focus').prev().addClass('focus');
        $('.pagination_list').find('.pageNumber.focus').next().removeClass('focus');
        console.log("prev");
    })
})