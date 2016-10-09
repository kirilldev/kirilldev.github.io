import {Class} from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import Rx  from 'rxjs/Rx';

let cache = null;

var ProblemStorageService = Class({
        constructor: [Http, function (http) {
            this.http = http;
        }],

        getAvailibleTags : function () {
            return this.http.get('db/tags.json')
                .map(r => r.json().tags);
        },

        getProblems: function() {
            return this.http.get('db/problems.json')
                .map(r => r.json().problems);
        }
    });

export default ProblemStorageService;
