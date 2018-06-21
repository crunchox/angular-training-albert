import { Component} from '@angular/core';
import { Store } from '../_service/store';
import { Router } from '@angular/router';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html'
})

export class HomeComponent{
  user:string
  constructor(public store:Store,public router:Router){
    this.user=JSON.parse(sessionStorage.getItem('currUser'))
  }
  logout(){
    console.log('logout')
    sessionStorage.clear();
    this.router.navigateByUrl('/')
  }

}