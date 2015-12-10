/**
 * Created by ulrichsinn on 01/19/2015.
 */


define(["TweenMax", "d3"], function (TweenMax, d3) {
    var owner = {},
        defaultCallout,
        topCallout,
        middleCallout,
        bottomCallout,
        topBtn,
        topBtnClicked = false,
        middleBtn,
        middleBtnClicked = false,
        bottomBtn,
        bottomBtnClicked = false,
        btnOverT = 0.2,
        offstage = 1000,
        onstage = 0,
        tl;

    function getName() {
        console.log("panel 4");
    }

    function updateAnimation() {
        console.log("updateAnimation panel 4");

    }

    function onButtonClick(id, evt) {
        switch (id) {
            case"panel4TopButton":
                middleBtnClicked = false;
                bottomBtnClicked = false;
                if (topBtnClicked == false) {
                    topBtnClicked = true;

                } else {
                    topBtnClicked = false;
                }

                break;
            case "panel4MiddleButton":
                topBtnClicked = false;
                bottomBtnClicked = false;
                if (middleBtnClicked == false) {
                    middleBtnClicked = true;

                } else {
                    middleBtnClicked = false;
                }
                break;
            case "panel4BottomButton":
                middleBtnClicked = false;
                topBtnClicked = false;
                if (bottomBtnClicked == false) {
                    bottomBtnClicked = true;

                } else {
                    bottomBtnClicked = false;
                }
                break;
        }

        console.log("topBtnClicked", topBtnClicked, "middleBtnClicked", middleBtnClicked, "bottomBtnClicked", bottomBtnClicked);
        tweenTopInset(topBtnClicked);
        tweenMiddleInset(middleBtnClicked);
        tweenBottomInset(bottomBtnClicked);
        if (topBtnClicked || middleBtnClicked || bottomBtnClicked) {
            d3.select("#page4_DefaultCallout").transition()
                .duration(btnOverT * 2 * 1000)
                .attr("transform", function (d) {
                    var x = offstage
                    var t = "translate(" + x + " 0)"
                    return t;
                });

        } else {
            d3.select("#page4_DefaultCallout").transition()
                .duration(btnOverT * 2 * 1000)
                .attr("transform", function (d) {
                    var x = onstage;
                    var t = "translate(" + x + " 0)"
                    return t;
                });
        }

    }


    function tweenTopInset(b) {
        if (b) {
            TweenMax.to("#panel4TopButtonBlack", btnOverT, {opacity: 1})
            TweenMax.to("#panel4TopButtonGrey", btnOverT, {opacity: 0})

        } else {
            TweenMax.to("#panel4TopButtonBlack", btnOverT, {opacity: 0})
            TweenMax.to("#panel4TopButtonGrey", btnOverT, {opacity: 1})
        }

        d3.select("#page4_TopCallout").transition()
            .duration(btnOverT * 2 * 1000)
            .attr("transform", function (d) {
                var x = (b) ? onstage : offstage
                var t = "translate(" + x + " 0)";
                if (b) {
                    TweenMax.fromTo("#page4_TopCallout_1", 1.5, {opacity: 0}, {opacity: 1, delay: 0.5});
                    TweenMax.fromTo("#page4_TopCallout_2", 1.2, {opacity: 0}, {opacity: 1, delay: 1})

                } else {
                    TweenMax.to("#page4_TopCallout_1", 0.5, {opacity: 0});
                    TweenMax.to("#page4_TopCallout_2", 0.5, {opacity: 0})
                }
                return t;
            });
    }

    function tweenMiddleInset(b) {
        if (b) {
            TweenMax.to("#panel4MiddleButtonBlack", btnOverT, {opacity: 1})
            TweenMax.to("#panel4MiddleButtonGrey", btnOverT, {opacity: 0})

        } else {
            TweenMax.to("#panel4MiddleButtonBlack", btnOverT, {opacity: 0})
            TweenMax.to("#panel4MiddleButtonGrey", btnOverT, {opacity: 1})
        }

        d3.select("#page4_MiddleCallout").transition()
            .duration(btnOverT * 2 * 1000)
            .attr("transform", function (d) {
                var x = (b) ? onstage : offstage
                var t = "translate(" + x + " 0)";
                if (b) {
                    TweenMax.fromTo("#page4_MiddleCallout_1", 1.5, {opacity: 0}, {opacity: 1, delay: 0.5});
                    TweenMax.fromTo("#page4_MiddleCallout_2", 1.2, {opacity: 0}, {opacity: 1, delay: 1})

                } else {
                    TweenMax.to("#page4_MiddleCallout_1", 0.5, {opacity: 0});
                    TweenMax.to("#page4_MiddleCallout_2", 0.5, {opacity: 0})
                }
                return t;
            });
    }

    function tweenBottomInset(b) {
        if (b) {
            TweenMax.to("#panel4BottomButtonBlack", btnOverT, {opacity: 1});
            TweenMax.to("#panel4BottomButtonGrey", btnOverT, {opacity: 0})

        } else {
            TweenMax.to("#panel4BottomButtonBlack", btnOverT, {opacity: 0});
            TweenMax.to("#panel4BottomButtonGrey", btnOverT, {opacity: 1})
        }


        d3.select("#page4_BottomCallout").transition()
            .duration(btnOverT * 2 * 1000)
            .attr("transform", function (d) {
                var x = (b) ? onstage : offstage;
                var t = "translate(" + x + " 0)";
                if (b) {
                    TweenMax.fromTo("#page4_BottomCallout_1", 1.5, {opacity: 0}, {opacity: 1, delay: 0.5});
                    TweenMax.fromTo("#page4_BottomCallout_2", 1.2, {opacity: 0}, {opacity: 1, delay: 1})

                } else {
                    TweenMax.to("#page4_BottomCallout_1", 0.5, {opacity: 0});
                    TweenMax.to("#page4_BottomCallout_2", 0.5, {opacity: 0})
                }
                return t;
            });
    }

    function resetCallouts() {
        tweenTopInset(false);
        tweenMiddleInset(false);
        tweenBottomInset(false);
        d3.select("#page4_DefaultCallout").transition()
            .duration(btnOverT * 2 * 1000)
            .attr("transform", function (d) {
                var x = onstage;
                var t = "translate(" + x + " 0)"
                return t;
            });
    }

    function init(timeLine) {
        //console.log("init panel 4");
        tl = timeLine;
        tl.to("#Top_Horse_Group", 2, {opacity: 1}, 13.5)
        tl.to("#Middle_Horse_Group", 2.5, {opacity: 1}, 13)
        tl.to("#Bottom_Horse_Group", 3, {opacity: 1}, 12.5);
        tl.to("#panel4TopButton", 0.5, {opacity: 1}, 14.3);
        tl.to("#panel4MiddleButton", 0.5, {opacity: 1}, 14.5);
        tl.to("#panel4BottomButton", 0.5, {opacity: 1}, 14.7);


        d3.select("#page4_BottomCallout").transition()
            .duration(0)
            .attr("transform", function (d) {
                //var t = "translate(451.0338 35.7384)"
                var t = "translate(800 0)"
                return t;
            });
        d3.select("#page4_MiddleCallout").transition()
            .duration(0)
            .attr("transform", function (d) {
                //var t = "translate(451.0338 35.7384)"
                var t = "translate(800 0)"
                return t;
            });
        d3.select("#page4_TopCallout").transition()
            .duration(0)
            .attr("transform", function (d) {
                //var t = "translate(451.0338 35.7384)"
                var t = "translate(800 0)"
                return t;
            });

        topBtn = d3.select("#panel4TopButton");
        middleBtn = d3.select("#panel4MiddleButton");
        bottomBtn = d3.select("#panel4BottomButton");

        topBtn.on("click", function () {
            var evt = d3.event;
            console.log("touchstart");
            onButtonClick(this.id, evt)
            d3.event.stopPropagation();

        });

        middleBtn.on("click", function () {
            var evt = d3.event;
            console.log("touchstart");
            onButtonClick(this.id, evt)
            d3.event.stopPropagation();

        });


        bottomBtn.on("click", function () {
            var evt = d3.event;
            console.log("touchstart");
            onButtonClick(this.id, evt)
            d3.event.stopPropagation();

        });


        resetCallouts();
    }

    function reset() {
        //console.log("reset panel 4");
        resetCallouts()
    }

    owner.reset = reset;
    owner.resetCallouts = resetCallouts;
    owner.updateAnimation = updateAnimation;
    owner.getName = getName;
    owner.init = init;

    return owner;
})