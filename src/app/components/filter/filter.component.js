import {Component} from '@angular/core'
import ProblemStorageService from './../../services/problemStorage.service';

var FilterComponent =
        Component({
            selector: 'filter',
            templateUrl: 'src/app/components/filter/filter.html',
            providers: [ProblemStorageService],
            inputs: [
                'sortOrderChanged : sortOrderChanged'
            ]
        }).Class({
            constructor: [ProblemStorageService, function(problemStorage) {
                this.options = [];
				this.sortMarker = '▲';
				this.sortOptions = ['date', 'name'];
				this.sortOrder = {
					name : 'name',
					isAsc : true
				};
				
                problemStorage.getAvailibleTags().subscribe(o => this.options = o);
            }],

			reorder : function(byProp) {
				if (byProp === this.sortOrder.name) {
					this.sortOrder.isAsc = !this.sortOrder.isAsc;
				} else {
					this.sortOrder = {
						name: byProp,
						isAsc: true
					}
				}

				this.sortMarker = this.sortOrder.isAsc ? '▲' : '▼';
				
				this.sortOrderChanged(this.sortOrder);
			}
			
        /*    (opened)="onSelectOpened()"
            (closed)="onSelectClosed()"
            (selected)="onSelected($event)"
            (deselected)="onDeselected($event)"*/
        });

export default FilterComponent;
