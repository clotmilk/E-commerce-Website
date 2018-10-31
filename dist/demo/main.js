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

module.exports = "li{\r\n\tlist-style: none;\r\n\r\n}\r\nh2{\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tcolor: #C3EEF2;\r\n\tfont-weight: bold;\r\n}\r\nh1{\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 10px;\r\n}\r\n.border{\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground-color: black;\r\n\tmargin-top: 10px;\r\n}\r\n#navbarid{\r\n\tbackground-image: linear-gradient(45deg,#ADEAEF,#C3EEF2);\r\n}\r\n#searchimg{\r\n\twidth: 20px;\r\n\theight: 20px;\r\n}\r\n.clock{\r\n\t/*border:1px solid black;*/\r\n\theight: 50px;\r\n\twidth:100px;\r\n}\r\n.unit{\r\n\tline-height: 50px;\r\n\tfloat:right;\r\n\tfont-size: 15px;\r\n\tfont-weight: bold;\r\n}\r\n#carousel-example-generic{\r\n\tmargin-top: 51px;\r\n\t/*border:1px solid black;*/\r\n\theight: 400px;\r\n}\r\n.carousel-inner{\r\n\twidth: 100%;\r\n\theight: 100%;\t\r\n}\r\n.carousel-inner img{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n#pig{\r\n\twidth: 80%;\r\n\r\n}\r\n.carousel-caption{\r\n\t/*border:1px solid black;*/\r\n\tmargin-bottom: 32%;\r\n}\r\n.pigbtn{\r\n\tfloat: right;\r\n\theight: 50px;\r\n\twidth:150px;\r\n\tbackground-color: #22C7C2;\r\n\tborder-radius: 5px;\r\n}\r\n.pigCap{\r\n\tmargin-bottom:15%;\r\n}\r\n.jumbotron{\r\n\tmargin-top: 10px;\r\n}\r\n.foot2{\r\n\tmargin-top: 10px;\r\n\theight: 25px;\r\n\twidth: 100%;\r\n\tborder-top:2px solid black;\r\n}\r\n.foot2>li{\r\n\tfloat: left;\r\n\tmargin:0 20px;\r\n}\r\n.foot2>span{\r\n\tfloat: right;\r\n}\r\n.foot{\r\n\twidth: 100%;\r\n\theight: 300px;\r\n\tborder-top:2px solid black;\r\n\tmargin-top: 40px;\r\n}\r\n.footContent{\r\n\twidth: 25%;\r\n\theight: 100%;\r\n\t/*border:1px solid red;*/\r\n\tfloat:left;\r\n}\r\n.footContent>li{\r\n\tmargin-top: 10px;\r\n\ttext-align: center;\r\n\tcolor: #333;\r\n}\r\n.footContent>li>a{\r\n\tcolor: #555;\r\n\r\n}\r\n.foot2>li>a{\r\n\tcolor: #555;\r\n\r\n}\r\n.nav-tabs>li{\r\n\tmargin-right: 50px;\r\n}\r\n.tab-pane .row .col-md-4{\r\n\toverflow: hidden;\r\n\tmargin-top: 20px;\r\n\tmargin-left: 120px;\r\n\theight: 200px;\r\n\twidth: 200px;\r\n\r\n}\r\n.tab-pane .row .col-md-4>img{\r\n\theight: 100%;\r\n\twidth: 100%;\r\n}\r\n.tab-pane .row .col-md-4>a{\r\n\t\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tleft: 43%;\r\n\tcolor: red;\r\n\tfont-weight: bold;\r\n}\r\n.tab-pane .row .col-md-4>a>img{\r\n\twidth: 15px;\r\n\theight: 15px;\r\n\tcursor: pointer;\r\n}\r\n.nav-tabs>li{\r\n\tfont-weight:bold;\r\n\t\r\n}\r\n.nav-tabs>li>a{\r\n\tcolor:black;\r\n}\r\n#sort{\r\n\tline-height: 40px;\r\n}\r\n.col-md-4 span{\r\n\ttext-align: center;\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\tbackground: rgba(33,33,33,0.4);\r\n\tleft: -100%;\r\n\ttop: 0;\r\n\ttransition: all 0.5 ease;\r\n\tcolor: white;\r\n\tfont-size: 15px;\r\n\tfont-weight: bold;\r\n\twidth: 100%;\r\n\theight: 90%;\r\n}\r\n.col-md-4:hover span{\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n#loginBtn{\r\n\tline-height: 50px;\r\n\tmargin-left: 20px;\r\n\tcursor: pointer;\r\n}\r\n.lgModal{\r\n\toverflow: hidden;\r\n\theight: 400px;\r\n\twidth: 40%;\r\n\tborder-radius: 10px;\r\n\tborder:1px solid black;\r\n\tpadding-top: 2%;\r\n\ttop: 25%;\r\n\tleft: 25%;\r\n\tposition: fixed;\r\n\tz-index: 100;\r\n\tbackground-color: #ADEAEF;\r\n\tdisplay: none;\r\n\r\n}\r\n.modal-content{\r\n\tborder:none;\r\n\tbox-shadow: none;\r\n\r\n}\r\n.modal-content>input{\r\n\tborder:2px solid #BDEAEF ;\r\n\twidth: 50%;\r\n\theight: 50px;\r\n\tmargin:10px 25%;\r\n\tborder-radius: 5px;\r\n\t\r\n\t\r\n}\r\n.modal-content>label{\r\n\tfont-size: 15px;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tmargin-bottom: 10px;\r\n\t\r\n}\r\n.modal-content>button{\r\n\twidth: 50%;\r\n\tmargin:15px 25%;\r\n}\r\n.lgModal>img{\r\n\tmargin-top:0;\r\n\theight: 22px;\r\n\twidth: 22px;\r\n\tfloat: right;\r\n\tcursor: pointer;\r\n}\r\n::-webkit-input-placeholder{\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n}\r\n::-ms-input-placeholder{\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n}\r\n::placeholder{\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n}\r\n.animate{\r\n\t-webkit-animation:animatezoom 0.5s;\r\n\tanimation: animatezoom 0.5s;\r\n}\r\n@-webkit-keyframes animatezoom {\r\n\tfrom{-webkit-transform:scale(0);}\r\n\tto {-webkit-transform:scale(1);}\r\n}\r\n.cart{\r\n\tposition: fixed;\r\n\toverflow: hidden;\r\n\ttop:10%;\r\n\tright: 2%;\r\n\twidth: 15%;\r\n\theight: auto;\r\n\tborder:2px solid black;\r\n\tborder-radius: 5px;\r\n}\r\n.cart>button{\r\n\toverflow: hidden;\r\n\twidth: 28%;\r\n\tmargin-left: 10px;\r\n}\r\n.cart>img{\r\n\theight: 20px;\r\n\twidth: 20px;\r\n}\r\n.sideNav{\r\n\tposition: fixed;\r\n\ttop: 52px;\r\n\tleft: 0;\r\n\t\r\n}\r\n.list_dt{\r\n\r\n    background: white;\r\n    color: black;\r\n    width: 120px;\r\n    padding: 0 40px 0 20px;\r\n    height: 34px;\r\n    line-height: 34px;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    position: relative;\r\n    border-bottom: 1px solid #464646;\r\n}\r\n.list_dt:hover{\r\n    background: #ADEAEF;\r\n}\r\n.list_dt:hover ._after{\r\n    display: block;\r\n    width: 3px;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    background: #ADEAEF;\r\n}\r\n#open{\r\n    background: white;\r\n}\r\n#open ._after{\r\n    display: block;\r\n    width: 3px;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    background: #ADEAEF;\r\n}\r\n.list_dt_icon{\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 11px;\r\n    display: block;\r\n    width: 12px;\r\n    height: 12px;\r\n    \r\n    background-size: cover;\r\n}\r\n#open .list_dt_icon{\r\n    \r\n    background-size: cover;\r\n}\r\n.list_dd{\r\n    display: none;\r\n}\r\n.list_li{\r\n    background: white;\r\n    list-style-type: none;\r\n    color: black;\r\n    width: 120px;\r\n    padding: 0 30px;\r\n    height: 34px;\r\n    line-height: 34px;\r\n    cursor: pointer;\r\n    border-bottom: 1px solid #6b6b6b;\r\n}\r\n.list_li:hover{\r\n    background: #999;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUI7O0NBRWpCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQjtBQUNEO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWix3QkFBd0I7Q0FDeEIsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQyx5REFBeUQ7Q0FDekQ7QUFDRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2I7QUFDRDtDQUNDLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsWUFBWTtDQUNaO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQiwyQkFBMkI7Q0FDM0IsY0FBYztDQUNkO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiO0FBQ0Q7Q0FDQyxXQUFXOztDQUVYO0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0IsbUJBQW1CO0NBQ25CO0FBRUQ7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixZQUFZO0NBQ1osMkJBQTJCO0NBQzNCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2I7QUFDRDtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2QsMkJBQTJCO0NBQzNCLGlCQUFpQjtDQUNqQjtBQUNEO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYix5QkFBeUI7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O0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixPQUFPO0lBQ1Asb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7O0lBRWIsdUJBQXVCO0NBQzFCO0FBQ0Q7O0lBRUksdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztDQUNwQztBQUNEO0lBQ0ksaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaXtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cclxufVxyXG5oMntcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6ICNDM0VFRjI7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuaDF7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmJvcmRlcntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDJweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiNuYXZiYXJpZHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsI0FERUFFRiwjQzNFRUYyKTtcclxufVxyXG4jc2VhcmNoaW1ne1xyXG5cdHdpZHRoOiAyMHB4O1xyXG5cdGhlaWdodDogMjBweDtcclxufVxyXG4uY2xvY2t7XHJcblx0Lypib3JkZXI6MXB4IHNvbGlkIGJsYWNrOyovXHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdHdpZHRoOjEwMHB4O1xyXG59XHJcbi51bml0e1xyXG5cdGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5cdGZsb2F0OnJpZ2h0O1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4jY2Fyb3VzZWwtZXhhbXBsZS1nZW5lcmlje1xyXG5cdG1hcmdpbi10b3A6IDUxcHg7XHJcblx0Lypib3JkZXI6MXB4IHNvbGlkIGJsYWNrOyovXHJcblx0aGVpZ2h0OiA0MDBweDtcclxufVxyXG4uY2Fyb3VzZWwtaW5uZXJ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1x0XHJcbn1cclxuLmNhcm91c2VsLWlubmVyIGltZ3tcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI3BpZ3tcclxuXHR3aWR0aDogODAlO1xyXG5cclxufVxyXG4uY2Fyb3VzZWwtY2FwdGlvbntcclxuXHQvKmJvcmRlcjoxcHggc29saWQgYmxhY2s7Ki9cclxuXHRtYXJnaW4tYm90dG9tOiAzMiU7XHJcbn1cclxuXHJcbi5waWdidG57XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdGhlaWdodDogNTBweDtcclxuXHR3aWR0aDoxNTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjJDN0MyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4ucGlnQ2Fwe1xyXG5cdG1hcmdpbi1ib3R0b206MTUlO1xyXG59XHJcbi5qdW1ib3Ryb257XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uZm9vdDJ7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRoZWlnaHQ6IDI1cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym9yZGVyLXRvcDoycHggc29saWQgYmxhY2s7XHJcbn1cclxuLmZvb3QyPmxpe1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbjowIDIwcHg7XHJcbn1cclxuLmZvb3QyPnNwYW57XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5mb290e1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMzAwcHg7XHJcblx0Ym9yZGVyLXRvcDoycHggc29saWQgYmxhY2s7XHJcblx0bWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uZm9vdENvbnRlbnR7XHJcblx0d2lkdGg6IDI1JTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0Lypib3JkZXI6MXB4IHNvbGlkIHJlZDsqL1xyXG5cdGZsb2F0OmxlZnQ7XHJcbn1cclxuLmZvb3RDb250ZW50Pmxpe1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiAjMzMzO1xyXG59XHJcbi5mb290Q29udGVudD5saT5he1xyXG5cdGNvbG9yOiAjNTU1O1xyXG5cclxufVxyXG4uZm9vdDI+bGk+YXtcclxuXHRjb2xvcjogIzU1NTtcclxuXHJcbn1cclxuXHJcbi5uYXYtdGFicz5saXtcclxuXHRtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi50YWItcGFuZSAucm93IC5jb2wtbWQtNHtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG5cdGhlaWdodDogMjAwcHg7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG5cclxufSBcclxuXHJcbi50YWItcGFuZSAucm93IC5jb2wtbWQtND5pbWd7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGFiLXBhbmUgLnJvdyAuY29sLW1kLTQ+YXtcclxuXHRcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDQzJTtcclxuXHRjb2xvcjogcmVkO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi50YWItcGFuZSAucm93IC5jb2wtbWQtND5hPmltZ3tcclxuXHR3aWR0aDogMTVweDtcclxuXHRoZWlnaHQ6IDE1cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uYXYtdGFicz5saXtcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG5cdFxyXG59XHJcbi5uYXYtdGFicz5saT5he1xyXG5cdGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4jc29ydHtcclxuXHRsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmNvbC1tZC00IHNwYW57XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDMzLDMzLDMzLDAuNCk7XHJcblx0bGVmdDogLTEwMCU7XHJcblx0dG9wOiAwO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjUgZWFzZTtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4uY29sLW1kLTQ6aG92ZXIgc3BhbntcclxuXHRsZWZ0OiAwO1xyXG5cdHRvcDogMDtcclxufVxyXG4jbG9naW5CdG57XHJcblx0bGluZS1oZWlnaHQ6IDUwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sZ01vZGFse1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0aGVpZ2h0OiA0MDBweDtcclxuXHR3aWR0aDogNDAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0Ym9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuXHRwYWRkaW5nLXRvcDogMiU7XHJcblx0dG9wOiAyNSU7XHJcblx0bGVmdDogMjUlO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR6LWluZGV4OiAxMDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0FERUFFRjtcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cclxufVxyXG4ubW9kYWwtY29udGVudHtcclxuXHRib3JkZXI6bm9uZTtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cclxufVxyXG4ubW9kYWwtY29udGVudD5pbnB1dHtcclxuXHRib3JkZXI6MnB4IHNvbGlkICNCREVBRUYgO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdG1hcmdpbjoxMHB4IDI1JTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHJcblx0XHJcbn1cclxuLm1vZGFsLWNvbnRlbnQ+bGFiZWx7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdFxyXG59XHJcbi5tb2RhbC1jb250ZW50PmJ1dHRvbntcclxuXHR3aWR0aDogNTAlO1xyXG5cdG1hcmdpbjoxNXB4IDI1JTtcclxufVxyXG4ubGdNb2RhbD5pbWd7XHJcblx0bWFyZ2luLXRvcDowO1xyXG5cdGhlaWdodDogMjJweDtcclxuXHR3aWR0aDogMjJweDtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVye1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmFuaW1hdGV7XHJcblx0LXdlYmtpdC1hbmltYXRpb246YW5pbWF0ZXpvb20gMC41cztcclxuXHRhbmltYXRpb246IGFuaW1hdGV6b29tIDAuNXM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlem9vbSB7XHJcblx0ZnJvbXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt9XHJcblx0dG8gey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO31cclxufVxyXG5cclxuLmNhcnR7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0dG9wOjEwJTtcclxuXHRyaWdodDogMiU7XHJcblx0d2lkdGg6IDE1JTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0Ym9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJ0PmJ1dHRvbntcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHdpZHRoOiAyOCU7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmNhcnQ+aW1ne1xyXG5cdGhlaWdodDogMjBweDtcclxuXHR3aWR0aDogMjBweDtcclxufVxyXG4uc2lkZU5hdntcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiA1MnB4O1xyXG5cdGxlZnQ6IDA7XHJcblx0XHJcbn1cclxuXHJcbi5saXN0X2R0e1xyXG5cclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgcGFkZGluZzogMCA0MHB4IDAgMjBweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDY0NjQ2O1xyXG59XHJcbi5saXN0X2R0OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogI0FERUFFRjtcclxufVxyXG4ubGlzdF9kdDpob3ZlciAuX2FmdGVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNBREVBRUY7XHJcbn1cclxuI29wZW57XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4jb3BlbiAuX2FmdGVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNBREVBRUY7XHJcbn1cclxuLmxpc3RfZHRfaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4jb3BlbiAubGlzdF9kdF9pY29ue1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5saXN0X2Rke1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubGlzdF9saXtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZiNmI2YjtcclxufVxyXG4ubGlzdF9saTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICM5OTk7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<!---------NAV BAR------------>\n\t<nav class=\"navbar navbar-default navbar-fixed-top\" id=\"navbarid\">\n\t  <div class=\"container\">\n\t    <div class=\"navbar-header\">\n\t      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n\t        <span class=\"sr-only\">Toggle navigation</span>\n\t        <span class=\"icon-bar\"></span>\n\t        <span class=\"icon-bar\"></span>\n\t        <span class=\"icon-bar\"></span>\n\t      </button>\n\t      <a class=\"navbar-brand\" href=\"#\">ClotMilk</a>\n\t    </div>\n\t    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\t      <ul class=\"nav navbar-nav\">\n\t        <li><a href=\"#\">Product</a></li>\n\t        <li><a href=\"#\">Sport</a></li>\n\t        <li><a href=\"#\">Music</a></li>\n\t        <li class=\"dropdown\">\n\t          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">SHOP<span class=\"caret\"></span></a>\n\t          <ul class=\"dropdown-menu\">\n\t            <li><a href=\"#\">Hats</a></li>\n\t            <li><a href=\"#\">Shoes</a></li>\n\t            <li><a href=\"#\">Cloth</a></li>\n\t            <li role=\"separator\" class=\"divider\"></li>\n\t            <li><a href=\"#\">New Arrival</a></li>\n\t            <li role=\"separator\" class=\"divider\"></li>\n\t            <li><a href=\"#\">For Fun</a></li>\n\t          </ul>\n\t        </li>\n\t      </ul>\n\t      <form class=\"navbar-form navbar-left\">\n\t        <div class=\"form-group\">\n\t          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n\t        </div>\n\t        <button id=\"kkk\" type=\"submit\" class=\"btn btn-default\">GO</button>\n\t        <img src=\"assets/img/search.png\" id=\"searchimg\">\n\t      </form>\n\t      <ul class=\"nav navbar-nav navbar-right\">\n\t      \t<li class=\"clock\">\n\t      \t\t<div class=\"clock center\">\n\t      \t\t\t<div class=\"unit\" id=\"seconds\"></div>\n\t      \t\t\t<div class=\"unit\" id=\"minutes\"></div>\n\t      \t\t\t<div class=\"unit\" id=\"hours\"></div>\n\t      \t\t</div>\n\t      \t</li>\n\t        <li id=\"loginBtn\">Login</li>\n\t        <li class=\"dropdown\">\n\t          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">About Us<span class=\"caret\"></span></a>\n\t          <ul class=\"dropdown-menu\">\n\t            <li><a href=\"#\">Location</a></li>\n\t            <li><a href=\"#\">Career</a></li>\n\t            <li><a href=\"#\">Policy</a></li>\n\t            <li role=\"separator\" class=\"divider\"></li>\n\t            <li><a href=\"#\">Membership</a></li>\n\t          </ul>\n\t        </li>\n\t      </ul>\n\t    </div><!-- /.navbar-collapse -->\n\t  </div><!-- /.container-fluid -->\n\t</nav>\n\t\n\n\n\t<!-- carousel ------------------------------------------------------------------------------------------------- -->\n\t<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n\t  <!-- Indicators -->\n\t  <ol class=\"carousel-indicators\">\n\t    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n\t    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n\t    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n\t  </ol>\n\n\t  <!-- Wrapper for slides -->\n\t  <div class=\"carousel-inner\" role=\"listbox\">\n\t    <div class=\"item active\">\n\t      <img src=\"assets/img/blue.jpg\">\n\t      <div class=\"carousel-caption\">\n\t        <h3>Always do what you're afraid to do.</h3>\n\t      </div>\n\t    </div>\n\t    <div class=\"item\">\n\t      <img src=\"assets/img/star3.jpg\" alt=\"...\">\n\t      <div class=\"carousel-caption\">\n\t        <h3>I will prove myself strong when they think I am sick</h3>\n\t      </div>\n\t    </div>\n\t    <div class=\"item\">\n\t      <img src=\"assets/img/tpig.jpg\" alt=\"...\" id=\"pig\">\n\t      <div class=\"carousel-caption pigCap\">\n\t        <button class=\"pigbtn\" value=\"Learn More\">Learn More</button>\n\t      </div>\n\t    ...\n\t  </div>\n\n\t  <!-- carousel Controls -->\n\t  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n\t    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n\t  </a>\n\t  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n\t    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n\t  </a>\n\t</div>\n\t<div>\n\t\n\t<div class=\"jumbotron\">\n\t  <h1>Hello, Manager</h1>\n\t  <p>This a commercial website demo project --- RunBin Ju</p>\n\t  <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a></p>\n\t</div>\n\t\n\t<!-- carousel ------------------------------------------------------------------------------------------------- -->\n\n\t<!-- carousel ------------------------------------------------------------------------------------------------- -->\n\t<h1>Product Section</h1>\n\t<!-- carousel ------------------------------------------------------------------------------------------------- -->\n\n\t<app-page1></app-page1>\n\n\t<!-- Modal ------------------------------------------------------------------------------------------------- -->\n\t<div class=\"lgModal animate\" id=\"login1\">\n\t\t<img src=\"assets/img/x.png\" id=\"closeimg\">\n\t\t<form action=\"#\" class=\"modal-content\">\n\t\t\t<h2>Login Modal</h2>\n\t\t\t<label for=\"uname\">UserName</label>\n\t\t\t<input type=\"text\" name=\"uname\" placeholder=\"Enter UserName\" required=\"required\"/>\n\t\t\t<label for=\"psw\">Password</label>\n\t\t\t<input type=\"password\" name=\"psw\" placeholder=\"Enter Password\" required=\"required\"/>\n\t\t\t<button type=\"submit\">Submit</button>\n\t\t\t<label class=\"checkbox\">\n\t\t\t\t<input type=\"checkbox\" name=\"\">Keep me login\n\t\t\t</label>\n\t\t</form>\n\t</div>\n\n\t<!-- end of Modal ------------------------------------------------------------------------------------------------- -->\n\t<div class=\"border\"></div>\n\t\n\t\n\n\t<!-- foot ------------------------------------------------------------------------------------------------- -->\n\n\t<div class=\"foot\">\n\t\t<div class=\"footContent\">\n\t\t\t<li><h4>Help</h4></li>\n\t\t\t<li><a href=\"#\">Fina a Store</a></li>\n\t\t\t<li><a href=\"#\">Store App</a></li>\n\t\t\t<li><a href=\"#\">Order Status</a></li>\n\t\t\t<li><a href=\"#\">Shopping Help</a></li>\n\t\t\t<li><a href=\"#\">Field Trip</a></li>\n\t\t\t<li><a href=\"#\">Refurbinished and Clearance</a></li>\n\t\t\t<li><a href=\"#\">Store Camp</a></li>\n\t\t</div>\n\t\t<div class=\"footContent\">\n\t\t\t<li><h4>About Us</h4></li>\n\t\t\t<li><a href=\"#\">Newsroom</a></li>\n\t\t\t<li><a href=\"#\">Leadership</a></li>\n\t\t\t<li><a href=\"#\">Investors</a></li>\n\t\t\t<li><a href=\"#\">Event</a></li>\n\t\t\t<li><a href=\"#\">Contact Us</a></li>\n\t\t\t<li><a href=\"#\">Job Opportunities</a></li>\n\t\t</div>\n\t\t<div class=\"footContent\">\n\t\t\t<li><h4>Company Value</h4></li>\n\t\t\t<li><a href=\"#\">Accessiblity</a></li>\n\t\t\t<li><a href=\"#\">Enviroment</a></li>\n\t\t\t<li><a href=\"#\">Privacy</a></li>\n\t\t\t<li><a href=\"#\">Suppiler Responsibility</a></li>\n\t\t</div>\n\t\t<div class=\"footContent\">\n\t\t\t<li><h4>Account</h4></li>\n\t\t\t<li><a href=\"#\">Manage your ID</a></li>\n\t\t\t<li><a href=\"#\">Store Account</a></li>\n\t\t</div>\n\t</div>\n\n\t<div class=\"foot2\">\n\t\t<span>Copyright©️ 2018 RunBin Ju. All rights Reserved.</span>\n\t\t<li><a href=\"#\"> Privacy Policy</a></li>\n\t\t<li><a href=\"#\"> Use of Cookies</a></li>\n\t\t<li><a href=\"#\"> Terms of Use</a></li>\n\t\t<li><a href=\"#\"> Legal</a></li>\n\t\t<li><a href=\"#\"> Site Map</a></li>\n\t</div>\n\t\n\t<!--Veritical Nav----------------------------------------------------------------------------------------------------->\n\t<div class=\"sideNav\">\n\t\t<dl class=\"list_dl\">\n\t        <dt class=\"list_dt\">\n\t            <span class=\"_after\"></span>\n\t            <p>Home</p>\n\t            <i class=\"list_dt_icon\"></i>\n\t        </dt>\n\t        <dd class=\"list_dd\">\n\t            <ul>\n\t                <li class=\"list_li\">Home</li>\n\t                <li class=\"list_li\">Product</li>\n\t                \n\t            </ul>\n\t        </dd>\n\t        <dt class=\"list_dt\">\n\t            <span class=\"_after\"></span>\n\t            <p>Online</p>\n\t            <i class=\"list_dt_icon\"></i>\n\t        </dt>\n\t        <dd class=\"list_dd\">\n\t            <ul>\n\t                <li class=\"list_li\">Game</li>\n\t                <li class=\"list_li\">Bussiness</li>\n\t                <li class=\"list_li\">Bank</li>\n\t                <li class=\"list_li\">Service</li>\n\t                \n\t            </ul>\n\t        </dd>\n\t        <dt class=\"list_dt\">\n\t            <span class=\"_after\"></span>\n\t            <p>News</p>\n\t            <i class=\"list_dt_icon\"></i>\n\t        </dt>\n\t        <dd class=\"list_dd\">\n\t            <ul>\n\t                <li class=\"list_li\">Inter</li>\n\t                <li class=\"list_li\">Rockets</li>\n\t                <li class=\"list_li\">Canada</li>\n\t            </ul>\n\t        </dd>\n\t        <dt class=\"list_dt\">\n\t            <span class=\"_after\"></span>\n\t            <p>Map</p>\n\t            <i class=\"list_dt_icon\"></i>\n\t        </dt>\n\t        <dd class=\"list_dd\">\n\t            <ul>\n\t                <li class=\"list_li\">Toronto</li>\n\t                <li class=\"list_li\">Ottawa</li>\n\t                <li class=\"list_li\">Hamilton</li>\n\t                <l\n\t            </ul>\n\t        </dd>\n\t        <dt class=\"list_dt\">\n\t            <span class=\"_after\"></span>\n\t            <p>Call Us</p>\n\t            <i class=\"list_dt_icon\"></i>\n\t        </dt>\n\t        <dd class=\"list_dd\">\n\t            <ul>\n\t                <li class=\"list_li\">613-4653232</li>\n\t                <li class=\"list_li\">905-5122546</li>\n\t                <li class=\"list_li\">905-5120016</li>\n\t            </ul>\n\t        </dd>\n\t        <dt class=\"list_dt\">\n\t            <span class=\"_after\"></span>\n\t            <p>Policy</p>\n\t            <i class=\"list_dt_icon\"></i>\n\t        </dt>\n\t        <dd class=\"list_dd\">\n\t            <ul>\n\t                <li class=\"list_li\">Law</li>\n\t                <li class=\"list_li\">Delaration</li>\n\t                <li class=\"list_li\">Policy</li>\n\t                \n\t            </ul>\n\t        </dd>\n\t    </dl>\n\t</div>\n\n\n\t\n\n\n<!--end of Container 1 ------------------------------------------------------------------------------------------------- -->\n</div> \n\n"

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
        this.title = 'demo';
    }
    AppComponent.prototype.ngOnInit = function () {
        $('#kkk').on('click', function () {
            alert('123');
        });
        $(function () {
            var $hour = $('#hours');
            var $min = $('#minutes');
            var $second = $('#seconds');
            function update() {
                var date = new Date();
                var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
                var min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
                var sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
                $hour.text(hour + ':');
                $min.text(min + ':');
                $second.text(sec);
            }
            update();
            window.setInterval(update, 1000);
        });
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
        $(function () {
            $(".col-md-4>a").click(function () {
                $("#ul").append("<li>" + 'cloth x 1' + "</li>");
                $('.col-md-4>li').innerTEXT == 'Jacket';
            });
        });
        $(function () {
            $("#clear").click(function () {
                $("#ul>li").remove();
            });
        });
        $(function () {
            $("#delete").click(function () {
                $("#ul>li").last().remove();
            });
        });
        $(".list_dt").on("click", function () {
            $('.list_dd').stop();
            $(this).siblings("dt").removeAttr("id");
            if ($(this).attr("id") == "open") {
                $(this).removeAttr("id").siblings("dd").slideUp();
            }
            else {
                $(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
            }
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

;


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page1_page1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page1/page1.component */ "./src/app/page1/page1.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _page1_page1_component__WEBPACK_IMPORTED_MODULE_4__["Page1Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/page1/page1.component.css":
/*!*******************************************!*\
  !*** ./src/app/page1/page1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-pane .row .col-md-4{\r\n\toverflow: hidden;\r\n\tmargin-top: 20px;\r\n\tmargin-left: 120px;\r\n\theight: 200px;\r\n\twidth: 200px;\r\n\r\n} \r\n\r\n.tab-pane .row .col-md-4>img{\r\n\theight: 100%;\r\n\twidth: 100%;\r\n} \r\n\r\n.tab-pane .row .col-md-4>a{\r\n\t\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tleft: 43%;\r\n\tcolor: red;\r\n\tfont-weight: bold;\r\n} \r\n\r\n.tab-pane .row .col-md-4>a>img{\r\n\twidth: 15px;\r\n\theight: 15px;\r\n\tcursor: pointer;\r\n} \r\n\r\n.nav-tabs>li{\r\n\tfont-weight:bold;\r\n\t\r\n} \r\n\r\n.nav-tabs>li>a{\r\n\tcolor:black;\r\n} \r\n\r\n#sort{\r\n\tline-height: 40px;\r\n} \r\n\r\n.col-md-4 span{\r\n\ttext-align: center;\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\tbackground: rgba(33,33,33,0.4);\r\n\tleft: -100%;\r\n\ttop: 0;\r\n\ttransition: all 0.5 ease;\r\n\tcolor: white;\r\n\tfont-size: 15px;\r\n\tfont-weight: bold;\r\n\twidth: 100%;\r\n\theight: 90%;\r\n} \r\n\r\n.col-md-4:hover span{\r\n\tleft: 0;\r\n\ttop: 0;\r\n} \r\n\r\n.cart{\r\n\tposition: fixed;\r\n\toverflow: hidden;\r\n\ttop:10%;\r\n\tright: 2%;\r\n\twidth: 15%;\r\n\theight: auto;\r\n\tborder:2px solid black;\r\n\tborder-radius: 5px;\r\n} \r\n\r\n.cart>button{\r\n\toverflow: hidden;\r\n\twidth: 28%;\r\n\tmargin-left: 10px;\r\n} \r\n\r\n.cart>img{\r\n\theight: 20px;\r\n\twidth: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZTEvcGFnZTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxhQUFhOztDQUViOztBQUVEO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWjs7QUFFRDs7Q0FFQyxtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLFVBQVU7Q0FDVixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCOztBQUNEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEI7O0FBQ0Q7Q0FDQyxpQkFBaUI7O0NBRWpCOztBQUNEO0NBQ0MsWUFBWTtDQUNaOztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsK0JBQStCO0NBQy9CLFlBQVk7Q0FDWixPQUFPO0NBQ1AseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyxRQUFRO0NBQ1IsT0FBTztDQUNQOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixRQUFRO0NBQ1IsVUFBVTtDQUNWLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCOztBQUNEO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UxL3BhZ2UxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLXBhbmUgLnJvdyAuY29sLW1kLTR7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuXHRoZWlnaHQ6IDIwMHB4O1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHJcbn0gXHJcblxyXG4udGFiLXBhbmUgLnJvdyAuY29sLW1kLTQ+aW1ne1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYi1wYW5lIC5yb3cgLmNvbC1tZC00PmF7XHJcblx0XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiA0MyU7XHJcblx0Y29sb3I6IHJlZDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGFiLXBhbmUgLnJvdyAuY29sLW1kLTQ+YT5pbWd7XHJcblx0d2lkdGg6IDE1cHg7XHJcblx0aGVpZ2h0OiAxNXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmF2LXRhYnM+bGl7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcclxufVxyXG4ubmF2LXRhYnM+bGk+YXtcclxuXHRjb2xvcjpibGFjaztcclxufVxyXG5cclxuI3NvcnR7XHJcblx0bGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5jb2wtbWQtNCBzcGFue1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0YmFja2dyb3VuZDogcmdiYSgzMywzMywzMywwLjQpO1xyXG5cdGxlZnQ6IC0xMDAlO1xyXG5cdHRvcDogMDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC41IGVhc2U7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuLmNvbC1tZC00OmhvdmVyIHNwYW57XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDA7XHJcbn1cclxuXHJcbi5jYXJ0e1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRvcDoxMCU7XHJcblx0cmlnaHQ6IDIlO1xyXG5cdHdpZHRoOiAxNSU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uY2FydD5idXR0b257XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR3aWR0aDogMjglO1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5jYXJ0PmltZ3tcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0d2lkdGg6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page1/page1.component.html":
/*!********************************************!*\
  !*** ./src/app/page1/page1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- Nav tabs -->\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n  \t<li id=\"sort\">Sort by :</li>\n    <li role=\"presentation\" class=\"active\"><a href=\"#home\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Latest Arrivals</a></li>\n    <li role=\"presentation\"><a href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Highest Price</a></li>\n    <li role=\"presentation\"><a href=\"#messages\" aria-controls=\"messages\" role=\"tab\" data-toggle=\"tab\">Lowest Price</a></li>\n    <li role=\"presentation\"><a href=\"#settings\" aria-controls=\"settings\" role=\"tab\" data-toggle=\"tab\">Most Popular</a></li>\n    <li role=\"presentation\"><a href=\"#settings\" aria-controls=\"settings\" role=\"tab\" data-toggle=\"tab\">Coming Soon</a></li>\n  </ul>\n\n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n    <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"home\">\n    \t<div class=\"row\">\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth1.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth1.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth1.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth1.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth1.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth1.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t</div>\n    </div>\n    <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"profile\">\n    \t<div class=\"row\">\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth2.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth2.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth2.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth2.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth2.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth2.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t</div>\n    </div>\n    <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"messages\">\n    \t<div class=\"row\">\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth3.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth3.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth3.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth3.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\"(click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth3.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\"(click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth3.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\"(click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t</div>\n    </div>\n    <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"settings\">\n    \t<div class=\"row\">\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth4.jpg\">\n\t\t  \t<span>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t\t<p><b>Description</b></p>\n\t\t  \t</span>\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth4.jpg\">\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth4.jpg\">\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth4.jpg\">\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth4.jpg\">\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<img src=\"assets/img/cloth4.jpg\">\n\t\t  \t<a href=\"#\"><img src=\"assets/img/cart.png\" (click)=\"add()\">${{price}}</a>\n\t\t  </div>\n\t\t</div>\n    </div>\n  </div>\n</div>\n<!-- End of Nav Tabs ------------------------------------------------------------------------------------------------- -->\n<div class=\"cart\">\n\t<span><img src=\"assets/img/cart.png\">Your Selected Items:</span>\n\t<ul id=\"ul\">\n\t</ul>\n\t      Number of Items : {{num}}\n\t<br>\n\t      Total Amount($) : {{total}}\n\t<br>\n\t<button>Checkout</button>\n\t<button id=\"delete\" (click)= \"delete()\" >Delete</button>\n\t<button id=\"clear\" (click) =\"clear()\">Clear All</button>\n\t\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/page1/page1.component.ts":
/*!******************************************!*\
  !*** ./src/app/page1/page1.component.ts ***!
  \******************************************/
/*! exports provided: Page1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1Component", function() { return Page1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Page1Component = /** @class */ (function () {
    function Page1Component() {
        this.num = 0;
        this.price = 199;
        this.total = 0;
    }
    Page1Component.prototype.add = function () {
        this.num++;
        this.total = this.num * this.price;
    };
    ;
    Page1Component.prototype.delete = function () {
        if (this.num > 0) {
            this.num--;
        }
        else {
            this.num = 0;
        }
        ;
        this.total = this.num * this.price;
    };
    ;
    Page1Component.prototype.clear = function () {
        this.num = 0;
        this.total = 0;
    };
    ;
    Page1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page1',
            template: __webpack_require__(/*! ./page1.component.html */ "./src/app/page1/page1.component.html"),
            styles: [__webpack_require__(/*! ./page1.component.css */ "./src/app/page1/page1.component.css")]
        })
    ], Page1Component);
    return Page1Component;
}());

;


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

module.exports = __webpack_require__(/*! D:\angular\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map