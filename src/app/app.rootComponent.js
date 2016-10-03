import {Component} from '@angular/core';
import ProblemComponent from './app.problemComponent.js'
import ProblemStorageService from './problemStorage.service.js'

var RootComponent = Component({
		selector: 'app-main',
		templateUrl: 'src/app/rootHtml.html',
		directives: [ProblemComponent],
		providers: [ProblemStorageService]
	}).Class({
		constructor: [ProblemStorageService, function(ProblemStorageService) {
			this.problems = [];
			ProblemStorageService.getProblems().subscribe(p => this.problems = p);
		}]
	});

export default RootComponent
