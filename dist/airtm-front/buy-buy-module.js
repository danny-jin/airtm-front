(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-buy-module"],{

/***/ "8nul":
/*!*************************************************!*\
  !*** ./src/app/client/crypto/buy/buy.module.ts ***!
  \*************************************************/
/*! exports provided: BuyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyModule", function() { return BuyModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _buy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buy-routing.module */ "hAcS");
/* harmony import */ var _buy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buy.component */ "Cg5i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class BuyModule {
}
BuyModule.ɵfac = function BuyModule_Factory(t) { return new (t || BuyModule)(); };
BuyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BuyModule });
BuyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _buy_routing_module__WEBPACK_IMPORTED_MODULE_3__["BuyRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BuyModule, { declarations: [_buy_component__WEBPACK_IMPORTED_MODULE_4__["BuyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _buy_routing_module__WEBPACK_IMPORTED_MODULE_3__["BuyRoutingModule"]] }); })();


/***/ }),

/***/ "Cg5i":
/*!****************************************************!*\
  !*** ./src/app/client/crypto/buy/buy.component.ts ***!
  \****************************************************/
/*! exports provided: BuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyComponent", function() { return BuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


class BuyComponent {
    constructor() { }
    ngOnInit() {
    }
}
BuyComponent.ɵfac = function BuyComponent_Factory(t) { return new (t || BuyComponent)(); };
BuyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuyComponent, selectors: [["app-buy"]], decls: 9, vars: 6, consts: [[1, "d-flex", "flex-column"], [1, "d-flex", "mb-20"], [1, "text-dark"], [1, "d-flex", "crypto-header", "rounded-0", "height-40", "justify-content-center", "align-items-center", "border-color-hit-gray", "border-bottom"], [1, "text-info", "cursor-pointer"]], template: function BuyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "client.crypto.balance"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, "client.crypto.select-balance"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".crypto-header[_ngcontent-%COMP%]:hover, .crypto-header[_ngcontent-%COMP%]:active, .crypto-header[_ngcontent-%COMP%]:focus, .crypto-header.active[_ngcontent-%COMP%] {\n  background: #D4D8DC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1eS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9nZW5lcmFsL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsbUJDWUc7QURkUCIsImZpbGUiOiJidXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lXCI7XHJcblxyXG4uY3J5cHRvLWhlYWRlciB7XHJcbiAgJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMsICYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICRpcm9uO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb2xvcnNcclxuJGRvZGdlci1ibHVlOiAjMTc4M0ZBO1xyXG4kZG9kZ2VyLWJsdWUtMDE6ICMxQUEwRkM7XHJcbiRibHVlLWJheW91eDogIzUyNjQ3NDtcclxuJGhpdC1ncmF5OiAjQTlCMUI5O1xyXG4kcmhpbm86ICMyNzNENTE7XHJcbiRtb3VudGFpbi1tZWFkb3c6ICMwRUNCODE7XHJcbiRicmljay1yZWQ6ICNDRjMwNEE7XHJcbiRteS1zaW46ICNmZmI4MmE7XHJcbiRzaGFyazogIzFFMjMyOTtcclxuJGNhdHNraWxsLXdoaXRlOiAjRjZGOUZCO1xyXG4kZG93bnJpdmVyOiAjMEEyNTQwO1xyXG4kYmx1ZS1yb21hbmNlOiAjRDFGNEQ5O1xyXG4kaHVtbWluZy1iaXJkOiAjRDBGM0Y4O1xyXG4kcGVhY2g6ICNGRkU0QkM7XHJcbiRjb3Ntb3M6ICNGRUQ2REI7XHJcbiRpcm9uOiAjRDREOERDO1xyXG4kaW5kaWdvOiAjMzc2QkM4O1xyXG4kYXp1cmU6ICMyRjVCQUE7XHJcbiR3aWxkLXNhbmQ6ICNGNkY2RjY7XHJcbiRhbGljZS1ibHVlOiAjRjNGQUZGO1xyXG4kZGVuaW06ICMxQTYyQzQ7XHJcbiRnb3NzYW1lcjogIzBBOUU2NDtcclxuJGVtZXJhbGQ6ICMyOUNFNDE7XHJcbiRjaGFibGlzOiAjRkZFRkVGO1xyXG5cclxuJHRoZW1lLWNvbG9yczogKFxyXG4gIHByaW1hcnk6ICRkb2RnZXItYmx1ZSxcclxuICBzZWNvbmRhcnk6ICRlbWVyYWxkLFxyXG4gIHN1Y2Nlc3M6ICRtb3VudGFpbi1tZWFkb3csXHJcbiAgZGFuZ2VyOiAkYnJpY2stcmVkLFxyXG4gIHdhcm5pbmc6ICRteS1zaW4sXHJcbiAgaW5mbzogJGJsdWUtYmF5b3V4LFxyXG4gIGRhcms6ICRyaGlub1xyXG4pO1xyXG5cclxuLy8gSGVhZGluZ3NcclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtOyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcclxuJGZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlICogLjE7XHJcbiRmb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZSAqIDEuMjU7XHJcblxyXG4kaDEtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyLjI1O1xyXG4kaDItZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyO1xyXG4kaDMtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjc1O1xyXG4kaDQtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjU7XHJcbiRoNS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMjU7XHJcbiRoNi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbiRmb250LXdlaWdodC1ib2xkZXI6IDYwMDtcclxuXHJcbi8vIFNwYWNpbmdcclxuJHBpeGVsLXNwYWNlcjogNXB4ICFkZWZhdWx0O1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG5AZm9yICRpIGZyb20gMSB0aHJvdWdoIDEwMCB7XHJcbiAgJHNwYWNlcnM6IG1hcC1tZXJnZSgkc3BhY2VycywgKFxyXG4gICAgJGkgKiA1OiAoJGkgKiAkcGl4ZWwtc3BhY2VyKVxyXG4gICkpO1xyXG59XHJcblxyXG4vLyBCdXR0b25zXHJcbiRidG4tcGFkZGluZy14OiAuNXJlbTtcclxuJGJ0bi1wYWRkaW5nLXk6IC4yNXJlbTtcclxuJGJ0bi1mb250LXNpemU6IDE0cHg7XHJcbiRidG4tbGluZS1oZWlnaHQ6IDEuNjtcclxuJGJ0bi1mb250LXdlaWdodDogNzAwO1xyXG4kYnRuLWJvcmRlci13aWR0aDogMDtcclxuXHJcbi8vIENhcmRzXHJcbiRjYXJkLWJvcmRlci1yYWRpdXM6IDNweDtcclxuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xyXG5cclxuLy8gRm9ybXNcclxuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxuJGlucHV0LXBhZGRpbmcteDogLjVyZW07XHJcbiRpbnB1dC1wYWRkaW5nLXk6IDA7XHJcbiRpbnB1dC1saW5lLWhlaWdodDogMS4xMjVyZW07XHJcbiRpbnB1dC1mb250LXNpemU6IC44NzVyZW07XHJcbiRpbnB1dC1ib3JkZXItd2lkdGg6IDA7XHJcbiRpbnB1dC1oZWlnaHQ6IDM4cHg7XHJcbiRpbnB1dC1iZzogd2hpdGU7XHJcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJGhpdC1ncmF5O1xyXG4iXX0= */"] });


/***/ }),

/***/ "hAcS":
/*!*********************************************************!*\
  !*** ./src/app/client/crypto/buy/buy-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BuyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyRoutingModule", function() { return BuyRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _buy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy.component */ "Cg5i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _buy_component__WEBPACK_IMPORTED_MODULE_1__["BuyComponent"] }
];
class BuyRoutingModule {
}
BuyRoutingModule.ɵfac = function BuyRoutingModule_Factory(t) { return new (t || BuyRoutingModule)(); };
BuyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BuyRoutingModule });
BuyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BuyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=buy-buy-module.js.map