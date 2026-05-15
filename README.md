<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Landing Page — Monique Bacin

Landing page feita em React + Vite, com TypeScript, Tailwind e animações (motion).

## Requisitos

- Node.js (recomendado: 18+)
- npm

## Rodar localmente

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Suba o ambiente de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Abra no navegador:

   - http://localhost:3002/ (se a porta estiver ocupada, o Vite usa a próxima disponível)

## Variáveis de ambiente (opcional)

Esta landing page não depende de backend para renderizar a página. Porém, o projeto já vem preparado para ler a variável `GEMINI_API_KEY` caso você adicione chamadas ao Gemini no futuro.

- Copie o arquivo `.env.example` para `.env.local`
- Preencha `GEMINI_API_KEY`

Exemplo (Windows PowerShell):

```bash
Copy-Item .env.example .env.local
```

## Build de produção

Gera os arquivos estáticos em `dist/`:

```bash
npm run build
```

Para servir o build localmente:

```bash
npm run preview
```

## Checagem de tipos

```bash
npm run lint
```

## Deploy

Como é um projeto Vite (site estático), o deploy é direto:

- **Vercel**
  - Framework preset: Vite
  - Build command: `npm run build`
  - Output directory: `dist`
- **Netlify**
  - Build command: `npm run build`
  - Publish directory: `dist`
- **GitHub Pages**
  - Funciona bem, mas normalmente exige ajustar o `base` do Vite para o caminho do repositório (ex.: `/nome-do-repo/`), caso não use domínio customizado.
  - Depois disso, basta publicar o conteúdo de `dist/` via GitHub Actions ou gh-pages.
