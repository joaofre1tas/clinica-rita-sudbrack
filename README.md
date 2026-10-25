# Clínica Rita Sudbrack

Site da clínica em Next.js, com imagens e fontes incluídas no projeto. A página inicial usa o hero bege aprovado em 24/10/2026, com o retrato tratado pelo usuário e o reflexo champagne. A versão verde permanece na branch `design/rita-hero-verde`. O gerador de certificados em `/certificados` também está incluído e funciona no navegador.

## Rodar no computador

Use Node.js 22 e npm. Se você usa nvm, rode `nvm use` na pasta do projeto.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000. Para conferir a versão de produção:

```sh
npm test
npm start
```

`npm test` compila o projeto e verifica as páginas e os arquivos locais. `npm run typecheck` verifica os tipos.

## Publicar na Vercel

1. Na Vercel, escolha **Add New → Project** e importe `joaofre1tas/clinica-rita-sudbrack`.
2. Selecione a branch `main` para o deploy da versão aprovada. Para torná-la a versão de produção de um projeto já conectado, selecione essa branch como **Production Branch** nas configurações de Git do projeto.
3. Use **Next.js** como framework e a raiz do repositório como **Root Directory**.
4. Use Node.js **22.x**. A configuração incluída define **Install Command** como `npm ci` e **Build Command** como `npm run build`. Deixe **Output Directory** no padrão do Next.js.
5. Clique em **Deploy**. Depois, adicione o domínio em **Settings → Domains**, se desejar.

Não são necessárias variáveis de ambiente, banco de dados ou serviços Cloudflare. O botão de agendamento abre o WhatsApp da clínica.

Guia oficial: https://vercel.com/docs/frameworks/full-stack/nextjs

## Conteúdo e arquivos

- `app/page.tsx`: página inicial com o hero bege aprovado.
- `app/components/ClinicHome.tsx`: conteúdo compartilhado da página inicial.
- `app/components/EditorialHero.tsx` e `app/hero.css`: composição e estilos do hero.
- `app/previa-bege/`: endereço de prévia preservado, sem indexação.
- `app/globals.css`: estilos, cores e fontes.
- `public/assets/`: logo, imagens e fontes.
- `app/components/ResultsCarousel.tsx`: carrossel com nove comparações de antes e depois.
- `app/cursos/design-de-sobrancelhas/`: página do curso e módulos expansíveis.
- `app/certificados/`: interface e geração de certificados preservadas do repositório.
- `public/certificados/`: modelo do certificado, fonte e licença incluída.

A página de certificados envia instruções para não ser indexada por buscadores; o acesso é público para quem conhece o endereço. Os dados preenchidos e os PDFs gerados permanecem no navegador, sem gravação no servidor.

## ZIP

Extraia a pasta `clinica-rita-sudbrack` e use o conteúdo como raiz do projeto. O ZIP contém os arquivos do mesmo commit enviado para a branch, incluindo `package-lock.json`, sem dependências instaladas, arquivos de compilação ou credenciais.
