import { Component, Input} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{

  @Input() nuevo: Personaje = {
    nombre:'',
    poder:0
  };

  @Input('data') personajes: Personaje[] = [];

  agregar() {
    console.log(this.personajes);
    console.log(this.personajes.length);
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);
    this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre : "",
      poder : 0
    }
    console.log(this.personajes);

  }

}
