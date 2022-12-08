import { Component, OnInit } from '@angular/core';
import { Asistencia } from 'src/app/api/models';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent {

  asistencia:Asistencia[]=[];

  constructor(){}

  ngOnInit(): void {

  }
}
