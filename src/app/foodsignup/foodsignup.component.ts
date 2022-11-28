import { Component } from '@angular/core';

@Component({
  selector: 'app-foodsignup',
  templateUrl: './foodsignup.component.html',
  styleUrls: ['./foodsignup.component.css']
})
export class FoodsignupComponent {
  name=""
  address=""
  pincode=""
  dob=""
  email=""
  phone=""
  username=""
  password=""
  confirmpassword=""

  foodSign=()=>
  {
    let data:any={"name":this.name,"address":this.address,"pincode":this.pincode,"dob":this.dob,"email":this.email,"phone":this.phone,"username":this.username,"password":this.password,"confirmpassword":this.confirmpassword}
    console.log(data)
  }

}
