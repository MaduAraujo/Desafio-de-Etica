<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Desafio de Ética

Este projeto é uma plataforma que confronta o usuário com cenários de dilemas éticos no contexto da Inteligência Artificial. Após tomar uma decisão, o usuário recebe 
uma análise detalhada e gerada por IA sobre as implicações de sua escolha. O objetivo principal é educar e conscientizar o público em geral sobre a importância da ética 
no desenvolvimento e uso de sistemas de IA, incentivando uma abordagem mais responsável e crítica.

## Demonstração

https://github.com/user-attachments/assets/29396972-918c-4808-a00f-9045b036bd1a

## Recursos Principais

  * **Dilemas Éticos:** Apresentação de cenários hipotéticos que exigem uma decisão moral do usuário.
  * **Análise de Decisão Gerada por IA:** Utilização do modelo Gemini para fornecer feedback imediato e profundo, explorando as consequências éticas e morais da escolha feita.
  * **Foco em Reflexão:** Design pensado para que o usuário compreenda as nuances e complexidades inerentes à tomada de decisão em sistemas de IA.

## Tecnologias Utilizadas

* **Gemini API**
* **TypeScript**
* **Vite**
* **Node.js**
* **React**
* **HTML5**

## Como Executar Localmente

### Pré-requisitos

* **Node.js**
* **Git**
**Chave de API do Gemini**

### Passos de Instalação

1.  **Clone o Repositório:**

    ```bash
    git clone https://github.com/MaduAraujo/Desafio-de-Etica.git
    cd Desafio-de-Etica
    ```

2.  **Instale as Dependências:**

    ```bash
    npm install
    ```

3.  **Configurar a Chave API:**

    Crie um arquivo chamado `.env.local` na raiz do projeto e adicione sua chave API:

    ```
    GEMINI_API_KEY="SUA_CHAVE_AQUI"
    ```

4.  **Rode a Aplicação:**

    Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

    A aplicação estará acessível em `http://localhost:5173/` (ou outra porta indicada pelo Vite).
