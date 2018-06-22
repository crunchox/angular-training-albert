import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'cart',
    templateUrl: './cart.component.html'
})
export class CartComponent {
    
    cart:any[]
    constructor(public router:Router){
        this.cart=JSON.parse(sessionStorage.getItem('cart'))
    }
    checkOut(){
        sessionStorage.removeItem('cart')
        alert('Thank you for buying')
        this.router.navigateByUrl('/home')
    }
}