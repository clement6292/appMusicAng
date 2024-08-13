import { Component,input,Input } from '@angular/core';
import { Album, } from '../album';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
@Input() album!:Album; 
 }
