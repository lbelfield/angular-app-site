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
    this.template = require("../../app/shared/parent.html");
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ParentComponent;
//# sourceMappingURL=parent.component.js.map