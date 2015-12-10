/**
 * Created by ulrichsinn on 01/19/2015.
 */

define(["require", "d3", "TweenMax", "TimelineMax", "panel1", "panel2", "panel3", "panel4", "panel5", "panel6", "panel7"], function (require, d3) {
    var owner = {},
        pageHeight,
        pageScrollScale,
        scrollDirection,
        offstage,
        timeLine,
        scrollScale,
        percentScrolled,
        currentState,
        allPanels = {
            "panel1": null,
            "panel2": null,
            "panel3": null,
            "panel4": null,
            "panel5": null,
            "panel6": null,
            "panel7": null
        },
        currentPanel,
        states = ["panel1_Animation",
            "panel1_Scroll",
            "panel2_Animation",
            "panel2_Scroll",
            "panel3_Scroll",
            "panel4_Scroll",
            "panel5_Animation",
            "panel5_Scroll",
            "panel6_Animation",
            "panel6_Scroll",
            "panel7_Animation",
            "panel7_Scroll"],
        binnedScale = d3.scale.quantize().domain([0, 1]).range(states);

    function setPercentScrolled(n, top) {
        scrollDirection = (percentScrolled > n) ? -1 : 1;
        //console.log(scrollDirection);
        percentScrolled = n;
        if (currentState !== binnedScale(percentScrolled)) {
            setCurrentState(binnedScale(percentScrolled))
        }
        var action = currentState.split("_")[1];
        switch (action) {
            case"Scroll":
                //currentPanel.updateScroll(n);
                break;
            case"Animation":
                currentPanel.updateAnimation(n);
        }
        updatePanelPosition(n)
    }

    function updatePanelPosition(n) {
        var scroll = (n < 0) ? 0 : n;
        //console.log("updatePanelPosition", scroll, scrollScale(n))
        timeLine.progress(scroll);
    }

    function setCurrentState(str) {
        currentState = str;
        var panelName = currentState.split("_")[0];
        //console.log("setCurrentState", panelName);
        currentPanel = allPanels[panelName];
        for (var i = 1; i < 8; i++) {
            try {
                allPanels["panel" + i].reset();
            } catch (e) {
                //
            }

        }
    }

    function setOffstagePosition() {
        var h = $(window).innerHeight(),
            pg7 = $("#page_7"),
            pg8 = $("#page_8");
        offstage = (h + 160) * -1;
        $(".page").css({height: "100%"});
        pg8.height(110)
        pg7.height($(window).innerHeight() - pg8.height());
        TweenMax.to("#page_8", 0.1, {y: $(window).innerHeight() - 110});
    }

    function init() {

        $(".footnote").on("click", function () {
            tweenScroll(5.67, 1);
        })

        scrollScale = d3.scale.linear().domain([0, 1]).range([0, 20]);
        setOffstagePosition();
        timeLine = new TimelineMax();
        timeLine.set("#page_2", {y: $(window).innerHeight() - 50, autoAlpha: 0})
        timeLine.set("#page_3", {y: $(window).innerHeight() - 50, autoAlpha: 0});
        timeLine.set("#page_4", {y: $(window).innerHeight() - 50, autoAlpha: 0});
        timeLine.set("#page_5", {y: $(window).innerHeight() - 50, autoAlpha: 0});
        timeLine.set("#page_6", {y: $(window).innerHeight() - 50, autoAlpha: 0});
        timeLine.set("#page_7", {y: $(window).innerHeight() - 50, autoAlpha: 0});
        timeLine.set("#page_8", {y: $(window).innerHeight() - 110, autoAlpha: 0});
        timeLine.pause();

        timeLine.to("#header", 3, {y: offstage}, 2);
        timeLine.to("#page_1", 3, {y: offstage}, 2);
        timeLine.to("#page_1", 0.5, {autoAlpha: 0}, 4.5);

        timeLine.to("#page_2", 2.1, {
            y: 0,
            autoAlpha: 1,
            onComplete: function () {
                var top = $(document).scrollTop();
                var percentScrolled = getPageScrollScale()(top);

                //console.log("page_2 top", parseFloat($(document).height() - $(window).innerHeight()) * percentScrolled, top, percentScrolled)
            }
        }, 2);

        timeLine.to("#page_3", 2, {
            y: 0,
            autoAlpha: 1,
            onComplete: function () {
                var top = $(document).scrollTop();

                //console.log("page_3 top", parseFloat($(document).height() - $(window).innerHeight()) * percentScrolled, top, percentScrolled)
            }
        }, 7.7);
        timeLine.to("#page_2", 3, {y: offstage}, 8);
        timeLine.to("#page_2", 0.5, {autoAlpha: 0}, 10);

        timeLine.to("#page_4", 3, {
            y: 0,
            autoAlpha: 1,
            onComplete: function () {
                var top = $(document).scrollTop();
                //console.log("page_4 top", parseFloat($(document).height() - $(window).innerHeight()) * percentScrolled, top, percentScrolled)
            }
        }, 11.7);
        timeLine.to("#page_3", 3, {y: offstage}, 12);
        timeLine.to("#page_3", 0.5, {autoAlpha: 0}, 14);

        timeLine.to("#page_5", 3, {
            y: 0,
            autoAlpha: 1,
            onComplete: function () {
                var top = $(document).scrollTop();
                allPanels["panel6"].clearAnimation();
                //console.log("page_5 top", parseFloat($(document).height() - $(window).innerHeight()) * percentScrolled, top, percentScrolled)
            }
        }, 15.7);
        timeLine.to("#page_4", 3, {y: offstage}, 16);
        timeLine.to("#page_4", 0.5, {autoAlpha: 0}, 18);

        timeLine.to("#page_6", 3, {
            y: 0, autoAlpha: 1,
            onStart: function () {
                allPanels["panel6"].clearAnimation();

            },
            onComplete: function () {
                //var top = $(document).scrollTop();

            }
        }, 19.7);
        timeLine.addCallback(function () {
            if (scrollDirection == 1) {
                allPanels["panel6"].loadAnimation();
                //console.log("SCROLL DN", timeLine.time(), "page_6 top", parseFloat($(document).height() - $(window).innerHeight()) * percentScrolled, top, percentScrolled)
            }

        }, 22.7)
        timeLine.addCallback(function () {
            if (scrollDirection == -1) {
                allPanels["panel6"].loadAnimation();
                //console.log("SCROLL UP", timeLine.time(), "page_6 top", parseFloat($(document).height() - $(window).innerHeight()) * percentScrolled, top, percentScrolled)
            }

        }, 24)
        timeLine.to("#page_5", 3, {y: offstage}, 20);
        timeLine.to("#page_5", 0.5, {autoAlpha: 0}, 22);

        timeLine.to("#page_7", 3, {
            y: 0, autoAlpha: 1,
            onComplete: function () {
                var top = $(document).scrollTop();
                allPanels["panel6"].clearAnimation();
            }
        }, 23.7);
        timeLine.to("#page_8", 1, {autoAlpha: 1}, 25);
        timeLine.to("#page_6", 3, {y: offstage}, 24);
        timeLine.to("#page_6", 0.5, {autoAlpha: 0}, 26);

        if (allPanels.panel1 == null) {
            allPanels.panel1 = require("panel1");
            allPanels.panel1.init(timeLine, $("#header"), $("#page_1"), $("#page_2"))
        }

        if (allPanels.panel2 == null) {
            allPanels.panel2 = require("panel2");
            allPanels.panel2.init(timeLine)
        }

        if (allPanels.panel3 == null) {
            allPanels.panel3 = require("panel3");
            allPanels.panel3.init(timeLine)
        }

        if (allPanels.panel4 == null) {
            allPanels.panel4 = require("panel4");
            allPanels.panel4.init(timeLine)
        }

        if (allPanels.panel5 == null) {
            allPanels.panel5 = require("panel5");
            allPanels.panel5.init(timeLine)
        }

        if (allPanels.panel6 == null) {
            allPanels.panel6 = require("panel6");
            allPanels.panel6.init(timeLine)
        }
        if (allPanels.panel7 == null) {
            allPanels.panel7 = require("panel7");
            allPanels.panel7.init(timeLine)
        }
        setPercentScrolled(0);
        $("#pageWrapper").removeClass("hidden").addClass("visible");

        $(".upButton").on("click", function () {
            $(document).scrollTop(0);

        })


        d3.selectAll((".upButton")).on("mouseenter", function () {
            var circle = d3.select(this).select(".downButtonCircle")
            circle.transition()
                .delay(0)
                .duration(100)
                .style("fill", "black")
        })
        d3.selectAll((".upButton")).on("mouseleave", function () {
            var circle = d3.select(this).select(".downButtonCircle")
            circle.transition()
                .delay(0)
                .duration(100)
                .style("fill", "#A7A9AC")
        })
        $(".downButton").on("click", function () {
            var id = this.parentNode.id,
                index = parseInt(id.split("_")[1]);
            tweenScroll(index);
        })

        d3.selectAll((".downButton")).on("mouseenter", function () {
            var circle = d3.select(this).select(".downButtonCircle")
            circle.transition()
                .delay(0)
                .duration(100)
                .style("fill", "black")
        })
        d3.selectAll((".downButton")).on("mouseleave", function () {
            var circle = d3.select(this).select(".downButtonCircle")
            circle.transition()
                .delay(0)
                .duration(100)
                .style("fill", "#A7A9AC")
        })
    }

    function tweenScroll(index, t) {
        var ease = Linear.easeNone
        var time = (t) ? t : 0.5,
            i = index,
            dummy = {index: 0},
            scrollPos,
            scrollTop;
        //scrollTop = [0, 0.207715133531157, 0.295464179737177, 0.465451462484103, 0.601102161933023, 0.724883425180161, 1];
        scrollTop = [0, 0.207715133531157, 0.305, 0.465451462484103, 0.568765578635015, 0.705807545570157, 1];
        dummy = {index: scrollTop[index - 1]};
        switch (index) {
            case 1:
                time = 1.2;
                break;
            case 2:
                time = 0.7;
                break;
            case 3:
                time = 0.85;
                break;
            case 4:
                time = 1.0;
                ease = Quint.easeOut;

                break;
            case 5:
                time = 1.0;
                ease = Quint.easeIn;
                break;
            case 6:
                time = 2.5;
                ease = Quint.easeOut;
                break;
        }

        TweenMax.to(dummy, time, {
            ease: Linear.easeNone,
            index: scrollTop[index], onComplete: function () {
                console.log("TWEEN SCROLL", dummy.index, scrollPos, index, scrollTop[index])

            }, onUpdate: function () {
                scrollPos = parseFloat($(document).height() - $(window).innerHeight()) * dummy.index
                $(document).scrollTop(scrollPos)
            }
        })
    }

    function setPageHeight() {
        pageHeight = $(window).innerHeight() * 6 * 0.75;
        return pageHeight
    }

    function setPageScrollScale(maxHeight, innerHeight) {
        pageScrollScale = d3.scale.linear().domain([0, maxHeight - innerHeight]).range([0, 1]);
        return pageScrollScale

    }

    function getPageScrollScale() {
        return pageScrollScale
    }

    owner.getPageScrollScale = getPageScrollScale;
    owner.setPageScrollScale = setPageScrollScale;
    owner.setPageHeight = setPageHeight;
    owner.setOffstagePosition = setOffstagePosition;
    owner.setPercentScrolled = setPercentScrolled;
    owner.init = init;

    return owner
})