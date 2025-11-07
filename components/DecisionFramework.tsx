import React from 'react';
import { Dilemma } from '../types';

interface DecisionFrameworkProps {
  dilemma: Dilemma;
  onSelectChoice: (choiceText: string) => void;
}

const DecisionFramework: React.FC<DecisionFrameworkProps> = ({ dilemma, onSelectChoice }) => {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-100">{dilemma.title}</h2>
        <p className="text-slate-400 mt-1">Qual ação você escolheria?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dilemma.decisionPoints.map((point, index) => (
          <button
            key={point.id}
            onClick={() => onSelectChoice(point.text)}
            style={{ animationDelay: `${index * 100}ms` }}
            className="animate-fade-in-up text-left p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:bg-slate-700 hover:border-cyan-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75 group"
          >
            <p className="text-slate-200 font-medium">{point.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DecisionFramework;