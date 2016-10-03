import 'core-js'
import 'zone.js'
import AppModule from './app.module.js';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

document.addEventListener('DOMContentLoaded', function() {
	platformBrowserDynamic().bootstrapModule(AppModule);
});