import { Component, Output,EventEmitter } from '@angular/core';
import { Album } from '../../album';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
 @Output()searchEvent=new EventEmitter<string>();
  album!: Album[];
  input:string='';

  search(){
    this.searchEvent.emit(this.input);
  
    
  }

}
