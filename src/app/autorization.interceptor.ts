import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment.development';

export const autorizationInterceptor: HttpInterceptorFn = (req, next) => {
  
  if(req.url != environment.url + "/auth") {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`
      }
    });
    return next(authReq)
  }
  return next(req);
};
