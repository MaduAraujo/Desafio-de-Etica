import React from 'react';
import { Dilemma } from '../types';

interface ScenarioCardProps {
  dilemma: Dilemma;
  onStart: () => void;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ dilemma, onStart }) => {
  return (
    <div className="flex flex-col items-center text-center animate-fade-in">
      <div className="bg-cyan-500/10 p-4 rounded-full mb-4">
        <dilemma.icon className="w-12 h-12 text-cyan-400" />
      </div>
      <h2 className="text-2xl font-bold text-slate-100 mb-2">{dilemma.title}</h2>
      <p className="text-slate-300 mb-6 max-w-2xl">{dilemma.description}</p>
      <button 
        onClick={onStart}
        className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 shadow-lg"
      >
        Analisar Opções
      </button>
    </div>
  );
};

export default ScenarioCard;