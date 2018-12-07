webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/core/page-not-found/page-not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__core_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' },
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: left;\n  min-height: 100vh;\n  -webkit-transition-property: color, border-color, background-color, padding-top, font-size;\n  transition-property: color, border-color, background-color, padding-top, font-size;\n  -webkit-transition-duration: var(--transition-duration);\n          transition-duration: var(--transition-duration);\n  --small-padding-top: 74px;\n  --medium-padding-top: 83px;\n  --large-padding-top: 90px;\n}\n\n:host(.light) {\n  color: var(--dark-color);\n  border-color: var(--dark-color);\n  background-color: var(--light-color);\n}\n\n:host(.dark) {\n  color: var(--light-color);\n  border-color: var(--light-color);\n  background-color: var(--dark-color);\n}\n\n:host(.small) {\n  font-size: var(--small-font);\n  padding-top: 106px;\n}\n\n:host(.medium) {\n  font-size: var(--medium-font);\n  padding-top: 120px;\n}\n\n:host(.large) {\n  font-size: var(--large-font);\n  padding-top: 131px;\n}\n\n:host(.small.header-list-horizontal) {\n  padding-top: var(--small-padding-top);\n}\n\n:host(.medium.header-list-horizontal) {\n  padding-top: var(--medium-padding-top);\n}\n\n:host(.large.header-list-horizontal) {\n  padding-top: var(--large-padding-top);\n}\n\n.content {\n  width: var(--width);\n}\n\n.main {\n  padding: 10px;\n}\n\n@media only screen and (min-width: 600px) {\n  :host(.small) {\n    padding-top: var(--small-padding-top);\n  }\n\n  :host(.medium) {\n    padding-top: var(--medium-padding-top);\n  }\n\n  :host(.large) {\n    padding-top: var(--large-padding-top);\n  }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" #content>\n  <app-header></app-header>\n  <div class=\"main\">\n    <router-outlet></router-outlet>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_store_session_session_actions__ = __webpack_require__("./src/app/core/store/session/session.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.TOP_HORIZONTAL = 90;
        this.TOP_VERTICAL = 131;
        this.TOP_EXTRA = 50;
        this.scroll$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromEvent(window, 'scroll');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeSubscription = this.store.subscribe(function (state) {
            _this.classAttribute = [
                state.settings.theme,
                state.settings.size
            ].concat(state.session.isHeaderOpen ? [] : ['header-closed'], state.auth.isLoggedIn ? [] : ['header-list-horizontal']).join(' ');
            _this.isHeaderOpen = state.session.isHeaderOpen;
            _this.isLoggedIn = state.auth.isLoggedIn;
        });
        this.scrollSubscription = this.scroll$.subscribe(function () {
            var top = _this.contentElementRef.nativeElement.getBoundingClientRect().top;
            var width = window.innerWidth;
            var isHeaderListVertical = width <= 600 && _this.isLoggedIn;
            if ((isHeaderListVertical && top > _this.TOP_VERTICAL - _this.TOP_EXTRA) ||
                (!isHeaderListVertical && top > _this.TOP_HORIZONTAL - _this.TOP_EXTRA)) {
                _this.freezeOpenHeader();
            }
            else {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__core_store_session_session_actions__["b" /* EnableHeaderToggle */]());
                if ((isHeaderListVertical && top < _this.TOP_VERTICAL - _this.TOP_EXTRA) ||
                    (!isHeaderListVertical && top < _this.TOP_HORIZONTAL - _this.TOP_EXTRA)) {
                    if (_this.isHeaderOpen)
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__core_store_session_session_actions__["e" /* ToggleHeader */]());
                }
            }
        });
    };
    AppComponent.prototype.freezeOpenHeader = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__core_store_session_session_actions__["a" /* DisableHeaderToggle */]());
        if (!this.isHeaderOpen)
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__core_store_session_session_actions__["e" /* ToggleHeader */]());
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.storeSubscription.unsubscribe();
        this.scrollSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AppComponent.prototype, "contentElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class'),
        __metadata("design:type", String)
    ], AppComponent.prototype, "classAttribute", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_module__ = __webpack_require__("./src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_module__ = __webpack_require__("./src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_account_create_account_module__ = __webpack_require__("./src/app/create-account/create-account.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__posts_posts_module__ = __webpack_require__("./src/app/posts/posts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_users_module__ = __webpack_require__("./src/app/users/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_profile_my_profile_module__ = __webpack_require__("./src/app/my-profile/my-profile.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__create_post_create_post_module__ = __webpack_require__("./src/app/create-post/create-post.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reset_password_reset_password_module__ = __webpack_require__("./src/app/reset-password/reset-password.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_4__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_5__create_account_create_account_module__["a" /* CreateAccountModule */],
                __WEBPACK_IMPORTED_MODULE_10__my_profile_my_profile_module__["a" /* MyProfileModule */],
                __WEBPACK_IMPORTED_MODULE_11__create_post_create_post_module__["a" /* CreatePostModule */],
                __WEBPACK_IMPORTED_MODULE_12__reset_password_reset_password_module__["a" /* ResetPasswordModule */],
                __WEBPACK_IMPORTED_MODULE_6__posts_posts_module__["a" /* PostsModule */],
                __WEBPACK_IMPORTED_MODULE_7__users_users_module__["a" /* UsersModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/api/api.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/core/api/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posts_service__ = __webpack_require__("./src/app/core/api/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_service__ = __webpack_require__("./src/app/core/api/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_3__posts_service__["a" /* PostsService */],
                __WEBPACK_IMPORTED_MODULE_4__users_service__["a" /* UsersService */]
            ]
        })
    ], ApiModule);
    return ApiModule;
}());



/***/ }),

