# 📦 União Embalagens - E-commerce

Um front-end moderno, rápido e responsivo de um e-commerce especializado em embalagens, artigos de festa, produtos de limpeza e materiais de escritório. 

Projeto desenvolvido como vitrine tecnológica utilizando as melhores práticas do ecossistema React.

🚀 **[Acesse o projeto ao vivo aqui!](https://uniao-embalagens.vercel.app/)**

---

## 💻 Tecnologias Utilizadas

Este projeto foi construído com as ferramentas mais modernas do desenvolvimento Front-end:

*   **Framework:** Next.js (App Router)
*   **Biblioteca:** React
*   **Linguagem:** TypeScript
*   **Estilização:** Tailwind CSS (v4)
*   **Deploy:** Vercel

---

## ✨ Funcionalidades e Telas

A aplicação simula o fluxo completo de compra de um utilizador:

*   **Página Inicial (`/`):** Hero section de alto impacto com navegação rápida por categorias.
*   **Catálogo (`/produtos`):** Grade de produtos responsiva com barra lateral estática para filtros por categoria, preço e marca.
*   **Detalhes do Produto (`/produto`):** Galeria de imagens, seletor de quantidade com validação de estado (React State) e notificações visuais (Toasts) de adição ao carrinho.
*   **Carrinho de Compras (`/carrinho`):** Gestão de estado dinâmica com cálculo automático de subtotal, controle de quantidade e opção de remover itens, além de resumo do pedido fixo (Sticky Sidebar).
*   **Autenticação (`/login`):** Interface limpa e centralizada para login e cadastro de utilizadores.

---

## ⚙️ Arquitetura do Projeto

O código segue a padronização do mercado, isolando regras de ambiente da lógica visual utilizando a pasta `src`.

*   **`src/app/`**: Sistema de roteamento (App Router) nativo do Next.js.
*   **`src/components/`**: Componentes globais isolados (Header, Footer).
*   **`globals.css`**: Configuração central do Tailwind CSS via `@source`.

---


