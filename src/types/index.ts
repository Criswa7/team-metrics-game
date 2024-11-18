// src/types/index.ts

export interface TeamMember {
  id: string;
  name: string;
  avatarUrl?: string;
  metrics?: {
    tardiness: number;
    activetrack: number;
  };
}
  
export interface TeamPrediction {
  tardiness: number;
  activetrack: number;
}
  
export interface FunFact {
  id: number;
  fact: string;
  correctMemberId: string;
}
  
export const TEAM_MEMBERS: TeamMember[] = [
  { 
    id: '1', 
    name: 'Maria Higuera',
    avatarUrl: '/avatars/1.jfif'
  },
  { 
    id: '2', 
    name: 'Christian Uribe',
    avatarUrl: '/avatars/2.jfif'
  },
  { 
    id: '3', 
    name: 'Cristian Florez',
    avatarUrl: '/avatars/3.jfif'
  },
  { 
    id: '4', 
    name: 'David Lopez',
    avatarUrl: '/avatars/4.jfif'
  },
  { 
    id: '5', 
    name: 'Gustavo',
    avatarUrl: '/avatars/5.jfif'
  },
  { 
    id: '6', 
    name: 'Karen',
    avatarUrl: '/avatars/6.jfif'
  },
  { 
    id: '7', 
    name: 'Luciany',
    avatarUrl: '/avatars/7.jfif'
  },
  { 
    id: '8', 
    name: 'Lucia',
    avatarUrl: '/avatars/8.jfif'
  },
  { 
    id: '9', 
    name: 'Monica',
    avatarUrl: '/avatars/9.jfif'
  },
  { 
    id: '10', 
    name: 'Johan',
    avatarUrl: '/avatars/10.jfif'
  },
  { 
    id: '11', 
    name: 'Juan Rico',
    avatarUrl: '/avatars/11.jfif'
  },
  { 
    id: '12', 
    name: 'Sebastian',
    avatarUrl: '/avatars/12.jfif'
  },
  { 
    id: '13', 
    name: 'Nicolas',
    avatarUrl: '/avatars/13.jfif'
  }
];
  
export const LAST_WEEK_METRICS: Record<string, TeamMember['metrics']> = {
  '1': { tardiness: 0, activetrack: 0.0 },
  '2': { tardiness: 17, activetrack: 7.2 },
  '3': { tardiness: 0, activetrack: 6.9 },
  '4': { tardiness: 0, activetrack: 7.5 },
  '5': { tardiness: 13, activetrack: 7.2 },
  '6': { tardiness: 0, activetrack: 6.4 },
  '7': { tardiness: 22, activetrack: 6.4 },
  '8': { tardiness: 0, activetrack: 7.0 },
  '9': { tardiness: 23, activetrack: 6.6 },
  '10': { tardiness: 6, activetrack: 7.2 },
  '11': { tardiness: 0, activetrack: 6.9 },
  '12': { tardiness: 0, activetrack: 0.0 },
  '13': { tardiness: 0, activetrack: 6.9 }
};
  
export const FUN_FACTS: FunFact[] = [
  { 
    id: 0,
    fact: "Escribo. Estoy escribiendo un libro",
    correctMemberId: "1"
  },
  {
    id: 1,
    fact: "Me gustan mucho los conciertos, he ido a más de 50. De hecho esta mañana estaba justamente en uno",
    correctMemberId: "2"
  },
  {
    id: 2,
    fact: "Durante la pandemia monté un canal de Twitch donde jugaba y de ahí sacaba clips para otras redes sociales",
    correctMemberId: "3"
  },
  {
    id: 3,
    fact: "Trabaje como profesor de primaria y me echaron el día del profesor",
    correctMemberId: "4"
  },
  {
    id: 4,
    fact: "En el colegio era futbolista semi profesional, llegué a hacer pruebas para un equipo chileno",
    correctMemberId: "5"
  },
  {
    id: 5,
    fact: "Tengo un hobby de hacer Makeup artist",
    correctMemberId: "6"
  },
  {
    id: 6,
    fact: "Sé montar skate",
    correctMemberId: "7"
  },
  {
    id: 7,
    fact: 'A los 5 años, en una fiesta del colegio, dejé mi pulgar en la ranura de una puerta de metal mientras miraba la decoración. Un niño cerró la puerta porque "no podia mirar" atrapando mi dedo. Me llevaron al médico y aunque me desperté durante la cirugia (vi mi dedo abierto 💀), la operación salió bien. Solo me quedó una cicatriz, pero casi pierdo el dedo',
    correctMemberId: "8"
  },
  {
    id: 8,
    fact: "Me gusta escribir, escribo un diario, fragmentos y me gustaría escribir cuentos",
    correctMemberId: "9"
  },
  {
    id: 9,
    fact: "La razón por la que aprendí inglés fue porque en quinto de primaria fue la primera materia que reprobé en el colegio, entonces desde ese día dije que nunca más perdería esa materia en mi vida",
    correctMemberId: "10"
  },
  {
    id: 10,
    fact: "Nunca digo que no a algun plan",
    correctMemberId: "11"
  },
  {
    id: 11,
    fact: "No me gustan los estampados en la ropa. ni diseños o muñecos, prefiero un estilo monocromatico. Otro dato es que me gusta el senderismo",
    correctMemberId: "12"
  },
  {
    id: 12,
    fact: "Trabajé como barista y puedo hacer arte latte con más de 20 diseños diferentes",
    correctMemberId: "13"
  }
];
  
export const METRICS_GOALS = {
  TARDINESS_GOAL: 30, // minutos máximos aceptables de tardanza
  ACTIVETRACK_GOAL: 6.75 // horas mínimas de activetrack
};
  
// Utilidades para cálculos de métricas
export const calculateTeamAverages = (metrics: Record<string, TeamMember['metrics']>) => {
  const members = Object.values(metrics);
  return {
    tardiness: members.reduce((acc, curr) => acc + (curr?.tardiness || 0), 0) / members.length,
    activetrack: members.reduce((acc, curr) => acc + (curr?.activetrack || 0), 0) / members.length
  };
};
  
// Tipos para estados de la aplicación
export type GamePhase = 'game' | 'predictions' | 'dashboard';
  
export interface GameState {
  phase: GamePhase;
  score?: number;
  teamPrediction?: TeamPrediction;
}
