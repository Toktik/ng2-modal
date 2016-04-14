var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var ModalDialogInstance_1 = require('../models/ModalDialogInstance');
/**
 * A component that acts as a top level container for an open modal window.
 */
var BootstrapModalContainer = (function () {
    function BootstrapModalContainer(dialogInstance) {
        this.dialogInstance = dialogInstance;
        if (!dialogInstance.inElement) {
            this.position = null;
        }
        else {
            this.position = 'absolute';
        }
    }
    BootstrapModalContainer.prototype.onContainerClick = function ($event) {
        $event.stopPropagation();
    };
    BootstrapModalContainer.prototype.onClick = function () {
        return !this.dialogInstance.config.isBlocking && this.dialogInstance.dismiss();
    };
    BootstrapModalContainer.prototype.documentKeypress = function (event) {
        if (this.dialogInstance.config.keyboard &&
            this.dialogInstance.config.keyboard.indexOf(event.keyCode) > -1) {
            this.dialogInstance.dismiss();
        }
    };
    BootstrapModalContainer = __decorate([
        core_1.Component({
            selector: 'bootstrap-modal',
            host: {
                'tabindex': '0',
                'role': 'dialog',
                'class': 'in modal',
                'style': 'display: block',
                '[style.position]': 'position',
                '(body:keydown)': 'documentKeypress($event)',
                '(click)': 'onClick()'
            },
            /* tslint:disable */
            template: "<div class=\"modal-dialog\"\n         [class]=\"{'modal-' + dialogInstance.config.size: true}\">\n         <div class=\"modal-content\" (click)=\"onContainerClick($event)\" style=\"display: block\">\n            <div style=\"display: none\" #modalDialog></div>\n         </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance])
    ], BootstrapModalContainer);
    return BootstrapModalContainer;
})();
exports.BootstrapModalContainer = BootstrapModalContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwTW9kYWxDb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib290c3RyYXBNb2RhbENvbnRhaW5lci50cyJdLCJuYW1lcyI6WyJCb290c3RyYXBNb2RhbENvbnRhaW5lciIsIkJvb3RzdHJhcE1vZGFsQ29udGFpbmVyLmNvbnN0cnVjdG9yIiwiQm9vdHN0cmFwTW9kYWxDb250YWluZXIub25Db250YWluZXJDbGljayIsIkJvb3RzdHJhcE1vZGFsQ29udGFpbmVyLm9uQ2xpY2siLCJCb290c3RyYXBNb2RhbENvbnRhaW5lci5kb2N1bWVudEtleXByZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFFMUMsb0NBQWtDLCtCQUErQixDQUFDLENBQUE7QUFFbEU7O0dBRUc7QUFDSDtJQTRCSUEsaUNBQVlBLGNBQW1DQTtRQUMzQ0MsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsY0FBY0EsQ0FBQ0E7UUFFckNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1lBQzVCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUN6QkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDSkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsVUFBVUEsQ0FBQ0E7UUFDL0JBLENBQUNBO0lBQ0xBLENBQUNBO0lBRURELGtEQUFnQkEsR0FBaEJBLFVBQWlCQSxNQUFNQTtRQUNuQkUsTUFBTUEsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7SUFDN0JBLENBQUNBO0lBRURGLHlDQUFPQSxHQUFQQTtRQUNJRyxNQUFNQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFVQSxJQUFJQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtJQUNuRkEsQ0FBQ0E7SUFFREgsa0RBQWdCQSxHQUFoQkEsVUFBaUJBLEtBQW9CQTtRQUNqQ0ksRUFBRUEsQ0FBQ0EsQ0FBRUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUE7WUFDcEJBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLE1BQU1BLENBQUNBLFFBQVNBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ25GQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtRQUNsQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFuRExKO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxpQkFBaUJBO1lBQzNCQSxJQUFJQSxFQUFFQTtnQkFDRkEsVUFBVUEsRUFBRUEsR0FBR0E7Z0JBQ2ZBLE1BQU1BLEVBQUVBLFFBQVFBO2dCQUNoQkEsT0FBT0EsRUFBRUEsVUFBVUE7Z0JBQ25CQSxPQUFPQSxFQUFFQSxnQkFBZ0JBO2dCQUN6QkEsa0JBQWtCQSxFQUFFQSxVQUFVQTtnQkFDOUJBLGdCQUFnQkEsRUFBRUEsMEJBQTBCQTtnQkFDNUNBLFNBQVNBLEVBQUVBLFdBQVdBO2FBQ3pCQTtZQUNEQSxvQkFBb0JBO1lBQ3BCQSxRQUFRQSxFQUNSQSxtU0FLT0E7U0FLVkEsQ0FBQ0E7O2dDQTZCREE7SUFBREEsOEJBQUNBO0FBQURBLENBQUNBLEFBcERELElBb0RDO0FBNUJZLCtCQUF1QiwwQkE0Qm5DLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbmltcG9ydCB7TW9kYWxEaWFsb2dJbnN0YW5jZX0gZnJvbSAnLi4vbW9kZWxzL01vZGFsRGlhbG9nSW5zdGFuY2UnO1xyXG5cclxuLyoqXHJcbiAqIEEgY29tcG9uZW50IHRoYXQgYWN0cyBhcyBhIHRvcCBsZXZlbCBjb250YWluZXIgZm9yIGFuIG9wZW4gbW9kYWwgd2luZG93LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Jvb3RzdHJhcC1tb2RhbCcsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ3RhYmluZGV4JzogJzAnLFxyXG4gICAgICAgICdyb2xlJzogJ2RpYWxvZycsXHJcbiAgICAgICAgJ2NsYXNzJzogJ2luIG1vZGFsJyxcclxuICAgICAgICAnc3R5bGUnOiAnZGlzcGxheTogYmxvY2snLFxyXG4gICAgICAgICdbc3R5bGUucG9zaXRpb25dJzogJ3Bvc2l0aW9uJyxcclxuICAgICAgICAnKGJvZHk6a2V5ZG93biknOiAnZG9jdW1lbnRLZXlwcmVzcygkZXZlbnQpJyxcclxuICAgICAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCknXHJcbiAgICB9LFxyXG4gICAgLyogdHNsaW50OmRpc2FibGUgKi9cclxuICAgIHRlbXBsYXRlOlxyXG4gICAgYDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIlxyXG4gICAgICAgICBbY2xhc3NdPVwieydtb2RhbC0nICsgZGlhbG9nSW5zdGFuY2UuY29uZmlnLnNpemU6IHRydWV9XCI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCIgKGNsaWNrKT1cIm9uQ29udGFpbmVyQ2xpY2soJGV2ZW50KVwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2tcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIiAjbW9kYWxEaWFsb2c+PC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YFxyXG4gICAgLy9UT0RPOiAjbW9kYWxEaWFsb2cgZWxlbWVudCBpcyBub3QgbmVlZGVkIGJ1dCBkeW5hbWljQ29tcG9uZW50TG9hZGVyIGRvZXNuJ3Qgc2VlbSB0byBoYXZlIGJlaGF2aW9yIHRvIGluamVjdCBhIGNvbXBvbmVudCB0aGUgd2F5IHdlIHdhbnQuXHJcbiAgICAvLyAgICAgIFdlIG5lZWQgdG8gcmVwbGFjZSB0aGUgI21vZGFsRGlhbG9nIGVsZW1lbnQgYnV0IHRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9ubHkgYWRkcyBpdCBhcyBhIHNpYmxpbmcuXHJcbiAgICAvLyAgICAgIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy82MDcxXHJcbiAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBNb2RhbENvbnRhaW5lciB7XHJcbiAgICBkaWFsb2dJbnN0YW5jZTogTW9kYWxEaWFsb2dJbnN0YW5jZTtcclxuICAgIHB1YmxpYyBwb3NpdGlvbjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRpYWxvZ0luc3RhbmNlOiBNb2RhbERpYWxvZ0luc3RhbmNlKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dJbnN0YW5jZSA9IGRpYWxvZ0luc3RhbmNlO1xyXG5cclxuICAgICAgICBpZiAoIWRpYWxvZ0luc3RhbmNlLmluRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Db250YWluZXJDbGljaygkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljaygpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuZGlhbG9nSW5zdGFuY2UuY29uZmlnLmlzQmxvY2tpbmcgJiYgdGhpcy5kaWFsb2dJbnN0YW5jZS5kaXNtaXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnRLZXlwcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmICggdGhpcy5kaWFsb2dJbnN0YW5jZS5jb25maWcua2V5Ym9hcmQgJiZcclxuICAgICAgICAgICAgKDxBcnJheTxudW1iZXI+PnRoaXMuZGlhbG9nSW5zdGFuY2UuY29uZmlnLmtleWJvYXJkKS5pbmRleE9mKGV2ZW50LmtleUNvZGUpID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2dJbnN0YW5jZS5kaXNtaXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==