import {Class} from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { Observable } from 'rxjs/Rx';

var ProblemStorageService = Class({
        constructor: [Http, function (http) {
            this.http = http;

        }],

        getProblems: function() {
            return this.http.get('db/problems.json')
                .map(r => r.json().problems);
        }
    });

export default ProblemStorageService;
