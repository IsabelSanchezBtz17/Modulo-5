import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth: boolean= false;
  public usuario: string = '';
  public password: string = '';
  public token: string= '';

  constructor() { }

  login( ){
    this.auth= true;
    localStorage.setItem('seccion', this.auth.toString());
    
  }

  logout(){
    
    this.auth= false;
    localStorage.clear();
  }
  
  showSession(){
    this.auth = (localStorage.getItem('seccion')!.toLocaleLowerCase()=='true');
    return this.auth;
    }


    saveSeccion(name: string, password: string){
     localStorage.setItem('username', name);
     localStorage.setItem('password', password);
    }


    getToken(username: string, password: string ){
      this.token= '';

      if (username === 'admin' && password ==='admin'){
       
        this.token= 'WYEgbWUgYWJ1cnJpIHRlbmdvIG11L2hvIHN1Zc0xbw0K';
        return 'Datos correctos'
      }
      return 'Datos incorrectos'
    }
}
