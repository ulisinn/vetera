/**
 * Created by ulrichsinn on 01/22/2015.
 */


/**
 * Created by ulrichsinn on 01/19/2015.
 */


define(["TweenMax", "d3"], function (TweenMax, d3) {
    var owner = {},

        offstage = -1000,
        onstage = 35,
        tl;

    function getName() {
        console.log("panel 7");
    }

    function updateAnimation() {
        //console.log("updateAnimation panel 7", tl.time());
    }

    function init(timeLine) {
        //console.log("init panel 7");
        tl = timeLine;

        tl.to("#horse_x5F_4", 0.1, {xPercent: -800}, 0);
        tl.to("#horse_x5F_3", 0.1, {xPercent: -600}, 0);
        tl.to("#horse_x5F_2", 0.1, {xPercent: -400}, 0);
        tl.to("#horse_x5F_1", 0.1, {xPercent: -100}, 0);
        tl.to("#svg_page_7", 0.1, {left: offstage}, 0);
        tl.to("#svg_page_7", 8, {left: onstage}, 25);
        tl.to("#horse_x5F_4", 3, {opacity: 1}, 25);
        tl.to("#horse_x5F_4", 3, {xPercent: 0}, 25);

        tl.to("#horse_x5F_3", 2.5, {opacity: 1}, 27);
        tl.to("#horse_x5F_3", 2.5, {xPercent: 0}, 27);
        tl.to("#horse_x5F_2", 2, {opacity: 1}, 28.5);
        tl.to("#horse_x5F_2", 2, {xPercent: 0}, 28.5);

        tl.to("#horse_x5F_1", 0.5, {opacity: 1}, 30);
        tl.to("#horse_x5F_1", 0.5, {xPercent: 0}, 30);

    }

    function reset() {

    }

    owner.reset = reset;
    owner.updateAnimation = updateAnimation;
    owner.getName = getName;
    owner.init = init;

    return owner;
})