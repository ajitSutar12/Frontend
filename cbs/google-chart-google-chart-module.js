(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["google-chart-google-chart-module"],{

/***/ "./node_modules/ng2-google-charts/__ivy_ngcc__/fesm2015/ng2-google-charts.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/__ivy_ngcc__/fesm2015/ng2-google-charts.js ***!
  \***********************************************************************************/
/*! exports provided: ChartHTMLTooltip, GoogleChartComponent, GoogleChartEditor, GoogleChartsControlComponent, GoogleChartsDashboardComponent, GoogleChartsLoaderService, Ng2GoogleChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartHTMLTooltip", function() { return ChartHTMLTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function() { return GoogleChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartEditor", function() { return GoogleChartEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsControlComponent", function() { return GoogleChartsControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsDashboardComponent", function() { return GoogleChartsDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsLoaderService", function() { return GoogleChartsLoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2GoogleChartsModule", function() { return Ng2GoogleChartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@agm/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let GoogleChartsLoaderService = class GoogleChartsLoaderService {
    constructor(localeId, googleChartsSettings) {
        this.googleChartsSettings = googleChartsSettings;
        this.googleScriptLoadingNotifier = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.googleScriptIsLoading = false;
        this.localeId = localeId;
        this.loadGoogleChartsScriptPromise = new Promise((resolve, reject) => {
            if (typeof google !== 'undefined' && google.charts) {
                resolve();
            }
            else if (!this.googleScriptIsLoading) {
                this.googleScriptIsLoading = true;
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://www.gstatic.com/charts/loader.js';
                script.async = true;
                script.defer = true;
                script.onload = () => {
                    this.googleScriptIsLoading = false;
                    this.googleScriptLoadingNotifier.emit(true);
                    resolve();
                };
                script.onerror = () => {
                    this.googleScriptIsLoading = false;
                    this.googleScriptLoadingNotifier.emit(false);
                    reject();
                };
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                this.googleScriptLoadingNotifier.subscribe((loaded) => {
                    if (loaded) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    }
    load(settings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadGoogleChartsScriptPromise;
            yield new Promise((resolve) => {
                if (!settings) {
                    settings = Object.create(this.googleChartsSettings);
                }
                if (!settings) {
                    settings = {};
                }
                if (!settings.language) {
                    settings.language = this.localeId;
                }
                if (!settings.googleChartsVersion) {
                    settings.googleChartsVersion = '47';
                }
                const _settings = settings;
                _settings.callback = resolve;
                google.charts.load(settings.googleChartsVersion, _settings);
            });
        });
    }
};
GoogleChartsLoaderService.ɵfac = function GoogleChartsLoaderService_Factory(t) { return new (t || GoogleChartsLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]('googleChartsSettings', 8)); };
GoogleChartsLoaderService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GoogleChartsLoaderService_Factory() { return new GoogleChartsLoaderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])("googleChartsSettings", 8)); }, token: GoogleChartsLoaderService, providedIn: "root" });
GoogleChartsLoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('googleChartsSettings')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, Object])
], GoogleChartsLoaderService);

class GoogleChartsDataTable {
    constructor(opt) {
        this.opt = opt;
        this.dataTableChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (opt) {
            this._setDataTable(opt.dataTable, opt.firstRowIsData);
        }
    }
    send() {
        if (this.query === undefined) {
            return;
        }
        this.query.send((queryResponse) => {
            this.setDataTable(queryResponse.getDataTable());
            if (this.opt.queryCallback) {
                this.opt.queryCallback(queryResponse);
            }
        });
    }
    init(opt) {
        if (opt) {
            this.opt = opt;
        }
        if (this.tid !== undefined) {
            // doesn't work, see https://github.com/google/google-visualization-issues/issues/2381
            // this.query.abort();
            window.clearInterval(this.tid);
            this.tid = undefined;
        }
        if (this.opt.dataSourceUrl) {
            this.query = new google.visualization.Query(this.opt.dataSourceUrl);
            if (this.opt.query) {
                this.query.setQuery(this.opt.query);
            }
            if (this.opt.timeout !== undefined) {
                this.query.setTimeout(this.opt.timeout);
            }
            if (this.opt.refreshInterval) {
                // this.query.setRefreshInterval(this.opt.refreshInterval);
                this.tid = window.setInterval(() => {
                    this.send();
                }, this.opt.refreshInterval * 1000);
            }
            this.send();
        }
        else {
            this.setDataTable(this.opt.dataTable);
        }
    }
    /**
     * @returns Underlying google.visualization.DataTable
     */
    getDataTable() {
        return this.dataTable;
    }
    setDataTable(dt, firstRowIsData) {
        if (firstRowIsData === undefined) {
            firstRowIsData = this.opt.firstRowIsData;
        }
        this._setDataTable(dt, firstRowIsData);
        this.dataTableChanged.emit(this.dataTable);
    }
    _setDataTable(dt, firstRowIsData) {
        if (Array.isArray(dt)) {
            dt = google.visualization.arrayToDataTable(dt, firstRowIsData);
        }
        this.dataTable = dt;
        this.reformat();
    }
    /**
     * Applies formatters to data columns, if defined
     */
    reformat() {
        const dt = this.dataTable;
        if (dt === undefined) {
            return;
        }
        if (this.opt.formatters === undefined) {
            return;
        }
        for (const formatterConfig of this.opt.formatters) {
            let formatter;
            if (formatterConfig.type === 'PatternFormat') {
                const fmtOptions = formatterConfig.options;
                formatter = new google.visualization.PatternFormat(fmtOptions.pattern);
                formatter.format(dt, formatterConfig.columns, fmtOptions.dstColumnIndex);
                continue;
            }
            const formatterConstructor = google.visualization[formatterConfig.type];
            const formatterOptions = formatterConfig.options;
            formatter = new formatterConstructor(formatterOptions);
            if (formatterConfig.type === 'ColorFormat' && formatterOptions) {
                const fmtOptions = formatterOptions;
                for (const range of fmtOptions.ranges) {
                    if (typeof (range.fromBgColor) !== 'undefined'
                        && typeof (range.toBgColor) !== 'undefined') {
                        formatter.addGradientRange(range.from, range.to, range.color, range.fromBgColor, range.toBgColor);
                    }
                    else {
                        formatter.addRange(range.from, range.to, range.color, range.bgcolor);
                    }
                }
            }
            for (const col of formatterConfig.columns) {
                formatter.format(dt, col);
            }
        }
    }
}
GoogleChartsDataTable.ɵfac = function GoogleChartsDataTable_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"](); };
GoogleChartsDataTable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GoogleChartsDataTable, outputs: { dataTableChanged: "dataTableChanged" } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartsDataTable.prototype, "dataTableChanged", void 0);

