/**
 *  @Author : Dinesh shah (dinesh.shah@kahunasystems.com).
 *  @description : WebService http request methods.
 */
import {Injectable, Optional} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {WebServiceConfig} from './webserviceconfig';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Url} from './url-constants';

@Injectable()
export class WebService {
  public serverUrl = '';
  fileUploadProgress = new Subject();


  constructor(@Optional() config: WebServiceConfig, public _http: HttpClient, public router: Router) {
    if (config) {
      this.serverUrl = config.serverUrl;
    }
  }


  getProgressObservable() {
    return this.fileUploadProgress;
  }

  /***
   * @Author : Dinesh shah (dinesh.shah@kahunasystems.com)
   * @description : Http Get Request.
   * @param endPoint
   * @returns {Observable<R>}
   */
  get(endPoint: string, backendUrl?: string): Observable<any> {
    return this._http.get(this.getFullUrl(endPoint, backendUrl), this.getRequestHeaderHTTPClient());
  }

  /***
   * @Author : Shivani Gajjar (shivani.gajjar@kahunasystems.com)
   * @description : Http Get Request with params in url.
   * @param endPoint
   * @param params
   * @returns {Observable<R>}
   */
  getWithParams(endPoint: string, params: any, backendUrl?: string): Observable<any> {
    return this._http.get(this.getFullUrl(endPoint, backendUrl),
      this.getRequestHeaderHTTPClient('', params));
  }

  /***
   * @Author : Shivani Gajjar (shivani.gajjar@kahunasystems.com)
   * @description : Http PUT Request with params in url.
   * @param endPoint
   * @param params
   * @returns {Observable<R>}
   */
  put(endPoint: string, data?: any, params?: any, backendUrl?: string): Observable<any> {
    if (data === '') {
      data = {};
    }
    return this._http.put(this.getFullUrl(endPoint, backendUrl), data,
      this.getRequestHeaderHTTPClient());

  }

  /***
   * @Author : Shivani Gajjar (shivani.gajjar@kahunasystems.com)
   * @description : Http Get Request without checking code for session expire.
   * @param endPoint
   * @returns {Observable<R>}
   */
  getDataWithoutCode(endPoint: string, backendUrl?: string): Observable<any> {
    return this._http.get(this.getFullUrl(endPoint, backendUrl), this.getRequestHeaderHTTPClient());

  }

  /***
   * @Author : Shivani Gajjar (shivani.gajjar@kahunasystems.com)
   * @description : Http Get Request by complete url.
   * @param endPoint
   * @returns {Observable<R>}
   */
  getFromUrl(endPoint: string): Observable<any> {
    // this.loaderService.show();
    return this._http.get(endPoint, this.getRequestHeaderHTTPClient());

  }

  /***
   * @Author : Shivani Gajjar (shivani.gajjar@kahunasystems.com)
   * @description : Http Get Request by complete url.
   * @param endPoint
   * @returns {Observable<R>}
   */
  getFromUrlPostMethod(endPoint: string, data): Observable<any> {
    // this.loaderService.show();
    return this._http.post(endPoint, data, this.getRequestHeaderHTTPClient());

  }

  /**
   * @Author : Dinesh shah (dinesh.shah@kahunasystems.com)
   * @description : Http POst Request.
   * @param endPoint
   * @param data
   * @returns {Observable<R>}
   */
  post(endPoint: string, data: any, backendUrl?: string): Observable<any> {

    return this._http.post(this.getFullUrl(endPoint, backendUrl), data, this.getRequestHeaderHTTPClient());

  }

  /**
   * @author: Ganeshram Kumhar (ganeshram.kumhar@kahunasystems.com)
   * @description : Get the value of param for dashboard widget
   * @param endPoint
   * @param data
   * @return {observer}
   */
  postFromUrl(endPoint: string, data: any): Observable<any> {

    return this._http.post(endPoint, data, this.getRequestHeaderHTTPClient());

  }


  /**
   * @author: Dinesh shah (dinesh.shah@kahunasystems.com)
   * @description : multipart file upload with progress event.
   * @param endPoint
   * @param formData
   * @param backendUrl
   * @return {observer}
   */
  multipartFileUpload(endPoint: string, formData: FormData, data?: any, backendUrl?: string) {
    const requestOptions = this.getRequestHeaderHTTPClient();
    return Observable.create((observer: any) => {
      const xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(JSON.parse(xhr.response));
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };
      xhr.upload.onprogress = (event) => {
        const progress = Math.round(event.loaded / event.total * 100);
        this.fileUploadProgress.next(progress);
      };
      xhr.open('POST', this.getFullUrl(endPoint, backendUrl), true);
      /*xhr.setRequestHeader('Authorization', requestOptions.headers.get('Authorization'));
      xhr.setRequestHeader('language', requestOptions.headers.get('language'));*/
      xhr.send(formData);
    });
  }

  /**
   * @author: Dinesh shah (dinesh.shah@kahunasystems.com)
   * @description : multipart file upload with progress event.
   * @param endPoint
   * @param formData
   * @param backendUrl
   * @return {observer}
   */
  multipartFileUploadForPUT(endPoint: string, formData: FormData, data?: any, backendUrl?: string) {
    const requestOptions = this.getRequestHeaderHTTPClient();
    return Observable.create((observer: any) => {
      const xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(JSON.parse(xhr.response));
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };
      xhr.upload.onprogress = (event) => {
        const progress = Math.round(event.loaded / event.total * 100);
        this.fileUploadProgress.next(progress);
      };
      xhr.open('PUT', this.getFullUrl(endPoint, backendUrl), true);
      /*xhr.setRequestHeader('Authorization', requestOptions.headers.get('Authorization'));
      xhr.setRequestHeader('language', requestOptions.headers.get('language'));*/
      xhr.send(formData);
    });
  }


  /**
   * Build API url.
   * @param url
   * @returns {string}
   */
  public getFullUrl(url: string, backendUrl?: string): string {
    if (backendUrl) {
      return backendUrl + url;
    }
    return Url.serverUrl + url;
  }


  /**
   * @author Isha Dhimar (isha.dhimar@kahunasystems.com)
   * @description Http Delete request
   * @param {string} endPoint
   * @param data
   * @param {string} backendUrl
   * @returns {Observable<any>}
   */
  delete(endPoint: string, data?: any, backendUrl?: string) {
    // return this._http.delete(this.getFullUrl(endPoint, backendUrl), this.getRequestHeaderHTTPClient(data));
    return this._http.request('delete', this.getFullUrl(endPoint, backendUrl), this.getRequestHeaderHTTPClient(data));
  }

  private getRequestHeaderHTTPClient(data?: any, params?: any) {
    const request: any = {
      headers: new HttpHeaders(),
      body: data,
      params: new HttpParams({fromObject: params})
    };
    return request;
  }
}