/***/ "./src/app/core/api/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_auth_auth_actions__ = __webpack_require__("./src/app/core/store/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(httpClient, store) {
        this.httpClient = httpClient;
        this.store = store;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + "/auth";
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        var observable = this.httpClient.post(this.BASE_URL + "/login", credentials).share();
        observable.subscribe(function (response) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_auth_auth_actions__["b" /* Login */](response.token, response.user));
        }, function () { });
        return observable;
    };
    AuthService.prototype.logout = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_auth_auth_actions__["c" /* Logout */]());
    };
    AuthService.prototype.forgotPassword = function (email) {
        return this.httpClient.post(this.BASE_URL + "/forgot-password", { email: email });
    };
    AuthService.prototype.resetPassword = function (data) {
        return this.httpClient.post(this.BASE_URL + "/reset-password", data);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/api/posts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = /** @class */ (function () {
    function PostsService(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "/posts";
    }
    PostsService.prototype.getPosts = function (tag, user) {
        var options = {
            params: __assign({}, tag && { tag: tag }, user && { user: user }),
        };
        return this.httpClient.get(this.BASE_URL, options);
    };
    PostsService.prototype.getPost = function (stringId) {
        var url = this.BASE_URL + "/" + stringId;
        return this.httpClient.get(url);
    };
    PostsService.prototype.createPost = function (post) {
        return this.httpClient.post(this.BASE_URL, post);
    };
    PostsService.prototype.createComment = function (postId, comment) {
        var url = this.BASE_URL + "/" + postId + "/comments";
        return this.httpClient.post(url, comment);
    };
    PostsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/core/api/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = /** @class */ (function () {
    function UsersService(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/users';
    }
    UsersService.prototype.getUsers = function () {
        return this.httpClient.get(this.BASE_URL);
    };
    UsersService.prototype.getUser = function (stringId) {
        return this.httpClient.get(this.BASE_URL + "/" + stringId);
    };
    UsersService.prototype.createUser = function (user) {
        return this.httpClient.post(this.BASE_URL, user);
    };
    UsersService.prototype.updateUser = function (userId, data) {
        return this.httpClient.patch(this.BASE_URL + "/" + userId, data);
    };
    UsersService.prototype.changePassword = function (userId, data) {
        return this.httpClient.post(this.BASE_URL + "/" + userId + "/change-password", data);
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/core/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonService = /** @class */ (function () {
    function CommonService() {
    }
    CommonService.prototype.trackById = function (index, object) {
        return object.id;
    };
    CommonService.prototype.getPasswordMatchValidator = function (passwordControlName, confirmPasswordControlName) {
        return function (formGroup) {
            var passwordValue = formGroup.get(passwordControlName).value;
            var confirmPasswordValue = formGroup.get(confirmPasswordControlName).value;
            return passwordValue !== confirmPasswordValue ? { passwordMatch: true } : null;
        };
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_api_module__ = __webpack_require__("./src/app/core/api/api.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/core/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/core/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__message_service__ = __webpack_require__("./src/app/core/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_service__ = __webpack_require__("./src/app/core/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__logged_in_guard_service__ = __webpack_require__("./src/app/core/logged-in-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_breadcrumbs_breadcrumbs_component__ = __webpack_require__("./src/app/core/header/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("./src/app/core/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_store__ = __webpack_require__("./src/app/core/store/store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__api_api_module__["a" /* ApiModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["a" /* ToastrModule */].forRoot({
                    timeOut: 1500,
                    positionClass: 'toast-center-center',
                }),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__store_store__["a" /* store */]),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_breadcrumbs_breadcrumbs_component__["a" /* BreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_9__common_service__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_10__logged_in_guard_service__["a" /* LoggedInGuard */],
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  bottom: 0;\n  right: var(--right-padding);\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  border: 1px solid;\n  border-bottom: none;\n  -webkit-transition-property: bottom;\n  transition-property: bottom;\n  -webkit-transition-duration: var(--transition-duration);\n          transition-duration: var(--transition-duration);\n}\n\n:host(.closed.small) {\n  bottom: -30px;\n}\n\n:host(.closed.medium) {\n  bottom: -33px;\n}\n\n:host(.closed.large) {\n  bottom: -36px;\n}\n\n:host(.light) {\n  color: var(--dark-color);\n  border-color: var(--dark-color);\n  background-color: var(--light-color);\n}\n\n:host(.dark) {\n  color: var(--light-color);\n  border-color: var(--light-color);\n  background-color: var(--dark-color);\n}\n\n.character {\n  width: 40%;\n  padding: 5% 0;\n  line-height: 1.2em;\n  font-size: 1.2em;\n}\n\n.character:hover {\n  cursor: pointer;\n}\n\n.character.size {\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toggle\">\n  <span (click)=\"onToggleClick()\">&#x022EF;&#x022EF;</span>\n</div>\n<div class=\"character size\" (click)=\"onSizeClick()\">a</div>\n<div class=\"character theme\" (click)=\"onThemeClick()\">&#x025FB;</div>\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_settings_settings_actions__ = __webpack_require__("./src/app/core/store/settings/settings.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_session_session_actions__ = __webpack_require__("./src/app/core/store/session/session.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterComponent = /** @class */ (function () {
    function FooterComponent(store) {
        this.store = store;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeSubscription = this.store.subscribe(function (state) {
            _this.classAttribute = [
                state.settings.theme,
                state.settings.size
            ].concat(state.session.isFooterOpen ? [] : ['closed']).join(' ');
        });
    };
    FooterComponent.prototype.onToggleClick = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_session_session_actions__["d" /* ToggleFooter */]());
    };
    FooterComponent.prototype.onSizeClick = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_settings_settings_actions__["b" /* ToggleSize */]());
    };
    FooterComponent.prototype.onThemeClick = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store_settings_settings_actions__["c" /* ToggleTheme */]());
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        this.storeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class'),
        __metadata("design:type", String)
    ], FooterComponent.prototype, "classAttribute", void 0);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/core/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/breadcrumbs/breadcrumbs.component.css":
/***/ (function(module, exports) {

module.exports = "span {\n  font-size: 0.9em;\n}"

/***/ }),

/***/ "./src/app/core/header/breadcrumbs/breadcrumbs.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let breadcrumb of breadcrumbs; index as i; last as isLast\">\n  <span>/</span>\n  <span [ngClass]=\"{ 'clickable': !isLast }\" (click)=\"onClick(i, isLast)\">{{ breadcrumb }}</span>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/core/header/breadcrumbs/breadcrumbs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(router) {
        this.router = router;
        this.breadcrumbs = [];
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* filter */])(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* distinctUntilChanged */])())
            .subscribe(function () { return _this.buildBreadcrumbs(); });
    };
    BreadcrumbsComponent.prototype.buildBreadcrumbs = function () {
        this.breadcrumbs = this.router.url.split('/').slice(1);
    };
    BreadcrumbsComponent.prototype.onClick = function (index, isLast) {
        var commands = this.breadcrumbs.slice(0, index + 1);
        if (!isLast)
            this.router.navigate(commands);
    };
    BreadcrumbsComponent.prototype.ngOnDestroy = function () {
        this.navigationEndEventsSubscription.unsubscribe();
    };
    BreadcrumbsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__("./src/app/core/header/breadcrumbs/breadcrumbs.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/core/header/breadcrumbs/breadcrumbs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  border-bottom: 1px solid;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition-property: color, border-color, background-color, top;\n  transition-property: color, border-color, background-color, top;\n  -webkit-transition-duration: var(--transition-duration);\n          transition-duration: var(--transition-duration);\n  --closed-small-horizontal-top: -50px;\n  --closed-medium-horizontal-top: -57px;\n  --closed-large-horizontal-top: -61px;\n}\n\n:host(.light) {\n  color: var(--dark-color);\n  border-color: var(--dark-color);\n  background-color: var(--light-color);\n}\n\n:host(.dark) {\n  color: var(--light-color);\n  border-color: var(--light-color);\n  background-color: var(--dark-color);\n}\n\n:host(.closed.small) {\n  top: -82px;\n}\n\n:host(.closed.medium) {\n  top: -94px;\n}\n\n:host(.closed.large) {\n  top: -102px;\n}\n\n:host(.closed.small.list-horizontal) {\n  top: var(--closed-small-horizontal-top);\n}\n\n:host(.closed.medium.list-horizontal) {\n  top: var(--closed-medium-horizontal-top);\n}\n\n:host(.closed.large.list-horizontal) {\n  top: var(--closed-large-horizontal-top);\n}\n\n:host(.list-horizontal) ul li {\n  display: inline;\n  margin: 0 5px;\n}\n\n.navigation {\n  padding: 5px 10px;\n}\n\n.title {\n  font-size: 1.2em;\n  font-weight: bold;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n@media only screen and (min-width: 600px) {\n  :host(.closed.small) {\n    top: var(--closed-small-horizontal-top);\n  }\n\n  :host(.closed.medium) {\n    top: var(--closed-medium-horizontal-top);\n  }\n\n  :host(.closed.large) {\n    top: var(--closed-large-horizontal-top);\n  }\n\n  ul li {\n    display: inline;\n    margin: 0 5px;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  :host {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  :host {\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n  }\n}\n"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\n  <div class=\"title clickable\" (click)=\"router.navigate(['home'])\">BloggingApp</div>\n  <app-breadcrumbs></app-breadcrumbs>\n</div>\n<div class=\"navigation\" [hidden]=\"isLoginOrCreateAccountUrl\">\n  <ul>\n    <ng-container *ngIf=\"user\">\n      <li>{{ user.name }}</li>\n      <li *ngFor=\"let item of loggedInRoutingItems\">\n        <span class=\"label clickable\" (click)=\"router.navigate(item.commands)\">{{ item.text }}</span>\n      </li>\n      <li>\n        <span class=\"label clickable\" (click)=\"onLogoutClick()\">Logout</span>\n      </li>\n    </ng-container>\n    <ng-container *ngIf=\"!user\">\n      <li *ngFor=\"let item of loggedOutRoutingItems\">\n        <span class=\"label clickable\" (click)=\"router.navigate(item.commands)\">{{ item.text }}</span>\n      </li>\n    </ng-container>\n  </ul>\n</div>\n<div class=\"toggle\" [ngClass]=\"{ 'disabled': isToggleDisabled }\">\n  <span (click)=\"onToggleClick()\">&#x022EF;&#x022EF;</span>\n</div>\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_auth_service__ = __webpack_require__("./src/app/core/api/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_session_session_actions__ = __webpack_require__("./src/app/core/store/session/session.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, authService, store) {
        this.router = router;
        this.authService = authService;
        this.store = store;
        this.loggedInRoutingItems = [
            { commands: ['my-profile'], text: 'Profile' },
            { commands: ['create-post'], text: 'Post' },
        ];
        this.loggedOutRoutingItems = [
            { commands: ['login'], text: 'Login' },
            { commands: ['create-account'], text: 'Join!' },
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationEndEventsSubscription = this.router.events
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* filter */])(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* distinctUntilChanged */])())
            .subscribe(function (event) {
            _this.isLoginOrCreateAccountUrl = ['/login', '/create-account'].includes(event.url);
        });
        this.store.subscribe(function (state) {
            _this.user = state.auth.user;
            _this.isToggleDisabled = state.session.isHeaderToggleDisabled;
            _this.classAttribute = [
                state.settings.theme,
                state.settings.size
            ].concat(state.session.isHeaderOpen ? [] : ['closed'], state.auth.isLoggedIn ? [] : ['list-horizontal']).join(' ');
        });
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['home']);
    };
    HeaderComponent.prototype.onToggleClick = function () {
        if (!this.isToggleDisabled)
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_session_session_actions__["e" /* ToggleHeader */]());
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.navigationEndEventsSubscription.unsubscribe();
        this.storeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class'),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "classAttribute", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/core/header/header.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__api_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/logged-in-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_auth_auth_selectors__ = __webpack_require__("./src/app/core/store/auth/auth.selectors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(store) {
        this.store = store;
    }
    LoggedInGuard.prototype.canActivate = function () {
        return this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["e" /* select */])(__WEBPACK_IMPORTED_MODULE_2__store_auth_auth_selectors__["a" /* selectIsLoggedIn */]));
    };
    LoggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());



/***/ }),

/***/ "./src/app/core/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService(toastrService) {
        this.toastrService = toastrService;
        this.MESSAGES = {
            CREATE_ACCOUNT_SUCCESS: 'Account created. Please log in.',
            LOGIN_SUCCESS: 'Welcome back!',
            CREATE_POST_SUCCESS: 'Post created.',
            CREATE_COMMENT_SUCCESS: 'Comment created.',
            UPDATE_MY_PROFILE_SUCCESS: 'Profile updated.',
            CHANGE_PASSWORD_SUCCESS: 'Password changed.',
            FORGOT_PASSWORD_EMAIL_SENT: 'Please check your email to reset your password.',
            FORGOT_PASSWORD_EMAIL_REQUIRED: 'Email is required for forgotten password.',
            RESET_PASSWORD_SUCCESS: 'Password reset.',
            BAD_REQUEST: 'Bad request.',
            INTERNAL_SERVER_ERROR: 'Internal server error.',
            UNKNOWN_ERROR: 'Uknown error.',
        };
    }
    MessageService.prototype.createAccountSuccess = function () {
        this.toastrService.success(this.MESSAGES.CREATE_ACCOUNT_SUCCESS);
    };
    MessageService.prototype.loginSuccess = function () {
        this.toastrService.info(this.MESSAGES.LOGIN_SUCCESS);
    };
    MessageService.prototype.createPostSuccess = function () {
        this.toastrService.success(this.MESSAGES.CREATE_POST_SUCCESS);
    };
    MessageService.prototype.createCommentSuccess = function () {
        this.toastrService.success(this.MESSAGES.CREATE_COMMENT_SUCCESS);
    };
    MessageService.prototype.updateMyProfileSuccess = function () {
        this.toastrService.success(this.MESSAGES.UPDATE_MY_PROFILE_SUCCESS);
    };
    MessageService.prototype.changePasswordSuccess = function () {
        this.toastrService.success(this.MESSAGES.CHANGE_PASSWORD_SUCCESS);
    };
    MessageService.prototype.forgotPasswordEmailSent = function () {
        this.toastrService.success(this.MESSAGES.FORGOT_PASSWORD_EMAIL_SENT);
    };
    MessageService.prototype.forgotPasswordEmailRequired = function () {
        this.toastrService.error(this.MESSAGES.FORGOT_PASSWORD_EMAIL_REQUIRED);
    };
    MessageService.prototype.resetPasswordSuccess = function () {
        this.toastrService.success(this.MESSAGES.RESET_PASSWORD_SUCCESS);
    };
    MessageService.prototype.error = function (response) {
        var _this = this;
        switch (response.status) {
            case 400:
                if (response.error && response.error.message) {
                    this.toastrService.error(response.error.message);
                }
                else
                    try {
                        // Display validation error messages, if any
                        var errors = response.error.response.original;
                        for (var type in errors) {
                            errors[type].forEach(function (message) {
                                _this.toastrService.error(message);
                            });
                        }
                    }
                    catch (e) {
                        this.toastrService.error(this.MESSAGES.BAD_REQUEST);
                    }
                break;
            case 500:
                this.toastrService.error(this.MESSAGES.INTERNAL_SERVER_ERROR);
                break;
            default:
                this.toastrService.error(this.MESSAGES.UNKNOWN_ERROR);
        }
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/core/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div>Page Not Found!</div>\n"

/***/ }),

