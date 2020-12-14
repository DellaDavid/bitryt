import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {

  taskList: any = [];
  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.gettoDoList();
  }
  gettoDoList(){
    this._appService.getTaskList().subscribe(res=>{
      this.taskList = res;
    })
  }

}
