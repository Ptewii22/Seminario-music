import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { MusicService } from '../services/music.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  artistsJson: any;
  artists: any;
  constructor(private router: Router, private storange: Storage, private musicService: MusicService ) { }

  ngOnInit() {
    this.artists =this.musicService.getArtistsJson().artists;
    console.log("Json",this.artists)
    this.musicService.getArtists().subscribe((data: any) =>{
      this.artists =data
      console.log(this.artists)


    })

  }


}
