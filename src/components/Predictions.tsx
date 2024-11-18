'use client';
import React, { useState } from 'react';
import { Clock, Activity } from 'lucide-react';

interface PredictionsProps {
  onComplete: () => void;
}

export default function Predictions({ onComplete }: PredictionsProps) {
  const [predictions, setPredictions] = useState({
    tardiness: '',
    activetrack: ''
  });

  const isValidPrediction = () => {
    const tardiness = Number(predictions.tardiness);
    const activetrack = Number(predictions.activetrack);
    return (
      !isNaN(tardiness) && 
      !isNaN(activetrack) && 
      tardiness >= 0 && 
      activetrack >= 0 && 
      activetrack <= 24
    );
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          ¿Cómo crees que le irá al equipo la próxima semana?
        </h2>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md space-y-6">
        <div className="space-y-3">
          <label className="flex items-center text-gray-700 font-medium">
            <Clock className="w-5 h-5 mr-2 text-purple-500" />
            Tardiness promedio del equipo
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              value={predictions.tardiness}
              onChange={(e) => setPredictions(prev => ({ ...prev, tardiness: e.target.value }))}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Ej: 15"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              minutos
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <label className="flex items-center text-gray-700 font-medium">
            <Activity className="w-5 h-5 mr-2 text-green-500" />
            ActiveTrack promedio del equipo
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              max="24"
              step="0.1"
              value={predictions.activetrack}
              onChange={(e) => setPredictions(prev => ({ ...prev, activetrack: e.target.value }))}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Ej: 6.75"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              horas
            </span>
          </div>
        </div>

        <button
          onClick={onComplete}
          disabled={!isValidPrediction()}
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50"
        >
          Ver Dashboard de Métricas
        </button>
      </div>
    </div>
  );
}