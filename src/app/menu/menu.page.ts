import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController, private navCtrl: NavController,private router: Router, private storange: Storage) { }

  ngOnInit() {
  }
  closeMenu(){
    console.log("Cerrar Menu");
    this.menu.close();

  }

  logout(){

console.log("cerrar seccion")
this.navCtrl.navigateRoot("/login")

  }

  close(){

    //console.log("Estoy intetando cerrar la intro");

    this.storange.set("isIntroShowed", true)
    this.router.navigateByUrl("/intro")
  }
  
}
