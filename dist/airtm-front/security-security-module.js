(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-security-module"],{

/***/ "ERLz":
/*!****************************************************************!*\
  !*** ./src/app/client/settings/security/security.component.ts ***!
  \****************************************************************/
/*! exports provided: SecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityComponent", function() { return SecurityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _ui_kit_common_ui_kit_separator_separator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui-kit/common-ui-kit/separator/separator.component */ "Roor");
/* harmony import */ var _ui_kit_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui-kit/icon/icon.component */ "CpPR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






class SecurityComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecurityComponent.ɵfac = function SecurityComponent_Factory(t) { return new (t || SecurityComponent)(); };
SecurityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecurityComponent, selectors: [["app-security"]], decls: 41, vars: 25, consts: [[1, "container"], [1, "d-flex", "elevation-1", "rounded-2", "p-15"], [1, "d-none", "d-lg-flex", "mr-0", "mr-lg-30"], ["defaultImage", "assets/images/placeholder.png", "lazyLoad", "assets/images/client-pages/settings/2fa.svg", "alt", "2FA", "loading", "lazy", 1, "width-60"], [1, "flex-grow-1", "d-flex", "flex-column"], [1, "d-flex", "align-items-center", "mb-10"], [1, "text-info", "me-5"], [1, "text-dark", "font-weight-bold"], [1, "d-flex", "mb-10"], ["mode", "determinate", "value", "0"], [1, "d-flex", "align-items-center"], [1, "text-dark", "font-13", "font-weight-bold", "me-10"], [1, "text-primary", "font-weight-bold", "text-decoration-none", "cursor-pointer"], [1, "d-flex", "flex-column"], [1, "text-dark", "mb-20"], [1, "d-flex", "align-items-center", "cursor-pointer", "change-password"], ["icon", "key", "color", "dodger-blue", 3, "width"], [1, "font-weight-bold"], [1, "text-info", "mb-20"], [1, "btn", "btn-primary", "width-140", "rounded-pill"]], template: function SecurityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "0/3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-separator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-separator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, "client.settings.security.security-level"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, "client.settings.security.next"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 13, "client.settings.security.enable-two-factor-authentication"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 15, "client.settings.security.password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 17, "client.settings.security.change-password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 19, "client.settings.security.two-factor-authentication"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 21, "client.settings.security.may-require-app-installs-on-your-smartphone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 23, "client.settings.security.enable-now"));
    } }, directives: [ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__["LazyLoadImageDirective"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"], _ui_kit_common_ui_kit_separator_separator_component__WEBPACK_IMPORTED_MODULE_3__["SeparatorComponent"], _ui_kit_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".change-password[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  margin-top: 3px;\n  color: #1783FA;\n}\n.change-password[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]  svg {\n  fill: #1783FA !important;\n}\n.change-password[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .change-password[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%], .change-password[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%], .change-password.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1A62C4;\n}\n.change-password[_ngcontent-%COMP%]:hover   app-icon[_ngcontent-%COMP%]  svg, .change-password[_ngcontent-%COMP%]:active   app-icon[_ngcontent-%COMP%]  svg, .change-password[_ngcontent-%COMP%]:focus   app-icon[_ngcontent-%COMP%]  svg, .change-password.active[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]  svg {\n  fill: #1A62C4 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlY3VyaXR5LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2dlbmVyYWwvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQ0xVO0FER2Q7QUFLSTtFQUNFLHdCQUFBO0FBSE47QUFRSTtFQUNFLGNDS0U7QURYUjtBQVNNO0VBQ0Usd0JBQUE7QUFQUiIsImZpbGUiOiJzZWN1cml0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvdGhlbWVcIjtcclxuXHJcbi5jaGFuZ2UtcGFzc3dvcmQge1xyXG4gIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIGNvbG9yOiAkZG9kZ2VyLWJsdWVcclxuICB9XHJcbiAgYXBwLWljb246Om5nLWRlZXAge1xyXG4gICAgc3ZnIHtcclxuICAgICAgZmlsbDogJGRvZGdlci1ibHVlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyLCAmOmFjdGl2ZSwgJjpmb2N1cywgJi5hY3RpdmUge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAkZGVuaW07XHJcbiAgICB9XHJcbiAgICBhcHAtaWNvbjo6bmctZGVlcCB7XHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgZmlsbDogJGRlbmltICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRkb2RnZXItYmx1ZTogIzE3ODNGQTtcclxuJGRvZGdlci1ibHVlLTAxOiAjMUFBMEZDO1xyXG4kYmx1ZS1iYXlvdXg6ICM1MjY0NzQ7XHJcbiRoaXQtZ3JheTogI0E5QjFCOTtcclxuJHJoaW5vOiAjMjczRDUxO1xyXG4kbW91bnRhaW4tbWVhZG93OiAjMEVDQjgxO1xyXG4kYnJpY2stcmVkOiAjQ0YzMDRBO1xyXG4kbXktc2luOiAjZmZiODJhO1xyXG4kc2hhcms6ICMxRTIzMjk7XHJcbiRjYXRza2lsbC13aGl0ZTogI0Y2RjlGQjtcclxuJGRvd25yaXZlcjogIzBBMjU0MDtcclxuJGJsdWUtcm9tYW5jZTogI0QxRjREOTtcclxuJGh1bW1pbmctYmlyZDogI0QwRjNGODtcclxuJHBlYWNoOiAjRkZFNEJDO1xyXG4kY29zbW9zOiAjRkVENkRCO1xyXG4kaXJvbjogI0Q0RDhEQztcclxuJGluZGlnbzogIzM3NkJDODtcclxuJGF6dXJlOiAjMkY1QkFBO1xyXG4kd2lsZC1zYW5kOiAjRjZGNkY2O1xyXG4kYWxpY2UtYmx1ZTogI0YzRkFGRjtcclxuJGRlbmltOiAjMUE2MkM0O1xyXG4kZ29zc2FtZXI6ICMwQTlFNjQ7XHJcbiRlbWVyYWxkOiAjMjlDRTQxO1xyXG4kY2hhYmxpczogI0ZGRUZFRjtcclxuXHJcbiR0aGVtZS1jb2xvcnM6IChcclxuICBwcmltYXJ5OiAkZG9kZ2VyLWJsdWUsXHJcbiAgc2Vjb25kYXJ5OiAkZW1lcmFsZCxcclxuICBzdWNjZXNzOiAkbW91bnRhaW4tbWVhZG93LFxyXG4gIGRhbmdlcjogJGJyaWNrLXJlZCxcclxuICB3YXJuaW5nOiAkbXktc2luLFxyXG4gIGluZm86ICRibHVlLWJheW91eCxcclxuICBkYXJrOiAkcmhpbm9cclxuKTtcclxuXHJcbi8vIEhlYWRpbmdzXHJcbiRmb250LXNpemUtYmFzZTogMXJlbTsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXHJcbiRmb250LXNpemUtc206ICRmb250LXNpemUtYmFzZSAqIC4xO1xyXG4kZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1O1xyXG5cclxuJGgxLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMi4yNTtcclxuJGgyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMjtcclxuJGgzLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS43NTtcclxuJGg0LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS41O1xyXG4kaDUtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1O1xyXG4kaDYtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogNTAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZGVyOiA2MDA7XHJcblxyXG4vLyBTcGFjaW5nXHJcbiRwaXhlbC1zcGFjZXI6IDVweCAhZGVmYXVsdDtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMDAge1xyXG4gICRzcGFjZXJzOiBtYXAtbWVyZ2UoJHNwYWNlcnMsIChcclxuICAgICRpICogNTogKCRpICogJHBpeGVsLXNwYWNlcilcclxuICApKTtcclxufVxyXG5cclxuLy8gQnV0dG9uc1xyXG4kYnRuLXBhZGRpbmcteDogLjVyZW07XHJcbiRidG4tcGFkZGluZy15OiAuMjVyZW07XHJcbiRidG4tZm9udC1zaXplOiAxNHB4O1xyXG4kYnRuLWxpbmUtaGVpZ2h0OiAxLjY7XHJcbiRidG4tZm9udC13ZWlnaHQ6IDcwMDtcclxuJGJ0bi1ib3JkZXItd2lkdGg6IDA7XHJcblxyXG4vLyBDYXJkc1xyXG4kY2FyZC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcclxuXHJcbi8vIEZvcm1zXHJcbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbiRpbnB1dC1wYWRkaW5nLXg6IC41cmVtO1xyXG4kaW5wdXQtcGFkZGluZy15OiAwO1xyXG4kaW5wdXQtbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xyXG4kaW5wdXQtZm9udC1zaXplOiAuODc1cmVtO1xyXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAwO1xyXG4kaW5wdXQtaGVpZ2h0OiAzOHB4O1xyXG4kaW5wdXQtYmc6IHdoaXRlO1xyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICRoaXQtZ3JheTtcclxuIl19 */"] });


/***/ }),

/***/ "IFmA":
/*!*************************************************************!*\
  !*** ./src/app/client/settings/security/security.module.ts ***!
  \*************************************************************/
/*! exports provided: SecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _ui_kit_common_ui_kit_common_ui_kit_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui-kit/common-ui-kit/common-ui-kit.module */ "2yv/");
/* harmony import */ var _ui_kit_icon_icon_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui-kit/icon/icon.module */ "EjfW");
/* harmony import */ var _security_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security-routing.module */ "b4k+");
/* harmony import */ var _security_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./security.component */ "ERLz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class SecurityModule {
}
SecurityModule.ɵfac = function SecurityModule_Factory(t) { return new (t || SecurityModule)(); };
SecurityModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SecurityModule });
SecurityModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImageModule"],
            _ui_kit_common_ui_kit_common_ui_kit_module__WEBPACK_IMPORTED_MODULE_4__["CommonUiKitModule"],
            _ui_kit_icon_icon_module__WEBPACK_IMPORTED_MODULE_5__["IconModule"],
            _security_routing_module__WEBPACK_IMPORTED_MODULE_6__["SecurityRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SecurityModule, { declarations: [_security_component__WEBPACK_IMPORTED_MODULE_7__["SecurityComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImageModule"],
        _ui_kit_common_ui_kit_common_ui_kit_module__WEBPACK_IMPORTED_MODULE_4__["CommonUiKitModule"],
        _ui_kit_icon_icon_module__WEBPACK_IMPORTED_MODULE_5__["IconModule"],
        _security_routing_module__WEBPACK_IMPORTED_MODULE_6__["SecurityRoutingModule"]] }); })();


/***/ }),

/***/ "b4k+":
/*!*********************************************************************!*\
  !*** ./src/app/client/settings/security/security-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SecurityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityRoutingModule", function() { return SecurityRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _security_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security.component */ "ERLz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _security_component__WEBPACK_IMPORTED_MODULE_1__["SecurityComponent"] }
];
class SecurityRoutingModule {
}
SecurityRoutingModule.ɵfac = function SecurityRoutingModule_Factory(t) { return new (t || SecurityRoutingModule)(); };
SecurityRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SecurityRoutingModule });
SecurityRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SecurityRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=security-security-module.js.map