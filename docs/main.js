(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+a8W":
/*!********************************************!*\
  !*** ./src/app/core/constants/language.ts ***!
  \********************************************/
/*! exports provided: languageList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageList", function() { return languageList; });
const languageList = [
    { value: 'English', code: 'en' },
    { value: '조선어', code: 'kr' }
];


/***/ }),

/***/ "+wJR":
/*!************************************************!*\
  !*** ./src/app/ui-kit/toastr/toastr.module.ts ***!
  \************************************************/
/*! exports provided: ToastrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrModule", function() { return ToastrModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon/icon.module */ "EjfW");
/* harmony import */ var _toastr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toastr.component */ "QZC4");
/* harmony import */ var _toastr_color_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastr-color.pipe */ "4fHp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ToastrModule {
}
ToastrModule.ɵfac = function ToastrModule_Factory(t) { return new (t || ToastrModule)(); };
ToastrModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ToastrModule });
ToastrModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _icon_icon_module__WEBPACK_IMPORTED_MODULE_1__["IconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ToastrModule, { declarations: [_toastr_component__WEBPACK_IMPORTED_MODULE_2__["ToastrComponent"],
        _toastr_color_pipe__WEBPACK_IMPORTED_MODULE_3__["ToastrColorPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _icon_icon_module__WEBPACK_IMPORTED_MODULE_1__["IconModule"]], exports: [_toastr_component__WEBPACK_IMPORTED_MODULE_2__["ToastrComponent"]] }); })();


/***/ }),

/***/ "/qEY":
/*!****************************************!*\
  !*** ./src/app/core/constants/base.ts ***!
  \****************************************/
/*! exports provided: landingHeaderHeight, headerHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landingHeaderHeight", function() { return landingHeaderHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerHeight", function() { return headerHeight; });
const landingHeaderHeight = 90;
const headerHeight = 60;


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/e/Project/airtm-workspace/airtm-front/src/main.ts */"zUnb");


/***/ }),

/***/ "0TzA":
/*!*******************************************************************!*\
  !*** ./src/app/landing/home/global-info/global-info.component.ts ***!
  \*******************************************************************/
/*! exports provided: GlobalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalInfoComponent", function() { return GlobalInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



function GlobalInfoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r1.symbol, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, item_r1.value), "", item_r1.suffix, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, item_r1.description));
} }
class GlobalInfoComponent {
    constructor() {
        this.globalInfoItems = [
            {
                symbol: '+',
                value: 1000000,
                suffix: '',
                description: 'landing.home.global-info.happy-members'
            },
            {
                symbol: '',
                value: 12808257,
                suffix: '',
                description: 'landing.home.global-info.transactions-completed'
            },
            {
                symbol: '+',
                value: 300,
                suffix: '',
                description: 'landing.home.global-info.banks-e-money-networks'
            },
            {
                symbol: '<',
                value: 10,
                suffix: ' min',
                description: 'landing.home.global-info.transaction-speed'
            }
        ];
    }
    ngOnInit() {
    }
}
GlobalInfoComponent.ɵfac = function GlobalInfoComponent_Factory(t) { return new (t || GlobalInfoComponent)(); };
GlobalInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalInfoComponent, selectors: [["app-global-info"]], decls: 4, vars: 1, consts: [[1, "mt-50"], [1, "container"], [1, "row"], ["class", "col-6 col-lg-3 mb-20", 4, "ngFor", "ngForOf"], [1, "col-6", "col-lg-3", "mb-20"], [1, "d-flex", "flex-column"], [1, "text-primary", "text-center", "mb-5"], [1, "text-info", "text-center", "fw-normal"]], template: function GlobalInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GlobalInfoComponent_div_3_Template, 8, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.globalInfoItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnbG9iYWwtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "3Vk1":
/*!*********************************************************************!*\
  !*** ./src/app/landing/home/testimonials/testimonials.component.ts ***!
  \*********************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-starrating */ "oaav");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





function TestimonialsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "star-rating", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("lazyLoad", "assets/images/landing-pages/home/avatars/", item_r1.name, ".png");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, item_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.rate)("totalstars", 5)("readonly", true);
} }
class TestimonialsComponent {
    constructor() {
        this.testimonials = [
            {
                name: 'argenis',
                text: '"I have been using Airtm for more than two years. I have completed transactions from my bank account to several wallets and back. Everything is satisfactory and in record time. Good exchange rate."',
                rate: 5
            },
            {
                name: 'daniel',
                text: '"Airtm is where I can keep my money save. When I need to withdraw, the transaction takes less than 20 minutes."',
                rate: 5
            },
            {
                name: 'karlys',
                text: '"I love the platform. The simplicity, especially the wide variety of payment methods. I live in Venezuela and find obtaining foreign currency very difficult.. There is noting like Airtm."',
                rate: 5
            }
        ];
    }
    ngOnInit() {
    }
}
TestimonialsComponent.ɵfac = function TestimonialsComponent_Factory(t) { return new (t || TestimonialsComponent)(); };
TestimonialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialsComponent, selectors: [["app-testimonials"]], decls: 14, vars: 7, consts: [[1, "mt-50"], [1, "container"], [1, "d-flex", "justify-content-center", "mb-30"], [1, "text-info", "text-center"], [1, "row"], ["class", "col-12 col-lg-4 mt-20", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "mt-30", "mt-lg-0"], [1, "d-flex", "flex-column", "align-items-center"], [1, "text-info"], ["defaultImage", "assets/images/placeholder.png", "lazyLoad", "assets/images/landing-pages/home/trustpilot.png", "alt", "Trustpilot", "loading", "lazy", 1, "width-115"], [1, "col-12", "col-lg-4", "mt-20"], [1, "d-flex", "flex-column", "align-items-center", "px-30", "px-lg-0"], [1, "d-flex", "justify-content-center"], ["defaultImage", "assets/images/placeholder.png", "loading", "lazy", 1, "width-70", 3, "lazyLoad", "alt"], [1, "d-flex", "justify-content-center", "my-20"], [1, "font-weight-bold", "text-info"], [1, "text-info", "fst-italic"], [1, "d-flex", "justify-content-center", "mt-20"], ["checkedcolor", "black", "size", "24px", 3, "value", "totalstars", "readonly"]], template: function TestimonialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TestimonialsComponent_div_7_Template, 12, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "landing.home.see-what-others-have-to-say-about-airtm.root"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testimonials);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 5, "landing.home.see-what-others-have-to-say-about-airtm.read-more-testimonies-at"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImageDirective"], ng_starrating__WEBPACK_IMPORTED_MODULE_3__["StarRatingComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "4fHp":
/*!****************************************************!*\
  !*** ./src/app/ui-kit/toastr/toastr-color.pipe.ts ***!
  \****************************************************/
/*! exports provided: ToastrColorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrColorPipe", function() { return ToastrColorPipe; });
/* harmony import */ var _core_models_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/models/toastr */ "flyv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ToastrColorPipe {
    transform(type, field) {
        let data = {
            bg: '',
            image: '',
            icon: '',
        };
        if (type === _core_models_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrType"].Success) {
            data = {
                bg: 'alert-success bg-color-blue-romance',
                image: 'assets/icons/toastr/check.svg',
                icon: 'dodger-blue',
            };
        }
        else if (type === _core_models_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrType"].Info) {
            data = {
                bg: 'alert-info bg-color-humming-bird',
                image: 'assets/icons/toastr/help.svg',
                icon: 'blue-bayoux',
            };
        }
        else if (type === _core_models_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrType"].Warning) {
            data = {
                bg: 'alert-warning bg-color-peach',
                image: 'assets/icons/toastr/question.svg',
                icon: 'buddha-gold',
            };
        }
        else if (type === _core_models_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrType"].Danger) {
            data = {
                bg: 'alert-danger bg-color-cosmos',
                image: 'assets/icons/toastr/danger.svg',
                icon: 'brick-red',
            };
        }
        // @ts-ignore
        return data[field];
    }
}
ToastrColorPipe.ɵfac = function ToastrColorPipe_Factory(t) { return new (t || ToastrColorPipe)(); };
ToastrColorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "toastrColor", type: ToastrColorPipe, pure: true });


/***/ }),

/***/ "7dP1":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/auth */ "ejC/");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "KZTq");
/* harmony import */ var _toastr_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toastr.service */ "nCHe");
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cookie.service */ "yFe8");













