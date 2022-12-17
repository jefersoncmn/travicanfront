import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { LoginService } from 'src/app/services/login/login.service';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  profileForm = this.formBuilder.group({
    username: ['', Validators.required],
    name: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private localStorage: LocalStorageService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.registerService.Register({username: this.profileForm.value.username!, password: this.profileForm.value.password!, name: this.profileForm.value.name!, email: this.profileForm.value.email!}).subscribe((response:any)=>{
      console.log(response.username);
      if(response.username){
        this.loginService.Login({username: this.profileForm.value.username!, password: this.profileForm.value.password!}).subscribe((loginResponse)=>{
          console.log(loginResponse);
          if(loginResponse.token){
              this.localStorage.clear();
              this.localStorage.set("token", loginResponse.token);
              this.localStorage.set("refreshToken", loginResponse.refreshToken.id);
              this.router.navigate(['/game']);
            }
        })
      }
    });
  }
}
