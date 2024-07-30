import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: any;

  constructor(private formBuilder: FormBuilder, private storage: Storage, private navCtrl:NavController, private authService: AuthenticateService) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,          Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")

      ]],
      confirmPassword: ['', [Validators.required, this.matchPasswords('password')]]
    });
  }

  matchPasswords(passwordKey: string) {
    return (control: any) => {
      const formGroup = control.parent;
      if (formGroup) {
        const password = formGroup.get(passwordKey).value;
        if (password !== control.value) {
          return { mismatch: true };
        }
      }
      return null;
    };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      
      console.log('Formulario válido', this.registerForm.value)
    } else {
      console.log('Formulario inválido');
    }

  }
  goToLogin(){

      this.navCtrl.navigateBack("/login")
    }

    register(registerForm: any ){
      console.log(registerForm);
      this.storage.set("user",registerForm);
      this.authService.registerUser(registerForm).then (res =>{

        this.navCtrl.navigateBack("/login");
      })
      

    }

}
