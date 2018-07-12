import { Component, OnInit } from '@angular/core';
//import {DeportesService} from '../../../services/deportes.service';
import { DeportesService } from '../../../services/deportes.service';
import { NgForm } from '@angular/forms';
//import { AppModule } from '../../../app.module';
//import {FormsModule} from '@angular/forms';


import { Deportes } from '../../../models/deportes';
@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.component.html',
  styleUrls: ['./deporte.component.css']
})
export class DeporteComponent implements OnInit {

  constructor(private deportesService: DeportesService) { }

  ngOnInit() {
    this.deportesService.getDeport();
    this.resetForm();
  }
  onSubmit(deportForm: NgForm){
    this.deportesService.insertDeport(deportForm.value);
    this.resetForm(deportForm);

  }
  resetForm(deportForm?: NgForm){
if (deportForm!= null)
deportForm.reset();
this.deportesService.selectDeport = new Deportes();
  }

}
