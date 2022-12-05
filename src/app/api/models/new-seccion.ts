/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Seccion, 'id'>, schemaOptions: { title: 'NewSeccion', exclude: [ 'id' ] })
 */
export interface NewSeccion {
  docente_id: number;
  horario_id: number;
  materia_id: number;
  periodo: number;
}
