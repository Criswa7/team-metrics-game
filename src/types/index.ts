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
    avatarUrl: 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-female.png'
  },
  { 
    id: '2', 
    name: 'Christian Uribe',
    avatarUrl: 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png'
  },
  { 
    id: '3', 
    name: 'Cristian Florez',
    avatarUrl: 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png'
  },
  { 
    id: '4', 
    name: 'David Lopez',
    avatarUrl: 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png'
  },
  { 
    id: '5', 
    name: 'Gustavo',
    avatarUrl: 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png'
  },
  { 
    id: '6', 
    name: 'Karen',
    avatarUrl: 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-female.png'
  },
  { 
    id: '7', 
    name: 'Luciany',
    avatarUrl: 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-female.png'
  },
  { 
    id: '8', 
    name: 'Lucia',
    avatarUrl: 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-female.png'
  },
  { 
    id: '9', 
    name: 'Monica',
    avatarUrl: 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-female.png'
  },
  { 
    id: '10', 
    name: 'Johan',
    avatarUrl: 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png'
  },
  { 
    id: '11', 
    name: 'Juan Rico',
    avatarUrl: 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png'
  },
  { 
    id: '12', 
    name: 'Sebastian',
    avatarUrl: 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png'
  },
  { 
    id: '13', 
    name: 'Nicolas',
    avatarUrl: 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png'
  }
];
  
export const LAST_WEEK_METRICS: Record<string, TeamMember['metrics']> = {
  '1': { tardiness: 0, activetrack: 6.8 },
  '2': { tardiness: 17, activetrack: 7.1 },
  '3': { tardiness: 0, activetrack: 6.9 },
  '4': { tardiness: 0, activetrack: 6.7 },
  '5': { tardiness: 13, activetrack: 7.0 },
  '6': { tardiness: 0, activetrack: 6.9 },
  '7': { tardiness: 22, activetrack: 6.8 },
  '8': { tardiness: 0, activetrack: 7.2 },
  '9': { tardiness: 23, activetrack: 6.9 },
  '10': { tardiness: 6, activetrack: 7.0 },
  '11': { tardiness: 0, activetrack: 6.8 },
  '12': { tardiness: 0, activetrack: 6.9 },
  '13': { tardiness: 0, activetrack: 6.7 }
};
  
export const FUN_FACTS: FunFact[] = [
  { 
    id: 0,
    fact: "Mi sueño frustrado era ser DJ, aún tengo una consola guardada en casa",
    correctMemberId: "1"
  },
  {
    id: 1,
    fact: "Una vez me quedé dormido en una reunión y mi cámara estaba encendida",
    correctMemberId: "2"
  },
  {
    id: 2,
    fact: "Colecciono figuras de anime y tengo más de 50 en mi escritorio",
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
    fact: "Tengo un canal de YouTube secreto sobre recetas de cocina",
    correctMemberId: "6"
  },
  {
    id: 6,
    fact: "Sé montar skate",
    correctMemberId: "7"
  },
  {
    id: 7,
    fact: "Gané un concurso de karaoke cantando rancheras",
    correctMemberId: "8"
  },
  {
    id: 8,
    fact: "Tengo una colección de más de 100 pares de calcetines temáticos",
    correctMemberId: "9"
  },
  {
    id: 9,
    fact: "Mi gato se llama 'Bug' porque lo encontré mientras debuggeaba código",
    correctMemberId: "10"
  },
  {
    id: 10,
    fact: "Fui campeón nacional de ajedrez en categoría juvenil",
    correctMemberId: "11"
  },
  {
    id: 11,
    fact: "Toco la batería en una banda de covers de rock de los 80s",
    correctMemberId: "12"
  },
  {
    id: 12,
    fact: "Trabajé como barista y puedo hacer arte latte con más de 20 diseños diferentes",
    correctMemberId: "13"
  }
];
  
export const METRICS_GOALS = {
  TARDINESS_GOAL: 30,
  ACTIVETRACK_GOAL: 6.75
};
  
export const calculateTeamAverages = (metrics: Record<string, TeamMember['metrics']>) => {
  const members = Object.values(metrics);
  return {
    tardiness: members.reduce((acc, curr) => acc + (curr?.tardiness || 0), 0) / members.length,
    activetrack: members.reduce((acc, curr) => acc + (curr?.activetrack || 0), 0) / members.length
  };
};
  
export type GamePhase = 'game' | 'predictions' | 'dashboard';
  
export interface GameState {
  phase: GamePhase;
  score?: number;
  teamPrediction?: TeamPrediction;
}