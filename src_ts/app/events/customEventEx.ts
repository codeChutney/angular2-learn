import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'customEvent-selector'
})

@View({
	templateUrl: 'app/events/events.html'
})

export class CustomEventClass{
	
	doneTyping($event) {
		console.log("Hey");
  }
}