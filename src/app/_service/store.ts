import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Store {
    public imgUrl = 'http://103.82.241.18/admin/img/products/';
    public dataUrl = 'https://api.myjson.com/bins/ygj6m';
    public products: any;

    constructor(public http: HttpClient) {
        if (localStorage.getItem('product') == null) {
            this.getData();
        }else{
            this.products=JSON.parse(localStorage.getItem('product'))
        }
    }

    getData() {
        this.http.get<{ products: string }>(this.dataUrl)
            .subscribe(data => {
                this.products = data.products;
                localStorage.setItem('product', JSON.stringify(this.products))
            })
    }
}