import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AfServiceService } from '../af-service.service';

const apikey :string = "cde34a267c3dd1d2a79ca5ba32f7192f";

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  result:any;
  links:any;
  url:string = "";
  heb_sub:boolean = false;
  quality:string = "לא ידוע";
    season:number = null;
    episode:number = null;
    show_episodes:boolean = false;
    Arr = [];
    arr = Array;

  constructor(private http: HttpClient,private route: ActivatedRoute,private af:AfServiceService) {

    this.route.params.subscribe(params => {


      this.season =  params['season'];
      this.episode = params['episode'];
      params['name'];
      
      

      this.http.get('https://api.themoviedb.org/3/tv/'+ params['id'] +'?api_key=' + apikey  +'&language=he-HE').subscribe(data => {
        // Read the result field from the JSON response.
        this.result = data;
        console.log(data);

        

        this.links = this.af.get_tv_links_for_id(this.result.id);
        
        

        this.result.seasons.forEach(s => {
          
          this.Arr[s.season_number] = s.episode_count;
        });

      });
        // In a real app: dispatch action to load the details here.
    });

   }

  ngOnInit() {
  }

  season_clicked(i){
    this.season = i;
    this.episode = 1;
    console.log(this.season,this.episode);
  }

  episode_clicked(i){
    this.episode = i;
    console.log(this.season,this.episode);
  }

  save_share(){

    this.af.new_tv_link(
      this.result.id,
      this.url,
      this.quality,
      this.heb_sub,this.season,this.episode);

    this.closeBtn.nativeElement.click();

  }

}
