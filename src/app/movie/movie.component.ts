import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AfServiceService } from '../af-service.service';
import { ApiService } from '../api.service';
import { MovieLink} from '../interface/MovieLink';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  result : any;
  post:boolean = false;
  links:FirebaseListObservable<MovieLink[]>;
  movie_link:MovieLink;


  constructor(private api:ApiService,private route: ActivatedRoute,private af:AfServiceService) {

    
    this.result.genres = [];
    
    this.movie_link.quality  = "לא ידוע";
    this.movie_link.heb_sub  = false;
    this.movie_link.url  = "";
    this.movie_link.uid = "";
    this.movie_link.uname = "";
    


    this.route.params.subscribe(params => {
       
      this.api.getMovie(params['id']).subscribe((data)=>{
        this.result = data;
        this.links = this.af.get_movie_links_for_id(this.result.id);
       });
     
    });

   }

  ngOnInit() {

    
    
  }

  open_url(url){

    window.open(url, '_blank');
  }

  save_share(){

    this.af.new_movie_link(this.result.id,this.movie_link);

    this.closeBtn.nativeElement.click();
  }
}
