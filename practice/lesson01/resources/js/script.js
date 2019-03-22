// $(document).ready(
//     function() {
//         $('h1').click(
//             function() {
//                 $(this).css('color', 'red');
//             }
//         )
//     }
// )

$(document).ready(
    function() {

        //sticky nav
        $('.about-section').waypoint(
            //bien directon nhu kieu dau moc tai vi tri about-section
            function(direction) {
                //neu direction di chuyen xuong, cuon xuong  duoi
                if (direction == "down") {
                    //thi chon the nav va them class sticky
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
                //khoang cach tinh tu vij tri moc, cach 100px thi se thuc thi function
                offset: '600px'
            }
        )

        //scrool smooth
        $('a').click(function() {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 700);
            return false;
        });

        $('.mobile-nav-icon').click(
            function() {
                //chon class main-nav va sua thuoc tinh display : none -> display : block
                $('.main-nav').slideToggle(200);

                //neu dang o trang thai fa-bars, co class fa-bars
                if ($('.mobile-nav-icon').hasClass('fa-bars')) {
                    //them class fa-times va remove class fa-bars
                    $('.mobile-nav-icon').addClass('fa-times');
                    $('.mobile-nav-icon').removeClass('fa-bars');
                } else {
                    $('.mobile-nav-icon').addClass('fa-bars');
                    $('.mobile-nav-icon').removeClass('fa-times');
                }
            }
        )
    }
)