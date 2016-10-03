import {Component} from '@angular/core'

var ProblemComponent =
        Component({
            selector: 'problem',
            template: '<div class="Problem">' +
                         '<h3 class="clickable" title="click to see the solution" (click)="showSolution()">{{problem.title}}</h3>' +
                         '<p [innerHTML]="problem.description"></p>' +
                      '</div>',
            inputs: [
                'problem : problem'
            ]
        }).Class({
            constructor: function() {
                this.problem = null;
            },

            showSolution : function () {
                window.open('https://github.com/kirilldev/kirilldev.github.io/blob/master/db/solutions/js/move-zeroes.js', '_blank');
            }
        });

export default ProblemComponent;