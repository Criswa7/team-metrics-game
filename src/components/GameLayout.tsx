'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface GameLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function GameLayout({ children, title }: GameLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {title}
        </h1>
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            {children}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}