/***/ "./src/app/core/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/core/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/core/page-not-found/page-not-found.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/store/auth/auth.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthActionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SetUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SetToken; });
var AuthActionName;
(function (AuthActionName) {
    AuthActionName["LOGIN"] = "[Auth] Login";
    AuthActionName["LOGOUT"] = "[Auth] Logout";
    AuthActionName["SET_USER"] = "[Auth] Set User";
    AuthActionName["SET_TOKEN"] = "[Auth] Set Token";
})(AuthActionName || (AuthActionName = {}));
;
var Login = /** @class */ (function () {
    function Login(token, user) {
        this.token = token;
        this.user = user;
        this.type = AuthActionName.LOGIN;
    }
    return Login;
}());

;
var Logout = /** @class */ (function () {
    function Logout() {
        this.type = AuthActionName.LOGOUT;
    }
    return Logout;
}());

;
var SetUser = /** @class */ (function () {
    function SetUser(user) {
        this.user = user;
        this.type = AuthActionName.SET_USER;
    }
    return SetUser;
}());

var SetToken = /** @class */ (function () {
    function SetToken(token) {
        this.token = token;
        this.type = AuthActionName.SET_TOKEN;
    }
    return SetToken;
}());



/***/ }),

/***/ "./src/app/core/store/auth/auth.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export JWT_KEY */
/* unused harmony export USER_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_actions__ = __webpack_require__("./src/app/core/store/auth/auth.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var JWT_KEY = 'blogging-app-jwt';
var USER_KEY = 'blogging-app-user';
;
var initialState = {
    token: localStorage.getItem(JWT_KEY),
    user: JSON.parse(localStorage.getItem(USER_KEY)),
    isLoggedIn: Boolean(localStorage.getItem(JWT_KEY)),
};
var authReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* AuthActionName */].LOGIN: {
            localStorage.setItem(JWT_KEY, action.token);
            localStorage.setItem(USER_KEY, JSON.stringify(action.user));
            return {
                token: action.token,
                user: action.user,
                isLoggedIn: true,
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* AuthActionName */].LOGOUT: {
            localStorage.removeItem(JWT_KEY);
            localStorage.removeItem(USER_KEY);
            return {
                token: null,
                user: null,
                isLoggedIn: false,
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* AuthActionName */].SET_USER: {
            localStorage.setItem(USER_KEY, JSON.stringify(action.user));
            return __assign({}, state, { user: action.user });
        }
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* AuthActionName */].SET_TOKEN: {
            localStorage.setItem(JWT_KEY, action.token);
            return __assign({}, state, { token: action.token });
        }
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/core/store/auth/auth.selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export selectToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectIsLoggedIn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__("./src/app/core/store/selectors.ts");


var selectToken = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_1__selectors__["a" /* selectAuth */], function (state) { return state.token; });
var selectUser = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_1__selectors__["a" /* selectAuth */], function (state) { return state.user; });
var selectIsLoggedIn = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_1__selectors__["a" /* selectAuth */], function (state) { return state.isLoggedIn; });


/***/ }),

/***/ "./src/app/core/store/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectAuth; });
/* unused harmony export selectSettings */
/* unused harmony export selectSession */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");

var selectAuth = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('auth');
var selectSettings = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('settings');
var selectSession = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('session');


/***/ }),

/***/ "./src/app/core/store/session/session.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SessionActionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ToggleHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ToggleFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisableHeaderToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EnableHeaderToggle; });
var SessionActionName;
(function (SessionActionName) {
    SessionActionName["TOGGLE_HEADER"] = "[Session] Toggle Header";
    SessionActionName["TOGGLE_FOOTER"] = "[Session] Toggle Footer";
    SessionActionName["DISABLE_HEADER_TOGGLE"] = "[Session] Disable Header Toggle";
    SessionActionName["ENABLE_HEADER_TOGGLE"] = "[Session] Enable Header Toggle";
})(SessionActionName || (SessionActionName = {}));
;
var ToggleHeader = /** @class */ (function () {
    function ToggleHeader() {
        this.type = SessionActionName.TOGGLE_HEADER;
    }
    return ToggleHeader;
}());

;
var ToggleFooter = /** @class */ (function () {
    function ToggleFooter() {
        this.type = SessionActionName.TOGGLE_FOOTER;
    }
    return ToggleFooter;
}());

;
var DisableHeaderToggle = /** @class */ (function () {
    function DisableHeaderToggle() {
        this.type = SessionActionName.DISABLE_HEADER_TOGGLE;
    }
    return DisableHeaderToggle;
}());

;
var EnableHeaderToggle = /** @class */ (function () {
    function EnableHeaderToggle() {
        this.type = SessionActionName.ENABLE_HEADER_TOGGLE;
    }
    return EnableHeaderToggle;
}());

;


/***/ }),

/***/ "./src/app/core/store/session/session.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sessionReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__session_actions__ = __webpack_require__("./src/app/core/store/session/session.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

;
var initialState = {
    isHeaderOpen: true,
    isFooterOpen: false,
    isHeaderToggleDisabled: true,
};
var sessionReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__session_actions__["c" /* SessionActionName */].TOGGLE_HEADER:
            return __assign({}, state, { isHeaderOpen: !state.isHeaderOpen });
        case __WEBPACK_IMPORTED_MODULE_0__session_actions__["c" /* SessionActionName */].TOGGLE_FOOTER:
            return __assign({}, state, { isFooterOpen: !state.isFooterOpen });
        case __WEBPACK_IMPORTED_MODULE_0__session_actions__["c" /* SessionActionName */].DISABLE_HEADER_TOGGLE:
            return __assign({}, state, { isHeaderToggleDisabled: true });
        case __WEBPACK_IMPORTED_MODULE_0__session_actions__["c" /* SessionActionName */].ENABLE_HEADER_TOGGLE:
            return __assign({}, state, { isHeaderToggleDisabled: false });
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/core/store/settings/settings.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsActionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ToggleTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToggleSize; });
var SettingsActionName;
(function (SettingsActionName) {
    SettingsActionName["TOGGLE_THEME"] = "[Settings] Toggle Theme";
    SettingsActionName["TOGGLE_SIZE"] = "[Settings] Toggle Size";
})(SettingsActionName || (SettingsActionName = {}));
;
var ToggleTheme = /** @class */ (function () {
    function ToggleTheme() {
        this.type = SettingsActionName.TOGGLE_THEME;
    }
    return ToggleTheme;
}());

;
var ToggleSize = /** @class */ (function () {
    function ToggleSize() {
        this.type = SettingsActionName.TOGGLE_SIZE;
    }
    return ToggleSize;
}());

;


/***/ }),

/***/ "./src/app/core/store/settings/settings.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settingsReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_values__ = __webpack_require__("./src/app/core/store/settings/settings.values.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_actions__ = __webpack_require__("./src/app/core/store/settings/settings.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var SETTINGS_KEY = 'bloggging-settings';
var DEFAULT_THEME = __WEBPACK_IMPORTED_MODULE_0__settings_values__["b" /* Theme */].Light;
var DEFAULT_SIZE = __WEBPACK_IMPORTED_MODULE_0__settings_values__["a" /* Size */].Medium;
;
var localStorageSettings = JSON.parse(localStorage.getItem(SETTINGS_KEY));
var initialState = localStorageSettings ? {
    theme: localStorageSettings.theme || DEFAULT_THEME,
    size: localStorageSettings.size || DEFAULT_SIZE,
} : {
    theme: DEFAULT_THEME,
    size: DEFAULT_SIZE,
};
var settingsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__settings_actions__["a" /* SettingsActionName */].TOGGLE_THEME: {
            var newState = __assign({}, state, { theme: state.theme === __WEBPACK_IMPORTED_MODULE_0__settings_values__["b" /* Theme */].Light ? __WEBPACK_IMPORTED_MODULE_0__settings_values__["b" /* Theme */].Dark : __WEBPACK_IMPORTED_MODULE_0__settings_values__["b" /* Theme */].Light });
            localStorage.setItem(SETTINGS_KEY, JSON.stringify(newState));
            return newState;
        }
        case __WEBPACK_IMPORTED_MODULE_1__settings_actions__["a" /* SettingsActionName */].TOGGLE_SIZE: {
            var newState = __assign({}, state, { size: state.size === __WEBPACK_IMPORTED_MODULE_0__settings_values__["a" /* Size */].Small ? __WEBPACK_IMPORTED_MODULE_0__settings_values__["a" /* Size */].Medium :
                    state.size === __WEBPACK_IMPORTED_MODULE_0__settings_values__["a" /* Size */].Medium ? __WEBPACK_IMPORTED_MODULE_0__settings_values__["a" /* Size */].Large :
                        __WEBPACK_IMPORTED_MODULE_0__settings_values__["a" /* Size */].Small });
            localStorage.setItem(SETTINGS_KEY, JSON.stringify(newState));
            return newState;
        }
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/core/store/settings/settings.values.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Size; });
var Theme;
(function (Theme) {
    Theme["Light"] = "light";
    Theme["Dark"] = "dark";
})(Theme || (Theme = {}));
;
var Size;
(function (Size) {
    Size["Small"] = "small";
    Size["Medium"] = "medium";
    Size["Large"] = "large";
})(Size || (Size = {}));
;


