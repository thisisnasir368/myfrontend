$(document).ready(function () {
    "use strict"; // Start of use strict

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
        if ($(window).width() > 768) {
            var e0 = e.originalEvent,
                    delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
        }
    });

    //Select2
    $(".basic-single").select2({
        theme: "bootstrap"
    });
    //Datepicker
    $('.datepicker').datepicker({
        autoclose: true
    });

    //spinner
    $('.spinner .btn:first-of-type').on('click', function () {
        var btn = $(this);
        var input = btn.closest('.spinner').find('input');
        if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
            input.val(parseInt(input.val(), 10) + 1);
        } else {
            btn.next("disabled", true);
        }
    });
    $('.spinner .btn:last-of-type').on('click', function () {
        var btn = $(this);
        var input = btn.closest('.spinner').find('input');
        if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
            input.val(parseInt(input.val(), 10) - 1);
        } else {
            btn.prev("disabled", true);
        }
    });

    //sortable
    $(function () {
        $("#sortable").sortable();
        $("#sortable").disableSelection();
    });

    //slimScroll
    $('.sortable--list').slimScroll({
        height: '518px',
        size: '5px',
        distance: '0px',
        color: '#aeafbc',
        alwaysVisible: true,
        railVisible: true,
        railColor: '#e3e4ed',
        railOpacity: 1
    });

    //metisMenu
    $("#sortable").metisMenu();

});
