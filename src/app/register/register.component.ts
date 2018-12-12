import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {};
  constructor(private _reg : RegisterService) { }

  ngOnInit() {
  }

  registerU(){
    console.log(this.registerUserData);
    this._reg.registerU(this.registerUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
