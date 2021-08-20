import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { Constant } from '../config/constant';
import {Injectable} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from "../auth/auth.service";
import {SharedPreferences} from "../config/shared-preferences";
@Injectable({providedIn: 'root'})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(catchError(err => {
      let error = err.error?.message || err.error?.statusText;
      // this.toastr.error(err.error.message, "Lỗi");
      if (err.status === 403) {
        // call logout
        // this.authService.logout();
        // this.router.navigate(['/login']);
      } else if (err.status === 0) {
        error = 'Internal Error Server';
      } else if (err.status === Constant.ERROR_STATUS.BAD_REQUEST) {
        return throwError(err);
      } else if (err.status === Constant.ERROR_STATUS.SERVER_ERROR) {
        return throwError(err);
      }
       else if (err.status == Constant.ERROR_STATUS.INPUT_ERROR) {
        return throwError(err);
      } else {
        error = err.error.message || err.error.statusText;
      }

      if (err.status != 404) {
        if (error != undefined && error != null) {
          this.toastr.error(error);
        }
        return throwError(err);
      }
      SharedPreferences.IS_LOADING_CONTEN = false;
      // return throwError(error);
      if (error != undefined && error != null) {
        this.toastr.error(error);
      }
      return throwError(err);
    }));
  }
}
