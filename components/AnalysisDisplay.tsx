import React from 'react';

// Este componente agora renderiza a análise da IA como parágrafos simples.
const AnalysisRenderer: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="text-slate-300 space-y-4 leading-relaxed">
      {content.split('\n').map((paragraph, index) => (
        paragraph.trim() && <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

interface AnalysisDisplayProps {
  analysis: string;
  onNext: () => void;
  isLastDilemma: boolean;
}

const AnalysisDisplay: React.FC<AnalysisDisplayProps> = ({ analysis, onNext, isLastDilemma }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-100 mb-4 border-b-2 border-cyan-500 pb-2">
        Análise da IA
      </h2>
      
      <div className="bg-slate-900/50 p-4 rounded-md max-h-96 overflow-y-auto">
        {analysis ? <AnalysisRenderer content={analysis} /> : <p>Carregando análise...</p>}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={onNext}
          className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 shadow-lg"
        >
          {isLastDilemma ? 'Começar Novamente' : 'Próximo Dilema'}
        </button>
      </div>
    </div>
  );
};

export default AnalysisDisplay;