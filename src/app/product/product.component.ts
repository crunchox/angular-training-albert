import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '../_service/store';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'product-component',
    templateUrl: './product.component.html',
    styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class ProductComponent {
    @Input() data;
    closeResult: string;
    cart:any[]
    constructor(private modalService: NgbModal, public store: Store) {

    }

    openVerticallyCentered(content) {
        this.modalService.open(content, { centered: true });
    }

    edit(f: NgForm) {
        var id = f.value.productID
        var productName = f.value.productName
        var productPrice = f.value.productPrice
        var product = this.store.products
        for (var i = 0; i < product.length; i++) {
            if (id === product[i].id) {  //look for match with name
                product[i].name = productName;
                product[i].price[0].max = productPrice;
                break;  //exit loop since you found the person
            }
        }
        localStorage.setItem("product", JSON.stringify(product));
        alert('edit product success')
    }
    delete(f: NgForm) {
        var id = f.value.productID
        var product = this.store.products
        for (var i = 0; i < product.length; i++) {
            if (id === product[i].id) {  //look for match
                var indexToRemove = i;
                var numberToRemove = 1;

                product.splice(indexToRemove, numberToRemove);
                break;  //exit loop since you found the person
            }
        }
        localStorage.setItem("product", JSON.stringify(product));
        alert('delete product success')
    }
    addCart(f:NgForm){
        console.log('masuk addCart')
        var id = f.value.productID
        var productName = f.value.productName
        var productPrice = f.value.productPrice
        if(sessionStorage.getItem('cart')==null){
            this.cart = [{ 'name': productName, 'price': productPrice,'qty': 1 }];
            sessionStorage.setItem('cart',JSON.stringify(this.cart))
        }else{
            this.cart=JSON.parse(sessionStorage.getItem('cart'))
            this.cart.push({name:productName,price:productPrice,qty:1})
            sessionStorage.setItem('cart',JSON.stringify(this.cart))
        }
        alert('add to cart success')
        
    }

}