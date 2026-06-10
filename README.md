# Foto Ferrara

Site institucional da Foto Ferrara, loja e laboratório fotográfico no centro de São Paulo.

## Stack

- React
- Vite
- React Router
- Lucide React
- CSS modular por página/componente

## Como rodar localmente

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev      # ambiente local
npm run lint     # validação de código
npm run build    # build de produção
npm run preview  # preview do build
```

## Deploy na Vercel

O projeto já inclui `vercel.json` com rewrite para SPA. Na Vercel, use:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

## Conteúdo principal

- `src/pages/Home.jsx`: página inicial
- `src/pages/Sobre.jsx`: história da empresa
- `src/pages/Servicos.jsx`: serviços oferecidos
- `src/pages/Produtos.jsx`: catálogo com filtros
- `src/pages/Contato.jsx`: endereço, telefone, WhatsApp e mapa
- `src/data/produtos.json`: produtos exibidos no catálogo
