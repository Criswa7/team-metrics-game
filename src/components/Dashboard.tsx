'use client';
import React from 'react';
import { TEAM_MEMBERS, LAST_WEEK_METRICS } from '@/types';
import { Clock, Activity } from 'lucide-react';

export default function Dashboard() {
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

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <Clock className="w-5 h-5 text-purple-500 mr-2" />
            <h3 className="text-lg font-medium text-gray-800">
              Tardiness Promedio
            </h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">
            {teamAverage.tardiness.toFixed(1)}m
          </p>
          <p className="text-green-600 text-sm">
            Buen promedio del equipo
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <Activity className="w-5 h-5 text-green-500 mr-2" />
            <h3 className="text-lg font-medium text-gray-800">
              ActiveTrack Promedio
            </h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">
            {teamAverage.activetrack.toFixed(2)}h
          </p>
          <p className="text-green-600 text-sm">
            Superando la meta
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-6">
        Métricas Individuales
      </h3>

      <div className="space-y-4">
        {TEAM_MEMBERS.map((member) => {
          const metrics = LAST_WEEK_METRICS[member.id];
          return (
            <div key={member.id} className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-medium">
                    {member.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{member.name}</p>
                    <div className="flex space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {metrics?.tardiness}m
                      </span>
                      <span className="flex items-center">
                        <Activity className="w-4 h-4 mr-1" />
                        {metrics?.activetrack}h
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}