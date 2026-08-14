# Insume Front-end

Este repositório apresenta a aplicação front-end do projeto Insume, um sistema que organiza seu estoque doméstico.

Atualmente, a aplicação possui as seguintes funcionalidades:

- Cadastro de usuário e login
- Dashboard inicial com resumo do estoque e categorias
- Cadastro de insumos
- Cadastro de categorias


## Stack Usada

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,typescript,vite,nodejs,vscode,tailwind" />
  </a>
</p>

A stack utilizada foi a seguinte:

- **React.js** - Interface de usuário
- **TypeScript** - Linguagem + tipagem
- **Vite** - builder da aplicação
- **VS Code** - IDE para desenvolvimento


## Estrutura do projeto

A estrutura de pastas decidi utilizar o modelo JamStack, separando componentes como Atoms, molecules e pages. Para assim ter um melhor controle e organização. Segue diagrama da estrutura:

```text
public/
|
src/
|──assets/
|──components/
   |──atoms/
   |──molecules/
   |──pages/
|──context/
|──hooks/
|──routes/
|──services/
|──styles/
|──utils/

```

## Executando

Para executar você precisa dos seguintes itens:

- Node.js (versão 18 ou superior recomendada)
- npm (yarn ou pnpm também se aplica)

### Instalando e Executando

1. Clone o repositório para sua máquina e acesse a pasta do projeto
```cmd
cd insume-frontend
```

2. Instale as depêndencias de acordo com seu gerenciador de pacotes
```cmd
npm install 
```

3. Configure as variáveis de ambiente em um arquivo .env local

```env
VITE_BACKEND_URL=URL_DO_BACKEND
VITE_AUTH_ENDPOINT=ENDPOINT_DE_AUTENTICAÇÃO
```

4. Inicie o servidor de desenvolvimento
```
npm run dev
```

## 🚀 Próximos passos

Passos implementados e funcionalidades futuras que pretendo adicionar ao decorrer do tempo.

- [x] Cadastro e autenticação de usuários
- [x] Cadastro de insumos
- [x] Gerenciamento de categorias
- [x] Dashboard de estoque
- [ ] Recuperação de senha por e-mail
- [ ] Exportação de dados para Excel e PDF
- [ ] Cadastro de lista de compras
- [ ] Notificações de estoque baixo
- [ ] Exibir mercados próximos
- [ ] Registro de idas ao mercado

> [!NOTE]
> Este projeto está em desenvolvimento contínuo. A versão atual contempla as funcionalidades principais, enquanto novas funcionalidades estão planejadas para versões futuras.


**Se você tiver alguma sugestão ou dica por favor não hesite em me contatar!**
