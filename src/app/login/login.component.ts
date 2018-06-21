import { Component } from "@angular/core";
import { Router} from '@angular/router';
import { NgForm } from "@angular/forms";


@Component({
    selector:"login",
    templateUrl: "./login.component.html"
})
export class LoginComponent{
    
    constructor(public router: Router) {}
    onSubmit(f:NgForm){
        var username=f.value.username
        var password=f.value.password
        console.log(localStorage.getItem(username));
        var values=JSON.parse(localStorage.getItem(username))
        if(password==values.password){
            var currUser={'username':username};
            sessionStorage.setItem('currUser',JSON.stringify(currUser));
            alert('berhasil login')
            this.router.navigateByUrl('/home')
        }else{
            alert('username atau password salah')
        }
    }
}