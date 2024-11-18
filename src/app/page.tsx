// src/app/page.tsx
'use client';
import { useState, useCallback } from 'react';
import { GamePhase } from '@/types';
import GameLayout from '@/components/GameLayout';
import UserSelection from '@/components/UserSelection';
import WhoIsWho from '@/components/WhoIsWho';
import Predictions from '@/components/Predictions';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const [phase, setPhase] = useState<GamePhase>('selection');

  const getTitle = useCallback(() => {
    switch (phase) {
      case 'selection':
        return '¡Bienvenido al Juego!';
      case 'game':
        return '¿Quién es Quién?';
      case 'predictions':
        return 'Predicciones de la Semana';
      case 'dashboard':
        return 'Dashboard de Métricas';
      default:
        return '';
    }
  }, [phase]);

  const handleUserSelection = useCallback(() => {
    setPhase('game');
  }, []);

  const handleGameComplete = useCallback(() => {
    setPhase('predictions');
  }, []);

  const handlePredictionsComplete = useCallback(() => {
    setPhase('dashboard');
  }, []);

  const renderPhase = useCallback(() => {
    switch (phase) {
      case 'selection':
        return (
          <UserSelection
            onComplete={handleUserSelection}
          />
        );
      case 'game':
        return (
          <WhoIsWho
            onGameComplete={handleGameComplete}
          />
        );
      case 'predictions':
        return (
          <Predictions
            onComplete={handlePredictionsComplete}
          />
        );
      case 'dashboard':
        return <Dashboard />;
      default:
        return null;
    }
  }, [phase, handleUserSelection, handleGameComplete, handlePredictionsComplete]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-pink-50">
      <GameLayout title={getTitle()}>
        {renderPhase()}
      </GameLayout>
    </main>
  );
}