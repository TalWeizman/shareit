import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MovieLink} from './interface/MovieLink';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AfServiceService {

  public user: Observable<firebase.User>;

  constructor(private db: AngularFireDatabase , public afAuth: AngularFireAuth) { 
    
    this.user = afAuth.authState;
    
    this.user.subscribe(d=>{
      console.log(d);
    })
  }

  login(email:string,password:string):firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  anonymous_login():firebase.Promise<any> {
    return this.afAuth.auth.signInAnonymously();
  }

  register(email:string,password:string):firebase.Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get_movie_links_for_id(id:string):FirebaseListObservable<MovieLink[]>{

      return this.db.list('/movie/'+ id +'/links/');
  }

  get_tv_links_for_id(id:string):FirebaseListObservable<any>{
    
          return this.db.list('/tv_links/'+ id +'/links/');
  }

  new_movie_link(id,link:MovieLink){

      this.db.list('/movie/'+ id +'/links/').push(link);
  }

  
  new_tv_link(id:string,url:string,qulity:string,sub:boolean,s:number,e:number){
    
          this.db.list('/tv_links/'+ id +'/links/').push({
            UserID:"",  
            down:0,
            heb_sub:sub,
            is_active:true,
            provider:"",
            quality:qulity,
            up:0,
            url:url,
            season:s,
            episode:e
          });
      }

  
}
