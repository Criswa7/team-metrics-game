// src/app/page.tsx
'use client';
import { useState } from 'react';
import { GamePhase } from '@/types';
import GameLayout from '@/components/GameLayout';
import UserSelection from '@/components/UserSelection';
import WhoIsWho from '@/components/WhoIsWho';
import Predictions from '@/components/Predictions';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const [phase, setPhase] = useState<GamePhase>('selection');
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  const getTitle = () => {
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
  };

  const renderPhase = () => {
    switch (phase) {
      case 'selection':
        return (
          <UserSelection
            onComplete={(userId) => {
              setCurrentUserId(userId);
              setPhase('game');
            }}
          />
        );
      case 'game':
        return (
          <WhoIsWho
            onGameComplete={() => setPhase('predictions')}
          />
        );
      case 'predictions':
        return (
          <Predictions
            onComplete={() => setPhase('dashboard')}
          />
        );
      case 'dashboard':
        return <Dashboard />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-pink-50">
      <GameLayout title={getTitle()}>
        {renderPhase()}
      </GameLayout>
    </main>
  );
}