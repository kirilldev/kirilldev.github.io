import {Component} from '@angular/core'

var SwitcherComponent =
        Component({
            selector: 'switcher',
            template: '<div class="Switcher">' +
						'<span>' +
							'<span class="Switcher__btn">Newest▲</span>' +
							'<span class="Switcher__btn">Name▼</span>' +
						'</span>' +
					'</div>',
            inputs: [
                'problem : problem'
            ]
        }).Class({
            constructor: function() {
                this.problem = null;
            }
        });

export default SwitcherComponent;
