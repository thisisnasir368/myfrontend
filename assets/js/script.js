$(document).ready(function () {
    "use strict"; // Start of use strict

    $("#mobile-menu").metisMenu();

    $("#sidebar").mCustomScrollbar({
        theme: "minimal",
        scrollInertia: 100
    });

    $('.overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').fadeOut();
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').fadeIn();
    });


    $("#userSidebar").mCustomScrollbar({
        theme: "minimal",
        scrollInertia: 100
    });

    $('.overlay').on('click', function () {
        $('#userSidebar').removeClass('active');
        $('.overlay').fadeOut();
    });

    $('#userSidebarCollapse').on('click', function () {
        $('#userSidebar').addClass('active');
        $('.overlay').fadeIn();
    });

    //Searc bar

    $('.dismiss, .overlay').on('click', function () {
        $('.search-bar').removeClass('active');
        $('.overlay').fadeOut();
    });

    $('#searchBarCollapse').on('click', function () {
        $('.search-bar').addClass('active');
        $('.overlay').fadeIn();
    });

    //Select2
    $(".basic-single").select2({
        theme: "bootstrap"
    });
    //Datepicker
    $('.datepicker').datepicker({
        autoclose: true
    });

});
