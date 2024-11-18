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
    avatarUrl: 'https://teams.microsoft.com/api/mt/amer/beta/users/2d1a3e6e-f735-4547-a205-e5f979ab83b2/profilepicturev2/8:orgid:b9608878-093f-411b-9546-0949edd2c356?displayname=Maria%20Higuera&size=HR64x64&avatarETag=NoETag_1726172202160'
  },
  { 
    id: '2', 
    name: 'Christian Uribe',
    avatarUrl: 'https://teams.microsoft.com/api/mt/amer/beta/users/2d1a3e6e-f735-4547-a205-e5f979ab83b2/profilepicturev2/8:orgid:fe7b1ae9-bf56-4b4a-837d-c05e6efcee6b?displayname=Christian%20Uribe&size=HR64x64&avatarETag=NoETag_1726172202160'
  },
  { 
    id: '3', 
    name: 'Cristian Florez',
    avatarUrl: 'https://teams.microsoft.com/api/mt/amer/beta/users/2d1a3e6e-f735-4547-a205-e5f979ab83b2/profilepicturev2/8:orgid:2d1a3e6e-f735-4547-a205-e5f979ab83b2?displayname=Cristian%20Florez&size=HR64x64&ETag=1706296434145&avatarETag=NoETag_1726172202160'
  },
  { 
    id: '4', 
    name: 'David Lopez',
    avatarUrl: 'https://teams.microsoft.com/api/mt/amer/beta/users/2d1a3e6e-f735-4547-a205-e5f979ab83b2/profilepicturev2/8:orgid:324515c2-6dd3-4b64-9a3d-4792769cc95d?displayname=Leissnel%20Lopez&size=HR64x64&avatarETag=NoETag_1726172202160'
  },
  { 
    id: '5', 
    name: 'Gustavo',
    avatarUrl: 'https://teams.microsoft.com/api/mt/amer/beta/users/2d1a3e6e-f735-4547-a205-e5f979ab83b2/profilepicturev2/8:orgid:57c57785-3efb-4848-828e-81b5ca612fee?displayname=Gustavo%20Padilla&size=HR64x64&avatarETag=NoETag_1726172202160'
  },
  { 
    id: '6', 
    name: 'Karen',
    avatarUrl: 'https://teams.microsoft.com/api/mt/amer/beta/users/2d1a3e6e-f735-4547-a205-e5f979ab83b2/profilepicturev2/8:orgid:e1499209-53ac-4375-abf7-2dd63e21a364?displayname=Karen%20Velasquez&size=HR64x64&avatarETag=NoETag_1726172202160'
  },
  { 
    id: '7', 
    name: 'Luciany',
    avatarUrl: 'https://teams.microsoft.com/api/mt/amer/beta/users/2d1a3e6e-f735-4547-a205-e5f979ab83b2/profilepicturev2/8:orgid:cd4b9c12-6cae-404f-855c-7bef72869b58?displayname=Luciany%20Londono&size=HR64x64&avatarETag=NoETag_1726172202160'
  },
  { 
    id: '8', 
    name: 'Lucia',
    avatarUrl: 'https://teams.microsoft.com/api/mt/amer/beta/users/2d1a3e6e-f735-4547-a205-e5f979ab83b2/profilepicturev2/8:orgid:402110f7-2f70-4500-8047-9ce973490ec9?displayname=Lucia%20Hernandez&size=HR64x64&avatarETag=NoETag_1726172202160'
  },
  { 
    id: '9', 
    name: 'Monica',
    avatarUrl: 'https://teams.microsoft.com/api/mt/amer/beta/users/2d1a3e6e-f735-4547-a205-e5f979ab83b2/profilepicturev2/8:orgid:cc3037e1-e036-4bd1-8584-edd1c751e8ec?displayname=Monica%20Caldera&size=HR64x64&avatarETag=NoETag_1726172202160'
  },
  { 
    id: '10', 
    name: 'Johan',
    avatarUrl: 'https://teams.microsoft.com/api/mt/amer/beta/users/2d1a3e6e-f735-4547-a205-e5f979ab83b2/profilepicturev2/8:orgid:b8f66d1b-8274-4ae7-8757-ffc66903b993?displayname=Johan%20Serna&size=HR64x64&avatarETag=NoETag_1726172202160'
  },
  { 
    id: '11', 
    name: 'Juan Rico',
    avatarUrl: 'https://teams.microsoft.com/api/mt/amer/beta/users/2d1a3e6e-f735-4547-a205-e5f979ab83b2/profilepicturev2/8:orgid:747429bb-85bc-4f4e-93c7-abcfbc118f17?displayname=Juan%20Rico&size=HR64x64&avatarETag=NoETag_1726172202160'
  },
  { 
    id: '12', 
    name: 'Sebastian',
    avatarUrl: 'https://teams.microsoft.com/api/mt/amer/beta/users/2d1a3e6e-f735-4547-a205-e5f979ab83b2/profilepicturev2/8:orgid:3d77bc14-427c-490c-824a-dc8bcfe6bcc9?displayname=Sebastian%20Diaz&size=HR64x64&avatarETag=NoETag_1726172202160'
  },
  { 
    id: '13', 
    name: 'Nicolas',
    avatarUrl: 'https://teams.microsoft.com/api/mt/amer/beta/users/2d1a3e6e-f735-4547-a205-e5f979ab83b2/profilepicturev2/8:orgid:98cd391c-7773-4189-8d03-1d0073686083?displayname=Nicolas%20Fonseca&size=HR64x64&avatarETag=NoETag_1726172202160'
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
