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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  @Author : Dinesh shah (dinesh.shah@kahunasystems.com).
 *  @description : WebService http request methods.
 */
var core_1 = require("@angular/core");
var webserviceconfig_1 = require("./webserviceconfig");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
var UserSerivce_1 = require("../authentication/UserSerivce");
var url_constants_1 = require("./url-constants");
var router_1 = require("@angular/router");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var ng2_translate_1 = require("ng2-translate");
var loader_service_1 = require("../core/loader/loader.service");
var Subject_1 = require("rxjs/Subject");
var http_2 = require("@angular/http");
var WebService = (function () {
    function WebService(config, _http, userService, router, translateService, loaderService) {
        this._http = _http;
        this.userService = userService;
        this.router = router;
        this.translateService = translateService;
        this.loaderService = loaderService;
        this.serverUrl = '';
        this.fileUploadProgress = new Subject_1.Subject();
        if (config) {
            this.serverUrl = config.serverUrl;
        }
    }
    WebService.prototype.getProgressObservable = function () {
        return this.fileUploadProgress;
    };
    /***
     * @Author : Dinesh shah (dinesh.shah@kahunasystems.com)
     * @description : Http Get Request.
     * @param endPoint
     * @returns {Observable<R>}
     */
    WebService.prototype.get = function (endPoint, backendUrl) {
        // this.loaderService.show();
        return this._http.get(this.getFullUrl(endPoint, backendUrl), this.getRequestOptions()).map(this.extractData).catch(this.handleError).finally(function () {
            // call completed
            /* this.loaderService.hide();*/
        });
    };
    /***
     * @Author : Shivani Gajjar (shivani.gajjar@kahunasystems.com)
     * @description : Http Get Request without checking code for session expire.
     * @param endPoint
     * @returns {Observable<R>}
     */
    WebService.prototype.getDataWithoutCode = function (endPoint, backendUrl) {
        // this.loaderService.show();
        return this._http.get(this.getFullUrl(endPoint, backendUrl), this.getRequestOptions()).map(this.extractUrlData).catch(this.handleError).finally(function () {
            // call completed
            /* this.loaderService.hide();*/
        });
    };
    /***
     * @Author : Shivani Gajjar (shivani.gajjar@kahunasystems.com)
     * @description : Http Get Request by complete url.
     * @param endPoint
     * @returns {Observable<R>}
     */
    WebService.prototype.getFromUrl = function (endPoint) {
        // this.loaderService.show();
        return this._http.get(endPoint, this.getRequestOptions()).map(this.extractUrlData).catch(this.handleError).finally(function () {
            // call completed
            // this.loaderService.hide();
        });
    };
    /***
     * @Author : Shivani Gajjar (shivani.gajjar@kahunasystems.com)
     * @description : Http Get Request by complete url.
     * @param endPoint
     * @returns {Observable<R>}
     */
    WebService.prototype.getFromUrlGoogle = function (endPoint) {
        // this.loaderService.show();
        return this._http.get(endPoint).map(function (res) {
            return res;
        }).catch(this.handleError).finally(function () {
            // call completed
            // this.loaderService.hide();
        });
    };
    /**
     * @Author : Dinesh shah (dinesh.shah@kahunasystems.com)
     * @description : Http POst Request.
     * @param endPoint
     * @param data
     * @returns {Observable<R>}
     */
    WebService.prototype.post = function (endPoint, data, backendUrl) {
        var _this = this;
        // this.loaderService.show();
        return this._http.post(this.getFullUrl(endPoint, backendUrl), data, this.getRequestOptions()).map(function (res) {
            return _this.extractData(res);
        }).catch(this.handleError).finally(function () {
        });
    };
    /**
     * @Author : Dinesh shah (dinesh.shah@kahunasystems.com)
     * @description :  Login Request.
     * @param endPoint
     * @param data
     * @returns {Observable<R>}
     *
     */
    WebService.prototype.login = function (endPoint, data, backendUrl) {
        var _this = this;
        // this.loaderService.show();
        return this._http.post(this.getFullUrl(endPoint, backendUrl), data, null).map(function (res) {
            return _this.extractData(res);
        }).catch(this.handleError).finally(function () {
        });
    };
    /**
     *
     * @description : Download Smmery to Excel File.
     * @param endPoint
     * @param backendUrl
     */
    WebService.prototype.downloadSummeryToExcel = function (endPoint, apnNo, contentType, backendUrl) {
        var apn = apnNo.toString();
        var requestOptions = new http_1.RequestOptions();
        var token = this.userService.getUserProperty('token');
        if (token != null && token.length > 0) {
            var headers = new http_1.Headers();
            headers.set('Authorization', token);
            headers.set('language', this.translateService.currentLang);
            headers.set('apnNo', apn);
            headers.set('Content-type', contentType);
            requestOptions = new http_1.RequestOptions({ headers: headers, responseType: http_2.ResponseContentType.Blob });
        }
        return this._http.get(this.getFullUrl(endPoint, backendUrl), requestOptions).map(function (res) {
            return res;
        }).catch(this.handleError).finally(function () {
        });
    };
    /**
     *
     * @description : Download Certificate file.
     * @param endPoint
     * @param backendUrl
     */
    WebService.prototype.downloadCertificate = function (endPoint, contentType, backendUrl) {
        var requestOptions = new http_1.RequestOptions();
        var token = this.userService.getUserProperty('token');
        if (token != null && token.length > 0) {
            var headers = new http_1.Headers();
            headers.set('Authorization', token);
            headers.set('language', this.translateService.currentLang);
            headers.set('Content-type', contentType);
            requestOptions = new http_1.RequestOptions({ headers: headers, responseType: http_2.ResponseContentType.Blob });
        }
        return this._http.get(this.getFullUrl(endPoint, backendUrl), requestOptions).map(function (res) {
            return res;
        }).catch(this.handleError).finally(function () {
        });
    };
    /**
     * @description : extract data from response.
     * @param res
     * @returns {any|{}}
     */
    WebService.prototype.extractData = function (res) {
        var body = res.json();
        if (body.status.code === 234) {
            var errMsg = 'session expire please login again';
            this.router.navigateByUrl('/login');
            this.loaderService.hide();
            throw Observable_1.Observable.throw(errMsg);
        }
        else {
            return body || {};
        }
    };
    WebService.prototype.extractUrlData = function (res) {
        return res.json();
    };
    /**
     * @author: Dinesh shah (dinesh.shah@kahunasystems.com)
     * @description : multipart file upload with progress event.
     * @param endPoint
     * @param formData
     * @param backendUrl
     * @return {observer}
     */
    WebService.prototype.multipartFileUpload = function (endPoint, formData, data, backendUrl) {
        var _this = this;
        var requestOptions = this.getRequestOptions();
        return Observable_1.Observable.create(function (observer) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.upload.onprogress = function (event) {
                var progress = Math.round(event.loaded / event.total * 100);
                console.log('progress ' + progress);
                _this.fileUploadProgress.next(progress);
            };
            xhr.open('POST', _this.getFullUrl(endPoint, backendUrl), true);
            xhr.setRequestHeader('Authorization', requestOptions.headers.get('Authorization'));
            xhr.setRequestHeader('language', requestOptions.headers.get('language'));
            xhr.send(formData);
        });
    };
    /**
     * @description : handel and returns error.
     * @param error
     * @returns {any}
     */
    WebService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else if (error.message) {
            errMsg = error.message ? error.message : error.toString();
        }
        else {
            errMsg = error.error ? error.error : '';
        }
        // console.log(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    /**
     * Build API url.
     * @param url
     * @returns {string}
     */
    WebService.prototype.getFullUrl = function (url, backendUrl) {
        if (backendUrl) {
            return backendUrl + url;
        }
        return url_constants_1.Url.serverUrl + url;
    };
    /**
     * get RequestOptions.
     * @returns {options}
     */
    WebService.prototype.getRequestOptions = function () {
        var requestOptions = new http_1.RequestOptions();
        var token = this.userService.getUserProperty('token');
        if (token != null && token.length > 0) {
            var headers = new http_1.Headers();
            headers.set('Authorization', token);
            headers.set('language', this.translateService.currentLang);
            requestOptions = new http_1.RequestOptions({ headers: headers });
        }
        return requestOptions;
    };
    return WebService;
}());
WebService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [webserviceconfig_1.WebServiceConfig, http_1.Http,
        UserSerivce_1.UserService, router_1.Router,
        ng2_translate_1.TranslateService, loader_service_1.LoaderService])
], WebService);
exports.WebService = WebService;
//# sourceMappingURL=webservice.js.map