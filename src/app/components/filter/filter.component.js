import {Component} from '@angular/core'
import ProblemStorageService from './../../services/problemStorage.service';

var FilterComponent =
        Component({
            selector: 'filter',
            templateUrl: 'src/app/components/filter/filter.html',
            providers: [ProblemStorageService],
            inputs: [
                'sortOrderChanged : sortOrderChanged',
                'filterChanged : filterChanged'
            ]
        }).Class({
            constructor: [ProblemStorageService, function(problemStorage) {
                this.options = [];
                this.selectedOptions = [];
				this.sortMarker = '▲';
				this.sortOptions = ['date', 'name'];
				this.sortOrder = {
					name : 'date',
					isAsc : true
				};

                problemStorage.getAvailibleTags().subscribe(o => this.options = o);
            }],

			ngOnInit : function() {
				this.sortOrderChanged(this.sortOrder);
			},

            onSelected: function(e) {
                this.selectedOptions.push(e);
                this.filterChanged(this.selectedOptions);
			},

            onRemoved: function (e) {
                this.selectedOptions = this.selectedOptions.filter(opt => e.value !== opt.value);
                this.filterChanged(this.selectedOptions);
            },

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

            (selected)="onSelected($event)"
            (deselected)="onDeselected($event)"*/
        });

export default FilterComponent;