/***/ }),

/***/ "./src/app/core/store/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_reducer__ = __webpack_require__("./src/app/core/store/auth/auth.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings_reducer__ = __webpack_require__("./src/app/core/store/settings/settings.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_reducer__ = __webpack_require__("./src/app/core/store/session/session.reducer.ts");



;
var store = {
    auth: __WEBPACK_IMPORTED_MODULE_0__auth_auth_reducer__["a" /* authReducer */],
    settings: __WEBPACK_IMPORTED_MODULE_1__settings_settings_reducer__["a" /* settingsReducer */],
    session: __WEBPACK_IMPORTED_MODULE_2__session_session_reducer__["a" /* sessionReducer */],
};


/***/ }),

/***/ "./src/app/create-account/create-account-form/create-account-form.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 50%;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/create-account/create-account-form/create-account-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"createAccountForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <div class=\"form-control\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" name=\"name\" placeholder=\"Enter your name\" formControlName=\"name\">\n    <app-error-messages [name]=\"'Name'\" [control]=\"createAccountForm.controls.name\"></app-error-messages>\n  </div>\n  <div class=\"form-control\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" name=\"email\" placeholder=\"Enter your email\" formControlName=\"email\">\n    <app-error-messages [name]=\"'Email'\" [control]=\"createAccountForm.controls.email\"></app-error-messages>\n  </div>\n  <div class=\"form-control\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" name=\"password\" placeholder=\"Enter your password\" formControlName=\"password\">\n    <app-error-messages [name]=\"'Password'\" [control]=\"createAccountForm.controls.password\"></app-error-messages>\n  </div>\n  <div class=\"form-control\">\n    <label for=\"confirmPassword\">Confirm Password</label>\n    <input type=\"password\" name=\"confirmPassword\" placeholder=\"Reenter your password\" formControlName=\"confirmPassword\">\n    <app-error-messages\n      [name]=\"'Confirm Password'\"\n      [control]=\"createAccountForm.controls.confirmPassword\"\n      [group]=\"createAccountForm\">\n    </app-error-messages>\n  </div>\n  <button type=\"submit\" [disabled]=\"createAccountForm.invalid\">Create account</button>\n</form>\n"

/***/ }),

/***/ "./src/app/create-account/create-account-form/create-account-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_users_service__ = __webpack_require__("./src/app/core/api/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_message_service__ = __webpack_require__("./src/app/core/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_common_service__ = __webpack_require__("./src/app/core/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateAccountFormComponent = /** @class */ (function () {
    function CreateAccountFormComponent(formBuilder, commonService, usersService, router, messageService) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.usersService = usersService;
        this.router = router;
        this.messageService = messageService;
    }
    CreateAccountFormComponent.prototype.ngOnInit = function () {
        this.createAccountForm = this.formBuilder.group({
            name: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(20)]],
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(100)]],
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            confirmPassword: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
        }, {
            validator: this.commonService.getPasswordMatchValidator('password', 'confirmPassword'),
        });
    };
    CreateAccountFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.usersService.createUser(this.createAccountForm.value).subscribe(function () {
            _this.messageService.createAccountSuccess();
            _this.router.navigate(['login']);
        }, function (response) {
            _this.messageService.error(response);
        });
    };
    CreateAccountFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-account-form',
            template: __webpack_require__("./src/app/create-account/create-account-form/create-account-form.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/create-account/create-account-form/create-account-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__core_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__core_message_service__["a" /* MessageService */]])
    ], CreateAccountFormComponent);
    return CreateAccountFormComponent;
}());



/***/ }),

/***/ "./src/app/create-account/create-account-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_account_component__ = __webpack_require__("./src/app/create-account/create-account.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'create-account', component: __WEBPACK_IMPORTED_MODULE_2__create_account_component__["a" /* CreateAccountComponent */] }
];
var CreateAccountRoutingModule = /** @class */ (function () {
    function CreateAccountRoutingModule() {
    }
    CreateAccountRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], CreateAccountRoutingModule);
    return CreateAccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/create-account/create-account.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/create-account/create-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"label margin-bottom-s\">Create Account</div>\n<app-create-account-form></app-create-account-form>\n"

/***/ }),

/***/ "./src/app/create-account/create-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateAccountComponent = /** @class */ (function () {
    function CreateAccountComponent() {
    }
    CreateAccountComponent.prototype.ngOnInit = function () {
    };
    CreateAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-account',
            template: __webpack_require__("./src/app/create-account/create-account.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/create-account/create-account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateAccountComponent);
    return CreateAccountComponent;
}());



/***/ }),

/***/ "./src/app/create-account/create-account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_account_routing_module__ = __webpack_require__("./src/app/create-account/create-account-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_account_component__ = __webpack_require__("./src/app/create-account/create-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_account_form_create_account_form_component__ = __webpack_require__("./src/app/create-account/create-account-form/create-account-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CreateAccountModule = /** @class */ (function () {
    function CreateAccountModule() {
    }
    CreateAccountModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__create_account_routing_module__["a" /* CreateAccountRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__create_account_component__["a" /* CreateAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_5__create_account_form_create_account_form_component__["a" /* CreateAccountFormComponent */]
            ]
        })
    ], CreateAccountModule);
    return CreateAccountModule;
}());



/***/ }),

/***/ "./src/app/create-post/create-post-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_post_create_post_component__ = __webpack_require__("./src/app/create-post/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_logged_in_guard_service__ = __webpack_require__("./src/app/core/logged-in-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'create-post',
        component: __WEBPACK_IMPORTED_MODULE_2__create_post_create_post_component__["a" /* CreatePostComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__core_logged_in_guard_service__["a" /* LoggedInGuard */]],
    },
];
var CreatePostRoutingModule = /** @class */ (function () {
    function CreatePostRoutingModule() {
    }
    CreatePostRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], CreatePostRoutingModule);
    return CreatePostRoutingModule;
}());



/***/ }),

/***/ "./src/app/create-post/create-post.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_quill__ = __webpack_require__("./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_post_routing_module__ = __webpack_require__("./src/app/create-post/create-post-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_post_create_post_component__ = __webpack_require__("./src/app/create-post/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_post_post_form_post_form_component__ = __webpack_require__("./src/app/create-post/create-post/post-form/post-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CreatePostModule = /** @class */ (function () {
    function CreatePostModule() {
    }
    CreatePostModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__create_post_routing_module__["a" /* CreatePostRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_quill__["a" /* QuillModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__create_post_create_post_component__["a" /* CreatePostComponent */],
                __WEBPACK_IMPORTED_MODULE_6__create_post_post_form_post_form_component__["a" /* PostFormComponent */],
            ]
        })
    ], CreatePostModule);
    return CreatePostModule;
}());



/***/ }),

/***/ "./src/app/create-post/create-post/create-post.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-post/create-post/create-post.component.html":
/***/ (function(module, exports) {

module.exports = "<app-post-form [submit]=\"submitHandler\"></app-post-form>\n"

/***/ }),

/***/ "./src/app/create-post/create-post/create-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_posts_service__ = __webpack_require__("./src/app/core/api/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_message_service__ = __webpack_require__("./src/app/core/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatePostComponent = /** @class */ (function () {
    function CreatePostComponent(router, postsService, messageService) {
        this.router = router;
        this.postsService = postsService;
        this.messageService = messageService;
        this.submitHandler = this.submitHandler.bind(this);
    }
    CreatePostComponent.prototype.submitHandler = function (post) {
        var _this = this;
        this.postsService.createPost(post).subscribe(function () {
            _this.messageService.createPostSuccess();
            _this.router.navigate(['posts']);
        }, function (response) {
            _this.messageService.error(response);
        });
    };
    CreatePostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-post',
            template: __webpack_require__("./src/app/create-post/create-post/create-post.component.html"),
            styles: [__webpack_require__("./src/app/create-post/create-post/create-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core_api_posts_service__["a" /* PostsService */],
            __WEBPACK_IMPORTED_MODULE_3__core_message_service__["a" /* MessageService */]])
    ], CreatePostComponent);
    return CreatePostComponent;
}());



/***/ }),

/***/ "./src/app/create-post/create-post/post-form/post-form.component.css":
/***/ (function(module, exports) {

module.exports = "input[name=\"tag\"] {\n  width: 20%;\n}\n"

/***/ }),

