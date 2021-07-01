(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complete-profile-complete-profile-module"],{

/***/ "Oxfj":
/*!*********************************************************************!*\
  !*** ./src/app/auth/complete-profile/complete-profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: CompleteProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteProfileComponent", function() { return CompleteProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var country_state_city__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! country-state-city */ "xjlO");
/* harmony import */ var country_state_city__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(country_state_city__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_constants_form_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/constants/form-label */ "g1r5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/common.service */ "oUVn");
/* harmony import */ var _shared_puzzle_dialog_puzzle_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/puzzle-dialog/puzzle-dialog.service */ "1LKe");
/* harmony import */ var _ui_kit_input_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui-kit/input/text-input/text-input.component */ "vKJo");
/* harmony import */ var _ui_kit_input_select_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui-kit/input/select/select.component */ "5Utk");
/* harmony import */ var _ui_kit_input_phone_number_input_phone_number_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui-kit/input/phone-number-input/phone-number-input.component */ "HxO7");
/* harmony import */ var _ui_kit_input_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui-kit/input/date-picker/date-picker.component */ "ozKf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_kit_common_ui_kit_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui-kit/common-ui-kit/spinner/spinner.component */ "G2iz");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















function CompleteProfileComponent_app_spinner_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-spinner");
} }
class CompleteProfileComponent {
    constructor(fb, commonService, puzzleDialogService) {
        this.fb = fb;
        this.commonService = commonService;
        this.puzzleDialogService = puzzleDialogService;
        this.isLoading = false;
        this.prefix = _core_constants_form_label__WEBPACK_IMPORTED_MODULE_3__["completeProfileForm"].prefix;
        this.countryList = [];
        this.form = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            secondLastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            addressLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            addressLine2: [''],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: ['United States', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            postalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile: [''],
            birthday: [new Date('1990-01-01').getTime(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            inviter: ['']
        });
    }
    ngOnInit() {
        this.countryList = country_state_city__WEBPACK_IMPORTED_MODULE_2___default.a.getAllCountries().map((item) => {
            return {
                label: item.name,
                value: item.name
            };
        });
    }
    mobileChanged(mobile) {
        var _a;
        (_a = this.form.get('phone')) === null || _a === void 0 ? void 0 : _a.setValue(mobile.e164Number);
    }
    chosenDate(date) {
        var _a;
        (_a = this.form.get('birthday')) === null || _a === void 0 ? void 0 : _a.setValue(new Date(date).getTime());
    }
    verifyProfile() {
        if (this.form.invalid) {
            this.commonService.findInvalidField(this.form, _core_constants_form_label__WEBPACK_IMPORTED_MODULE_3__["completeProfileForm"], this.prefix);
            return;
        }
        const puzzleDialogRef = this.puzzleDialogService.openDialog();
        puzzleDialogRef.afterClosed().subscribe((puzzleSolved) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (puzzleSolved) {
                console.log('puzzle solved');
            }
        }));
    }
}
CompleteProfileComponent.ɵfac = function CompleteProfileComponent_Factory(t) { return new (t || CompleteProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_puzzle_dialog_puzzle_dialog_service__WEBPACK_IMPORTED_MODULE_6__["PuzzleDialogService"])); };
CompleteProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CompleteProfileComponent, selectors: [["app-complete-profile"]], decls: 56, vars: 63, consts: [[1, "container"], [1, "row", "justify-content-center", "mt-50"], [1, "col-12", "col-md-8", "col-lg-6"], [1, "d-flex", "mb-50"], [1, "text-dark", "font-weight-bold"], [1, "w-100", 3, "formGroup"], [1, "d-flex", "flex-column"], ["formControlName", "firstName", 3, "id", "placeholder"], [1, "row"], [1, "col-12", "col-lg-6"], ["formControlName", "lastName", 3, "id", "placeholder"], ["formControlName", "secondLastName", 3, "id", "placeholder"], [1, "d-flex", "justify-content-center"], [1, "text-info", "font-12"], ["formControlName", "addressLine1", 3, "id", "placeholder"], ["formControlName", "addressLine2", 3, "id", "placeholder"], ["formControlName", "city", 3, "id", "placeholder"], ["formControlName", "country", 3, "options", "id"], [1, "d-flex", "justify-content-center", "mb-20"], ["formControlName", "state", 3, "id", "placeholder"], ["formControlName", "postalCode", 3, "id", "placeholder"], [1, "mt-20"], ["formControlName", "mobile", 3, "id", "label", "mobileChanged"], ["formControlName", "birthday", 3, "id", "label", "chosenDate"], ["formControlName", "inviter", 3, "id", "label", "placeholder"], [1, "d-flex", "justify-content-center", "mt-30", "mb-80"], [1, "btn", "btn-primary", "rounded-pill", "width-300", 3, "click"], [4, "ngIf"]], template: function CompleteProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-text-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "app-text-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "app-text-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "app-text-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "app-text-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "app-text-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "app-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "app-text-input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "app-text-input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "app-phone-number-input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mobileChanged", function CompleteProfileComponent_Template_app_phone_number_input_mobileChanged_42_listener($event) { return ctx.mobileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "app-date-picker", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("chosenDate", function CompleteProfileComponent_Template_app_date_picker_chosenDate_45_listener($event) { return ctx.chosenDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "app-text-input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompleteProfileComponent_Template_button_click_52_listener() { return ctx.verifyProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, CompleteProfileComponent_app_spinner_55_Template, 1, 0, "app-spinner", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 31, "auth.complete-profile.please-complete-your-profile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx.prefix, "_firstName");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 33, "auth.complete-profile.first-name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx.prefix, "_lastName");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 35, "auth.complete-profile.last-name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx.prefix, "_secondLastName");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 37, "auth.complete-profile.second-last-name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 39, "auth.complete-profile.name-must-match-government-issued-id"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx.prefix, "_addressLine1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 41, "auth.complete-profile.address-line-1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx.prefix, "_addressLine2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 43, "auth.complete-profile.address-line-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx.prefix, "_city");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 45, "auth.complete-profile.city"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx.prefix, "_country");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.countryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 47, "auth.complete-profile.country-you-live-in"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx.prefix, "_state");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](37, 49, "auth.complete-profile.state"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx.prefix, "_postalCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](40, 51, "auth.complete-profile.postal-code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx.prefix, "_phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 53, "auth.complete-profile.phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx.prefix, "_birthday");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](46, 55, "auth.complete-profile.birthday"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "", ctx.prefix, "_inviter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](49, 57, "auth.complete-profile.inviter"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](50, 59, "auth.complete-profile.enter-the-email-or-username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](54, 61, "auth.complete-profile.verify-phone-to-complete-profile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ui_kit_input_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__["TextInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ui_kit_input_select_select_component__WEBPACK_IMPORTED_MODULE_8__["SelectComponent"], _ui_kit_input_phone_number_input_phone_number_input_component__WEBPACK_IMPORTED_MODULE_9__["PhoneNumberInputComponent"], _ui_kit_input_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_10__["DatePickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ui_kit_common_ui_kit_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "rVms":
/*!**************************************************************************!*\
  !*** ./src/app/auth/complete-profile/complete-profile-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: CompleteProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteProfileRoutingModule", function() { return CompleteProfileRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _complete_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete-profile.component */ "Oxfj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _complete_profile_component__WEBPACK_IMPORTED_MODULE_1__["CompleteProfileComponent"] }
];
class CompleteProfileRoutingModule {
}
CompleteProfileRoutingModule.ɵfac = function CompleteProfileRoutingModule_Factory(t) { return new (t || CompleteProfileRoutingModule)(); };
CompleteProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CompleteProfileRoutingModule });
CompleteProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CompleteProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "uDca":
/*!******************************************************************!*\
  !*** ./src/app/auth/complete-profile/complete-profile.module.ts ***!
  \******************************************************************/
