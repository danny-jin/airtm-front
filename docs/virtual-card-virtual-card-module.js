(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["virtual-card-virtual-card-module"],{

/***/ "SzwQ":
/*!****************************************************************!*\
  !*** ./src/app/landing/virtual-card/virtual-card.component.ts ***!
  \****************************************************************/
/*! exports provided: VirtualCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualCardComponent", function() { return VirtualCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class VirtualCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
VirtualCardComponent.ɵfac = function VirtualCardComponent_Factory(t) { return new (t || VirtualCardComponent)(); };
VirtualCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VirtualCardComponent, selectors: [["app-virtual-card"]], decls: 2, vars: 0, template: function VirtualCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "virtual-card works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXJ0dWFsLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "hRM3":
/*!*********************************************************************!*\
  !*** ./src/app/landing/virtual-card/virtual-card-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: VirtualCardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualCardRoutingModule", function() { return VirtualCardRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _virtual_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virtual-card.component */ "SzwQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _virtual_card_component__WEBPACK_IMPORTED_MODULE_1__["VirtualCardComponent"] }
];
class VirtualCardRoutingModule {
}
VirtualCardRoutingModule.ɵfac = function VirtualCardRoutingModule_Factory(t) { return new (t || VirtualCardRoutingModule)(); };
VirtualCardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: VirtualCardRoutingModule });
VirtualCardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VirtualCardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xliU":
/*!*************************************************************!*\
  !*** ./src/app/landing/virtual-card/virtual-card.module.ts ***!
  \*************************************************************/
/*! exports provided: VirtualCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualCardModule", function() { return VirtualCardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _virtual_card_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virtual-card-routing.module */ "hRM3");
/* harmony import */ var _virtual_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtual-card.component */ "SzwQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class VirtualCardModule {
}
VirtualCardModule.ɵfac = function VirtualCardModule_Factory(t) { return new (t || VirtualCardModule)(); };
VirtualCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: VirtualCardModule });
VirtualCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _virtual_card_routing_module__WEBPACK_IMPORTED_MODULE_1__["VirtualCardRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](VirtualCardModule, { declarations: [_virtual_card_component__WEBPACK_IMPORTED_MODULE_2__["VirtualCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _virtual_card_routing_module__WEBPACK_IMPORTED_MODULE_1__["VirtualCardRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=virtual-card-virtual-card-module.js.map