# CulinaryCraft

## :mag: Descrição

Bem-vindo ao CulinaryCraft! Este aplicativo permite que você selecione determinados ingredientes e descubra receitas que podem ser feitas com eles. Com o CulinaryCraft, a criatividade na cozinha é ilimitada, facilitando a criação de pratos deliciosos com os ingredientes disponíveis.

## :test_tube: Tecnologias Utilizadas

### Backend

- **Supabase:** Plataforma de backend como serviço, usada para autenticação e banco de dados em tempo real.

### Frontend

- **TypeScript:** Linguagem de programação que adiciona tipagem estática ao JavaScript, usada para desenvolvimento seguro e escalável.
- **React Native:** Framework para desenvolvimento de aplicativos móveis nativos usando React.
- **Expo:** Ferramenta que facilita o desenvolvimento de aplicativos React Native.
- **Axios:** Biblioteca para realizar requisições HTTP.

### Ambiente de Desenvolvimento

- **Node.js:** Ambiente de execução para JavaScript fora do navegador.
- **npm / Yarn:** Gerenciadores de pacotes para instalar, compartilhar e controlar versões de dependências.

### Ferramentas Adicionais

- **Git:** Sistema de controle de versão utilizado para gerenciar o código-fonte do projeto.
- **GitHub:** Plataforma de hospedagem de código-fonte e colaboração.

## :computer: Pré-requisitos

### Node.js e npm

- [Baixe e instale o Node.js](https://nodejs.org/en/download/).

### Expo CLI

- [Instale o Expo CLI](https://docs.expo.dev/get-started/installation/).

## :gear: Configuração do Projeto

1. **Clonar o Repositório:**
   - Clone o repositório do seu projeto para o seu ambiente local.
   - `git clone https://github.com/SeuUsuario/CulinaryCraft.git`

2. **Instalar Dependências:**
   - Execute `cd CulinaryCraft` para entrar no diretório clonado.
   - Execute `npm install` ou `yarn install` para instalar as dependências do projeto.

3. **Configurar o Supabase:**
   - Crie uma conta no [Supabase](https://supabase.io/).
   - Crie um novo projeto no Supabase e anote a URL e a chave pública (API key).
   - Crie um arquivo `.env` na raiz do projeto e adicione as seguintes informações:
     ```
     EXPO_PUBLIC_SUPABASE_URL=https://seuprojeto.supabase.co
     EXPO_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon
     ```

4. **Executar a Aplicação:**
   - Execute `expo start` para iniciar o servidor de desenvolvimento do Expo.
   - Use o aplicativo Expo Go no seu dispositivo móvel para escanear o código QR e visualizar o aplicativo.

### Observações Importantes

- Certifique-se de configurar corretamente as variáveis de ambiente no arquivo `.env`.
- Consulte a documentação específica de cada ferramenta e framework para obter informações detalhadas sobre como configurar e executar o projeto.

Com esses passos, você estará pronto para explorar e utilizar o CulinaryCraft, criando refeições deliciosas com facilidade.
