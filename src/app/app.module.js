import { HttpModule } from '@angular/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import RootComponent from './app.rootComponent.js';
import ProblemComponent from './app.problemComponent.js';

var AppModule = NgModule({
	imports: [ BrowserModule, HttpModule],
	declarations: [RootComponent, ProblemComponent],
	bootstrap: [ RootComponent ]
})
.Class({
	constructor: function() {}
});

export default AppModule;