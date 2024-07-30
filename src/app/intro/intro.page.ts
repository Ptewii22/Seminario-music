import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {



  
  slides = [
    {
      title: "Titulo 1",
      icon:"diamon-outline",
      avatar:"https://cdn.pixabay.com/photo/2013/10/22/07/56/android-199225_1280.jpg",
      image: "https://cdn.pixabay.com/photo/2019/12/27/14/29/vinyl-4722544_1280.jpg",
      description:"Texto prueba"
    },
    {
      title: "Titulo 2",
      icon:"diamon-outline",
      avatar:"https://cdn.pixabay.com/photo/2013/10/22/07/56/android-199225_1280.jpg",
      image: "https://cdn.pixabay.com/photo/2023/02/16/03/43/music-player-7792956_1280.jpg",
      description:"Texto prueba"
    },
    {
      title: "Titulo 3",
      icon:"diamon-outline",
      avatar:"https://cdn.pixabay.com/photo/2013/10/22/07/56/android-199225_1280.jpg",
      image: "https://cdn.pixabay.com/photo/2021/03/12/21/25/keys-6090560_1280.jpg",
      description:"Texto prueba"
    },

    {
      title: "Titulo 4",
      icon:"diamon-outline",
      avatar:"https://cdn.pixabay.com/photo/2013/10/22/07/56/android-199225_1280.jpg",
      image: "https://cdn.pixabay.com/photo/2021/03/12/21/25/keys-6090560_1280.jpg",
      description:"Texto prueba"
    }


  ]


  constructor(private router: Router, private storange: Storage ) { }

  ngOnInit() {

    console.log("Hola intro")
  }


  close(){

    //console.log("Estoy intetando cerrar la intro");

    this.storange.set("isIntroShowed", true)
    this.router.navigateByUrl("/home")
  }

}
