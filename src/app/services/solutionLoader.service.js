import {Class} from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import Prism from 'prismjs';
import 'prismjs/components/prism-java'

const SolutionLoaderService = Class({
        constructor: [Http, function (http) {
            this.http = http;
        }],

        load: function(url) {
            const lang = url.substring(0, url.indexOf('/'));

            return this.http.get(`db/solutions/${url}`).map(r => {
                return '<pre><code>' + Prism.highlight(r.text(), Prism.languages[lang]) + '</code></pre>';
            });
        }
    });

export default SolutionLoaderService;