/*! exports provided: CompleteProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteProfileModule", function() { return CompleteProfileModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "KZTq");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _ui_kit_input_input_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui-kit/input/input.module */ "M+6g");
/* harmony import */ var _ui_kit_icon_icon_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui-kit/icon/icon.module */ "EjfW");
/* harmony import */ var _ui_kit_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui-kit/pipes/pipes.module */ "W9kA");
/* harmony import */ var _ui_kit_common_ui_kit_common_ui_kit_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui-kit/common-ui-kit/common-ui-kit.module */ "2yv/");
/* harmony import */ var _shared_puzzle_dialog_puzzle_dialog_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/puzzle-dialog/puzzle-dialog.module */ "epQt");
/* harmony import */ var _complete_profile_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./complete-profile-routing.module */ "rVms");
/* harmony import */ var _complete_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./complete-profile.component */ "Oxfj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class CompleteProfileModule {
}
CompleteProfileModule.ɵfac = function CompleteProfileModule_Factory(t) { return new (t || CompleteProfileModule)(); };
CompleteProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: CompleteProfileModule });
CompleteProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"],
            _ui_kit_input_input_module__WEBPACK_IMPORTED_MODULE_5__["InputModule"],
            _ui_kit_icon_icon_module__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
            _ui_kit_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _ui_kit_common_ui_kit_common_ui_kit_module__WEBPACK_IMPORTED_MODULE_8__["CommonUiKitModule"],
            _shared_puzzle_dialog_puzzle_dialog_module__WEBPACK_IMPORTED_MODULE_9__["PuzzleDialogModule"],
            _complete_profile_routing_module__WEBPACK_IMPORTED_MODULE_10__["CompleteProfileRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](CompleteProfileModule, { declarations: [_complete_profile_component__WEBPACK_IMPORTED_MODULE_11__["CompleteProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToModule"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"],
        _ui_kit_input_input_module__WEBPACK_IMPORTED_MODULE_5__["InputModule"],
        _ui_kit_icon_icon_module__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
        _ui_kit_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
        _ui_kit_common_ui_kit_common_ui_kit_module__WEBPACK_IMPORTED_MODULE_8__["CommonUiKitModule"],
        _shared_puzzle_dialog_puzzle_dialog_module__WEBPACK_IMPORTED_MODULE_9__["PuzzleDialogModule"],
        _complete_profile_routing_module__WEBPACK_IMPORTED_MODULE_10__["CompleteProfileRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=complete-profile-complete-profile-module.js.map