"use strict";
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
var common_1 = require('angular2/common');
var ICustomModal_1 = require('../models/ICustomModal');
var ModalDialogInstance_1 = require('../models/ModalDialogInstance');
/**
 * Data definition
 */
var YesNoModalContent = (function () {
    function YesNoModalContent(title, body, hideNo, yesText, noText) {
        if (title === void 0) { title = 'Hello World Title'; }
        if (body === void 0) { body = 'Hello World Body!'; }
        if (hideNo === void 0) { hideNo = false; }
        if (yesText === void 0) { yesText = 'YES'; }
        if (noText === void 0) { noText = 'NO'; }
        this.title = title;
        this.body = body;
        this.hideNo = hideNo;
        this.yesText = yesText;
        this.noText = noText;
    }
    return YesNoModalContent;
}());
exports.YesNoModalContent = YesNoModalContent;
/**
 * A 2 state bootstrap modal window, representing 2 possible answer, true/false.
 */
var YesNoModal = (function () {
    function YesNoModal(dialog, modelContentData) {
        this.dialog = dialog;
        this.context = modelContentData;
    }
    YesNoModal.prototype.ok = function ($event) {
        $event.stopPropagation();
        this.dialog.close(true);
    };
    YesNoModal.prototype.cancel = function () {
        this.dialog.dismiss();
    };
    YesNoModal = __decorate([
        core_1.Component({
            selector: 'modal-content',
            directives: [common_1.NgIf],
            /* tslint:disable */ template: "<div class=\"modal-header\">\n        <h3 class=\"modal-title\">{{context.title}}</h3>\n        </div>\n        <div class=\"modal-body\">{{context.body}}</div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary\" (click)=\"ok($event)\">{{context.yesText}}</button>\n            <button *ngIf=\"!context.hideNo\" class=\"btn btn-warning\" (click)=\"cancel()\">{{context.noText}}</button>\n        </div>"
        }), 
        __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance, ICustomModal_1.ICustomModal])
    ], YesNoModal);
    return YesNoModal;
}());
exports.YesNoModal = YesNoModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVzTm9Nb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInllc05vTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1RCxlQUFlLENBQUMsQ0FBQTtBQUN2RSx1QkFBbUIsaUJBQWlCLENBQUMsQ0FBQTtBQUdyQyw2QkFBa0Qsd0JBQXdCLENBQUMsQ0FBQTtBQUMzRSxvQ0FBa0MsK0JBQStCLENBQUMsQ0FBQTtBQUVsRTs7R0FFRztBQUNIO0lBQ0ksMkJBQ1csS0FBbUMsRUFDbkMsSUFBa0MsRUFDbEMsTUFBdUIsRUFDdkIsT0FBdUIsRUFDdkIsTUFBcUI7UUFKNUIscUJBQTBDLEdBQTFDLDJCQUEwQztRQUMxQyxvQkFBeUMsR0FBekMsMEJBQXlDO1FBQ3pDLHNCQUE4QixHQUE5QixjQUE4QjtRQUM5Qix1QkFBOEIsR0FBOUIsZUFBOEI7UUFDOUIsc0JBQTRCLEdBQTVCLGFBQTRCO1FBSnJCLFVBQUssR0FBTCxLQUFLLENBQThCO1FBQ25DLFNBQUksR0FBSixJQUFJLENBQThCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFDN0IsQ0FBQztJQUNSLHdCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSx5QkFBaUIsb0JBUTdCLENBQUE7QUFFRDs7R0FFRztBQWNIO0lBSUksb0JBQVksTUFBMkIsRUFBRSxnQkFBOEI7UUFDbkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBc0IsZ0JBQWdCLENBQUM7SUFDdkQsQ0FBQztJQUVELHVCQUFFLEdBQUYsVUFBRyxNQUFNO1FBQ0wsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBN0JMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFVBQVUsRUFBRSxDQUFFLGFBQUksQ0FBRTtZQUNwQixvQkFBb0IsQ0FBQyxRQUFRLEVBQzdCLHFiQU9XO1NBQ2QsQ0FBQzs7a0JBQUE7SUFrQkYsaUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLGtCQUFVLGFBaUJ0QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIHByb3ZpZGUsIEVsZW1lbnRSZWYsIEluamVjdG9yfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtOZ0lmfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5cclxuXHJcbmltcG9ydCB7SUN1c3RvbU1vZGFsLCBJQ3VzdG9tTW9kYWxDb21wb25lbnR9IGZyb20gJy4uL21vZGVscy9JQ3VzdG9tTW9kYWwnO1xyXG5pbXBvcnQge01vZGFsRGlhbG9nSW5zdGFuY2V9IGZyb20gJy4uL21vZGVscy9Nb2RhbERpYWxvZ0luc3RhbmNlJztcclxuXHJcbi8qKlxyXG4gKiBEYXRhIGRlZmluaXRpb25cclxuICovXHJcbmV4cG9ydCBjbGFzcyBZZXNOb01vZGFsQ29udGVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9ICdIZWxsbyBXb3JsZCBUaXRsZScsXHJcbiAgICAgICAgcHVibGljIGJvZHk6IHN0cmluZyA9ICdIZWxsbyBXb3JsZCBCb2R5IScsXHJcbiAgICAgICAgcHVibGljIGhpZGVObzogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIHB1YmxpYyB5ZXNUZXh0OiBzdHJpbmcgPSAnWUVTJyxcclxuICAgICAgICBwdWJsaWMgbm9UZXh0OiBzdHJpbmcgPSAnTk8nXHJcbiAgICApIHt9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIDIgc3RhdGUgYm9vdHN0cmFwIG1vZGFsIHdpbmRvdywgcmVwcmVzZW50aW5nIDIgcG9zc2libGUgYW5zd2VyLCB0cnVlL2ZhbHNlLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21vZGFsLWNvbnRlbnQnLFxyXG4gICAgZGlyZWN0aXZlczogWyBOZ0lmIF0sXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqLyB0ZW1wbGF0ZTpcclxuICAgIGA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e2NvbnRleHQudGl0bGV9fTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj57e2NvbnRleHQuYm9keX19PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cIm9rKCRldmVudClcIj57e2NvbnRleHQueWVzVGV4dH19PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhY29udGV4dC5oaWRlTm9cIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiIChjbGljayk9XCJjYW5jZWwoKVwiPnt7Y29udGV4dC5ub1RleHR9fTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFllc05vTW9kYWwgaW1wbGVtZW50cyBJQ3VzdG9tTW9kYWxDb21wb25lbnQge1xyXG4gICAgZGlhbG9nOiBNb2RhbERpYWxvZ0luc3RhbmNlO1xyXG4gICAgY29udGV4dDogWWVzTm9Nb2RhbENvbnRlbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGlhbG9nOiBNb2RhbERpYWxvZ0luc3RhbmNlLCBtb2RlbENvbnRlbnREYXRhOiBJQ3VzdG9tTW9kYWwpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZyA9IGRpYWxvZztcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSA8WWVzTm9Nb2RhbENvbnRlbnQ+bW9kZWxDb250ZW50RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBvaygkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2UodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLmRpc21pc3MoKTtcclxuICAgIH1cclxufVxyXG4iXX0=