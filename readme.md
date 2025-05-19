
# 🎓 FECAP - Fundação Escola de Comércio Álvares Penteado

<p align="center">
  <a href="https://www.fecap.br/">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP" />
  </a>
</p>

## 🧠 Projeto

### **Gestão de Eventos para o Instituto Criativo**

## 👨‍💻 Equipe `TechTeam`

| Nome                 | Perfil                                                              |
|----------------------|---------------------------------------------------------------------|
| Eriane Dias          | [LinkedIn](https://www.linkedin.com/in/eriane-dos-santos-oliveira-cfp-pqo-paap-53116292/) |
| Gustavo Roberto      | [GitHub](https://github.com/DevGustar)                              |
| Gustavo Henrique     | [LinkedIn](https://www.linkedin.com/in/gustavo-henrique-da-silva-santos-453822326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app) |
| Lucas Alves          | [LinkedIn](https://www.linkedin.com/in/lucas-alves-bernardo-093871252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)|
| Vitor Santos         | [LinkedIn](https://github.com/vs7black)|


## 👨‍🏫 Orientadores

- [`Dr. Eduardo Savino Gomes`](https://www.linkedin.com/in/eduardo-savino-gomes-77833a10/)
- [`Me. Francisco de Souza Escobar`](https://www.linkedin.com/in/francisco-escobar/)
- [`Me. Aimar Martins Lopes`](https://www.linkedin.com/in/aimarlopes/)
- [`Dr. Jose Carlos Buesso Junior`](https://www.linkedin.com/in/jbuesso/)
- [`Dr. Victor Rosetti de Quiroz`](https://www.linkedin.com/in/victorbarq/?originalSubdomain=br)

## 📝 Descrição do Projeto

O **Instituto Criativo** enfrenta dificuldades na gestão de seus projetos educacionais devido à descentralização de informações, dificultando o monitoramento do progresso e a tomada de decisões.

Para resolver esse problema, desenvolvemos uma aplicação completa com dashboard interativo e funcionalidades como:

- Gestão e visualização de eventos com compra de ingressos
- Registro de doações
- Acompanhamento de projetos educacionais
- Relatórios e indicadores de desempenho (KPIs)
- Interface intuitiva e responsiva
- Integração com redes sociais (futuramente)

> 🧰 Tecnologias utilizadas:
> - Backend: `.NET (C#)`
> - Frontend: `React`
> - Banco de Dados: `MySQL`

<p align="center">
  <img src="images/interacao_descontraida.jpg" alt="Interação entre pessoas" width="1000px">
</p>

## 📁 Estrutura do Projeto

```
PROJETO1/
├── code/
│   ├── client/
│   │   └── src/
│   │       ├── .gitignore
│   │       ├── index.html
│   │       ├── package-lock.json
│   │       ├── package.json
│   │       ├── README.md
│   │       ├── styleguide.css
│   │       └── vite.config.js
│   ├── server/
│   │   ├── middleware/
│   │   ├── public/
│   │   ├── db.js
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── routes.js
│   │   └── server.js
│   ├── documents/
│   │   ├── Entrega 1/
│   │   ├── Entrega 2/
│   │   └── Entrega 3/
│   ├── .gitignore
│   ├── banco_instituto.sql
│   └── readme.md

```

## 🗓️ Cronograma de Desenvolvimento

| Semana | Atividade                                   | Responsável               |
|--------|---------------------------------------------|---------------------------|
| 1      | Documento de abertura do projeto            | Todos                     |
| 1      | Wireframe navegável (Figma)                 | Eriane                    |
| 2      | Estrutura de Dados / POO                    | Lucas, Gustavo H.         |
| 2      | Desenvolvimento Web FullStack               | Gustavo R.                |
| 3      | Setup do backend + integração com frontend  | Gustavo R.                |
| 3–7    | Funcionalidades avançadas                   | Toda a equipe             |
| 1–7    | Melhorias, testes e documentação            | Toda a equipe             |
| 7      | Apresentação e entrega final                | Toda a equipe             |

## 👥 Tabela de Funções

| Membro           | Função Principal      | Atividades Secundárias                                      |
|------------------|-----------------------|-------------------------------------------------------------|
| Eriane           | Designer UX/UI        | Codificação, responsividade e testes de usabilidade         |
| Gustavo R.       | Dev Full Stack        | API, funcionalidades e integração frontend/backend          |
| Gustavo H.       | Estrutura de Dados    | Apoio backend, testes, documentação                         |
| Lucas            | Estrutura de Dados    | Arquitetura, otimizações e infraestrutura                   |
| Todos            | Colaboração Geral     | Comunicação, testes, revisão e ajustes finais               |

## ⚙️ Como Executar o Projeto

### 🔧 Pré-requisitos
- [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/)
- [.NET SDK](https://dotnet.microsoft.com/en-us/download)
- [Node.js + npm](https://nodejs.org/)
- MySQL Server + MySQL Workbench

### 🚀 Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/2025-1-NADS2/Projeto1
   ```

2. **Backend (.NET)**
   ```bash
   cd instituto-criativo/backend
   dotnet restore
   dotnet ef database update  # aplica as migrations
   dotnet run
   ```

3. **Frontend (React)**
   ```bash
   cd instituto-criativo/frontend
   npm install
   npm run dev
   ```

## 📚 Referências

- [Site do Instituto Criativo](https://institutocriativo.com.br/)
- [Favicon Instituto Criativo](https://www.institutocriativo.com.br/images/favicon.png)

## 🙏 Agradecimento

Muito obrigado por acompanhar nosso projeto!  
Esperamos que esta iniciativa contribua para transformar positivamente a gestão educacional da ONG 💡

Feito com ❤ por **TechTeam**
