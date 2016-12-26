"use strict";
class ParentController {
    constructor() {
        this.childVisible = true;
        this.childSavingIndicator = "start";
    }
    showChild() {
        this.childVisible = true;
        this.childSavingIndicator = "hello";
    }
    hideChild() {
        this.childVisible = false;
        this.childSavingIndicator = "world";
    }
}
class ParentComponent {
    constructor() {
        this.controller = ParentController;
        this.template = require("../../app/shared/parent.html");
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ParentComponent;
//# sourceMappingURL=parent.component.js.map