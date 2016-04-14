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
var _defaultConfig;
/**
 * A configuration definition object.
 * Instruction for how to show a modal.
 */
var ModalConfig = (function () {
    function ModalConfig(size, isBlocking, keyboard) {
        if (size === void 0) { size = null; }
        if (isBlocking === void 0) { isBlocking = null; }
        if (keyboard === void 0) { keyboard = undefined; }
        this.size = size;
        this.isBlocking = isBlocking;
        this.keyboard = keyboard;
    }
    /**
     * Makes a ModalConfig instance valdud.
     * @param config
     * @param defaultConfig A Default config to use as master, optional.
     * @returns {ModalConfig} The same config instance sent.
     */
    ModalConfig.makeValid = function (config, defaultConfig) {
        defaultConfig = (defaultConfig) ? defaultConfig : _defaultConfig;
        if (!config.size)
            config.size = defaultConfig.size;
        if (config.isBlocking !== false)
            config.isBlocking = true;
        if (config.keyboard !== null) {
            if (Array.isArray(config.keyboard)) {
                config.keyboard = config.keyboard.length === 0
                    ? defaultConfig.keyboard : config.keyboard;
            }
            else if (!isNaN(config.keyboard)) {
                config.keyboard = [config.keyboard];
            }
            else {
                config.keyboard = defaultConfig.keyboard;
            }
        }
        return config;
    };
    ModalConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [String, Boolean, Object])
    ], ModalConfig);
    return ModalConfig;
}());
exports.ModalConfig = ModalConfig;
_defaultConfig = new ModalConfig('lg', true, [27]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2RhbENvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLElBQUksY0FBMkIsQ0FBQztBQUdoQzs7O0dBR0c7QUFFSDtJQXdCSSxxQkFBWSxJQUFtQixFQUFFLFVBQTBCLEVBQy9DLFFBQTRDO1FBRDVDLG9CQUFtQixHQUFuQixXQUFtQjtRQUFFLDBCQUEwQixHQUExQixpQkFBMEI7UUFDL0Msd0JBQTRDLEdBQTVDLG9CQUE0QztRQUNwRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxxQkFBUyxHQUFoQixVQUFpQixNQUFtQixFQUFFLGFBQTJCO1FBQzdELGFBQWEsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLGFBQWEsR0FBRyxjQUFjLENBQUM7UUFFakUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsTUFBTSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBRXJDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRTdCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFnQixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxNQUFNLENBQUMsUUFBUSxHQUFtQixNQUFNLENBQUMsUUFBUyxDQUFDLE1BQU0sS0FBSyxDQUFDO3NCQUN6RCxhQUFhLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDbkQsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBUyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQVMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixNQUFNLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUM7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUEzREw7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQTZEYixrQkFBQztBQUFELENBQUMsQUE1REQsSUE0REM7QUE1RFksbUJBQVcsY0E0RHZCLENBQUE7QUFFRCxjQUFjLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5sZXQgX2RlZmF1bHRDb25maWc6IE1vZGFsQ29uZmlnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBIGNvbmZpZ3VyYXRpb24gZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqIEluc3RydWN0aW9uIGZvciBob3cgdG8gc2hvdyBhIG1vZGFsLlxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTW9kYWxDb25maWcge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTaXplIG9mIHRoZSBtb2RhbC5cclxuICAgICAqICdsZycgb3IgJ3NtJyBvbmx5LlxyXG4gICAgICogTk9URTogTm8gdmFsaWRhdGlvbi5cclxuICAgICAqIERlZmF1bHQgdG8gJ2xnJ1xyXG4gICAgICovXHJcbiAgICBzaXplOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXNjcmliZXMgaWYgdGhlIG1vZGFsIGlzIGJsb2NraW5nIG1vZGFsLlxyXG4gICAgICogQSBCbG9ja2luZyBtb2RhbCBpcyBub3QgY2xvc2FibGUgYnkgY2xpY2tpbmcgb3V0c2lkZSBvZiB0aGUgbW9kYWwgd2luZG93LlxyXG4gICAgICogRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIGlzQmxvY2tpbmc6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBLZXlib2FyZCB2YWx1ZS9zIHRoYXQgY2xvc2UgdGhlIG1vZGFsLlxyXG4gICAgICogQWNjZXB0cyBlaXRoZXIgYSBzaW5nbGUgbnVtZXJpYyB2YWx1ZSBvciBhbiBhcnJheSBvZiBudW1lcmljIHZhbHVlcy5cclxuICAgICAqIEEgbW9kYWwgY2xvc2VkIGJ5IGEga2V5Ym9hcmQgc3Ryb2tlIHdpbGwgcmVzdWx0IGluIGEgJ3JlamVjdCcgbm90aWZpY2F0aW9uIGZyb20gdGhlIHByb21pc2UuXHJcbiAgICAgKiBEZWZhdWx0cyB0byAyNywgc2V0IGBudWxsYCBpbXBsaWNpdGx5IHRvIGRpc2FibGUuXHJcbiAgICAgKi9cclxuICAgIGtleWJvYXJkOiBBcnJheTxudW1iZXI+IHwgbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNpemU6IHN0cmluZyA9IG51bGwsIGlzQmxvY2tpbmc6IGJvb2xlYW4gPSBudWxsLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IEFycmF5PG51bWJlcj4gfCBudW1iZXIgPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuaXNCbG9ja2luZyA9IGlzQmxvY2tpbmc7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZCA9IGtleWJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFrZXMgYSBNb2RhbENvbmZpZyBpbnN0YW5jZSB2YWxkdWQuXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnXHJcbiAgICAgKiBAcGFyYW0gZGVmYXVsdENvbmZpZyBBIERlZmF1bHQgY29uZmlnIHRvIHVzZSBhcyBtYXN0ZXIsIG9wdGlvbmFsLlxyXG4gICAgICogQHJldHVybnMge01vZGFsQ29uZmlnfSBUaGUgc2FtZSBjb25maWcgaW5zdGFuY2Ugc2VudC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIG1ha2VWYWxpZChjb25maWc6IE1vZGFsQ29uZmlnLCBkZWZhdWx0Q29uZmlnPzogTW9kYWxDb25maWcpIHtcclxuICAgICAgICBkZWZhdWx0Q29uZmlnID0gKGRlZmF1bHRDb25maWcpID8gZGVmYXVsdENvbmZpZyA6IF9kZWZhdWx0Q29uZmlnO1xyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZy5zaXplKVxyXG4gICAgICAgICAgICBjb25maWcuc2l6ZSA9IGRlZmF1bHRDb25maWcuc2l6ZTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5pc0Jsb2NraW5nICE9PSBmYWxzZSlcclxuICAgICAgICAgICAgY29uZmlnLmlzQmxvY2tpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmtleWJvYXJkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KDxBcnJheTxudW1iZXI+PmNvbmZpZy5rZXlib2FyZCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5rZXlib2FyZCA9ICg8QXJyYXk8bnVtYmVyPj5jb25maWcua2V5Ym9hcmQpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgID8gZGVmYXVsdENvbmZpZy5rZXlib2FyZCA6IGNvbmZpZy5rZXlib2FyZDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNOYU4oPG51bWJlcj5jb25maWcua2V5Ym9hcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcua2V5Ym9hcmQgPSBbPG51bWJlcj5jb25maWcua2V5Ym9hcmRdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmtleWJvYXJkID0gZGVmYXVsdENvbmZpZy5rZXlib2FyZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbl9kZWZhdWx0Q29uZmlnID0gbmV3IE1vZGFsQ29uZmlnKCdsZycsIHRydWUsIFsyN10pO1xyXG4iXX0=