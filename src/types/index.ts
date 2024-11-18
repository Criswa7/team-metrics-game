// src/types/index.ts

export interface TeamMember {
  id: string;
  name: string;
  avatarUrl?: string;
  metrics?: {
    tardiness: number;
    activetrack: number;
    daily?: {
      [key: string]: DailyMetrics;
    };
  };
}

interface DailyMetrics {
  tardiness: number;
  activetrack: number;
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
  '1': { 
    tardiness: 0, 
    activetrack: 0.0,
    daily: {
      '2024-11-11': { tardiness: 0, activetrack: 0.0 },
      '2024-11-12': { tardiness: 0, activetrack: 0.0 },
      '2024-11-13': { tardiness: 0, activetrack: 0.0 },
      '2024-11-14': { tardiness: 0, activetrack: 0.0 },
      '2024-11-15': { tardiness: 0, activetrack: 0.0 }
    }
  },
  '2': { 
    tardiness: 17, 
    activetrack: 7.2,
    daily: {
      '2024-11-11': { tardiness: 0, activetrack: 7.4 },
      '2024-11-12': { tardiness: 0, activetrack: 7.1 },
      '2024-11-13': { tardiness: 17, activetrack: 7.2 },
      '2024-11-14': { tardiness: 0, activetrack: 7.7 },
      '2024-11-15': { tardiness: 0, activetrack: 6.6 }
    }
  },
  '3': { 
    tardiness: 0, 
    activetrack: 6.9,
    daily: {
      '2024-11-11': { tardiness: 0, activetrack: 6.9 },
      '2024-11-12': { tardiness: 0, activetrack: 7.4 },
      '2024-11-13': { tardiness: 0, activetrack: 7.1 },
      '2024-11-14': { tardiness: 0, activetrack: 7.3 },
      '2024-11-15': { tardiness: 0, activetrack: 6.0 }
    }
  },
  '4': { 
    tardiness: 0, 
    activetrack: 7.5,
    daily: {
      '2024-11-11': { tardiness: 0, activetrack: 7.9 },
      '2024-11-12': { tardiness: 0, activetrack: 7.4 },
      '2024-11-13': { tardiness: 0, activetrack: 7.3 },
      '2024-11-14': { tardiness: 0, activetrack: 7.6 },
      '2024-11-15': { tardiness: 0, activetrack: 7.4 }
    }
  },
  '5': { 
    tardiness: 13, 
    activetrack: 7.2,
    daily: {
      '2024-11-11': { tardiness: 0, activetrack: 7.6 },
      '2024-11-12': { tardiness: 0, activetrack: 6.7 },
      '2024-11-13': { tardiness: 0, activetrack: 7.0 },
      '2024-11-14': { tardiness: 7, activetrack: 7.3 },
      '2024-11-15': { tardiness: 6, activetrack: 7.2 }
    }
  },
  '6': { 
    tardiness: 0, 
    activetrack: 6.4,
    daily: {
      '2024-11-11': { tardiness: 0, activetrack: 6.3 },
      '2024-11-12': { tardiness: 0, activetrack: 6.6 },
      '2024-11-13': { tardiness: 0, activetrack: 6.7 },
      '2024-11-14': { tardiness: 0, activetrack: 6.6 },
      '2024-11-15': { tardiness: 0, activetrack: 5.9 }
    }
  },
  '7': { 
    tardiness: 22, 
    activetrack: 6.4,
    daily: {
      '2024-11-11': { tardiness: 3, activetrack: 6.8 },
      '2024-11-12': { tardiness: 8, activetrack: 6.9 },
      '2024-11-13': { tardiness: 3, activetrack: 6.7 },
      '2024-11-14': { tardiness: 3, activetrack: 5.9 },
      '2024-11-15': { tardiness: 5, activetrack: 5.6 }
    }
  },
  '8': { 
    tardiness: 0, 
    activetrack: 7.0,
    daily: {
      '2024-11-11': { tardiness: 0, activetrack: 7.0 },
      '2024-11-12': { tardiness: 0, activetrack: 7.1 },
      '2024-11-13': { tardiness: 0, activetrack: 7.1 },
      '2024-11-14': { tardiness: 0, activetrack: 6.9 },
      '2024-11-15': { tardiness: 0, activetrack: 7.1 }
    }
  },
  '9': { 
    tardiness: 23, 
    activetrack: 6.6,
    daily: {
      '2024-11-11': { tardiness: 0, activetrack: 6.6 },
      '2024-11-12': { tardiness: 8, activetrack: 6.9 },
      '2024-11-13': { tardiness: 1, activetrack: 6.6 },
      '2024-11-14': { tardiness: 0, activetrack: 6.3 },
      '2024-11-15': { tardiness: 14, activetrack: 6.8 }
    }
  },
  '10': { 
    tardiness: 6, 
    activetrack: 7.2,
    daily: {
      '2024-11-11': { tardiness: 0, activetrack: 7.7 },
      '2024-11-12': { tardiness: 6, activetrack: 6.9 },
      '2024-11-13': { tardiness: 0, activetrack: 7.2 },
      '2024-11-14': { tardiness: 0, activetrack: 7.4 },
      '2024-11-15': { tardiness: 0, activetrack: 6.8 }
    }
  },
  '11': { 
    tardiness: 0, 
    activetrack: 6.9,
    daily: {
      '2024-11-11': { tardiness: 0, activetrack: 7.2 },
      '2024-11-12': { tardiness: 0, activetrack: 7.0 },
      '2024-11-13': { tardiness: 0, activetrack: 7.1 },
      '2024-11-14': { tardiness: 0, activetrack: 6.6 },
      '2024-11-15': { tardiness: 0, activetrack: 6.6 }
    }
  },
  '12': { 
    tardiness: 0, 
    activetrack: 0.0,
    daily: {
      '2024-11-11': { tardiness: 0, activetrack: 0.0 },
      '2024-11-12': { tardiness: 0, activetrack: 0.0 },
      '2024-11-13': { tardiness: 0, activetrack: 0.0 },
      '2024-11-14': { tardiness: 0, activetrack: 0.0 },
      '2024-11-15': { tardiness: 0, activetrack: 0.0 }
    }
  },
  '13': { 
    tardiness: 0, 
    activetrack: 6.9,
    daily: {
      '2024-11-11': { tardiness: 0, activetrack: 0.0 },
      '2024-11-12': { tardiness: 0, activetrack: 0.0 },
      '2024-11-13': { tardiness: 0, activetrack: 0.0 },
      '2024-11-14': { tardiness: 0, activetrack: 6.9 },
      '2024-11-15': { tardiness: 0, activetrack: 6.9 }
    }
  }
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
    fact: "Jugué en la liga de voley de Bogota",
    correctMemberId: "13"
  }
];
  
