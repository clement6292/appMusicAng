import { Component } from '@angular/core';
import { ALBUMS } from "../mock-albums";
import { Album } from './album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appMusicAng';
 
}