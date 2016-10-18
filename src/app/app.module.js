import { HttpModule } from '@angular/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SelectModule} from 'angular2-select';

import RootComponent from './components/app.rootComponent';
import ProblemComponent from './components/problem/app.problemComponent';
import ModalComponent from './components/modal/modal.component';
import FilterComponent from './components/filter/filter.component';

var AppModule = NgModule({
	imports: [ BrowserModule, HttpModule, SelectModule],
	declarations: [
		RootComponent,
		ProblemComponent,
		ModalComponent,
		FilterComponent],
	bootstrap: [ RootComponent ]
})
.Class({
	constructor: function() {}
});

export default AppModule;