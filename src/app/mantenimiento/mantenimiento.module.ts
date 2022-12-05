import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { AlumnoComponent } from './alumno/alumno.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { DetalleAsistenciaComponent } from './detalle-asistencia/detalle-asistencia.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { SeccionComponent } from './seccion/seccion.component';
import { DocenteComponent } from './docente/docente.component';
import { DetalleMatriculaComponent } from './detalle-matricula/detalle-matricula.component';
import { MateriaComponent } from './materia/materia.component';
import { HorarioComponent } from './horario/horario.component';

//Importaciones de NG ZORRO
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [
    AlumnoComponent,
    AsistenciaComponent,
    DetalleAsistenciaComponent,
    MatriculaComponent,
    SeccionComponent,
    DocenteComponent,
    DetalleMatriculaComponent,
    MateriaComponent,
    HorarioComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzRadioModule,
    NzDatePickerModule,
    NzSelectModule
  ]
})
export class MantenimientoModule { }
