import { Component, OnInit } from '@angular/core';
import { SimlationService } from 'src/app/shared/simlation.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    Fav_flag:0
  }
  Users: User[] = [];
  constructor(private simulationService: SimlationService){}
  ngOnInit(): void {
   this.Users = this.simulationService.getUser();
   console.log("AllUsers",this.Users)
  }



}
