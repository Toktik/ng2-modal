var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var ModalConfig_1 = require('../models/ModalConfig');
var ModalDialogInstance_1 = require('../models/ModalDialogInstance');
var modalBackdrop_1 = require('../components/modalBackdrop');
var bootstrapModalContainer_1 = require('../components/bootstrapModalContainer');
var _config;
var Modal = (function () {
    function Modal(componentLoader, appRef, defaultConfig) {
        this.componentLoader = componentLoader;
        this.appRef = appRef;
        // The Modal class should be an application wide service (i.e: singleton).
        // This will run once in most applications...
        // If the user provides a ModalConfig instance to the DI,
        // the custom config will be the default one.
        _config = (defaultConfig) ? ModalConfig_1.ModalConfig.makeValid(defaultConfig) : new ModalConfig_1.ModalConfig();
    }
    /**
     * Opens a modal window blocking the whole screen.
     * @param componentType The angular Component to render as modal.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param config A Modal Configuration object.
     * @returns {Promise<ModalDialogInstance>}
     */
    Modal.prototype.open = function (componentType, bindings, config) {
        // TODO: appRef.injector.get(APP_COMPONENT) Doesn't work.
        // When it does replace with the hack below.
        //let myElementRef = this.appRef.injector.get(APP_COMPONENT).location;
        var elementRef = this.appRef['_rootComponents'][0].location;
        return this.openInside(componentType, elementRef, null, bindings, config);
    };
    /**
     * Opens a modal window inside an existing component.
     * @param componentType The angular Component to render as modal.
     * @param elementRef The element to block using the modal.
     * @param anchorName A template variable within the component.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param config A Modal Configuration object.
     * @returns {Promise<ModalDialogInstance>}
     */
    Modal.prototype.openInside = function (componentType, elementRef, anchorName, bindings, config) {
        var _this = this;
        config = (config) ? ModalConfig_1.ModalConfig.makeValid(config, _config) : _config;
        var dialog = new ModalDialogInstance_1.ModalDialogInstance(config);
        dialog.inElement = !!anchorName;
        var dialogBindings = core_1.Injector.resolve([core_1.provide(ModalDialogInstance_1.ModalDialogInstance, { useValue: dialog })]);
        return this.createBackdrop(elementRef, dialogBindings, anchorName)
            .then(function (backdropRef) {
            dialog.backdropRef = backdropRef;
            var modalDataBindings = core_1.Injector.resolve([core_1.provide(ModalDialogInstance_1.ModalDialogInstance, { useValue: dialog })]).concat(bindings);
            return _this.componentLoader.loadIntoLocation(bootstrapModalContainer_1.BootstrapModalContainer, backdropRef.location, 'modalBackdrop', dialogBindings)
                .then(function (bootstrapRef) {
                dialog.bootstrapRef = bootstrapRef;
                return _this.componentLoader.loadIntoLocation(componentType, bootstrapRef.location, 'modalDialog', modalDataBindings)
                    .then(function (contentRef) {
                    dialog.contentRef = contentRef;
                    return dialog;
                });
            });
        });
    };
    /**
     * Creates backdrop element.
     * @param {ElementRef} The element to block using the modal.
     * @param {ResolvedProvider[]} Resolved providers,
     *     must contain the ModalDialogInstance instance for this backdrop.
     * @param {string} An anchor name, optional.
     *     if not supplied backdrop gets applied next to elementRef, otherwise into it.
     * @returns {Promise<ComponentRef>}
     */
    Modal.prototype.createBackdrop = function (elementRef, bindings, anchorName) {
        return (!anchorName) ?
            this.componentLoader.loadNextToLocation(modalBackdrop_1.ModalBackdrop, elementRef, bindings) :
            this.componentLoader.loadIntoLocation(modalBackdrop_1.ModalBackdrop, elementRef, anchorName, bindings);
    };
    Modal = __decorate([
        core_1.Injectable(),
        __param(2, core_1.Optional()), 
        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ApplicationRef, ModalConfig_1.ModalConfig])
    ], Modal);
    return Modal;
})();
exports.Modal = Modal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2RhbC50cyJdLCJuYW1lcyI6WyJNb2RhbCIsIk1vZGFsLmNvbnN0cnVjdG9yIiwiTW9kYWwub3BlbiIsIk1vZGFsLm9wZW5JbnNpZGUiLCJNb2RhbC5jcmVhdGVCYWNrZHJvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUJBV08sZUFBZSxDQUFDLENBQUE7QUFHdkIsNEJBQTBCLHVCQUF1QixDQUFDLENBQUE7QUFDbEQsb0NBQWtDLCtCQUErQixDQUFDLENBQUE7QUFDbEUsOEJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsd0NBQXNDLHVDQUF1QyxDQUFDLENBQUE7QUFHOUUsSUFBSSxPQUFvQixDQUFDO0FBRXpCO0lBRUlBLGVBQW9CQSxlQUF1Q0EsRUFBVUEsTUFBc0JBLEVBQ25FQSxhQUEwQkE7UUFEOUJDLG9CQUFlQSxHQUFmQSxlQUFlQSxDQUF3QkE7UUFBVUEsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBZ0JBO1FBRXZGQSwwRUFBMEVBO1FBQzFFQSw2Q0FBNkNBO1FBQzdDQSx5REFBeURBO1FBQ3pEQSw2Q0FBNkNBO1FBQzdDQSxPQUFPQSxHQUFHQSxDQUFDQSxhQUFhQSxDQUFDQSxHQUFHQSx5QkFBV0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsR0FBR0EsSUFBSUEseUJBQVdBLEVBQUVBLENBQUNBO0lBQ3pGQSxDQUFDQTtJQUVERDs7Ozs7O09BTUdBO0lBQ0lBLG9CQUFJQSxHQUFYQSxVQUFZQSxhQUFrQ0EsRUFBRUEsUUFBNEJBLEVBQ2hFQSxNQUFvQkE7UUFDNUJFLHlEQUF5REE7UUFDekRBLDRDQUE0Q0E7UUFDNUNBLHNFQUFzRUE7UUFDdEVBLElBQUlBLFVBQVVBLEdBQWVBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7UUFFeEVBLE1BQU1BLENBQUNBLElBQUlB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REEsWUFBQ0E7QUFBREEsQ0FBQ0EsQUFwRkQsSUFvRkM7QUFuRlksYUFBSyxRQW1GakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBJbmplY3RhYmxlLFxyXG4gICAgRHluYW1pY0NvbXBvbmVudExvYWRlcixcclxuICAgIENvbXBvbmVudFJlZixcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBJbmplY3RvcixcclxuICAgIHByb3ZpZGUsXHJcbiAgICBSZXNvbHZlZFByb3ZpZGVyLFxyXG4gICAgT3B0aW9uYWwsXHJcbiAgICBBcHBsaWNhdGlvblJlZixcclxuICAgIEFQUF9DT01QT05FTlRcclxufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcblxyXG5pbXBvcnQge01vZGFsQ29uZmlnfSBmcm9tICcuLi9tb2RlbHMvTW9kYWxDb25maWcnO1xyXG5pbXBvcnQge01vZGFsRGlhbG9nSW5zdGFuY2V9IGZyb20gJy4uL21vZGVscy9Nb2RhbERpYWxvZ0luc3RhbmNlJztcclxuaW1wb3J0IHtNb2RhbEJhY2tkcm9wfSBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsQmFja2Ryb3AnO1xyXG5pbXBvcnQge0Jvb3RzdHJhcE1vZGFsQ29udGFpbmVyfSBmcm9tICcuLi9jb21wb25lbnRzL2Jvb3RzdHJhcE1vZGFsQ29udGFpbmVyJztcclxuXHJcblxyXG5sZXQgX2NvbmZpZzogTW9kYWxDb25maWc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudExvYWRlcjogRHluYW1pY0NvbXBvbmVudExvYWRlciwgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgZGVmYXVsdENvbmZpZzogTW9kYWxDb25maWcpIHtcclxuICAgICAgICAvLyBUaGUgTW9kYWwgY2xhc3Mgc2hvdWxkIGJlIGFuIGFwcGxpY2F0aW9uIHdpZGUgc2VydmljZSAoaS5lOiBzaW5nbGV0b24pLlxyXG4gICAgICAgIC8vIFRoaXMgd2lsbCBydW4gb25jZSBpbiBtb3N0IGFwcGxpY2F0aW9ucy4uLlxyXG4gICAgICAgIC8vIElmIHRoZSB1c2VyIHByb3ZpZGVzIGEgTW9kYWxDb25maWcgaW5zdGFuY2UgdG8gdGhlIERJLFxyXG4gICAgICAgIC8vIHRoZSBjdXN0b20gY29uZmlnIHdpbGwgYmUgdGhlIGRlZmF1bHQgb25lLlxyXG4gICAgICAgIF9jb25maWcgPSAoZGVmYXVsdENvbmZpZykgPyBNb2RhbENvbmZpZy5tYWtlVmFsaWQoZGVmYXVsdENvbmZpZykgOiBuZXcgTW9kYWxDb25maWcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW5zIGEgbW9kYWwgd2luZG93IGJsb2NraW5nIHRoZSB3aG9sZSBzY3JlZW4uXHJcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50VHlwZSBUaGUgYW5ndWxhciBDb21wb25lbnQgdG8gcmVuZGVyIGFzIG1vZGFsLlxyXG4gICAgICogQHBhcmFtIGJpbmRpbmdzIFJlc29sdmVkIHByb3ZpZGVycyB0aGF0IHdpbGwgaW5qZWN0IGludG8gdGhlIGNvbXBvbmVudCBwcm92aWRlZC5cclxuICAgICAqIEBwYXJhbSBjb25maWcgQSBNb2RhbCBDb25maWd1cmF0aW9uIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPE1vZGFsRGlhbG9nSW5zdGFuY2U+fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3Blbihjb21wb25lbnRUeXBlOiBGdW5jdGlvbkNvbnN0cnVjdG9yLCBiaW5kaW5nczogUmVzb2x2ZWRQcm92aWRlcltdLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnPzogTW9kYWxDb25maWcpOiBQcm9taXNlPE1vZGFsRGlhbG9nSW5zdGFuY2U+IHtcclxuICAgICAgICAvLyBUT0RPOiBhcHBSZWYuaW5qZWN0b3IuZ2V0KEFQUF9DT01QT05FTlQpIERvZXNuJ3Qgd29yay5cclxuICAgICAgICAvLyBXaGVuIGl0IGRvZXMgcmVwbGFjZSB3aXRoIHRoZSBoYWNrIGJlbG93LlxyXG4gICAgICAgIC8vbGV0IG15RWxlbWVudFJlZiA9IHRoaXMuYXBwUmVmLmluamVjdG9yLmdldChBUFBfQ09NUE9ORU5UKS5sb2NhdGlvbjtcclxuICAgICAgICBsZXQgZWxlbWVudFJlZjogRWxlbWVudFJlZiA9IHRoaXMuYXBwUmVmWydfcm9vdENvbXBvbmVudHMnXVswXS5sb2NhdGlvbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3Blbkluc2lkZShjb21wb25lbnRUeXBlLCBlbGVtZW50UmVmLCBudWxsLCBiaW5kaW5ncywgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW5zIGEgbW9kYWwgd2luZG93IGluc2lkZSBhbiBleGlzdGluZyBjb21wb25lbnQuXHJcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50VHlwZSBUaGUgYW5ndWxhciBDb21wb25lbnQgdG8gcmVuZGVyIGFzIG1vZGFsLlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnRSZWYgVGhlIGVsZW1lbnQgdG8gYmxvY2sgdXNpbmcgdGhlIG1vZGFsLlxyXG4gICAgICogQHBhcmFtIGFuY2hvck5hbWUgQSB0ZW1wbGF0ZSB2YXJpYWJsZSB3aXRoaW4gdGhlIGNvbXBvbmVudC5cclxuICAgICAqIEBwYXJhbSBiaW5kaW5ncyBSZXNvbHZlZCBwcm92aWRlcnMgdGhhdCB3aWxsIGluamVjdCBpbnRvIHRoZSBjb21wb25lbnQgcHJvdmlkZWQuXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnIEEgTW9kYWwgQ29uZmlndXJhdGlvbiBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxNb2RhbERpYWxvZ0luc3RhbmNlPn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9wZW5JbnNpZGUoY29tcG9uZW50VHlwZTogRnVuY3Rpb25Db25zdHJ1Y3RvciwgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck5hbWU6IHN0cmluZywgYmluZGluZ3M6IFJlc29sdmVkUHJvdmlkZXJbXSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz86IE1vZGFsQ29uZmlnKTogUHJvbWlzZTxNb2RhbERpYWxvZ0luc3RhbmNlPiB7XHJcblxyXG4gICAgICAgIGNvbmZpZyA9IChjb25maWcpID8gTW9kYWxDb25maWcubWFrZVZhbGlkKGNvbmZpZywgX2NvbmZpZykgOiBfY29uZmlnO1xyXG5cclxuICAgICAgICBsZXQgZGlhbG9nID0gbmV3IE1vZGFsRGlhbG9nSW5zdGFuY2UoY29uZmlnKTtcclxuICAgICAgICBkaWFsb2cuaW5FbGVtZW50ID0gISFhbmNob3JOYW1lO1xyXG5cclxuICAgICAgICBsZXQgZGlhbG9nQmluZGluZ3MgPSBJbmplY3Rvci5yZXNvbHZlKFsgcHJvdmlkZShNb2RhbERpYWxvZ0luc3RhbmNlLCB7dXNlVmFsdWU6IGRpYWxvZ30pIF0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUJhY2tkcm9wKGVsZW1lbnRSZWYsIGRpYWxvZ0JpbmRpbmdzLCBhbmNob3JOYW1lKVxyXG4gICAgICAgICAgICAudGhlbiggKGJhY2tkcm9wUmVmOiBDb21wb25lbnRSZWYpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5iYWNrZHJvcFJlZiA9IGJhY2tkcm9wUmVmO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtb2RhbERhdGFCaW5kaW5ncyA9IEluamVjdG9yLnJlc29sdmUoXHJcbiAgICAgICAgICAgICAgICAgICAgW3Byb3ZpZGUoTW9kYWxEaWFsb2dJbnN0YW5jZSwge3VzZVZhbHVlOiBkaWFsb2d9KV0pLmNvbmNhdChiaW5kaW5ncyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMb2FkZXIubG9hZEludG9Mb2NhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICBCb290c3RyYXBNb2RhbENvbnRhaW5lciwgYmFja2Ryb3BSZWYubG9jYXRpb24sICdtb2RhbEJhY2tkcm9wJywgZGlhbG9nQmluZGluZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oYm9vdHN0cmFwUmVmID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmJvb3RzdHJhcFJlZiA9IGJvb3RzdHJhcFJlZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TG9hZGVyLmxvYWRJbnRvTG9jYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlLCBib290c3RyYXBSZWYubG9jYXRpb24sICdtb2RhbERpYWxvZycsIG1vZGFsRGF0YUJpbmRpbmdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oY29udGVudFJlZiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jb250ZW50UmVmID0gY29udGVudFJlZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpYWxvZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGJhY2tkcm9wIGVsZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnRSZWZ9IFRoZSBlbGVtZW50IHRvIGJsb2NrIHVzaW5nIHRoZSBtb2RhbC5cclxuICAgICAqIEBwYXJhbSB7UmVzb2x2ZWRQcm92aWRlcltdfSBSZXNvbHZlZCBwcm92aWRlcnMsXHJcbiAgICAgKiAgICAgbXVzdCBjb250YWluIHRoZSBNb2RhbERpYWxvZ0luc3RhbmNlIGluc3RhbmNlIGZvciB0aGlzIGJhY2tkcm9wLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IEFuIGFuY2hvciBuYW1lLCBvcHRpb25hbC5cclxuICAgICAqICAgICBpZiBub3Qgc3VwcGxpZWQgYmFja2Ryb3AgZ2V0cyBhcHBsaWVkIG5leHQgdG8gZWxlbWVudFJlZiwgb3RoZXJ3aXNlIGludG8gaXQuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDb21wb25lbnRSZWY+fVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJhY2tkcm9wKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGJpbmRpbmdzOiBSZXNvbHZlZFByb3ZpZGVyW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck5hbWU/OiBzdHJpbmcpIDogUHJvbWlzZTxDb21wb25lbnRSZWY+IHtcclxuICAgICAgICByZXR1cm4gKCFhbmNob3JOYW1lKSA/XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TG9hZGVyLmxvYWROZXh0VG9Mb2NhdGlvbihNb2RhbEJhY2tkcm9wLCBlbGVtZW50UmVmLCBiaW5kaW5ncykgOlxyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudExvYWRlci5sb2FkSW50b0xvY2F0aW9uKE1vZGFsQmFja2Ryb3AsIGVsZW1lbnRSZWYsIGFuY2hvck5hbWUsIGJpbmRpbmdzKTtcclxuICAgIH1cclxufVxyXG4iXX0=