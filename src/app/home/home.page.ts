import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { SongModalPage } from '../song-modal/song-modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  artistsJson: any;
  artists: any;
  song = {
    name : '',
    playing: false,
    preview_url: ''
  }
  
  constructor(private router: Router, private storange: Storage, private musicService: MusicService, private modalController: ModalController) { }

  ngOnInit() {
    this.artists =this.musicService.getArtistsJson().artists;
    console.log("Json",this.artists)
   /* this.musicService.getArtists().subscribe((data: any) =>{
      this.artists =data
      console.log(this.artists)


    })
*/

this.musicService.getArtists().then(data =>{
  this.artists = data;
console.log(data)


})
  }


 async showSongs(artists: any){
    console.log(artists)
    const songs = await this.musicService.getArtistTracks(artists.id);
    const modal = await  this.modalController.create(

      {
        component: SongModalPage,
        componentProps: {

          name: artists.name,
          id: artists.id,
          songs: songs
        }

      }
    );
    modal.onDidDismiss().then(dataReturned  =>{
      this.song = dataReturned.data;
    })
    
    modal.present();

}
}