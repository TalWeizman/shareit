import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {Observable } from ''
const apikey :string = "cde34a267c3dd1d2a79ca5ba32f7192f";

@Injectable()
export class ApiService {

  multi:any;
  constructor(private http: HttpClient) { 

  }



  getMulti(quary){

    return this.http.get('https://api.themoviedb.org/3/search/multi?api_key=' + apikey  +'&language=he-HE&query='+ quary + '&page=1&include_adult=false');
  }

  getMovie(id){

    return this.http.get('https://api.themoviedb.org/3/movie/'+ id +'?api_key=' + apikey  +'&language=he-HE');

  }




}
