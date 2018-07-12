import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Deportes } from '../models/deportes';
@Injectable()
export class DeportesService {
  deportList: AngularFireList<any>;
  selectDeport: Deportes = new Deportes();

  constructor(private firebase: AngularFireDatabase) { }

  getDeport(){
    return this.deportList = this.firebase.list('deportes');
  }
  insertDeport(deporte: Deportes){
    this.deportList.push({
      name: deporte.name,
      category: deporte.category,
      lugar: deporte.lugar,
      descripcion: deporte.descripcion

    });
  }
  updateDeport(deporte: Deportes){
    this.deportList.update(deporte.$key,{
      name: deporte.name,
      category: deporte.category,
      lugar: deporte.lugar,
      descripcion: deporte.descripcion
    });
  }
  deleteDeport($key: string){
    this.deportList.remove($key);
  }
}
