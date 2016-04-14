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
}());
exports.Modal = Modal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBV08sZUFBZSxDQUFDLENBQUE7QUFHdkIsNEJBQTBCLHVCQUF1QixDQUFDLENBQUE7QUFDbEQsb0NBQWtDLCtCQUErQixDQUFDLENBQUE7QUFDbEUsOEJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsd0NBQXNDLHVDQUF1QyxDQUFDLENBQUE7QUFHOUUsSUFBSSxPQUFvQixDQUFDO0FBR3pCO0lBQ0ksZUFBb0IsZUFBdUMsRUFBVSxNQUFzQixFQUNuRSxhQUEwQjtRQUQ5QixvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUV2RiwwRUFBMEU7UUFDMUUsNkNBQTZDO1FBQzdDLHlEQUF5RDtRQUN6RCw2Q0FBNkM7UUFDN0MsT0FBTyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcseUJBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7SUFDekYsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLG9CQUFJLEdBQVgsVUFBWSxhQUFrQyxFQUFFLFFBQTRCLEVBQ2hFLE1BQW9CO1FBQzVCLHlEQUF5RDtRQUN6RCw0Q0FBNEM7UUFDNUMsc0VBQXNFO1FBQ3RFLElBQUksVUFBVSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFeEUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLDBCQUFVLEdBQWpCLFVBQWtCLGFBQWtDLEVBQUUsVUFBc0IsRUFDMUQsVUFBa0IsRUFBRSxRQUE0QixFQUNoRCxNQUFvQjtRQUZ0QyxpQkE4QkM7UUExQkcsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcseUJBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUVyRSxJQUFJLE1BQU0sR0FBRyxJQUFJLHlDQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUVoQyxJQUFJLGNBQWMsR0FBRyxlQUFRLENBQUMsT0FBTyxDQUFDLENBQUUsY0FBTyxDQUFDLHlDQUFtQixFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUUsQ0FBQyxDQUFDO1FBQzVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUUsVUFBVSxDQUFDO2FBQzdELElBQUksQ0FBRSxVQUFDLFdBQXlCO1lBQzdCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBRWpDLElBQUksaUJBQWlCLEdBQUcsZUFBUSxDQUFDLE9BQU8sQ0FDcEMsQ0FBQyxjQUFPLENBQUMseUNBQW1CLEVBQUUsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUN4QyxpREFBdUIsRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxjQUFjLENBQUM7aUJBQzlFLElBQUksQ0FBQyxVQUFBLFlBQVk7Z0JBQ2QsTUFBTSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUN4QyxhQUFhLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLENBQUM7cUJBQ3RFLElBQUksQ0FBQyxVQUFBLFVBQVU7b0JBQ1IsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7b0JBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ2xCLENBQUMsQ0FDSixDQUFDO1lBQ04sQ0FBQyxDQUNKLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNLLDhCQUFjLEdBQXRCLFVBQXVCLFVBQXNCLEVBQUUsUUFBNEIsRUFDcEQsVUFBbUI7UUFDdEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyw2QkFBYSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7WUFDNUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQW5GTDtRQUFDLGlCQUFVLEVBQUU7bUJBR0ksZUFBUSxFQUFFOzthQUhkO0lBb0ZiLFlBQUM7QUFBRCxDQUFDLEFBbkZELElBbUZDO0FBbkZZLGFBQUssUUFtRmpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgSW5qZWN0YWJsZSxcclxuICAgIER5bmFtaWNDb21wb25lbnRMb2FkZXIsXHJcbiAgICBDb21wb25lbnRSZWYsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSW5qZWN0b3IsXHJcbiAgICBwcm92aWRlLFxyXG4gICAgUmVzb2x2ZWRQcm92aWRlcixcclxuICAgIE9wdGlvbmFsLFxyXG4gICAgQXBwbGljYXRpb25SZWYsXHJcbiAgICBBUFBfQ09NUE9ORU5UXHJcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IHtNb2RhbENvbmZpZ30gZnJvbSAnLi4vbW9kZWxzL01vZGFsQ29uZmlnJztcclxuaW1wb3J0IHtNb2RhbERpYWxvZ0luc3RhbmNlfSBmcm9tICcuLi9tb2RlbHMvTW9kYWxEaWFsb2dJbnN0YW5jZSc7XHJcbmltcG9ydCB7TW9kYWxCYWNrZHJvcH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbEJhY2tkcm9wJztcclxuaW1wb3J0IHtCb290c3RyYXBNb2RhbENvbnRhaW5lcn0gZnJvbSAnLi4vY29tcG9uZW50cy9ib290c3RyYXBNb2RhbENvbnRhaW5lcic7XHJcblxyXG5cclxubGV0IF9jb25maWc6IE1vZGFsQ29uZmlnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRMb2FkZXI6IER5bmFtaWNDb21wb25lbnRMb2FkZXIsIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgICAgICAgICAgICAgIEBPcHRpb25hbCgpIGRlZmF1bHRDb25maWc6IE1vZGFsQ29uZmlnKSB7XHJcbiAgICAgICAgLy8gVGhlIE1vZGFsIGNsYXNzIHNob3VsZCBiZSBhbiBhcHBsaWNhdGlvbiB3aWRlIHNlcnZpY2UgKGkuZTogc2luZ2xldG9uKS5cclxuICAgICAgICAvLyBUaGlzIHdpbGwgcnVuIG9uY2UgaW4gbW9zdCBhcHBsaWNhdGlvbnMuLi5cclxuICAgICAgICAvLyBJZiB0aGUgdXNlciBwcm92aWRlcyBhIE1vZGFsQ29uZmlnIGluc3RhbmNlIHRvIHRoZSBESSxcclxuICAgICAgICAvLyB0aGUgY3VzdG9tIGNvbmZpZyB3aWxsIGJlIHRoZSBkZWZhdWx0IG9uZS5cclxuICAgICAgICBfY29uZmlnID0gKGRlZmF1bHRDb25maWcpID8gTW9kYWxDb25maWcubWFrZVZhbGlkKGRlZmF1bHRDb25maWcpIDogbmV3IE1vZGFsQ29uZmlnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVucyBhIG1vZGFsIHdpbmRvdyBibG9ja2luZyB0aGUgd2hvbGUgc2NyZWVuLlxyXG4gICAgICogQHBhcmFtIGNvbXBvbmVudFR5cGUgVGhlIGFuZ3VsYXIgQ29tcG9uZW50IHRvIHJlbmRlciBhcyBtb2RhbC5cclxuICAgICAqIEBwYXJhbSBiaW5kaW5ncyBSZXNvbHZlZCBwcm92aWRlcnMgdGhhdCB3aWxsIGluamVjdCBpbnRvIHRoZSBjb21wb25lbnQgcHJvdmlkZWQuXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnIEEgTW9kYWwgQ29uZmlndXJhdGlvbiBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxNb2RhbERpYWxvZ0luc3RhbmNlPn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9wZW4oY29tcG9uZW50VHlwZTogRnVuY3Rpb25Db25zdHJ1Y3RvciwgYmluZGluZ3M6IFJlc29sdmVkUHJvdmlkZXJbXSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZz86IE1vZGFsQ29uZmlnKTogUHJvbWlzZTxNb2RhbERpYWxvZ0luc3RhbmNlPiB7XHJcbiAgICAgICAgLy8gVE9ETzogYXBwUmVmLmluamVjdG9yLmdldChBUFBfQ09NUE9ORU5UKSBEb2Vzbid0IHdvcmsuXHJcbiAgICAgICAgLy8gV2hlbiBpdCBkb2VzIHJlcGxhY2Ugd2l0aCB0aGUgaGFjayBiZWxvdy5cclxuICAgICAgICAvL2xldCBteUVsZW1lbnRSZWYgPSB0aGlzLmFwcFJlZi5pbmplY3Rvci5nZXQoQVBQX0NPTVBPTkVOVCkubG9jYXRpb247XHJcbiAgICAgICAgbGV0IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgPSB0aGlzLmFwcFJlZlsnX3Jvb3RDb21wb25lbnRzJ11bMF0ubG9jYXRpb247XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW5JbnNpZGUoY29tcG9uZW50VHlwZSwgZWxlbWVudFJlZiwgbnVsbCwgYmluZGluZ3MsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVucyBhIG1vZGFsIHdpbmRvdyBpbnNpZGUgYW4gZXhpc3RpbmcgY29tcG9uZW50LlxyXG4gICAgICogQHBhcmFtIGNvbXBvbmVudFR5cGUgVGhlIGFuZ3VsYXIgQ29tcG9uZW50IHRvIHJlbmRlciBhcyBtb2RhbC5cclxuICAgICAqIEBwYXJhbSBlbGVtZW50UmVmIFRoZSBlbGVtZW50IHRvIGJsb2NrIHVzaW5nIHRoZSBtb2RhbC5cclxuICAgICAqIEBwYXJhbSBhbmNob3JOYW1lIEEgdGVtcGxhdGUgdmFyaWFibGUgd2l0aGluIHRoZSBjb21wb25lbnQuXHJcbiAgICAgKiBAcGFyYW0gYmluZGluZ3MgUmVzb2x2ZWQgcHJvdmlkZXJzIHRoYXQgd2lsbCBpbmplY3QgaW50byB0aGUgY29tcG9uZW50IHByb3ZpZGVkLlxyXG4gICAgICogQHBhcmFtIGNvbmZpZyBBIE1vZGFsIENvbmZpZ3VyYXRpb24gb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8TW9kYWxEaWFsb2dJbnN0YW5jZT59XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvcGVuSW5zaWRlKGNvbXBvbmVudFR5cGU6IEZ1bmN0aW9uQ29uc3RydWN0b3IsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmNob3JOYW1lOiBzdHJpbmcsIGJpbmRpbmdzOiBSZXNvbHZlZFByb3ZpZGVyW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25maWc/OiBNb2RhbENvbmZpZyk6IFByb21pc2U8TW9kYWxEaWFsb2dJbnN0YW5jZT4ge1xyXG5cclxuICAgICAgICBjb25maWcgPSAoY29uZmlnKSA/IE1vZGFsQ29uZmlnLm1ha2VWYWxpZChjb25maWcsIF9jb25maWcpIDogX2NvbmZpZztcclxuXHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IG5ldyBNb2RhbERpYWxvZ0luc3RhbmNlKGNvbmZpZyk7XHJcbiAgICAgICAgZGlhbG9nLmluRWxlbWVudCA9ICEhYW5jaG9yTmFtZTtcclxuXHJcbiAgICAgICAgbGV0IGRpYWxvZ0JpbmRpbmdzID0gSW5qZWN0b3IucmVzb2x2ZShbIHByb3ZpZGUoTW9kYWxEaWFsb2dJbnN0YW5jZSwge3VzZVZhbHVlOiBkaWFsb2d9KSBdKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVCYWNrZHJvcChlbGVtZW50UmVmLCBkaWFsb2dCaW5kaW5ncywgYW5jaG9yTmFtZSlcclxuICAgICAgICAgICAgLnRoZW4oIChiYWNrZHJvcFJlZjogQ29tcG9uZW50UmVmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuYmFja2Ryb3BSZWYgPSBiYWNrZHJvcFJlZjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbW9kYWxEYXRhQmluZGluZ3MgPSBJbmplY3Rvci5yZXNvbHZlKFxyXG4gICAgICAgICAgICAgICAgICAgIFtwcm92aWRlKE1vZGFsRGlhbG9nSW5zdGFuY2UsIHt1c2VWYWx1ZTogZGlhbG9nfSldKS5jb25jYXQoYmluZGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TG9hZGVyLmxvYWRJbnRvTG9jYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgQm9vdHN0cmFwTW9kYWxDb250YWluZXIsIGJhY2tkcm9wUmVmLmxvY2F0aW9uLCAnbW9kYWxCYWNrZHJvcCcsIGRpYWxvZ0JpbmRpbmdzKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGJvb3RzdHJhcFJlZiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5ib290c3RyYXBSZWYgPSBib290c3RyYXBSZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExvYWRlci5sb2FkSW50b0xvY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZSwgYm9vdHN0cmFwUmVmLmxvY2F0aW9uLCAnbW9kYWxEaWFsb2cnLCBtb2RhbERhdGFCaW5kaW5ncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGNvbnRlbnRSZWYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY29udGVudFJlZiA9IGNvbnRlbnRSZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkaWFsb2c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBiYWNrZHJvcCBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50UmVmfSBUaGUgZWxlbWVudCB0byBibG9jayB1c2luZyB0aGUgbW9kYWwuXHJcbiAgICAgKiBAcGFyYW0ge1Jlc29sdmVkUHJvdmlkZXJbXX0gUmVzb2x2ZWQgcHJvdmlkZXJzLFxyXG4gICAgICogICAgIG11c3QgY29udGFpbiB0aGUgTW9kYWxEaWFsb2dJbnN0YW5jZSBpbnN0YW5jZSBmb3IgdGhpcyBiYWNrZHJvcC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBBbiBhbmNob3IgbmFtZSwgb3B0aW9uYWwuXHJcbiAgICAgKiAgICAgaWYgbm90IHN1cHBsaWVkIGJhY2tkcm9wIGdldHMgYXBwbGllZCBuZXh0IHRvIGVsZW1lbnRSZWYsIG90aGVyd2lzZSBpbnRvIGl0LlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q29tcG9uZW50UmVmPn1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVCYWNrZHJvcChlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBiaW5kaW5nczogUmVzb2x2ZWRQcm92aWRlcltdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JOYW1lPzogc3RyaW5nKSA6IFByb21pc2U8Q29tcG9uZW50UmVmPiB7XHJcbiAgICAgICAgcmV0dXJuICghYW5jaG9yTmFtZSkgP1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudExvYWRlci5sb2FkTmV4dFRvTG9jYXRpb24oTW9kYWxCYWNrZHJvcCwgZWxlbWVudFJlZiwgYmluZGluZ3MpIDpcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMb2FkZXIubG9hZEludG9Mb2NhdGlvbihNb2RhbEJhY2tkcm9wLCBlbGVtZW50UmVmLCBhbmNob3JOYW1lLCBiaW5kaW5ncyk7XHJcbiAgICB9XHJcbn1cclxuIl19