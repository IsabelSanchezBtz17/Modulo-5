import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  loginForm!: FormGroup;
 respuesta: string ='';

  ngOnInit(){
    this.loginForm= this.formBuilder.group(
      {
        username: ['', Validators.required],
        password:['', Validators.required ]
      }
    )
  }

  constructor(public authService: AuthService ,
    private formBuilder: FormBuilder) { }

  login(){ 
    this.authService.login();
  }
    
  logout(){
    this.authService.logout();
  }
  
  showSeccion(){
    return this.authService.showSession();
  }

 onSubmit(){
  let username : string = this.loginForm.get('username')?.value;
  let password : string = this.loginForm.value.password;
  this.respuesta= this.authService.getToken(username, password);

 }
  


}
