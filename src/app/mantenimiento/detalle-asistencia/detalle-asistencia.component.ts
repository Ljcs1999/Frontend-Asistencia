import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Asistencia, DetalleAsistencia } from 'src/app/api/models';
import { AsistenciaControllerService, DetalleAsistenciaControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-detalle-asistencia',
  templateUrl: './detalle-asistencia.component.html',
  styleUrls: ['./detalle-asistencia.component.css']
})
export class DetalleAsistenciaComponent {

  detalleasistencia:DetalleAsistencia[]=[];
  asistencia:Asistencia[]=[]
  visible:boolean=false;

  constructor(
    private detalleasistenciaService:DetalleAsistenciaControllerService,
    private AsistenciaService:AsistenciaControllerService,
    private messageService:NzMessageService,
    private fb:FormBuilder
  ){}

  formdetalleasistencia: FormGroup = this.fb.group({
    Asistencia_id:[],
    Alumno_id:[],
    Estado:[]
  })

  ngOnInit(): void {
    this.detalleasistenciaService.find().subscribe(data=>this.detalleasistencia=data)
    this.AsistenciaService.find().subscribe(data=>this.asistencia=data)
  }

  eliminar(id:number):void{
    this.detalleasistenciaService.deleteById({id}).subscribe(()=>{
      this.detalleasistencia=this.detalleasistencia.filter(x => x.id !== id);
      this.messageService.success('Registro Eliminado')
    })
  }

  cancel():void{
    this.messageService.info('Su registro sigue activo!')
  }

  ocultar():void{
    this.visible=false
  }

  mostrar(data?:DetalleAsistencia):void{
    this.visible=true
  }

  guardar():void{
    console.log(this.formdetalleasistencia.value)
  }
}
