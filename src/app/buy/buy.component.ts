import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BuyService } from './buy.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  name:String
  amount:String;
  prod_id:String;
  pay_details = new FormGroup({
    name: new FormControl(),
    email : new FormControl(),
    phone: new FormControl(),
    amount: new FormControl()
  })
  constructor(private Buyservice:BuyService) { }

  ngOnInit(): void {
    this.name = history.state.user
    this.amount = history.state.amount
    this.prod_id = history.state.prodid
  }

  pay(){
    let email = this.pay_details.controls.email.value;
    let phone = this.pay_details.controls.phone.value;
    let values = {
      name: this.name,
      email: email,
      phone:phone,
      amount:this.amount
    }
    this.pay_details.setValue(values);
    console.log(this.pay_details.value)

    this.Buyservice.buypost(this.pay_details.value).subscribe((Response)=>{
      console.log(Response)
    })
  }

}
