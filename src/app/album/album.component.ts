import { Component, OnInit } from '@angular/core';
import { ALBUMS } from '../../mock-albums';
import { Album } from '../album';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent implements OnInit{
  AlbumList:Album[]=[];
  selected?:string
  album!: Album;
 

constructor(private myService:MasterService,private myAside:MasterService){}

ngOnInit(){
this.AlbumList=this.myService.getAlbum();
}

getDetail(id:string){
  this.album=this.myAside.getAside(id);
}

getSearch(e:string){
  console.log(e);

  if (e.trim()!=="") {
    this.AlbumList=this.AlbumList.filter(el=>{
      return el.title.toLowerCase().includes(e.toLowerCase())
    })
  }else{
    this.AlbumList=ALBUMS;
  }
  
}
}

