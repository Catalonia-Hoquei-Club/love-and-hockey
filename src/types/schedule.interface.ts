export interface ScheduleItem {
  /** Hora en notación HH:mm */
  time: string;
  /** Nombre visible de la jornada / partido / actividad */
  title: string;
  /** Texto breve que veremos en el listado */
  subtitle?: string;
  /** Detalle completo que mostraremos dentro del modal */
  description?: string;
}