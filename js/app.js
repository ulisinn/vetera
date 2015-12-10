/**
 * Created by ulrichsinn on 01/19/2015.
 */

requirejs.config({
    "baseUrl": "js",
    "paths": {
        "app": "app",
        "jquery": "../bower_components/jquery/dist/jquery.min",
        "TweenLite": "../bower_components/gsap/src/minified/TweenLite.min",
        "TweenMax": "../bower_components/gsap/src/minified/TweenMax.min",
        "TimelineMax": "../bower_components/gsap/src/minified/TimelineMax.min",
        "d3": "../bower_components/d3/d3.min"
    }
});

define(["jquery", "d3", "scrollControl"], function ($, d3, scrollControl) {
    var maxHeight, innerHeight, mainPageScale, percentScrolled;
    var iPhone = navigator.userAgent.match(/iPhone/i);
    var iPod = navigator.userAgent.match(/iPod/i);
    var iPad = navigator.userAgent.match(/iPad/i);
    var Android = navigator.userAgent.match(/Android/i);
    var chromeiOS = navigator.userAgent.match('CriOS');

    if (is_ie8_or_newer) {
        $("#ieError").removeClass("hidden");
        return
    } else {
        //console.log("is_ie8_or_newer", is_ie8_or_newer);
        $("#ieError").remove()

    }
    //console.log(iPhone, iPod, iPad, Android, chromeiOS);
    $(".page").css({height: "100%"});
    $("#page_8").height(110);

    if ("ontouchstart" in window || navigator.msMaxTouchPoints) {
        $("#rotateAlert img").css("opacity", 1);
    } else {
        $("#alerts").remove();
    }

    var pg7 = $("#page_7")
    pg7.height($(window).innerHeight() - 150);
    //console.log("____", pg7.height());
    $(window).on("resize", function () {
        onResize()
    });

    scrollControl.init();
    onResize();

    $(document).on('scroll', function () {
        setPercentScrolled()
    });


    function onResize(evt) {
        $("#pageWrapper").height(scrollControl.setPageHeight())
        innerHeight = $(window).innerHeight();
        maxHeight = $(document).height();

        scrollControl.setOffstagePosition();
        mainPageScale = scrollControl.setPageScrollScale(maxHeight, innerHeight);
        setPercentScrolled()
    }

    function setPercentScrolled() {
        var top = $(document).scrollTop();
        percentScrolled = scrollControl.getPageScrollScale()(top);
        scrollControl.setPercentScrolled(percentScrolled, top);
        //console.log("top", top, percentScrolled);
    }
});