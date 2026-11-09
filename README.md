# Serralheria Casa Forte

Landing page em Next.js App Router, TypeScript, CSS Modules, Lucide e Motion. Sem backend, banco de dados ou armazenamento de dados pessoais.

## Executar

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Validação e produção:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Atualizar conteúdo

- `src/data/company.ts`: dados de contato, texto institucional e etapas do atendimento.
- `src/data/services.ts`: confirmar os serviços sugeridos com o proprietário.
- `src/data/projects.ts`: fotos em `public/images/projects/`. Cada projeto tem título, categoria, descrição, capa, lista de imagens, alt, destaque e localização opcional. A galeria atual usa ilustrações SVG demonstrativas, nunca apresentadas como obras da empresa. Troque as imagens e os textos; defina `demo: false` apenas nos trabalhos reais autorizados. A identificação demonstrativa desaparece automaticamente quando não há demonstrações.
- `src/data/videos.ts`: vazio até receber vídeos reais. Cadastre `type: 'mp4'` com `src: '/videos/arquivo.mp4'`, ou `type: 'youtube'` com URL completa. Cadastre também thumbnail, categoria e descrição. Os vídeos são carregados somente ao abrir o modal e param ao fechar.
- `src/data/testimonials.ts`: seção oculta enquanto vazia. Use apenas depoimentos reais autorizados; avaliação e projeto são opcionais.
- `src/data/faq.ts`: perguntas e respostas editáveis.
- `src/styles/variables.css`: cores e tokens.
- `src/components/Site.module.css`: estilos responsivos.

O hero usa fotografia ilustrativa de banco de imagens, disponível localmente, do Unsplash: https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122 . Ela não representa a empresa. As referências da galeria são ilustrações próprias. A logo do header e do footer usa o arquivo `public/Logo Serralheria Casa Forte.png`.

A imagem do hero está isolada em uma camada, permitindo futura substituição por vídeo decorativo com poster, muted e playsInline. Mantenha imagem estática para dispositivos com economia de dados ou movimento reduzido.

## Publicar na Vercel

Importe este repositório e selecione o preset Next.js. O comando de build é `npm run build`; mantenha a configuração padrão de saída. Defina `NEXT_PUBLIC_SITE_URL=https://seu-dominio-confirmado.com.br` para canonical, sitemap e URLs absolutas dos metadados. Não há domínio fictício no projeto; sem a variável o sitemap fica vazio. Refaça o build após mudar a variável.

Antes de publicar, valide o texto institucional, os serviços e o fluxo de atendimento com o proprietário, substitua as imagens e marca provisórias e revise as identificações demonstrativas. Nenhum depoimento ou vídeo fictício é cadastrado. Instagram e endereço detalhado ficam ocultos enquanto não fornecidos.

## Acessibilidade e comportamento

Menu mobile com fechamento por seleção; galeria com filtros, fallback de imagens e estado vazio; lightbox com Escape, setas do teclado, foco contido e retorno ao acionador. Formulário usa validação nativa e validação complementar antes de abrir WhatsApp com os dados formatados. Não envia informações para servidor. Animações respeitam movimento reduzido; FAQ usa disclosure nativo acessível.
