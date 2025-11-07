import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface JustificationInputProps {
  selectedChoice: string;
  justification: string;
  onJustificationChange: (value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
  isLoading: boolean;
}

const JustificationInput: React.FC<JustificationInputProps> = ({
  selectedChoice,
  justification,
  onJustificationChange,
  onSubmit,
  onBack,
  isLoading,
}) => {
  return (
    <div className="animate-fade-in">
      <div>
        <p className="text-slate-400 mb-2">Sua escolha:</p>
        <blockquote className="border-l-4 border-cyan-500 bg-slate-700/30 p-3 rounded-r-lg mb-6">
          <p className="text-slate-200 italic">"{selectedChoice}"</p>
        </blockquote>
      </div>

      <label htmlFor="justification" className="block text-lg font-semibold text-slate-100 mb-2">
        Justifique sua decisão
      </label>
      <p className="text-slate-400 mb-4">
        Por que você acredita que esta é a melhor ação a ser escolhida?
      </p>
      <textarea
        id="justification"
        rows={5}
        value={justification}
        onChange={(e) => onJustificationChange(e.target.value)}
        disabled={isLoading}
        className="w-full p-3 bg-slate-900 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-200 disabled:opacity-50"
        placeholder="Explique seu raciocínio aqui..."
      />

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          onClick={onBack}
          disabled={isLoading}
          className="w-full sm:w-auto px-6 py-2 bg-slate-600 hover:bg-slate-500 text-white font-bold rounded-full transition duration-300 disabled:opacity-50"
        >
          Voltar
        </button>
        <button
          onClick={onSubmit}
          disabled={isLoading || justification.trim().length < 10}
          className="w-full sm:w-auto flex-grow px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? <LoadingSpinner /> : 'Analisar'}
        </button>
      </div>
       {justification.trim().length < 10 && (
         <p className="text-sm text-slate-500 mt-2 text-right">Escreva pelo menos 10 caracteres.</p>
       )}
    </div>
  );
};

export default JustificationInput;