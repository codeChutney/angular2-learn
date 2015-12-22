var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('angular2/router');
var angular2_1 = require('angular2/angular2');
var registration_1 = require('./routes/registration');
var logout_1 = require('./routes/logout');
var customEventEx_1 = require('./events/customEventEx');
var routes = {
    registration: {
        path: '/',
        as: 'Registration',
        component: registration_1.Registration,
        caption: 'Registration',
        link: ['/Registration']
    },
    logOut: {
        path: '/logout',
        as: 'LogOut',
        component: logout_1.LogOut,
        caption: 'LogOut',
        link: ['/LogOut']
    },
    customEventEx: {
        path: '/custEvent',
        as: 'CustomEvent',
        component: customEventEx_1.CustomEventClass,
        caption: 'CustomEvent',
        link: ['/CustomEvent']
    }
};
var HomeClass = (function () {
    function HomeClass() {
    }
    HomeClass = __decorate([
        router_1.RouteConfig([
            routes.registration, routes.logOut, routes.customEventEx
        ]),
        angular2_1.Component({
            selector: 'base-component-selector',
        }),
        angular2_1.View({
            templateUrl: 'app/home.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeClass);
    return HomeClass;
})();
exports.HomeClass = HomeClass;
//# sourceMappingURL=hello-world-app.js.map