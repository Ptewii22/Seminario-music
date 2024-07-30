import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }
  loginUser(credentials: any){
    return new Promise ((accept, reject) =>{

      if(
        credentials.email == "luicamargo80@gmail.com"
      )
        if(

          credentials.password == "Jm09072015LA+*"
        )
      {
        accept("Bienvenido")

      }else{

        reject("Error Contraseña incorrecta")
      }
      

    }

    )

  }

  registerUser(registerData: any){
    registerData.password = btoa(registerData.password)
    return this.storage.set("User",registerData);


  }
}
