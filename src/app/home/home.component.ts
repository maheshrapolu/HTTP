import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list=new FormGroup({
    username: new FormControl('',[Validators.required,
      Validators.minLength(6)
    ]),
    password: new FormControl('',[Validators.required,
      Validators.minLength(6)])
  });
  get username(){
    return this.list.get('username')
  }
  get password(){
    return this.list.get('password')
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }
  godash(){
    this.router.navigate(['/dashboard']);
  }
}
