import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api:ApiService) { }

  title = 'app';
  search_input : string = "";
  result:any;
  form_toggle:boolean = true;
  

  ngOnInit() {
  }

    search(){

        this.api.getMulti(this.search_input).subscribe((data)=>{

          this.result = data['results'];
        });
    }


    scrole_to_search(){

        let i = window.pageYOffset;

        let interval = setInterval(()=>{

          window.scroll(0,i);
          if (i<200)
            i++;
          else if (i>200)
            i--;
          else if (i == 200)
            clearInterval(interval);

        },5)
      
    }

}
