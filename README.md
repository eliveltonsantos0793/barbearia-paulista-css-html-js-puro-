# Barbearia Paulista

Site institucional responsivo para uma barbearia, desenvolvido com **HTML5, CSS3 e JavaScript puro**, sem frameworks de interface ou dependências de execução. A estrutura está preparada para hospedagem estática, incluindo GitHub Pages.

## Visão geral

O projeto apresenta a Barbearia Paulista com identidade visual elegante, tons escuros, detalhes dourados, tipografia editorial e imagens relacionadas ao ambiente e aos serviços. A experiência permite conhecer os serviços, selecionar itens para montar um pacote e encaminhar a solicitação de agendamento pelo WhatsApp.

## Funcionalidades

- Layout responsivo para computadores, tablets e celulares.
- Navegação por seções: início, serviços, apresentação da barbearia, depoimentos e visita.
- Catálogo com nome, descrição, preço e duração estimada dos serviços.
- Montagem de pacote com seleção de serviços e cálculo automático do total.
- Botões de agendamento com mensagens pré-preenchidas para o WhatsApp.
- Menu móvel com controle de abertura e fechamento.
- Informações de endereço, horários e link para mapa.
- SEO básico: título, descrição, idioma `pt-BR` e metadados para compartilhamento.
- Acessibilidade básica: HTML semântico, rótulos em controles, foco visível e suporte à preferência por movimento reduzido.
- Arquivos CSS, JavaScript, imagens e favicon organizados localmente.

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica e conteúdo |
| CSS3 | Layout, identidade visual, responsividade e animações |
| JavaScript puro (ES6+) | Menu, catálogo, seleção de serviços e integração com WhatsApp |
| Google Fonts | Tipografia personalizada, com fontes alternativas do sistema |
| GitHub Pages | Opção de hospedagem estática |

A versão estática não utiliza React, TanStack Start, Tailwind CSS, bibliotecas de interface ou backend para a navegação e o encaminhamento de mensagens ao WhatsApp.

## Estrutura do projeto

```text
barbearia-paulista/
├── index.html
├── README.md
└── assets/
    ├── favicon.ico
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── img/
        ├── hero.png
        ├── ambiente.png
        ├── corte.png
        └── barba.png
```

## Como executar localmente

Não é necessário instalar dependências nem compilar o projeto.

1. Baixe ou clone o repositório.
2. Abra a pasta no VS Code.
3. Abra `index.html` diretamente no navegador ou use a extensão Live Server.
4. Teste a navegação, os serviços, o cálculo dos pacotes e os links do WhatsApp.

## Publicação no GitHub Pages

1. Envie os arquivos para a raiz do repositório, mantendo `index.html` e `assets/` no mesmo nível.
2. Abra **Settings → Pages** no GitHub.
3. Em **Build and deployment**, selecione publicação a partir de uma branch.
4. Escolha a branch desejada e a pasta **`/(root)`**.
5. Salve, aguarde a publicação e teste a URL fornecida pelo GitHub Pages.

Os caminhos dos recursos são relativos, ajudando o site a funcionar em URLs de projeto do GitHub Pages.

## Como personalizar

### Número do WhatsApp

Edite o objeto `BARBERSHOP` no início de `assets/js/script.js`. O número deve estar no formato internacional, contendo apenas dígitos, com código do país e DDD.

### Serviços e preços

Os serviços ficam no array `services` do mesmo arquivo JavaScript. Cada item contém identificador, nome, descrição, preço e duração. O total do pacote é calculado automaticamente.

### Textos, endereço e horários

Edite os conteúdos correspondentes em `index.html`. Confirme os dados comerciais, horários, links externos e contatos antes de publicar.

### Cores e estilos

Os estilos estão em `assets/css/style.css`. As principais variáveis de cor ficam no início do arquivo, dentro de `:root`.

### Imagens

Substitua os arquivos de `assets/img/` mantendo os nomes atuais ou atualize os caminhos no HTML. Prefira imagens otimizadas para a web e textos alternativos descritivos quando forem informativas.

## SEO e desempenho

O projeto inclui título, meta description, idioma `pt-BR`, metadados Open Graph básicos, carregamento adiado de imagens secundárias e recursos locais.

Antes do lançamento, recomenda-se revisar o conteúdo comercial, confirmar os preços e horários, utilizar imagens autorizadas, testar responsividade e contraste e executar auditorias de desempenho e acessibilidade.

## Limitações atuais

- O agendamento é encaminhado ao WhatsApp; não há calendário de reservas, painel administrativo ou banco de dados.
- O site não envia formulários para um servidor nem armazena dados de clientes.
- O mapa é aberto por um link externo.
- Google Fonts exige internet; fontes alternativas são utilizadas se não carregarem.
- Depoimentos, preços, horários, endereço e outros dados comerciais devem ser confirmados pelo responsável antes da publicação definitiva.

## Licença e direitos de uso

Defina uma licença no repositório se quiser formalizar as permissões de cópia, modificação e redistribuição. Confirme que possui autorização para usar as imagens, fontes e demais materiais publicados.

---

**Projeto:** Barbearia Paulista  
**Implementação:** HTML5, CSS3 e JavaScript puro  
**Objetivo:** presença digital e encaminhamento de agendamentos pelo WhatsApp
