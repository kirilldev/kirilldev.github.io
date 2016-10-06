import {Component} from '@angular/core'
import SolutionLoaderService from '../../services/solutionLoader.service';

var ProblemComponent =
        Component({
            selector: 'problem',
            templateUrl: 'src/app/components/problem/problemHtml.html',
            providers: [SolutionLoaderService],
            inputs: [
                'problem : problem'
            ]
        }).Class({
            constructor: [SolutionLoaderService, function(solutionLoader) {
                this.problem = null;
                this.solutionLoader = solutionLoader;

                this.check = (e) => {
                    e.preventDefault();
                    var href = e.target.href;

                    if (href) {
                        this.showModal = '<img src="' + href +'"/>';
                    }
                };

                this.close = () => this.showModal = false;
            }],

            showSolution : function () {
                this.solutionLoader
                    .load(this.problem.solutions[0])
                    .subscribe(c => this.showModal = c);
            }
        });

export default ProblemComponent;
