import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
// import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  base_url = environment.base_url;

  constructor(private http: HttpClient) { }

  login(article: any): Observable<any> {
    console.log(this.base_url);
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post<any>(this.base_url + '/auth/login', article, options);
  }

  resetPassword(data: any): Observable<any> {
    return this.http.post<any>(this.base_url + '/user-defination/resetpassword', data);
    // return this.http.post<any>('http://192.168.1.128:7276/user-defination/resetpassword', data);
  }

  logout(id: any): Observable<any> {
    return this.http.post<any>(this.base_url + '/user-defination/logout', { id: id });
  }

  loginuserupdate(id: any): Observable<any> {
    return this.http.post<any>(this.base_url + '/user-defination/login', { id: id });
  }

  LOGINHISTORY(data: any): Observable<any> {
    return this.http.post<any>(this.base_url + '/user-defination/loginhistory', data);
  }
  LOGOFFHISTORY(data: any): Observable<any> {
    return this.http.post<any>(this.base_url + '/user-defination/logoffhistory', data);
  }
  findOutLogin(data: any): Observable<any> {
    return this.http.post<any>(this.base_url + '/user-defination/findLogin', data);
  }

  showNotificationuserwise(data: any): Observable<any> {
    return this.http.post<any>(this.base_url + '/user-defination/showNotificationuserwise', data);
  }

  updateinactiveUser(data: any): Observable<any> {
    return this.http.post<any>(this.base_url + '/user-defination/updateinactiveUser', data);
  }
  // isLoggedIn(){
  //   return !!localStorage.getItem('token')
  // }

  private readonly accessTokenKey = 'token';
  private readonly refreshTokenKey = 'refresh_token';



  getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey);
  }

  setAccessToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey);
  }

  setRefreshToken(token: string): void {
    localStorage.setItem(this.refreshTokenKey, token);
  }

  refreshAccessToken(refreshToken: string): Observable<any> {
    const refreshTokenPayload = { refreshToken };
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    const payload = { username: result.USER_NAME, sub: result.id, refreshToken };

    return this.http.post<any>(this.base_url + `/refresh-token`, payload);
  }

  private otpSubject = new BehaviorSubject<any>(null);

  setOTP(value: any) {
    this.otpSubject.next(value);
  }

  getOTP() {
    return this.otpSubject.asObservable();
  }
}
