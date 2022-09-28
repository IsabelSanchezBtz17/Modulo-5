import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const USERNAME: string = localStorage.getItem('username')?.toString() ?? '';
    const PASSWORD: string = localStorage.getItem('password')?.toString() ?? '';
    const TOKEN: string = this.authService.token;

    // const TOKEN : string = Buffer.from( `${USERNAME}:${PASSWORD}`).toString('base64');
    console.log('Token: ', TOKEN);
    const HEADER_REQUEST: HttpRequest<any> = request.clone({
      // headers: request.headers.set('Authorization',  `Basic ${TOKEN}` )
      headers: request.headers.set('Authorization', `Bearer ${TOKEN}`)
    })
    console.log();
    return next.handle(HEADER_REQUEST);
    
  }
}