class ChartHTMLTooltip {
    constructor(el) {
        this.el = el;
    }
    setPosition(x, y) {
        this.el.nativeElement.style.left = x + ChartHTMLTooltip.PIXELS;
        this.el.nativeElement.style.top = y + ChartHTMLTooltip.PIXELS;
    }
    getDOMElement() {
        return this.el;
    }
}
ChartHTMLTooltip.PIXELS = 'px';

let GoogleChartComponent = class GoogleChartComponent {
    constructor(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
        this.mouseOverListener = (item) => {
            const event = this.parseMouseEvent(item);
            event.tooltip = this.getHTMLTooltip();
            return event;
        };
        this.mouseOutListener = (item) => {
            const event = this.parseMouseEvent(item);
            return event;
        };
        this.selectListener = () => {
            const event = {
                message: 'select',
                row: null,
                column: null,
                selectedRowValues: [],
                selectedRowFormattedValues: [],
                columnLabel: ''
            };
            const s = this.wrapper.visualization.getSelection();
            const gs = s[s.length - 1];
            if (!gs) {
                event.message = 'deselect';
                return event;
            }
            const selection = gs;
            if (gs.row != null) {
                event.row = selection.row;
                const selectedRowValues = [];
                const selectedRowFormattedValues = [];
                const dataTable = this.wrapper.getDataTable();
                const numberOfColumns = dataTable.getNumberOfColumns();
                for (let i = 0; i < numberOfColumns; i++) {
                    selectedRowValues.push(dataTable.getValue(selection.row, i));
                    selectedRowFormattedValues.push(dataTable.getFormattedValue(selection.row, i));
                }
                event.selectedRowValues = selectedRowValues;
                event.selectedRowFormattedValues = selectedRowFormattedValues;
            }
            if (selection.column != null) {
                event.column = selection.column;
                event.columnLabel = this.getColumnLabelAtPosition(selection);
            }
            if (gs.name) {
                event.columnLabel = gs.name;
            }
            return event;
        };
        this.chartSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartSelectOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartReadyOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartErrorOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOverOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseOutOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.regionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.regionClickOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.HTMLel = this.el.nativeElement.querySelector('div');
        if (Object.isExtensible(this.data)) {
            this.data.component = this;
        }
        this.options = this.data.options;
        this.init().then(() => {
            this.draw();
        });
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loaderService.load();
            this.recreateWrapper();
        });
    }
    recreateWrapper() {
        if (this.wrapper === undefined || this.wrapper.getChartType() !== this.data.chartType) {
            this.dataTable = new GoogleChartsDataTable(this.data);
            this.dataTable.dataTableChanged.subscribe((dt) => {
                this._draw();
            });
            // see dataTable in https://developers.google.com/chart/interactive/docs/reference#google.visualization.drawchart
            let temp = this.data;
            if (this.data.firstRowIsData) {
                temp = Object.assign(temp, this.data);
                temp.dataTable = this.dataTable.getDataTable();
            }
            this.wrapper = new google.visualization.ChartWrapper(temp);
            this.registerChartWrapperEvents();
            /* Calling draw even without data is the only way to pass the HTMl element
               when using the chart in a dashboard. Don't do this in all other cases:
               it breaks formatters with remote data source, hence the conditional. */
            if (temp.dataTable === undefined && temp.dataSourceUrl === undefined) {
                try {
                    this.wrapper.draw(this.HTMLel);
                }
                catch (err) { }
            }
        }
    }
    _draw() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dt = this.dataTable.getDataTable();
            if (dt === undefined) {
                return;
            }
            this.convertOptions();
            this.recreateWrapper();
            this.wrapper.setOptions(this.options);
            this.wrapper.setDataTable(dt);
            this.wrapper.draw(this.HTMLel);
        });
    }
    getDataTable() {
        return this.dataTable;
    }
    draw(value) {
        if (value === undefined) {
            value = this.data;
        }
        this.options = value.options;
        this.dataTable.init(value);
    }
    getSelectorBySeriesType(seriesType) {
        const selectors = {
            bars: 'bar#%s#%r',
            haxis: 'hAxis#0#label',
            line: 'point#%s#%r',
            legend: 'legendentry#%s',
            area: 'point#%s#%r'
        };
        const selector = selectors[seriesType];
        return selector;
    }
    /**
     * Given a column number, counts how many
     * columns have rol=="data". Those are mapped
     * one-to-one to the series array. When rol is not defined
     * a column of type number means a series column.
     * @param column to inspect
     */
    getSeriesByColumn(column) {
        let series = 0;
        const dataTable = this.wrapper.getDataTable();
        for (let i = column - 1; i >= 0; i--) {
            const role = dataTable.getColumnRole(i);
            const type = dataTable.getColumnType(i);
            if (role === 'data' || type === 'number') {
                series++;
            }
        }
        return series;
    }
    getBoundingBoxForItem(item) {
        let boundingBox = { top: 0, left: 0, width: 0, height: 0 };
        if (this.cli) {
            const column = item.column;
            const series = this.getSeriesByColumn(column);
            const row = item.row;
            let seriesType = this.options.seriesType;
            if (this.options.series && this.options.series[series] && this.options.series[series].type) {
                seriesType = this.options.series[series].type;
            }
            if (seriesType) {
                let selector = this.getSelectorBySeriesType(seriesType);
                if (selector) {
                    selector = selector.replace('%s', series + '').replace('%c', column + '').replace('%r', row + '');
                    const box = this.cli.getBoundingBox(selector);
                    if (box) {
                        boundingBox = box;
                    }
                }
            }
        }
        return boundingBox;
    }
    getValueAtPosition(position) {
        if (position.row == null) {
            return null;
        }
        const dataTable = this.wrapper.getDataTable();
        const value = dataTable.getValue(position.row, position.column);
        return value;
    }
    getColumnTypeAtPosition(position) {
        const dataTable = this.wrapper.getDataTable();
        const type = dataTable.getColumnType(position.column) || '';
        return type;
    }
    getColumnLabelAtPosition(position) {
        const dataTable = this.wrapper.getDataTable();
        const type = dataTable.getColumnLabel(position.column) || '';
        return type;
    }
    getHTMLTooltip() {
        const tooltipER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"](this.el.nativeElement.querySelector('.google-visualization-tooltip'));
        return new ChartHTMLTooltip(tooltipER);
    }
    parseMouseEvent(item) {
        const chartType = this.wrapper.getChartType();
        let eventColumn = item.column;
        if (eventColumn == null) {
            switch (chartType) {
                case 'Timeline':
                    eventColumn = this.wrapper.getDataTable().getNumberOfColumns() === 3 ? 0 : 1;
                    break;
                default:
                    eventColumn = 0;
            }
        }
        const eventRow = item.row;
        const myItem = {
            row: eventRow,
            column: eventColumn
        };
        const event = {
            position: item,
            boundingBox: this.getBoundingBoxForItem(myItem),
            value: this.getValueAtPosition(myItem),
            columnType: this.getColumnTypeAtPosition(myItem),
            columnLabel: this.getColumnLabelAtPosition(myItem)
        };
        return event;
    }
    unregisterEvents() {
        google.visualization.events.removeAllListeners(this.wrapper.getChart());
        google.visualization.events.removeAllListeners(this.wrapper);
    }
    registerChartEvents() {
        const chart = this.wrapper.getChart();
        this.cli = chart.getChartLayoutInterface ? chart.getChartLayoutInterface() : null;
        if (this.mouseOver.observers.length > 0) {
            google.visualization.events.addListener(chart, 'onmouseover', (item) => {
                const event = this.parseMouseEvent(item);
                event.tooltip = this.getHTMLTooltip();
                this.mouseOver.emit(event);
            });
        }
        if (this.mouseOverOneTime.observers.length > 0) {
            google.visualization.events.addOneTimeListener(chart, 'onmouseover', (item) => {
                const event = this.parseMouseEvent(item);
                event.tooltip = this.getHTMLTooltip();
                this.mouseOverOneTime.emit(event);
            });
        }
        if (this.mouseOut.observers.length > 0) {
            google.visualization.events.addListener(chart, 'onmouseout', (item) => {
                const event = this.parseMouseEvent(item);
                this.mouseOut.emit(event);
            });
        }
        if (this.mouseOutOneTime.observers.length > 0) {
            google.visualization.events.addOneTimeListener(chart, 'onmouseout', (item) => {
                const event = this.parseMouseEvent(item);
                this.mouseOutOneTime.emit(event);
            });
        }
        if (this.data.chartType === 'GeoChart') {
            if (this.regionClick.observers.length > 0) {
                google.visualization.events.addListener(chart, 'regionClick', (item) => {
                    this.regionClick.emit(item);
                });
            }
            if (this.regionClickOneTime.observers.length > 0) {
                google.visualization.events.addOneTimeListener(chart, 'regionClick', (item) => {
                    this.regionClick.emit(item);
                });
            }
        }
    }
    registerChartWrapperEvents() {
        google.visualization.events.addListener(this.wrapper, 'ready', () => {
            this.chartReady.emit({ message: 'Chart ready' });
        });
        google.visualization.events.addOneTimeListener(this.wrapper, 'ready', () => {
            this.chartReadyOneTime.emit({ message: 'Chart ready (one time)' });
            this.registerChartEvents();
        });
        google.visualization.events.addListener(this.wrapper, 'error', (error) => {
            this.chartError.emit(error);
        });
        google.visualization.events.addOneTimeListener(this.wrapper, 'error', (error) => {
            this.chartErrorOneTime.emit(error);
        });
        this.addListener(this.wrapper, 'select', this.selectListener, this.chartSelect);
        this.addOneTimeListener(this.wrapper, 'select', this.selectListener, this.chartSelectOneTime);
    }
    addListener(source, eventType, listenerFn, evEmitter) {
        google.visualization.events.addListener(source, eventType, () => {
            evEmitter.emit(listenerFn());
        });
    }
    addOneTimeListener(source, eventType, listenerFn, evEmitter) {
        google.visualization.events.addOneTimeListener(source, eventType, () => {
            evEmitter.emit(listenerFn());
        });
    }
    convertOptions() {
        try {
            this.options = google.charts[this.data.chartType].convertOptions(this.options);
        }
        catch (error) {
            return;
        }
    }
};
GoogleChartComponent.ɵfac = function GoogleChartComponent_Factory(t) { return new (t || GoogleChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService)); };
GoogleChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GoogleChartComponent, selectors: [["google-chart"]], inputs: { data: "data" }, outputs: { chartSelect: "chartSelect", chartSelectOneTime: "chartSelectOneTime", chartReady: "chartReady", chartReadyOneTime: "chartReadyOneTime", chartError: "chartError", chartErrorOneTime: "chartErrorOneTime", mouseOver: "mouseOver", mouseOverOneTime: "mouseOverOneTime", mouseOut: "mouseOut", mouseOutOneTime: "mouseOutOneTime", regionClick: "regionClick", regionClickOneTime: "regionClickOneTime" }, decls: 1, vars: 0, template: function GoogleChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
    } }, encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], GoogleChartComponent.prototype, "data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartReady", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartReadyOneTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartError", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartErrorOneTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "chartSelectOneTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "mouseOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "mouseOverOneTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "mouseOut", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "mouseOutOneTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "regionClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GoogleChartComponent.prototype, "regionClickOneTime", void 0);
GoogleChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        GoogleChartsLoaderService])
], GoogleChartComponent);

let GoogleChartsDashboardComponent = class GoogleChartsDashboardComponent {
    constructor(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
        this.el = el;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.data.component = this;
        this.init().then(() => {
            if (!this.dataTable) {
                this.dataTable = new GoogleChartsDataTable(this.data);
                this.dataTable.dataTableChanged.subscribe((dt) => {
                    this._draw();
                });
            }
            this.draw();
        });
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loaderService.load({ packages: ['controls'] });
            this.dashboard = new google.visualization.Dashboard(this.el.nativeElement.querySelector('div'));
            for (const b of this.data.bind) {
                let controls = b[0];
                let charts = b[1];
                if (!(controls instanceof Array)) {
                    controls = [controls];
                }
                if (!(charts instanceof Array)) {
                    charts = [charts];
                }
                for (const c of controls) {
                    yield c.component.ensureInit();
                }
                for (const c of charts) {
                    yield c.component.init();
                    const data = c.component.data;
                    if (data.dataTable !== undefined || data.dataSourceUrl !== undefined) {
                        throw Error('dataTable and dataSourceUrl cannot be specified when ' +
                            'chart is drawn in a Dashboard');
                    }
                }
                this.dashboard.bind(controls.map(x => x.component.wrapper), charts.map(x => x.component.wrapper));
            }
        });
    }
    draw(value) {
        this.dataTable.init(value);
    }
    _draw() {
        this.dashboard.draw(this.dataTable.getDataTable());
    }
};
GoogleChartsDashboardComponent.ɵfac = function GoogleChartsDashboardComponent_Factory(t) { return new (t || GoogleChartsDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService)); };
GoogleChartsDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GoogleChartsDashboardComponent, selectors: [["google-charts-dashboard"]], inputs: { data: "data" }, decls: 1, vars: 0, template: function GoogleChartsDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
    } }, encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], GoogleChartsDashboardComponent.prototype, "data", void 0);
GoogleChartsDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        GoogleChartsLoaderService])
], GoogleChartsDashboardComponent);

let GoogleChartsControlComponent = class GoogleChartsControlComponent {
    constructor(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
        this.el = el;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.data.component = this;
    }
    ensureInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.wrapper) {
                return;
            }
            yield this.loaderService.load({ packages: ['controls'] });
            let opt;
            opt = Object.create(this.data);
            opt.containerId = this.el.nativeElement.querySelector('div');
            this.wrapper = new google.visualization.ControlWrapper(opt);
        });
    }
};
GoogleChartsControlComponent.ɵfac = function GoogleChartsControlComponent_Factory(t) { return new (t || GoogleChartsControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleChartsLoaderService)); };
GoogleChartsControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GoogleChartsControlComponent, selectors: [["google-charts-control"]], inputs: { data: "data" }, decls: 1, vars: 0, template: function GoogleChartsControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
    } }, encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], GoogleChartsControlComponent.prototype, "data", void 0);
GoogleChartsControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        GoogleChartsLoaderService])
], GoogleChartsControlComponent);

let Ng2GoogleChartsModule = class Ng2GoogleChartsModule {
};
Ng2GoogleChartsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Ng2GoogleChartsModule });
Ng2GoogleChartsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function Ng2GoogleChartsModule_Factory(t) { return new (t || Ng2GoogleChartsModule)(); }, providers: [
        GoogleChartsLoaderService
    ] });