/***/ "./src/app/create-post/create-post/post-form/post-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"postForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <div class=\"label margin-bottom-s\">Create post</div>\n  <div class=\"form-control\">\n    <label for=\"title\">Title</label>\n    <input type=\"text\" name=\"title\" placeholder=\"Enter post's title\" formControlName=\"title\"/>\n    <app-error-messages [name]=\"'Title'\" [control]=\"postForm.controls.title\"></app-error-messages>\n  </div>\n  <div class=\"form-control\">\n    <label for=\"content\">Content</label>\n    <quill-editor\n      formControlName=\"content\">\n    </quill-editor>\n    <app-error-messages [name]=\"'Content'\" [control]=\"postForm.controls.content\"></app-error-messages>\n  </div>\n  <div class=\"form-control\">\n    <label for=\"tag\">Tag</label>\n    <input\n      type=\"text\"\n      name=\"tag\"\n      placeholder=\"Enter tag\"\n      formControlName=\"tag\"\n      (keypress)=\"onTagInputKeyPress($event)\"\n    />\n    <button\n      type=\"button\"\n      [disabled]=\"!postForm.controls.tag.value || postForm.controls.tag.errors || tags.length >= 5\"\n      (click)=\"onAddTagClick()\">\n      Add\n    </button>\n    <app-error-messages [name]=\"'Tag'\" [control]=\"postForm.controls.tag\"></app-error-messages>\n  </div>\n  <p *ngIf=\"postForm.controls.tag.invalid && postForm.controls.tag.errors.pattern\">\n    Please use letters and numbers only\n  </p>\n  <div class=\"margin-bottom-s\">\n    <span class=\"label\">Tags</span>\n    <ng-container *ngIf=\"tags.length\">\n      <ng-container *ngFor=\"let tag of tags\">\n        <span (click)=\"onTagClick(tag)\">#{{ tag }}</span>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"!tags.length\">/</ng-container>\n  </div>\n  <button type=\"submit\" [disabled]=\"postForm.invalid\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/create-post/create-post/post-form/post-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_store_auth_auth_selectors__ = __webpack_require__("./src/app/core/store/auth/auth.selectors.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostFormComponent = /** @class */ (function () {
    function PostFormComponent(formBuilder, store) {
        this.formBuilder = formBuilder;
        this.store = store;
        this.tags = [];
    }
    PostFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postForm = this.formBuilder.group({
            title: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            content: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            tag: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^[a-zA-Z0-9]+$/), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(20)]],
        });
        this.userSubscription = this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* select */])(__WEBPACK_IMPORTED_MODULE_3__core_store_auth_auth_selectors__["b" /* selectUser */])).subscribe(function (user) {
            _this.userId = user ? user.id : null;
        });
    };
    PostFormComponent.prototype.addTag = function () {
        if (this.tags.indexOf(this.postForm.controls.tag.value) === -1) {
            this.tags.push(this.postForm.controls.tag.value);
            this.handleTagsChange();
        }
        this.postForm.controls.tag.reset();
    };
    PostFormComponent.prototype.onAddTagClick = function () {
        this.addTag();
    };
    PostFormComponent.prototype.onTagInputKeyPress = function (event) {
        if ([' ', ',', 'Enter'].indexOf(event.key) !== -1) {
            event.preventDefault();
            this.addTag();
        }
    };
    PostFormComponent.prototype.onTagClick = function (tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
        this.handleTagsChange();
    };
    PostFormComponent.prototype.handleTagsChange = function () {
        // Conditionally enable or disable the control
        if (this.tags.length >= 5 && !this.postForm.controls.tag.disabled) {
            this.postForm.controls.tag.disable();
        }
        else if (this.tags.length < 5 && this.postForm.controls.tag.disabled) {
            this.postForm.controls.tag.enable();
        }
    };
    PostFormComponent.prototype.onSubmit = function () {
        delete this.postForm.value.tag;
        this.submit(__assign({}, this.postForm.value, { tags: this.tags, user_id: this.userId }));
    };
    PostFormComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostFormComponent.prototype, "submit", void 0);
    PostFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post-form',
            template: __webpack_require__("./src/app/create-post/create-post/post-form/post-form.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/create-post/create-post/post-form/post-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], PostFormComponent);
    return PostFormComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"label margin-bottom-s\">Home</div>\n<p>Work in progress</p>\n<p class=\"clickable\" (click)=\"router.navigate(['posts'])\">See posts</p>\n<p class=\"clickable\" (click)=\"router.navigate(['users'])\">See users</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing_module__ = __webpack_require__("./src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* HomeRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/login/login-form/login-form.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 50%;\n  text-align: center;\n}\n\n.forgot-password {\n  font-size: 0.8rem;\n}\n"

/***/ }),

/***/ "./src/app/login/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <div class=\"form-control\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" name=\"email\" placeholder=\"Enter your email\" formControlName=\"email\">\n    <app-error-messages [name]=\"'Email'\" [control]=\"loginForm.controls.email\"></app-error-messages>\n  </div>\n  <div class=\"form-control\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\"name=\"password\" placeholder=\"Enter your password\" formControlName=\"password\">\n    <app-error-messages [name]=\"'Password'\" [control]=\"loginForm.controls.password\"></app-error-messages>\n    <span class=\"clickable forgot-password\" (click)=\"onForgotPasswordClick()\">Forgot password?</span>\n  </div>\n  <button type=\"submit\" [disabled]=\"loginForm.invalid\">Login</button>\n</form>\n"

/***/ }),

/***/ "./src/app/login/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_auth_service__ = __webpack_require__("./src/app/core/api/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_message_service__ = __webpack_require__("./src/app/core/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(formBuilder, authService, router, messageService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.messageService = messageService;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email]],
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]
        });
    };
    LoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.loginForm.value).subscribe(function () {
            _this.messageService.loginSuccess();
            _this.router.navigate(['home']);
        }, function (response) {
            _this.messageService.error(response);
        });
    };
    LoginFormComponent.prototype.onForgotPasswordClick = function () {
        var _this = this;
        var email = this.loginForm.controls.email.value;
        if (email) {
            this.authService.forgotPassword(email).subscribe(function () {
                _this.messageService.forgotPasswordEmailSent();
            }, function (response) {
                _this.messageService.error(response);
            });
        }
        else {
            this.messageService.forgotPasswordEmailRequired();
        }
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__("./src/app/login/login-form/login-form.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/login/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__core_message_service__["a" /* MessageService */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"label margin-bottom-s\">Login</div>\n<app-login-form></app-login-form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_routing_module__ = __webpack_require__("./src/app/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_form_login_form_component__ = __webpack_require__("./src/app/login/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__login_routing_module__["a" /* LoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_form_login_form_component__["a" /* LoginFormComponent */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/my-profile/my-profile-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_profile_my_profile_component__ = __webpack_require__("./src/app/my-profile/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_logged_in_guard_service__ = __webpack_require__("./src/app/core/logged-in-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'my-profile',
        component: __WEBPACK_IMPORTED_MODULE_2__my_profile_my_profile_component__["a" /* MyProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__core_logged_in_guard_service__["a" /* LoggedInGuard */]],
    },
];
var MyProfileRoutingModule = /** @class */ (function () {
    function MyProfileRoutingModule() {
    }
    MyProfileRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], MyProfileRoutingModule);
    return MyProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/my-profile/my-profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_profile_routing_module__ = __webpack_require__("./src/app/my-profile/my-profile-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_profile_my_profile_component__ = __webpack_require__("./src/app/my-profile/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile_form_my_profile_form_component__ = __webpack_require__("./src/app/my-profile/my-profile/my-profile-form/my-profile-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_profile_change_password_form_change_password_form_component__ = __webpack_require__("./src/app/my-profile/my-profile/change-password-form/change-password-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MyProfileModule = /** @class */ (function () {
    function MyProfileModule() {
    }
    MyProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__my_profile_routing_module__["a" /* MyProfileRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__my_profile_my_profile_component__["a" /* MyProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile_form_my_profile_form_component__["a" /* MyProfileFormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__my_profile_change_password_form_change_password_form_component__["a" /* ChangePasswordFormComponent */],
            ]
        })
    ], MyProfileModule);
    return MyProfileModule;
}());



/***/ }),

/***/ "./src/app/my-profile/my-profile/change-password-form/change-password-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-profile/my-profile/change-password-form/change-password-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <div class=\"form-control\">\n    <label for=\"name\">Current Password</label>\n    <input type=\"password\" name=\"currentPassword\" placeholder=\"Enter your password\" formControlName=\"currentPassword\">\n    <app-error-messages\n      [name]=\"'Current Password'\"\n      [control]=\"changePasswordForm.controls.currentPassword\">\n    </app-error-messages>\n  </div>\n  <div class=\"form-control\">\n    <label for=\"name\">New Password</label>\n    <input type=\"password\" name=\"newPassword\" placeholder=\"Enter your new password\" formControlName=\"newPassword\">\n    <app-error-messages\n      [name]=\"'New Password'\"\n      [control]=\"changePasswordForm.controls.newPassword\">\n    </app-error-messages>\n  </div>\n  <div class=\"form-control\">\n    <label for=\"name\">Confirm New Password</label>\n    <input type=\"password\" name=\"confirmNewPassword\" placeholder=\"Reenter your new password\" formControlName=\"confirmNewPassword\">\n    <app-error-messages\n      [name]=\"'Confirm New Password'\"\n      [control]=\"changePasswordForm.controls.confirmNewPassword\"\n      [group]=\"changePasswordForm\"\n      [passwordControlName]=\"'newPassword'\"\n      [confirmPasswordControlName]=\"'confirmNewPassword'\">\n    </app-error-messages>\n  </div>\n  <button type=\"submit\" [disabled]=\"changePasswordForm.invalid\">Change password</button>\n</form>\n"

/***/ }),

/***/ "./src/app/my-profile/my-profile/change-password-form/change-password-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_users_service__ = __webpack_require__("./src/app/core/api/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_store_auth_auth_selectors__ = __webpack_require__("./src/app/core/store/auth/auth.selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_message_service__ = __webpack_require__("./src/app/core/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_common_service__ = __webpack_require__("./src/app/core/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_store_auth_auth_actions__ = __webpack_require__("./src/app/core/store/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChangePasswordFormComponent = /** @class */ (function () {
    function ChangePasswordFormComponent(formBuilder, store, commonService, usersService, messageService) {
        this.formBuilder = formBuilder;
        this.store = store;
        this.commonService = commonService;
        this.usersService = usersService;
        this.messageService = messageService;
    }
    ChangePasswordFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* select */])(__WEBPACK_IMPORTED_MODULE_4__core_store_auth_auth_selectors__["b" /* selectUser */])).subscribe(function (user) {
            _this.userId = user.id;
        }).unsubscribe();
        this.changePasswordForm = this.formBuilder.group({
            currentPassword: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            newPassword: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            confirmNewPassword: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
        }, {
            validator: this.commonService.getPasswordMatchValidator('newPassword', 'confirmNewPassword'),
        });
    };
    ChangePasswordFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = {
            currentPassword: this.changePasswordForm.controls.currentPassword.value,
            newPassword: this.changePasswordForm.controls.newPassword.value,
        };
        this.usersService.changePassword(this.userId, data).subscribe(function (response) {
            _this.messageService.changePasswordSuccess();
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__core_store_auth_auth_actions__["d" /* SetToken */](response.token));
        }, function (response) {
            _this.messageService.error(response);
        }, function () {
            _this.changePasswordForm.reset();
        });
    };
    ChangePasswordFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-password-form',
            template: __webpack_require__("./src/app/my-profile/my-profile/change-password-form/change-password-form.component.html"),
            styles: [__webpack_require__("./src/app/my-profile/my-profile/change-password-form/change-password-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_6__core_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_5__core_message_service__["a" /* MessageService */]])
    ], ChangePasswordFormComponent);
    return ChangePasswordFormComponent;
}());



