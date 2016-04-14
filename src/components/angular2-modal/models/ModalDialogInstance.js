"use strict";
var async_1 = require('angular2/src/facade/async');
/**
 * API to an open modal window.
 */
var ModalDialogInstance = (function () {
    function ModalDialogInstance(config) {
        this.config = config;
        this._resultDefered = async_1.PromiseWrapper.completer();
    }
    Object.defineProperty(ModalDialogInstance.prototype, "backdropRef", {
        set: function (value) {
            this._backdropRef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDialogInstance.prototype, "bootstrapRef", {
        set: function (value) {
            this._bootstrapRef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDialogInstance.prototype, "result", {
        /**
         * A Promise that is resolved on a close event and rejected on a dismiss event.
         * @returns {Promise<T>|any|*|Promise<any>}
         */
        get: function () {
            return this._resultDefered.promise;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  Close the modal with a return value, i.e: result.
     */
    ModalDialogInstance.prototype.close = function (result) {
        if (result === void 0) { result = null; }
        if (this.contentRef.instance.beforeClose &&
            this.contentRef.instance.beforeClose() === true)
            return;
        this.dispose();
        this._resultDefered.resolve(result);
    };
    /**
     *  Close the modal without a return value, i.e: cancelled.
     *  This call is automatically invoked when a user either:
     *  - Presses an exit keyboard key (if configured).
     *  - Clicks outside of the modal window (if configured).
     *  Usually, dismiss represent a Cancel button or a X button.
     */
    ModalDialogInstance.prototype.dismiss = function () {
        if (this.contentRef.instance.beforeDismiss &&
            this.contentRef.instance.beforeDismiss() === true)
            return;
        this.dispose();
        this._resultDefered.reject();
    };
    ModalDialogInstance.prototype.dispose = function () {
        this._bootstrapRef.dispose();
        this._backdropRef.dispose();
        this.contentRef.dispose();
    };
    return ModalDialogInstance;
}());
exports.ModalDialogInstance = ModalDialogInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxEaWFsb2dJbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vZGFsRGlhbG9nSW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHNCQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBSXpEOztHQUVHO0FBQ0g7SUFXSSw2QkFBbUIsTUFBbUI7UUFBbkIsV0FBTSxHQUFOLE1BQU0sQ0FBYTtRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLHNCQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELHNCQUFJLDRDQUFXO2FBQWYsVUFBZ0IsS0FBbUI7WUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSw2Q0FBWTthQUFoQixVQUFpQixLQUFtQjtZQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLHVDQUFNO1FBSlY7OztXQUdHO2FBQ0g7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFFRDs7T0FFRztJQUNILG1DQUFLLEdBQUwsVUFBTSxNQUFrQjtRQUFsQixzQkFBa0IsR0FBbEIsYUFBa0I7UUFDcEIsRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsV0FBVztZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFLLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDakUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHFDQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLElBQUssQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUMvRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTyxxQ0FBTyxHQUFmO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQztBQTNEWSwyQkFBbUIsc0JBMkQvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7UHJvbWlzZVdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xyXG5cclxuaW1wb3J0IHtNb2RhbENvbmZpZ30gZnJvbSAnLi4vbW9kZWxzL01vZGFsQ29uZmlnJztcclxuXHJcbi8qKlxyXG4gKiBBUEkgdG8gYW4gb3BlbiBtb2RhbCB3aW5kb3cuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTW9kYWxEaWFsb2dJbnN0YW5jZSB7XHJcbiAgICBjb250ZW50UmVmOiBDb21wb25lbnRSZWY7XHJcbiAgICAvKipcclxuICAgICAqIFN0YXRlcyBpZiB0aGUgbW9kYWwgaXMgaW5zaWRlIGEgc3BlY2lmaWMgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluRWxlbWVudDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIF9ib290c3RyYXBSZWY6IENvbXBvbmVudFJlZjtcclxuICAgIHByaXZhdGUgX2JhY2tkcm9wUmVmOiBDb21wb25lbnRSZWY7XHJcbiAgICBwcml2YXRlIF9yZXN1bHREZWZlcmVkOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogTW9kYWxDb25maWcpIHtcclxuICAgICAgICB0aGlzLl9yZXN1bHREZWZlcmVkID0gUHJvbWlzZVdyYXBwZXIuY29tcGxldGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGJhY2tkcm9wUmVmKHZhbHVlOiBDb21wb25lbnRSZWYpIHtcclxuICAgICAgICB0aGlzLl9iYWNrZHJvcFJlZiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0IGJvb3RzdHJhcFJlZih2YWx1ZTogQ29tcG9uZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5fYm9vdHN0cmFwUmVmID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIFByb21pc2UgdGhhdCBpcyByZXNvbHZlZCBvbiBhIGNsb3NlIGV2ZW50IGFuZCByZWplY3RlZCBvbiBhIGRpc21pc3MgZXZlbnQuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUPnxhbnl8KnxQcm9taXNlPGFueT59XHJcbiAgICAgKi9cclxuICAgIGdldCByZXN1bHQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVzdWx0RGVmZXJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIENsb3NlIHRoZSBtb2RhbCB3aXRoIGEgcmV0dXJuIHZhbHVlLCBpLmU6IHJlc3VsdC5cclxuICAgICAqL1xyXG4gICAgY2xvc2UocmVzdWx0OiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCB0aGlzLmNvbnRlbnRSZWYuaW5zdGFuY2UuYmVmb3JlQ2xvc2UgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFJlZi5pbnN0YW5jZS5iZWZvcmVDbG9zZSgpID09PSB0cnVlICkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX3Jlc3VsdERlZmVyZWQucmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIENsb3NlIHRoZSBtb2RhbCB3aXRob3V0IGEgcmV0dXJuIHZhbHVlLCBpLmU6IGNhbmNlbGxlZC5cclxuICAgICAqICBUaGlzIGNhbGwgaXMgYXV0b21hdGljYWxseSBpbnZva2VkIHdoZW4gYSB1c2VyIGVpdGhlcjpcclxuICAgICAqICAtIFByZXNzZXMgYW4gZXhpdCBrZXlib2FyZCBrZXkgKGlmIGNvbmZpZ3VyZWQpLlxyXG4gICAgICogIC0gQ2xpY2tzIG91dHNpZGUgb2YgdGhlIG1vZGFsIHdpbmRvdyAoaWYgY29uZmlndXJlZCkuXHJcbiAgICAgKiAgVXN1YWxseSwgZGlzbWlzcyByZXByZXNlbnQgYSBDYW5jZWwgYnV0dG9uIG9yIGEgWCBidXR0b24uXHJcbiAgICAgKi9cclxuICAgIGRpc21pc3MoKSB7XHJcbiAgICAgICAgaWYgKCB0aGlzLmNvbnRlbnRSZWYuaW5zdGFuY2UuYmVmb3JlRGlzbWlzcyAmJlxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRSZWYuaW5zdGFuY2UuYmVmb3JlRGlzbWlzcygpID09PSB0cnVlICkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX3Jlc3VsdERlZmVyZWQucmVqZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX2Jvb3RzdHJhcFJlZi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fYmFja2Ryb3BSZWYuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuY29udGVudFJlZi5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19