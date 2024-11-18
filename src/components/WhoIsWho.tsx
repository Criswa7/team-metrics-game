// src/components/WhoIsWho.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { FunFact, TEAM_MEMBERS, FUN_FACTS } from '@/types';
import { Star, Trophy, ArrowRight, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhoIsWhoProps {
  onGameComplete: () => void;
}

export default function WhoIsWho({ onGameComplete }: WhoIsWhoProps) {
  const [randomizedFacts, setRandomizedFacts] = useState<FunFact[]>([]);
  const [currentFact, setCurrentFact] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const [score, setScore] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    setRandomizedFacts(shuffleArray(FUN_FACTS));
  }, []);

  const handleAnswer = (memberId: string) => {
    setIsAnimating(true);
    const isCorrect = memberId === randomizedFacts[currentFact].correctMemberId;
    setAnswers(prev => ({ ...prev, [currentFact]: memberId }));
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setTimeout(() => {
      setShowReveal(true);
      setIsAnimating(false);
    }, 300);
  };

  const handleNextFact = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowReveal(false);
      if (currentFact < randomizedFacts.length - 1) {
        setCurrentFact(prev => prev + 1);
      } else {
        setShowResults(true);
      }
      setIsAnimating(false);
    }, 300);
  };

  if (randomizedFacts.length === 0) {
    return <div>Cargando...</div>;
  }

  if (showResults) {
    return (
      <div className={`max-w-2xl mx-auto p-6 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
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
              <div 
                key={fact.id}
                className={`p-4 rounded-lg transform transition-all duration-300 hover:scale-102 ${
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

        <Button
          onClick={onGameComplete}
          className="mt-8 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300"
        >
          Continuar a Predicciones
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    );
  }

  if (showReveal) {
    const currentAnswer = answers[currentFact];
    const isCorrect = currentAnswer === randomizedFacts[currentFact].correctMemberId;
    const correctMember = TEAM_MEMBERS.find(m => m.id === randomizedFacts[currentFact].correctMemberId);
    const answeredMember = TEAM_MEMBERS.find(m => m.id === currentAnswer);

    return (
      <div className={`max-w-2xl mx-auto p-6 text-center transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="mb-8 transform transition-all duration-500">
          {isCorrect ? (
            <ThumbsUp className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
          ) : (
            <ThumbsDown className="w-16 h-16 text-red-500 mx-auto mb-4 animate-bounce" />
          )}
          
          <h2 className={`text-2xl font-bold mb-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? '¡Correcto!' : '¡Casi!'}
          </h2>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md mb-8 transform transition-all duration-500">
          <p className="text-xl text-gray-800 mb-4">
            {randomizedFacts[currentFact].fact}
          </p>
          <div className="text-lg">
            <p className="mb-2">
              Tu respuesta: <span className="font-medium">{answeredMember?.name}</span>
            </p>
            {!isCorrect && (
              <p className="text-green-600">
                La respuesta correcta era: <span className="font-medium">{correctMember?.name}</span>
              </p>
            )}
          </div>
        </div>

        <Button
          onClick={handleNextFact}
          className="w-full max-w-md bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300"
        >
          {currentFact < randomizedFacts.length - 1 ? (
            <>
              Siguiente Dato
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          ) : (
            'Ver Resultados'
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className={`max-w-3xl mx-auto p-6 transition-all duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
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

      <div className="bg-white rounded-lg p-6 shadow-md mb-8 transform transition-all duration-300 hover:shadow-lg">
        <p className="text-xl text-gray-800 text-center">
          {randomizedFacts[currentFact].fact}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {shuffleArray(TEAM_MEMBERS).map((member) => (
          <Button
            key={member.id}
            onClick={() => handleAnswer(member.id)}
            variant="outline"
            className="p-4 h-auto flex flex-col items-center hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-lg font-bold mb-2 text-white">
              {member.name[0]}
            </div>
            <span className="text-sm font-medium">{member.name}</span>
          </Button>
        ))}
      </div>

      <div className="mt-6 bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentFact + 1) / randomizedFacts.length) * 100}%` }}
        />
      </div>
    </div>
  );
}