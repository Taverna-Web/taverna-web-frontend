# 🎲 Taverna Web - Frontend

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange?style=for-the-badge)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

> **Interface interativa, imersiva e em tempo real para as suas mesas de RPG.**

Este é o repositório **frontend** oficial do **Taverna Web**, a plataforma moderna para gerenciamento e imersão em campanhas de RPG de mesa. 

Enquanto o repositório [backend](https://github.com/Taverna-Web/taverna-web-backend) cuida da segurança, persistência e motor de regras, **este repositório** é a cara do projeto. É aqui que construímos os mapas de batalha, o editor interativo de fichas, as rolagens de dados 3D e toda a experiência audiovisual para mestres e jogadores.

Para uma visão geral da arquitetura completa, visite nosso [Repositório da Organização (.github)](https://github.com/Taverna-Web/.github).

---

## 🛠️ Tecnologias e Stack

Buscamos uma interface extremamente rápida, responsiva e capaz de lidar com muitas atualizações na tela (como movimentação de dezenas de tokens e rolagem de dados em tempo real).

- **Build Tool:** [Vite](https://vitejs.dev/)
- **Linguagem:** TypeScript / JavaScript
- **Framework UI:** React / Vue *(A definir)*
- **Comunicação:** REST (para consumo de API) e WebSockets/SignalR-client (para tempo real)
- **Estilização:** CSS moderno (Tailwind CSS / SASS - *A definir*)

---

## 🎨 Funcionalidades da Interface

O escopo visual e interativo deste repositório inclui:

- 🧝 **Editor Dinâmico de Fichas:** Telas para criação e edição de personagens e NPCs, com cálculos automáticos baseados nos atributos.
- 🗺️ **Grid de Batalha (VTT):** Canvas (ou WebGL) para renderização de mapas com upload de imagens, grid hexagonal/quadrado e manipulação de tokens (arrastar e soltar).
- 🎲 **Rolador de Dados:** Interface de seleção de dados poliédricos (d4, d6, d8, d10, d12, d20, d100) e exibição visual dos resultados.
- 🎧 **Player de Música (Spotify):** Integração com o Web Playback SDK do Spotify para o Mestre alterar trilhas sonoras e efeitos na sala, sincronizado para os jogadores.
- 📖 **Leitor de Biblioteca (PDF):** Visualizador de PDF integrado para leitura rápida de regras sem sair da aba da partida.
- 👁️ **Painel do Mestre vs Jogador:** Visões e permissões diferentes da mesma tela (ex: Mestre vê vida real dos monstros, jogador não).

---

## 🚀 Como começar (Para Desenvolvedores)

Siga os passos abaixo para configurar o ambiente de desenvolvimento frontend localmente.

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão LTS recomendada: 18+ ou 20+)
- Gerenciador de pacotes (`npm`, `yarn` ou `pnpm`)
- Para testar a aplicação por completo, você precisará estar com o [backend](https://github.com/Taverna-Web/taverna-web-backend) rodando localmente.

### Passo a Passo

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/Taverna-Web/taverna-web-frontend.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd taverna-web-frontend
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   # ou yarn install / pnpm install
   ```

4. **Inicie o servidor de desenvolvimento (Vite):**
   ```bash
   npm run dev
   # ou yarn dev / pnpm dev
   ```

5. O Vite iniciará rapidamente um servidor local (geralmente em `http://localhost:5173`). Abra no navegador e comece a codar!

*(Obs: Variáveis de ambiente como URLs da API, tokens locais e configurações WebSocket deverão ser configuradas no arquivo `.env` local, a ser definido na estruturação inicial).*

---

## 🤝 Como Contribuir

Seja ajustando um botão desalinhado, criando componentes acessíveis ou renderizando mapas em alta performance, toda ajuda é incrível!

1. Faça um **Fork** deste repositório.
2. Crie uma branch focada na sua funcionalidade: `git checkout -b feat/painel-de-iniciativa`
3. Siga nossos padrões de código (Prettier / ESLint que serão configurados).
4. Envie seus commits: `git commit -m 'feat: cria componente de token arrastável'`
5. Faça um push e abra um **Pull Request**.

> Se você deseja contribuir com a API e banco de dados, dirija-se ao [Repositório Backend](https://github.com/Taverna-Web/taverna-web-backend).

---

## 📄 Licença

Distribuído sob a licença [MIT](LICENSE).

*Role com vantagem na sua próxima UI! 🎲✨*
