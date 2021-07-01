(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "CLRZ":
/*!************************************************************!*\
  !*** ./src/app/client/settings/settings-routing.module.ts ***!
  \************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component */ "LSbb");
/* harmony import */ var _core_constants_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/constants/routes */ "A7B1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _settings_component__WEBPACK_IMPORTED_MODULE_1__["SettingsComponent"], children: [
            {
                path: _core_constants_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].client.settings.profile,
                loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "j/pu")).then(m => m.ProfileModule),
            },
            {
                path: _core_constants_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].client.settings.verification,
                loadChildren: () => __webpack_require__.e(/*! import() | verification-verification-module */ "verification-verification-module").then(__webpack_require__.bind(null, /*! ./verification/verification.module */ "YM7f")).then(m => m.VerificationModule),
            },
            {
                path: _core_constants_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].client.settings.security,
                loadChildren: () => Promise.all(/*! import() | security-security-module */[__webpack_require__.e("default~home-home-module~security-security-module"), __webpack_require__.e("security-security-module")]).then(__webpack_require__.bind(null, /*! ./security/security.module */ "IFmA")).then(m => m.SecurityModule),
            },
            {
                path: _core_constants_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].client.settings.paymentMethods,
                loadChildren: () => __webpack_require__.e(/*! import() | payment-methods-payment-methods-module */ "payment-methods-payment-methods-module").then(__webpack_require__.bind(null, /*! ./payment-methods/payment-methods.module */ "PBgi")).then(m => m.PaymentMethodsModule),
            },
            {
                path: _core_constants_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].client.settings.apps,
                loadChildren: () => __webpack_require__.e(/*! import() | apps-apps-module */ "apps-apps-module").then(__webpack_require__.bind(null, /*! ./apps/apps.module */ "qLD0")).then(m => m.AppsModule),
            },
            { path: '**', redirectTo: _core_constants_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].client.settings.profile, pathMatch: 'full' },
        ]
    }
];
class SettingsRoutingModule {
}
SettingsRoutingModule.ɵfac = function SettingsRoutingModule_Factory(t) { return new (t || SettingsRoutingModule)(); };
SettingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SettingsRoutingModule });
SettingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SettingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Jazv":
/*!****************************************************!*\
  !*** ./src/app/client/settings/settings.module.ts ***!
  \****************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "KZTq");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _ui_kit_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui-kit/pipes/pipes.module */ "W9kA");
/* harmony import */ var _ui_kit_input_input_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui-kit/input/input.module */ "M+6g");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings-routing.module */ "CLRZ");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings.component */ "LSbb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











class SettingsModule {
}
SettingsModule.ɵfac = function SettingsModule_Factory(t) { return new (t || SettingsModule)(); };
SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToModule"].forRoot(),
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"],
            _ui_kit_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _ui_kit_input_input_module__WEBPACK_IMPORTED_MODULE_6__["InputModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_7__["SettingsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"],
        _ui_kit_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        _ui_kit_input_input_module__WEBPACK_IMPORTED_MODULE_6__["InputModule"],
        _settings_routing_module__WEBPACK_IMPORTED_MODULE_7__["SettingsRoutingModule"]] }); })();


/***/ }),

/***/ "LSbb":
/*!*******************************************************!*\
  !*** ./src/app/client/settings/settings.component.ts ***!
  \*******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
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
/* harmony import */ var _ui_kit_input_select_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui-kit/input/select/select.component */ "5Utk");













function SettingsComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsComponent_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const menuItem_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r2.setMenu(menuItem_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", menuItem_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", menuItem_r1.label, " ");
} }
class SettingsComponent {
    constructor(fb, router, translate, scrollToService) {
        var _a;
        this.fb = fb;
        this.router = router;
        this.translate = translate;
        this.scrollToService = scrollToService;
        this.menuItems = [
            {
                label: this.translate.instant('client.settings.profile.root'),
                value: Object(_core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["toAbsolutePath"])([_core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.root, _core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.settings.root, _core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.settings.profile])
            },
            {
                label: this.translate.instant('client.settings.verification.root'),
                value: Object(_core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["toAbsolutePath"])([_core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.root, _core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.settings.root, _core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.settings.verification])
            },
            {
                label: this.translate.instant('client.settings.security.root'),
                value: Object(_core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["toAbsolutePath"])([_core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.root, _core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.settings.root, _core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.settings.security])
            },
            {
                label: this.translate.instant('client.settings.payment-methods.root'),
                value: Object(_core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["toAbsolutePath"])([_core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.root, _core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.settings.root, _core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.settings.paymentMethods])
            },
            {
                label: this.translate.instant('client.settings.apps.root'),
                value: Object(_core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["toAbsolutePath"])([_core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.root, _core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.settings.root, _core_constants_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].client.settings.apps])
            }
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
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__["ScrollToService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 11, vars: 6, consts: [[1, "container"], [1, "text-dark", "mb-50"], [1, "d-none", "d-lg-flex", "mb-30"], [1, "list-unstyled", "d-flex", "w-100", "justify-content-between", "border-color-iron", "border-bottom"], ["class", "flex-grow-1 pb-15 fs-5 font-weight-bold text-dark text-center cursor-pointer", "routerLinkActive", "active", "ngxScrollTo", "root", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "d-lg-none"], [1, "w-100", 3, "formGroup"], ["formControlName", "menuItem", 3, "options"], ["routerLinkActive", "active", "ngxScrollTo", "root", 1, "flex-grow-1", "pb-15", "fs-5", "font-weight-bold", "text-dark", "text-center", "cursor-pointer", 3, "routerLink", "click"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SettingsComponent_li_6_Template, 2, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, "client.settings.root"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ui_kit_input_select_select_component__WEBPACK_IMPORTED_MODULE_11__["SelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__["ScrollToDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["li[_ngcontent-%COMP%]:active, li[_ngcontent-%COMP%]:focus, li.active[_ngcontent-%COMP%] {\n  color: #1783FA;\n  border-bottom: solid 2px #1AA0FC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2dlbmVyYWwvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxjQ0hVO0VESVYsZ0NBQUE7QUFGSiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvdGhlbWVcIjtcclxuXHJcbmxpIHtcclxuICAmOmFjdGl2ZSwgJjpmb2N1cywgJi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICRkb2RnZXItYmx1ZTtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAkZG9kZ2VyLWJsdWUtMDE7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kZG9kZ2VyLWJsdWU6ICMxNzgzRkE7XHJcbiRkb2RnZXItYmx1ZS0wMTogIzFBQTBGQztcclxuJGJsdWUtYmF5b3V4OiAjNTI2NDc0O1xyXG4kaGl0LWdyYXk6ICNBOUIxQjk7XHJcbiRyaGlubzogIzI3M0Q1MTtcclxuJG1vdW50YWluLW1lYWRvdzogIzBFQ0I4MTtcclxuJGJyaWNrLXJlZDogI0NGMzA0QTtcclxuJG15LXNpbjogI2ZmYjgyYTtcclxuJHNoYXJrOiAjMUUyMzI5O1xyXG4kY2F0c2tpbGwtd2hpdGU6ICNGNkY5RkI7XHJcbiRkb3ducml2ZXI6ICMwQTI1NDA7XHJcbiRibHVlLXJvbWFuY2U6ICNEMUY0RDk7XHJcbiRodW1taW5nLWJpcmQ6ICNEMEYzRjg7XHJcbiRwZWFjaDogI0ZGRTRCQztcclxuJGNvc21vczogI0ZFRDZEQjtcclxuJGlyb246ICNENEQ4REM7XHJcbiRpbmRpZ286ICMzNzZCQzg7XHJcbiRhenVyZTogIzJGNUJBQTtcclxuJHdpbGQtc2FuZDogI0Y2RjZGNjtcclxuJGFsaWNlLWJsdWU6ICNGM0ZBRkY7XHJcbiRkZW5pbTogIzFBNjJDNDtcclxuJGdvc3NhbWVyOiAjMEE5RTY0O1xyXG4kZW1lcmFsZDogIzI5Q0U0MTtcclxuJGNoYWJsaXM6ICNGRkVGRUY7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAoXHJcbiAgcHJpbWFyeTogJGRvZGdlci1ibHVlLFxyXG4gIHNlY29uZGFyeTogJGVtZXJhbGQsXHJcbiAgc3VjY2VzczogJG1vdW50YWluLW1lYWRvdyxcclxuICBkYW5nZXI6ICRicmljay1yZWQsXHJcbiAgd2FybmluZzogJG15LXNpbixcclxuICBpbmZvOiAkYmx1ZS1iYXlvdXgsXHJcbiAgZGFyazogJHJoaW5vXHJcbik7XHJcblxyXG4vLyBIZWFkaW5nc1xyXG4kZm9udC1zaXplLWJhc2U6IDFyZW07IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxyXG4kZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAuMTtcclxuJGZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNTtcclxuXHJcbiRoMS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDIuMjU7XHJcbiRoMi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDI7XHJcbiRoMy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNzU7XHJcbiRoNC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNTtcclxuJGg1LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4yNTtcclxuJGg2LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGRlcjogNjAwO1xyXG5cclxuLy8gU3BhY2luZ1xyXG4kcGl4ZWwtc3BhY2VyOiA1cHggIWRlZmF1bHQ7XHJcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XHJcbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTAwIHtcclxuICAkc3BhY2VyczogbWFwLW1lcmdlKCRzcGFjZXJzLCAoXHJcbiAgICAkaSAqIDU6ICgkaSAqICRwaXhlbC1zcGFjZXIpXHJcbiAgKSk7XHJcbn1cclxuXHJcbi8vIEJ1dHRvbnNcclxuJGJ0bi1wYWRkaW5nLXg6IC41cmVtO1xyXG4kYnRuLXBhZGRpbmcteTogLjI1cmVtO1xyXG4kYnRuLWZvbnQtc2l6ZTogMTRweDtcclxuJGJ0bi1saW5lLWhlaWdodDogMS42O1xyXG4kYnRuLWZvbnQtd2VpZ2h0OiA3MDA7XHJcbiRidG4tYm9yZGVyLXdpZHRoOiAwO1xyXG5cclxuLy8gQ2FyZHNcclxuJGNhcmQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XHJcblxyXG4vLyBGb3Jtc1xyXG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG4kaW5wdXQtcGFkZGluZy14OiAuNXJlbTtcclxuJGlucHV0LXBhZGRpbmcteTogMDtcclxuJGlucHV0LWxpbmUtaGVpZ2h0OiAxLjEyNXJlbTtcclxuJGlucHV0LWZvbnQtc2l6ZTogLjg3NXJlbTtcclxuJGlucHV0LWJvcmRlci13aWR0aDogMDtcclxuJGlucHV0LWhlaWdodDogMzhweDtcclxuJGlucHV0LWJnOiB3aGl0ZTtcclxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkaGl0LWdyYXk7XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map