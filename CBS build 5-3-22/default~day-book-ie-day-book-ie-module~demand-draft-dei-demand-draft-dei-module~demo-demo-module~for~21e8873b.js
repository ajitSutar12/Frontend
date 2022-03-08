(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~day-book-ie-day-book-ie-module~demand-draft-dei-demand-draft-dei-module~demo-demo-module~for~21e8873b"],{

/***/ "./node_modules/rxjs-compat/Observable.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs-compat/Observable.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
exports.Observable = rxjs_1.Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/Observable.js":
/*!*****************************************!*\
  !*** ./node_modules/rxjs/Observable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! rxjs-compat/Observable */ "./node_modules/rxjs-compat/Observable.js"));
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./src/app/shared/elements/select-option.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/elements/select-option.service.ts ***!
  \**********************************************************/
/*! exports provided: SelectOptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOptionService", function() { return SelectOptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class SelectOptionService {
    getCharacters() {
        return this.cloneOptions(SelectOptionService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(SelectOptionService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(SelectOptionService.PLAYER_ONE);
        characters[1].disabled = true;
        characters[4].disabled = true;
        return characters;
    }
    getCountries() {
        return this.cloneOptions(SelectOptionService.COUNTRIES);
    }
    loadCountries() {
        return this.loadOptions(SelectOptionService.COUNTRIES);
    }
    loadOptions(options) {
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]((obs) => {
            setTimeout(() => {
                obs.next(this.cloneOptions(options));
                obs.complete();
            }, 5000);
        });
    }
    cloneOptions(options) {
        return options.map(option => ({ value: option.value, label: option.label }));
    }
}
SelectOptionService.PLAYER_ONE = [
    { value: 'Alabama', label: 'Alabama' },
    { value: 'Wyoming', label: 'Wyoming' },
    { value: 'Coming', label: 'Coming' },
    { value: 'HenryDie', label: 'Henry Die' },
    { value: 'JohnDoe', label: 'John Doe' }
];
SelectOptionService.COUNTRIES = [
    { value: 'AF', label: 'Afghanistan' },
    { value: 'AX', label: 'Åland Islands' },
    { value: 'AL', label: 'Albania' },
    { value: 'DZ', label: 'Algeria' },
    { value: 'AS', label: 'American Samoa' },
    { value: 'AD', label: 'Andorra' },
    { value: 'AO', label: 'Angola' },
    { value: 'AI', label: 'Anguilla' },
    { value: 'AQ', label: 'Antarctica' },
    { value: 'AG', label: 'Antigua and Barbuda' },
    { value: 'AR', label: 'Argentina' },
    { value: 'AM', label: 'Armenia' },
    { value: 'AW', label: 'Aruba' },
    { value: 'AU', label: 'Australia' },
    { value: 'AT', label: 'Austria' },
    { value: 'AZ', label: 'Azerbaijan' },
    { value: 'BS', label: 'Bahamas' },
    { value: 'BH', label: 'Bahrain' },
    { value: 'BD', label: 'Bangladesh' },
    { value: 'BB', label: 'Barbados' },
    { value: 'BY', label: 'Belarus' },
    { value: 'BE', label: 'Belgium' },
    { value: 'BZ', label: 'Belize' },
    { value: 'BJ', label: 'Benin' },
    { value: 'BM', label: 'Bermuda' },
    { value: 'BT', label: 'Bhutan' },
    { value: 'BO', label: 'Bolivia, Plurinational State of' },
    { value: 'BA', label: 'Bosnia and Herzegovina' },
    { value: 'BW', label: 'Botswana' },
    { value: 'BV', label: 'Bouvet Island' },
    { value: 'BR', label: 'Brazil' },
    { value: 'IO', label: 'British Indian Ocean Territory' },
    { value: 'BN', label: 'Brunei Darussalam' },
    { value: 'BG', label: 'Bulgaria' },
    { value: 'BF', label: 'Burkina Faso' },
    { value: 'BI', label: 'Burundi' },
    { value: 'KH', label: 'Cambodia' },
    { value: 'CM', label: 'Cameroon' },
    { value: 'CA', label: 'Canada' },
    { value: 'CV', label: 'Cape Verde' },
    { value: 'KY', label: 'Cayman Islands' },
    { value: 'CF', label: 'Central African Republic' },
    { value: 'TD', label: 'Chad' },
    { value: 'CL', label: 'Chile' },
    { value: 'CN', label: 'China' },
    { value: 'CX', label: 'Christmas Island' },
    { value: 'CC', label: 'Cocos (Keeling) Islands' },
    { value: 'CO', label: 'Colombia' },
    { value: 'KM', label: 'Comoros' },
    { value: 'CG', label: 'Congo' },
    { value: 'CD', label: 'Congo, the Democratic Republic of the' },
    { value: 'CK', label: 'Cook Islands' },
    { value: 'CR', label: 'Costa Rica' },
    { value: 'CI', label: 'Côte d\'Ivoire' },
    { value: 'HR', label: 'Croatia' },
    { value: 'CU', label: 'Cuba' },
    { value: 'CY', label: 'Cyprus' },
    { value: 'CZ', label: 'Czech Republic' },
    { value: 'DK', label: 'Denmark' },
    { value: 'DJ', label: 'Djibouti' },
    { value: 'DM', label: 'Dominica' },
    { value: 'DO', label: 'Dominican Republic' },
    { value: 'EC', label: 'Ecuador' },
    { value: 'EG', label: 'Egypt' },
    { value: 'SV', label: 'El Salvador' },
    { value: 'GQ', label: 'Equatorial Guinea' },
    { value: 'ER', label: 'Eritrea' },
    { value: 'EE', label: 'Estonia' },
    { value: 'ET', label: 'Ethiopia' },
    { value: 'FK', label: 'Falkland Islands (Malvinas)' },
    { value: 'FO', label: 'Faroe Islands' },
    { value: 'FJ', label: 'Fiji' },
    { value: 'FI', label: 'Finland' },
    { value: 'FR', label: 'France' },
    { value: 'GF', label: 'French Guiana' },
    { value: 'PF', label: 'French Polynesia' },
    { value: 'TF', label: 'French Southern Territories' },
    { value: 'GA', label: 'Gabon' },
    { value: 'GM', label: 'Gambia' },
    { value: 'GE', label: 'Georgia' },
    { value: 'DE', label: 'Germany' },
    { value: 'GH', label: 'Ghana' },
    { value: 'GI', label: 'Gibraltar' },
    { value: 'GR', label: 'Greece' },
    { value: 'GL', label: 'Greenland' },
    { value: 'GD', label: 'Grenada' },
    { value: 'GP', label: 'Guadeloupe' },
    { value: 'GU', label: 'Guam' },
    { value: 'GT', label: 'Guatemala' },
    { value: 'GG', label: 'Guernsey' },
    { value: 'GN', label: 'Guinea' },
    { value: 'GW', label: 'Guinea-Bissau' },
    { value: 'GY', label: 'Guyana' },
    { value: 'HT', label: 'Haiti' },
    { value: 'HM', label: 'Heard Island and McDonald Islands' },
    { value: 'VA', label: 'Holy See (Vatican City State)' },
    { value: 'HN', label: 'Honduras' },
    { value: 'HK', label: 'Hong Kong' },
    { value: 'HU', label: 'Hungary' },
    { value: 'IS', label: 'Iceland' },
    { value: 'IN', label: 'India' },
    { value: 'ID', label: 'Indonesia' },
    { value: 'IR', label: 'Iran, Islamic Republic of' },
    { value: 'IQ', label: 'Iraq' },
    { value: 'IE', label: 'Ireland' },
    { value: 'IM', label: 'Isle of Man' },
    { value: 'IL', label: 'Israel' },
    { value: 'IT', label: 'Italy' },
    { value: 'JM', label: 'Jamaica' },
    { value: 'JP', label: 'Japan' },
    { value: 'JE', label: 'Jersey' },
    { value: 'JO', label: 'Jordan' },
    { value: 'KZ', label: 'Kazakhstan' },
    { value: 'KE', label: 'Kenya' },
    { value: 'KI', label: 'Kiribati' },
    { value: 'KP', label: 'Korea, Democratic People\'s Republic of' },
    { value: 'KR', label: 'Korea, Republic of' },
    { value: 'KW', label: 'Kuwait' },
    { value: 'KG', label: 'Kyrgyzstan' },
    { value: 'LA', label: 'Lao People\'s Democratic Republic' },
    { value: 'LV', label: 'Latvia' },
    { value: 'LB', label: 'Lebanon' },
    { value: 'LS', label: 'Lesotho' },
    { value: 'LR', label: 'Liberia' },
    { value: 'LY', label: 'Libyan Arab Jamahiriya' },
    { value: 'LI', label: 'Liechtenstein' },
    { value: 'LT', label: 'Lithuania' },
    { value: 'LU', label: 'Luxembourg' },
    { value: 'MO', label: 'Macao' },
    { value: 'MK', label: 'Macedonia, the former Yugoslav Republic of' },
    { value: 'MG', label: 'Madagascar' },
    { value: 'MW', label: 'Malawi' },
    { value: 'MY', label: 'Malaysia' },
    { value: 'MV', label: 'Maldives' },
    { value: 'ML', label: 'Mali' },
    { value: 'MT', label: 'Malta' },
    { value: 'MH', label: 'Marshall Islands' },
    { value: 'MQ', label: 'Martinique' },
    { value: 'MR', label: 'Mauritania' },
    { value: 'MU', label: 'Mauritius' },
    { value: 'YT', label: 'Mayotte' },
    { value: 'MX', label: 'Mexico' },
    { value: 'FM', label: 'Micronesia, Federated States of' },
    { value: 'MD', label: 'Moldova, Republic of' },
    { value: 'MC', label: 'Monaco' },
    { value: 'MN', label: 'Mongolia' },
    { value: 'ME', label: 'Montenegro' },
    { value: 'MS', label: 'Montserrat' },
    { value: 'MA', label: 'Morocco' },
    { value: 'MZ', label: 'Mozambique' },
    { value: 'MM', label: 'Myanmar' },
    { value: 'NA', label: 'Namibia' },
    { value: 'NR', label: 'Nauru' },
    { value: 'NP', label: 'Nepal' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'AN', label: 'Netherlands Antilles' },
    { value: 'NC', label: 'New Caledonia' },
    { value: 'NZ', label: 'New Zealand' },
    { value: 'NI', label: 'Nicaragua' },
    { value: 'NE', label: 'Niger' },
    { value: 'NG', label: 'Nigeria' },
    { value: 'NU', label: 'Niue' },
    { value: 'NF', label: 'Norfolk Island' },
    { value: 'MP', label: 'Northern Mariana Islands' },
    { value: 'NO', label: 'Norway' },
    { value: 'OM', label: 'Oman' },
    { value: 'PK', label: 'Pakistan' },
    { value: 'PW', label: 'Palau' },
    { value: 'PS', label: 'Palestinian Territory, Occupied' },
    { value: 'PA', label: 'Panama' },
    { value: 'PG', label: 'Papua New Guinea' },
    { value: 'PY', label: 'Paraguay' },
    { value: 'PE', label: 'Peru' },
    { value: 'PH', label: 'Philippines' },
    { value: 'PN', label: 'Pitcairn' },
    { value: 'PL', label: 'Poland' },
    { value: 'PT', label: 'Portugal' },
    { value: 'PR', label: 'Puerto Rico' },
    { value: 'QA', label: 'Qatar' },
    { value: 'RE', label: 'R&eacute;union' },
    { value: 'RO', label: 'Romania' },
    { value: 'RU', label: 'Russian Federation' },
    { value: 'RW', label: 'Rwanda' },
    { value: 'BL', label: 'Saint Barth&eacute;lemy' },
    { value: 'SH', label: 'Saint Helena, Ascension and Tristan da Cunha' },
    { value: 'KN', label: 'Saint Kitts and Nevis' },
    { value: 'LC', label: 'Saint Lucia' },
    { value: 'MF', label: 'Saint Martin (French part)' },
    { value: 'PM', label: 'Saint Pierre and Miquelon' },
    { value: 'VC', label: 'Saint Vincent and the Grenadines' },
    { value: 'WS', label: 'Samoa' },
    { value: 'SM', label: 'San Marino' },
    { value: 'ST', label: 'Sao Tome and Principe' },
    { value: 'SA', label: 'Saudi Arabia' },
    { value: 'SN', label: 'Senegal' },
    { value: 'RS', label: 'Serbia' },
    { value: 'SC', label: 'Seychelles' },
    { value: 'SL', label: 'Sierra Leone' },
    { value: 'SG', label: 'Singapore' },
    { value: 'SK', label: 'Slovakia' },
    { value: 'SI', label: 'Slovenia' },
    { value: 'SB', label: 'Solomon Islands' },
    { value: 'SO', label: 'Somalia' },
    { value: 'ZA', label: 'South Africa' },
    { value: 'GS', label: 'South Georgia and the South Sandwich Islands' },
    { value: 'ES', label: 'Spain' },
    { value: 'LK', label: 'Sri Lanka' },
    { value: 'SD', label: 'Sudan' },
    { value: 'SR', label: 'Suriname' },
    { value: 'SJ', label: 'Svalbard and Jan Mayen' },
    { value: 'SZ', label: 'Swaziland' },
    { value: 'SE', label: 'Sweden' },
    { value: 'CH', label: 'Switzerland' },
    { value: 'SY', label: 'Syrian Arab Republic' },
    { value: 'TW', label: 'Taiwan, Province of China' },
    { value: 'TJ', label: 'Tajikistan' },
    { value: 'TZ', label: 'Tanzania, United Republic of' },
    { value: 'TH', label: 'Thailand' },
    { value: 'TL', label: 'Timor-Leste' },
    { value: 'TG', label: 'Togo' },
    { value: 'TK', label: 'Tokelau' },
    { value: 'TO', label: 'Tonga' },
    { value: 'TT', label: 'Trinidad and Tobago' },
    { value: 'TN', label: 'Tunisia' },
    { value: 'TR', label: 'Turkey' },
    { value: 'TM', label: 'Turkmenistan' },
    { value: 'TC', label: 'Turks and Caicos Islands' },
    { value: 'TV', label: 'Tuvalu' },
    { value: 'UG', label: 'Uganda' },
    { value: 'UA', label: 'Ukraine' },
    { value: 'AE', label: 'United Arab Emirates' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'US', label: 'United States' },
    { value: 'UM', label: 'United States Minor Outlying Islands' },
    { value: 'UY', label: 'Uruguay' },
    { value: 'UZ', label: 'Uzbekistan' },
    { value: 'VU', label: 'Vanuatu' },
    { value: 'VE', label: 'Venezuela, Bolivarian Republic of' },
    { value: 'VN', label: 'Viet Nam' },
    { value: 'VG', label: 'Virgin Islands, British' },
    { value: 'VI', label: 'Virgin Islands, U.S.' },
    { value: 'WF', label: 'Wallis and Futuna' },
    { value: 'EH', label: 'Western Sahara' },
    { value: 'YE', label: 'Yemen' },
    { value: 'ZM', label: 'Zambia' },
    { value: 'ZW', label: 'Zimbabwe' }
];
SelectOptionService.ɵfac = function SelectOptionService_Factory(t) { return new (t || SelectOptionService)(); };
SelectOptionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SelectOptionService, factory: SelectOptionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectOptionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~day-book-ie-day-book-ie-module~demand-draft-dei-demand-draft-dei-module~demo-demo-module~for~21e8873b.js.map