import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  userList: any = [];
  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.getList();
  }
  getList(){
    this._appService.getUserList().subscribe(res=>{
      this.userList = res;
    })
  }
}
