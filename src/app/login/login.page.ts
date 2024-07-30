import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
  export class LoginPage implements OnInit {

    loginForm: FormGroup;
    validation_messages = {
      

      email:[
          {type: "required", message: "El Email es obligatorio"},
          {type: "pattern", message: "Email invalido"}
      ],

      password:[

        {type: "required", message: "La contrasena es obligatoria"},
        {type: "pattern", message:"La contrasena no cumple requisitos"}
      ]

    }
    errorMessage: any;
    constructor(private formBuilder: FormBuilder, private authService: AuthenticateService, private navCtrl: NavController, private alertController:AlertController, private storage: Storage, private router: Router) { 
      this.loginForm =this.formBuilder.group({
        email: new FormControl(
          "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
    
      

        ])
        ),

        password: new FormControl(
          "",
        Validators.compose([
          Validators.required, 
          Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")
      

        ])
        )
      
    
        


      })
    }

    ngOnInit() {
    }

    loginUser(dataLogin: any){
      console.log(dataLogin)
      this.authService.loginUser(dataLogin) .then(res => {
        this.storage.set("isUserLoggedIn", true);
        this.errorMessage = "Bienvenido";
        
        this.navCtrl.navigateForward("/menu/home")



      }).catch(err =>{

        this.errorMessage = err;
        this.presentAlert(this.errorMessage);

      })

    }
        

    
   


    async presentAlert(mss: string) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: mss,
        buttons: ['Ok'],
      });
  
      await alert.present();
    }

    goToAbout() {
      this.router.navigate(['/register']);
    }
  }

  
