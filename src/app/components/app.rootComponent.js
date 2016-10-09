import {Component} from '@angular/core';
import ProblemStorageService from './../services/problemStorage.service';

var RootComponent = Component({
		selector: 'app-main',
		templateUrl: 'src/app/components/rootHtml.html',
		providers: [ProblemStorageService]
	}).Class({
		constructor: [ProblemStorageService, function(ProblemStorageService) {
			this.problems = [];
			ProblemStorageService.getProblems().subscribe(p => this.problems = p);
		}]
	});

export default RootComponent