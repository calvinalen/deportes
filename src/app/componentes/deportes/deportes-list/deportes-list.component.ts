import { Component, OnInit } from '@angular/core';
import { DeportesService } from '../../../services/deportes.service';
import { Deportes } from '../../../models/deportes';
//import { element } from '../../../../../node_modules/protractor';
// toastr

import { ToastrService } from 'ngx-toastr';

//import { TaskService } from '../../../services/task.service';

//import { Task } from '../../../models/task';
@Component({
  selector: 'app-deportes-list',
  templateUrl: './deportes-list.component.html',
  styleUrls: ['./deportes-list.component.css']
})
export class DeportesListComponent implements OnInit {
  deportList: Deportes[];
  //let database= firebase.database();
  

  constructor(public deportsService: DeportesService, private toastr: ToastrService) { }

  ngOnInit() {
    return this.deportsService.getDeport()
      .snapshotChanges().subscribe(item => {
        this.deportList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.deportList.push(x as Deportes);
        });
      });
  }

  onEdit(deport: Deportes) {
    this.deportsService.selectDeport = Object.assign({}, deport);
  }

  onDelete($key: string) {
    if(confirm('Are you sure you want to delete it?')) {
      this.deportsService.deleteDeport($key);
      this.toastr.warning('Deleted Successfully', 'deport Removed');
    }
  }

}