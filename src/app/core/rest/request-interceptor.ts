import {HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
@Injectable({providedIn: 'root'})
export class RequestInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let tokenValue = localStorage.getItem('accessToken');
    const headerConfig = {};
    if (tokenValue) {
      headerConfig['Authorization'] = `Bearer ${tokenValue}`;
    }
    headerConfig['Access-Control-Allow-Methods'] = 'GET, POST';
    headerConfig['Access-Control-Allow-Headers'] = 'X-Requested-With,content-type';
    headerConfig['Access-Control-Allow-Origin'] = '*';
    headerConfig['Access-Control-Allow-Credentials'] = 'true';

    request = request.clone({
      setHeaders: headerConfig
    });
    return next.handle(request);
  }
}
