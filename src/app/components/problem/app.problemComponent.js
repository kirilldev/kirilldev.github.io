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
            },

            copyToClipboard: function (id) {
                const text = `${window.location.origin}?problem=${id}`;

                if (window.clipboardData && window.clipboardData.setData) {
                    // IE specific code path to prevent textarea being shown while dialog is visible.
                    return clipboardData.setData("Text", text);

                } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                    var textarea = document.createElement("textarea");
                    textarea.textContent = text;
                    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        document.execCommand("copy");
                        // Security exception may be thrown by some browsers.
                        return alert(`Link copied! ${text}`);
                    } catch (ex) {
                        console.warn("Copy to clipboard failed.", ex);
                        return false;
                    } finally {
                        document.body.removeChild(textarea);
                    }
                }
            }
        });

export default ProblemComponent;
