/**
 * Created by ulrichsinn on 01/19.5/2015.
 */


define(["d3"], function (d3) {
    var owner = {},
        animationScale,
        currentPanel,
        currentPanelHeight,
        nextPanel,
        nextPanelHeight,
        tl;

    function getName() {
        console.log("panel 5");
    }

    function updateAnimation() {
        //console.log("updateAnimation panel 5", tl.time());

    }

    function updateScroll() {
        //console.log("updateScroll panel 5");

    }

    function init(timeLine) {
        tl = timeLine;
        var tOffset = -1.1;

        //console.log("init panel 5", tl.time());
        //#page_5_Exposure
        tl.to("#page_5_Exposure", 0.6, {opacity: 0,onStart:function(){
            console.log(">>>", tl.time())
        }}, 19.3 + tOffset)
        tl.to("#RightHorse", 1.2, {opacity: 0}, 19.3 + tOffset)
        tl.to("#Arrow1", 1.2, {y: "-=25px", scaleX: 2, rotation: -8, "transform-center": "0 50%"}, 19.3 + tOffset)
        tl.to("#Arrow2", 1.1, {
            //y: "-=30px",
            x: "+=30px",
            scaleX: 3,
            scaleY: 1.3,
            rotation: -8,
            "transform-center": "0 50%"
        }, 19.4 + tOffset)
        tl.to("#Arrow3", 1, {
            x: "+=65",
            y: "+=85px",
            scaleX: 1.1,
            scaleY: 1.5,
            rotation: -80,
            "transform-center": "0 50%"
        }, 19.5 + tOffset)


    }

    function reset() {
        //console.log("reset panel 5", tl.time());

    }

    owner.reset = reset;
    owner.updateAnimation = updateAnimation;
    owner.updateScroll = updateScroll;
    owner.getName = getName;
    owner.init = init;

    return owner;
})