// tslint:disable-next-line no-reference (referencing the webpack runtime without export)
/// <reference path="../node_modules/awesome-typescript-loader/dist/runtime.d.ts" />

import ParentComponent from "./shared/parent.component"; 
import "jquery";
import "angular";
import "angular-route";

angular.module("myapp", [
    "ngRoute"
]).config(configure);
configure.$inject = ["$routeProvider"];

angular.module("myapp")
    .component("parentComponent", new ParentComponent());

function configure($routeProvider) {
        $routeProvider.
            when("/home", {
                template: "<parent-component></parent-component>"
            }).
            otherwise({
                redirectTo: "/home"
            });
}

angular.element(document).ready(() => {
    angular.bootstrap(document.querySelector("#applicationHost"), ["myapp"]);
});
