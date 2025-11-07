import { GoogleGenAI } from "@google/genai";
import { Dilemma } from '../types';

// FIX: Initialize GoogleGenAI directly with process.env.API_KEY and remove redundant checks, per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIAnalysis = async (
  dilemma: Dilemma,
  userChoice: string,
  userJustification: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      **Análise de Dilema Ético em IA**

      **Contexto:** Você é um especialista em ética de IA. Sua tarefa é analisar a escolha e a justificativa de um usuário para o dilema ético apresentado abaixo. Sua análise deve ser construtiva, equilibrada e explorar as nuances da decisão. Não julgue, mas sim, ilumine as implicações éticas de diferentes perspectivas de forma clara e acessível.

      **O Dilema:**
      *Título:* ${dilemma.title}
      *Descrição:* ${dilemma.description}

      **As Opções Disponíveis eram:**
      ${dilemma.decisionPoints.map((dp) => `- ${dp.text}`).join('\n')}

      ---

      **A Decisão do Usuário:**

      **Escolha:**
      "${userChoice}"

      **Justificativa do Usuário:**
      "${userJustification}"

      ---

      **Sua Tarefa de Análise:**
      Forneça uma análise ponderada e fluida sobre a escolha e justificativa do usuário, escrita em parágrafos. Em vez de usar listas, títulos ou marcadores, integre os seguintes pontos em um texto coeso e de fácil leitura:

      - **Raciocínio do Usuário:** Comece comentando sobre os pontos fortes e as possíveis lacunas no raciocínio apresentado.
      - **Consequências da Ação:** Em seguida, discuta as consequências prováveis, tanto positivas quanto negativas, da ação escolhida.
      - **Perspectivas Éticas:** Conecte a escolha a um ou mais frameworks éticos (por exemplo, "Sua escolha se alinha com uma perspectiva utilitarista porque...") e sugira como outras perspectivas poderiam levar a uma decisão diferente.
      - **Conclusão Reflexiva:** Conclua com uma pergunta ou um pensamento que incentive uma reflexão mais profunda sobre o tema.

      A resposta deve ser um texto corrido, em linguagem natural, sem qualquer formatação markdown (sem **negrito**, *itálico*, listas, etc.). Apenas parágrafos de texto.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Falha ao comunicar com a IA. Verifique sua conexão ou a chave da API.");
  }
};