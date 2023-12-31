# Controle Remoto Arduino
## Descrição do Projeto
#### Este projeto permite controlar um Arduino remotamente por meio de um front-end simples. O Arduino consome uma API hospedada localmente, respondendo a comandos enviados através de quatro botões: "Frente", "Trás", "Esquerda" e "Direita".


# Funcionamento
## 1. Front-end:
- Quatro botões: "Frente", "Trás", "Esquerda" e "Direita".
- Cada clique em um botão envia uma requisição à API local, alternando um valor booleano.

## 2. Back-end (API):
- Recebe requisições do front-end e atualiza o valor booleano.
- Disponibiliza esse valor para consultas regulares.

## 3. Arduino:
- Faz repetidas requisições GET à API local.
- Com base no valor recebido (verdadeiro ou falso), executa ações específicas.

## 4. Aplicativo Android:
- Desenvolvido para fornecer uma experiência mobile do controle remoto.
- Oferece os mesmos botões de controle que o front-end.
- Envia requisições à API local para interagir com o Arduino.

# Fluxo de Ações
1. Usuário clica em um botão no front-end.
2. Front-end envia uma requisição à API local, alterando o valor booleano.
3. Arduino, por meio de requisições GET regulares, verifica o valor na API.
4. Dependendo do valor (verdadeiro ou falso), o Arduino realiza ações correspondentes.

# Estrutura do Projeto
- 📂 arduino/: Código-fonte Arduino.
- 📂 front-end/: Páginas HTML e JavaScript para controlar o Arduino.
- 📂 api/: Código-fonte da API local.
- 📂 css/: Código-fonte da folha de estilo.
- 📂 android/app: Código-fonte Android.

# Configuração
1. Clone o repositório: git clone https://github.com/vanderPato/Arduino-web-api-json.git.
2. Configure o Arduino com o código do diretório arduino/.
3. Inicie a API local no diretório api/.
4. Abra o front-end em um navegador.

# Desenvolvimento Android
O aplicativo Android foi desenvolvido para fornecer uma experiência intuitiva de controle remoto, permitindo que o usuário interaja com o Arduino por meio do smartphone. Utilizou-se o Android Studio para o desenvolvimento, e o código-fonte está disponível no diretório android/app.



# Contribuições
#### Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar pull requests.

# Autor
### Vanderlei souza