export const METRICS_GOALS = {
  TARDINESS_GOAL: 15, // minutos máximos aceptables de tardanza
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

// Constantes para días de la semana
export const WEEKDAYS = [
  { date: '2024-11-11', label: 'Lun' },
  { date: '2024-11-12', label: 'Mar' },
  { date: '2024-11-13', label: 'Mie' },
  { date: '2024-11-14', label: 'Jue' },
  { date: '2024-11-15', label: 'Vie' }
] as const;
  
// Tipos para estados de la aplicación
export type GamePhase = 'selection' | 'game' | 'predictions' | 'dashboard';

export interface GameState {
  phase: GamePhase;
  score?: number;
  teamPrediction?: TeamPrediction;
  currentUserId?: string;
}

// Tipos para predicciones
export interface Prediction {
  userId: string;
  metrics: {
    tardiness: number;
    activetrack: number;
  };
  timestamp: string;
}

// Tipos para el dashboard
export type SortField = 'name' | 'tardiness' | 'activetrack';
export type SortDirection = 'asc' | 'desc';

export interface DashboardState {
  sortField: SortField;
  sortDirection: SortDirection;
  selectedDay: string | null;
  selectedMember: string | null;
}

// Tipos para el cálculo de métricas
export interface MetricSummary {
  total: number;
  average: number;
  min: number;
  max: number;
  meetingGoal: number; // número de personas que cumplen la meta
}

export interface TeamMetricsSummary {
  tardiness: MetricSummary;
  activetrack: MetricSummary;
}

// Utilidades adicionales para métricas
export const calculateTeamMetricsSummary = (metrics: Record<string, TeamMember['metrics']>): TeamMetricsSummary => {
  const members = Object.values(metrics).filter(m => m !== undefined);
  
  return {
    tardiness: {
      total: members.reduce((acc, curr) => acc + (curr?.tardiness || 0), 0),
      average: members.reduce((acc, curr) => acc + (curr?.tardiness || 0), 0) / members.length,
      min: Math.min(...members.map(m => m?.tardiness || 0)),
      max: Math.max(...members.map(m => m?.tardiness || 0)),
      meetingGoal: members.filter(m => (m?.tardiness || 0) <= METRICS_GOALS.TARDINESS_GOAL).length
    },
    activetrack: {
      total: members.reduce((acc, curr) => acc + (curr?.activetrack || 0), 0),
      average: members.reduce((acc, curr) => acc + (curr?.activetrack || 0), 0) / members.length,
      min: Math.min(...members.map(m => m?.activetrack || 0)),
      max: Math.max(...members.map(m => m?.activetrack || 0)),
      meetingGoal: members.filter(m => (m?.activetrack || 0) >= METRICS_GOALS.ACTIVETRACK_GOAL).length
    }
  };
};

// Función para calcular métricas diarias del equipo
export const calculateDailyTeamMetrics = (metrics: Record<string, TeamMember['metrics']>) => {
  const dailyMetrics: Record<string, { tardiness: number; activetrack: number; count: number }> = {};

  Object.values(metrics).forEach(memberMetrics => {
    if (memberMetrics?.daily) {
      Object.entries(memberMetrics.daily).forEach(([date, metrics]) => {
        if (!dailyMetrics[date]) {
          dailyMetrics[date] = { tardiness: 0, activetrack: 0, count: 0 };
        }
        dailyMetrics[date].tardiness += metrics.tardiness;
        dailyMetrics[date].activetrack += metrics.activetrack;
        dailyMetrics[date].count += 1;
      });
    }
  });

  // Calcular promedios
  return Object.entries(dailyMetrics).reduce((acc, [date, metrics]) => {
    acc[date] = {
      tardiness: metrics.tardiness / metrics.count,
      activetrack: metrics.activetrack / metrics.count
    };
    return acc;
  }, {} as Record<string, { tardiness: number; activetrack: number }>);
};

// Función para obtener el estado de las métricas de un miembro
export const getMemberMetricsStatus = (metrics: TeamMember['metrics']) => {
  if (!metrics) return { tardiness: 'no-data', activetrack: 'no-data' };

  return {
    tardiness: metrics.tardiness === 0 ? 'perfect' :
               metrics.tardiness <= METRICS_GOALS.TARDINESS_GOAL ? 'good' : 'warning',
    activetrack: metrics.activetrack >= METRICS_GOALS.ACTIVETRACK_GOAL + 0.5 ? 'excellent' :
                 metrics.activetrack >= METRICS_GOALS.ACTIVETRACK_GOAL ? 'good' : 'warning'
  };
};

export type MetricStatus = 'perfect' | 'excellent' | 'good' | 'warning' | 'no-data';

export interface TeamMemberMetricsStatus {
  tardiness: MetricStatus;
  activetrack: MetricStatus;
}
