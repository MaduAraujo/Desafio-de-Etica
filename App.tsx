import React, { useState, useCallback } from 'react';
import { DILEMMAS } from './constants';
import { Dilemma, AppStep } from './types';
import { getAIAnalysis } from './services/geminiService';

import ScenarioCard from './components/ScenarioCard';
import DecisionFramework from './components/DecisionFramework';
import JustificationInput from './components/JustificationInput';
import AnalysisDisplay from './components/AnalysisDisplay';
import LoadingSpinner from './components/LoadingSpinner';

const Header: React.FC = () => (
  <header className="text-center p-4 md:p-6 border-b border-slate-700">
    <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">
      Desafio de Ética
    </h1>
    <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
      Analise, decida e reflita sobre dilemas complexos do mundo da IA.
    </p>
  </header>
);

const App: React.FC = () => {
  const [currentDilemmaIndex, setCurrentDilemmaIndex] = useState<number>(0);
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [userJustification, setUserJustification] = useState<string>('');
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<AppStep>(AppStep.SCENARIO);

  const currentDilemma: Dilemma = DILEMMAS[currentDilemmaIndex];

  const handleSelectChoice = (choice: string) => {
    setUserChoice(choice);
    setStep(AppStep.JUSTIFICATION);
  };
  
  const handleBackToDecision = () => {
    setStep(AppStep.DECISION);
    setUserJustification('');
  };

  const handleGenerateAnalysis = useCallback(async () => {
    if (!userChoice || !userJustification) {
      setError("Por favor, selecione uma opção e forneça uma justificativa.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setAiAnalysis('');
    
    try {
      const analysis = await getAIAnalysis(currentDilemma, userChoice, userJustification);
      setAiAnalysis(analysis);
      setStep(AppStep.ANALYSIS);
    } catch (err) {
      console.error(err);
      setError("Ocorreu um erro ao gerar a análise. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }, [currentDilemma, userChoice, userJustification]);

  const resetForNextDilemma = () => {
    setUserChoice(null);
    setUserJustification('');
    setAiAnalysis('');
    setError(null);
    setStep(AppStep.SCENARIO);
    setCurrentDilemmaIndex((prevIndex) => (prevIndex + 1) % DILEMMAS.length);
  };

  const startChallenge = () => {
    setStep(AppStep.DECISION);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <Header />
        <main className="mt-6">
          <div className="bg-slate-800/50 rounded-lg shadow-2xl shadow-slate-950/50 p-6 md:p-8 transition-all duration-500">
            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-md mb-4">
                {error}
              </div>
            )}

            {step === AppStep.SCENARIO && (
              <ScenarioCard dilemma={currentDilemma} onStart={startChallenge} />
            )}
            
            {step === AppStep.DECISION && (
               <DecisionFramework
                dilemma={currentDilemma}
                onSelectChoice={handleSelectChoice}
              />
            )}

            {step === AppStep.JUSTIFICATION && userChoice && (
              <JustificationInput
                selectedChoice={userChoice}
                justification={userJustification}
                onJustificationChange={setUserJustification}
                onSubmit={handleGenerateAnalysis}
                onBack={handleBackToDecision}
                isLoading={isLoading}
              />
            )}
            
            {isLoading && step !== AppStep.ANALYSIS && (
                 <div className="flex flex-col items-center justify-center p-8">
                    <LoadingSpinner />
                    <p className="text-cyan-400 mt-4 text-lg">Analisando sua perspectiva...</p>
                 </div>
            )}

            {step === AppStep.ANALYSIS && (
              <AnalysisDisplay 
                analysis={aiAnalysis}
                onNext={resetForNextDilemma}
                isLastDilemma={currentDilemmaIndex === DILEMMAS.length - 1}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;