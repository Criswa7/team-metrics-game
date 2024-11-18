'use client';
import { useState } from 'react';
import { GamePhase } from '@/types';
import WhoIsWho from '@/components/WhoIsWho';
import Predictions from '@/components/Predictions';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const [phase, setPhase] = useState<GamePhase>('game');

  const renderPhase = () => {
    switch (phase) {
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
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-pink-50 text-gray-800">
      {renderPhase()}
    </main>
  );
}