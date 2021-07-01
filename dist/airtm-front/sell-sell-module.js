(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sell-sell-module"],{

/***/ "+BEO":
/*!******************************************************!*\
  !*** ./src/app/client/crypto/sell/sell.component.ts ***!
  \******************************************************/
/*! exports provided: SellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellComponent", function() { return SellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SellComponent {
    constructor() { }
    ngOnInit() {
    }
}
SellComponent.ɵfac = function SellComponent_Factory(t) { return new (t || SellComponent)(); };
SellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SellComponent, selectors: [["app-sell"]], decls: 2, vars: 0, template: function SellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sell works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "6J/c":
/*!***************************************************!*\
  !*** ./src/app/client/crypto/sell/sell.module.ts ***!
  \***************************************************/
/*! exports provided: SellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellModule", function() { return SellModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sell_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sell-routing.module */ "wpq0");
/* harmony import */ var _sell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sell.component */ "+BEO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SellModule {
}
SellModule.ɵfac = function SellModule_Factory(t) { return new (t || SellModule)(); };
SellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SellModule });
SellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _sell_routing_module__WEBPACK_IMPORTED_MODULE_1__["SellRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SellModule, { declarations: [_sell_component__WEBPACK_IMPORTED_MODULE_2__["SellComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _sell_routing_module__WEBPACK_IMPORTED_MODULE_1__["SellRoutingModule"]] }); })();


/***/ }),

/***/ "wpq0":
/*!***********************************************************!*\
  !*** ./src/app/client/crypto/sell/sell-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SellRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellRoutingModule", function() { return SellRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sell.component */ "+BEO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _sell_component__WEBPACK_IMPORTED_MODULE_1__["SellComponent"] }
];
class SellRoutingModule {
}
SellRoutingModule.ɵfac = function SellRoutingModule_Factory(t) { return new (t || SellRoutingModule)(); };
SellRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SellRoutingModule });
SellRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SellRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=sell-sell-module.js.map