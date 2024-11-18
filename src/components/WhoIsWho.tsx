// src/components/WhoIsWho.tsx
'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FunFact, TEAM_MEMBERS, FUN_FACTS, TeamMember } from '@/types';
import { Star, Trophy, ArrowRight, ThumbsUp, ThumbsDown, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface WhoIsWhoProps {
  onGameComplete: () => void;
}

const TIMER_DURATION = 30; // 30 segundos para responder

export default function WhoIsWho({ onGameComplete }: WhoIsWhoProps) {
  const [randomizedFacts, setRandomizedFacts] = useState<FunFact[]>([]);
  const [currentFact, setCurrentFact] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const [score, setScore] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [shuffledMembers, setShuffledMembers] = useState<typeof TEAM_MEMBERS>([]);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const shuffledFacts = shuffleArray(FUN_FACTS);
    setRandomizedFacts(shuffledFacts);
    setShuffledMembers(shuffleArray(TEAM_MEMBERS));
  }, []);

  const handleTimeUp = useCallback(() => {
    if (!isTimerActive || showReveal) return;
    setIsTimerActive(false);
    setAnswers(prev => ({ ...prev, [currentFact]: 'timeout' }));
    setShowReveal(true);
  }, [currentFact, isTimerActive, showReveal]);

  useEffect(() => {
    if (!isTimerActive || showReveal || showResults) return;

    if (timeLeft === 0) {
      handleTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isTimerActive, showReveal, showResults, handleTimeUp]);

  const resetTimer = useCallback(() => {
    setTimeLeft(TIMER_DURATION);
    setIsTimerActive(true);
  }, []);

  const handleAnswer = useCallback((memberId: string) => {
    if (!isTimerActive) return;
    setIsTimerActive(false);
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
  }, [currentFact, isTimerActive, randomizedFacts]);

  const handleNextFact = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowReveal(false);
      if (currentFact < randomizedFacts.length - 1) {
        setCurrentFact(prev => prev + 1);
        resetTimer();
      } else {
        setShowResults(true);
      }
      setIsAnimating(false);
    }, 300);
  }, [currentFact, randomizedFacts.length, resetTimer]);

  const MemberAvatar = ({ member, className = "" }: { member: TeamMember, className?: string }) => {
    if (!member.avatarUrl || imageError[member.id]) {
      return (
        <div className={cn(
          "rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center",
          className
        )}>
          <span className="text-xl font-bold text-white">
            {member.name[0]}
          </span>
        </div>
      );
    }

    return (
      <div className={cn("rounded-full overflow-hidden", className)}>
        <Image 
          src={member.avatarUrl}
          alt={member.name}
          width={64}
          height={64}
          className="w-full h-full object-cover"
          onError={() => setImageError(prev => ({ ...prev, [member.id]: true }))}
          priority
        />
      </div>
    );
  };

  const TimerDisplay = () => (
    <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow">
      <Timer className={cn(
        "w-5 h-5",
        timeLeft <= 5 ? "text-red-500 animate-pulse" : "text-gray-500"
      )} />
      <span className={cn(
        "font-mono font-bold",
        timeLeft <= 5 ? "text-red-500" : "text-gray-700"
      )}>
        {timeLeft}s
      </span>
    </div>
  );

  if (randomizedFacts.length === 0 || shuffledMembers.length === 0) {
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
            const isTimeout = answers[index] === 'timeout';
            const isCorrect = !isTimeout && answers[index] === fact.correctMemberId;
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
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center space-x-2">
                    <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                      {isTimeout ? 'Se acabó el tiempo' : (
                        <>
                          Tu respuesta: 
                          <div className="inline-flex items-center ml-2">
                            {answeredMember && (
                              <MemberAvatar member={answeredMember} className="w-6 h-6 mr-1" />
                            )}
                            <span className="font-medium">{answeredMember?.name}</span>
                          </div>
                        </>
                      )}
                    </span>
                  </div>
                  {!isCorrect && correctMember && (
                    <div className="flex items-center space-x-2 text-green-600">
                      <span>Era:</span>
                      <MemberAvatar member={correctMember} className="w-6 h-6" />
                      <span className="font-medium">{correctMember.name}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <Button
          onClick={onGameComplete}
          className={cn(
            "mt-8 w-full",
            "bg-gradient-to-r from-purple-600 to-pink-600",
            "hover:from-purple-700 hover:to-pink-700 text-white"
          )}
        >
          Continuar a Predicciones
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    );
  }

  if (showReveal) {
    const currentAnswer = answers[currentFact];
    const isTimeout = currentAnswer === 'timeout';
    const isCorrect = !isTimeout && currentAnswer === randomizedFacts[currentFact].correctMemberId;
    const correctMember = TEAM_MEMBERS.find(m => m.id === randomizedFacts[currentFact].correctMemberId);
    const answeredMember = TEAM_MEMBERS.find(m => m.id === currentAnswer);

    return (
      <div className={`max-w-2xl mx-auto p-6 text-center transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="mb-8 transform transition-all duration-500">
          {isTimeout ? (
            <Timer className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          ) : isCorrect ? (
            <ThumbsUp className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
          ) : (
            <ThumbsDown className="w-16 h-16 text-red-500 mx-auto mb-4 animate-bounce" />
          )}
          
          <h2 className={`text-2xl font-bold mb-4 ${
            isTimeout ? 'text-yellow-600' : isCorrect ? 'text-green-600' : 'text-red-600'
          }`}>
            {isTimeout ? '¡Tiempo Agotado!' : isCorrect ? '¡Correcto!' : '¡Casi!'}
          </h2>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md mb-8 transform transition-all duration-500">
          <p className="text-xl text-gray-800 mb-4">
            {randomizedFacts[currentFact].fact}
          </p>
          <div className="text-lg">
            {!isTimeout && answeredMember && (
              <div className="mb-4 flex items-center justify-center space-x-2">
                <span>Tu respuesta:</span>
                <MemberAvatar member={answeredMember} className="w-8 h-8" />
                <span className="font-medium">{answeredMember.name}</span>
              </div>
            )}
            {(!isCorrect || isTimeout) && correctMember && (
              <div className="text-green-600 flex items-center justify-center space-x-2">
                <span>La respuesta correcta era:</span>
                <MemberAvatar member={correctMember} className="w-8 h-8" />
                <span className="font-medium">{correctMember.name}</span>
              </div>
            )}
          </div>
        </div>

        <Button
          onClick={handleNextFact}
          className={cn(
            "w-full max-w-md",
            "bg-gradient-to-r from-purple-600 to-pink-600",
            "hover:from-purple-700 hover:to-pink-700 text-white"
          )}
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
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-lg font-medium text-gray-800">
              Puntaje: {score}
            </span>
          </div>
          <TimerDisplay />
        </div>
        <span className="text-gray-600">
          Dato {currentFact + 1} de {randomizedFacts.length}
        </span>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md mb-8 transform transition-all duration-300 hover:shadow-lg">
        <p className="text-xl text-black-800 text-center">
          {randomizedFacts[currentFact].fact}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {shuffledMembers.map((member) => (
          <button
            key={member.id}
            onClick={() => handleAnswer(member.id)}
            disabled={!isTimerActive}
            className={cn(
              "p-4 h-auto flex flex-col items-center bg-white border rounded-lg",
              "hover:bg-purple-50 transition-all duration-300 transform hover:scale-105",
              "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50",
              !isTimerActive && "opacity-50 cursor-not-allowed"
            )}
          >
            <MemberAvatar member={member} className="w-16 h-16 mb-2" />
            <span className="text-sm font-medium">{member.name}</span>
          </button>
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