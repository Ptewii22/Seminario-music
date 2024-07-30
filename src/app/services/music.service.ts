import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dataArtists from "./artists.json" ;

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  urlServer="https://music.fly.dev"
  httpHeaders ={headers: new HttpHeaders({"Content-Type": "aplication/json"})}

  constructor(
   private http: HttpClient 
  ) { }


  getArtistsJson(){

    return dataArtists;

    
  }

  getArtists(){

    return this.http.get(`${this.urlServer}/artists`, this.httpHeaders)
 }




}
