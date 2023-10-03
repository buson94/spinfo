import { Injectable } from '@angular/core';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

const api = SpotifyApi.withClientCredentials("8d326116374443a38d3394b7ea6db92f", "f9d2f06c7c7242ffbdf8b087c339c073");

@Injectable({
  providedIn: 'root'
})
export class SpotifyAPIService {

  constructor() { }
}
