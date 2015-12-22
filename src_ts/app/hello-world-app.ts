import{RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import{Component, View} from 'angular2/angular2';
import{Registration} from './routes/registration';
import{LogOut} from './routes/logout';
import{CustomEventClass} from './events/customEventEx';

var routes = {
  registration: {
    path: '/',
    as: 'Registration',
    component: Registration,
    caption: 'Registration',
    link: ['/Registration']
  },
	logOut: {
    path: '/logout',
    as: 'LogOut',
    component: LogOut,
    caption: 'LogOut',
    link: ['/LogOut']
  },
	customEventEx: {
    path: '/custEvent',
    as: 'CustomEvent',
    component: CustomEventClass,
    caption: 'CustomEvent',
    link: ['/CustomEvent']
  }
};

@RouteConfig([
	routes.registration, routes.logOut, routes.customEventEx
])

@Component({
	selector: 'base-component-selector',
})

@View({
	templateUrl: 'app/home.html',
	directives: [ROUTER_DIRECTIVES]
})

export class HomeClass {
}