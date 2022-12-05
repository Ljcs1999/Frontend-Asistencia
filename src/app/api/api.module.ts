/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AlumnoControllerService } from './services/alumno-controller.service';
import { AsistenciaControllerService } from './services/asistencia-controller.service';
import { DetalleAsistenciaControllerService } from './services/detalle-asistencia-controller.service';
import { DetalleMatriculaControllerService } from './services/detalle-matricula-controller.service';
import { DocenteControllerService } from './services/docente-controller.service';
import { HorarioControllerService } from './services/horario-controller.service';
import { MateriaControllerService } from './services/materia-controller.service';
import { MatriculaControllerService } from './services/matricula-controller.service';
import { PingControllerService } from './services/ping-controller.service';
import { SeccionControllerService } from './services/seccion-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AlumnoControllerService,
    AsistenciaControllerService,
    DetalleAsistenciaControllerService,
    DetalleMatriculaControllerService,
    DocenteControllerService,
    HorarioControllerService,
    MateriaControllerService,
    MatriculaControllerService,
    PingControllerService,
    SeccionControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
