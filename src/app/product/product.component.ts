import { Component, Input } from "@angular/core";

@Component({
    selector:'product-component',
    templateUrl:'./product.component.html'
})
export class ProductComponent{
    @Input() data;
}