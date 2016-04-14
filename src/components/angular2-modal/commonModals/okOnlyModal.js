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
})();
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
})();
exports.OKOnlyModal = OKOnlyModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tPbmx5TW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJva09ubHlNb2RhbC50cyJdLCJuYW1lcyI6WyJPS09ubHlDb250ZW50IiwiT0tPbmx5Q29udGVudC5jb25zdHJ1Y3RvciIsIk9LT25seU1vZGFsIiwiT0tPbmx5TW9kYWwuY29uc3RydWN0b3IiLCJPS09ubHlNb2RhbC5vayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBRXZFLDZCQUFrRCx3QkFBd0IsQ0FBQyxDQUFBO0FBQzNFLG9DQUFrQywrQkFBK0IsQ0FBQyxDQUFBO0FBRWxFOztHQUVHO0FBQ0g7SUFDSUEsdUJBQ1dBLEtBQW1DQSxFQUNuQ0EsSUFBa0NBLEVBQ2xDQSxNQUFxQkE7UUFGNUJDLHFCQUEwQ0EsR0FBMUNBLDJCQUEwQ0E7UUFDMUNBLG9CQUF5Q0EsR0FBekNBLDBCQUF5Q0E7UUFDekNBLHNCQUE0QkEsR0FBNUJBLGFBQTRCQTtRQUZyQkEsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBOEJBO1FBQ25DQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUE4QkE7UUFDbENBLFdBQU1BLEdBQU5BLE1BQU1BLENBQWVBO0lBQzdCQSxDQUFDQTtJQUNSRCxvQkFBQ0E7QUFBREEsQ0FBQ0EsQUFORCxJQU1DO0FBTlkscUJBQWEsZ0JBTXpCLENBQUE7QUFFRDs7R0FFRztBQUNIO0lBZUlFLHFCQUFZQSxNQUEyQkEsRUFBRUEsZ0JBQThCQTtRQUNuRUMsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0E7UUFDckJBLElBQUlBLENBQUNBLE9BQU9BLEdBQWtCQSxnQkFBZ0JBLENBQUNBO0lBQ25EQSxDQUFDQTtJQUVERCx3QkFBRUEsR0FBRkE7UUFDSUUsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDNUJBLENBQUNBO0lBdEJMRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsZUFBZUE7WUFDekJBLFFBQVFBLEVBQ1JBLG9UQU1XQTtTQUNkQSxDQUFDQTs7b0JBYURBO0lBQURBLGtCQUFDQTtBQUFEQSxDQUFDQSxBQXZCRCxJQXVCQztBQVpZLG1CQUFXLGNBWXZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgcHJvdmlkZSwgRWxlbWVudFJlZiwgSW5qZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtJQ3VzdG9tTW9kYWwsIElDdXN0b21Nb2RhbENvbXBvbmVudH0gZnJvbSAnLi4vbW9kZWxzL0lDdXN0b21Nb2RhbCc7XHJcbmltcG9ydCB7TW9kYWxEaWFsb2dJbnN0YW5jZX0gZnJvbSAnLi4vbW9kZWxzL01vZGFsRGlhbG9nSW5zdGFuY2UnO1xyXG5cclxuLyoqXHJcbiAqIERhdGEgZGVmaW5pdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE9LT25seUNvbnRlbnQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHRpdGxlOiBzdHJpbmcgPSAnSGVsbG8gV29ybGQgVGl0bGUnLFxyXG4gICAgICAgIHB1YmxpYyBib2R5OiBzdHJpbmcgPSAnSGVsbG8gV29ybGQgQm9keSEnLFxyXG4gICAgICAgIHB1YmxpYyBva1RleHQ6IHN0cmluZyA9ICdPSydcclxuICAgICkge31cclxufVxyXG5cclxuLyoqXHJcbiAqIEEgMiBzdGF0ZSBib290c3RyYXAgbW9kYWwgd2luZG93LCByZXByZXNlbnRpbmcgMiBwb3NzaWJsZSBhbnN3ZXIsIHRydWUvZmFsc2UuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbW9kYWwtY29udGVudCcsXHJcbiAgICB0ZW1wbGF0ZTpcclxuICAgIGA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e2NvbnRleHQudGl0bGV9fTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj57e2NvbnRleHQuYm9keX19PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cIm9rKClcIj57e2NvbnRleHQub2tUZXh0fX08L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPS09ubHlNb2RhbCBpbXBsZW1lbnRzIElDdXN0b21Nb2RhbENvbXBvbmVudCB7XHJcbiAgICBkaWFsb2c6IE1vZGFsRGlhbG9nSW5zdGFuY2U7XHJcbiAgICBjb250ZXh0OiBPS09ubHlDb250ZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRpYWxvZzogTW9kYWxEaWFsb2dJbnN0YW5jZSwgbW9kZWxDb250ZW50RGF0YTogSUN1c3RvbU1vZGFsKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBkaWFsb2c7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gPE9LT25seUNvbnRlbnQ+bW9kZWxDb250ZW50RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBvaygpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZSh0cnVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=