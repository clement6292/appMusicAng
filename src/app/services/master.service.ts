import { Injectable } from '@angular/core';
import { ALBUMS } from '../../mock-albums';
import { Album } from '../album';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  AlbumList:Album[]=ALBUMS;
  constructor() { }

  getAlbum(){
    return this.AlbumList;
  }

  getAside(id:string):Album{
   const idAlbum = this.AlbumList.filter((e:Album)=> e.id===id)
   return idAlbum[0];
  }

}
