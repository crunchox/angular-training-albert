import { Component} from '@angular/core';
import { Store } from '../_service/store';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
    sessionStorage.removeItem('currUser');
    this.router.navigateByUrl('/')
  }
  add(f:NgForm){
    var id = Math.random().toString(36).substr(2, 10);
    var productName=f.value.productName
    var productPrice=f.value.productPrice
    var product=this.store.products
    product.push({id:id,image:null,name:productName,price:[{max:productPrice}]})
    console.log(this.store.products)
    localStorage.setItem('product',JSON.stringify(this.store.products))
    alert('add product success')
  }

}