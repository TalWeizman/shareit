import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import { AfServiceService } from '../af-service.service';

@Component({
  selector: 'app-share-tile',
  templateUrl: './share-tile.component.html',
  styleUrls: ['./share-tile.component.css']
})
export class ShareTileComponent implements OnInit,OnDestroy {


  @Input() data;
  links_count:number;
  sub:any;
  constructor(private af:AfServiceService) { 

    
  }

  ngOnInit() {
   this.sub = this.af.get_movie_links_for_id(this.data.id).subscribe((d)=>{

    this.links_count = d.length;

   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    
  }

}
