import {Component} from '@angular/core';
import ProblemStorageService from './../services/problemStorage.service';

var RootComponent = Component({
		selector: 'app-main',
		templateUrl: 'src/app/components/rootHtml.html',
		providers: [ProblemStorageService]
	}).Class({
		constructor: [ProblemStorageService, function(ProblemStorageService) {
			this.allProblems = [];
			this.visibleProblems = [];
			this.sortOrder = null;

			this.sortOrderChanged = (order) => {
				this.sortOrder = order;

				this.visibleProblems.sort((a,b) => {
					let res;

					if (order.name === 'name') {
						res =  a.title === b.title ? 0 : (a.title > b.title ? 1 : -1);
					} else if (order.name === 'date') {
						res =  b.id - a.id;
					}

					return order.isAsc ? res : res * -1;
				});
			};

			ProblemStorageService.getProblems().subscribe(p => {
				this.allProblems = p;
				this.visibleProblems = p;
				this.sortOrderChanged(this.sortOrder);
			});
		}]
	});

export default RootComponent
