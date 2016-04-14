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
})();
exports.ModalConfig = ModalConfig;
_defaultConfig = new ModalConfig('lg', true, [27]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2RhbENvbmZpZy50cyJdLCJuYW1lcyI6WyJNb2RhbENvbmZpZyIsIk1vZGFsQ29uZmlnLmNvbnN0cnVjdG9yIiwiTW9kYWxDb25maWcubWFrZVZhbGlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsSUFBSSxjQUEyQixDQUFDO0FBR2hDOzs7R0FHRztBQUNIO0lBeUJJQSxxQkFBWUEsSUFBbUJBLEVBQUVBLFVBQTBCQSxFQUMvQ0EsUUFBNENBO1FBRDVDQyxvQkFBbUJBLEdBQW5CQSxXQUFtQkE7UUFBRUEsMEJBQTBCQSxHQUExQkEsaUJBQTBCQTtRQUMvQ0Esd0JBQTRDQSxHQUE1Q0Esb0JBQTRDQTtRQUNwREEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDakJBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFVBQVVBLENBQUNBO1FBQzdCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxRQUFRQSxDQUFDQTtJQUM3QkEsQ0FBQ0E7SUFFREQ7Ozs7O09BS0dBO0lBQ0lBLHFCQUFTQSxHQUFoQkEsVUFBaUJBLE1BQW1CQSxFQUFFQSxhQUEyQkE7UUFDN0RFLGFBQWFBLEdBQUdBLENBQUNBLGFBQWFBLENBQUNBLEdBQUdBLGFBQWFBLEdBQUdBLGNBQWNBLENBQUNBO1FBRWpFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUNiQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUVyQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBVUEsS0FBS0EsS0FBS0EsQ0FBQ0E7WUFDNUJBLE1BQU1BLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBO1FBRTdCQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBZ0JBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNoREEsTUFBTUEsQ0FBQ0EsUUFBUUEsR0FBbUJBLE1BQU1BLENBQUNBLFFBQVNBLENBQUNBLE1BQU1BLEtBQUtBLENBQUNBO3NCQUN6REEsYUFBYUEsQ0FBQ0EsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDbkRBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQVNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN6Q0EsTUFBTUEsQ0FBQ0EsUUFBUUEsR0FBR0EsQ0FBU0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFDaERBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNKQSxNQUFNQSxDQUFDQSxRQUFRQSxHQUFHQSxhQUFhQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUM3Q0EsQ0FBQ0E7UUFDTEEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7SUFDbEJBLENBQUNBO0lBM0RMRjtRQUFDQSxpQkFBVUEsRUFBRUE7O29CQTZEWkE7SUFBREEsa0JBQUNBO0FBQURBLENBQUNBLEFBN0RELElBNkRDO0FBNURZLG1CQUFXLGNBNER2QixDQUFBO0FBRUQsY0FBYyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxubGV0IF9kZWZhdWx0Q29uZmlnOiBNb2RhbENvbmZpZztcclxuXHJcblxyXG4vKipcclxuICogQSBjb25maWd1cmF0aW9uIGRlZmluaXRpb24gb2JqZWN0LlxyXG4gKiBJbnN0cnVjdGlvbiBmb3IgaG93IHRvIHNob3cgYSBtb2RhbC5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29uZmlnIHtcclxuICAgIC8qKlxyXG4gICAgICogU2l6ZSBvZiB0aGUgbW9kYWwuXHJcbiAgICAgKiAnbGcnIG9yICdzbScgb25seS5cclxuICAgICAqIE5PVEU6IE5vIHZhbGlkYXRpb24uXHJcbiAgICAgKiBEZWZhdWx0IHRvICdsZydcclxuICAgICAqL1xyXG4gICAgc2l6ZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVzY3JpYmVzIGlmIHRoZSBtb2RhbCBpcyBibG9ja2luZyBtb2RhbC5cclxuICAgICAqIEEgQmxvY2tpbmcgbW9kYWwgaXMgbm90IGNsb3NhYmxlIGJ5IGNsaWNraW5nIG91dHNpZGUgb2YgdGhlIG1vZGFsIHdpbmRvdy5cclxuICAgICAqIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBpc0Jsb2NraW5nOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogS2V5Ym9hcmQgdmFsdWUvcyB0aGF0IGNsb3NlIHRoZSBtb2RhbC5cclxuICAgICAqIEFjY2VwdHMgZWl0aGVyIGEgc2luZ2xlIG51bWVyaWMgdmFsdWUgb3IgYW4gYXJyYXkgb2YgbnVtZXJpYyB2YWx1ZXMuXHJcbiAgICAgKiBBIG1vZGFsIGNsb3NlZCBieSBhIGtleWJvYXJkIHN0cm9rZSB3aWxsIHJlc3VsdCBpbiBhICdyZWplY3QnIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBwcm9taXNlLlxyXG4gICAgICogRGVmYXVsdHMgdG8gMjcsIHNldCBgbnVsbGAgaW1wbGljaXRseSB0byBkaXNhYmxlLlxyXG4gICAgICovXHJcbiAgICBrZXlib2FyZDogQXJyYXk8bnVtYmVyPiB8IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzaXplOiBzdHJpbmcgPSBudWxsLCBpc0Jsb2NraW5nOiBib29sZWFuID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkOiBBcnJheTxudW1iZXI+IHwgbnVtYmVyID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmlzQmxvY2tpbmcgPSBpc0Jsb2NraW5nO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmQgPSBrZXlib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2VzIGEgTW9kYWxDb25maWcgaW5zdGFuY2UgdmFsZHVkLlxyXG4gICAgICogQHBhcmFtIGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIGRlZmF1bHRDb25maWcgQSBEZWZhdWx0IGNvbmZpZyB0byB1c2UgYXMgbWFzdGVyLCBvcHRpb25hbC5cclxuICAgICAqIEByZXR1cm5zIHtNb2RhbENvbmZpZ30gVGhlIHNhbWUgY29uZmlnIGluc3RhbmNlIHNlbnQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBtYWtlVmFsaWQoY29uZmlnOiBNb2RhbENvbmZpZywgZGVmYXVsdENvbmZpZz86IE1vZGFsQ29uZmlnKSB7XHJcbiAgICAgICAgZGVmYXVsdENvbmZpZyA9IChkZWZhdWx0Q29uZmlnKSA/IGRlZmF1bHRDb25maWcgOiBfZGVmYXVsdENvbmZpZztcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuc2l6ZSlcclxuICAgICAgICAgICAgY29uZmlnLnNpemUgPSBkZWZhdWx0Q29uZmlnLnNpemU7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcuaXNCbG9ja2luZyAhPT0gZmFsc2UpXHJcbiAgICAgICAgICAgIGNvbmZpZy5pc0Jsb2NraW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5rZXlib2FyZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSg8QXJyYXk8bnVtYmVyPj5jb25maWcua2V5Ym9hcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcua2V5Ym9hcmQgPSAoPEFycmF5PG51bWJlcj4+Y29uZmlnLmtleWJvYXJkKS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgICAgICA/IGRlZmF1bHRDb25maWcua2V5Ym9hcmQgOiBjb25maWcua2V5Ym9hcmQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKDxudW1iZXI+Y29uZmlnLmtleWJvYXJkKSkge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmtleWJvYXJkID0gWzxudW1iZXI+Y29uZmlnLmtleWJvYXJkXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5rZXlib2FyZCA9IGRlZmF1bHRDb25maWcua2V5Ym9hcmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5fZGVmYXVsdENvbmZpZyA9IG5ldyBNb2RhbENvbmZpZygnbGcnLCB0cnVlLCBbMjddKTtcclxuIl19