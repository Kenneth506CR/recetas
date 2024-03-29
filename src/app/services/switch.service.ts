import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwitchService {
  //Activador del modal
  $modal = new EventEmitter<any>();

  //Guardar datos de las recetas
  private data = new BehaviorSubject<any>(null);
  sharedData = this.data.asObservable();

  constructor() {}

  updateData(data: any) {
    this.data.next(data);
  }
}
