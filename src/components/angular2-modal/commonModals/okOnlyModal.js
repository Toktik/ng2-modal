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
var ICustomModal_1 = require('../models/ICustomModal');
var ModalDialogInstance_1 = require('../models/ModalDialogInstance');
/**
 * Data definition
 */
var OKOnlyContent = (function () {
    function OKOnlyContent(title, body, okText) {
        if (title === void 0) { title = 'Hello World Title'; }
        if (body === void 0) { body = 'Hello World Body!'; }
        if (okText === void 0) { okText = 'OK'; }
        this.title = title;
        this.body = body;
        this.okText = okText;
    }
    return OKOnlyContent;
}());
exports.OKOnlyContent = OKOnlyContent;
/**
 * A 2 state bootstrap modal window, representing 2 possible answer, true/false.
 */
var OKOnlyModal = (function () {
    function OKOnlyModal(dialog, modelContentData) {
        this.dialog = dialog;
        this.context = modelContentData;
    }
    OKOnlyModal.prototype.ok = function () {
        this.dialog.close(true);
    };
    OKOnlyModal = __decorate([
        core_1.Component({
            selector: 'modal-content',
            template: "<div class=\"modal-header\">\n        <h3 class=\"modal-title\">{{context.title}}</h3>\n        </div>\n        <div class=\"modal-body\">{{context.body}}</div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary\" (click)=\"ok()\">{{context.okText}}</button>\n        </div>"
        }), 
        __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance, ICustomModal_1.ICustomModal])
    ], OKOnlyModal);
    return OKOnlyModal;
}());
exports.OKOnlyModal = OKOnlyModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tPbmx5TW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJva09ubHlNb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBRXZFLDZCQUFrRCx3QkFBd0IsQ0FBQyxDQUFBO0FBQzNFLG9DQUFrQywrQkFBK0IsQ0FBQyxDQUFBO0FBRWxFOztHQUVHO0FBQ0g7SUFDSSx1QkFDVyxLQUFtQyxFQUNuQyxJQUFrQyxFQUNsQyxNQUFxQjtRQUY1QixxQkFBMEMsR0FBMUMsMkJBQTBDO1FBQzFDLG9CQUF5QyxHQUF6QywwQkFBeUM7UUFDekMsc0JBQTRCLEdBQTVCLGFBQTRCO1FBRnJCLFVBQUssR0FBTCxLQUFLLENBQThCO1FBQ25DLFNBQUksR0FBSixJQUFJLENBQThCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQWU7SUFDN0IsQ0FBQztJQUNSLG9CQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxxQkFBYSxnQkFNekIsQ0FBQTtBQUVEOztHQUVHO0FBWUg7SUFJSSxxQkFBWSxNQUEyQixFQUFFLGdCQUE4QjtRQUNuRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFrQixnQkFBZ0IsQ0FBQztJQUNuRCxDQUFDO0lBRUQsd0JBQUUsR0FBRjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUF0Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUNSLG9UQU1XO1NBQ2QsQ0FBQzs7bUJBQUE7SUFhRixrQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksbUJBQVcsY0FZdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBwcm92aWRlLCBFbGVtZW50UmVmLCBJbmplY3Rvcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge0lDdXN0b21Nb2RhbCwgSUN1c3RvbU1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi9tb2RlbHMvSUN1c3RvbU1vZGFsJztcclxuaW1wb3J0IHtNb2RhbERpYWxvZ0luc3RhbmNlfSBmcm9tICcuLi9tb2RlbHMvTW9kYWxEaWFsb2dJbnN0YW5jZSc7XHJcblxyXG4vKipcclxuICogRGF0YSBkZWZpbml0aW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgT0tPbmx5Q29udGVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9ICdIZWxsbyBXb3JsZCBUaXRsZScsXHJcbiAgICAgICAgcHVibGljIGJvZHk6IHN0cmluZyA9ICdIZWxsbyBXb3JsZCBCb2R5IScsXHJcbiAgICAgICAgcHVibGljIG9rVGV4dDogc3RyaW5nID0gJ09LJ1xyXG4gICAgKSB7fVxyXG59XHJcblxyXG4vKipcclxuICogQSAyIHN0YXRlIGJvb3RzdHJhcCBtb2RhbCB3aW5kb3csIHJlcHJlc2VudGluZyAyIHBvc3NpYmxlIGFuc3dlciwgdHJ1ZS9mYWxzZS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtb2RhbC1jb250ZW50JyxcclxuICAgIHRlbXBsYXRlOlxyXG4gICAgYDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7Y29udGV4dC50aXRsZX19PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPnt7Y29udGV4dC5ib2R5fX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib2soKVwiPnt7Y29udGV4dC5va1RleHR9fTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIE9LT25seU1vZGFsIGltcGxlbWVudHMgSUN1c3RvbU1vZGFsQ29tcG9uZW50IHtcclxuICAgIGRpYWxvZzogTW9kYWxEaWFsb2dJbnN0YW5jZTtcclxuICAgIGNvbnRleHQ6IE9LT25seUNvbnRlbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGlhbG9nOiBNb2RhbERpYWxvZ0luc3RhbmNlLCBtb2RlbENvbnRlbnREYXRhOiBJQ3VzdG9tTW9kYWwpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZyA9IGRpYWxvZztcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSA8T0tPbmx5Q29udGVudD5tb2RlbENvbnRlbnREYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIG9rKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlKHRydWUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==