function isComponent(chart) {
    return chart.wrapper !== undefined;
}
let GoogleChartEditor = class GoogleChartEditor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    createEditor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.chartEditor !== undefined) {
                return;
            }
            yield this.loaderService.load({ packages: ['charteditor'] });
            this.chartEditor = new google.visualization.ChartEditor();
            google.visualization.events.addListener(this.chartEditor, 'ok', () => {
                const wrapper = this.chartEditor.getChartWrapper();
                this.comp.wrapper = wrapper;
                this.comp.data.chartType = wrapper.getChartType();
                if (this.comp.data.options !== undefined || Object.isExtensible(this.comp.data)) {
                    this.comp.data.options = wrapper.getOptions();
                }
                this.comp.wrapper.draw();
            });
        });
    }
    openDialog(chart, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.createEditor();
            return new Promise((resolve, reject) => {
                this.comp = isComponent(chart) ? chart : chart.component;
                this.chartEditor.openDialog(this.comp.wrapper, options);
                google.visualization.events.addListener(this.chartEditor, 'ok', () => {
                    resolve(this.comp.wrapper);
                });
                google.visualization.events.addListener(this.chartEditor, 'cancel', () => {
                    reject();
                });
            });
        });
    }
};
GoogleChartEditor.ɵfac = function GoogleChartEditor_Factory(t) { return new (t || GoogleChartEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleChartsLoaderService)); };
GoogleChartEditor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GoogleChartEditor_Factory() { return new GoogleChartEditor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(GoogleChartsLoaderService)); }, token: GoogleChartEditor, providedIn: "root" });
GoogleChartEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleChartsLoaderService])
], GoogleChartEditor);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: ['googleChartsSettings']
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, null); })();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'google-chart',
                template: '<div></div>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GoogleChartsLoaderService }]; }, { chartSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartSelectOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartReadyOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], chartErrorOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOverOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOutOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], regionClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], regionClickOneTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'google-charts-dashboard',
                template: '<div></div>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GoogleChartsLoaderService }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartsControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'google-charts-control',
                template: '<div></div>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GoogleChartsLoaderService }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Ng2GoogleChartsModule, { declarations: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent], exports: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2GoogleChartsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    GoogleChartComponent,
                    GoogleChartsDashboardComponent,
                    GoogleChartsControlComponent,
                ],
                providers: [
                    GoogleChartsLoaderService
                ],
                exports: [
                    GoogleChartComponent,
                    GoogleChartsDashboardComponent,
                    GoogleChartsControlComponent,
                ]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleChartEditor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: GoogleChartsLoaderService }]; }, null); })();

