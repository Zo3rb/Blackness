$(function() {

    // Spread Social Media Icons on Hover
    $(".social-wrapper").mouseover(function() {
        $(".social-list").animate({
            top: 320
        }, 400);
    }).mouseleave(function() {
        $(".social-list").animate({
            top: 430
        }, 400);
    });

    // Trigger The Sub Menu Page
    $(".custome-btn").click(function() {
        $(".custome-modal").fadeIn(500);
        $(".signture").html("Ahmed Karam"); // Changing The Signture
    });

    $(".close-btn").click(function() {
        $(".custome-modal").fadeOut(500);
        $(".signture").html("Force Touches"); // Changing The Signture
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            $(".custome-modal").fadeOut(500);
            $(".signture").html("Force Touches"); // Changing The Signture
        }
    });

    // Toggling The Submenues On Click Main Menu li
    $(".nav-list ul li").click(function(e) {
        $(".sub-list").children().fadeOut(300);
        $($(this).data("list")).delay(300).fadeIn(500);
        e.preventDefault();
    });

});