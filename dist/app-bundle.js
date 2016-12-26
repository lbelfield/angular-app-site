/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// tslint:disable-next-line no-reference (referencing the webpack runtime without export)
	/// <reference path="../node_modules/awesome-typescript-loader/dist/runtime.d.ts" />
	"use strict";

	var parent_component_1 = __webpack_require__(1);
	angular.module("myapp", ["ngRoute"]).config(configure);
	configure.$inject = ["$routeProvider"];
	angular.module("myapp").component("parentComponent", new parent_component_1.default());
	function configure($routeProvider) {
	    $routeProvider.when("/home", {
	        template: "<parent-component></parent-component>"
	    }).otherwise({
	        redirectTo: "/home"
	    });
	}
	// angular.element(document).ready(() => {
	//     angular.bootstrap(document.querySelector("#applicationHost"), ["myapp"]);
	// });
	//# sourceMappingURL=app.module.js.map

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ParentController = function () {
	    function ParentController() {
	        _classCallCheck(this, ParentController);

	        this.childVisible = true;
	        this.childSavingIndicator = "start";
	    }

	    _createClass(ParentController, [{
	        key: "showChild",
	        value: function showChild() {
	            this.childVisible = true;
	            this.childSavingIndicator = "hello";
	        }
	    }, {
	        key: "hideChild",
	        value: function hideChild() {
	            this.childVisible = false;
	            this.childSavingIndicator = "world";
	        }
	    }]);

	    return ParentController;
	}();

	var ParentComponent = function ParentComponent() {
	    _classCallCheck(this, ParentComponent);

	    this.controller = ParentController;
	    this.template = __webpack_require__(2);
	};

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ParentComponent;
	//# sourceMappingURL=parent.component.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = "<div>Parent component</div>\r\n<div ng-show=\"$ctrl.childVisible\">{{$ctrl.childSavingIndicator}}</div>\r\n<div>\r\n    <button ng-click=\"$ctrl.showChild()\">Show</button>\r\n    <button ng-click=\"$ctrl.hideChild()\">Hide</button>\r\n</div>";

/***/ }
/******/ ]);