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
})();
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
})();
exports.YesNoModal = YesNoModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVzTm9Nb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInllc05vTW9kYWwudHMiXSwibmFtZXMiOlsiWWVzTm9Nb2RhbENvbnRlbnQiLCJZZXNOb01vZGFsQ29udGVudC5jb25zdHJ1Y3RvciIsIlllc05vTW9kYWwiLCJZZXNOb01vZGFsLmNvbnN0cnVjdG9yIiwiWWVzTm9Nb2RhbC5vayIsIlllc05vTW9kYWwuY2FuY2VsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUsdUJBQW1CLGlCQUFpQixDQUFDLENBQUE7QUFHckMsNkJBQWtELHdCQUF3QixDQUFDLENBQUE7QUFDM0Usb0NBQWtDLCtCQUErQixDQUFDLENBQUE7QUFFbEU7O0dBRUc7QUFDSDtJQUNJQSwyQkFDV0EsS0FBbUNBLEVBQ25DQSxJQUFrQ0EsRUFDbENBLE1BQXVCQSxFQUN2QkEsT0FBdUJBLEVBQ3ZCQSxNQUFxQkE7UUFKNUJDLHFCQUEwQ0EsR0FBMUNBLDJCQUEwQ0E7UUFDMUNBLG9CQUF5Q0EsR0FBekNBLDBCQUF5Q0E7UUFDekNBLHNCQUE4QkEsR0FBOUJBLGNBQThCQTtRQUM5QkEsdUJBQThCQSxHQUE5QkEsZUFBOEJBO1FBQzlCQSxzQkFBNEJBLEdBQTVCQSxhQUE0QkE7UUFKckJBLFVBQUtBLEdBQUxBLEtBQUtBLENBQThCQTtRQUNuQ0EsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBOEJBO1FBQ2xDQSxXQUFNQSxHQUFOQSxNQUFNQSxDQUFpQkE7UUFDdkJBLFlBQU9BLEdBQVBBLE9BQU9BLENBQWdCQTtRQUN2QkEsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBZUE7SUFDN0JBLENBQUNBO0lBQ1JELHdCQUFDQTtBQUFEQSxDQUFDQSxBQVJELElBUUM7QUFSWSx5QkFBaUIsb0JBUTdCLENBQUE7QUFFRDs7R0FFRztBQUNIO0lBaUJJRSxvQkFBWUEsTUFBMkJBLEVBQUVBLGdCQUE4QkE7UUFDbkVDLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO1FBQ3JCQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFzQkEsZ0JBQWdCQSxDQUFDQTtJQUN2REEsQ0FBQ0E7SUFFREQsdUJBQUVBLEdBQUZBLFVBQUdBLE1BQU1BO1FBQ0xFLE1BQU1BLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO1FBQ3pCQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUM1QkEsQ0FBQ0E7SUFFREYsMkJBQU1BLEdBQU5BO1FBQ0lHLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO0lBQzFCQSxDQUFDQTtJQTdCTEg7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLGVBQWVBO1lBQ3pCQSxVQUFVQSxFQUFFQSxDQUFFQSxhQUFJQSxDQUFFQTtZQUNwQkEsb0JBQW9CQSxDQUFDQSxRQUFRQSxFQUM3QkEscWJBT1dBO1NBQ2RBLENBQUNBOzttQkFrQkRBO0lBQURBLGlCQUFDQTtBQUFEQSxDQUFDQSxBQTlCRCxJQThCQztBQWpCWSxrQkFBVSxhQWlCdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBwcm92aWRlLCBFbGVtZW50UmVmLCBJbmplY3Rvcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TmdJZn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuXHJcblxyXG5pbXBvcnQge0lDdXN0b21Nb2RhbCwgSUN1c3RvbU1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi9tb2RlbHMvSUN1c3RvbU1vZGFsJztcclxuaW1wb3J0IHtNb2RhbERpYWxvZ0luc3RhbmNlfSBmcm9tICcuLi9tb2RlbHMvTW9kYWxEaWFsb2dJbnN0YW5jZSc7XHJcblxyXG4vKipcclxuICogRGF0YSBkZWZpbml0aW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgWWVzTm9Nb2RhbENvbnRlbnQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHRpdGxlOiBzdHJpbmcgPSAnSGVsbG8gV29ybGQgVGl0bGUnLFxyXG4gICAgICAgIHB1YmxpYyBib2R5OiBzdHJpbmcgPSAnSGVsbG8gV29ybGQgQm9keSEnLFxyXG4gICAgICAgIHB1YmxpYyBoaWRlTm86IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBwdWJsaWMgeWVzVGV4dDogc3RyaW5nID0gJ1lFUycsXHJcbiAgICAgICAgcHVibGljIG5vVGV4dDogc3RyaW5nID0gJ05PJ1xyXG4gICAgKSB7fVxyXG59XHJcblxyXG4vKipcclxuICogQSAyIHN0YXRlIGJvb3RzdHJhcCBtb2RhbCB3aW5kb3csIHJlcHJlc2VudGluZyAyIHBvc3NpYmxlIGFuc3dlciwgdHJ1ZS9mYWxzZS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtb2RhbC1jb250ZW50JyxcclxuICAgIGRpcmVjdGl2ZXM6IFsgTmdJZiBdLFxyXG4gICAgLyogdHNsaW50OmRpc2FibGUgKi8gdGVtcGxhdGU6XHJcbiAgICBgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3tjb250ZXh0LnRpdGxlfX08L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+e3tjb250ZXh0LmJvZHl9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvaygkZXZlbnQpXCI+e3tjb250ZXh0Lnllc1RleHR9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWNvbnRleHQuaGlkZU5vXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIiAoY2xpY2spPVwiY2FuY2VsKClcIj57e2NvbnRleHQubm9UZXh0fX08L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBZZXNOb01vZGFsIGltcGxlbWVudHMgSUN1c3RvbU1vZGFsQ29tcG9uZW50IHtcclxuICAgIGRpYWxvZzogTW9kYWxEaWFsb2dJbnN0YW5jZTtcclxuICAgIGNvbnRleHQ6IFllc05vTW9kYWxDb250ZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRpYWxvZzogTW9kYWxEaWFsb2dJbnN0YW5jZSwgbW9kZWxDb250ZW50RGF0YTogSUN1c3RvbU1vZGFsKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBkaWFsb2c7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gPFllc05vTW9kYWxDb250ZW50Pm1vZGVsQ29udGVudERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgb2soJGV2ZW50KSB7XHJcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5kaXNtaXNzKCk7XHJcbiAgICB9XHJcbn1cclxuIl19