/***/ }),

/***/ "./src/app/my-profile/my-profile/my-profile-form/my-profile-form.component.css":
/***/ (function(module, exports) {

module.exports = "input {\n    width: 50%;\n}\n\ntextarea {\n    height: 25vh;\n}\n"

/***/ }),

/***/ "./src/app/my-profile/my-profile/my-profile-form/my-profile-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myProfileForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <div class=\"form-control\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" name=\"name\" formControlName=\"name\" readonly>\n    <app-error-messages [name]=\"'Name'\" [control]=\"myProfileForm.controls.name\"></app-error-messages>\n  </div>\n  <div class=\"form-control\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" name=\"email\" formControlName=\"email\" readonly>\n    <app-error-messages [name]=\"'Email'\" [control]=\"myProfileForm.controls.email\"></app-error-messages>\n  </div>\n  <div class=\"form-control\">\n    <label for=\"website\">Website</label>\n    <input type=\"text\" name=\"website\" placeholder=\"Enter your website\" formControlName=\"website\">\n    <app-error-messages [name]=\"'Website'\" [control]=\"myProfileForm.controls.website\"></app-error-messages>\n  </div>\n  <div class=\"form-control\">\n    <label for=\"about\">About</label>\n    <textarea name=\"about\" placeholder=\"Tell others about yourself\" formControlName=\"about\"></textarea>\n    <app-error-messages [name]=\"'About'\" [control]=\"myProfileForm.controls.about\"></app-error-messages>\n  </div>\n  <button type=\"submit\" [disabled]=\"myProfileForm.invalid || myProfileForm.pristine\">Update profile</button>\n</form>\n"

/***/ }),

/***/ "./src/app/my-profile/my-profile/my-profile-form/my-profile-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_message_service__ = __webpack_require__("./src/app/core/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_users_service__ = __webpack_require__("./src/app/core/api/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_store_auth_auth_selectors__ = __webpack_require__("./src/app/core/store/auth/auth.selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_store_auth_auth_actions__ = __webpack_require__("./src/app/core/store/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyProfileFormComponent = /** @class */ (function () {
    function MyProfileFormComponent(formBuilder, store, usersService, messageService) {
        this.formBuilder = formBuilder;
        this.store = store;
        this.usersService = usersService;
        this.messageService = messageService;
    }
    MyProfileFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* select */])(__WEBPACK_IMPORTED_MODULE_5__core_store_auth_auth_selectors__["b" /* selectUser */])).subscribe(function (user) {
            _this.buildForm(user);
            _this.userId = user.id;
        }).unsubscribe();
    };
    MyProfileFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = {
            website: this.myProfileForm.controls.website.value,
            about: this.myProfileForm.controls.about.value,
        };
        this.usersService.updateUser(this.userId, data).subscribe(function (user) {
            _this.messageService.updateMyProfileSuccess();
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__core_store_auth_auth_actions__["e" /* SetUser */](user));
        }, function (response) {
            _this.messageService.error(response);
        });
    };
    MyProfileFormComponent.prototype.buildForm = function (user) {
        this.myProfileForm = this.formBuilder.group({
            name: [{ value: user.name, disabled: true }],
            email: [{ value: user.email, disabled: true }],
            website: [user.website, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(255)]],
            about: [user.about, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(1000)]],
        });
    };
    MyProfileFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-profile-form',
            template: __webpack_require__("./src/app/my-profile/my-profile/my-profile-form/my-profile-form.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/my-profile/my-profile/my-profile-form/my-profile-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__core_api_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_3__core_message_service__["a" /* MessageService */]])
    ], MyProfileFormComponent);
    return MyProfileFormComponent;
}());



/***/ }),

/***/ "./src/app/my-profile/my-profile/my-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-profile/my-profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"label margin-bottom-s\">My Profile</div>\n<app-my-profile-form></app-my-profile-form>\n<br>\n<div class=\"label margin-bottom-s\">Change Password</div>\n<app-change-password-form></app-change-password-form>\n"

/***/ }),

/***/ "./src/app/my-profile/my-profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent() {
    }
    MyProfileComponent.prototype.ngOnInit = function () {
    };
    MyProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-profile',
            template: __webpack_require__("./src/app/my-profile/my-profile/my-profile.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/my-profile/my-profile/my-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/posts/comment-form/comment-form.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: var(--margin-m) auto;\n}\n\ntextarea {\n  height: 6em;\n}\n"

/***/ }),

/***/ "./src/app/posts/comment-form/comment-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <div class=\"label\">Make a comment</div>\n  <textarea name=\"text\" placeholder=\"Your comment...\" formControlName=\"text\"></textarea>\n  <button type=\"submit\" [disabled]=\"commentForm.invalid\">Submit</button>\n</form>\n"

/***/ }),

/***/ "./src/app/posts/comment-form/comment-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_posts_service__ = __webpack_require__("./src/app/core/api/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_message_service__ = __webpack_require__("./src/app/core/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_store_auth_auth_selectors__ = __webpack_require__("./src/app/core/store/auth/auth.selectors.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentFormComponent = /** @class */ (function () {
    function CommentFormComponent(formBuilder, postsService, messageService, store) {
        this.formBuilder = formBuilder;
        this.postsService = postsService;
        this.messageService = messageService;
        this.store = store;
        this.commentAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CommentFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentForm = this.formBuilder.group({
            text: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
        });
        this.userSubscription = this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["e" /* select */])(__WEBPACK_IMPORTED_MODULE_5__core_store_auth_auth_selectors__["b" /* selectUser */])).subscribe(function (user) {
            _this.userId = user ? user.id : null;
        });
    };
    CommentFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var submitData = __assign({}, this.commentForm.value, { user_id: this.userId });
        this.postsService.createComment(this.postId, submitData).subscribe(function (response) {
            _this.messageService.createCommentSuccess();
            _this.commentForm.reset();
            _this.commentAdded.emit(response);
        }, function (response) {
            _this.messageService.error(response);
        });
    };
    CommentFormComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], CommentFormComponent.prototype, "postId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CommentFormComponent.prototype, "commentAdded", void 0);
    CommentFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comment-form',
            template: __webpack_require__("./src/app/posts/comment-form/comment-form.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/posts/comment-form/comment-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_posts_service__["a" /* PostsService */],
            __WEBPACK_IMPORTED_MODULE_4__core_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], CommentFormComponent);
    return CommentFormComponent;
}());



/***/ }),

/***/ "./src/app/posts/comment-item/comment-item.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: var(--margin-s) auto;\n}\n"

/***/ }),

/***/ "./src/app/posts/comment-item/comment-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"metadata\">\n  <span class=\"label\">By</span>\n  <span class=\"clickable\" *ngIf=\"comment.user\" (click)=\"onUserNameClick()\">{{ comment.user.name }}</span>\n  <span *ngIf=\"!comment.user\">anonymous</span>\n  <span class=\"label\">On</span>\n  <span>{{ comment.created_at | date:'medium' }}</span>\n</div>\n<div>\n  {{ comment.text }}\n</div>\n"

/***/ }),

/***/ "./src/app/posts/comment-item/comment-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentItemComponent = /** @class */ (function () {
    function CommentItemComponent(router) {
        this.router = router;
    }
    CommentItemComponent.prototype.ngOnInit = function () {
        if (!this.comment) {
            throw new Error('CommentItemComponent requires comment attribute!');
        }
    };
    CommentItemComponent.prototype.onUserNameClick = function () {
        this.router.navigate(['users', this.comment.user.string_id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CommentItemComponent.prototype, "comment", void 0);
    CommentItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comment-item',
            template: __webpack_require__("./src/app/posts/comment-item/comment-item.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/posts/comment-item/comment-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], CommentItemComponent);
    return CommentItemComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-item/post-item.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: var(--margin-s) auto;\n}\n"

/***/ }),

/***/ "./src/app/posts/post-item/post-item.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title\" [ngClass]=\"{ 'clickable': isPreview }\" (click)=\"onTitleClick()\">\n  {{ post.title }}\n</h2>\n<div class=\"metadata\">\n  <span class=\"label\">By</span>\n  <span class=\"clickable\" (click)=\"onUserNameClick()\">{{ post.user.name }}</span>\n  <span class=\"label\">On</span>\n  <span>{{ post.created_at | date:'medium' }}</span>\n</div>\n<div class=\"metadata\">\n  <span class=\"label\">Views</span>\n  <span>{{ post.views_count }}</span>\n  <span>&#x02022;</span>\n  <span class=\"label\">Comments</span>\n  <span>{{ post.comments_count }}</span>\n  <span>&#x02022;</span>\n  <span class=\"label\">Tags</span>\n  <ng-container *ngIf=\"post.tags.length\">\n    <ng-container *ngFor=\"let tag of post.tags\">\n      <span class=\"clickable\" (click)=\"onTagClick(tag.key)\">#{{ tag.key }}</span>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"!post.tags.length\">/</ng-container>\n</div>\n<div *ngIf=\"!isPreview\" [innerHTML]=\"sanitizedPostContent\"></div>\n"

/***/ }),

