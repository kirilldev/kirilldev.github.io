import {Component} from '@angular/core';
import ProblemStorageService from './../services/problemStorage.service';

var RootComponent = Component({
		selector: 'app-main',
		templateUrl: 'src/app/components/rootHtml.html',
		providers: [ProblemStorageService]
	}).Class({
		constructor: [ProblemStorageService, function(ProblemStorageService) {
			this.problems = [];
			this.sortOrderChanged = function(e) {
				console.log(e)
			};
			ProblemStorageService.getProblems().subscribe(p => this.problems = p);
		}]
	});

export default RootComponent
