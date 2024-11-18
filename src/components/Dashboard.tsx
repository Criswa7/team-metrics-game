// src/components/Dashboard.tsx
'use client';
import React, { useState } from 'react';
import { TEAM_MEMBERS, LAST_WEEK_METRICS, METRICS_GOALS, TeamMember } from '@/types';
import { Clock, Activity, TrendingUp, AlertCircle, Award, CheckCircle, ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const WEEKDAYS = [
  { date: '2024-11-11', label: 'Lun' },
  { date: '2024-11-12', label: 'Mar' },
  { date: '2024-11-13', label: 'Mie' },
  { date: '2024-11-14', label: 'Jue' },
  { date: '2024-11-15', label: 'Vie' }
];

export default function Dashboard() {
  const [sortField, setSortField] = useState<'name' | 'tardiness' | 'activetrack'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  // Calcular promedios del equipo
  const teamAverage = TEAM_MEMBERS.reduce(
    (acc, member) => {
      const metrics = LAST_WEEK_METRICS[member.id];
      return {
        tardiness: acc.tardiness + (metrics?.tardiness || 0),
        activetrack: acc.activetrack + (metrics?.activetrack || 0),
      };
    },
    { tardiness: 0, activetrack: 0 }
  );
  teamAverage.tardiness /= TEAM_MEMBERS.length;
  teamAverage.activetrack /= TEAM_MEMBERS.length;

  // Calcular estadísticas adicionales
  const stats = TEAM_MEMBERS.reduce(
    (acc, member) => {
      const metrics = LAST_WEEK_METRICS[member.id];
      if (metrics) {
        if (metrics.tardiness === 0) acc.punctualMembers++;
        if (metrics.activetrack >= METRICS_GOALS.ACTIVETRACK_GOAL) acc.activeMembers++;
      }
      return acc;
    },
    { punctualMembers: 0, activeMembers: 0 }
  );

  // Ordenar miembros del equipo
  const sortedMembers = [...TEAM_MEMBERS].sort((a, b) => {
    const metricsA = LAST_WEEK_METRICS[a.id];
    const metricsB = LAST_WEEK_METRICS[b.id];

    if (sortField === 'name') {
      return sortDirection === 'asc' 
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }

    const valueA = metricsA?.[sortField] || 0;
    const valueB = metricsB?.[sortField] || 0;

    return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
  });

  const toggleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getActiveTrackColor = (value: number) => {
    if (value === 0) return 'bg-gray-100';
    if (value < METRICS_GOALS.ACTIVETRACK_GOAL) return 'bg-red-100';
    if (value === METRICS_GOALS.ACTIVETRACK_GOAL) return 'bg-yellow-100';
    const intensity = Math.min(100, ((value - METRICS_GOALS.ACTIVETRACK_GOAL) / 2) * 100);
    return `bg-green-${Math.round(intensity / 10) * 100}`;
  };

  const MetricCard = ({ 
    icon: Icon, 
    title, 
    value, 
    subtext, 
    color 
  }: { 
    icon: any, 
    title: string, 
    value: string, 
    subtext: string, 
    color: string 
  }) => (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-4">
        <Icon className={`w-5 h-5 ${color} mr-2`} />
        <h3 className="text-lg font-medium text-gray-800">
          {title}
        </h3>
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-2">
        {value}
      </p>
      <p className={`${color} text-sm`}>
        {subtext}
      </p>
    </div>
  );

  const DailyMetricsHeatmap = ({ member }: { member: TeamMember }) => {
    const metrics = LAST_WEEK_METRICS[member.id];
    if (!metrics?.daily) return null;

    return (
      <div className="flex gap-1">
        {WEEKDAYS.map(({ date, label }) => {
          const dayMetrics = metrics.daily?.[date];
          if (!dayMetrics) return null;

          return (
            <div 
              key={date}
              className={cn(
                "flex-1 p-2 rounded transition-all",
                getActiveTrackColor(dayMetrics.activetrack),
                selectedDay === date && "ring-2 ring-purple-500"
              )}
              onClick={() => setSelectedDay(selectedDay === date ? null : date)}
            >
              <div className="text-xs font-medium text-gray-600">{label}</div>
              <div className="text-sm font-bold text-gray-800">{dayMetrics.activetrack}h</div>
              {dayMetrics.tardiness > 0 && (
                <div className="text-xs text-red-500">{dayMetrics.tardiness}m</div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const MemberRow = ({ member }: { member: TeamMember }) => {
    const metrics = LAST_WEEK_METRICS[member.id];
    const meetsActiveTrackGoal = (metrics?.activetrack || 0) >= METRICS_GOALS.ACTIVETRACK_GOAL;
    const isPunctual = (metrics?.tardiness || 0) === 0;

    return (
      <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-medium">
                {member.name[0]}
              </div>
              <div>
                <p className="font-medium text-gray-800">{member.name}</p>
                <div className="flex space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Clock className={cn(
                      "w-4 h-4 mr-1",
                      isPunctual ? "text-green-500" : "text-yellow-500"
                    )} />
                    {metrics?.tardiness}m
                  </span>
                  <span className="flex items-center">
                    <Activity className={cn(
                      "w-4 h-4 mr-1",
                      meetsActiveTrackGoal ? "text-green-500" : "text-yellow-500"
                    )} />
                    {metrics?.activetrack}h
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              {isPunctual && (
                <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs flex items-center">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Puntual
                </div>
              )}
              {meetsActiveTrackGoal && (
                <div className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs flex items-center">
                  <Award className="w-3 h-3 mr-1" />
                  Meta AT
                </div>
              )}
            </div>
          </div>
          <DailyMetricsHeatmap member={member} />
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Métricas Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          icon={Clock}
          title="Tardiness Promedio"
          value={`${teamAverage.tardiness.toFixed(1)}m`}
          subtext={`${stats.punctualMembers} miembros puntuales`}
          color="text-purple-500"
        />
        <MetricCard
          icon={Activity}
          title="ActiveTrack Promedio"
          value={`${teamAverage.activetrack.toFixed(2)}h`}
          subtext={`${stats.activeMembers} cumplen la meta`}
          color="text-green-500"
        />
        <MetricCard
          icon={TrendingUp}
          title="Meta ActiveTrack"
          value={`${METRICS_GOALS.ACTIVETRACK_GOAL}h`}
          subtext="Objetivo semanal"
          color="text-blue-500"
        />
        <MetricCard
          icon={AlertCircle}
          title="Límite Tardanza"
          value={`${METRICS_GOALS.TARDINESS_GOAL}m`}
          subtext="Máximo permitido"
          color="text-red-500"
        />
      </div>

      {/* Tabla de Miembros */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            Métricas Individuales
          </h3>
          <div className="flex space-x-4">
            <button
              onClick={() => toggleSort('name')}
              className={cn(
                "text-sm flex items-center space-x-1",
                sortField === 'name' ? "text-purple-600" : "text-gray-600"
              )}
            >
              <span>Nombre</span>
              {sortField === 'name' && (
                sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => toggleSort('tardiness')}
              className={cn(
                "text-sm flex items-center space-x-1",
                sortField === 'tardiness' ? "text-purple-600" : "text-gray-600"
              )}
            >
              <span>Tardanza</span>
              {sortField === 'tardiness' && (
                sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => toggleSort('activetrack')}
              className={cn(
                "text-sm flex items-center space-x-1",
                sortField === 'activetrack' ? "text-purple-600" : "text-gray-600"
              )}
            >
              <span>ActiveTrack</span>
              {sortField === 'activetrack' && (
                sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Leyenda del Heatmap */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Leyenda de Colores</h4>
          <div className="flex items-center space-x-4 text-sm">
            <span className="flex items-center">
              <div className="w-4 h-4 bg-red-100 rounded mr-1"></div>
              Bajo meta
            </span>
            <span className="flex items-center">
              <div className="w-4 h-4 bg-yellow-100 rounded mr-1"></div>
              Meta exacta
            </span>
            <span className="flex items-center">
              <div className="w-4 h-4 bg-green-100 rounded mr-1"></div>
              Sobre meta
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {sortedMembers.map(member => (
            <MemberRow key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}