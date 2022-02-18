# GSP - EP1

Olá, dev! Esse é o repositório de um dos possíveis EPs que vocês podem fazer ao final do curso!

## Instruções gerais

* Vocês deverão escolher um dos EPs para fazer, este ou o [outro](https://github.com/guia-de-sobrevivencia-do-programador/EP2). 
* Antes de escolher, dê uma olhada na lista de tarefas e veja qual possui os tópicos de seu interesse. Elas são diferentes para cada EP e alguns tópicos que cobrimos durante o curso podem não estar presentes em um ou outro.
* Escolhido o EP, você deve realizar todas as tarefas listadas, exceto as tarefas bônus (recomendamos as tarefas bônus sejam feitas também para reforçar o conteúdo do curso).
* Marque as tarefas realizadas no README.
* Crie um arquivo `.zip` contendo todo o código deste repositório (**não é necessário adicionar a pasta node_modules no zip**) com os arquivos adicionais criados ao realizar as tarefas abaixo.

## Como rodar a aplicação

### Pré-requisitos
* NodeJS (qualquer vers: `sudo apt install nodejs`
* NPM: `sudo apt install npm`
* Docker: Siga as instruções das [notas de aula](https://github.com/guia-de-sobrevivencia-do-programador/Notas-de-Aula/blob/main/8%20-%20Containers%20e%20Cloud/README.md) de docker

### Setup inicial

No diretório raiz do projeto, rode: `npm install`. Se funcionar, deve haver uma nova pasta `node_modules` na mesma pasta (não modifique nenhum arquivo nessa pasta, nem mude a pasta de lugar).

### Rodando e acessando a aplicação

Para rodar, use: `npm run start`

O servidor estará disponível em http://localhost:3000

### Sobre a aplicação

Essa aplicação é um pequeno servidor web com algumas páginas de modelo, que podem ser acessadas em:

* http://localhost:3000/
* http://localhost:3000/convocado
* http://localhost:3000/importante

O código que está na pasta `src` contém o código do projeto e *não deve ser alterado* para a entrega final, exceto os arquivos de teste, terminados em `.test.js`.

## Tarefas

- Git
    - [ ] Verifique qual o id do commit em que as páginas do juwupiter weeb foram adicionadas, bem como seu autor e data. Registre essas infos em um arquivo TAREFAS.md
- Metaprogramação
    - [ ] Adicione um script no `package.json` para rodar todos os testes de unidade na pasta `src`
    - [ ] Crie um teste de unidade que você achar interessante, utilize pelo menos um `expect` e uma função de mock (`jest.fn()`, nesse caso).
- Containers e Cloud
    - [ ] Crie um Dockerfile para aplicação
    - [ ] Suba um container utilizando o Dockerfile criado e exponha a porta 3000 do container para a sua porta 8080. Acesse a aplicação no navegador do computador hospedeiro, registrando os passos realizados para tal em um arquivo TAREFAS.md
- Shell
    - [ ] Crie um script em shell para gerar a imagem Docker e subir um container a partir dessa imagem. Esse script deve permitir que o usuário escolha em qual porta do computador hospedeiro a aplicação deve rodar
- Tarefas bônus
    - [ ] Utilizar um dos 3 editores de texto expostos nas aulas ou o comando `sed` para trocar todos as tags `<li>` em uma página por tags `<p>`
    - [ ] Utilizar o GitHub para hospedar o EP e registrar o progresso em commits
    - [ ] Utilizar o recurso de CI/CD do GitHub para verificar bugs e memory leaks no código
    - [ ] Utilize um Volume Docker para permitir que os arquivos da pasta `views` possam ser alterados de fora do container
