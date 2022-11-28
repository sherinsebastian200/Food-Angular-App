import { Component } from '@angular/core';

@Component({
  selector: 'app-food-login',
  templateUrl: './food-login.component.html',
  styleUrls: ['./food-login.component.css']
})
export class FoodLoginComponent {
  name=""
  password=""

  foodLog=()=>
  {
    let data:any={"name":this.name,"password":this.password}
    console.log(data)

    
  }


}
