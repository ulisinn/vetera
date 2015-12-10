({
    appDir: ".",
    baseURL: "js",
    mainConfigFile: "js/app.js",
    fileExclusionRegExp: /^.idea|.git|.psd|build.js/,
    removeCombined: true,
    dir: "build",
    "paths": {
        "app": "app",
        "jquery": "../bower_components/jquery/dist/jquery.min",
        "TweenLite": "../bower_components/gsap/src/minified/TweenLite.min",
        "TweenMax": "../bower_components/gsap/src/minified/TweenMax.min",
        "TimelineMax": "../bower_components/gsap/src/minified/TimelineMax.min",
        "d3": "../bower_components/d3/d3.min"
    },
    modules: [
        {name: "app"}
    ]

})