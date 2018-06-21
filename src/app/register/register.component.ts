import { Component } from "@angular/core";
import { Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector:"register",
    templateUrl: "./register.component.html"
})
export class RegisterComponent{
    router: Router
    constructor() {}
    onSubmit(f:NgForm){
        var username=f.value.username
        var password=f.value.password
        var cpassword=f.value.cpassword
        if(username==''&&password==''&&cpassword==''){
            alert('fill all required')
        }else if(password==cpassword){
            var user={'username':username,'password':password};
            localStorage.setItem(username,JSON.stringify(user));
            alert('registration success');
        }else{
            alert('password does not match');
        }
    }
    
}