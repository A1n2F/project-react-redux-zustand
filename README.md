#Projeto-Player-Video.
 
Projeto Player de vídeo que poderia ser usado como parte de algum curso em vídeos para fins de estudar as ferramentas de gerenciamento de estado Redux e Zustand do ReactJs. 
 
- Redux: Uma biblioteca JS para gerenciamento de estado global previsível e sustentável.
- Zustand:  Tem uma API confortável baseada em hooks, também com gerenciamento de estado global escalável.

____________________________________________________________________________________________________________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________________________________________________________________________________________________________

- -------> O Projeto:
- O projeto tem como foco a exibição da aula por meio de um vídeo.
- Conta com algumas funcionalidades como:
    - Selecionar e destacar a aula atual.
    - AutoPlay.
    - Passa para a próxima aula assim que a atual acabar automaticamente.
    - Troca as informações de título e módulo.
- Intuito dos estudos:
  - Aprender a base do Redux e Zustand para gerenciar estados.

____________________________________________________________________________________________________________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________________________________________________________________________________________________________

-------> A base do Redux:
- Projeto utilizando Vite, configurado o Redux utilizando o Redux Toolkit e compartilhado a store para toda a aplicação.
- Realizado um dispatch no Redux, que é o processo de disparar uma ação para atualizar o estado da aplicação.
- Integração a store do Redux ao TypeScript, aproveitando os benefícios de tipagem estática fornecidos por essa linguagem.

____________________________________________________________________________________________________________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________________________________________________________________________________________________________

-------> Interface da Aplicação:
- Projeto estilizado com TailwindCSS.
- Utilizado o pacote @radix-ui/react-collapsible para adicionar a funcionalidade de abrir e fechar nos módulos.

____________________________________________________________________________________________________________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________________________________________________________________________________________________________

-------> Aplicação com Redux:
- Configurado um slice da store do Redux para armazenar os dados dos módulos e aulas.
- hook useAppSelector para recuperar essas informações na página.
- reducer do player, que permitirá alterar a aula selecionada.
- reducer para trocar de aula e ser executado sempre ao fim de uma aula.
- configurado o autoplay do vídeo, permitindo que a próxima aula seja reproduzida automaticamente assim que a atual for concluída.
- hook global para recuperar a aula atual e o módulo dela da store: Esse hook foi desenvolvido para facilitar o uso dessa informação em múltiplos locais da aplicação.
- testes unitários para o reducer do player, utilizando a biblioteca de testes chamada vitest.

____________________________________________________________________________________________________________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________________________________________________________________________________________________________

-------> Conectando à API:
- configurado o pacote json-server para gerar uma API fake e ser utilizada para receber as requisições.
- Carregamento dos dados do curso. Os dados obtidos serão então armazenados na store do Redux.
- Foi implementado o Async Thunk do Redux Toolkit para criar reducers assíncronos: Uma boa utilização para recursos do Redux Toolkit para lidar com operações assíncronas, como chamadas API, e como implementar reducers assíncronos de maneira eficiente.
- Adicionado o campo de isLoading na store e por meio dele iremos mostrar um loading na interface.
- Axios é um cliente HTTP baseado em Promises para fazer requisições.

____________________________________________________________________________________________________________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________________________________________________________________________________________________________

-------> Do Redux ao Zustand:
- Instalado o Zustand e iniciado a migração do Redux para essa biblioteca.
- Migração de todos os locais que utilizam o Redux para utilizar a nova store do Zustand.
- testes para a store do zustand, exatamente como para o Redux.

____________________________________________________________________________________________________________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________________________________________________________________________________________________________

- Tecnologias: JAVASCRIPT. TYPESCRIPT. REACTJS. 
- Bibliotecas: Redux, Zustand, vitest, axios, radix-ui/react-collapsible.

