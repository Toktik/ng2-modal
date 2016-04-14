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
var ModalDialogInstance_1 = require('../models/ModalDialogInstance');
/**
 * Represents the modal backdrop.
 */
var ModalBackdrop = (function () {
    function ModalBackdrop(dialog) {
        if (!dialog.inElement) {
            this.position = this.width = this.height = null;
            this.top = this.left = this.right = this.bottom = null;
        }
        else {
            this.position = 'absolute';
            this.height = '100%';
            this.width = '100%';
            this.top = this.left = this.right = this.bottom = '0';
        }
    }
    ModalBackdrop = __decorate([
        core_1.Component({
            selector: 'modal-backdrop',
            host: {
                '[style.position]': 'position',
                '[style.height]': 'height',
                '[style.width]': 'width',
                '[style.top]': 'top',
                '[style.left]': 'left',
                '[style.right]': 'right',
                '[style.bottom]': 'bottom'
            },
            template: '<div [style.position]="position" class="in modal-backdrop" #modalBackdrop></div>'
        }), 
        __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance])
    ], ModalBackdrop);
    return ModalBackdrop;
}());
exports.ModalBackdrop = ModalBackdrop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxCYWNrZHJvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGFsQmFja2Ryb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxvQ0FBa0MsK0JBQStCLENBQUMsQ0FBQTtBQUdsRTs7R0FFRztBQWVIO0lBVUksdUJBQVksTUFBMkI7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDaEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDM0QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDMUQsQ0FBQztJQUNMLENBQUM7SUFsQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixJQUFJLEVBQUU7Z0JBQ0Ysa0JBQWtCLEVBQUUsVUFBVTtnQkFDOUIsZ0JBQWdCLEVBQUUsUUFBUTtnQkFDMUIsZUFBZSxFQUFFLE9BQU87Z0JBQ3hCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixjQUFjLEVBQUUsTUFBTTtnQkFDdEIsZUFBZSxFQUFFLE9BQU87Z0JBQ3hCLGdCQUFnQixFQUFFLFFBQVE7YUFFN0I7WUFDRCxRQUFRLEVBQUUsa0ZBQWtGO1NBQy9GLENBQUM7O3FCQUFBO0lBc0JGLG9CQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSxxQkFBYSxnQkFxQnpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtNb2RhbERpYWxvZ0luc3RhbmNlfSBmcm9tICcuLi9tb2RlbHMvTW9kYWxEaWFsb2dJbnN0YW5jZSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgdGhlIG1vZGFsIGJhY2tkcm9wLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21vZGFsLWJhY2tkcm9wJyxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW3N0eWxlLnBvc2l0aW9uXSc6ICdwb3NpdGlvbicsXHJcbiAgICAgICAgJ1tzdHlsZS5oZWlnaHRdJzogJ2hlaWdodCcsXHJcbiAgICAgICAgJ1tzdHlsZS53aWR0aF0nOiAnd2lkdGgnLFxyXG4gICAgICAgICdbc3R5bGUudG9wXSc6ICd0b3AnLFxyXG4gICAgICAgICdbc3R5bGUubGVmdF0nOiAnbGVmdCcsXHJcbiAgICAgICAgJ1tzdHlsZS5yaWdodF0nOiAncmlnaHQnLFxyXG4gICAgICAgICdbc3R5bGUuYm90dG9tXSc6ICdib3R0b20nXHJcblxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiAnPGRpdiBbc3R5bGUucG9zaXRpb25dPVwicG9zaXRpb25cIiBjbGFzcz1cImluIG1vZGFsLWJhY2tkcm9wXCIgI21vZGFsQmFja2Ryb3A+PC9kaXY+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxCYWNrZHJvcCB7XHJcbiAgICBwdWJsaWMgcG9zaXRpb246IHN0cmluZztcclxuICAgIHB1YmxpYyBoZWlnaHQ6IHN0cmluZztcclxuICAgIHB1YmxpYyB3aWR0aDogc3RyaW5nO1xyXG4gICAgcHVibGljIHRvcDogc3RyaW5nO1xyXG4gICAgcHVibGljIGxlZnQ6IHN0cmluZztcclxuICAgIHB1YmxpYyByaWdodDogc3RyaW5nO1xyXG4gICAgcHVibGljIGJvdHRvbTogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkaWFsb2c6IE1vZGFsRGlhbG9nSW5zdGFuY2UpIHtcclxuICAgICAgICBpZiAoIWRpYWxvZy5pbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMud2lkdGggPSB0aGlzLmhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy5sZWZ0ID0gdGhpcy5yaWdodCA9IHRoaXMuYm90dG9tID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy5sZWZ0ID0gdGhpcy5yaWdodCA9IHRoaXMuYm90dG9tID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=