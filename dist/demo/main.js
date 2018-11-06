(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nli{\r\n  list-style: none;\r\n}\r\n.\r\n.srchText{\r\n  line-height: 30px;\r\n  border-radius: 5px;\r\n  width: 70%;\r\n}\r\n#searchimg{\r\n\twidth: 20px;\r\n\theight: 20px;\r\n}\r\n#kkk{\r\n  background-color: rgb(247, 242, 223);\r\n  font-weight: bold;\r\n}\r\n::-webkit-input-placeholder{\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n}\r\n::-ms-input-placeholder{\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n}\r\n::placeholder{\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n}\r\n.nav-link{\r\n  color: black;\r\n  font-style: italic ;\r\n  font-weight: bold;\r\n}\r\n.nav {\r\n  background-image: linear-gradient(45deg,#ADEAEF,#C3EEF2);\r\n  border:none;\r\n}\r\n#loginBtn{\r\n\tline-height: 15px;\r\n\tmargin-left: 500px;\r\n  cursor: pointer;\r\n\r\n}\r\n.lgModal{\r\n\toverflow: hidden;\r\n\theight: 400px;\r\n\twidth: 40%;\r\n\tborder-radius: 10px;\r\n\tborder:4px solid rgb(3, 102, 72);\r\n\tpadding-top: 2%;\r\n\ttop: 25%;\r\n\tleft: 25%;\r\n\tposition: fixed;\r\n\tz-index: 100;\r\n\tbackground-color: white;\r\n\tdisplay: none;\r\n\r\n}\r\n.modal-content{\r\n\tborder:none;\r\n\tbox-shadow: none;\r\n\r\n}\r\n.modal-content>input{\r\n\tborder:2px solid #BDEAEF ;\r\n\twidth: 50%;\r\n\theight: 50px;\r\n\tmargin:10px 25%;\r\n\tborder-radius: 5px;\r\n\r\n\r\n}\r\n.modal-content>label{\r\n\tfont-size: 15px;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tmargin-bottom: 10px;\r\n\r\n}\r\n.modal-content>button{\r\n\twidth: 50%;\r\n\tmargin:15px 25%;\r\n}\r\n.lgModal>img{\r\n\tmargin-top:0;\r\n\theight: 22px;\r\n\twidth: 22px;\r\n\tfloat: right;\r\n\tcursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7O0VBRUUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0NBQ1o7QUFFRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2I7QUFDRDtFQUNFLHFDQUFxQztFQUNyQyxrQkFBa0I7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEI7QUFIRDtDQUNDLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEI7QUFIRDtDQUNDLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEI7QUFDRDtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSx5REFBeUQ7RUFDekQsWUFBWTtDQUNiO0FBR0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0VBQ2xCLGdCQUFnQjs7Q0FFakI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2QsV0FBVztDQUNYLG9CQUFvQjtDQUNwQixpQ0FBaUM7Q0FDakMsZ0JBQWdCO0NBQ2hCLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYix3QkFBd0I7Q0FDeEIsY0FBYzs7Q0FFZDtBQUNEO0NBQ0MsWUFBWTtDQUNaLGlCQUFpQjs7Q0FFakI7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQixXQUFXO0NBQ1gsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixtQkFBbUI7OztDQUduQjtBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLG9CQUFvQjs7Q0FFcEI7QUFDRDtDQUNDLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEI7QUFDRDtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2IsWUFBWTtDQUNaLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5saXtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5cclxuLnNyY2hUZXh0e1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4jc2VhcmNoaW1ne1xyXG5cdHdpZHRoOiAyMHB4O1xyXG5cdGhlaWdodDogMjBweDtcclxufVxyXG4ja2tre1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0MiwgMjIzKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG46OnBsYWNlaG9sZGVye1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubmF2LWxpbmt7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYyA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm5hdiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCNBREVBRUYsI0MzRUVGMik7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbn1cclxuXHJcblxyXG4jbG9naW5CdG57XHJcblx0bGluZS1oZWlnaHQ6IDE1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDUwMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuLmxnTW9kYWx7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRoZWlnaHQ6IDQwMHB4O1xyXG5cdHdpZHRoOiA0MCU7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRib3JkZXI6NHB4IHNvbGlkIHJnYigzLCAxMDIsIDcyKTtcclxuXHRwYWRkaW5nLXRvcDogMiU7XHJcblx0dG9wOiAyNSU7XHJcblx0bGVmdDogMjUlO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR6LWluZGV4OiAxMDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHJcbn1cclxuLm1vZGFsLWNvbnRlbnR7XHJcblx0Ym9yZGVyOm5vbmU7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHJcbn1cclxuLm1vZGFsLWNvbnRlbnQ+aW5wdXR7XHJcblx0Ym9yZGVyOjJweCBzb2xpZCAjQkRFQUVGIDtcclxuXHR3aWR0aDogNTAlO1xyXG5cdGhlaWdodDogNTBweDtcclxuXHRtYXJnaW46MTBweCAyNSU7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuXHJcbn1cclxuLm1vZGFsLWNvbnRlbnQ+bGFiZWx7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxufVxyXG4ubW9kYWwtY29udGVudD5idXR0b257XHJcblx0d2lkdGg6IDUwJTtcclxuXHRtYXJnaW46MTVweCAyNSU7XHJcbn1cclxuLmxnTW9kYWw+aW1ne1xyXG5cdG1hcmdpbi10b3A6MDtcclxuXHRoZWlnaHQ6IDIycHg7XHJcblx0d2lkdGg6IDIycHg7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"#\">Home</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">About Us</a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" href=\"#\">Location</a>\n          <a class=\"dropdown-item\" href=\"#\">Contact us</a>\n          <a class=\"dropdown-item\" href=\"#\">Career</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" >Membership</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"product\">Product</a>\n      </li>\n      <li class=\"nav-item\">\n          <input class=\"srchText\" type=\"text\" placeholder=\"Search\">\n          <button id=\"kkk\" type=\"submit\" class=\"btn btn-default\">GO</button>\n\t        <img src=\"assets/img/search.png\" id=\"searchimg\">\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"loginBtn\">Login</a>\n      </li>\n    </ul>\n\n  <!-- Modal ------------------------------------------------------------------------------------------------- -->\n\t<div class=\"lgModal animate\" id=\"login1\">\n      <img src=\"assets/img/x.png\" id=\"closeimg\">\n      <form action=\"#\" class=\"modal-content\">\n        <label for=\"uname\">UserName</label>\n        <input type=\"text\" name=\"uname\" placeholder=\"Enter UserName\" required=\"required\"/>\n        <label for=\"psw\">Password</label>\n        <input type=\"password\" name=\"psw\" placeholder=\"Enter Password\" required=\"required\"/>\n        <button type=\"submit\">Submit</button>\n        <label class=\"checkbox\">\n          <input type=\"checkbox\" name=\"\">Keep me login\n        </label>\n      </form>\n    </div>\n\n    <!-- end of Modal ------------------------------------------------------------------------------------------------- -->\n    <router-outlet></router-outlet>\n    <app-foot></app-foot>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        $(function () {
            $('#loginBtn').on('click', function () {
                $('.lgModal').css('display', 'block');
                $(document.body).css('background', 'rgba(0,0,0,0.55)');
            });
        });
        $(function () {
            $('#closeimg').on('click', function () {
                $('.lgModal').css('display', 'none');
                $(document.body).css('background', 'rgba(0,0,0,0)');
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _foot_foot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./foot/foot.component */ "./src/app/foot/foot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*Router Setup */


/*Components*/



/*bootstrap import*/




/*Router Setup */
var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"],
                _foot_foot_component__WEBPACK_IMPORTED_MODULE_10__["FootComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/foot/foot.component.css":
/*!*****************************************!*\
  !*** ./src/app/foot/foot.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n  list-style: none;\r\n}\r\n.foot2{\r\n  clear: both;\r\n  margin-top: 10px;\r\n\theight: 25px;\r\n\twidth: 100%;\r\n\r\n}\r\n.foot2>li{\r\n\tfloat: left;\r\n\tmargin:0 20px;\r\n}\r\n.foot2>span{\r\n\tfloat: right;\r\n}\r\n.foot{\r\n\twidth: 98%;\r\n  height: 300px;\r\n  margin-top: 800px;\r\n  padding-top: 20px;\r\n  border-top: 2px solid black;\r\n  clear: both;\r\n  border-bottom: 2px solid black;\r\n\r\n}\r\n.footContent{\r\n\twidth: 25%;\r\n\theight: 100%;\r\n\t/*border:1px solid red;*/\r\n\tfloat:left;\r\n}\r\n.footContent>li{\r\n\tmargin-top: 10px;\r\n\ttext-align: center;\r\n\tcolor: #333;\r\n}\r\n.footContent>li>a{\r\n\tcolor: #555;\r\n\r\n}\r\n.foot2>li>a{\r\n\tcolor: #555;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdC9mb290LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEIsYUFBYTtDQUNiLFlBQVk7O0NBRVo7QUFDRDtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2Q7QUFDRDtDQUNDLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsV0FBVztFQUNWLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osK0JBQStCOztDQUVoQztBQUNEO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsV0FBVztDQUNYO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWjtBQUNEO0NBQ0MsWUFBWTs7Q0FFWjtBQUNEO0NBQ0MsWUFBWTs7Q0FFWiIsImZpbGUiOiJzcmMvYXBwL2Zvb3QvZm9vdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uZm9vdDJ7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHRoZWlnaHQ6IDI1cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbi5mb290Mj5saXtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRtYXJnaW46MCAyMHB4O1xyXG59XHJcbi5mb290Mj5zcGFue1xyXG5cdGZsb2F0OiByaWdodDtcclxufVxyXG4uZm9vdHtcclxuXHR3aWR0aDogOTglO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgbWFyZ2luLXRvcDogODAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuXHJcbn1cclxuLmZvb3RDb250ZW50e1xyXG5cdHdpZHRoOiAyNSU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdC8qYm9yZGVyOjFweCBzb2xpZCByZWQ7Ki9cclxuXHRmbG9hdDpsZWZ0O1xyXG59XHJcbi5mb290Q29udGVudD5saXtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogIzMzMztcclxufVxyXG4uZm9vdENvbnRlbnQ+bGk+YXtcclxuXHRjb2xvcjogIzU1NTtcclxuXHJcbn1cclxuLmZvb3QyPmxpPmF7XHJcblx0Y29sb3I6ICM1NTU7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/foot/foot.component.html":
/*!******************************************!*\
  !*** ./src/app/foot/foot.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"foot\">\n\t\t<div class=\"footContent\">\n\t\t\t<li><h4>Help</h4></li>\n\t\t\t<li><a href=\"#\">Fina a Store</a></li>\n\t\t\t<li><a href=\"#\">Store App</a></li>\n\t\t\t<li><a href=\"#\">Order Status</a></li>\n\t\t\t<li><a href=\"#\">Shopping Help</a></li>\n\t\t\t<li><a href=\"#\">Field Trip</a></li>\n\t\t\t<li><a href=\"#\">Refurbinished and Clearance</a></li>\n\t\t\t<li><a href=\"#\">Store Camp</a></li>\n\t\t</div>\n\t\t<div class=\"footContent\">\n\t\t\t<li><h4>About Us</h4></li>\n\t\t\t<li><a href=\"#\">Newsroom</a></li>\n\t\t\t<li><a href=\"#\">Leadership</a></li>\n\t\t\t<li><a href=\"#\">Investors</a></li>\n\t\t\t<li><a href=\"#\">Event</a></li>\n\t\t\t<li><a href=\"#\">Contact Us</a></li>\n\t\t\t<li><a href=\"#\">Job Opportunities</a></li>\n\t\t</div>\n\t\t<div class=\"footContent\">\n\t\t\t<li><h4>Company Value</h4></li>\n\t\t\t<li><a href=\"#\">Accessiblity</a></li>\n\t\t\t<li><a href=\"#\">Enviroment</a></li>\n\t\t\t<li><a href=\"#\">Privacy</a></li>\n\t\t\t<li><a href=\"#\">Suppiler Responsibility</a></li>\n\t\t</div>\n\t\t<div class=\"footContent\">\n\t\t\t<li><h4>Account</h4></li>\n\t\t\t<li><a href=\"#\">Manage your ID</a></li>\n\t\t\t<li><a href=\"#\">Store Account</a></li>\n\t\t</div>\n\t</div>\n\n\t<div class=\"foot2\">\n\t\t<span>Copyright©️ 2018 RunBin Ju. All rights Reserved.</span>\n\t\t<li><a href=\"#\"> Privacy Policy</a></li>\n\t\t<li><a href=\"#\"> Use of Cookies</a></li>\n\t\t<li><a href=\"#\"> Terms of Use</a></li>\n\t\t<li><a href=\"#\"> Legal</a></li>\n\t\t<li><a href=\"#\"> Site Map</a></li>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/foot/foot.component.ts":
/*!****************************************!*\
  !*** ./src/app/foot/foot.component.ts ***!
  \****************************************/
/*! exports provided: FootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootComponent", function() { return FootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FootComponent = /** @class */ (function () {
    function FootComponent() {
    }
    FootComponent.prototype.ngOnInit = function () {
    };
    FootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foot',
            template: __webpack_require__(/*! ./foot.component.html */ "./src/app/foot/foot.component.html"),
            styles: [__webpack_require__(/*! ./foot.component.css */ "./src/app/foot/foot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FootComponent);
    return FootComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4{\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n  font-weight: bold;\r\n  color:rgba(0, 183, 255, 0.945);\r\n}\r\n.myWeb{\r\n  background-image: linear-gradient(45deg,#ADEAEF,#C3EEF2);\r\n  border:1px solid #ADEAEF;\r\n  text-align: center;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  color:rgba(19, 20, 1, 0.568);\r\n\r\n  font-size:15px;\r\n}\r\n.card{\r\n  padding: 0;\r\n  float: left;\r\n  margin-top: 10px;\r\n  margin-left: 30px;\r\n  height: 20%;\r\n}\r\n.card-img-top{\r\n  width: 100%;\r\n}\r\n#carousel-example-generic{\r\n\r\n\t/*border:1px solid black;*/\r\n\theight: 400px;\r\n}\r\n.carousel-inner{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n.carousel-inner img{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n#pig{\r\n\twidth: 80%;\r\n\r\n}\r\n.carousel-caption{\r\n\t/*border:1px solid black;*/\r\n\tmargin-bottom: 32%;\r\n}\r\n.pigbtn{\r\n\tfloat: right;\r\n\theight: 50px;\r\n\twidth:150px;\r\n\tbackground-color: #22C7C2;\r\n\tborder-radius: 5px;\r\n}\r\n.pigCap{\r\n\tmargin-bottom:15%;\r\n}\r\n.sideNav{\r\n\tposition: fixed;\r\n\ttop: 52px;\r\n\tleft: 0;\r\n\r\n}\r\n.list_dt{\r\n\r\n    background: white;\r\n    color: black;\r\n    width: 120px;\r\n    padding: 0 40px 0 20px;\r\n    height: 34px;\r\n    line-height: 34px;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    position: relative;\r\n    border-bottom: 1px solid #464646;\r\n}\r\n.list_dt:hover{\r\n    background: #ADEAEF;\r\n}\r\n.list_dt:hover ._after{\r\n    display: block;\r\n    width: 3px;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    background: #ADEAEF;\r\n}\r\n#open{\r\n    background: white;\r\n}\r\n#open ._after{\r\n    display: block;\r\n    width: 3px;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    background: #ADEAEF;\r\n}\r\n.list_dt_icon{\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 11px;\r\n    display: block;\r\n    width: 12px;\r\n    height: 12px;\r\n\r\n    background-size: cover;\r\n}\r\n#open .list_dt_icon{\r\n\r\n    background-size: cover;\r\n}\r\n.list_dd{\r\n    display: none;\r\n}\r\n.list_li{\r\n    background: white;\r\n    list-style-type: none;\r\n    color: black;\r\n    width: 120px;\r\n    padding: 0 30px;\r\n    height: 34px;\r\n    line-height: 34px;\r\n    cursor: pointer;\r\n    border-bottom: 1px solid #6b6b6b;\r\n}\r\n.list_li:hover{\r\n    background: #999;\r\n}\r\n.formStyle{\r\n  float: right;\r\n  width:40%;\r\n  margin-top: 10px;\r\n  padding-top: 10px;\r\n  border:1px solid black;\r\n  border-radius: 10px;\r\n  background-color: rgb(217, 241, 245);\r\n  margin-bottom: 10px;\r\n}\r\n.jumbotron{\r\n  margin-top: 10px;\r\n  width: 100%;\r\n  height: 370px;\r\n  clear: both;\r\n  overflow: hidden;\r\n}\r\n.someContent>img{\r\n  width:100%;\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsK0JBQStCO0NBQ2hDO0FBQ0Q7RUFDRSx5REFBeUQ7RUFDekQseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDZCQUE2Qjs7RUFFN0IsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7O0NBRUMsMkJBQTJCO0NBQzNCLGNBQWM7Q0FDZDtBQUNEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsV0FBVzs7Q0FFWDtBQUNEO0NBQ0MsMkJBQTJCO0NBQzNCLG1CQUFtQjtDQUNuQjtBQUVEO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYixZQUFZO0NBQ1osMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCO0FBR0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLFFBQVE7O0NBRVI7QUFFRDs7SUFFSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlDQUFpQztDQUNwQztBQUNEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLE9BQU87SUFDUCxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixPQUFPO0lBQ1Asb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7O0lBRWIsdUJBQXVCO0NBQzFCO0FBQ0Q7O0lBRUksdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztDQUNwQztBQUNEO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBR0Q7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixxQ0FBcUM7RUFDckMsb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjpyZ2JhKDAsIDE4MywgMjU1LCAwLjk0NSk7XHJcbn1cclxuLm15V2Vie1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywjQURFQUVGLCNDM0VFRjIpO1xyXG4gIGJvcmRlcjoxcHggc29saWQgI0FERUFFRjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOnJnYmEoMTksIDIwLCAxLCAwLjU2OCk7XHJcblxyXG4gIGZvbnQtc2l6ZToxNXB4O1xyXG59XHJcbi5jYXJke1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBoZWlnaHQ6IDIwJTtcclxufVxyXG4uY2FyZC1pbWctdG9we1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiNjYXJvdXNlbC1leGFtcGxlLWdlbmVyaWN7XHJcblxyXG5cdC8qYm9yZGVyOjFweCBzb2xpZCBibGFjazsqL1xyXG5cdGhlaWdodDogNDAwcHg7XHJcbn1cclxuLmNhcm91c2VsLWlubmVye1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG4uY2Fyb3VzZWwtaW5uZXIgaW1ne1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG4jcGlne1xyXG5cdHdpZHRoOiA4MCU7XHJcblxyXG59XHJcbi5jYXJvdXNlbC1jYXB0aW9ue1xyXG5cdC8qYm9yZGVyOjFweCBzb2xpZCBibGFjazsqL1xyXG5cdG1hcmdpbi1ib3R0b206IDMyJTtcclxufVxyXG5cclxuLnBpZ2J0bntcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdHdpZHRoOjE1MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyMkM3QzI7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5waWdDYXB7XHJcblx0bWFyZ2luLWJvdHRvbToxNSU7XHJcbn1cclxuXHJcblxyXG4uc2lkZU5hdntcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiA1MnB4O1xyXG5cdGxlZnQ6IDA7XHJcblxyXG59XHJcblxyXG4ubGlzdF9kdHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIHBhZGRpbmc6IDAgNDBweCAwIDIwcHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ2NDY0NjtcclxufVxyXG4ubGlzdF9kdDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNBREVBRUY7XHJcbn1cclxuLmxpc3RfZHQ6aG92ZXIgLl9hZnRlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQURFQUVGO1xyXG59XHJcbiNvcGVue1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuI29wZW4gLl9hZnRlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQURFQUVGO1xyXG59XHJcbi5saXN0X2R0X2ljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTFweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4jb3BlbiAubGlzdF9kdF9pY29ue1xyXG5cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmxpc3RfZGR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5saXN0X2xpe1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNmI2YjZiO1xyXG59XHJcbi5saXN0X2xpOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogIzk5OTtcclxufVxyXG5cclxuXHJcbi5mb3JtU3R5bGV7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOjQwJTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCAyNDEsIDI0NSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmp1bWJvdHJvbntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzcwcHg7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc29tZUNvbnRlbnQ+aW1ne1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"myWeb\">\n  ClotMilk's Website\n</div>\n<!-- carousel ------------------------------------------------------------------------------------------------- -->\n<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"item active\">\n      <img src=\"assets/img/blue.jpg\">\n      <div class=\"carousel-caption\">\n        <h3>Always do what you're afraid to do.</h3>\n      </div>\n    </div>\n    <div class=\"item\">\n      <img src=\"assets/img/star3.png\" alt=\"...\">\n      <div class=\"carousel-caption\">\n        <h3>I will prove myself strong when they think I am sick</h3>\n      </div>\n    </div>\n    <div class=\"item\">\n      <img src=\"assets/img/tpig.jpg\" alt=\"...\" id=\"pig\">\n      <div class=\"carousel-caption pigCap\">\n        <button class=\"pigbtn\" value=\"Learn More\">Learn More</button>\n      </div>\n    ...\n  </div>\n\n  <!-- carousel Controls -->\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n  </a>\n</div>\n\n<!--Veritical Nav----------------------------------------------------------------------------------------------------->\n<div class=\"sideNav\">\n\t\t<dl class=\"list_dl\">\n\t        <dt class=\"list_dt\">\n\t            <span class=\"_after\"></span>\n\t            <p>Home</p>\n\t            <i class=\"list_dt_icon\"></i>\n\t        </dt>\n\t        <dd class=\"list_dd\">\n\t            <ul>\n\t                <li class=\"list_li\">Home</li>\n\t                <li class=\"list_li\">Product</li>\n\n\t            </ul>\n\t        </dd>\n\t        <dt class=\"list_dt\">\n\t            <span class=\"_after\"></span>\n\t            <p>Online</p>\n\t            <i class=\"list_dt_icon\"></i>\n\t        </dt>\n\t        <dd class=\"list_dd\">\n\t            <ul>\n\t                <li class=\"list_li\">Game</li>\n\t                <li class=\"list_li\">Bussiness</li>\n\t                <li class=\"list_li\">Bank</li>\n\t                <li class=\"list_li\">Service</li>\n\n\t            </ul>\n\t        </dd>\n\t        <dt class=\"list_dt\">\n\t            <span class=\"_after\"></span>\n\t            <p>News</p>\n\t            <i class=\"list_dt_icon\"></i>\n\t        </dt>\n\t        <dd class=\"list_dd\">\n\t            <ul>\n\t                <li class=\"list_li\">Inter</li>\n\t                <li class=\"list_li\">Rockets</li>\n\t                <li class=\"list_li\">Canada</li>\n\t            </ul>\n\t        </dd>\n\t        <dt class=\"list_dt\">\n\t            <span class=\"_after\"></span>\n\t            <p>Map</p>\n\t            <i class=\"list_dt_icon\"></i>\n\t        </dt>\n\t        <dd class=\"list_dd\">\n\t            <ul>\n\t                <li class=\"list_li\">Toronto</li>\n\t                <li class=\"list_li\">Ottawa</li>\n\t                <li class=\"list_li\">Hamilton</li>\n\n\t            </ul>\n\t        </dd>\n\t        <dt class=\"list_dt\">\n\t            <span class=\"_after\"></span>\n\t            <p>Call Us</p>\n\t            <i class=\"list_dt_icon\"></i>\n\t        </dt>\n\t        <dd class=\"list_dd\">\n\t            <ul>\n\t                <li class=\"list_li\">613-4653232</li>\n\t                <li class=\"list_li\">905-5122546</li>\n\t                <li class=\"list_li\">905-5120016</li>\n\t            </ul>\n\t        </dd>\n\t        <dt class=\"list_dt\">\n\t            <span class=\"_after\"></span>\n\t            <p>Policy</p>\n\t            <i class=\"list_dt_icon\"></i>\n\t        </dt>\n\t        <dd class=\"list_dd\">\n\t            <ul>\n\t                <li class=\"list_li\">Law</li>\n\t                <li class=\"list_li\">Delaration</li>\n\t                <li class=\"list_li\">Policy</li>\n\n\t            </ul>\n\t        </dd>\n\t    </dl>\n\t</div>\n  <div>\n  <div class=\"jumbotron\">\n    <h1 class=\"display-4\">Hello, world!</h1>\n    <p class=\"lead\">This is a simple Website homepage, you can CLICK \"Product\" on Nav Bar for more about SHOP functions .</p>\n    <hr class=\"my-4\">\n    <p></p>\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n  </div>\n\n  <div>\n    <div class=\"card col-md-2\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=\"assets/img/xigua.jpg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      </div>\n      </div>\n    <div class=\"card col-md-2\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=\"assets/img/gui.jpg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      </div>\n    </div>\n    <div class=\"card col-md-2\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=\"assets/img/fruit-drink.jpg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      </div>\n    </div>\n  <form class=\"formStyle col-md-5\">\n      <h4>Fast Register</h4>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputEmail4\">Email</label>\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputPassword4\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputAddress\">Address</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputAddress2\">Address 2</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\">\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputCity\">City</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputCity\">\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label for=\"inputState\">Province</label>\n          <select id=\"inputState\" class=\"form-control\">\n            <option selected>Ontairio</option>\n            <option selected>Ouebec</option>\n            <option>...</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"inputZip\">Zip</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputZip\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n    </form>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        $('.list_dt').on('click', function () {
            $('.list_dd').stop();
            $(this).siblings('dt').removeAttr('id');
            if ($(this).attr('id') === 'open') {
                $(this).removeAttr('id').siblings('dd').slideUp();
            }
            else {
                $(this).attr('id', 'open').next().slideDown().siblings('dd').slideUp();
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselConfig"], useValue: { interval: 300, noPause: true, showIndicators: true } }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n  list-style: none;\r\n}\r\nh4{\r\n  font-weight: bold;\r\n  color: rgb(4, 121, 95);\r\n}\r\n.card{\r\n  float: left;\r\n\r\n}\r\n#srchbar{\r\n  float: left;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n.shopCart{\r\n  float: left;\r\n  width: 20%;\r\n  height: 100%;\r\n  border-right: 1px groove grey;\r\n  border-left: 1px groove grey;\r\n  padding: 10px;\r\n}\r\n#clk{\r\n  margin-top: 60px;\r\n  clear: both;\r\n}\r\n/*----------------------tab--------------------------*/\r\n.tabHead{\r\n  color: rgb(1, 145, 97);\r\n}\r\n.tabframe{\r\n  background-color: rgb(212, 241, 228);\r\n  /*border:1px solid black;*/\r\n}\r\n.tabContent{\r\n  overflow: hidden;\r\n  float: right;\r\n  width: 100%;\r\n  /*border-right: 1px solid black;*/\r\n  height: 750px;\r\n}\r\n.radio-inline{\r\n  font-weight: bold;\r\n}\r\n.radio-inline:hover{\r\n  text-decoration: underline;\r\n}\r\n.card{\r\n  width:16%;\r\n  height: 48%;\r\n  margin-left: 3%;\r\n  margin-top: 1.5%;\r\n  border:none;\r\n  background-color:white;\r\n\r\n\r\n}\r\n.card-body span{\r\n  color: rgb(6, 139, 111);\r\n  font-weight: bold;\r\n}\r\n.card-body button{\r\n  background-color: rgb(117, 186, 190);\r\n  border-radius: 5px;\r\n  box-shadow: none;\r\n  width:46%;\r\n  font-size: 8px;\r\n  font-weight: bold;\r\n  margin-left: 3px;\r\n  float: left;\r\n}\r\n.card-img-top{\r\n\r\n  overflow: hidden;\r\n  width:100%;\r\n}\r\n/*-----------------------cart-----------------------------------------*/\r\n.cart{\r\n\tposition: fixed;\r\n\toverflow: hidden;\r\n\ttop:10%;\r\n\tright: 3%;\r\n\twidth: 14%;\r\n\theight: auto;\r\n\tborder:2px solid black;\r\n\tborder-radius: 5px;\r\n}\r\n.cart>button{\r\n  background-color: rgb(117, 186, 190);\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n\toverflow: hidden;\r\n\twidth: 28%;\r\n\tmargin-left: 10px;\r\n}\r\n.cart>img{\r\n\theight: 20px;\r\n\twidth: 20px;\r\n}\r\n.line{\r\n  margin-top:2px;\r\n  border: 1px solid black;\r\n  width:100%;\r\n}\r\n.cart li{\r\n  color: rgb(1, 42, 58);\r\n  font-weight: bold;\r\n}\r\n.cartTr{\r\n\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLFlBQVk7O0NBRWI7QUFDRDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7Q0FDYjtBQUNELHVEQUF1RDtBQUV2RDtFQUNFLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UscUNBQXFDO0VBQ3JDLDJCQUEyQjtDQUM1QjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGNBQWM7Q0FDZjtBQUNEO0VBQ0Usa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUI7QUFDRDtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCOzs7Q0FHeEI7QUFDRDtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0NBQ2I7QUFFRDs7RUFFRSxpQkFBaUI7RUFDakIsV0FBVztDQUNaO0FBQ0Qsd0VBQXdFO0FBQ3hFO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixRQUFRO0NBQ1IsVUFBVTtDQUNWLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQjtBQUVEO0VBQ0UscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0NBQ2pCLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaO0FBQ0Q7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLFdBQVc7Q0FDWjtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtDQUNuQjtBQUNEOztFQUVFLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5oNHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDQsIDEyMSwgOTUpO1xyXG59XHJcbi5jYXJke1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5cclxufVxyXG4jc3JjaGJhcntcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNob3BDYXJ0e1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IGdyb292ZSBncmV5O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggZ3Jvb3ZlIGdyZXk7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4jY2xre1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tdGFiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnRhYkhlYWR7XHJcbiAgY29sb3I6IHJnYigxLCAxNDUsIDk3KTtcclxufVxyXG4udGFiZnJhbWV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjQxLCAyMjgpO1xyXG4gIC8qYm9yZGVyOjFweCBzb2xpZCBibGFjazsqL1xyXG59XHJcbi50YWJDb250ZW50e1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7Ki9cclxuICBoZWlnaHQ6IDc1MHB4O1xyXG59XHJcbi5yYWRpby1pbmxpbmV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnJhZGlvLWlubGluZTpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uY2FyZHtcclxuICB3aWR0aDoxNiU7XHJcbiAgaGVpZ2h0OiA0OCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuXHJcblxyXG59XHJcbi5jYXJkLWJvZHkgc3BhbntcclxuICBjb2xvcjogcmdiKDYsIDEzOSwgMTExKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2FyZC1ib2R5IGJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAxODYsIDE5MCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgd2lkdGg6NDYlO1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3B7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY2FydC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmNhcnR7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0dG9wOjEwJTtcclxuXHRyaWdodDogMyU7XHJcblx0d2lkdGg6IDE0JTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0Ym9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJ0PmJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAxODYsIDE5MCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHdpZHRoOiAyOCU7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmNhcnQ+aW1ne1xyXG5cdGhlaWdodDogMjBweDtcclxuXHR3aWR0aDogMjBweDtcclxufVxyXG4ubGluZXtcclxuICBtYXJnaW4tdG9wOjJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5jYXJ0IGxpe1xyXG4gIGNvbG9yOiByZ2IoMSwgNDIsIDU4KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2FydFRye1xyXG5cclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <h1 class=\"display-4\">Hello, Shopping Cart</h1>\n    <p class=\"lead\">This is a simple Shopping Cart with function of add/remove items to shopping cart and calculate total price for a selected item and sum them all</p>\n    <hr class=\"my-4\">\n    <p></p>\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n</div>\n<div class=\"tabframe\">\n<tabset>\n  <tab>\n    <ng-template tabHeading>\n      <i class=\"tabHead\"><b>Women</b></i>\n    </ng-template>\n    <div class='tabContent'>\n      <div class='shopCart'>\n        <input type=\"text\" id=\"srchbar\" (keyup)=\"onKey($event)\">\n        <button (click)= \"find()\" id=\"srchbtn\">Search </button>\n        <p></p>\n        <p>\n        <br>\n        </p>\n        <h4>Sort By :</h4>\n        <p></p>\n        <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" (click) = \"sortPriceI()\" > Show All</label>\n        <p></p>\n        <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" (click) = \"sortPriceX()\" > Less than $301</label>\n        <p></p>\n        <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" (click) = \"sortPriceY()\"> Between $301 - $600</label>\n        <p></p>\n        <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" (click) = \"sortPriceZ()\"> Greater than $600</label>\n      </div>\n      <div [ngSwitch]=\"priceRange\">\n\n          <div *ngSwitchCase=\"0\">\n            <div class=\"card col-md-3\" *ngFor=\"let products of products\" >\n              <div class=\"card-body\">\n                <img class=\"card-img-top\" src=\"{{products.img}}\" alt=\"Card image cap\" >\n                <h5 class=\"card-title\">Title:{{products.title}}</h5>\n                <h5 class=\"card-title\">Price: ${{products.price}}</h5>\n                <p class=\"card-text\">Selected(pieces): <span>{{products.quantity}}</span></p>\n                <button class='add' (click)= \"add(products.id)\" >Add</button>\n                <button class='delete' (click)= \"delete(products.id)\" >Remove</button>\n                <button class='clear' (click)= \"clear(products.id)\" >Clear</button>\n              </div>\n            </div>\n          </div>\n\n          <div *ngSwitchCase=\"1\">\n            <div class=\"card col-md-3\" *ngFor=\"let products of products\" >\n              <div class=\"card-body\" *ngIf=\"products.price<=300\">\n                <img class=\"card-img-top\" src=\"{{products.img}}\" alt=\"Card image cap\" >\n                <h5 class=\"card-title\">Title:{{products.title}}</h5>\n                <h5 class=\"card-title\">Price: ${{products.price}}</h5>\n                <p class=\"card-text\">Selected(pieces): <span>{{products.quantity}}</span></p>\n                <button class='add' (click)= \"add(products.id)\" >Add</button>\n                <button class='delete' (click)= \"delete(products.id)\" >Remove</button>\n                <button class='clear' (click)= \"clear(products.id)\" >Clear</button>\n              </div>\n            </div>\n          </div>\n\n          <div *ngSwitchCase=\"2\">\n              <div class=\"card col-md-3\" *ngFor=\"let products of products\" >\n                <div class=\"card-body\" *ngIf=\"products.price<=600 && products.price>300 \">\n                  <img class=\"card-img-top\" src=\"{{products.img}}\" alt=\"Card image cap\" >\n                  <h5 class=\"card-title\">Title:{{products.title}}</h5>\n                  <h5 class=\"card-title\">Price: ${{products.price}}</h5>\n                  <p class=\"card-text\">Selected(pieces): <span>{{products.quantity}}</span></p>\n                  <button class='add' (click)= \"add(products.id)\" >Add</button>\n                  <button class='delete' (click)= \"delete(products.id)\" >Remove</button>\n                  <button class='clear' (click)= \"clear(products.id)\" >Clear</button>\n                </div>\n              </div>\n            </div>\n\n          <div *ngSwitchCase=\"3\">\n            <div class=\"card col-md-3\" *ngFor=\"let products of products\" >\n              <div class=\"card-body\" *ngIf=\"products.price>600 \">\n                <img class=\"card-img-top\" src=\"{{products.img}}\" alt=\"Card image cap\" >\n                <h5 class=\"card-title\">Title:{{products.title}}</h5>\n                <h5 class=\"card-title\">Price: ${{products.price}}</h5>\n                <p class=\"card-text\">Selected(pieces): <span>{{products.quantity}}</span></p>\n                <button class='add' (click)= \"add(products.id)\" >Add</button>\n                <button class='delete' (click)= \"delete(products.id)\" >Remove</button>\n                <button class='clear' (click)= \"clear(products.id)\" >Clear</button>\n              </div>\n            </div>\n          </div>\n\n          <div *ngSwitchDefault>\n            <div class=\"card col-md-3\" *ngFor=\"let products of products\">\n              <div class=\"card-body\">\n                <img class=\"card-img-top\" src=\"{{products.img}}\" alt=\"Card image cap\" >\n                <h5 class=\"card-title\">Title:{{products.title}}</h5>\n                <h5 class=\"card-title\">Price: ${{products.price}}</h5>\n                <p class=\"card-text\">Selected(pieces): <span>{{products.quantity}}</span></p>\n                <button class='add' (click)= \"add(products.id)\" >Add</button>\n                <button class='delete' (click)= \"delete(products.id)\" >Remove</button>\n                <button class='clear' (click)= \"clear(products.id)\" >Clear</button>\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n  </tab>\n  <tab>\n    <ng-template tabHeading>\n      <i class=\"tabHead\"><b>Men's</b></i>\n    </ng-template>\n    <div class='tabContent'>\n      <div class='shopCart'>\n      <input type=\"text\" id=\"srchbar\" (keyup)=\"onKey($event)\">\n      <button (click)= \"find()\" id=\"srchbtn\">Search </button>\n      <p></p>\n      <p>\n      <br>\n      </p>\n      <h4>Sort By :</h4>\n      <p></p>\n      <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" (click) = \"sortPriceI()\" > Show All</label>\n      <p></p>\n      <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" (click) = \"sortPriceX()\" > Less than $301</label>\n      <p></p>\n      <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" (click) = \"sortPriceY()\"> Between $301 - $600</label>\n      <p></p>\n      <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" (click) = \"sortPriceZ()\"> Greater than $600</label>\n\n\n    </div>\n    <div [ngSwitch]=\"priceRange\">\n\n      <div *ngSwitchCase=\"0\">\n        <div class=\"card col-md-3\" *ngFor=\"let products of products\" >\n          <div class=\"card-body\">\n            <img class=\"card-img-top\" src=\"{{products.img2}}\" alt=\"Card image cap\" >\n            <h5 class=\"card-title\">Title:{{products.title}}</h5>\n            <h5 class=\"card-title\">Price: ${{products.price}}</h5>\n            <p class=\"card-text\">Selected(pieces): <span>{{products.quantity}}</span></p>\n            <button class='add' (click)= \"add(products.id)\" >Add</button>\n            <button class='delete' (click)= \"delete(products.id)\" >Remove</button>\n            <button class='clear' (click)= \"clear(products.id)\" >Clear</button>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"1\">\n        <div class=\"card col-md-3\" *ngFor=\"let products of products\" >\n          <div class=\"card-body\" *ngIf=\"products.price<=300\">\n            <img class=\"card-img-top\" src=\"{{products.img2}}\" alt=\"Card image cap\" >\n            <h5 class=\"card-title\">Title:{{products.title}}</h5>\n            <h5 class=\"card-title\">Price: ${{products.price}}</h5>\n            <p class=\"card-text\">Selected(pieces): <span>{{products.quantity}}</span></p>\n            <button class='add' (click)= \"add(products.id)\" >Add</button>\n            <button class='delete' (click)= \"delete(products.id)\" >Remove</button>\n            <button class='clear' (click)= \"clear(products.id)\" >Clear</button>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"2\">\n          <div class=\"card col-md-3\" *ngFor=\"let products of products\" >\n            <div class=\"card-body\" *ngIf=\"products.price<=600 && products.price>300 \">\n              <img class=\"card-img-top\" src=\"{{products.img2}}\" alt=\"Card image cap\" >\n              <h5 class=\"card-title\">Title:{{products.title}}</h5>\n              <h5 class=\"card-title\">Price: ${{products.price}}</h5>\n              <p class=\"card-text\">Selected(pieces): <span>{{products.quantity}}</span></p>\n              <button class='add' (click)= \"add(products.id)\" >Add</button>\n              <button class='delete' (click)= \"delete(products.id)\" >Remove</button>\n              <button class='clear' (click)= \"clear(products.id)\" >Clear</button>\n            </div>\n          </div>\n        </div>\n\n      <div *ngSwitchCase=\"3\">\n        <div class=\"card col-md-3\" *ngFor=\"let products of products\" >\n          <div class=\"card-body\" *ngIf=\"products.price>600 \">\n            <img class=\"card-img-top\" src=\"{{products.img2}}\" alt=\"Card image cap\" >\n            <h5 class=\"card-title\">Title:{{products.title}}</h5>\n            <h5 class=\"card-title\">Price: ${{products.price}}</h5>\n            <p class=\"card-text\">Selected(pieces): <span>{{products.quantity}}</span></p>\n            <button class='add' (click)= \"add(products.id)\" >Add</button>\n            <button class='delete' (click)= \"delete(products.id)\" >Remove</button>\n            <button class='clear' (click)= \"clear(products.id)\" >Clear</button>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchDefault>\n        <div class=\"card col-md-3\" *ngFor=\"let products of products\">\n          <div class=\"card-body\">\n            <img class=\"card-img-top\" src=\"{{products.img2}}\" alt=\"Card image cap\" >\n            <h5 class=\"card-title\">Title:{{products.title}}</h5>\n            <h5 class=\"card-title\">Price: ${{products.price}}</h5>\n            <p class=\"card-text\">Selected(pieces): <span>{{products.quantity}}</span></p>\n            <button class='add' (click)= \"add(products.id)\" >Add</button>\n            <button class='delete' (click)= \"delete(products.id)\" >Remove</button>\n            <button class='clear' (click)= \"clear(products.id)\" >Clear</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  </tab>\n</tabset>\n</div>\n<div class=\"cart\">\n    <span><img src=\"assets/img/cart.png\">Your Selected Items:</span>\n    <div class=\"line\"></div>\n    <table id=\"post{{idx}}\" *ngFor=\"let products of products; let idx = index\">\n    <td >\n      <tr *ngIf=\"products.quantity != 0\" class=\"cartTr\"> &#160;Item: &#160;{{products.title}}  </tr>\n    </td>\n    <td >\n      <tr *ngIf=\"products.quantity != 0\" class=\"cartTr\"> &#160; x {{products.quantity}}  </tr>\n    </td>\n    <td >\n      <tr *ngIf=\"products.quantity != 0\" class=\"cartTr\"> &#160; &#160;Price:${{products.totalPrice}}  </tr>\n    </td>\n    </table>\n    <div class=\"line\"></div>\n    <button>Checkout</button>\n    <button class='clear' (click)= \"clearCart()\" >ClearAll</button>\n    <div class=\"line\"></div>\n    <h4>Total Price : $ {{total}}</h4>\n\n</div>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        /*item array */
        this.products = [
            {
                'id': 1,
                'title': 'Air1',
                'price': 100,
                'quantity': 0,
                'totalPrice': 0,
                'img': 'assets/img/cloth1.jpg',
                'img2': 'assets/img/cloth3.jpg'
            },
            {
                'id': 2,
                'title': 'Air2',
                'price': 200,
                'quantity': 0,
                'totalPrice': 0,
                'img': 'assets/img/cloth2.jpg',
                'img2': 'assets/img/cloth1.jpg'
            },
            {
                'id': 3,
                'title': 'Air3',
                'price': 300,
                'quantity': 0,
                'totalPrice': 0,
                'img': 'assets/img/cloth3.jpg',
                'img2': 'assets/img/cloth2.jpg'
            },
            {
                'id': 4,
                'title': 'Air4',
                'price': 400,
                'quantity': 0,
                'totalPrice': 0,
                'img': 'assets/img/cloth2.jpg',
                'img2': 'assets/img/cloth3.jpg'
            },
            {
                'id': 5,
                'title': 'Air5',
                'price': 500,
                'quantity': 0,
                'totalPrice': 0,
                'img': 'assets/img/cloth1.jpg',
                'img2': 'assets/img/cloth3.jpg'
            },
            {
                'id': 6,
                'title': 'Air6',
                'price': 600,
                'quantity': 0,
                'totalPrice': 0,
                'img': 'assets/img/cloth3.jpg',
                'img2': 'assets/img/cloth2.jpg'
            },
            {
                'id': 7,
                'title': 'Air7',
                'price': 700,
                'quantity': 0,
                'totalPrice': 0,
                'img': 'assets/img/cloth2.jpg',
                'img2': 'assets/img/cloth2.jpg'
            },
            {
                'id': 8,
                'title': 'Air8',
                'price': 800,
                'quantity': 0,
                'totalPrice': 0,
                'img': 'assets/img/cloth1.jpg',
                'img2': 'assets/img/cloth3.jpg'
            }
        ];
        /*varibles */
        this.total = 0;
        this.counter = 0;
        this.newArray = [];
        this.priceRange = 0;
    }
    ProductComponent.prototype.add = function (number) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id === number) {
                this.products[i].quantity += 1;
                this.products[i].totalPrice = this.products[i].price * this.products[i].quantity;
                this.counter = i + 1;
            }
        }
        this.totalPrice();
    };
    ProductComponent.prototype.delete = function (number) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id === number) {
                if (this.products[i].quantity > 0) {
                    this.products[i].quantity -= 1;
                    this.products[i].totalPrice = this.products[i].price * this.products[i].quantity;
                }
            }
        }
        this.totalPrice();
    };
    ProductComponent.prototype.clear = function (number) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id === number) {
                this.products[i].quantity = 0;
                this.products[i].totalPrice = 0;
            }
        }
        this.totalPrice();
    };
    ProductComponent.prototype.clearCart = function () {
        for (var i = 0; i < this.products.length; i++) {
            this.products[i].quantity = 0;
            this.products[i].totalPrice = 0;
            this.total = 0;
        }
    };
    ProductComponent.prototype.onKey = function (event) {
        this.srchtext = event.target.value;
    };
    ProductComponent.prototype.find = function () {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].title === this.srchtext) {
                alert('find');
            }
        }
    };
    ProductComponent.prototype.totalPrice = function () {
        this.total = 0;
        for (var i = 0; i < this.products.length; i++) {
            this.total += (this.products[i].price * this.products[i].quantity);
        }
    };
    ProductComponent.prototype.sortPriceI = function () {
        this.priceRange = 0;
    };
    ProductComponent.prototype.sortPriceY = function () {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].price <= 600 && this.products[i].price > 300) {
                this.priceRange = 2;
                break;
            }
        }
    };
    ProductComponent.prototype.sortPriceZ = function () {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].price > 600) {
                this.priceRange = 3;
                break;
            }
        }
    };
    ProductComponent.prototype.sortPriceX = function () {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].price <= 300) {
                this.priceRange = 1;
                break;
            }
        }
    };
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'demo-modal-service-static',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        })
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map