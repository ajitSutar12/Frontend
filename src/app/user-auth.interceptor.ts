import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { ConnectionService } from 'ng-connection-service';
import { Observable, Observer, fromEvent, merge, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import Swal from "sweetalert2";
// import jwt_decode from 'jwt-decode';
import { AuthService } from '../app/theme/auth/auth.service'


@Injectable()
export class UserAuthInterceptor implements HttpInterceptor {


  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.createOnline$().subscribe(async function (isOnline) {
      let data = await isOnline;
      if (data == false) {
        Swal.fire("Warning!", "Please check your internet connection !", "warning");
        return false;
      }
    });
    let token = localStorage.getItem('token');
    let checkrequest
    // if (request.url.includes('dayHandOverCheck') || request['url'].toString().includes('dayHandOverCheck')) {
    //   checkrequest = true
    //   return next.handle(request);
    // }
    // else {
    //   checkrequest = false
    //   let isExpired = this.isTokenExpired(token)
    //   if (isExpired && checkrequest == false) {
    //     this.authService.refreshAccessToken(token).subscribe(data => {
    //       this.authService.setAccessToken(data.accessToken);
    //     })
    //     return next.handle(request);
    //     // return next.handle(request).pipe(
    //     //   tap(event => {
    //     //     if (event instanceof HttpResponse) {
    //     //       // Handle successful response
    //     //       const responseData = event.body;
    //     //       // Perform actions with the response data
    //     //     }
    //     //   }),
    //     //   catchError(error => {
    //     //     // Handle error response
    //     //     if (error instanceof HttpErrorResponse) {
    //     //       // Perform actions based on the error
    //     //     }
    //     //     return throwError(error);
    //     //   })
    //     // );
    //   }
    // return next.handle(request);
    // }
    // if (isExpired) {
    //   console.log(request)
    // }

    request = request.clone({
      setHeaders: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(request);
  }

  ngOnInit() {
    this.createOnline$().subscribe(isOnline => console.log(isOnline));
  }

  createOnline$() {
    return merge<boolean>(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      }));
  }

  // isTokenExpired(token: string): boolean {
  //   try {
  //     const decodedToken: any = jwt_decode(token);
  //     const currentTime = Math.floor(Date.now() / 1000);
  //     return decodedToken.exp < currentTime;
  //   } catch (error) {
  //     // Handle token decoding error
  //     console.error('Error decoding token:', error);
  //     // return true; // Treat the token as expired in case of an error
  //   }
  // }
}
