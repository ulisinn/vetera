/**
 * Created by ulrichsinn on 01/19/2015.
 */

define([], function () {
    var owner = {},
        tl;

    function getName() {
        console.log("panel 1");
    }

    function updateAnimation(n) {
        tl.progress(n);
    }

    function init(timeLine, h, pg1, pg2) {
        tl = timeLine;
        tl.to("#Syringe", 1, {x: "-=90"}, 0)
        tl.to("#page_1_copyOver", 1, {opacity: 1}, 0)
        tl.to("#SolidHorse", 1, {opacity: 0}, 0.5)
    }

    function reset(){

    }

    owner.reset = reset;
    owner.updateAnimation = updateAnimation;
    owner.getName = getName;
    owner.init = init;
    return owner;
})