/***/ "./src/app/posts/post-item/post-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostItemComponent = /** @class */ (function () {
    function PostItemComponent(router, domSanitizer) {
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.isPreview = false;
    }
    PostItemComponent.prototype.ngOnInit = function () {
        if (!this.post) {
            throw new Error('PostItemComponent requires post attribute!');
        }
        this.sanitizedPostContent = this.domSanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* SecurityContext */].HTML, this.post.content);
    };
    PostItemComponent.prototype.onTitleClick = function () {
        if (this.isPreview) {
            this.router.navigate(['posts', this.post.string_id]);
        }
    };
    PostItemComponent.prototype.onUserNameClick = function () {
        this.router.navigate(['users', this.post.user.string_id]);
    };
    PostItemComponent.prototype.onTagClick = function (tag) {
        this.router.navigate(['posts'], { queryParams: { tag: tag } });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostItemComponent.prototype, "post", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PostItemComponent.prototype, "isPreview", void 0);
    PostItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post-item',
            template: __webpack_require__("./src/app/posts/post-item/post-item.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/posts/post-item/post-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], PostItemComponent);
    return PostItemComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_posts_service__ = __webpack_require__("./src/app/core/api/posts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostResolverService = /** @class */ (function () {
    function PostResolverService(postsService) {
        this.postsService = postsService;
    }
    PostResolverService.prototype.resolve = function (route, state) {
        return this.postsService.getPost(route.params.stringId);
    };
    PostResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_api_posts_service__["a" /* PostsService */]])
    ], PostResolverService);
    return PostResolverService;
}());



/***/ }),

/***/ "./src/app/posts/post/post.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"label margin-bottom-s\">Post</div>\n<app-post-item [post]=\"post\"></app-post-item>\n<app-comment-form\n  [postId]=\"post.id\"\n  (commentAdded)=\"onCommentAdded($event)\">\n</app-comment-form>\n<div>\n  <span class=\"label\">Comments</span>\n  <span>{{ post.comments.length }}</span>\n</div>\n<div *ngFor=\"let comment of post.comments; trackBy: commonService.trackById\">\n  <app-comment-item [comment]=\"comment\"></app-comment-item>\n</div>\n"

/***/ }),

/***/ "./src/app/posts/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_common_service__ = __webpack_require__("./src/app/core/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_message_service__ = __webpack_require__("./src/app/core/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostComponent = /** @class */ (function () {
    function PostComponent(route, commonService, messageService) {
        this.route = route;
        this.commonService = commonService;
        this.messageService = messageService;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.post = data.post;
        }, function (error) {
            _this.messageService.error(error);
        });
    };
    PostComponent.prototype.onCommentAdded = function (comment) {
        this.post.comments = [comment].concat(this.post.comments);
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("./src/app/posts/post/post.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/posts/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__core_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__core_message_service__["a" /* MessageService */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_posts_service__ = __webpack_require__("./src/app/core/api/posts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsResolverService = /** @class */ (function () {
    function PostsResolverService(postsService) {
        this.postsService = postsService;
    }
    PostsResolverService.prototype.resolve = function (route, state) {
        return this.postsService.getPosts(route.queryParamMap.get('tag'), route.queryParamMap.get('user'));
    };
    PostsResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_api_posts_service__["a" /* PostsService */]])
    ], PostsResolverService);
    return PostsResolverService;
}());



/***/ }),

/***/ "./src/app/posts/posts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_post_component__ = __webpack_require__("./src/app/posts/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posts_posts_component__ = __webpack_require__("./src/app/posts/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__posts_resolver_service__ = __webpack_require__("./src/app/posts/posts-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_resolver_service__ = __webpack_require__("./src/app/posts/post-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'posts',
        children: [
            {
                path: ':stringId',
                component: __WEBPACK_IMPORTED_MODULE_2__post_post_component__["a" /* PostComponent */],
                resolve: {
                    post: __WEBPACK_IMPORTED_MODULE_5__post_resolver_service__["a" /* PostResolverService */]
                }
            },
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__posts_posts_component__["a" /* PostsComponent */],
                resolve: {
                    posts: __WEBPACK_IMPORTED_MODULE_4__posts_resolver_service__["a" /* PostsResolverService */]
                },
                runGuardsAndResolvers: 'paramsOrQueryParamsChange',
            }
        ]
    }
];
var PostsRoutingModule = /** @class */ (function () {
    function PostsRoutingModule() {
    }
    PostsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PostsRoutingModule);
    return PostsRoutingModule;
}());



/***/ }),

/***/ "./src/app/posts/posts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posts_routing_module__ = __webpack_require__("./src/app/posts/posts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__posts_posts_component__ = __webpack_require__("./src/app/posts/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_post_component__ = __webpack_require__("./src/app/posts/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__posts_resolver_service__ = __webpack_require__("./src/app/posts/posts-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_resolver_service__ = __webpack_require__("./src/app/posts/post-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_item_post_item_component__ = __webpack_require__("./src/app/posts/post-item/post-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__comment_form_comment_form_component__ = __webpack_require__("./src/app/posts/comment-form/comment-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__comment_item_comment_item_component__ = __webpack_require__("./src/app/posts/comment-item/comment-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__posts_routing_module__["a" /* PostsRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_8__post_item_post_item_component__["a" /* PostItemComponent */],
                __WEBPACK_IMPORTED_MODULE_9__comment_form_comment_form_component__["a" /* CommentFormComponent */],
                __WEBPACK_IMPORTED_MODULE_10__comment_item_comment_item_component__["a" /* CommentItemComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__posts_resolver_service__["a" /* PostsResolverService */],
                __WEBPACK_IMPORTED_MODULE_7__post_resolver_service__["a" /* PostResolverService */],
            ],
        })
    ], PostsModule);
    return PostsModule;
}());



/***/ }),

/***/ "./src/app/posts/posts/posts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"label margin-bottom-s\">Posts</div>\n<app-post-item\n  *ngFor=\"let post of posts; trackBy: commonService.trackById\"\n  [post]=\"post\"\n  [isPreview]=\"true\">\n</app-post-item>\n"

/***/ }),

/***/ "./src/app/posts/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_common_service__ = __webpack_require__("./src/app/core/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_message_service__ = __webpack_require__("./src/app/core/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostsComponent = /** @class */ (function () {
    function PostsComponent(route, router, commonService, messageService) {
        this.route = route;
        this.router = router;
        this.commonService = commonService;
        this.messageService = messageService;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.posts = data.posts;
        }, function (error) {
            _this.messageService.error(error);
        });
    };
    PostsComponent.prototype.onPostTitleClick = function (stringId) {
        this.router.navigate([stringId], { relativeTo: this.route });
    };
    PostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-posts',
            template: __webpack_require__("./src/app/posts/posts/posts.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/posts/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__core_message_service__["a" /* MessageService */]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_password_reset_password_component__ = __webpack_require__("./src/app/reset-password/reset-password/reset-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'reset-password', component: __WEBPACK_IMPORTED_MODULE_2__reset_password_reset_password_component__["a" /* ResetPasswordComponent */] }
];
var ResetPasswordRoutingModule = /** @class */ (function () {
    function ResetPasswordRoutingModule() {
    }
    ResetPasswordRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ResetPasswordRoutingModule);
    return ResetPasswordRoutingModule;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_password_routing_module__ = __webpack_require__("./src/app/reset-password/reset-password-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_password_reset_password_component__ = __webpack_require__("./src/app/reset-password/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_password_reset_password_form_reset_password_form_component__ = __webpack_require__("./src/app/reset-password/reset-password/reset-password-form/reset-password-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ResetPasswordModule = /** @class */ (function () {
    function ResetPasswordModule() {
    }
    ResetPasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__reset_password_routing_module__["a" /* ResetPasswordRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_4__reset_password_reset_password_form_reset_password_form_component__["a" /* ResetPasswordFormComponent */]
            ]
        })
    ], ResetPasswordModule);
    return ResetPasswordModule;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password/reset-password-form/reset-password-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reset-password/reset-password/reset-password-form/reset-password-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <div class=\"form-control\">\n    <label for=\"name\">New Password</label>\n    <input type=\"password\" name=\"newPassword\" placeholder=\"Enter your new password\" formControlName=\"newPassword\">\n    <app-error-messages\n      [name]=\"'New Password'\"\n      [control]=\"resetPasswordForm.controls.newPassword\">\n    </app-error-messages>\n  </div>\n  <div class=\"form-control\">\n    <label for=\"name\">Confirm New Password</label>\n    <input type=\"password\" name=\"confirmNewPassword\" placeholder=\"Reenter your new password\" formControlName=\"confirmNewPassword\">\n    <app-error-messages\n      [name]=\"'Confirm New Password'\"\n      [control]=\"resetPasswordForm.controls.confirmNewPassword\"\n      [group]=\"resetPasswordForm\"\n      [passwordControlName]=\"'newPassword'\"\n      [confirmPasswordControlName]=\"'confirmNewPassword'\">\n    </app-error-messages>\n  </div>\n  <button type=\"submit\" [disabled]=\"resetPasswordForm.invalid\">Submit</button>\n</form>\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password/reset-password-form/reset-password-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_common_service__ = __webpack_require__("./src/app/core/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_auth_service__ = __webpack_require__("./src/app/core/api/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_message_service__ = __webpack_require__("./src/app/core/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetPasswordFormComponent = /** @class */ (function () {
    function ResetPasswordFormComponent(formBuilder, commonService, authService, route, messageService, router) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.authService = authService;
        this.route = route;
        this.messageService = messageService;
        this.router = router;
    }
    ResetPasswordFormComponent.prototype.ngOnInit = function () {
        this.resetPasswordForm = this.formBuilder.group({
            newPassword: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            confirmNewPassword: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
        }, {
            validator: this.commonService.getPasswordMatchValidator('newPassword', 'confirmNewPassword'),
        });
    };
    ResetPasswordFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = {
            token: this.route.snapshot.queryParamMap.get('token'),
            newPassword: this.resetPasswordForm.controls.newPassword.value,
        };
        this.authService.resetPassword(data).subscribe(function () {
            _this.messageService.resetPasswordSuccess();
            _this.router.navigate(['login']);
        }, function (response) {
            _this.messageService.error(response);
        }, function () {
            _this.resetPasswordForm.reset();
        });
    };
    ResetPasswordFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reset-password-form',
            template: __webpack_require__("./src/app/reset-password/reset-password/reset-password-form/reset-password-form.component.html"),
            styles: [__webpack_require__("./src/app/reset-password/reset-password/reset-password-form/reset-password-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__core_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__core_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]])
    ], ResetPasswordFormComponent);
    return ResetPasswordFormComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password/reset-password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reset-password/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<app-reset-password-form></app-reset-password-form>\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent() {
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reset-password',
            template: __webpack_require__("./src/app/reset-password/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("./src/app/reset-password/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/shared/error-messages/error-messages.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n    text-align: left;\n}\n\np {\n    color: red;\n    margin: 0 auto;\n    font-size: 0.8rem;\n}\n"

/***/ }),

