import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import store from 'store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    public authService: AuthService,
    public toster: ToastrService
  ) {
    //
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.authService.apiToken) {
      return next.handle(req);
    }
    let headers = req.headers.set('Authorization', `Bearer ${this.authService.apiToken}`);

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: headers
    });

    // send cloned request with header to the next handler.
    // return next.handle(authReq);
    return next.handle(authReq).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        // console.log(event);
        if (event.status < 200 && event.status > 201) {
          this.toster.error('Something Went wrong', '')
        }
        // this.loadingService.loading = false;
        // console.log(this.loadingService.loading)
      }
    }, (err: any) => {
      // this.loadingService.loading = false;
      // this.toster.error('Something Went wrong', 'Server Side');
      // console.log(err.error.result)

      console.log(err);
      if (err.status == 401) {
        // this.toster.error('You need to login', 'Unauthorized');
        // location.reload()
        // return this.router.navigateByUrl('/login');
      }
      // this.toster.error((err.error.result ?.msg ? err.error.result.msg : "Something Went Wrong"), 'Server Side');
    }
    ));
  }

}
