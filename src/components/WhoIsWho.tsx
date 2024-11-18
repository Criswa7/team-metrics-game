// src/components/WhoIsWho.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { FunFact, TEAM_MEMBERS, FUN_FACTS } from '@/types';
import { Star, Trophy } from 'lucide-react';

interface WhoIsWhoProps {
  onGameComplete: () => void;
}

export default function WhoIsWho({ onGameComplete }: WhoIsWhoProps) {
  // Crear array aleatorio de facts al inicio
  const [randomizedFacts, setRandomizedFacts] = useState<FunFact[]>([]);
  const [currentFact, setCurrentFact] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  // Función para mezclar array
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Inicializar los facts aleatorios al montar el componente
  useEffect(() => {
    setRandomizedFacts(shuffleArray(FUN_FACTS));
  }, []);

  const score = Object.entries(answers).reduce((acc, [index, answerId]) => {
    const fact = randomizedFacts[Number(index)];
    return acc + (answerId === fact?.correctMemberId ? 1 : 0);
  }, 0);

  const handleAnswer = (memberId: string) => {
    if (answers[currentFact] !== undefined) return;

    setAnswers(prev => ({ ...prev, [currentFact]: memberId }));
    
    setTimeout(() => {
      if (currentFact < randomizedFacts.length - 1) {
        setCurrentFact(prev => prev + 1);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  // Esperar a que los facts estén mezclados antes de mostrar el contenido
  if (randomizedFacts.length === 0) {
    return <div>Cargando...</div>;
  }

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ¡Juego Completado!
          </h2>
          <p className="text-lg text-gray-700">
            Acertaste {score} de {randomizedFacts.length} datos curiosos
          </p>
        </div>

        <div className="space-y-4">
          {randomizedFacts.map((fact, index) => {
            const isCorrect = answers[index] === fact.correctMemberId;
            const answeredMember = TEAM_MEMBERS.find(m => m.id === answers[index]);
            const correctMember = TEAM_MEMBERS.find(m => m.id === fact.correctMemberId);

            return (
              <div key={fact.id} 
                className={`p-4 rounded-lg ${
                  isCorrect ? 'bg-green-50' : 'bg-red-50'
                } border ${
                  isCorrect ? 'border-green-200' : 'border-red-200'
                }`}
              >
                <p className="text-gray-800 mb-2">{fact.fact}</p>
                <div className="flex justify-between text-sm">
                  <span className={`${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    Tu respuesta: {answeredMember?.name}
                  </span>
                  {!isCorrect && (
                    <span className="text-green-600">
                      Era: {correctMember?.name}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={onGameComplete}
          className="mt-8 w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
        >
          Continuar a Predicciones
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-500 mr-2" />
          <span className="text-lg font-medium text-gray-800">
            Puntaje: {score}
          </span>
        </div>
        <span className="text-gray-600">
          Dato {currentFact + 1} de {randomizedFacts.length}
        </span>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md mb-8">
        <p className="text-xl text-gray-800 text-center">
          {randomizedFacts[currentFact].fact}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {shuffleArray(TEAM_MEMBERS).map((member) => {
          const isSelected = answers[currentFact] === member.id;
          const isCorrect = isSelected && member.id === randomizedFacts[currentFact].correctMemberId;

          return (
            <button
              key={member.id}
              onClick={() => handleAnswer(member.id)}
              disabled={answers[currentFact] !== undefined}
              className={`
                p-4 rounded-lg transition-all
                ${isSelected 
                  ? isCorrect
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                }
              `}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold mb-2">
                  {member.name[0]}
                </div>
                <span className="text-sm font-medium">{member.name}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
          style={{ width: `${((currentFact + 1) / randomizedFacts.length) * 100}%` }}
        />
      </div>
    </div>
  );
}