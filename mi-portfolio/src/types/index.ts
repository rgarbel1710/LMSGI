export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface Estudio {
  id: number;
  titulo: string;
  centro: string;
  fecha: string;
  tipo: string;
  descripcion: string;
  icono: string;
}

export interface Trabajo {
  id: number;
  puesto: string;
  empresa: string;
  fecha: string;
  descripcion: string;
  tecnologias: string[];
  icono: string;
}

export interface Formacion {
  id: number;
  titulo: string;
  plataforma: string;
  fecha: string;
  descripcion: string;
  icono: string;
  certificado: boolean;
}
