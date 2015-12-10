/**
 * Created by ulrichsinn on 01/19/2015.
 */


define(["d3"], function (d3) {
    var owner = {},
        leftSideBtn,
        leftBtnClicked = false,
        rightSideBtn,
        rightBtnClicked = false,
        btnOverT = 0.2,
        tl,
        isAnimating = true;


    function getName() {
        console.log("panel 6");
    }

    function updateAnimation() {
        //console.log("updateAnimation panel 6", tl.time());

    }

    function onButtonClick(id, b) {
        switch (id) {
            case"panel6LeftButton":
                rightBtnClicked = false;
                if (leftBtnClicked == false) {
                    leftBtnClicked = true;

                } else {
                    leftBtnClicked = false;

                }

                break;
            case "panel6RightButton":
                leftBtnClicked = false;
                if (rightBtnClicked == false) {
                    rightBtnClicked = true;

                } else {
                    rightBtnClicked = false;
                }
                break;
        }

        if (rightBtnClicked == true && d3.select("#panel6RightPopUp").style("opacity") > 0) {
            rightBtnClicked = false;
        }
        if (leftBtnClicked == true && d3.select("#panel6LeftPopUp").style("opacity") > 0) {
            leftBtnClicked = false;
        }

        console.log("leftBtnClicked", leftBtnClicked, "rightBtnClicked", rightBtnClicked, d3.select("#panel6RightPopUp").style("opacity"));
        tweenLeftPopup(leftBtnClicked);
        tweenRightPopup(rightBtnClicked);

    }

    function tweenLeftPopup(b) {
        if (b) {
            TweenMax.to("#panel6LeftPopUp", btnOverT, {opacity: 1, delay: 0.2})
            TweenMax.to("#panel6LeftButtonBlack", btnOverT, {opacity: 1})
            TweenMax.to("#panel6LeftButtonGrey", btnOverT, {opacity: 0})

        } else {
            TweenMax.to("#panel6LeftPopUp", btnOverT, {opacity: 0})
            TweenMax.to("#panel6LeftButtonBlack", btnOverT, {opacity: 0})
            TweenMax.to("#panel6LeftButtonGrey", btnOverT, {opacity: 1})
        }
    }

    function tweenRightPopup(b) {
        if (b) {
            TweenMax.to("#panel6RightPopUp", btnOverT, {opacity: 1, delay: 0.2});
            TweenMax.to("#panel6RightButtonBlack", btnOverT, {opacity: 1});
            TweenMax.to("#panel6RightButtonGrey", btnOverT, {opacity: 0});
            d3.select("#panel3RightSideText").transition()
                .duration(500)
                .attr("transform", function (d) {
                    //var t = "translate(451.0338 35.7384)"
                    var t = "translate(370 35.7384)"
                    return t;
                });

        } else {
            TweenMax.to("#panel6RightPopUp", btnOverT, {opacity: 0});
            TweenMax.to("#panel6RightButtonBlack", btnOverT, {opacity: 0});
            TweenMax.to("#panel6RightButtonGrey", btnOverT, {opacity: 1});
            d3.select("#panel3RightSideText").transition()
                .duration(500)
                .attr("transform", function (d) {
                    var t = "translate(451.0338 35.7384)"
                    return t;
                });
        }
    }

    function init(timeLine) {
        var tOffset = 0.75
        //console.log("init panel 6");

        var animate = d3.select("#RightPanelCladeAnimation").append("animate");
        animate.attr("begin", "0s")
            .attr("end", "1s")

        try {
            animate[0][0].beginElement()
        } catch (e) {
            isAnimating = false
        }

        tl = timeLine;
        tl.to("#rightWord_1", 1, {attr: {x: 50}}, 22 + tOffset);
        tl.to("#rightWord_1", 0.3, {opacity: 0}, 22.8 + tOffset);
        tl.to("#rightWord_2", 1, {transform: "scale(0)"}, 22 + tOffset);
        tl.to("#rightWord_3", 1, {transform: "scale(0)"}, 22.3 + tOffset);
        tl.to("#rightWord_3_text", 1, {attr: {x: -15, y: 15}}, 22.3 + tOffset);

        tl.to("#rightWord_4", 1, {transform: "scale(0)"}, 22 + tOffset);
        tl.to("#rightWord_4_text", 1, {attr: {x: -10, y: 5}}, 22.3 + tOffset);

        tl.to("#rightWord_5_text", 1, {attr: {x: -40, y: 5}}, 22.3 + tOffset);
        tl.to("#rightWord_5", 0.2, {transform: "scale(0)"}, 22.8 + tOffset);

        tl.to("#rightWord_6_text", 0.6, {attr: {x: -37, y: 0}}, 22.3 + tOffset);
        tl.to("#rightWord_6", 0.1, {transform: "scale(0)"}, 22.9 + tOffset);

        tl.to("#rightWord_7_text", 0.5, {attr: {x: 35, y: 5}}, 22.5 + tOffset);
        tl.to("#rightWord_7", 0.2, {transform: "scale(0)"}, 22.9 + tOffset);

        tl.to("#rightWord_8_text", 0.7, {attr: {x: 60, y: 5}}, 22.2 + tOffset);
        tl.to("#rightWord_8", 0.3, {transform: "scale(0)"}, 22.8 + tOffset);


        leftSideBtn = d3.select("#panel6LeftButton");
        rightSideBtn = d3.select("#panel6RightButton");

        leftSideBtn.on("touchstart", function () {
            onButtonClick(this.id, true)
            d3.event.stopPropagation();

        });
        leftSideBtn.on("touchend", function () {
            onButtonClick(this.id, false)
            d3.event.stopPropagation();

        });
        leftSideBtn.on("mouseenter", function () {
            onButtonClick(this.id)
            d3.event.stopPropagation();

        });
        leftSideBtn.on("mouseleave", function () {
            onButtonClick(this.id)
            d3.event.stopPropagation();

        });

        rightSideBtn.on("touchstart", function () {
            onButtonClick(this.id, true)
            d3.event.stopPropagation();

        })
        rightSideBtn.on("touchend", function () {
            onButtonClick(this.id, false)
            d3.event.stopPropagation();

        })
        rightSideBtn.on("mouseenter", function () {
            onButtonClick(this.id)
            d3.event.stopPropagation();

        })
        rightSideBtn.on("mouseleave", function () {
            onButtonClick(this.id)
            d3.event.stopPropagation();

        })
    }

    function reset() {
        leftBtnClicked = false;
        rightBtnClicked = false;
        tweenLeftPopup(leftBtnClicked);
        tweenRightPopup(rightBtnClicked);
        //console.log("reset 6")

    }

    function loadAnimation() {
        var rightParent = d3.select("#RightPanelCladeAnimation").node();
        var leftParent = d3.select("#CladeAnimation").node();

        d3.select("#RightPanelCladeAnimation").selectAll("*").remove();
        d3.select("#CladeAnimation").selectAll("*").remove();


        console.log("animate.beginElement", isAnimating);
        if (isAnimating) {
            d3.html("images/RightPanelAnimation.svg", loadRightAnimationSVG);
            d3.html("images/LeftPanelAnimation.svg", loadLeftAnimationSVG);

        } else {
            isAnimating = false;
            d3.html("images/RightPanelStatic.svg", loadRightAnimationSVG);
            d3.html("images/LeftPanelStatic.svg", loadLeftAnimationSVG);

        }


        function loadRightAnimationSVG(svgData) {
            console.log(rightParent, svgData);
            d3.select("#RightPanelCladeAnimation").selectAll("*").remove();
            rightParent.appendChild(svgData);
            var svg = d3.select("#RightPanelCladeAnimation").selectAll("svg")[0][0];
            if (isAnimating) {
                svg.pauseAnimations();
                restartAnimation(svg);
            }
        }

        function loadLeftAnimationSVG(svgData) {
            d3.select("#CladeAnimation").selectAll("*").remove();
            leftParent.appendChild(svgData);
            var svg = d3.select("#CladeAnimation").selectAll("svg")[0][0];
            console.log(leftParent, svg);
            if (isAnimating) {
                svg.pauseAnimations();
                restartAnimation(svg);
            }
        }

        function restartAnimation(svg) {

            var animate = d3.select(svg).selectAll("animate")
            var animateTransform = d3.select(svg).selectAll("animateTransform")
            animate.each(function (d, i) {
                //console.log(this)
                try {
                    this.beginElement();
                } catch (e) {
                    //
                }
            })
            animateTransform.each(function (d, i) {
                //console.log(this)
                try {
                    this.beginElement();
                } catch (e) {
                    //
                }
            })
            svg.setCurrentTime(0)
            svg.unpauseAnimations();

        }
    }


    function clearAnimation() {
        if (isAnimating) {
            d3.select("#CladeAnimation").selectAll("*").remove();
            d3.select("#RightPanelCladeAnimation").selectAll("*").remove();

        }
    }

    owner.clearAnimation = clearAnimation;
    owner.loadAnimation = loadAnimation;
    owner.reset = reset;
    owner.updateAnimation = updateAnimation;
    owner.getName = getName;
    owner.init = init;

    return owner;
})