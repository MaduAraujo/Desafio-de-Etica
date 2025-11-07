// FIX: Changed JSX.Element to React.ReactElement to avoid reliance on the global JSX namespace.
import React from 'react';

export interface Dilemma {
  id: string;
  title: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  description: string;
  decisionPoints: {
    id: string;
    text: string;
  }[];
}

export enum AppStep {
  SCENARIO = 'scenario',
  DECISION = 'decision',
  JUSTIFICATION = 'justification',
  ANALYSIS = 'analysis',
}