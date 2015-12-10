/**
 * Created by ulrichsinn on 01/19/2015.
 */


define([], function () {
    var owner = {},
        tl;

    function getName() {
        console.log("panel 2");
    }

    function updateAnimation(n) {
        //tl.progress(n);
        //console.log("panel 2");

    }

    function init(timeLine) {
        tl = timeLine;
        tl.to("#AntibodyG", 0.1, {x: "-500", y: "127"}, 0)
        tl.to("#InnerBigRightHandG", 0.1, {x: "250", y: "253", rotation: -45, transformOrigin: "50% 50%"}, 0)
        tl.to("#InnerBigRightHandG", 2, {x: "0", y: "0.5", rotation: 0, transformOrigin: "50% 50%"}, 3)
        tl.to("#AntibodyG", 2, {x: "43", y: "127"}, 3)
        tl.to("#DirectProtectionG", 1, {opacity: 1}, 5)
        tl.to("#AntigenLinesClipRect", 1, {x: "-=70", y: "-=70"}, 5.4)
        tl.to("#DirectProtectionLine", 1, {attr: {y1: 45}}, 5.4)
        tl.to("#DirectProtectionText", 1, {opacity: 1}, 5.7)
        tl.to("#AntigenReceptorsText", 1, {opacity: 1}, 5.8)
        tl.to("#AntigenG", 1, {opacity: 1}, 5)
        tl.to("#InnerAntibody", 1, {opacity: 0.5}, 5)
        tl.to("#InnerBigRightHandG", 1, {opacity: 0.4}, 5)
        tl.to("#page_2_copy_frame_2", 1, {opacity: 1}, 5)
        tl.to("#bgAntibody7", 1, {opacity: 0}, 4.5)
        tl.to("#bgAntibody8", 1, {opacity: 0}, 4.5)
        tl.to("#bgAntibody9", 1, {opacity: 0}, 4.5)
        tl.to("#bgAntibody10", 1, {opacity: 0}, 4.5)
        tl.to("#bgAntibody11", 1, {opacity: 0}, 4.5)
        tl.to("#bgAntibody13", 1, {opacity: 0}, 4.5)
        tl.to("#bgAntibody12", 1, {opacity: 0}, 4.5)

    }

    function reset() {

    }

    owner.reset = reset;
    owner.updateAnimation = updateAnimation;
    owner.getName = getName;
    owner.init = init;
    return owner;
})