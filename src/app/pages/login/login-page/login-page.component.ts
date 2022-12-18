import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { LoginService } from 'src/app/services/login/login.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  
  profileForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  loginState = "Normal";

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private localStorage: LocalStorageService
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.loginService.Login({username: this.profileForm.value.username!, password: this.profileForm.value.password!}).subscribe((response:any)=>{
      console.log(response);
      if(response.token){
        this.localStorage.clear();
        this.localStorage.set("token", response.token);
        this.localStorage.set("refreshToken", response.refreshToken.id);
        this.localStorage.set("userId", response.refreshToken.id_user);
        this.router.navigate(['/game']);
      } else {
        this.loginState = 'Error';
      }
    });
  }

}
