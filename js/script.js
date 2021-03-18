$(function () {
    $('.nav-link, .navbar-brand').on('click', function (e) {
        let href = $(this).attr('href')
        let tujuan = $(href)
        // console.log(tujuan)

        // console.log($(window).scrollTop())
        // $(window).scroll(function () {
        let linked = $('html').animate({
            scrollTop: tujuan.offset().top
        },1000,'easeInOutExpo');
        // console.log(linked)
        // });
        e.preventDefault();
    });

    $('.nav-link').on('click',function () {
        $('ul li a').removeClass('active')
        $(this).addClass('active')
    })

    $(window).scroll(function () {
        let win = $(this).scrollTop()
        // console.log(win)
        $('#about img').css({
            'transform': 'translate(0,'+ win/12 +'%)'
        })

        if (win > $('#portfolio').offset().top - 50) {
            $('#portfolio .card').each(function (i) {
                setTimeout(function () {
                    $('#portfolio .card').eq(i).addClass('show')
                },300 * i)
            })
        }
    })
});