class AuthService {
    constructor(router, http, translate, scrollToService, toastr, cookieService) {
        this.router = router;
        this.http = http;
        this.translate = translate;
        this.scrollToService = scrollToService;
        this.toastr = toastr;
        this.cookieService = cookieService;
        // @ts-ignore
        this.user = null;
        this.fromAuth = false; // for email verification page, email verification page is only available when navigate from auth pages.
        this.fromLogout = false; // when we click logout button, we need to set this variable true to reload login page
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.user);
        this.fromAuth$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.fromAuth);
        this.fromLogout$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.fromLogout);
        this.isLoggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.isLoggedIn);
    }
    get accessToken() {
        return this.cookieService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].cookie.accessToken);
    }
    // @ts-ignore
    set accessToken(value) {
        this.cookieService.set(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].cookie.accessToken, value);
    }
    get twoFactorVerified() {
        return this.cookieService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].cookie.twoFactorVerified);
    }
    // @ts-ignore
    set twoFactorVerified(value) {
        this.cookieService.set(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].cookie.twoFactorVerified, value);
    }
    get isLoggedIn() {
        return Boolean(this.accessToken);
    }
    login(payload) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api}/auth/login`;
        return this.http.post(url, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            this.authenticateUser(res.accessToken);
        }));
    }
    register(payload) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api}/auth/register`;
        return this.http.post(url, payload);
    }
    resetPassword(resetPasswordInfo) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api}/auth/reset-password`;
        return this.http.post(url, resetPasswordInfo);
    }
    changePassword(payload) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api}/auth/change-password`;
        return this.http.post(url, payload);
    }
    setUser(user) {
        this.user = user;
        this.user$.next(this.user);
    }
    setFromAuth(value) {
        this.fromAuth = value;
        this.fromAuth$.next(this.fromAuth);
    }
    setFromLogout(value) {
        this.fromLogout = value;
        this.fromLogout$.next(this.fromLogout);
    }
    authenticateUser(token) {
        this.accessToken = token;
        this.isLoggedIn$.next(this.isLoggedIn);
        const user = this.decodeToken();
        user.updatedAt = new Date().toISOString();
        this.setUser(user);
    }
    decodeToken() {
        return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(this.accessToken);
    }
    getProfile() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api}/auth/profile`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            if (res.accessToken) {
                this.setUser(Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(res.accessToken));
            }
        }));
    }
    activeAccount() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api}/auth/active-account`;
        return this.http.get(url);
    }
    navigateByUserRole(role) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!role) {
                const token = yield this.decodeToken();
                role = token.role;
            }
            if (role === _models_auth__WEBPACK_IMPORTED_MODULE_4__["UserRole"].User) {
                // this.router.navigate([ROUTES.my.root, ROUTES.my.dashboard]).then(() => {
                //   this.scrollToService.scrollTo({ target: ScrollPosition.Root });
                // });
            }
            else {
                yield this.logout();
            }
        });
    }
    logout(callApi = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (callApi) {
                const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api}/auth/logout`;
                yield this.http.get(url).toPromise();
            }
            this.accessToken = '';
            this.twoFactorVerified = false;
            this.isLoggedIn$.next(this.isLoggedIn);
            // @ts-ignore
            this.user = null;
            this.user$.next(this.user);
            // this.router.navigate([ROUTES.auth.login]).then(() => {
            //   this.setFromLogout(true);
            //   this.scrollToService.scrollTo({ target: ScrollPosition.Root });
            // });
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_10__["ScrollToService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_toastr_service__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9ugw":
/*!*************************************************************!*\
  !*** ./src/app/landing/home/about-us/about-us.component.ts ***!
  \*************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




function AboutUsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazyLoad", item_r1.icon)("alt", item_r1.altTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, item_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, item_r1.description));
} }
class AboutUsComponent {
    constructor() {
        this.aboutUsItems = [
            {
                icon: 'assets/images/landing-pages/home/free-market-rates.png',
                altTag: 'Free market rates',
                title: 'landing.home.about-us.free-market-rates',
                description: 'Send money across borders at real exchange rates without restrictions.'
            },
            {
                icon: 'assets/images/landing-pages/home/safe-and-reliable.png',
                altTag: 'Safe and reliable',
                title: 'landing.home.about-us.safe-and-reliable',
                description: 'Escrowed transactions and verified experienced peers.'
            },
            {
                icon: 'assets/images/landing-pages/home/info.png',
                altTag: 'Available 24/7',
                title: 'landing.home.about-us.available-24-7',
                description: 'Our support team and peer network at your service.'
            }
        ];
    }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 4, vars: 1, consts: [[1, "mt-30"], [1, "container"], [1, "row"], ["class", "col-12 col-lg-4", 4, "ngFor", "ngForOf"], [1, "col-12", "col-lg-4"], [1, "d-flex", "flex-column", "align-items-center"], [1, "d-flex", "justify-content-center"], ["defaultImage", "assets/images/placeholder.png", "loading", "lazy", 1, "width-70", 3, "lazyLoad", "alt"], [1, "d-flex", "justify-content-center", "mb-20"], [1, "fw-normal", "fs-5", "text-info"], [1, "text-info", "text-center", "width-300", "mb-20"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutUsComponent_div_3_Template, 11, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aboutUsItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImageDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "A7B1":
/*!******************************************!*\
  !*** ./src/app/core/constants/routes.ts ***!
  \******************************************/
/*! exports provided: ROUTES, toAbsolutePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toAbsolutePath", function() { return toAbsolutePath; });
const ROUTES = {
    lang: {
        en: 'en',
        kr: 'kr'
    },
    auth: {
        login: 'login',
        signUp: 'sign-up',
        completeProfile: 'complete-profile'
    },
    landingPages: {
        storeDirectory: 'store-directory',
        virtualCard: 'virtual-card',
        rates: 'rates',
        blog: 'blog',
    },
    client: {
        home: 'home',
        add: 'add',
        withdraw: 'withdraw',
        transfers: 'transfers',
        sendRequest: 'send-request',
        virtualCards: 'virtual-cards',
        activity: 'activity',
        peerTransfers: 'peer-transfers',
        crypto: 'crypto',
        inviteFriends: 'invite-friends',
        storeDirectory: 'store-directory',
        settings: 'settings',
        help: 'help'
    },
};
function toAbsolutePath(path) {
    // this function accepts string or string array
    // CAUTION! - be aware, send only valid array or string
    if (typeof path === 'string') {
        return '/' + path;
    }
    else {
        return '/' + path.join('/');
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api: 'http://192.168.108.110:3000/api',
    cookie: {
        accessToken: 'access-token',
        resetPassword: 'reset-password',
        twoFactorVerified: 'two-factor-verified',
        languageCode: 'languageCode',
        expireHour: 3
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CpPR":
/*!***********************************************!*\
  !*** ./src/app/ui-kit/icon/icon.component.ts ***!
  \***********************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_color_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/color.pipe */ "sVhU");



function IconComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mask", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "use", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "use", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r0.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r0.color));
} }
function IconComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r1.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r1.color));
} }
function IconComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r2.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r2.color));
} }
function IconComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r3.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r3.hovered ? ctx_r3.hoverColor : ctx_r3.color));
} }
function IconComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r4.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r4.color));
} }
function IconComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r5.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r5.color));
} }
function IconComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r6.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r6.color));
} }
function IconComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r7.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r7.color));
} }
function IconComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "polygon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r8.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r8.color));
} }
function IconComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r9.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r9.hovered ? ctx_r9.hoverColor : ctx_r9.color));
} }
function IconComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r10.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r10.hovered ? ctx_r10.hoverColor : ctx_r10.color));
} }
function IconComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r11.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r11.color));
} }
function IconComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r12.width);
} }
function IconComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "circle", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "circle", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "circle", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r13.width);
} }
function IconComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r14.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r14.hovered ? ctx_r14.hoverColor : ctx_r14.color));
} }
function IconComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r15.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r15.hovered ? ctx_r15.hoverColor : ctx_r15.color));
} }
function IconComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r16.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r16.hovered ? ctx_r16.hoverColor : ctx_r16.color));
} }
function IconComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r17.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r17.hovered ? ctx_r17.hoverColor : ctx_r17.color));
} }
function IconComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r18.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r18.hovered ? ctx_r18.hoverColor : ctx_r18.color));
} }
function IconComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r19.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r19.hovered ? ctx_r19.hoverColor : ctx_r19.color));
} }
function IconComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r20.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r20.hovered ? ctx_r20.hoverColor : ctx_r20.color));
} }
function IconComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r21.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r21.hovered ? ctx_r21.hoverColor : ctx_r21.color));
} }
function IconComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r22.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r22.hovered ? ctx_r22.hoverColor : ctx_r22.color));
} }
function IconComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r23.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r23.hovered ? ctx_r23.hoverColor : ctx_r23.color));
} }
function IconComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r24.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r24.hovered ? ctx_r24.hoverColor : ctx_r24.color));
} }
function IconComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r25.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r25.hovered ? ctx_r25.hoverColor : ctx_r25.color));
} }
function IconComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polygon", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r26.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r26.hovered ? ctx_r26.hoverColor : ctx_r26.color));
} }
function IconComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r27.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r27.hovered ? ctx_r27.hoverColor : ctx_r27.color));
} }
function IconComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r28.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r28.hovered ? ctx_r28.hoverColor : ctx_r28.color));
} }
function IconComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r29.width)("fill", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r29.hovered ? ctx_r29.hoverColor : ctx_r29.color));
} }
function IconComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r30.width);
} }
class IconComponent {
    constructor() {
        this.icon = '';
        this.width = 24;
        this.height = 24;
        this.color = 'white';
        this.hoverColor = 'white';
        this.hovered = false;
    }
    ngOnInit() {
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["app-icon"]], inputs: { icon: "icon", width: "width", height: "height", color: "color", hoverColor: "hoverColor" }, decls: 33, vars: 36, consts: [[3, "mouseover", "mouseout"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["viewBox", "0 0 12 12", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["d", "M12,4 C12.4909198,4 12.8888889,4.39796911 12.8888889,4.88888889 L12.8888889,4.88888889 L12.888,11.111 L19.1111111,11.1111111 C19.5642678,11.1111111 19.938224,11.4502091 19.9930743,11.8884997 L20,12 C20,12.4909198 19.6020309,12.8888889 19.1111111,12.8888889 L19.1111111,12.8888889 L12.888,12.888 L12.8888889,19.1111111 C12.8888889,19.5642678 12.5497909,19.938224 12.1115003,19.9930743 L12,20 C11.5090802,20 11.1111111,19.6020309 11.1111111,19.1111111 L11.1111111,19.1111111 L11.111,12.888 L4.88888889,12.8888889 C4.43573217,12.8888889 4.06177602,12.5497909 4.00692571,12.1115003 L4,12 C4,11.5090802 4.39796911,11.1111111 4.88888889,11.1111111 L4.88888889,11.1111111 L11.111,11.111 L11.1111111,4.88888889 C11.1111111,4.43573217 11.4502091,4.06177602 11.8884997,4.00692571 Z", "id", "path-1"], ["id", "Dashboard---ClientSide", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "ClientSide---CreditCardPayment", "transform", "translate(-907.000000, -156.000000)"], ["id", "close", "transform", "translate(900.000000, 149.000000)"], ["id", "dark-bg", "transform", "translate(0.942248, 0.942248)"], ["id", "mask-2", "fill", "white"], [0, "xlink", "href", "#path-1"], ["id", "close", "fill-rule", "nonzero", "transform", "translate(12.000000, 12.000000) rotate(-315.000000) translate(-12.000000, -12.000000) ", 0, "xlink", "href", "#path-1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24"], ["d", "M8 15.24v-2L12.24 9l4.24 4.24v2H8z"], ["d", "M16 9v2l-4 4.24L8 11V9h8z"], ["viewBox", "0 0 20 20"], ["d", "M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"], ["viewBox", "0 0 24 24"], ["d", "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"], ["d", "M11.3 17.1c-2-.2-3.2-1.4-3.3-3.1h1.5c.1 1 .9 1.8 2.5 1.8 1.5 0 2.4-.6 2.4-1.5 0-2.5-6.3-.4-6.3-4.5 0-1.5 1.2-2.6 3.2-2.8V5.1h1.3v1.8c2 .2 3 1.4 3.2 3.1h-1.5c-.1-1-.8-1.8-2.4-1.8-1.5 0-2.2.7-2.2 1.5 0 2.5 6.3.4 6.3 4.5 0 1.6-1.3 2.7-3.3 2.9v1.8h-1.3v-1.8z"], ["d", "M15.2 22.7l-1.4-1.4 3.3-3.3-3.3-3.3 1.4-1.4 4.7 4.7z"], ["d", "M18 19h-8c-3.3 0-6-2.7-6-6h2c0 2.2 1.8 4 4 4h8v2zM8.8 10.7L4.1 6l4.7-4.7 1.4 1.4L6.9 6l3.3 3.3z"], ["d", "M20 11h-2c0-2.2-1.8-4-4-4H6V5h8c3.3 0 6 2.7 6 6z"], ["d", "M17 23H7c-1.7 0-3-1.3-3-3V4c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v16c0 1.7-1.3 3-3 3zM7 3c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1H7z"], ["cx", "12", "cy", "18", "r", "1"], ["d", "M14 4h-4c-.6 0-1-.4-1-1s.4-1 1-1h4c.6 0 1 .4 1 1s-.4 1-1 1z"], ["d", "M12,24c-0.2,0-0.3,0-0.5-0.1l-9-5.3C2.2,18.3,2,18,2,17.7v-4.1c0-0.6,0.4-1,1-1s1,0.4,1,1v3.6l8.5,5c0.5,0.3,0.6,0.9,0.4,1.4C12.7,23.8,12.3,24,12,24z"], ["d", "M12,24c-0.2,0-0.3,0-0.5-0.1C11.2,23.7,11,23.3,11,23V13c0-0.6,0.4-1,1-1s1,0.4,1,1v8.2l7-4.1V7.5c0-0.6,0.4-1,1-1s1,0.4,1,1v10.1c0,0.4-0.2,0.7-0.5,0.9l-9,5.3C12.4,23.9,12.2,24,12,24z"], ["d", "M12,13.5c-0.2,0-0.3,0-0.5-0.1l-9-5.3C2.2,7.9,2,7.6,2,7.2c0-0.4,0.2-0.7,0.5-0.9l9-5.2c0.3-0.2,0.7-0.2,1,0l9,5.2C21.8,6.5,22,6.9,22,7.2s-0.2,0.7-0.5,0.9l-9,5.3C12.3,13.5,12.2,13.5,12,13.5z M5,7.2l7,4.1l7-4.1l-7-4.1L5,7.2z"], ["d", "M12,23.2l-0.6-0.4c-1-0.6-9.4-6.4-9.4-11.3V5.5L8.7,1l0.6,0.4c1.7,1.1,3.9,1.1,5.5,0L15.3,1L22,5.5v6.1 c0,4.8-8.5,10.6-9.4,11.3L12,23.2z M4,6.5v5c0,2.7,4.7,6.9,8,9.2c2.7-1.9,8-6.3,8-9.2v-5l-4.7-3.1c-2.1,1.1-4.5,1.1-6.6,0L4,6.5z"], ["points", "11,15.4 7.3,11.7 8.7,10.3 11,12.6 16.3,7.3 17.7,8.7"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M13.03 15.652l1.712 1.71c-.73.219-1.481.329-2.242.329a7.92 7.92 0 01-5.576-2.299L3 11.505l2.913-2.948 2.393 2.378c-.02.18-.02.35 0 .53a4.23 4.23 0 004.194 4.227c.18 0 .35-.01.53-.04zM22 11.505l-3.934-3.997A7.842 7.842 0 0012.5 5.239c-.76 0-1.511.11-2.242.33l1.712 1.699c.18-.01.35-.01.53 0a4.232 4.232 0 014.235 4.227c0 .78-.21 1.539-.621 2.199L6.434 4 5.022 5.42l11.292 11.272.71.71L18.638 19l1.411-1.41-2.102-2.088L22 11.505z"], ["d", "M18.076 7.395c-3.083-3.193-8.059-3.193-11.142 0L3 11.44l3.934 4.16c3.073 3.193 8.049 3.203 11.132.01l.01-.01L22 11.44l-3.924-4.045zm-1.422 6.697a5.724 5.724 0 01-8.308 0L5.833 11.44l2.513-2.579c2.302-2.371 6.006-2.371 8.308 0l2.513 2.58-2.513 2.651z"], ["d", "M14.732 11.44c.02 1.28-.96 2.34-2.192 2.361-1.231.02-2.252-.998-2.272-2.278-.02-1.279.96-2.34 2.192-2.36h.04v2.277h2.232z"], ["d", "M16.523 2h-2.7c-2.5-.1-4.7 1.8-4.8 4.3V9h-2.6c-.2 0-.4.2-.4.4v3.1c0 .2.2.4.4.4h2.6v8.6c0 .2.2.4.4.4h3.1c.2 0 .4-.2.4-.4V13h3.5c.3 0 .5-.2.5-.5v-3c0-.3-.2-.5-.5-.5h-3.5V7.5c0-.9.3-1.5 1.6-1.5h2c.2 0 .4-.2.4-.4V2.3c.1-.1-.1-.3-.4-.3z"], ["viewBox", "0 0 48 48"], ["fill", "#FFC107", "d", "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"], ["fill", "#FF3D00", "d", "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"], ["fill", "#4CAF50", "d", "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"], ["fill", "#1976D2", "d", "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 512 512", "viewBox", "0 0 512 512"], ["d", "m246.23 426.666h-195.039c-18.851 0-34.132-15.282-34.132-34.132v-34.134h261.957z", "fill", "#d3dcfb"], ["d", "m460.825 153.6v143.398 95.534h-409.634c-18.851 0-34.132-15.282-34.132-34.133v-204.799l238.95-85.334z", "fill", "#ebf5fc"], ["fill", "#3c58a0"], ["d", "m77.336 221.867h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.582 8-8 8z"], ["d", "m145.603 221.867h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.582 8-8 8z"], ["d", "m213.869 221.867h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.581 8-8 8z"], ["d", "m282.136 221.867h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.582 8-8 8z"], ["d", "m350.391 221.867h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.581 8-8 8z"], ["d", "m418.658 221.867h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.582 8-8 8z"], ["d", "m77.336 290.133h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.419-3.582 8-8 8z"], ["d", "m145.603 290.133h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.419-3.582 8-8 8z"], ["d", "m213.869 290.133h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.419-3.581 8-8 8z"], ["d", "m290.136 290.133v-25.6c0-4.713-3.82-8.533-8.533-8.533h-17.067c-4.713 0-8.533 3.82-8.533 8.533v17.067c0 4.713 3.821 8.533 8.533 8.533z"], ["d", "m77.336 358.4h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.582 8-8 8z"], ["d", "m145.603 358.4h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.582 8-8 8z"], ["d", "m213.869 358.4h-18.133c-4.418 0-8-3.582-8-8v-18.133c0-4.418 3.582-8 8-8h18.133c4.418 0 8 3.582 8 8v18.133c0 4.418-3.581 8-8 8z"], ["d", "m418.417 187.733h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.219 4.178 5.219 7.662v17.65c0 3.484-2.165 6.456-5.219 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.65c-.001-4.552-3.691-8.242-8.242-8.242z", "fill", "#2a428c"], ["d", "m350.15 187.733h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.219 4.178 5.219 7.662v17.65c0 3.484-2.165 6.456-5.219 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.241-3.69 8.241-8.241v-17.65c0-4.552-3.689-8.242-8.241-8.242z", "fill", "#2a428c"], ["d", "m281.895 187.733h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.65c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.65c-.001-4.552-3.691-8.242-8.242-8.242z", "fill", "#2a428c"], ["d", "m213.628 187.733h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.65c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.65c-.001-4.552-3.69-8.242-8.242-8.242z", "fill", "#2a428c"], ["d", "m145.361 187.733h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.219 4.178 5.219 7.662v17.65c0 3.484-2.165 6.456-5.219 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.65c0-4.552-3.69-8.242-8.242-8.242z", "fill", "#2a428c"], ["d", "m77.095 187.733h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.65c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.65c-.001-4.552-3.691-8.242-8.242-8.242z", "fill", "#2a428c"], ["d", "m77.095 256h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.651c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.651c-.001-4.552-3.691-8.242-8.242-8.242z", "fill", "#2a428c"], ["d", "m77.095 324.267h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.651c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.651c-.001-4.553-3.691-8.242-8.242-8.242z", "fill", "#2a428c"], ["d", "m145.361 256h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.219 4.178 5.219 7.662v17.651c0 3.484-2.165 6.456-5.219 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.651c0-4.552-3.69-8.242-8.242-8.242z", "fill", "#2a428c"], ["d", "m145.361 324.267h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.219 4.178 5.219 7.662v17.651c0 3.484-2.165 6.456-5.219 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.651c0-4.553-3.69-8.242-8.242-8.242z", "fill", "#2a428c"], ["d", "m213.628 256h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.651c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.651c-.001-4.552-3.69-8.242-8.242-8.242z", "fill", "#2a428c"], ["d", "m290.136 290.133v-25.892c0-4.552-3.69-8.241-8.242-8.241h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.651c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h25.892z", "fill", "#2a428c"], ["d", "m213.628 324.267h-17.65c-1.068 0-2.085.21-3.022.579 3.055 1.206 5.22 4.178 5.22 7.662v17.651c0 3.484-2.165 6.456-5.22 7.662.937.37 1.954.58 3.022.58h17.65c4.552 0 8.242-3.69 8.242-8.241v-17.651c-.001-4.553-3.69-8.242-8.242-8.242z", "fill", "#2a428c"], ["d", "m437.114 143.721v153.277 95.535h23.711v-95.535-143.398z", "fill", "#d3dcfb"], ["d", "m460.825 153.6v-85.334c0-18.851-15.282-34.132-34.132-34.132h-375.502c-18.851 0-34.132 15.281-34.132 34.132v85.334z", "fill", "#ff4155"], ["d", "m124.609 75.993h-22.217c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h22.217c4.268 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z", "fill", "#e80054"], ["d", "m179.191 75.993h-22.217c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h22.217c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z", "fill", "#e80054"], ["d", "m320.887 75.993h-22.218c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h22.218c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z", "fill", "#e80054"], ["d", "m375.47 75.993h-22.218c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h22.218c4.268 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z", "fill", "#e80054"], ["d", "m162.125 64c0 11.782-9.551 21.333-21.333 21.333s-21.333-9.551-21.333-21.333v-42.667c-.001-11.782 9.55-21.333 21.332-21.333s21.333 9.551 21.333 21.333v42.667z", "fill", "#ebf5fc"], ["d", "m358.403 64c0 11.782-9.551 21.333-21.333 21.333s-21.334-9.551-21.334-21.333v-42.667c0-11.782 9.551-21.333 21.333-21.333s21.333 9.551 21.333 21.333v42.667z", "fill", "#ebf5fc"], ["d", "m337.069 0c-4.38 0-8.448 1.324-11.836 3.588 5.725 3.826 9.498 10.343 9.498 17.746v42.666c0 7.402-3.773 13.92-9.498 17.746 3.387 2.263 7.456 3.588 11.836 3.588 11.782 0 21.333-9.551 21.333-21.333v-42.668c.001-11.782-9.55-21.333-21.333-21.333z", "fill", "#d3dcfb"], ["d", "m140.791 0c-4.38 0-8.448 1.324-11.836 3.588 5.725 3.826 9.498 10.343 9.498 17.746v42.666c0 7.402-3.773 13.92-9.498 17.746 3.387 2.263 7.456 3.588 11.836 3.588 11.782 0 21.333-9.551 21.333-21.333v-42.668c.001-11.782-9.55-21.333-21.333-21.333z", "fill", "#d3dcfb"], ["d", "m426.693 34.133h-23.703c18.851 0 34.132 15.281 34.132 34.132v85.335h23.702v-85.334c.001-18.851-15.281-34.133-34.131-34.133z", "fill", "#e80054"], ["d", "m17.058 111.74h443.767v15.453h-443.767z", "fill", "#e80054"], ["cx", "366.942", "cy", "384", "fill", "#4fabf7", "r", "128"], ["cx", "366.942", "cy", "384", "fill", "#ebf5fc", "r", "93.867"], ["d", "m366.942 374.659c-4.268 0-7.726-3.459-7.726-7.726v-42.667c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v42.667c0 4.267-3.459 7.726-7.726 7.726z", "fill", "#3c58a0"], ["d", "m409.609 391.726h-25.601c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h25.601c4.268 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z", "fill", "#3c58a0"], ["d", "m366.942 256c-3.995 0-7.945.193-11.847.551 65.137 5.979 116.152 60.752 116.152 127.449s-51.016 121.47-116.153 127.449c3.902.358 7.852.551 11.847.551 70.692 0 128-57.308 128-128s-57.307-128-127.999-128z", "fill", "#1886ea"], ["d", "m366.942 290.133c-4.01 0-7.961.253-11.839.741 46.252 5.821 82.028 45.295 82.028 93.126s-35.776 87.305-82.028 93.126c3.878.488 7.829.741 11.839.741 51.841 0 93.867-42.026 93.867-93.867s-42.026-93.867-93.867-93.867z", "fill", "#d3dcfb"], ["cx", "366.942", "cy", "384", "fill", "#ffdd40", "r", "17.067"], ["d", "M21.09,9.26,12.67,1.61a1,1,0,0,0-1.34,0L2.91,9.26A1,1,0,0,0,3.59,11H5v9a2,2,0,0,0,2,2h4V17.82a3,3,0,1,1,2,0V22h4a2,2,0,0,0,2-2V11h1.41A1,1,0,0,0,21.09,9.26Z"], ["d", "M16.2645833,13.3367994 L16.2645833,20.1051027 C16.2645833,20.1839634 16.2610633,20.2525379 16.2487433,20.333113 C16.1889033,20.7051296 15.8545033,20.9948569 15.4690633,21 C15.2701833,21.0017144 15.0730633,21 14.8741833,21 L14.8741833,21 L9.45514334,21 C9.08730334,20.9948569 8.75114334,20.7325594 8.66842334,20.3811151 C8.62618334,20.2062501 8.64378334,20.0142415 8.64378334,19.8376622 L8.64378334,19.8376622 L8.64378334,13.3367994 L16.2645833,13.3367994 Z M14.411253,4 C17.1377457,4 19.3479627,6.15506931 19.3479627,8.81327569 C19.3479627,9.29777806 19.2710405,9.76387579 19.1331231,10.204322 C19.0960103,10.3231306 19.1688057,10.4405025 19.2839745,10.4714678 L19.3447773,10.4793565 C21.3650482,10.4793565 23,12.0735441 23,14.0400808 C23,15.9078191 21.5242639,17.4361094 19.6480822,17.5852752 L19.45261,17.5957439 L19.3728563,17.5996549 L19.3006532,17.5985046 L17.152,17.599 L17.152454,14.0874296 L17.201555,14.0874296 C17.642524,14.0874296 18,13.7299536 18,13.2889846 C18,12.8819363 17.6954051,12.54603 17.3017103,12.4967607 L17.201555,12.4905396 L7.79844498,12.4905396 C7.35747599,12.4905396 7,12.8480156 7,13.2889846 C7,13.6960329 7.30459493,14.0319393 7.69828973,14.0812086 L7.79844498,14.0874296 L7.8312932,14.0874296 L7.831,17.603 L4.80378095,17.604141 L4.71185259,17.604141 C2.6600813,17.5935583 1,15.739405 1,13.7365192 C1,12.0811361 2.13389534,10.6849134 3.68555402,10.243892 C3.83680299,10.2009862 3.93413559,10.065597 3.9335457,9.90927251 C3.9335457,8.06742731 5.464912,6.57423518 7.35387239,6.57423518 C7.99036863,6.57423518 8.58510034,6.74516835 9.09465127,7.0411381 C9.39821101,7.21747764 9.78706951,7.09922777 9.93607688,6.78669384 C10.7202827,5.14154832 12.4280275,4 14.411253,4 Z", "id", "Combined-Shape"], ["d", "M10.1220388,16.1220388 C10.2666775,15.9774002 10.4911978,15.9613293 10.6535879,16.073826 L10.7112945,16.1220388 L12.5002985,17.9109826 L14.2887055,16.1220388 C14.4333441,15.9774002 14.6578645,15.9613293 14.8202546,16.073826 L14.8779612,16.1220388 C15.0225998,16.2666775 15.0386707,16.4911978 14.926174,16.6535879 L14.8779612,16.7112945 L12.7946278,18.7946278 C12.6499892,18.9392665 12.4254689,18.9553374 12.2630787,18.8428407 L12.2053722,18.7946278 L10.1220388,16.7112945 C9.95932039,16.548576 9.95932039,16.2847573 10.1220388,16.1220388 Z", "id", "Path-10", "fill", "#FFFFFF", "fill-rule", "evenodd", "transform", "translate(12.500000, 17.458333) rotate(-180.000000) translate(-12.500000, -17.458333) "], ["id", "Rectangle", "fill-opacity", "0", "x", "0", "y", "0", "width", "24", "height", "24"], ["d", "M15.0208555,4 C17.8712796,4 20.181961,6.253027 20.181961,9.03206095 C20.181961,9.53858616 20.1015423,10.0258701 19.957356,10.4863367 C19.9177479,10.6131333 19.9978814,10.7383648 20.1226465,10.7675303 L20.1786308,10.7738727 C22.2907322,10.7738727 24,12.4405234 24,14.4964481 C24,16.4512556 22.4537508,18.0503957 20.4891752,18.2033027 L20.291365,18.2137322 L17.0716225,18.217821 L16.264,18.217 L16.2645833,20.1051027 C16.2645833,20.1839634 16.2610633,20.2525379 16.2487433,20.333113 C16.1943433,20.6713099 15.9130342,20.9414991 15.57275,20.9916935 L15.4690633,21 L9.45514334,21 C9.08730334,20.9948569 8.75114334,20.7325594 8.66842334,20.3811151 C8.64730334,20.2936826 8.64114334,20.2019642 8.64026334,20.1100315 L8.64378334,19.8376622 L8.643,18.222 L4.88057316,18.2225111 C2.80257184,18.2117931 1.10887112,16.3922842 1.00504412,14.3748842 L1,14.1790882 C1,12.4484604 2.18543604,10.9887731 3.80762466,10.5277053 C3.96574858,10.4828492 4.06750539,10.3413059 4.06688868,10.1778758 C4.06688868,8.25231037 5.66786254,6.69124587 7.64268477,6.69124587 C8.30811266,6.69124587 8.92987762,6.86994873 9.46258996,7.17937165 C9.77994787,7.36372662 10.1864818,7.24010176 10.3422622,6.91336174 C11.1621138,5.19343688 12.9474833,4 15.0208555,4 Z M15.264,14.454 L9.643,14.454 L9.641,20 L15.264,20 L15.264,14.454 Z", "id", "path-1"], ["d", "M10.1220388,16.1220388 C10.2666775,15.9774002 10.4911978,15.9613293 10.6535879,16.073826 L10.7112945,16.1220388 L12.5002985,17.9109826 L14.2887055,16.1220388 C14.4333441,15.9774002 14.6578645,15.9613293 14.8202546,16.073826 L14.8779612,16.1220388 C15.0225998,16.2666775 15.0386707,16.4911978 14.926174,16.6535879 L14.8779612,16.7112945 L12.7946278,18.7946278 C12.6499892,18.9392665 12.4254689,18.9553374 12.2630787,18.8428407 L12.2053722,18.7946278 L10.1220388,16.7112945 C9.95932039,16.548576 9.95932039,16.2847573 10.1220388,16.1220388 Z", "id", "path-2", "transform", "translate(12.500000, 17.458333) rotate(-360.000000) translate(-12.500000, -17.458333) "], ["d", "M4,10H2V9A4,4,0,0,1,6,5H17.59l-2.3-2.29,1.42-1.42L22.41,7H6A2,2,0,0,0,4,9Z"], ["d", "M7.29,22.71,1.59,17H18a2,2,0,0,0,2-2V14h2v1a4,4,0,0,1-4,4H6.41l2.3,2.29Z"], ["cx", "12", "cy", "12", "r", "2"], ["d", "M5,5.50012348 C5,5.42938411 5.01501031,5.35944988 5.04403925,5.29494114 C5.15735832,5.04312097 5.45336217,4.93084365 5.70518234,5.04416272 L5.70518234,5.04416272 L19.545552,11.2723291 C19.6569791,11.3224713 19.7461882,11.4116804 19.7963304,11.5231075 C19.9096495,11.7749277 19.7973722,12.0709315 19.545552,12.1842506 L19.545552,12.1842506 L5.70518234,18.4124169 C5.64067359,18.4414459 5.57073936,18.4564562 5.5,18.4564562 C5.22385763,18.4564562 5,18.2325985 5,17.9564562 L5,17.9564562 L5,12.8951997 L17.4470385,11.7282898 L5,10.56138 Z"], ["d", "m23.0625,10.3375l0,6.4c0,1.70637 -1.31174,3.1008 -2.96451,3.19493l-0.17835,0.00507l-15.71428,0c-1.6759,0 -3.04543,-1.33559 -3.13789,-3.01841l-0.00497,-0.18159l0,-6.4l22,0zm-13.045,4.47075l-5.81,0c-0.52191,0 -0.945,0.4231 -0.945,0.945l0,0l0,0.96715c0,0.52191 0.42309,0.945 0.945,0.945l0,0l5.81,0c0.52191,0 0.945,-0.42309 0.945,-0.945l0,0l0,-0.96715c0,-0.5219 -0.42309,-0.945 -0.945,-0.945l0,0zm9.90214,-10.87075c1.6759,0 3.04543,1.33559 3.13789,3.01841l0.00497,0.18159l0,0.8l-22,0l0,-0.8c0,-1.70637 1.31174,-3.1008 2.96451,-3.19493l0.17835,-0.00507l15.71428,0z"], ["d", "M18.71,2H5.29A2.1,2.1,0,0,0,3,3.82V20.18A2.1,2.1,0,0,0,5.29,22H18.71A2.1,2.1,0,0,0,21,20.18V3.82A2.1,2.1,0,0,0,18.71,2ZM17,17H7V15H17Zm0-4H7V11H17Zm0-4H7V7H17Z"], ["cx", "15.5", "cy", "15.5", "r", "2.5"], ["cx", "15.5", "cy", "8.5", "r", "2.5"], ["cx", "8.5", "cy", "15.5", "r", "2.5"], ["cx", "8.5", "cy", "8.5", "r", "2.5"], ["d", "M12,23a11,11,0,1,1,.06,0ZM12,3a9,9,0,1,0,.07,0Z"], ["d", "M20,15.1V8.9A4,4,0,1,0,15,5a2,2,0,0,0,.1.8L8,9.4A3.76,3.76,0,0,0,5,8a4,4,0,0,0,0,8,3.76,3.76,0,0,0,3-1.4l7.1,3.5a2.74,2.74,0,0,0-.1.9,4,4,0,0,0,8,0A4.09,4.09,0,0,0,20,15.1Zm-4,1.3L8.9,12.9A2.74,2.74,0,0,0,9,12a2,2,0,0,0-.1-.8L16,7.6a3.76,3.76,0,0,0,2,1.2v6.3A3.85,3.85,0,0,0,16,16.4ZM19,3a2,2,0,1,1-1.8,2.9A3.09,3.09,0,0,1,17,5,2,2,0,0,1,19,3ZM5,14a2,2,0,1,1,1.8-2.9A3.09,3.09,0,0,1,7,12a3.09,3.09,0,0,1-.2.9A2,2,0,0,1,5,14Zm14,7a2,2,0,0,1-2-2,3.09,3.09,0,0,1,.2-.9A1.89,1.89,0,0,1,19,17a2,2,0,0,1,0,4Z"], ["d", "m20.58362,9.93469c0.65014,0 1.17718,0.52306 1.17718,1.18413l0,9.80435c0,1.30053 -1.04955,2.3548 -2.35473,2.3548l-8.94713,0l0,-9.24698l-4.10977,0l0,9.24698l-1.75503,0c-1.30049,0 -2.35474,-1.04702 -2.35474,-2.3548l0,-9.80435c0,-0.65398 0.52216,-1.18413 1.17719,-1.18413l17.16702,0z"], ["d", "m19.00777,5.62231c0,3.08776 -4.67199,3.0893 -4.67199,0c0,3.08726 -4.67291,3.09013 -4.67291,0c0,3.08767 -4.67065,3.08941 -4.67065,0c0,3.07646 -4.67291,3.09702 -4.67291,0l2.37916,-3.0477c0.79872,-1.02316 2.50266,-1.85259 3.80099,-1.85259l11.01935,0c1.3005,0 3.0006,0.83126 3.79407,1.85259l2.36779,3.0477c0,3.09126 -4.67291,3.08098 -4.67291,0z"], ["d", "M22.1,14.1c-0.1-0.1-0.3-0.1-0.4,0c-0.4,0.2-0.9,0.2-1.2-0.1c-0.4-0.3-0.5-0.8-0.4-1.2c0-0.1,0-0.3-0.1-0.4c-0.3-0.1-0.7-0.2-1.1-0.3c-0.1,0-0.3,0.1-0.3,0.2c-0.1,0.4-0.5,0.8-0.9,0.9c-0.5,0-0.9-0.2-1.1-0.6c-0.1-0.1-0.2-0.2-0.3-0.1c-0.4,0.1-0.7,0.3-1,0.6C15,13,15,13.2,15,13.3c0.2,0.4,0.2,0.9-0.1,1.2c-0.3,0.4-0.8,0.5-1.2,0.4c-0.1,0-0.3,0-0.4,0.1c-0.1,0.3-0.2,0.7-0.3,1.1c0,0.2,0.1,0.3,0.2,0.3c0.5,0.1,0.8,0.5,0.9,0.9c0,0.5-0.2,0.9-0.6,1.1c-0.1,0.1-0.2,0.2-0.1,0.3c0.1,0.4,0.3,0.7,0.6,1c0.1,0.1,0.3,0.1,0.4,0c0.4-0.2,0.9-0.2,1.2,0.1c0.4,0.3,0.5,0.8,0.4,1.2c0,0.1,0,0.3,0.1,0.4c0.3,0.1,0.7,0.3,1.1,0.3c0.1,0,0.3-0.1,0.3-0.2c0.1-0.4,0.5-0.8,0.9-0.9c0.5,0,0.9,0.2,1.1,0.6c0.1,0.1,0.2,0.2,0.3,0.1c0.2-0.1,0.4-0.1,0.5-0.2c0.2-0.1,0.3-0.2,0.5-0.3C21,21,21,20.8,21,20.7c-0.2-0.4-0.2-0.9,0.1-1.2c0.3-0.4,0.8-0.5,1.2-0.4c0.1,0,0.3,0,0.4-0.1c0.1-0.3,0.2-0.7,0.3-1.1c0-0.1-0.1-0.3-0.2-0.3c-0.5-0.1-0.8-0.5-0.9-0.9c0-0.5,0.2-0.9,0.6-1.1l0,0c0.1-0.1,0.2-0.2,0.1-0.3C22.5,14.7,22.3,14.4,22.1,14.1z M18.7,18.3c-0.7,0.4-1.6,0.1-2-0.6c-0.4-0.7-0.1-1.6,0.6-2c0.7-0.4,1.6-0.1,2,0.6C19.7,17,19.4,17.9,18.7,18.3z"], ["d", "M15,7.1c0-0.2-0.3-0.3-0.5-0.3c-0.7,0-1.2-0.4-1.5-0.9C12.7,5.2,13,4.5,13.4,4c0.1-0.1,0.2-0.4,0.1-0.5c-0.3-0.4-0.7-0.8-1.1-1.1c-0.1-0.1-0.4-0.1-0.5,0.1c-0.4,0.5-1.2,0.7-1.7,0.4C9.5,2.6,9.1,2,9.1,1.3c0-0.2-0.1-0.4-0.3-0.4c-0.5-0.1-1.1-0.1-1.6,0C7,0.9,6.9,1.1,6.9,1.3c0,0.7-0.3,1.3-0.9,1.5C5.3,3,4.6,2.8,4.2,2.4C4.1,2.2,3.9,2.2,3.7,2.3C3.3,2.6,2.9,3,2.5,3.4C2.4,3.6,2.4,3.8,2.6,4C3.1,4.4,3.3,5.1,3,5.7S2.1,6.7,1.5,6.7C1.3,6.7,1.1,6.8,1.1,7C1,7.5,1,8.1,1.1,8.6c0,0.2,0.3,0.3,0.5,0.3c0.6,0,1.2,0.3,1.5,0.9c0.3,0.6,0.1,1.3-0.4,1.7c-0.1,0.1-0.2,0.4-0.1,0.5c0.3,0.4,0.7,0.8,1.1,1.1c0.1,0.1,0.4,0.1,0.5-0.1c0.4-0.5,1.2-0.7,1.7-0.4c0.6,0.3,1,0.9,0.9,1.5c0,0.2,0.1,0.4,0.3,0.4c0.3,0,0.5,0.1,0.8,0.1c0.3,0,0.5,0,0.8-0.1c0.2,0,0.3-0.2,0.3-0.4c0-0.7,0.3-1.3,0.9-1.5c0.6-0.3,1.3-0.1,1.7,0.4c0.1,0.1,0.4,0.2,0.5,0.1c0.4-0.3,0.8-0.7,1.1-1.1c0.1-0.1,0.1-0.4-0.1-0.5c-0.5-0.5-0.7-1.1-0.4-1.7S13.8,9,14.4,9h0.1c0.2,0,0.4-0.1,0.4-0.3C15,8.1,15,7.6,15,7.1z M8,10c-1.1,0-2.1-1-2.1-2.1s1-2.1,2.1-2.1s2.1,1,2.1,2.1C10.1,9.1,9.1,10,8,10z"], ["x", "11", "y", "16", "width", "2", "height", "2"], ["d", "M12,6c-2.2,0-4,1.8-4,4h2c0-1.1,0.9-2,2-2s2,0.9,2,2c0,2-3,1.8-3,5h2c0-2.3,3-2.5,3-5C16,7.8,14.2,6,12,6z"], ["d", "M12,1C5.9,1,1,6,1,12s5,11,11,11s11-5,11-11C23,5.9,18.1,1,12,1L12,1z M12,21c-5,0-9-4.1-9-9c0-5,4.1-9,9-9c5,0,9,4.1,9,9C21,17,17,21,12,21L12,21z"], ["points", "17.7,6.3 16.3,7.7 19.6,11 10,11 10,13 19.6,13 16.3,16.3 17.7,17.7 23.4,12"], ["d", "M12,17c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V7c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v1h2V7c0-1.7-1.3-3-3-3H5C3.3,4,2,5.3,2,7v10c0,1.7,1.3,3,3,3h6c1.7,0,3-1.3,3-3v-1h-2V17z"], ["d", "M12,11A3,3,0,0,1,9,8V4a3,3,0,0,1,6,0V8A3,3,0,0,1,12,11Zm0-8a1,1,0,0,0-1,1V8a1,1,0,0,0,2,0V4A1,1,0,0,0,12,3Z"], ["d", "M12,21a26.27,26.27,0,0,1-2.87-.16,3,3,0,0,0,5.74,0A26.27,26.27,0,0,1,12,21Z"], ["d", "M18,10.25A6.17,6.17,0,0,0,12.18,4,6,6,0,0,0,6,10s-.9,5-2,5H4a1,1,0,0,0-1,1v1c0,1.66,4,3,9,3s9-1.34,9-3V16a1,1,0,0,0-1-1h0C18.9,15,18,10.25,18,10.25Z"], ["cx", "12", "cy", "5", "r", "2"], ["cx", "12", "cy", "19", "r", "2"], ["d", "M12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm1.012-16h-2.009v8h2.009V6zm-2.009 9.991h2.009V18h-2.009v-2.009z"], ["viewBox", "0 0 512 512", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0", "fill", "#ffcb5a"], ["d", "m437.023438 437.023438c-99.808594 99.808593-262.222657 99.808593-362.03125 0-99.808594-99.808594-99.808594-262.222657 0-362.03125zm0 0", "fill", "#fba61f"], ["d", "m256 176h64v-32h-48v-48h-32v50.273438c-27.519531 7.152343-48 32-48 61.726562 0 35.296875 28.703125 64 64 64 17.648438 0 32 14.351562 32 32s-14.351562 32-32 32h-64v32h48v48h32v-50.273438c27.519531-7.152343 48-32 48-61.726562 0-35.296875-28.703125-64-64-64-17.648438 0-32-14.351562-32-32s14.351562-32 32-32zm0 0", "fill", "#fff"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function IconComponent_Template_i_mouseover_0_listener() { return ctx.hovered = true; })("mouseout", function IconComponent_Template_i_mouseout_0_listener() { return ctx.hovered = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IconComponent_ng_container_2_Template, 12, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IconComponent_ng_container_3_Template, 4, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IconComponent_ng_container_4_Template, 4, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IconComponent_ng_container_5_Template, 4, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IconComponent_ng_container_6_Template, 5, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IconComponent_ng_container_7_Template, 6, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, IconComponent_ng_container_8_Template, 6, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IconComponent_ng_container_9_Template, 6, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IconComponent_ng_container_10_Template, 5, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, IconComponent_ng_container_11_Template, 4, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, IconComponent_ng_container_12_Template, 5, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, IconComponent_ng_container_13_Template, 4, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, IconComponent_ng_container_14_Template, 6, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, IconComponent_ng_container_15_Template, 62, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, IconComponent_ng_container_16_Template, 4, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, IconComponent_ng_container_17_Template, 5, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, IconComponent_ng_container_18_Template, 6, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, IconComponent_ng_container_19_Template, 6, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, IconComponent_ng_container_20_Template, 4, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, IconComponent_ng_container_21_Template, 4, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, IconComponent_ng_container_22_Template, 4, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, IconComponent_ng_container_23_Template, 8, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, IconComponent_ng_container_24_Template, 4, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, IconComponent_ng_container_25_Template, 5, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, IconComponent_ng_container_26_Template, 5, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, IconComponent_ng_container_27_Template, 6, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, IconComponent_ng_container_28_Template, 5, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, IconComponent_ng_container_29_Template, 6, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, IconComponent_ng_container_30_Template, 6, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, IconComponent_ng_container_31_Template, 4, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, IconComponent_ng_container_32_Template, 5, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("d-flex justify-content-center align-items-center width-", ctx.width, " height-", ctx.width, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "arrow-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "arrow-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "circle-clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "circle-dollar-symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "swap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "cubic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "guard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "eye-close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "eye-open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "cloud-add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "cloud-withdraw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "transfers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "virtual-cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "peer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "triangle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "bell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "circle-note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dollar");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]], pipes: [_pipes_color_pipe__WEBPACK_IMPORTED_MODULE_2__["ColorPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\ni[_ngcontent-%COMP%] {\n  display: flex;\n}\n\ni[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFBRTtFQUNFLFdBQUE7QUFFSiIsImZpbGUiOiJpY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBzdmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "EFK7":
/*!*************************************************************************************************************!*\
  !*** ./src/app/landing/home/receive-payments-for-online-work/receive-payments-for-online-work.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ReceivePaymentsForOnlineWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivePaymentsForOnlineWorkComponent", function() { return ReceivePaymentsForOnlineWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class ReceivePaymentsForOnlineWorkComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReceivePaymentsForOnlineWorkComponent.ɵfac = function ReceivePaymentsForOnlineWorkComponent_Factory(t) { return new (t || ReceivePaymentsForOnlineWorkComponent)(); };
ReceivePaymentsForOnlineWorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReceivePaymentsForOnlineWorkComponent, selectors: [["app-receive-payments-for-online-work"]], decls: 14, vars: 6, consts: [[1, "mt-50"], [1, "container"], [1, "row", "px-30", "px-lg-100", "flex-row-reverse"], [1, "col-12", "col-lg-6"], [1, "d-flex", "flex-column", "h-100", "justify-content-center", "ps-lg-50"], [1, "text-info", "mb-20"], [1, "d-flex"], [1, "text-info"], [1, "col-12", "col-lg-6", "mb-30"], ["defaultImage", "assets/images/placeholder.png", "lazyLoad", "assets/images/landing-pages/home/receive-payments-for-online-work.png", "alt", "Receive payments for online work", "loading", "lazy", 1, "image-fit"]], template: function ReceivePaymentsForOnlineWorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, "landing.home.receive-payments-for-online-work.root"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, "landing.home.receive-payments-for-online-work.description"));
    } }, directives: [ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__["LazyLoadImageDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNlaXZlLXBheW1lbnRzLWZvci1vbmxpbmUtd29yay5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "EjfW":
/*!********************************************!*\
  !*** ./src/app/ui-kit/icon/icon.module.ts ***!
  \********************************************/
/*! exports provided: IconModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconModule", function() { return IconModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/pipes.module */ "W9kA");
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.component */ "CpPR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class IconModule {
}
IconModule.ɵfac = function IconModule_Factory(t) { return new (t || IconModule)(); };
IconModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: IconModule });
IconModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](IconModule, { declarations: [_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"]], exports: [_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"]] }); })();


/***/ }),

/***/ "IzOu":
/*!*********************************************!*\
  !*** ./src/app/landing/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-starrating */ "oaav");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "qjTU");
/* harmony import */ var _your_digital_dollar_account_your_digital_dollar_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./your-digital-dollar-account/your-digital-dollar-account.component */ "nqvs");
/* harmony import */ var _global_info_global_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-info/global-info.component */ "0TzA");
/* harmony import */ var _brands_brands_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./brands/brands.component */ "ZzWQ");
/* harmony import */ var _save_in_dollars_save_in_dollars_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./save-in-dollars/save-in-dollars.component */ "K1Vz");
/* harmony import */ var _send_and_spend_globally_send_and_spend_globally_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./send-and-spend-globally/send-and-spend-globally.component */ "Wlgx");
/* harmony import */ var _receive_payments_for_online_work_receive_payments_for_online_work_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./receive-payments-for-online-work/receive-payments-for-online-work.component */ "EFK7");
/* harmony import */ var _touchless_mobile_payments_touchless_mobile_payments_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./touchless-mobile-payments/touchless-mobile-payments.component */ "kRyh");
/* harmony import */ var _buy_and_sell_cryptocurrencies_buy_and_sell_cryptocurrencies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./buy-and-sell-cryptocurrencies/buy-and-sell-cryptocurrencies.component */ "XUlV");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about-us/about-us.component */ "9ugw");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "3Vk1");
/* harmony import */ var _how_to_start_how_to_start_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./how-to-start/how-to-start.component */ "yZ6d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");




// injected home module directly to the app module to improve the TTFB
/*import { HomeRoutingModule } from './home-routing.module';*/













class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImageModule"],
            ng_starrating__WEBPACK_IMPORTED_MODULE_3__["RatingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _your_digital_dollar_account_your_digital_dollar_account_component__WEBPACK_IMPORTED_MODULE_5__["YourDigitalDollarAccountComponent"],
        _global_info_global_info_component__WEBPACK_IMPORTED_MODULE_6__["GlobalInfoComponent"],
        _brands_brands_component__WEBPACK_IMPORTED_MODULE_7__["BrandsComponent"],
        _save_in_dollars_save_in_dollars_component__WEBPACK_IMPORTED_MODULE_8__["SaveInDollarsComponent"],
        _send_and_spend_globally_send_and_spend_globally_component__WEBPACK_IMPORTED_MODULE_9__["SendAndSpendGloballyComponent"],
        _receive_payments_for_online_work_receive_payments_for_online_work_component__WEBPACK_IMPORTED_MODULE_10__["ReceivePaymentsForOnlineWorkComponent"],
        _touchless_mobile_payments_touchless_mobile_payments_component__WEBPACK_IMPORTED_MODULE_11__["TouchlessMobilePaymentsComponent"],
        _buy_and_sell_cryptocurrencies_buy_and_sell_cryptocurrencies_component__WEBPACK_IMPORTED_MODULE_12__["BuyAndSellCryptocurrenciesComponent"],
        _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__["AboutUsComponent"],
        _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_14__["TestimonialsComponent"],
        _how_to_start_how_to_start_component__WEBPACK_IMPORTED_MODULE_15__["HowToStartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImageModule"],
        ng_starrating__WEBPACK_IMPORTED_MODULE_3__["RatingModule"]], exports: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]] }); })();


/***/ }),

/***/ "K1Vz":
/*!***************************************************************************!*\
  !*** ./src/app/landing/home/save-in-dollars/save-in-dollars.component.ts ***!
  \***************************************************************************/
/*! exports provided: SaveInDollarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveInDollarsComponent", function() { return SaveInDollarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class SaveInDollarsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SaveInDollarsComponent.ɵfac = function SaveInDollarsComponent_Factory(t) { return new (t || SaveInDollarsComponent)(); };
SaveInDollarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SaveInDollarsComponent, selectors: [["app-save-in-dollars"]], decls: 14, vars: 6, consts: [[1, "mt-50"], [1, "container"], [1, "row", "px-30", "px-lg-100"], [1, "col-12", "col-lg-6", "mb-30"], ["defaultImage", "assets/images/placeholder.png", "lazyLoad", "assets/images/landing-pages/home/save-in-dollars.png", "alt", "Save in dolloars", "loading", "lazy", 1, "w-100"], [1, "col-12", "col-lg-6"], [1, "d-flex", "flex-column", "h-100", "justify-content-center", "ps-lg-50"], [1, "text-info", "mb-20"], [1, "d-flex"], [1, "text-info"]], template: function SaveInDollarsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 2, "landing.home.save-in-dollars.root"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 4, "landing.home.save-in-dollars.description"));
    } }, directives: [ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__["LazyLoadImageDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXZlLWluLWRvbGxhcnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "MTL8":
/*!*******************************************************************!*\
  !*** ./src/app/layout/landing-layout/landing-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingLayoutComponent", function() { return LandingLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "Qodh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "PEup");




class LandingLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingLayoutComponent.ɵfac = function LandingLayoutComponent_Factory(t) { return new (t || LandingLayoutComponent)(); };
LandingLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingLayoutComponent, selectors: [["app-landing-layout"]], decls: 5, vars: 0, consts: [[1, "d-flex", "flex-column", "absolute-fit-parent"], [1, "flex-grow-1"]], template: function LandingLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-landing-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-landing-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Me2A":
/*!**********************************************!*\
  !*** ./src/app/core/utils/translate.util.ts ***!
  \**********************************************/
/*! exports provided: httpTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpTranslateLoader", function() { return httpTranslateLoader; });
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");

function httpTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "PEup":
/*!******************************************************************!*\
  !*** ./src/app/layout/landing-layout/footer/footer.component.ts ***!
  \******************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





function FooterComponent_ng_container_19_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r4.label));
} }
function FooterComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FooterComponent_ng_container_19_a_5_Template, 3, 3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    const first_r2 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", first_r2 ? "me-lg-200 me-50" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, menuItem_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuItem_r1.menu);
} }
class FooterComponent {
    constructor() {
        this.menuItems = [
            {
                title: 'footer.landing.company.root',
                menu: [
                    { label: 'footer.landing.company.about-us', url: '' },
                    { label: 'footer.landing.company.jobs', url: '' },
                    { label: 'footer.landing.company.press', url: '' },
                    { label: 'footer.landing.company.partners', url: '' },
                ]
            },
            {
                title: 'footer.landing.help.root',
                menu: [
                    { label: 'footer.landing.help.blog', url: '' },
                    { label: 'footer.landing.help.faqs', url: '' },
                    { label: 'footer.landing.help.rates', url: '' },
                ]
            },
        ];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-landing-footer"]], decls: 24, vars: 13, consts: [[1, "bg-dark", "pt-50", "pb-10"], [1, "container", "px-40", "px-lg-0"], [1, "d-flex", "flex-column", "flex-lg-row", "justify-content-between"], [1, "d-flex", "flex-column", "mb-30"], ["routerLink", "/", 1, "mb-20"], ["defaultImage", "assets/images/placeholder.png", "lazyLoad", "assets/images/white-logo.png", "alt", "Airtm", "loading", "lazy", 1, "height-35"], [1, "text-white", "fw-bold", "font-13", "mb-10"], [1, "d-flex"], [1, "text-white", "font-13"], [1, "mx-5"], [4, "ngFor", "ngForOf"], [1, "mt-30"], [1, "font-13", "color-hit-gray"], [1, "d-flex", "flex-column", 3, "ngClass"], [1, "text-white", "fw-bold", "mb-15"], ["class", "text-white font-13 mb-5", 4, "ngFor", "ngForOf"], [1, "text-white", "font-13", "mb-5"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\uD83D\uDC99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FooterComponent_ng_container_19_Template, 6, 5, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, "footer.landing.terms-and-conditions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, "footer.landing.made-with"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 9, "footer.landing.in-mexico-city"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 11, "footer.landing.notice"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImageDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "QZC4":
/*!***************************************************!*\
  !*** ./src/app/ui-kit/toastr/toastr.component.ts ***!
  \***************************************************/
/*! exports provided: ToastrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrComponent", function() { return ToastrComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/toastr.service */ "nCHe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon/icon.component */ "CpPR");
/* harmony import */ var _toastr_color_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toastr-color.pipe */ "4fHp");








function ToastrComponent_div_1_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.title);
} }
function ToastrComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "toastrColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "toastrColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ToastrComponent_div_1_p_7_Template, 2, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToastrComponent_div_1_Template_app_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const item_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.close(item_r1, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "toastrColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fly_toastr", undefined)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 8, item_r1.type, "bg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 11, item_r1.type, "image"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", item_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r1.text, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 12)("color", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 14, item_r1.type, "icon"));
} }
class ToastrComponent {
    constructor(toastr) {
        this.toastr = toastr;
        this.toastrs = [];
        this.unsubscribeAll$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.toastr.sendToastr$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribeAll$)).subscribe(toastr => {
            this.toastrs.push(toastr);
            setTimeout(() => {
                this.toastrs.splice(0, 1);
            }, 6000);
        });
    }
    ngOnDestroy() {
        this.unsubscribeAll$.next();
        this.unsubscribeAll$.complete();
    }
    close(toastr, index) {
        this.toastrs.splice(index, 1);
    }
}
ToastrComponent.ɵfac = function ToastrComponent_Factory(t) { return new (t || ToastrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
ToastrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ToastrComponent, selectors: [["app-toastr"]], decls: 2, vars: 1, consts: [[1, "toastr-wrapper"], ["class", "alert d-flex elevation-navigation align-items-center", "role", "alert", 3, "ngClass", 4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "d-flex", "elevation-navigation", "align-items-center", 3, "ngClass"], [1, "d-flex"], [1, "width-20", "me-10", 3, "src", "alt"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-grow-1"], ["class", "fw-bold mb-0", 4, "ngIf"], [1, "mb-0", 3, "innerHTML"], ["icon", "close", 1, "cursor-pointer", 3, "width", "color", "click"], [1, "fw-bold", "mb-0"]], template: function ToastrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ToastrComponent_div_1_Template, 11, 17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.toastrs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"]], pipes: [_toastr_color_pipe__WEBPACK_IMPORTED_MODULE_7__["ToastrColorPipe"]], styles: ["[_nghost-%COMP%] {\n  z-index: 1001;\n  position: relative;\n  display: block;\n}\n\n.toastr-wrapper[_ngcontent-%COMP%] {\n  width: 450px;\n  position: fixed;\n  right: 20px;\n  top: 80px;\n}\n\n@media (max-width: 767.98px) {\n  .toastr-wrapper[_ngcontent-%COMP%] {\n    width: calc(100% - 20px);\n    right: 10px;\n    bottom: 0;\n    top: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RvYXN0ci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBREY7O0FDaUVJO0VENURGO0lBQ0Usd0JBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7RUFERjtBQUNGIiwiZmlsZSI6InRvYXN0ci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvdGhlbWVcIjtcclxuXHJcbjpob3N0IHtcclxuICB6LWluZGV4OiAxMDAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRvYXN0ci13cmFwcGVyIHtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHRvcDogODBweDtcclxufVxyXG5cclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcbiAgLnRvYXN0ci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gIH1cclxufVxyXG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAaWYgbm90ICRuIHtcbiAgICBAZXJyb3IgXCJicmVha3BvaW50IGAjeyRuYW1lfWAgbm90IGZvdW5kIGluIGAjeyRicmVha3BvaW50c31gXCI7XG4gIH1cbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2Zcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiAgYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6ICBicmVha3BvaW50LW1heCgkbmV4dCk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuZXh0LCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fly_toastr', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(60px)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(-15px)', offset: 0.3 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
                    ]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(15px)', offset: 0.7 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-60px)', offset: 1.0 })
                    ]))
                ])
            ])
        ] } });


/***/ }),

/***/ "Qodh":
/*!******************************************************************!*\
  !*** ./src/app/layout/landing-layout/navbar/navbar.component.ts ***!
  \******************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _core_constants_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/constants/language */ "+a8W");
/* harmony import */ var _core_constants_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/constants/base */ "/qEY");
/* harmony import */ var _core_constants_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/constants/routes */ "A7B1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/language.service */ "h68y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "KZTq");
/* harmony import */ var _ui_kit_pipes_route_to_absolute_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui-kit/pipes/route-to-absolute.pipe */ "YYe1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");












function NavbarComponent_ng_container_9_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", item_r4.route, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, item_r4.label));
} }
function NavbarComponent_ng_container_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "routeToAbsolute");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, item_r4.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, item_r4.label));
} }
function NavbarComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NavbarComponent_ng_container_9_li_1_Template, 4, 4, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NavbarComponent_ng_container_9_ng_template_2_Template, 5, 6, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.isExternalLink)("ngIfElse", _r6);
} }
function NavbarComponent_ng_container_21_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavbarComponent_ng_container_21_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const language_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.switchLanguage(language_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, language_r10.code));
} }
function NavbarComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NavbarComponent_ng_container_21_a_1_Template, 3, 3, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const language_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", language_r10.code !== ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r1.language$)) == null ? null : tmp_0_0.code));
} }
function NavbarComponent_ng_container_29_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", item_r16.route, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, item_r16.label));
} }
function NavbarComponent_ng_container_29_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "routeToAbsolute");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, item_r16.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, item_r16.label));
} }
function NavbarComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NavbarComponent_ng_container_29_li_1_Template, 4, 4, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NavbarComponent_ng_container_29_ng_template_2_Template, 5, 6, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r16.isExternalLink)("ngIfElse", _r18);
} }
function NavbarComponent_ng_container_40_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavbarComponent_ng_container_40_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const language_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.switchLanguage(language_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, language_r22.code));
} }
function NavbarComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NavbarComponent_ng_container_40_a_1_Template, 3, 3, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const language_r22 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", language_r22.code !== ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r3.language$)) == null ? null : tmp_0_0.code));
} }
const _c0 = function (a0) { return [a0]; };
class NavbarComponent {
    constructor(languageService) {
        this.languageService = languageService;
        this.ROUTES = _core_constants_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"];
        this.languageList = _core_constants_language__WEBPACK_IMPORTED_MODULE_1__["languageList"];
        this.showMobileMenu = false;
        this.isSticky = false;
        this.menuItems = [
            { label: 'navbar.landing.store-directory', route: 'https://directory.airtm.com', isExternalLink: true },
            { label: 'navbar.landing.virtual-card', route: [_core_constants_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].landingPages.virtualCard] },
            { label: 'navbar.landing.rates', route: 'https://rates.airtm.com', isExternalLink: true },
            { label: 'navbar.landing.blog', route: 'https://blog.airtm.com', isExternalLink: true },
        ];
        this.language$ = this.languageService.language$;
    }
    ngOnInit() {
    }
    onWindowScroll() {
        this.isSticky = window.scrollY > _core_constants_base__WEBPACK_IMPORTED_MODULE_2__["landingHeaderHeight"];
    }
    switchLanguage(language) {
        this.languageService.switchLanguage(language);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-landing-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, decls: 41, vars: 38, consts: [[3, "ngClass"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center"], ["routerLink", "/"], ["defaultImage", "assets/images/placeholder.png", "lazyLoad", "assets/images/primary-logo.png", "alt", "Airtm", "loading", "lazy", 1, "height-90"], [1, "d-none", "d-lg-flex"], [1, "list-style-none", "w-100", "d-flex", "justify-content-between", "text-white", "p-0", "m-0"], [1, "d-flex", "flex-column", "flex-lg-row"], [4, "ngFor", "ngForOf"], [1, "d-flex"], [1, "d-none", "d-lg-flex", "align-items-center"], ["ngxScrollTo", "root", 1, "btn", "btn-outline-primary", "width-100", "rounded-pill", "me-20", 3, "routerLink"], ["ngxScrollTo", "root", 1, "btn", "btn-primary", "width-100", "rounded-pill", "me-20", 3, "routerLink"], [1, "d-flex", "d-lg-none"], [1, "btn", "outline-none", "box-shadow-none", 3, "click"], ["defaultImage", "assets/images/placeholder.png", "src", "assets/icons/menu.svg", "alt", "Menu", "loading", "lazy"], [1, "elevation-2", "px-10"], [1, "d-flex", "align-items-center", "my-15"], [1, "d-flex", "flex-column"], [1, "d-flex", "flex-column", "me-20"], ["ngxScrollTo", "root", 1, "btn", "btn-outline-primary", "width-100", "rounded-pill", "mb-20", 3, "routerLink"], ["ngxScrollTo", "root", 1, "btn", "btn-primary", "width-100", "rounded-pill", "mb-20", 3, "routerLink"], [1, "d-flex", "justify-content-center", "align-items-center"], [4, "ngIf", "ngIfElse"], ["internalLink", ""], ["target", "_blank", 1, "ps-30", "ps-xl-70", "text-info", "font-14", "font-weight-bold", "cursor-pointer", "text-decoration-none", 3, "href"], ["ngxScrollTo", "root", "routerLinkActive", "active", 3, "routerLink"], [1, "ps-30", "ps-xl-70", "text-info", "font-14", "font-weight-bold", "cursor-pointer", "text-decoration-none"], ["class", "text-info font-14 fw-bold text-decoration-none cursor-pointer", 3, "click", 4, "ngIf"], [1, "text-info", "font-14", "fw-bold", "text-decoration-none", "cursor-pointer", 3, "click"], ["class", "mb-10", 4, "ngIf", "ngIfElse"], [1, "mb-10"], ["target", "_blank", 1, "px-20", "text-info", "fs-6", "font-weight-bold", "cursor-pointer", "text-decoration-none", 3, "href"], ["ngxScrollTo", "root", "routerLinkActive", "active", 1, "mb-10", 3, "routerLink"], [1, "px-20", "text-info", "fs-6", "font-weight-bold", "cursor-pointer", "text-decoration-none"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, NavbarComponent_ng_container_9_Template, 4, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "routeToAbsolute");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "routeToAbsolute");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, NavbarComponent_ng_container_21_Template, 3, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_23_listener() { return ctx.showMobileMenu = !ctx.showMobileMenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, NavbarComponent_ng_container_29_Template, 4, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "routeToAbsolute");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "routeToAbsolute");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, NavbarComponent_ng_container_40_Template, 3, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.isSticky ? "sticky elevation-header bg-color-catskill-white" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 14, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](30, _c0, ctx.ROUTES.auth.login)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 16, "auth.login.root"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](32, _c0, ctx.ROUTES.auth.signUp)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 20, "auth.signup.join"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.languageList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@indicatorFade", ctx.showMobileMenu ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 22, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](34, _c0, ctx.ROUTES.auth.login)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 24, "auth.login.root"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 26, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](36, _c0, ctx.ROUTES.auth.signUp)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 28, "auth.signup.join"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.languageList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__["LazyLoadImageDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__["ScrollToDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"]], pipes: [_ui_kit_pipes_route_to_absolute_pipe__WEBPACK_IMPORTED_MODULE_10__["RouteToAbsolutePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('indicatorFade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ overflow: 'hidden', height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', overflow: 'hidden', height: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hidden => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out'))
            ])
        ] } });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/language.service */ "h68y");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-progressbar */ "zM63");
/* harmony import */ var _ui_kit_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-kit/toastr/toastr.component */ "QZC4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(languageService) {
        this.languageService = languageService;
        this.languageService.initLanguage();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_1__["LanguageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["id", "router_progress"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ng-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toastr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__["NgProgressComponent"], _ui_kit_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastrComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "W9kA":
/*!**********************************************!*\
  !*** ./src/app/ui-kit/pipes/pipes.module.ts ***!
  \**********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _route_to_absolute_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-to-absolute.pipe */ "YYe1");
/* harmony import */ var _color_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color.pipe */ "sVhU");
/* harmony import */ var _option_label_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option-label.pipe */ "jPEu");
/* harmony import */ var _until_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./until.pipe */ "wjWa");
/* harmony import */ var _two_letter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./two-letter.pipe */ "w9AE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class PipesModule {
}
PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CurrencyPipe"],
        _option_label_pipe__WEBPACK_IMPORTED_MODULE_3__["OptionLabelPipe"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_route_to_absolute_pipe__WEBPACK_IMPORTED_MODULE_1__["RouteToAbsolutePipe"],
        _color_pipe__WEBPACK_IMPORTED_MODULE_2__["ColorPipe"],
        _option_label_pipe__WEBPACK_IMPORTED_MODULE_3__["OptionLabelPipe"],
        _until_pipe__WEBPACK_IMPORTED_MODULE_4__["UntilPipe"],
        _two_letter_pipe__WEBPACK_IMPORTED_MODULE_5__["TwoLetterPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_route_to_absolute_pipe__WEBPACK_IMPORTED_MODULE_1__["RouteToAbsolutePipe"],
        _color_pipe__WEBPACK_IMPORTED_MODULE_2__["ColorPipe"],
        _option_label_pipe__WEBPACK_IMPORTED_MODULE_3__["OptionLabelPipe"],
        _until_pipe__WEBPACK_IMPORTED_MODULE_4__["UntilPipe"],
        _two_letter_pipe__WEBPACK_IMPORTED_MODULE_5__["TwoLetterPipe"]] }); })();


/***/ }),

/***/ "Wlgx":
/*!*******************************************************************************************!*\
  !*** ./src/app/landing/home/send-and-spend-globally/send-and-spend-globally.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SendAndSpendGloballyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendAndSpendGloballyComponent", function() { return SendAndSpendGloballyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class SendAndSpendGloballyComponent {
    constructor() { }
    ngOnInit() {
    }
}
SendAndSpendGloballyComponent.ɵfac = function SendAndSpendGloballyComponent_Factory(t) { return new (t || SendAndSpendGloballyComponent)(); };
SendAndSpendGloballyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendAndSpendGloballyComponent, selectors: [["app-send-and-spend-globally"]], decls: 14, vars: 6, consts: [[1, "mt-50"], [1, "container"], [1, "row", "px-30", "px-lg-100", "flex-column-reverse", "flex-lg-row"], [1, "col-12", "col-lg-6", "mb-30"], [1, "d-flex", "flex-column", "h-100", "justify-content-center", "pe-lg-50"], [1, "text-info", "mb-20"], [1, "d-flex"], [1, "text-info"], [1, "col-12", "col-lg-6"], ["defaultImage", "assets/images/placeholder.png", "lazyLoad", "assets/images/landing-pages/home/send-and-spend-globally.png", "alt", "Send and spend globally", "loading", "lazy", 1, "w-100"]], template: function SendAndSpendGloballyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, "landing.home.send-and-spend-globally.root"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, "landing.home.send-and-spend-globally.description"));
    } }, directives: [ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__["LazyLoadImageDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLWFuZC1zcGVuZC1nbG9iYWxseS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "XUlV":
/*!*******************************************************************************************************!*\
  !*** ./src/app/landing/home/buy-and-sell-cryptocurrencies/buy-and-sell-cryptocurrencies.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: BuyAndSellCryptocurrenciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyAndSellCryptocurrenciesComponent", function() { return BuyAndSellCryptocurrenciesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class BuyAndSellCryptocurrenciesComponent {
    constructor() { }
    ngOnInit() {
    }
}
BuyAndSellCryptocurrenciesComponent.ɵfac = function BuyAndSellCryptocurrenciesComponent_Factory(t) { return new (t || BuyAndSellCryptocurrenciesComponent)(); };
BuyAndSellCryptocurrenciesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuyAndSellCryptocurrenciesComponent, selectors: [["app-buy-and-sell-cryptocurrencies"]], decls: 14, vars: 6, consts: [[1, "mt-50"], [1, "container"], [1, "row", "px-30", "px-lg-100", "flex-row-reverse"], [1, "col-12", "col-lg-6"], [1, "d-flex", "flex-column", "h-100", "justify-content-center"], [1, "text-info", "mb-50"], [1, "d-flex"], [1, "text-info"], [1, "col-12", "col-lg-6", "mb-30"], ["defaultImage", "assets/images/placeholder.png", "lazyLoad", "assets/images/landing-pages/home/buy-and-sell-cryptocurrencies.png", "alt", "Receive payments for online work", "loading", "lazy", 1, "image-fit"]], template: function BuyAndSellCryptocurrenciesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, "landing.home.buy-and-sell-cryptocurrencies.root"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, "landing.home.buy-and-sell-cryptocurrencies.description"));
    } }, directives: [ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__["LazyLoadImageDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXktYW5kLXNlbGwtY3J5cHRvY3VycmVuY2llcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "YYe1":
/*!********************************************************!*\
  !*** ./src/app/ui-kit/pipes/route-to-absolute.pipe.ts ***!
  \********************************************************/
/*! exports provided: RouteToAbsolutePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteToAbsolutePipe", function() { return RouteToAbsolutePipe; });
/* harmony import */ var _core_constants_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/constants/routes */ "A7B1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RouteToAbsolutePipe {
    transform(value) {
        return Object(_core_constants_routes__WEBPACK_IMPORTED_MODULE_0__["toAbsolutePath"])(value);
    }
}
RouteToAbsolutePipe.ɵfac = function RouteToAbsolutePipe_Factory(t) { return new (t || RouteToAbsolutePipe)(); };
RouteToAbsolutePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "routeToAbsolute", type: RouteToAbsolutePipe, pure: true });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-progressbar */ "zM63");
/* harmony import */ var ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-progressbar/router */ "d+9u");
/* harmony import */ var _ui_kit_toastr_toastr_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui-kit/toastr/toastr.module */ "+wJR");
/* harmony import */ var _layout_landing_layout_landing_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/landing-layout/landing-layout.module */ "p9cW");
/* harmony import */ var _landing_home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/home/home.module */ "IzOu");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/interceptors/auth.interceptor */ "htiD");
/* harmony import */ var _core_utils_translate_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/utils/translate.util */ "Me2A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            multi: true,
            useClass: _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"]
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            ngx_progressbar__WEBPACK_IMPORTED_MODULE_4__["NgProgressModule"],
            ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_5__["NgProgressRouterModule"],
            _ui_kit_toastr_toastr_module__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                    useFactory: _core_utils_translate_util__WEBPACK_IMPORTED_MODULE_12__["httpTranslateLoader"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                }
            }),
            _layout_landing_layout_landing_layout_module__WEBPACK_IMPORTED_MODULE_7__["LandingLayoutModule"],
            _landing_home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        ngx_progressbar__WEBPACK_IMPORTED_MODULE_4__["NgProgressModule"],
        ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_5__["NgProgressRouterModule"],
        _ui_kit_toastr_toastr_module__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _layout_landing_layout_landing_layout_module__WEBPACK_IMPORTED_MODULE_7__["LandingLayoutModule"],
        _landing_home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "ZzWQ":
/*!*********************************************************!*\
  !*** ./src/app/landing/home/brands/brands.component.ts ***!
  \*********************************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");



function BrandsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", brand_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazyLoad", brand_r2.logo)("alt", brand_r2.altTag);
} }
function BrandsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", brand_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazyLoad", brand_r3.logo)("alt", brand_r3.altTag);
} }
class BrandsComponent {
    constructor() {
        this.brands = [
            {
                url: 'https://www.coindesk.com/airtm-airdrop-venezuela-crypto-donation-results',
                logo: 'assets/images/landing-pages/home/brands/coin-desk.png',
                altTag: 'Coindesk'
            },
            {
                url: 'https://www.bloomberg.com/news/articles/2018-04-04/venezuela-s-currency-is-doing-even-worse-than-previously-thought',
                logo: 'assets/images/landing-pages/home/brands/bloomberg.png',
                altTag: 'Bloomberg'
            },
            {
                url: 'https://techcrunch.com/2018/08/29/airtm-raises-7-million-to-fight-hyperinflation/',
                logo: 'assets/images/landing-pages/home/brands/tech-crunch.png',
                altTag: 'TechCrunch'
            },
            {
                url: 'https://www.airtm.com/en/clkn/https/www.pymnts.com/news/international/latin-america/2018/airtm-vef-paypal-blockchain-venezuela/(https://www.pymnts.com/news/international/latin-america/2018/airtm-vef-paypal-blockchain-venezuela/)',
                logo: 'assets/images/landing-pages/home/brands/pymnts.png',
                altTag: 'Pymnts'
            },
            {
                url: 'https://www.airtm.com/en/clkn/https/www.pymnts.com/news/international/latin-america/2018/airtm-vef-paypal-blockchain-venezuela/(https://www.pymnts.com/news/international/latin-america/2018/airtm-vef-paypal-blockchain-venezuela/)',
                logo: 'assets/images/landing-pages/home/brands/wall-street-journal.png',
                altTag: 'Wall Street Journal'
            }
        ];
    }
    ngOnInit() {
    }
}
BrandsComponent.ɵfac = function BrandsComponent_Factory(t) { return new (t || BrandsComponent)(); };
BrandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrandsComponent, selectors: [["app-brands"]], decls: 6, vars: 2, consts: [[1, "mt-30"], [1, "container"], [1, "d-none", "d-lg-flex", "justify-content-center"], ["class", "w-20", 4, "ngFor", "ngForOf"], [1, "d-flex", "d-lg-none", "row", "justify-content-center", "px-30"], ["class", "col-6 col-lg-2", 4, "ngFor", "ngForOf"], [1, "w-20"], ["target", "_blank", 1, "d-flex", "h-100", "justify-content-center", "align-items-center", "mb-20", "cursor-pointer", 3, "href"], ["defaultImage", "assets/images/placeholder.png", "loading", "lazy", 1, "image-fit", 3, "lazyLoad", "alt"], [1, "col-6", "col-lg-2"]], template: function BrandsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BrandsComponent_div_3_Template, 3, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BrandsComponent_div_5_Template, 3, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brands);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brands);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImageDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuZHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "amrp":
/*!*********************************!*\
  !*** ./src/assets/i18n/en.json ***!
  \*********************************/
/*! exports provided: validation, common, dialog, navbar, footer, landing, auth, sidebar, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"validation\":{\"root\":\"Validation\",\"weak\":\"Weak\",\"medium\":\"Medium\",\"high\":\"High\"},\"common\":{\"get-started\":\"Get Started\",\"warning\":\"Warning\",\"loading\":\"Loading\",\"slideToCompletePuzzle\":\"Slide To complete the puzzle\"},\"dialog\":{\"securityVerification\":{\"root\":\"Security Verification\"}},\"navbar\":{\"landing\":{\"store-directory\":\"Store directory\",\"virtual-card\":\"Virtual card\",\"rates\":\"Rates\",\"blog\":\"Blog\"},\"client\":{\"push-notification\":\"Push notification\",\"mark-all-read\":\"Mark all read\",\"no-unread-notifications\":\"No unread notifications :)\",\"view-all-activity\":\"View all activity\",\"main-balance\":\"Main balance\",\"total\":\"Total\",\"show-my-currency\":\"Show my currency\",\"manage-local-settings\":\"Manage local settings\",\"push-notification-notes\":\"Note: Users can only enable push notifications if they're on Chrome or Firefox on Desktop or Android devices.\"}},\"footer\":{\"landing\":{\"terms-and-conditions\":\"Terms and Conditions\",\"made-with\":\"Made with\",\"in-mexico-city\":\"in Mexico City\",\"company\":{\"root\":\"Company\",\"about-us\":\"About us\",\"jobs\":\"Jobs\",\"press\":\"Press\",\"partners\":\"Partners\"},\"help\":{\"root\":\"Help\",\"blog\":\"Blog\",\"faqs\":\"FAQs\",\"rates\":\"Rates\"},\"notice\":\"CONTENT DISCLAIMER: References made to third party names, logos and trademarks on this website are to identify corresponding goods and services that Airtm users can themselves exchange through P2P transactions facilitated by Airtm. Unless otherwise specified, the trademark holders are not affiliated with Airtm, our products or website, and they do not sponsor or endorse Airtm services. Such references are included strictly as nominative fair use under applicable trademark law and remain fully the property of their respective trademark holders.\"},\"common\":{\"product-updates\":\"Product updates\"}},\"landing\":{\"home\":{\"your-digital-dollar-account\":{\"root\":\"Your digital dollar account\",\"without-local-restrictions\":\"Without local restrictions\",\"using-the-real-exchange-rate\":\"Using the real exchange rate\",\"with-no-minimum-balances-or-monthly-fees\":\"With no minimum balances or monthly fees\",\"open-your-free-account-in-1-minute\":\"Open your free account in 1 minute\",\"see-how-airtm-works\":\"See how Airtm works\"},\"global-info\":{\"happy-members\":\"happy members\",\"transactions-completed\":\"transactions completed\",\"banks-e-money-networks\":\"banks & e-money networks\",\"transaction-speed\":\"transaction speed\"},\"save-in-dollars\":{\"root\":\"Save in dollars.\",\"description\":\"Save in dollars without losing value from unstable currencies. With us, your money is protected from possible devaluations.\"},\"send-and-spend-globally\":{\"root\":\"Send and spend globally.\",\"description\":\"Send and receive money anywhere, faster than a bank transfer and with free market rates. Spend online anywhere Mastercard or Visa are accepted.\"},\"receive-payments-for-online-work\":{\"root\":\"Receive payments for online work.\",\"description\":\"Get paid from freelancer platforms or directly from clients. Convert your money stuck in e-wallets to cash in your bank.\"},\"touchless-mobile-payments\":{\"root\":\"Touchless mobile payments.\",\"description\":\"Keep your dollars with you at all times. Make in person purchases for local goods and services.\",\"see-where-you-can-pay-with-airtm\":\"See where you can pay with Airtm.\"},\"buy-and-sell-cryptocurrencies\":{\"root\":\"Buy and sell cryptocurrencies.\",\"description\":\"Exchange your dollars for cryptocurrencies,. Add and withdraw using your bank account, debit card, BTC, ETH and more.\"},\"about-us\":{\"free-market-rates\":\"Free market rates\",\"safe-and-reliable\":\"Safe and reliable\",\"available-24-7\":\"Available 24/7\",\"send-money-across-borders\":\"Send money across borders at real exchange rates without restrictions.\",\"escrowed-transactions\":\"Escrowed transactions and verified experienced peers.\",\"our-support-team\":\"Our support team and peer network at your service.\"},\"see-what-others-have-to-say-about-airtm\":{\"root\":\"See what others have to say about Airtm\",\"read-more-testimonies-at\":\"Read more testimonies at\"},\"how-to-start\":{\"root\":\"How to start?\",\"create-your-account-at-no-cost\":\"Create your account at no cost.\",\"add-funds-using-your-local-currency\":\"Add funds using your local currency.\",\"save-send-spend-and-withdraw\":\"Save, send, spend and withdraw.\"}}},\"auth\":{\"login\":{\"root\":\"Log in\",\"login-to-airtm\":\"Log in to Airtm\",\"login-with-facebook\":\"Log in with Facebook\",\"login-with-google\":\"Log in with Google\",\"or\":\"or\",\"your-email\":\"Your email\",\"password\":\"Password\",\"forgot-your-password\":\"Forgot your password?\",\"not-registered-yet\":\"Not registered yet?\",\"create-an-account\":\"Create an account\"},\"signup\":{\"root\":\"Sign up\",\"join\":\"Join\",\"create-an-account\":\"Create an account\",\"signup-with-facebook\":\"Sign up with Facebook\",\"signup-with-google\":\"Sign up with Google\",\"this-account-is-for\":\"This account is for\",\"an-individual\":\"an individual\",\"a-business\":\"a business\",\"what-country-do-you-live-in\":\"What country do you live in?\",\"login-to-airtm\":\"Log in to Airtm\",\"or\":\"or\",\"your-email\":\"Your email\",\"password\":\"Password\",\"confirm-password\":\"Confirm Password\",\"first-name\":\"First name\",\"last-name\":\"Last name\",\"second-last-name\":\"Second Last Name (Optional)\",\"name-must-match-government-issue-id\":\"* Name must match government issued ID.\",\"create-account\":\"Create account\",\"by-creating-an-account\":\"By creating an account, you consent that you have read and agree to our\",\"terms-of-service-and-privacy\":\"Terms of Service and Privacy\",\"already-have-an-account\":\"Already have an account?\",\"login\":\"Log in\",\"benefits-of-airtm\":\"Benefits of Airtm\",\"save-and-spend-in-dollars\":\"Save and spend in U.S. dollars.\",\"convert-e-money-to-cash-globally\":\"Convert e-money to cash globally.\",\"send-money-anywhere\":\"Send money anywhere.\",\"exchange-cryptocurrencies\":\"Exchange cryptocurrencies.\",\"fast-safe-reliable\":\"Fast, safe & reliable.\"},\"complete-profile\":{\"please-complete-your-profile\":\"Please complete your profile.\",\"first-name\":\"First name\",\"last-name\":\"Last name\",\"second-last-name\":\"Second Last Name (Optional)\",\"name-must-match-government-issued-id\":\"* Name must match government issued ID.\",\"address-line-1\":\"Address line 1\",\"address-line-2\":\"Address line 2\",\"city\":\"City\",\"country\":\"Country\",\"country-you-live-in\":\"* Country you live in\",\"phone\":\"Phone\",\"birthday\":\"Birthday\",\"inviter\":\"Inviter (If applicable)\",\"verify-phone-to-complete-profile\":\"Verify phone to complete profile\",\"state\":\"State\",\"postal-code\":\"Postal code\",\"enter-the-email-or-username\":\"Enter the email or username of the person who invited you to Airtm\"},\"notify\":{\"minimum-8-characters\":\"Minimum 8 characters\",\"at-least-1-special-character\":\"At least 1 Special character\",\"at-least-1-upper-case\":\"At least 1 UPPER CASE\",\"at-least-1-number\":\"At least 1 Number\"}},\"sidebar\":{\"home\":\"Home\",\"add\":\"Add\",\"withdraw\":\"Withdraw\",\"transfers\":\"Transfers\",\"send-request\":\"Send/Request\",\"virtual-cards\":\"Virtual cards\",\"activity\":\"Activity\",\"peer-transfers\":\"Peer transfers\",\"crypto\":\"Crypto\",\"invite-friends\":\"Invite friends\",\"store-directory\":\"Store directory\",\"settings\":\"Settings\",\"help\":\"Help\",\"logout\":\"Logout\"}}");

/***/ }),

/***/ "ejC/":
/*!*************************************!*\
  !*** ./src/app/core/models/auth.ts ***!
  \*************************************/
/*! exports provided: UserRole, UserType, VerifyType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return UserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyType", function() { return VerifyType; });
var UserRole;
(function (UserRole) {
    UserRole["User"] = "USER";
    UserRole["Admin"] = "ADMIN";
    UserRole["SuperAdmin"] = "SUPER_ADMIN";
})(UserRole || (UserRole = {}));
var UserType;
(function (UserType) {
    UserType["Individual"] = "INDIVIDUAL";
    UserType["Business"] = "BUSINESS";
})(UserType || (UserType = {}));
var VerifyType;
(function (VerifyType) {
    VerifyType["Unverified"] = "UNVERIFIED";
    VerifyType["Verified"] = "VERIFIED";
})(VerifyType || (VerifyType = {}));


/***/ }),

/***/ "fW17":
/*!*****************************************!*\
  !*** ./src/app/core/utils/enum.util.ts ***!
  \*****************************************/
/*! exports provided: enumToLabel, enumToOptions, nextEnumValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumToLabel", function() { return enumToLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumToOptions", function() { return enumToOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextEnumValue", function() { return nextEnumValue; });
function enumToLabel(source, labels) {
    if (labels) {
        return labels[source];
    }
    if (source === '') {
        return '';
    }
    const list = source.split('_');
    return list.map((item) => {
        const labelItem = item.toLowerCase();
        return labelItem[0].toUpperCase() + labelItem.slice(1);
    }).join(' ');
}
function enumToOptions(source, labels) {
    return Object.keys(source).map(key => {
        return { label: enumToLabel(source[key], labels), value: source[key] };
    });
}
function nextEnumValue(source, currentEnum, isBack) {
    const enumOptions = enumToOptions(source);
    const currentIndex = enumOptions.findIndex(option => option.value === currentEnum);
    const nextIndex = (enumOptions.length + currentIndex + (isBack ? -1 : 1)) % enumOptions.length;
    return enumOptions[nextIndex].value;
}


/***/ }),

/***/ "flyv":
/*!***************************************!*\
  !*** ./src/app/core/models/toastr.ts ***!
  \***************************************/
/*! exports provided: ToastrType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrType", function() { return ToastrType; });
var ToastrType;
(function (ToastrType) {
    ToastrType["Success"] = "SUCCESS";
    ToastrType["Info"] = "INFO";
    ToastrType["Warning"] = "WARNING";
    ToastrType["Danger"] = "DANGER";
})(ToastrType || (ToastrType = {}));


/***/ }),

/***/ "h68y":
/*!***************************************************!*\
  !*** ./src/app/core/services/language.service.ts ***!
  \***************************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _constants_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/language */ "+a8W");
/* harmony import */ var _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/i18n/en.json */ "amrp");
var _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/i18n/en.json */ "amrp", 1);
/* harmony import */ var _assets_i18n_kr_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/i18n/kr.json */ "qtLA");
var _assets_i18n_kr_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/i18n/kr.json */ "qtLA", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






class LanguageService {
    constructor(translate) {
        this.translate = translate;
        // @ts-ignore
        this.language = null;
        this.language$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.language);
    }
    initLanguage() {
        const languages = _constants_language__WEBPACK_IMPORTED_MODULE_1__["languageList"].map((item) => {
            return item.code;
        });
        this.translate.addLangs(languages);
        this.translate.setTranslation('en', _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_2__);
        this.translate.setDefaultLang('en');
        this.setLanguage(_constants_language__WEBPACK_IMPORTED_MODULE_1__["languageList"][0]);
    }
    setLanguage(lang) {
        this.language = lang;
        this.language$.next(this.language);
    }
    switchLanguage(lang) {
        this.setLanguage(lang);
        this.translate.use(lang.code);
        let languageFile = _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_2__;
        switch (lang.code) {
            case 'en':
                languageFile = _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_2__;
                break;
            case 'kr':
                languageFile = _assets_i18n_kr_json__WEBPACK_IMPORTED_MODULE_3__;
                break;
        }
        this.translate.setTranslation(lang.code, languageFile);
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "htiD":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "7dP1");




class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        // tslint:disable-next-line:max-line-length
        const duplicate = req.clone({ headers: req.headers.set('Authorization', this.authService.accessToken ? 'bearer ' + this.authService.accessToken : 'bearer') });
        return next.handle(duplicate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            if (err.status === 401) {
                this.authService.logout().then();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jPEu":
/*!***************************************************!*\
  !*** ./src/app/ui-kit/pipes/option-label.pipe.ts ***!
  \***************************************************/
/*! exports provided: OptionLabelPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionLabelPipe", function() { return OptionLabelPipe; });
/* harmony import */ var _core_utils_enum_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/utils/enum.util */ "fW17");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OptionLabelPipe {
    transform(value, options, multi) {
        if (!multi) {
            if (!options) {
                return Object(_core_utils_enum_util__WEBPACK_IMPORTED_MODULE_0__["enumToLabel"])(value);
            }
            const found = options.find(x => x.value === value);
            return found ? found.label : Object(_core_utils_enum_util__WEBPACK_IMPORTED_MODULE_0__["enumToLabel"])(value);
        }
        else {
            if (!value) {
                return '';
            }
            const res = value.map((val) => {
                const found = options === null || options === void 0 ? void 0 : options.find(x => x.value === val);
                return found ? found.label : Object(_core_utils_enum_util__WEBPACK_IMPORTED_MODULE_0__["enumToLabel"])(val);
            });
            return res.join(', ');
        }
    }
}
OptionLabelPipe.ɵfac = function OptionLabelPipe_Factory(t) { return new (t || OptionLabelPipe)(); };
OptionLabelPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "optionLabel", type: OptionLabelPipe, pure: true });


/***/ }),

/***/ "kRyh":
/*!***********************************************************************************************!*\
  !*** ./src/app/landing/home/touchless-mobile-payments/touchless-mobile-payments.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TouchlessMobilePaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchlessMobilePaymentsComponent", function() { return TouchlessMobilePaymentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class TouchlessMobilePaymentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TouchlessMobilePaymentsComponent.ɵfac = function TouchlessMobilePaymentsComponent_Factory(t) { return new (t || TouchlessMobilePaymentsComponent)(); };
TouchlessMobilePaymentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TouchlessMobilePaymentsComponent, selectors: [["app-touchless-mobile-payments"]], decls: 18, vars: 9, consts: [[1, "mt-50"], [1, "container"], [1, "row", "px-30", "px-lg-100"], [1, "col-12", "col-lg-6", "mb-30"], [1, "d-flex", "flex-column", "h-100", "justify-content-center"], [1, "text-info", "mb-50"], [1, "d-flex", "flex-column"], [1, "text-info"], ["href", "https://directory.airtm.com", "target", "_blank", 1, "text-info", "text-decoration-underline", "cursor-pointer"], [1, "col-12", "col-lg-6"], [1, "d-flex", "justify-content-center"], ["defaultImage", "assets/images/placeholder.png", "lazyLoad", "assets/images/landing-pages/home/touchless-mobile-payments.png", "alt", "Touchless mobile payments", "loading", "lazy", 1, "height-275"]], template: function TouchlessMobilePaymentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, "landing.home.touchless-mobile-payments.root"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, "landing.home.touchless-mobile-payments.description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, "landing.home.touchless-mobile-payments.see-where-you-can-pay-with-airtm"));
    } }, directives: [ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__["LazyLoadImageDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3VjaGxlc3MtbW9iaWxlLXBheW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "nCHe":
/*!*************************************************!*\
  !*** ./src/app/core/services/toastr.service.ts ***!
  \*************************************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/toastr */ "flyv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class ToastrService {
    constructor(translate) {
        this.translate = translate;
        this.sendToastr$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    show(type, text, title) {
        this.sendToastr$.next({ type, title, text });
    }
    success(text, title) {
        this.sendToastr$.next({ type: _models_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrType"].Success, title, text });
    }
    info(text, title) {
        this.sendToastr$.next({ type: _models_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrType"].Info, title, text });
    }
    warning(text, title) {
        this.sendToastr$.next({ type: _models_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrType"].Warning, title, text });
    }
    danger(text, title) {
        this.sendToastr$.next({ type: _models_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrType"].Danger, title, text });
    }
    error(error, custom) {
        if (error && error.error && error.message && typeof error.error.message === 'string') {
            this.danger(error.error.message);
        }
        else if (error && error.error && error.message && typeof error.error.message === 'object') {
            let messages = error.error.message;
            if (error.status === 400 && messages.length) {
                messages = messages.map((x) => `<li>${x}</li>`);
                this.danger(`<ul class="mb-0 pl-20 mt-10 pb-0">${messages.join('')}</ul>`, this.translate.instant('common.warning'));
            }
            else {
                this.danger('Bad request. Please try again or call customer support', this.translate.instant('common.warning'));
            }
        }
        else if (error && error.message && typeof error.message === 'string') {
            this.danger(error.message);
        }
        else {
            this.danger(custom);
        }
    }
}
ToastrService.ɵfac = function ToastrService_Factory(t) { return new (t || ToastrService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
ToastrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ToastrService, factory: ToastrService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nqvs":
/*!***************************************************************************************************!*\
  !*** ./src/app/landing/home/your-digital-dollar-account/your-digital-dollar-account.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: YourDigitalDollarAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourDigitalDollarAccountComponent", function() { return YourDigitalDollarAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class YourDigitalDollarAccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
YourDigitalDollarAccountComponent.ɵfac = function YourDigitalDollarAccountComponent_Factory(t) { return new (t || YourDigitalDollarAccountComponent)(); };
YourDigitalDollarAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YourDigitalDollarAccountComponent, selectors: [["app-your-digital-dollar-account"]], decls: 43, vars: 30, consts: [[1, "container"], [1, "row"], [1, "col-12", "col-lg-6"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "flex-column", "max-width-490", "mt-30", "px-30", "px-lg-0"], [1, "text-info", "mb-20"], [1, "d-flex", "d-lg-none", "flex-column", "mb-30"], [1, "text-info"], [1, "d-none", "d-lg-flex", "flex-column", "mb-30"], [1, "fs-5", "text-info"], [1, "d-flex", "justify-content-center", "mb-10"], [1, "btn", "btn-primary", "width-160", "height-45", "rounded-pill"], [1, "font-12", "text-info"], [1, "btn", "btn-outline-primary", "width-200", "rounded-4"], [1, "col-12", "col-lg-6", "d-none", "d-lg-block"], ["defaultImage", "assets/images/placeholder.png", "lazyLoad", "assets/images/landing-pages/home/your-digital-account.png", "alt", "Your digital account", "loading", "lazy", 1, "w-100"]], template: function YourDigitalDollarAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, "landing.home.your-digital-dollar-account.root"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 12, "landing.home.your-digital-dollar-account.without-local-restrictions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 14, "landing.home.your-digital-dollar-account.using-the-real-exchange-rate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 16, "landing.home.your-digital-dollar-account.with-no-minimum-balances-or-monthly-fees"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 18, "landing.home.your-digital-dollar-account.without-local-restrictions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 20, "landing.home.your-digital-dollar-account.using-the-real-exchange-rate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 22, "landing.home.your-digital-dollar-account.with-no-minimum-balances-or-monthly-fees"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 24, "common.get-started"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 26, "landing.home.your-digital-dollar-account.open-your-free-account-in-1-minute"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u25B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 28, "landing.home.your-digital-dollar-account.see-how-airtm-works"), "");
    } }, directives: [ng_lazyload_image__WEBPACK_IMPORTED_MODULE_1__["LazyLoadImageDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ5b3VyLWRpZ2l0YWwtZG9sbGFyLWFjY291bnQuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ "p9cW":
/*!****************************************************************!*\
  !*** ./src/app/layout/landing-layout/landing-layout.module.ts ***!
  \****************************************************************/
/*! exports provided: LandingLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingLayoutModule", function() { return LandingLayoutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "KZTq");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _ui_kit_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui-kit/pipes/pipes.module */ "W9kA");
/* harmony import */ var _landing_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-layout.component */ "MTL8");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "Qodh");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "PEup");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











class LandingLayoutModule {
}
LandingLayoutModule.ɵfac = function LandingLayoutModule_Factory(t) { return new (t || LandingLayoutModule)(); };
LandingLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: LandingLayoutModule });
LandingLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"],
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToModule"].forRoot(),
            _ui_kit_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](LandingLayoutModule, { declarations: [_landing_layout_component__WEBPACK_IMPORTED_MODULE_6__["LandingLayoutComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToModule"], _ui_kit_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]], exports: [_landing_layout_component__WEBPACK_IMPORTED_MODULE_6__["LandingLayoutComponent"]] }); })();


/***/ }),

/***/ "qjTU":
/*!************************************************!*\
  !*** ./src/app/landing/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _your_digital_dollar_account_your_digital_dollar_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./your-digital-dollar-account/your-digital-dollar-account.component */ "nqvs");
/* harmony import */ var _global_info_global_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-info/global-info.component */ "0TzA");
/* harmony import */ var _brands_brands_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brands/brands.component */ "ZzWQ");
/* harmony import */ var _save_in_dollars_save_in_dollars_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save-in-dollars/save-in-dollars.component */ "K1Vz");
/* harmony import */ var _send_and_spend_globally_send_and_spend_globally_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-and-spend-globally/send-and-spend-globally.component */ "Wlgx");
/* harmony import */ var _receive_payments_for_online_work_receive_payments_for_online_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receive-payments-for-online-work/receive-payments-for-online-work.component */ "EFK7");
/* harmony import */ var _touchless_mobile_payments_touchless_mobile_payments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./touchless-mobile-payments/touchless-mobile-payments.component */ "kRyh");
/* harmony import */ var _buy_and_sell_cryptocurrencies_buy_and_sell_cryptocurrencies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buy-and-sell-cryptocurrencies/buy-and-sell-cryptocurrencies.component */ "XUlV");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-us/about-us.component */ "9ugw");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "3Vk1");
/* harmony import */ var _how_to_start_how_to_start_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./how-to-start/how-to-start.component */ "yZ6d");












class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-your-digital-dollar-account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-global-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-save-in-dollars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-send-and-spend-globally");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-receive-payments-for-online-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-touchless-mobile-payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-buy-and-sell-cryptocurrencies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-about-us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-how-to-start");
    } }, directives: [_your_digital_dollar_account_your_digital_dollar_account_component__WEBPACK_IMPORTED_MODULE_1__["YourDigitalDollarAccountComponent"], _global_info_global_info_component__WEBPACK_IMPORTED_MODULE_2__["GlobalInfoComponent"], _brands_brands_component__WEBPACK_IMPORTED_MODULE_3__["BrandsComponent"], _save_in_dollars_save_in_dollars_component__WEBPACK_IMPORTED_MODULE_4__["SaveInDollarsComponent"], _send_and_spend_globally_send_and_spend_globally_component__WEBPACK_IMPORTED_MODULE_5__["SendAndSpendGloballyComponent"], _receive_payments_for_online_work_receive_payments_for_online_work_component__WEBPACK_IMPORTED_MODULE_6__["ReceivePaymentsForOnlineWorkComponent"], _touchless_mobile_payments_touchless_mobile_payments_component__WEBPACK_IMPORTED_MODULE_7__["TouchlessMobilePaymentsComponent"], _buy_and_sell_cryptocurrencies_buy_and_sell_cryptocurrencies_component__WEBPACK_IMPORTED_MODULE_8__["BuyAndSellCryptocurrenciesComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"], _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_10__["TestimonialsComponent"], _how_to_start_how_to_start_component__WEBPACK_IMPORTED_MODULE_11__["HowToStartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "qtLA":
/*!*********************************!*\
  !*** ./src/assets/i18n/kr.json ***!
  \*********************************/
/*! exports provided: validation, common, dialog, navbar, footer, landing, auth, sidebar, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"validation\":{\"root\":\"Validation\",\"weak\":\"Weak\",\"medium\":\"Medium\",\"high\":\"High\"},\"common\":{\"get-started\":\"Get Started\",\"warning\":\"Warning\",\"loading\":\"Loading\",\"slideToCompletePuzzle\":\"Slide To complete the puzzle\"},\"dialog\":{\"securityVerification\":{\"root\":\"Security Verification\"}},\"navbar\":{\"landing\":{\"store-directory\":\"Store directory\",\"virtual-card\":\"Virtual card\",\"rates\":\"Rates\",\"blog\":\"Blog\"},\"client\":{\"push-notification\":\"Push notification\",\"mark-all-read\":\"Mark all read\",\"no-unread-notifications\":\"No unread notifications :)\",\"view-all-activity\":\"View all activity\",\"main-balance\":\"Main balance\",\"total\":\"Total\",\"show-my-currency\":\"Show my currency\",\"manage-local-settings\":\"Manage local settings\",\"push-notification-notes\":\"Note: Users can only enable push notifications if they're on Chrome or Firefox on Desktop or Android devices.\"}},\"footer\":{\"landing\":{\"terms-and-conditions\":\"Terms and Conditions\",\"made-with\":\"Made with\",\"in-mexico-city\":\"in Mexico City\",\"company\":{\"root\":\"Company\",\"about-us\":\"About us\",\"jobs\":\"Jobs\",\"press\":\"Press\",\"partners\":\"Partners\"},\"help\":{\"root\":\"Help\",\"blog\":\"Blog\",\"faqs\":\"FAQs\",\"rates\":\"Rates\"},\"notice\":\"CONTENT DISCLAIMER: References made to third party names, logos and trademarks on this website are to identify corresponding goods and services that Airtm users can themselves exchange through P2P transactions facilitated by Airtm. Unless otherwise specified, the trademark holders are not affiliated with Airtm, our products or website, and they do not sponsor or endorse Airtm services. Such references are included strictly as nominative fair use under applicable trademark law and remain fully the property of their respective trademark holders.\"},\"common\":{\"product-updates\":\"Product updates\"}},\"landing\":{\"home\":{\"your-digital-dollar-account\":{\"root\":\"Your digital dollar account\",\"without-local-restrictions\":\"Without local restrictions\",\"using-the-real-exchange-rate\":\"Using the real exchange rate\",\"with-no-minimum-balances-or-monthly-fees\":\"With no minimum balances or monthly fees\",\"open-your-free-account-in-1-minute\":\"Open your free account in 1 minute\",\"see-how-airtm-works\":\"See how Airtm works\"},\"global-info\":{\"happy-members\":\"happy members\",\"transactions-completed\":\"transactions completed\",\"banks-e-money-networks\":\"banks & e-money networks\",\"transaction-speed\":\"transaction speed\"},\"save-in-dollars\":{\"root\":\"Save in dollars.\",\"description\":\"Save in dollars without losing value from unstable currencies. With us, your money is protected from possible devaluations.\"},\"send-and-spend-globally\":{\"root\":\"Send and spend globally.\",\"description\":\"Send and receive money anywhere, faster than a bank transfer and with free market rates. Spend online anywhere Mastercard or Visa are accepted.\"},\"receive-payments-for-online-work\":{\"root\":\"Receive payments for online work.\",\"description\":\"Get paid from freelancer platforms or directly from clients. Convert your money stuck in e-wallets to cash in your bank.\"},\"touchless-mobile-payments\":{\"root\":\"Touchless mobile payments.\",\"description\":\"Keep your dollars with you at all times. Make in person purchases for local goods and services.\",\"see-where-you-can-pay-with-airtm\":\"See where you can pay with Airtm.\"},\"buy-and-sell-cryptocurrencies\":{\"root\":\"Buy and sell cryptocurrencies.\",\"description\":\"Exchange your dollars for cryptocurrencies,. Add and withdraw using your bank account, debit card, BTC, ETH and more.\"},\"about-us\":{\"free-market-rates\":\"Free market rates\",\"safe-and-reliable\":\"Safe and reliable\",\"available-24-7\":\"Available 24/7\",\"send-money-across-borders\":\"Send money across borders at real exchange rates without restrictions.\",\"escrowed-transactions\":\"Escrowed transactions and verified experienced peers.\",\"our-support-team\":\"Our support team and peer network at your service.\"},\"see-what-others-have-to-say-about-airtm\":{\"root\":\"See what others have to say about Airtm\",\"read-more-testimonies-at\":\"Read more testimonies at\"},\"how-to-start\":{\"root\":\"How to start?\",\"create-your-account-at-no-cost\":\"Create your account at no cost.\",\"add-funds-using-your-local-currency\":\"Add funds using your local currency.\",\"save-send-spend-and-withdraw\":\"Save, send, spend and withdraw.\"}}},\"auth\":{\"login\":{\"root\":\"Log in\",\"login-to-airtm\":\"Log in to Airtm\",\"login-with-facebook\":\"Log in with Facebook\",\"login-with-google\":\"Log in with Google\",\"or\":\"or\",\"your-email\":\"Your email\",\"password\":\"Password\",\"forgot-your-password\":\"Forgot your password?\",\"not-registered-yet\":\"Not registered yet?\",\"create-an-account\":\"Create an account\"},\"signup\":{\"root\":\"Sign up\",\"join\":\"Join\",\"create-an-account\":\"Create an account\",\"signup-with-facebook\":\"Sign up with Facebook\",\"signup-with-google\":\"Sign up with Google\",\"this-account-is-for\":\"This account is for\",\"an-individual\":\"an individual\",\"a-business\":\"a business\",\"what-country-do-you-live-in\":\"What country do you live in?\",\"login-to-airtm\":\"Log in to Airtm\",\"or\":\"or\",\"your-email\":\"Your email\",\"password\":\"Password\",\"confirm-password\":\"Confirm Password\",\"first-name\":\"First name\",\"last-name\":\"Last name\",\"second-last-name\":\"Second Last Name (Optional)\",\"name-must-match-government-issue-id\":\"* Name must match government issued ID.\",\"create-account\":\"Create account\",\"by-creating-an-account\":\"By creating an account, you consent that you have read and agree to our\",\"terms-of-service-and-privacy\":\"Terms of Service and Privacy\",\"already-have-an-account\":\"Already have an account?\",\"login\":\"Log in\",\"benefits-of-airtm\":\"Benefits of Airtm\",\"save-and-spend-in-dollars\":\"Save and spend in U.S. dollars.\",\"convert-e-money-to-cash-globally\":\"Convert e-money to cash globally.\",\"send-money-anywhere\":\"Send money anywhere.\",\"exchange-cryptocurrencies\":\"Exchange cryptocurrencies.\",\"fast-safe-reliable\":\"Fast, safe & reliable.\"},\"complete-profile\":{\"please-complete-your-profile\":\"Please complete your profile.\",\"first-name\":\"First name\",\"last-name\":\"Last name\",\"second-last-name\":\"Second Last Name (Optional)\",\"name-must-match-government-issued-id\":\"* Name must match government issued ID.\",\"address-line-1\":\"Address line 1\",\"address-line-2\":\"Address line 2\",\"city\":\"City\",\"country\":\"Country\",\"country-you-live-in\":\"* Country you live in\",\"phone\":\"Phone\",\"birthday\":\"Birthday\",\"inviter\":\"Inviter (If applicable)\",\"verify-phone-to-complete-profile\":\"Verify phone to complete profile\",\"state\":\"State\",\"postal-code\":\"Postal code\",\"enter-the-email-or-username\":\"Enter the email or username of the person who invited you to Airtm\"},\"notify\":{\"minimum-8-characters\":\"Minimum 8 characters\",\"at-least-1-special-character\":\"At least 1 Special character\",\"at-least-1-upper-case\":\"At least 1 UPPER CASE\",\"at-least-1-number\":\"At least 1 Number\"}},\"sidebar\":{\"home\":\"Home\",\"add\":\"Add\",\"withdraw\":\"Withdraw\",\"transfers\":\"Transfers\",\"send-request\":\"Send/Request\",\"virtual-cards\":\"Virtual cards\",\"activity\":\"Activity\",\"peer-transfers\":\"Peer transfers\",\"crypto\":\"Crypto\",\"invite-friends\":\"Invite friends\",\"store-directory\":\"Store directory\",\"settings\":\"Settings\",\"help\":\"Help\",\"logout\":\"Logout\"}}");

/***/ }),

/***/ "sVhU":
/*!********************************************!*\
  !*** ./src/app/ui-kit/pipes/color.pipe.ts ***!
  \********************************************/
/*! exports provided: ColorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPipe", function() { return ColorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ColorPipe {
    constructor() {
        this.colors = {
            'dodger-blue': '#1783FA',
            'mountain-meadow': '#0ECB81',
            'buddha-gold': '#C99400',
            'blue-bayoux': '#526474',
            'brick-red': '#CF304A',
            downriver: '#0A2540',
            'blue-romance': '#D1F4D9',
            'humming-bird': '#D0F3F8',
            peach: '#FFE4BC',
            cosmos: '#FED6DB',
            'catskill-white': '#F6F9FB',
            'hit-gray': '#A9B1B9',
            white: '#FFFFFF'
        };
    }
    transform(value) {
        // @ts-ignore
        return this.colors[value] || value;
    }
}
ColorPipe.ɵfac = function ColorPipe_Factory(t) { return new (t || ColorPipe)(); };
ColorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "color", type: ColorPipe, pure: true });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_landing_layout_landing_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/landing-layout/landing-layout.component */ "MTL8");
/* harmony import */ var _landing_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/home/home.component */ "qjTU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    // injected home module directly to the app module to improve the TTFB
    {
        path: '', component: _layout_landing_layout_landing_layout_component__WEBPACK_IMPORTED_MODULE_1__["LandingLayoutComponent"],
        children: [{ path: '', component: _landing_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }]
    },
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | landing-landing-module */ "landing-landing-module").then(__webpack_require__.bind(null, /*! ./landing/landing.module */ "WMCE")).then(m => m.LandingModule) },
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthModule) },
    { path: '', loadChildren: () => Promise.all(/*! import() | client-client-module */[__webpack_require__.e("default~client-client-module~complete-profile-complete-profile-module~login-login-module~signup-signup-module"), __webpack_require__.e("client-client-module")]).then(__webpack_require__.bind(null, /*! ./client/client.module */ "kk3Z")).then(m => m.ClientModule) },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w9AE":
/*!*************************************************!*\
  !*** ./src/app/ui-kit/pipes/two-letter.pipe.ts ***!
  \*************************************************/
/*! exports provided: TwoLetterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoLetterPipe", function() { return TwoLetterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TwoLetterPipe {
    transform(value) {
        if (!value || value.length < 2) {
            return '';
        }
        return value.substring(0, 2);
    }
}
TwoLetterPipe.ɵfac = function TwoLetterPipe_Factory(t) { return new (t || TwoLetterPipe)(); };
TwoLetterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "twoLetter", type: TwoLetterPipe, pure: true });


/***/ }),

/***/ "wjWa":
/*!********************************************!*\
  !*** ./src/app/ui-kit/pipes/until.pipe.ts ***!
  \********************************************/
/*! exports provided: UntilPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UntilPipe", function() { return UntilPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UntilPipe {
    transform(current, option, until) {
        const order = Object.keys(option).map(key => option[key]);
        return order.findIndex(x => x === until) - 1 > order.findIndex(x => x === current);
    }
}
UntilPipe.ɵfac = function UntilPipe_Factory(t) { return new (t || UntilPipe)(); };
UntilPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "until", type: UntilPipe, pure: true });


/***/ }),

/***/ "yFe8":
/*!*************************************************!*\
  !*** ./src/app/core/services/cookie.service.ts ***!
  \*************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CookieService {
    constructor() {
        this.cookieStore = {};
    }
    parseCookies(cookies = document.cookie) {
        this.cookieStore = {};
        if (!!cookies === false) {
            return;
        }
        const cookiesArr = cookies.split(';');
        for (const cookie of cookiesArr) {
            const cookieArr = cookie.split('=');
            this.cookieStore[cookieArr[0].trim()] = cookieArr[1];
        }
    }
    get(key) {
        this.parseCookies();
        return !!this.cookieStore[key] ? JSON.parse(this.cookieStore[key]) : null;
    }
    remove(key) {
        document.cookie = `${key} = ; expires=Thu, 1 jan 1990 12:00:00 UTC; path=/`;
    }
    set(key, value) {
        const now = new Date();
        now.setTime(now.getTime() + (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].cookie.expireHour * 3600 * 1000));
        const expires = `expires=${now.toUTCString()}`;
        document.cookie = `${key}=${JSON.stringify(value)};${expires};path=/`;
    }
}
CookieService.ɵfac = function CookieService_Factory(t) { return new (t || CookieService)(); };
CookieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CookieService, factory: CookieService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "yZ6d":
/*!*********************************************************************!*\
  !*** ./src/app/landing/home/how-to-start/how-to-start.component.ts ***!
  \*********************************************************************/
/*! exports provided: HowToStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToStartComponent", function() { return HowToStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




function HowToStartComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("lazyLoad", "assets/images/landing-pages/home/step-", i_r2 + 1, ".png");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, step_r1.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, step_r1.description));
} }
class HowToStartComponent {
    constructor() {
        this.steps = [
            { description: 'landing.home.how-to-start.create-your-account-at-no-cost' },
            { description: 'landing.home.how-to-start.add-funds-using-your-local-currency' },
            { description: 'landing.home.how-to-start.save-send-spend-and-withdraw' },
        ];
    }
    ngOnInit() {
    }
}
HowToStartComponent.ɵfac = function HowToStartComponent_Factory(t) { return new (t || HowToStartComponent)(); };
HowToStartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HowToStartComponent, selectors: [["app-how-to-start"]], decls: 12, vars: 7, consts: [[1, "mt-50"], [1, "container"], [1, "d-flex", "justify-content-center", "mb-30"], [1, "text-info", "text-center"], [1, "row"], ["class", "col-12 col-lg-4 mb-20", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "mb-50"], [1, "btn", "btn-primary", "width-160", "height-45", "rounded-pill"], [1, "col-12", "col-lg-4", "mb-20"], [1, "d-flex", "flex-column", "align-items-center", "px-30", "px-lg-0"], [1, "d-flex", "justify-content-center", "mb-10"], ["defaultImage", "assets/images/placeholder.png", "loading", "lazy", 1, "width-50", 3, "lazyLoad", "alt"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", "align-items-center", "width-25", "height-25", "rounded-circle", "bg-primary"], [1, "text-white", "font-12", "font-weight-bold"], [1, "d-flex", "justify-content-center", "my-20"], [1, "font-weight-bold", "text-info"]], template: function HowToStartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HowToStartComponent_div_7_Template, 13, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "landing.home.how-to-start.root"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, "common.get-started"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImageDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3ctdG8tc3RhcnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map