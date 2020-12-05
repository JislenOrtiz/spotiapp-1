import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
  console.log('Spotify service Listo');
}

getNewRelases(){
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQC1Ky7nkWrVDAMB8RQ4MxE9FBmZkSQCXQ4CSikAj8ZktDgnKuSWNtV4XXX6CVJjj2xuMdrbQgpkvSJy08Y'
    
  });

 return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});

}
}