/***/ "./src/app/shared/error-messages/error-messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"control.invalid && control.dirty\">\n  <p *ngIf=\"control.errors.required\">\n    {{ name }} is required.\n  </p>\n  <p *ngIf=\"control.errors.minlength\">\n    {{ name }} must have {{ control.errors.minlength.requiredLength }} characters at least.\n  </p>\n  <p *ngIf=\"control.errors.maxlength\">\n    {{ name }} can have {{ control.errors.maxlength.requiredLength }} characters at most.\n  </p>\n  <p *ngIf=\"control.errors.email\">\n    {{ name }} must be a valid email.\n  </p>\n</div>\n<div *ngIf=\"group && group.invalid && group.dirty && group.errors\">\n  <p *ngIf=\"group.errors.passwordMatch &&\n    group.controls[passwordControlName || 'password'].dirty &&\n    group.controls[confirmPasswordControlName || 'confirmPassword'].dirty\">\n    Passwords must match.\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/error-messages/error-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorMessagesComponent = /** @class */ (function () {
    function ErrorMessagesComponent() {
    }
    ErrorMessagesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ErrorMessagesComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */])
    ], ErrorMessagesComponent.prototype, "control", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], ErrorMessagesComponent.prototype, "group", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ErrorMessagesComponent.prototype, "passwordControlName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ErrorMessagesComponent.prototype, "confirmPasswordControlName", void 0);
    ErrorMessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-messages',
            template: __webpack_require__("./src/app/shared/error-messages/error-messages.component.html"),
            styles: [__webpack_require__("./src/app/shared/error-messages/error-messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorMessagesComponent);
    return ErrorMessagesComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.css":
/***/ (function(module, exports) {

module.exports = ":root {\n  --margin-s: 20px;\n  --margin-m: 30px;\n  --dark-color: #1a1a1a;\n  --light-color: #e5e5e5;\n  --disabled-dark-color: #bbbbbb;\n  --disabled-light-color: #555555;\n  --width: 640px;\n  --small-font: 16px;\n  --medium-font: 18px;\n  --large-font: 20px;\n  --right-padding: 10%;\n  --transition-duration: 0.5s;\n}\n\n.title {\n  font-size: 1.2em;\n  margin: 0;\n}\n\n.metadata {\n  margin: 5px auto;\n  font-size: 0.8em;\n}\n\n.label {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.header {\n  font-size: 1em;\n}\n\ninput {\n  width: 100%;\n}\n\ntextarea {\n  width: 98%;\n  resize: none;\n}\n\n.margin-bottom-s {\n  margin-bottom: var(--margin-s)\n}\n\n.toggle {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 100%;\n          flex: 1 100%;\n}\n\n.toggle span {\n  cursor: pointer;\n}\n\n.toggle.disabled span {\n  cursor: default;\n}\n\n:host(.light) .toggle.disabled {\n  color: var(--disabled-dark-color);\n}\n\n:host(.dark) .toggle.disabled {\n  color: var(--disabled-light-color);\n}\n"

/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_messages_error_messages_component__ = __webpack_require__("./src/app/shared/error-messages/error-messages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__error_messages_error_messages_component__["a" /* ErrorMessagesComponent */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__error_messages_error_messages_component__["a" /* ErrorMessagesComponent */],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/users/user-item/user-item.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: var(--margin-s) auto;\n}\n"

/***/ }),

/***/ "./src/app/users/user-item/user-item.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title\" [ngClass]=\"{ 'clickable': isNameClickable }\" (click)=\"onNameClick()\">\n  {{ user.name }}\n</h2>\n<div class=\"metadata\">\n  <span class=\"label\">Joined</span>\n  <span>{{ user.created_at | date:'medium' }}</span>\n</div>\n<div class=\"metadata\">\n  <span class=\"label clickable\" (click)=\"onPostsClick()\">Posts</span>\n  <span>{{ user.posts_count }}</span>\n  <span>&#x02022;</span>\n  <span class=\"label\">comments</span>\n  <span>{{ user.comments_count }}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/users/user-item/user-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserItemComponent = /** @class */ (function () {
    function UserItemComponent(router) {
        this.router = router;
        this.isNameClickable = false;
    }
    UserItemComponent.prototype.ngOnInit = function () {
        if (!this.user) {
            throw new Error('UserItemComponent requires user attribute!');
        }
    };
    UserItemComponent.prototype.onNameClick = function () {
        if (this.isNameClickable) {
            this.router.navigate(['users', this.user.string_id]);
        }
    };
    UserItemComponent.prototype.onPostsClick = function () {
        this.router.navigate(['posts'], { queryParams: { user: this.user.string_id } });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserItemComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], UserItemComponent.prototype, "isNameClickable", void 0);
    UserItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-item',
            template: __webpack_require__("./src/app/users/user-item/user-item.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/users/user-item/user-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], UserItemComponent);
    return UserItemComponent;
}());



/***/ }),

/***/ "./src/app/users/user-posts/user-posts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/user-posts/user-posts.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-posts works!\n</p>\n"

/***/ }),

/***/ "./src/app/users/user-posts/user-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserPostsComponent = /** @class */ (function () {
    function UserPostsComponent() {
    }
    UserPostsComponent.prototype.ngOnInit = function () {
    };
    UserPostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-posts',
            template: __webpack_require__("./src/app/users/user-posts/user-posts.component.html"),
            styles: [__webpack_require__("./src/app/users/user-posts/user-posts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserPostsComponent);
    return UserPostsComponent;
}());



/***/ }),

/***/ "./src/app/users/user-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_users_service__ = __webpack_require__("./src/app/core/api/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserResolverService = /** @class */ (function () {
    function UserResolverService(usersService) {
        this.usersService = usersService;
    }
    UserResolverService.prototype.resolve = function (route, state) {
        return this.usersService.getUser(route.params.stringId);
    };
    UserResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_api_users_service__["a" /* UsersService */]])
    ], UserResolverService);
    return UserResolverService;
}());



/***/ }),

/***/ "./src/app/users/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"label margin-bottom-s\">User</div>\n<app-user-item [user]=\"user\"></app-user-item>\n"

/***/ }),

/***/ "./src/app/users/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_message_service__ = __webpack_require__("./src/app/core/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(route, messageService) {
        this.route = route;
        this.messageService = messageService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data.user;
        }, function (error) {
            _this.messageService.error(error);
        });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/users/user/user.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/users/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__core_message_service__["a" /* MessageService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/users/users-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_users_service__ = __webpack_require__("./src/app/core/api/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersResolverService = /** @class */ (function () {
    function UsersResolverService(usersService) {
        this.usersService = usersService;
    }
    UsersResolverService.prototype.resolve = function (route, state) {
        return this.usersService.getUsers();
    };
    UsersResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_api_users_service__["a" /* UsersService */]])
    ], UsersResolverService);
    return UsersResolverService;
}());



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_component__ = __webpack_require__("./src/app/users/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__("./src/app/users/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_posts_user_posts_component__ = __webpack_require__("./src/app/users/user-posts/user-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_resolver_service__ = __webpack_require__("./src/app/users/users-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_resolver_service__ = __webpack_require__("./src/app/users/user-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'users',
        children: [
            {
                path: ':stringId',
                children: [
                    {
                        path: 'posts',
                        component: __WEBPACK_IMPORTED_MODULE_4__user_posts_user_posts_component__["a" /* UserPostsComponent */],
                    },
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__user_user_component__["a" /* UserComponent */],
                        resolve: {
                            user: __WEBPACK_IMPORTED_MODULE_6__user_resolver_service__["a" /* UserResolverService */],
                        },
                    },
                ],
            },
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */],
                resolve: {
                    users: __WEBPACK_IMPORTED_MODULE_5__users_resolver_service__["a" /* UsersResolverService */]
                }
            }
        ],
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_routing_module__ = __webpack_require__("./src/app/users/users-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__("./src/app/users/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_component__ = __webpack_require__("./src/app/users/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_posts_user_posts_component__ = __webpack_require__("./src/app/users/user-posts/user-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_resolver_service__ = __webpack_require__("./src/app/users/users-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_resolver_service__ = __webpack_require__("./src/app/users/user-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_item_user_item_component__ = __webpack_require__("./src/app/users/user-item/user-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__users_routing_module__["a" /* UsersRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_4__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_posts_user_posts_component__["a" /* UserPostsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__user_item_user_item_component__["a" /* UserItemComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__users_resolver_service__["a" /* UsersResolverService */],
                __WEBPACK_IMPORTED_MODULE_7__user_resolver_service__["a" /* UserResolverService */],
            ],
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/users/users/users.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"label margin-bottom-s\">Users</div>\n<app-user-item\n  *ngFor=\"let user of users; trackBy: commonService.trackById\"\n  [user]=\"user\"\n  [isNameClickable]=\"true\">\n</app-user-item>\n"

/***/ }),

/***/ "./src/app/users/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_common_service__ = __webpack_require__("./src/app/core/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_message_service__ = __webpack_require__("./src/app/core/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(route, router, commonService, messageService) {
        this.route = route;
        this.router = router;
        this.commonService = commonService;
        this.messageService = messageService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data.users;
        }, function (error) {
            _this.messageService.error(error);
        });
    };
    UsersComponent.prototype.onUserNameClick = function (stringId) {
        this.router.navigate([stringId], { relativeTo: this.route });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/users/users/users.component.html"),
            styles: [__webpack_require__("./src/app/shared/shared.css"), __webpack_require__("./src/app/users/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__core_message_service__["a" /* MessageService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://127.0.0.1:8000/api/v1'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map