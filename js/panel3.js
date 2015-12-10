/**
 * Created by ulrichsinn on 01/19/2015.
 */


define(["TweenMax", "d3"], function (TweenMax, d3) {
    var owner = {},
        leftSideBtn,
        leftBtnClicked = false,
        rightSideBtn,
        rightBtnClicked = false,
        btnOverT = 0.2,
        tl;

    function getName() {
        console.log("panel 3");
    }

    function updateAnimation() {
        console.log("updateAnimation panel 3");

    }

    function onButtonClick(id) {
        switch (id) {
            case"panel3LeftSideButton":
                rightBtnClicked = false;
                if (leftBtnClicked == false) {
                    leftBtnClicked = true;

                } else {
                    leftBtnClicked = false;

                }

                break;
            case "panel3RightSideButton":
                leftBtnClicked = false;
                if (rightBtnClicked == false) {
                    rightBtnClicked = true;

                } else {
                    rightBtnClicked = false;
                }
                break;
        }

        //console.log("leftBtnClicked", leftBtnClicked, "rightBtnClicked", rightBtnClicked);
        tweenLeftPopup(leftBtnClicked);
        tweenRightPopup(rightBtnClicked);

    }

    function tweenLeftPopup(b) {
        if (b) {
            TweenMax.to("#panel3LeftSidePopUp", btnOverT, {opacity: 1, delay: 0.2})
            TweenMax.to("#panel3LeftSideButtonBlack", btnOverT, {opacity: 1})
            TweenMax.to("#panel3LeftSideButtonGrey", btnOverT, {opacity: 0})

        } else {
            TweenMax.to("#panel3LeftSidePopUp", btnOverT, {opacity: 0})
            TweenMax.to("#panel3LeftSideButtonBlack", btnOverT, {opacity: 0})
            TweenMax.to("#panel3LeftSideButtonGrey", btnOverT, {opacity: 1})
        }
    }

    function tweenRightPopup(b) {
        if (b) {
            TweenMax.to("#panel3RightSidePopUp", btnOverT, {opacity: 1, delay: 0.2});
            TweenMax.to("#panel3RightSideButtonBlack", btnOverT, {opacity: 1});
            TweenMax.to("#panel3RightSideButtonGrey", btnOverT, {opacity: 0});
            d3.select("#panel3RightSideText").transition()
                .duration(500)
                .attr("transform", function (d) {
                    //var t = "translate(451.0338 35.7384)"
                    var t = "translate(370 35.7384)"
                    return t;
                });

        } else {
            TweenMax.to("#panel3RightSidePopUp", btnOverT, {opacity: 0});
            TweenMax.to("#panel3RightSideButtonBlack", btnOverT, {opacity: 0});
            TweenMax.to("#panel3RightSideButtonGrey", btnOverT, {opacity: 1});
            d3.select("#panel3RightSideText").transition()
                .duration(500)
                .attr("transform", function (d) {
                    var t = "translate(451.0338 35.7384)"
                    return t;
                });
        }
    }

    function init(timeLine) {
        //console.log("init panel 3");
        tl = timeLine;
        leftSideBtn = d3.select("#panel3LeftSideButton");
        rightSideBtn = d3.select("#panel3RightSideButton");

        leftSideBtn.on("touchstart", function () {
            onButtonClick(this.id)
            d3.event.stopPropagation();

        });
        leftSideBtn.on("touchend", function () {
            onButtonClick(this.id)
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
            onButtonClick(this.id)
            d3.event.stopPropagation();

        })
        rightSideBtn.on("touchend", function () {
            onButtonClick(this.id)
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

    }

    owner.reset = reset;
    owner.updateAnimation = updateAnimation;
    owner.getName = getName;
    owner.init = init;

    return owner;
})