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
})();
exports.ModalDialogInstance = ModalDialogInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxEaWFsb2dJbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vZGFsRGlhbG9nSW5zdGFuY2UudHMiXSwibmFtZXMiOlsiTW9kYWxEaWFsb2dJbnN0YW5jZSIsIk1vZGFsRGlhbG9nSW5zdGFuY2UuY29uc3RydWN0b3IiLCJNb2RhbERpYWxvZ0luc3RhbmNlLmJhY2tkcm9wUmVmIiwiTW9kYWxEaWFsb2dJbnN0YW5jZS5ib290c3RyYXBSZWYiLCJNb2RhbERpYWxvZ0luc3RhbmNlLnJlc3VsdCIsIk1vZGFsRGlhbG9nSW5zdGFuY2UuY2xvc2UiLCJNb2RhbERpYWxvZ0luc3RhbmNlLmRpc21pc3MiLCJNb2RhbERpYWxvZ0luc3RhbmNlLmRpc3Bvc2UiXSwibWFwcGluZ3MiOiJBQUNBLHNCQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBSXpEOztHQUVHO0FBQ0g7SUFXSUEsNkJBQW1CQSxNQUFtQkE7UUFBbkJDLFdBQU1BLEdBQU5BLE1BQU1BLENBQWFBO1FBQ2xDQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxzQkFBY0EsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0E7SUFDckRBLENBQUNBO0lBRURELHNCQUFJQSw0Q0FBV0E7YUFBZkEsVUFBZ0JBLEtBQW1CQTtZQUMvQkUsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDOUJBLENBQUNBOzs7T0FBQUY7SUFDREEsc0JBQUlBLDZDQUFZQTthQUFoQkEsVUFBaUJBLEtBQW1CQTtZQUNoQ0csSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDL0JBLENBQUNBOzs7T0FBQUg7SUFNREEsc0JBQUlBLHVDQUFNQTtRQUpWQTs7O1dBR0dBO2FBQ0hBO1lBQ0lJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLE9BQU9BLENBQUNBO1FBQ3ZDQSxDQUFDQTs7O09BQUFKO0lBRURBOztPQUVHQTtJQUNIQSxtQ0FBS0EsR0FBTEEsVUFBTUEsTUFBa0JBO1FBQWxCSyxzQkFBa0JBLEdBQWxCQSxhQUFrQkE7UUFDcEJBLEVBQUVBLENBQUNBLENBQUVBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFFBQVFBLENBQUNBLFdBQVdBO1lBQ2pDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxXQUFXQSxFQUFFQSxLQUFLQSxJQUFLQSxDQUFDQTtZQUFDQSxNQUFNQSxDQUFDQTtRQUNqRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7UUFDZkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDeENBLENBQUNBO0lBRURMOzs7Ozs7T0FNR0E7SUFDSEEscUNBQU9BLEdBQVBBO1FBQ0lNLEVBQUVBLENBQUNBLENBQUVBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFFBQVFBLENBQUNBLGFBQWFBO1lBQ3ZDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxhQUFhQSxFQUFFQSxLQUFLQSxJQUFLQSxDQUFDQTtZQUFDQSxNQUFNQSxDQUFDQTtRQUMvREEsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7UUFDZkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7SUFDakNBLENBQUNBO0lBRU9OLHFDQUFPQSxHQUFmQTtRQUNJTyxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtRQUM3QkEsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7UUFDNUJBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO0lBQzlCQSxDQUFDQTtJQUNMUCwwQkFBQ0E7QUFBREEsQ0FBQ0EsQUEzREQsSUEyREM7QUEzRFksMkJBQW1CLHNCQTJEL0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1Byb21pc2VXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcclxuXHJcbmltcG9ydCB7TW9kYWxDb25maWd9IGZyb20gJy4uL21vZGVscy9Nb2RhbENvbmZpZyc7XHJcblxyXG4vKipcclxuICogQVBJIHRvIGFuIG9wZW4gbW9kYWwgd2luZG93LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1vZGFsRGlhbG9nSW5zdGFuY2Uge1xyXG4gICAgY29udGVudFJlZjogQ29tcG9uZW50UmVmO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdGF0ZXMgaWYgdGhlIG1vZGFsIGlzIGluc2lkZSBhIHNwZWNpZmljIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbkVsZW1lbnQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfYm9vdHN0cmFwUmVmOiBDb21wb25lbnRSZWY7XHJcbiAgICBwcml2YXRlIF9iYWNrZHJvcFJlZjogQ29tcG9uZW50UmVmO1xyXG4gICAgcHJpdmF0ZSBfcmVzdWx0RGVmZXJlZDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IE1vZGFsQ29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5fcmVzdWx0RGVmZXJlZCA9IFByb21pc2VXcmFwcGVyLmNvbXBsZXRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBiYWNrZHJvcFJlZih2YWx1ZTogQ29tcG9uZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5fYmFja2Ryb3BSZWYgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHNldCBib290c3RyYXBSZWYodmFsdWU6IENvbXBvbmVudFJlZikge1xyXG4gICAgICAgIHRoaXMuX2Jvb3RzdHJhcFJlZiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBQcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgb24gYSBjbG9zZSBldmVudCBhbmQgcmVqZWN0ZWQgb24gYSBkaXNtaXNzIGV2ZW50LlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8VD58YW55fCp8UHJvbWlzZTxhbnk+fVxyXG4gICAgICovXHJcbiAgICBnZXQgcmVzdWx0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3VsdERlZmVyZWQucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBDbG9zZSB0aGUgbW9kYWwgd2l0aCBhIHJldHVybiB2YWx1ZSwgaS5lOiByZXN1bHQuXHJcbiAgICAgKi9cclxuICAgIGNsb3NlKHJlc3VsdDogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGlmICggdGhpcy5jb250ZW50UmVmLmluc3RhbmNlLmJlZm9yZUNsb3NlICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRSZWYuaW5zdGFuY2UuYmVmb3JlQ2xvc2UoKSA9PT0gdHJ1ZSApIHJldHVybjtcclxuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLl9yZXN1bHREZWZlcmVkLnJlc29sdmUocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBDbG9zZSB0aGUgbW9kYWwgd2l0aG91dCBhIHJldHVybiB2YWx1ZSwgaS5lOiBjYW5jZWxsZWQuXHJcbiAgICAgKiAgVGhpcyBjYWxsIGlzIGF1dG9tYXRpY2FsbHkgaW52b2tlZCB3aGVuIGEgdXNlciBlaXRoZXI6XHJcbiAgICAgKiAgLSBQcmVzc2VzIGFuIGV4aXQga2V5Ym9hcmQga2V5IChpZiBjb25maWd1cmVkKS5cclxuICAgICAqICAtIENsaWNrcyBvdXRzaWRlIG9mIHRoZSBtb2RhbCB3aW5kb3cgKGlmIGNvbmZpZ3VyZWQpLlxyXG4gICAgICogIFVzdWFsbHksIGRpc21pc3MgcmVwcmVzZW50IGEgQ2FuY2VsIGJ1dHRvbiBvciBhIFggYnV0dG9uLlxyXG4gICAgICovXHJcbiAgICBkaXNtaXNzKCkge1xyXG4gICAgICAgIGlmICggdGhpcy5jb250ZW50UmVmLmluc3RhbmNlLmJlZm9yZURpc21pc3MgJiZcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50UmVmLmluc3RhbmNlLmJlZm9yZURpc21pc3MoKSA9PT0gdHJ1ZSApIHJldHVybjtcclxuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLl9yZXN1bHREZWZlcmVkLnJlamVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9ib290c3RyYXBSZWYuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX2JhY2tkcm9wUmVmLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWYuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==