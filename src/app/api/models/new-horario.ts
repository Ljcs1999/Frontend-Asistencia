/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Horario, 'id'>, schemaOptions: { title: 'NewHorario', exclude: [ 'id' ] })
 */
export interface NewHorario {
  dias: string;
  hora_final: string;
  hora_inicio: string;
  seccion_id: number;
}
