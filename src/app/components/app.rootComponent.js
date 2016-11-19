import {Component} from '@angular/core';
import {URLSearchParams} from '@angular/http';
import ProblemStorageService from './../services/problemStorage.service';

function getProblemIdFromUrl() {
	let queryParams = new URLSearchParams(window.location.search.substring(1));
	let problemId = queryParams.get('problem') || null;
	return problemId ? Number(problemId) : null;
}

function sortOrderChanged (order) {
	this.sortOrder = order;

	this.visibleProblems.sort((a, b) => {
		let res;

		if (order.name === 'name') {
			res = a.title === b.title ? 0 : (a.title > b.title ? 1 : -1);
		} else if (order.name === 'date') {
			res = b.id - a.id;
		}

		return order.isAsc ? res : res * -1;
	});
}

var RootComponent = Component({
		selector: 'app-main',
		templateUrl: 'src/app/components/rootHtml.html',
		providers: [ProblemStorageService]
	}).Class({
		constructor: [ProblemStorageService, function(ProblemStorageService) {
			let problemId = getProblemIdFromUrl();
			this.selectedProblem = null;
			this.notFoundProblem = false;
			this.allProblems = [];
			this.visibleProblems = [];
			this.sortOrder = null;
			this.sortOrderChanged = sortOrderChanged.bind(this);

			ProblemStorageService.getProblems().subscribe(problems => {
				if (!problemId) {
					this.allProblems = problems;
					this.visibleProblems = problems;
					this.sortOrderChanged(this.sortOrder);
				} else {
					this.selectedProblem = problems.find(p => p.id === problemId);
				}

				if (!this.selectedProblem) {
					this.notFoundProblem = problemId;
				}
			});
		}]
	});

export default RootComponent
