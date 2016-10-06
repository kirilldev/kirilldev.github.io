import {Component} from '@angular/core'
import SwitcherComponent from './switcher/switcher.component';
import ProblemStorageService from './../../services/problemStorage.service';

var FilterComponent =
        Component({
            selector: 'filter',
            templateUrl: 'src/app/components/filter/filter.html',
			directives: [SwitcherComponent],
            providers: [ProblemStorageService],
            inputs: [
                'problem : problem'
            ]
        }).Class({
            constructor: [ProblemStorageService, function(problemStorage) {
                this.problem = null;
                this.options = [];
                problemStorage.getAvailibleTags().subscribe(o => this.options = o);
            }]

        /*    (opened)="onSelectOpened()"
            (closed)="onSelectClosed()"
            (selected)="onSelected($event)"
            (deselected)="onDeselected($event)"*/
        });

export default FilterComponent;
