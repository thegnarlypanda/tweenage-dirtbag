(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tweenage-dirtbag", [], factory);
	else if(typeof exports === 'object')
		exports["tweenage-dirtbag"] = factory();
	else
		root["tweenage-dirtbag"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

/*
    Tweenage Dirtbag - keyframe animation on scroll

    pass an array of keyframes:
        kf = [
            {
                trigger: ".element-what-triggers-animation",
                duration: 100%, // window height as percentage
                elements: [
                    {
                        selector: '.element-to-animate',
                        // list property values here, can be array
                        translateY: 200
                    }
                ]
            }
        ]
*/

function TweenageDirtbag(kf) {
    this.keyframes = kf;
    this.calculate();
}

TweenageDirtbag.prototype.percenttopixel = function (percent, percentof) {
    return parseFloat(percent) / 100 * percentof;
};

TweenageDirtbag.prototype.calculate = function () {
    this.window = {
        height: window.innerHeight,
        width: window.innerWidth,
        scrollTop: window.scrollTop
    };

    this.calculatePage();
    console.log(this);
};

TweenageDirtbag.prototype.calculatePage = function () {
    var _this = this;

    var _loop = function _loop(i) {
        var _loop2 = function _loop2(j) {
            var that = _this;
            _this.keyframes[i].duration = _this.percenttopixel(_this.keyframes[i].duration, _this.window.height);
            Object.keys(_this.keyframes[i].elements[j]).forEach(function (k) {
                var value = that.keyframes[i].elements[j][k];

                if (k !== "selector") {
                    if (value instanceof Array === false) {
                        var values = void 0;
                        value = values = [0, value];
                        console.log(values);
                    }

                    for (var h = 0; h < value.length; h++) {
                        if (k === "translateY") {
                            value[h] = that.percenttopixel(value[k], that.window.height);
                        } else {
                            value[h] = that.percenttopixel(value[k], that.window.width);
                        }
                    }
                }

                that.keyframes[i].elements[j][k] = value;

                //
                // if (k !== "selector" && value instanceof Array === false) {
                //     // If we haven't been given an array we need to get a position
                //     // to start from.
                //     let values;
                //     value = values = [ 0, value ];
                // }

                //
                // if (key !== "selector") {
                //     console.log(key + ": " + value);
                //
                //     if (value instanceof Array) {
                //         for (var h = 0; h < value.length; h++) {
                //             if (typeof value[h] === "string") {
                //
                //             }
                //         }
                //     } else {
                //         if (typeof value === "string") {
                //
                //         }
                //     }
                //
                //     this.keyframes[i].elements[j][key] = value;
                // }
            });
        };

        for (var j = 0; j < _this.keyframes[i].elements.length; j++) {
            _loop2(j);
        }
    };

    for (var i = 0; i < this.keyframes.length; i++) {
        _loop(i);
    }
};

TweenageDirtbag.prototype.update = function () {
    window.requestAnimationFrame(function () {
        if (this.window.scrollTop > 0) {
            console.log("");
        }
    });
};

exports.default = TweenageDirtbag;

/***/ })
/******/ ]);
});
//# sourceMappingURL=tweenage-dirtbag.js.map