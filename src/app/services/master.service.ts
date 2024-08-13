import { Injectable } from '@angular/core';
import { ALBUMS } from '../../mock-albums';
import { Album } from '../album';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  AlbumList:Album[]=[]
  constructor() { }
  getAlbum(){
    return ALBUMS;
    // console.log(this.Album);
    
  }
}
