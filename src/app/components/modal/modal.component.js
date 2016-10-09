import {Component} from '@angular/core'
import {ElementRef} from '@angular/core'

var ModalComponent =
        Component({
            selector: 'modal',
            templateUrl : 'src/app/components/modal/modalHtml.html',
            inputs: [
                'onClose : onClose',
                'headerText : headerText',
                'modalBody : modalBody'
            ]
        }).Class({
            constructor: [ElementRef, function(el) {
                this.el = el;
                this.onClose = null;
                this.modalBody = null;
                this.modalBodyEl = null;
                this.headerText = null;
                this.modalBodyHeight = null;
                this.resizeHandler = null;
            }],
            fixModalContentHeight() {
                this.modalBodyHeight = (this.modalBodyEl.offsetHeight - 18
                    - this.modalBodyEl.querySelector('.Modal__header').offsetHeight) + 'px';
            },
            ngOnInit() {
                this.modalBodyEl = this.el.nativeElement.children[0].children[0];
                this.resizeHandler = this.fixModalContentHeight.bind(this);
                this.closeOnEscapeHandler = (e) => {
                    if (e.keyCode == 27) {
                        this.onClose();
                    }
                };

                window.addEventListener('resize', this.resizeHandler, true);
                document.addEventListener('keyup', this.closeOnEscapeHandler, true);


                setTimeout(this.resizeHandler, 0);
            },
            ngOnDestroy() {
                window.removeEventListener('resize', this.resizeHandler, true);
                document.removeEventListener('keyup', this.closeOnEscapeHandler, true);
            }
        });

export default ModalComponent;