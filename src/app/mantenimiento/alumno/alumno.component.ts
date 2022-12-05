import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/api/models';
import { AlumnoControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumno: Alumno[] = [];
  visible: boolean = false;

  constructor(
    private alumnoService: AlumnoControllerService,
    private messageService: NzMessageService,
    private fb: FormBuilder
  ) { }

  formAlumno: FormGroup = this.fb.group({
    id: [],
    nombre: []
  })

  ngOnInit(): void {
    this.alumnoService.find().subscribe(data => this.alumno = data)
  }

  eliminar(id: number): void {
    this.alumnoService.deleteById({ id }).subscribe(() => {
      this.alumno = this.alumno.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel(): void {
    this.messageService.info('Su registro sigue activo!')
  }

  ocultar(): void {
    this.visible = false
    this.formAlumno.reset()
  }

  mostrar(data?: Alumno): void {
    if (data?.id) {
      this.formAlumno.setValue(data)
    }
    this.visible = true
  }

  guardar(): void {

    if (this.formAlumno.value.id) {
      this.alumnoService.updateById({ 'id': this.formAlumno.value.id, 'body': this.formAlumno.value }).subscribe(() => {
        this.alumno = this.alumno.map(obj => {
          if (obj.id === this.formAlumno.value.id){
            return this.formAlumno.value;
          }
          return obj;
        })
        this.messageService.success('Registro actualizado con exito!')
        this.formAlumno.reset()
      }
    )
    } else {
      delete this.formAlumno.value.id
      this.alumnoService.create({ body: this.formAlumno.value }).subscribe((datoAgregado) => {
        this.alumno = [...this.alumno, datoAgregado]
        this.messageService.success('Registro creado con exito!')
        this.formAlumno.reset()
      })
    }
    this.visible = false
  }

}
