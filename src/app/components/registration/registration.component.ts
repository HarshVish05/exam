import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user={
    name:'',
    email:'',
    password:''
  }

  constructor(
    private router:Router,
    private userservice: UserserviceService
    ){}

  ngOnInit(): void {
    
  }
  onSubmit(){
    this.userservice.registerUser(this.user).subscribe(response=>console.log('user registered successfully',response))
  }

}
