// src/components/UserSelection.tsx
'use client';
import React, { useState } from 'react';
import { TeamMember, TEAM_MEMBERS } from '@/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Check } from 'lucide-react';

interface UserSelectionProps {
  onComplete: (selectedUserId: string) => void;
}

export default function UserSelection({ onComplete }: UserSelectionProps) {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const MemberAvatar = ({ member, selected, onClick }: { 
    member: TeamMember; 
    selected: boolean;
    onClick: () => void;
  }) => {
    const hasError = imageError[member.id];

    return (
      <button
        onClick={onClick}
        className={cn(
          "group relative p-4 rounded-lg transition-all duration-300",
          "hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500",
          selected && "bg-purple-100"
        )}
      >
        <div className="relative">
          <div className={cn(
            "w-24 h-24 mx-auto rounded-full overflow-hidden",
            "border-4 transition-colors duration-300",
            selected ? "border-purple-500" : "border-transparent group-hover:border-purple-200"
          )}>
            {member.avatarUrl && !hasError ? (
              <Image
                src={member.avatarUrl}
                alt={member.name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
                onError={() => setImageError(prev => ({ ...prev, [member.id]: true }))}
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{member.name[0]}</span>
              </div>
            )}
          </div>
          {selected && (
            <div className="absolute -top-2 -right-2 bg-purple-500 rounded-full p-1">
              <Check className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
        <p className="mt-3 text-center font-medium text-gray-800">{member.name}</p>
      </button>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          ¿Quién eres?
        </h1>
        <p className="text-gray-600">
          Selecciona tu nombre para comenzar
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {TEAM_MEMBERS.map((member) => (
          <MemberAvatar
            key={member.id}
            member={member}
            selected={selectedUser === member.id}
            onClick={() => setSelectedUser(member.id)}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          onClick={() => selectedUser && onComplete(selectedUser)}
          disabled={!selectedUser}
          className={cn(
            "px-8 py-3 text-lg",
            "bg-gradient-to-r from-purple-600 to-pink-600",
            "hover:from-purple-700 hover:to-pink-700",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          Comenzar Juego
        </Button>
      </div>
    </div>
  );
}