(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crypto-crypto-module"],{

/***/ "6SXG":
/*!************************************************!*\
  !*** ./src/app/client/crypto/crypto.module.ts ***!
  \************************************************/
/*! exports provided: CryptoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoModule", function() { return CryptoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "KZTq");
/* harmony import */ var _ui_kit_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui-kit/pipes/pipes.module */ "W9kA");
/* harmony import */ var _crypto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crypto-routing.module */ "7xUA");
/* harmony import */ var _crypto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crypto.component */ "G1r+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class CryptoModule {
}
CryptoModule.ɵfac = function CryptoModule_Factory(t) { return new (t || CryptoModule)(); };
CryptoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CryptoModule });
CryptoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToModule"].forRoot(),
            _ui_kit_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
            _crypto_routing_module__WEBPACK_IMPORTED_MODULE_5__["CryptoRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CryptoModule, { declarations: [_crypto_component__WEBPACK_IMPORTED_MODULE_6__["CryptoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToModule"], _ui_kit_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
        _crypto_routing_module__WEBPACK_IMPORTED_MODULE_5__["CryptoRoutingModule"]] }); })();


/***/ }),

/***/ "7xUA":
/*!********************************************************!*\
  !*** ./src/app/client/crypto/crypto-routing.module.ts ***!
  \********************************************************/
/*! exports provided: CryptoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoRoutingModule", function() { return CryptoRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _crypto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crypto.component */ "G1r+");
/* harmony import */ var _core_constants_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/constants/routes */ "A7B1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _crypto_component__WEBPACK_IMPORTED_MODULE_1__["CryptoComponent"], children: [
            {
                path: _core_constants_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].client.crypto.buy,
                loadChildren: () => __webpack_require__.e(/*! import() | buy-buy-module */ "buy-buy-module").then(__webpack_require__.bind(null, /*! ./buy/buy.module */ "8nul")).then(m => m.BuyModule),
            },
            {
                path: _core_constants_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].client.crypto.sell,
                loadChildren: () => __webpack_require__.e(/*! import() | sell-sell-module */ "sell-sell-module").then(__webpack_require__.bind(null, /*! ./sell/sell.module */ "6J/c")).then(m => m.SellModule),
            },
            { path: '**', redirectTo: _core_constants_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].client.crypto.buy, pathMatch: 'full' },
        ]
    }
];
class CryptoRoutingModule {
}
CryptoRoutingModule.ɵfac = function CryptoRoutingModule_Factory(t) { return new (t || CryptoRoutingModule)(); };
CryptoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CryptoRoutingModule });
CryptoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CryptoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "G1r+":
/*!***************************************************!*\
  !*** ./src/app/client/crypto/crypto.component.ts ***!
  \***************************************************/
/*! exports provided: CryptoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoComponent", function() { return CryptoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_constants_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/constants/routes */ "A7B1");
/* harmony import */ var _core_constants_scroll_pos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/constants/scroll-pos */ "xUiJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "KZTq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












function CryptoComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CryptoComponent_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const menuItem_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r2.setMenu(menuItem_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", menuItem_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", menuItem_r1.label, " ");
} }
class CryptoComponent {
    constructor(fb, router, translate, scrollToService) {
        var _a;
        this.fb = fb;
        this.router = router;
        this.translate = translate;
        this.scrollToService = scrollToService;
        this.menuItems = [
            {
                label: this.translate.instant('client.crypto.buy'),
                value: Object(_core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["toAbsolutePath"])([_core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.root, _core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.crypto.root, _core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.crypto.buy])
            },
            {
                label: this.translate.instant('client.crypto.sell'),
                value: Object(_core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["toAbsolutePath"])([_core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.root, _core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.crypto.root, _core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.crypto.sell])
            },
        ];
        this.form = this.fb.group({
            menuItem: [((_a = this.menuItems.find((item) => item.value === this.router.url)) === null || _a === void 0 ? void 0 : _a.value) || this.menuItems[0].value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.unsubscribeAll$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        var _a;
        (_a = this.form.get('menuItem')) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribeAll$)).subscribe((path) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigateByUrl(path).then(() => {
                this.scrollToService.scrollTo({ target: _core_constants_scroll_pos__WEBPACK_IMPORTED_MODULE_5__["ScrollPosition"].Root });
            });
        }));
    }
    ngOnDestroy() {
        this.unsubscribeAll$.next();
        this.unsubscribeAll$.complete();
    }
    setMenu(path) {
        var _a;
        (_a = this.form.get('menuItem')) === null || _a === void 0 ? void 0 : _a.setValue(path);
    }
}
CryptoComponent.ɵfac = function CryptoComponent_Factory(t) { return new (t || CryptoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__["ScrollToService"])); };
CryptoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CryptoComponent, selectors: [["app-crypto"]], decls: 8, vars: 4, consts: [[1, "container"], [1, "text-dark", "mb-50"], [1, "d-flex", "mb-30"], [1, "list-unstyled", "rounded-2", "d-flex", "w-100", "justify-content-between", "elevation-6"], ["class", "flex-grow-1 py-5 fs-5 font-weight-bold text-center cursor-pointer", "routerLinkActive", "active", "ngxScrollTo", "root", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", "ngxScrollTo", "root", 1, "flex-grow-1", "py-5", "fs-5", "font-weight-bold", "text-center", "cursor-pointer", 3, "routerLink", "click"]], template: function CryptoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, CryptoComponent_li_6_Template, 2, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "client.crypto.buy-sell-crypto"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__["ScrollToDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["li[_ngcontent-%COMP%] {\n  background: white;\n  color: #1783FA;\n}\nli[_ngcontent-%COMP%]:first-child {\n  border-radius: 4px 0 0 4px;\n}\nli[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 4px 4px 0;\n}\nli[_ngcontent-%COMP%]:active, li[_ngcontent-%COMP%]:focus, li.active[_ngcontent-%COMP%] {\n  background: #1783FA;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NyeXB0by5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9nZW5lcmFsL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxjQ0hZO0FERWQ7QUFHRTtFQUNFLDBCQUFBO0FBREo7QUFJRTtFQUNFLDBCQUFBO0FBRko7QUFLRTtFQUNFLG1CQ2RVO0VEZVYsWUFBQTtBQUhKIiwiZmlsZSI6ImNyeXB0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvdGhlbWVcIjtcclxuXHJcbmxpIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogJGRvZGdlci1ibHVlO1xyXG5cclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4gIH1cclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUsICY6Zm9jdXMsICYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICRkb2RnZXItYmx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRkb2RnZXItYmx1ZTogIzE3ODNGQTtcclxuJGRvZGdlci1ibHVlLTAxOiAjMUFBMEZDO1xyXG4kYmx1ZS1iYXlvdXg6ICM1MjY0NzQ7XHJcbiRoaXQtZ3JheTogI0E5QjFCOTtcclxuJHJoaW5vOiAjMjczRDUxO1xyXG4kbW91bnRhaW4tbWVhZG93OiAjMEVDQjgxO1xyXG4kYnJpY2stcmVkOiAjQ0YzMDRBO1xyXG4kbXktc2luOiAjZmZiODJhO1xyXG4kc2hhcms6ICMxRTIzMjk7XHJcbiRjYXRza2lsbC13aGl0ZTogI0Y2RjlGQjtcclxuJGRvd25yaXZlcjogIzBBMjU0MDtcclxuJGJsdWUtcm9tYW5jZTogI0QxRjREOTtcclxuJGh1bW1pbmctYmlyZDogI0QwRjNGODtcclxuJHBlYWNoOiAjRkZFNEJDO1xyXG4kY29zbW9zOiAjRkVENkRCO1xyXG4kaXJvbjogI0Q0RDhEQztcclxuJGluZGlnbzogIzM3NkJDODtcclxuJGF6dXJlOiAjMkY1QkFBO1xyXG4kd2lsZC1zYW5kOiAjRjZGNkY2O1xyXG4kYWxpY2UtYmx1ZTogI0YzRkFGRjtcclxuJGRlbmltOiAjMUE2MkM0O1xyXG4kZ29zc2FtZXI6ICMwQTlFNjQ7XHJcbiRlbWVyYWxkOiAjMjlDRTQxO1xyXG4kY2hhYmxpczogI0ZGRUZFRjtcclxuXHJcbiR0aGVtZS1jb2xvcnM6IChcclxuICBwcmltYXJ5OiAkZG9kZ2VyLWJsdWUsXHJcbiAgc2Vjb25kYXJ5OiAkZW1lcmFsZCxcclxuICBzdWNjZXNzOiAkbW91bnRhaW4tbWVhZG93LFxyXG4gIGRhbmdlcjogJGJyaWNrLXJlZCxcclxuICB3YXJuaW5nOiAkbXktc2luLFxyXG4gIGluZm86ICRibHVlLWJheW91eCxcclxuICBkYXJrOiAkcmhpbm9cclxuKTtcclxuXHJcbi8vIEhlYWRpbmdzXHJcbiRmb250LXNpemUtYmFzZTogMXJlbTsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXHJcbiRmb250LXNpemUtc206ICRmb250LXNpemUtYmFzZSAqIC4xO1xyXG4kZm9udC1zaXplLWxnOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1O1xyXG5cclxuJGgxLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMi4yNTtcclxuJGgyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMjtcclxuJGgzLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS43NTtcclxuJGg0LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS41O1xyXG4kaDUtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1O1xyXG4kaDYtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogNTAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZGVyOiA2MDA7XHJcblxyXG4vLyBTcGFjaW5nXHJcbiRwaXhlbC1zcGFjZXI6IDVweCAhZGVmYXVsdDtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMDAge1xyXG4gICRzcGFjZXJzOiBtYXAtbWVyZ2UoJHNwYWNlcnMsIChcclxuICAgICRpICogNTogKCRpICogJHBpeGVsLXNwYWNlcilcclxuICApKTtcclxufVxyXG5cclxuLy8gQnV0dG9uc1xyXG4kYnRuLXBhZGRpbmcteDogLjVyZW07XHJcbiRidG4tcGFkZGluZy15OiAuMjVyZW07XHJcbiRidG4tZm9udC1zaXplOiAxNHB4O1xyXG4kYnRuLWxpbmUtaGVpZ2h0OiAxLjY7XHJcbiRidG4tZm9udC13ZWlnaHQ6IDcwMDtcclxuJGJ0bi1ib3JkZXItd2lkdGg6IDA7XHJcblxyXG4vLyBDYXJkc1xyXG4kY2FyZC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcclxuXHJcbi8vIEZvcm1zXHJcbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbiRpbnB1dC1wYWRkaW5nLXg6IC41cmVtO1xyXG4kaW5wdXQtcGFkZGluZy15OiAwO1xyXG4kaW5wdXQtbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xyXG4kaW5wdXQtZm9udC1zaXplOiAuODc1cmVtO1xyXG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAwO1xyXG4kaW5wdXQtaGVpZ2h0OiAzOHB4O1xyXG4kaW5wdXQtYmc6IHdoaXRlO1xyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICRoaXQtZ3JheTtcclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=crypto-crypto-module.js.map