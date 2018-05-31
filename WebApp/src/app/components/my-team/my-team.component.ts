import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TeamDataService } from '../../services/team-data.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  constructor(private userService: UserService) { 
  }

  ngOnInit() {
  }

}