/*
 * Public API Surface of ng2-google-charts
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-google-charts.js.map

/***/ }),

/***/ "./src/app/theme/chart/google-chart/google-chart-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/chart/google-chart/google-chart-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: GoogleChartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartRoutingModule", function() { return GoogleChartRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _google_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-chart.component */ "./src/app/theme/chart/google-chart/google-chart.component.ts");





const routes = [
    {
        path: '',
        component: _google_chart_component__WEBPACK_IMPORTED_MODULE_2__["GoogleChartComponent"],
        data: {
            title: 'Google Charts',
            icon: 'icon-bar-chart-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - google chart',
            status: true
        }
    }
];
class GoogleChartRoutingModule {
}
GoogleChartRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GoogleChartRoutingModule });
GoogleChartRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GoogleChartRoutingModule_Factory(t) { return new (t || GoogleChartRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GoogleChartRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/chart/google-chart/google-chart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/chart/google-chart/google-chart.component.ts ***!
  \********************************************************************/
/*! exports provided: GoogleChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function() { return GoogleChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/__ivy_ngcc__/fesm2015/ng2-google-charts.js");




class GoogleChartComponent {
    constructor() {
        this.areaChartData = {
            chartType: 'AreaChart',
            dataTable: [
                ['Year', 'Sales', 'Expenses'],
                ['2013', 1000, 400],
                ['2014', 1170, 460],
                ['2015', 660, 1120],
                ['2016', 1030, 540]
            ],
            options: {
                vAxis: { minValue: 0 },
                colors: ['#01C0C8', '#FB9678'],
                height: 300
            },
        };
        this.stackingAreaChartData = {
            chartType: 'AreaChart',
            dataTable: [
                ['Year', 'Sales', 'Expenses'],
                ['2013', 1000, 400],
                ['2014', 1170, 460],
                ['2015', 660, 1120],
                ['2016', 1030, 540]
            ],
            options: {
                isStacked: true,
                height: 300,
                legend: { position: 'top', maxLines: 3 },
                vAxis: { minValue: 0 },
                colors: ['#2ecc71', '#5faee3']
            },
        };
        this.barChartData = {
            chartType: 'BarChart',
            dataTable: [
                ['City', '2010 Population', '2000 Population'],
                ['New York City, NY', 8175000, 8008000],
                ['Los Angeles, CA', 3792000, 3694000],
                ['Chicago, IL', 2695000, 2896000],
                ['Houston, TX', 2099000, 1953000],
                ['Philadelphia, PA', 1526000, 1517000]
            ],
            options: {
                height: 300,
                title: 'Population of Largest U.S. Cities',
                chartArea: { width: '50%' },
                isStacked: true,
                hAxis: {
                    title: 'Total Population',
                    minValue: 0,
                },
                vAxis: {
                    title: 'City'
                },
                colors: ['#2ecc71', '#5faee3']
            },
        };
        this.bubbleChartData = {
            chartType: 'BubbleChart',
            dataTable: [
                ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
                ['CAN', 80.66, 1.67, 'North America', 33739900],
                ['DEU', 79.84, 1.36, 'Europe', 81902307],
                ['DNK', 78.6, 1.84, 'Europe', 5523095],
                ['EGY', 72.73, 2.78, 'Middle East', 79716203],
                ['GBR', 80.05, 2, 'Europe', 61801570],
                ['IRN', 72.49, 1.7, 'Middle East', 73137148],
                ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
                ['ISR', 81.55, 2.96, 'Middle East', 7485600],
                ['RUS', 68.6, 1.54, 'Europe', 141850000],
                ['USA', 78.09, 2.05, 'North America', 307007000]
            ],
            options: {
                height: 300,
                title: 'Correlation between life expectancy, fertility rate ' +
                    'and population of some world countries (2010)',
                hAxis: { title: 'Life Expectancy' },
                vAxis: { title: 'Fertility Rate' },
                bubble: { textStyle: { fontSize: 11 } },
                colors: ['#2ecc71', '#5faee3', '#DD4B39']
            },
        };
        this.comboChartData = {
            chartType: 'ComboChart',
            dataTable: [
                ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
                ['2004/05', 165, 938, 522, 998, 450, 614.6],
                ['2005/06', 135, 1120, 599, 1268, 288, 682],
                ['2006/07', 157, 1167, 587, 807, 397, 623],
                ['2007/08', 139, 1110, 615, 968, 215, 609.4],
                ['2008/09', 136, 691, 629, 1026, 366, 569.6]
            ],
            options: {
                height: 300,
                title: 'Monthly Coffee Production by Country',
                vAxis: { title: 'Cups' },
                hAxis: { title: 'Month' },
                seriesType: 'bars',
                series: { 5: { type: 'line' } },
                colors: ['#2ecc71', '#01C0C8', '#FB9678', '#5faee3', '#f4d03f', '#e74c3c']
            },
        };
        this.donutChartData = {
            chartType: 'PieChart',
            dataTable: [
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7]
            ],
            options: {
                height: 300,
                title: 'My Daily Activities',
                pieHole: 0.4,
                colors: ['#2ecc71', '#01C0C8', '#FB9678', '#5faee3', '#f4d03f']
            },
        };
        this.exploadingChartData = {
            chartType: 'PieChart',
            dataTable: [
                ['Language', 'Speakers (in millions)'],
                ['Assamese', 13],
                ['Bengali', 83],
                ['Bodo', 1.4],
                ['Dogri', 2.3],
                ['Gujarati', 46],
                ['Hindi', 300],
                ['Kannada', 38],
                ['Kashmiri', 5.5],
                ['Konkani', 5],
                ['Maithili', 20],
                ['Malayalam', 33],
                ['Manipuri', 1.5],
                ['Marathi', 72],
                ['Nepali', 2.9],
                ['Oriya', 33]
            ],
            options: {
                height: 300,
                title: 'Indian Language Use',
                legend: 'none',
                pieSliceText: 'label',
                slices: {
                    4: { offset: 0.2 },
                    12: { offset: 0.3 },
                    14: { offset: 0.4 },
                    15: { offset: 0.5 },
                },
                colors: ['#2ecc71', '#01C0C8', '#FB9678', '#5faee3', '#f4d03f', '#e74c3c']
            },
        };
        this.tableChartData = {
            chartType: 'Table',
            dataTable: [
                ['Department', 'Revenues', 'Another column'],
                ['Shoes', 10700, -100],
                ['Sports', -15400, 25],
                ['Toys', 12500, 40],
                ['Electronics', -2100, 889],
                ['Food', 22600, 78],
                ['Art', 1100, 42]
            ],
            formatters: [
                {
                    columns: [1, 2],
                    type: 'NumberFormat',
                    options: {
                        prefix: '&euro;', negativeColor: 'red', negativeParens: true
                    }
                }
            ],
            options: {
                height: 300,
                title: 'Countries',
                allowHtml: true
            }
        };
    }
    ngOnInit() {
    }
}
GoogleChartComponent.ɵfac = function GoogleChartComponent_Factory(t) { return new (t || GoogleChartComponent)(); };
GoogleChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoogleChartComponent, selectors: [["app-google-chart"]], decls: 26, vars: 25, consts: [[1, "page-body"], [1, "row"], [1, "col-sm-6"], [3, "title", "headerContent"], [3, "data"], [3, "title", "headerContent", "blockClass"]], template: function GoogleChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "google-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "google-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "google-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "google-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "google-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "google-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "google-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "google-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Area Chart")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.areaChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "STACKING AREA CHART")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.stackingAreaChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "BAR CHART")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.barChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "BUBBLE CHART")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.bubbleChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "COMBO CHART")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.comboChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "DONUT CHART")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.donutChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "EXPLOADING A SLICE CHART")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.exploadingChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Table Chart")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit")("blockClass", "text-center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.tableChartData);
    } }, directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_2__["GoogleChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NoYXJ0L2dvb2dsZS1jaGFydC9nb29nbGUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-google-chart',
                templateUrl: './google-chart.component.html',
                styleUrls: ['./google-chart.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/chart/google-chart/google-chart.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/chart/google-chart/google-chart.module.ts ***!
  \*****************************************************************/
/*! exports provided: GoogleChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartModule", function() { return GoogleChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _google_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-chart.component */ "./src/app/theme/chart/google-chart/google-chart.component.ts");
/* harmony import */ var _google_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-chart-routing.module */ "./src/app/theme/chart/google-chart/google-chart-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/__ivy_ngcc__/fesm2015/ng2-google-charts.js");







class GoogleChartModule {
}
GoogleChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GoogleChartModule });
GoogleChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GoogleChartModule_Factory(t) { return new (t || GoogleChartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _google_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__["GoogleChartRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__["Ng2GoogleChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GoogleChartModule, { declarations: [_google_chart_component__WEBPACK_IMPORTED_MODULE_2__["GoogleChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _google_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__["GoogleChartRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__["Ng2GoogleChartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _google_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__["GoogleChartRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    ng2_google_charts__WEBPACK_IMPORTED_MODULE_5__["Ng2GoogleChartsModule"]
                ],
                declarations: [_google_chart_component__WEBPACK_IMPORTED_MODULE_2__["GoogleChartComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=google-chart-google-chart-module.js.map