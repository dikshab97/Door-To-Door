import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
  }
  siginUser(event)
  {
    event.preventDefault()
    const target=event.target
    const email= target.querySelector('email').value
    const pass= target.querySelector('pass').value
    console.log(email,pass)
  }

}
