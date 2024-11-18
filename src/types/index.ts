// src/types/index.ts

export interface TeamMember {
    id: string;
    name: string;
    metrics?: {
      tardiness: number; // en minutos
      activetrack: number; // en horas
    };
  }
  
  export interface TeamPrediction {
    tardiness: number; // predicción de minutos promedio del equipo
    activetrack: number; // predicción de horas promedio del equipo
  }
  
  export interface FunFact {
    id: number;
    fact: string;
    correctMemberId: string;
  }
  
  export const TEAM_MEMBERS: TeamMember[] = [
    { id: '1', name: 'Camila Higuera' },
    { id: '2', name: 'Christian Uribe' },
    { id: '3', name: 'Cristian Florez' },
    { id: '4', name: 'David Lopez' },
    { id: '5', name: 'Gustavo' },
    { id: '6', name: 'Karen' },
    { id: '7', name: 'Luciany' },
    { id: '8', name: 'Lucia' },
    { id: '9', name: 'Monica' },
    { id: '10', name: 'Johan' },
    { id: '11', name: 'Juan Rico' },
    { id: '12', name: 'Sebastian' },
    { id: '13', name: 'Nicolas' }
  ];
  
  // Datos de ejemplo para las métricas de la semana pasada
  // Reemplazar estos datos con los reales cuando estén disponibles
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
      correctMemberId: "1" // Camila
    },
    {
      id: 1,
      fact: "Una vez me quedé dormido en una reunión y mi cámara estaba encendida",
      correctMemberId: "2" // Christian
    },
    {
      id: 2,
      fact: "Colecciono figuras de anime y tengo más de 50 en mi escritorio",
      correctMemberId: "3" // Cristian F
    },
    {
      id: 3,
      fact: "Trabaje como profesor de primaria y me echaron el día del profesor",
      correctMemberId: "4" // David
    },
    {
      id: 4,
      fact: "En el colegio era futbolista semi profesional, llegué a hacer pruebas para un equipo chileno",
      correctMemberId: "5" // Gustavo
    },
    {
      id: 5,
      fact: "Tengo un canal de YouTube secreto sobre recetas de cocina",
      correctMemberId: "6" // Karen
    },
    {
      id: 6,
      fact: "Sé montar skate",
      correctMemberId: "7" // Luciany
    },
    {
      id: 7,
      fact: "Gané un concurso de karaoke cantando rancheras",
      correctMemberId: "8" // Lucia
    },
    {
      id: 8,
      fact: "Tengo una colección de más de 100 pares de calcetines temáticos",
      correctMemberId: "9" // Monica
    },
    {
      id: 9,
      fact: "Mi gato se llama 'Bug' porque lo encontré mientras debuggeaba código",
      correctMemberId: "10" // Johan
    },
    {
      id: 10,
      fact: "Fui campeón nacional de ajedrez en categoría juvenil",
      correctMemberId: "11" // Sebastian Rico
    },
    {
      id: 11,
      fact: "Toco la batería en una banda de covers de rock de los 80s",
      correctMemberId: "12" // Sebastian
    },
    {
      id: 12,
      fact: "Trabajé como barista y puedo hacer arte latte con más de 20 diseños diferentes",
      correctMemberId: "13" // Nicolas
    }
  ];
  
  // Constantes para la aplicación
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
