import React from 'react';
import { Dilemma } from './types';

const RobotIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
);

const DeepfakeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75Zm4.5 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z" />
    </svg>
);

const AutonomousCarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 0 .097-1.521L7.5 4.5l4.5 6.75 4.5-6.75L21.15 11.25a3.375 3.375 0 0 0 .097 1.521V18.75" />
    </svg>
);

export const DILEMMAS: Dilemma[] = [
  {
    id: 'robot-recruiter',
    title: 'O Robô Recrutador com Viés',
    icon: (props) => <RobotIcon {...props} />,
    description: 'Um robô recrutador de IA, treinado com dados históricos de uma empresa de tecnologia (predominantemente masculina), está analisando currículos. Ele começa a rejeitar sistematicamente candidatas qualificadas para vagas de engenharia. O que a empresa deve fazer?',
    decisionPoints: [
      { id: 'stop', text: 'Desligar o robô imediatamente e voltar à triagem manual.' },
      { id: 'fix', text: 'Tentar "reprogramar" o robô com novos dados, mantendo-o sob supervisão humana.' },
      { id: 'quota', text: 'Manter o robô, mas instituir uma "cota" para garantir que um percentual de candidatas avance.' },
      { id: 'opensource', text: 'Tornar o código-fonte do robô aberto para que a comunidade possa identificar e corrigir o viés.' },
    ],
  },
  {
    id: 'deepfake-election',
    title: 'Deepfakes nas Eleições',
    icon: (props) => <DeepfakeIcon {...props} />,
    description: 'Dias antes de uma eleição crítica, um vídeo deepfake realista mostra um candidato admitindo um crime. É impossível verificar ou desmentir o vídeo antes da votação. Como a plataforma de mídia social onde o vídeo viralizou, o que você faz?',
    decisionPoints: [
      { id: 'remove', text: 'Remover o vídeo imediatamente, arriscando acusações de censura e de influenciar a eleição.' },
      { id: 'warn', text: 'Manter o vídeo, mas adicionar um aviso proeminente de que seu conteúdo não é verificado e pode ser falso.' },
      { id: 'nothing', text: 'Deixar o vídeo sem intervenção, defendendo a liberdade de expressão e deixando os usuários decidirem.' },
      { id: 'shadowban', text: 'Reduzir drasticamente a visibilidade do vídeo (shadow-ban), sem removê-lo completamente, para limitar seu alcance.' },
    ],
  },
];