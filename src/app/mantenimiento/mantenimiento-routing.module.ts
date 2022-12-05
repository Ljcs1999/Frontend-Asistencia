import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { DetalleAsistenciaComponent } from './detalle-asistencia/detalle-asistencia.component';
import { DetalleMatriculaComponent } from './detalle-matricula/detalle-matricula.component';
import { DocenteComponent } from './docente/docente.component';
import { HorarioComponent } from './horario/horario.component';
import { MateriaComponent } from './materia/materia.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { SeccionComponent } from './seccion/seccion.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'alumno',component:AlumnoComponent},
      {path:'asistencia',component:AsistenciaComponent},
      {path:'detalle-asistencia',component:DetalleAsistenciaComponent},
      {path:'detalle-matricula',component:DetalleMatriculaComponent},
      {path:'docente',component:DocenteComponent},
      {path:'horario',component:HorarioComponent},
      {path:'materia',component:MateriaComponent},
      {path:'matricula',component:MatriculaComponent},
      {path:'seccion',component:SeccionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
