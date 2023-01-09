import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  baseUrl = 'http://localhost:9090/';
  constructor(private readonly _http: HttpClient, private readonly authService: AuthService) {
  }
  getTypeRequest(url: any) {
    return this._http.get(`${this.baseUrl}${url}`).pipe(map(res => {
      return res;
    }));
  }
  getType2Request(url: any) {
    return this._http.get(`${this.baseUrl}${url}`, { responseType: 'text' }).pipe(
      switchMap(async (xml: any) => await this['parseXmlToJson'](xml))
    );
  }
  deleteTypeRequest(url: any) {
    return this._http.delete(`${this.baseUrl}${url}`).pipe(map(res => {
      return res;
    }));
  }
  postTypeRequest(url: any, payload: any) {
    return this._http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }
  postType2Request(url: any, payload: any) {
    return this._http.post(`${this.baseUrl}${url}`, payload, {responseType: 'text'}).pipe(map(res => {
      return res;
    }));
  }
  putTypeRequest(url: any, payload: any) {
    return this._http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }
}
