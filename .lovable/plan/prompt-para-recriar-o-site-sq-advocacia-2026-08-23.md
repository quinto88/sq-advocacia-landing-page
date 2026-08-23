# Prompt para recriar o site SQ Advocacia

O prompt abaixo está pronto para ser colado no Lovable. Ele descreve exatamente o site atual (identidade visual, estrutura, textos, interações e assets). Anexe as mesmas imagens do logo e dos dois advogados para manter o resultado idêntico.

```text
Crie um site institucional de uma página (single-page landing page) para o escritório de advocacia "SQ Advocacia — Direito Imobiliário". O site deve ser responsivo, em português do Brasil, usando React + Vite + TypeScript + Tailwind CSS + shadcn/ui, com ícones Lucide React. Siga a identidade visual, estrutura e textos abaixo com precisão.

## IDENTIDADE VISUAL

- Paleta de cores (defina no Tailwind como navy, sand e terracotta):
  - Verde petróleo (navy): 900=#0c2422, 800=#12302f, 700=#193e3d, 600=#22514f, 500=#2f6663, 400=#4d8480, 300=#78a5a0, 200=#a9c6c1, 100=#d4e3e0, 50=#edf5eb.
  - Bege areia (sand): 50=#fdf9f3, 100=#f7ecdd, 200=#f0dfc8, 300=#e6cdaa, 400=#d7b489, 500=#c49a6a.
  - Laranja terracota (terracotta): 50=#fbeee7, 100=#f4d5c4, 200=#e6ab8c, 300=#d98a63, 400=#c96b41, 500=#b95a2f, 600=#9c4823.
- Fontes: Inter (corpo) e Playfair Display (títulos).
- O fundo geral do site deve ser bege areia (sand-50).
- Botões principais (navegação, hero, "Consultoria") em verde petróleo (navy-800).
- Botões de conversão do WhatsApp em laranja terracota (terracotta-400).
- Animações: fade-in, slide-in-left e slide-in-right (0.6s ease-out) ao rolar a página.

## ASSETS (ANEXAR AO PROMPT)

1. Logo: PNG com fundo bege areia, letras "SQ" grandes em verde petróleo, contorno de casa em laranja terracota, texto "ADVOCACIA" em verde petróleo e "DIREITO IMOBILIÁRIO" em laranja terracota. Usar no header, no hero e no footer; gerar o favicon a partir dele.
2. Foto do Dr. Gustavo Quinto: retrato de homem com barba, terno azul, olhando para o lado, fundo verde sage.
3. Foto da Dra. Amabile Stefeni: mulher com óculos, cabelo ruivo preso, colete branco, em mesa de madeira com laptop, fundo parede verde sage.

## ESTRUTURA E CONTEÚDO

### 1. Header fixo
- Fundo transparente no topo; ao rolar, fundo sand-50/95 com backdrop-blur e sombra.
- Logo à esquerda (altura 56px, rounded-lg).
- Menu desktop: Início, Serviços, Sobre Nós, Contato, e botão "Consultoria" (bg-navy-800 text-white).
- Menu mobile: hambúrguer com mesmos links e botão "Consultoria".
- Todos os links rolam suavemente para as seções por id.

### 2. Hero (id="inicio")
- Fundo gradiente de sand-100 para sand-50, min-h-screen, centralizado verticalmente.
- Título: "Excelência em Advocacia" — "Excelência em" em navy-900 e "Advocacia" em navy-700.
- Subtítulo: "Soluções jurídicas personalizadas com ética, compromisso e resultados efetivos. Protegemos seus direitos com a experiência que você merece."
- Botões:
  - "Consultoria" (bg-navy-800 hover:bg-navy-900, com ícone ArrowRight).
  - "Nossos Serviços" (outline border-navy-300 text-navy-700).
- Abaixo, botão em destaque terracotta: "Quero falar com um advogado" (abre WhatsApp).
- Lado direito: imagem do logo com formas decorativas rotacionadas em tons de navy.

### 3. Áreas de Atuação (id="servicos")
- Fundo sand-50. Título "Áreas de Atuação". Subtítulo: "Oferecemos assessoria jurídica especializada em diversas áreas do direito, sempre com foco na excelência e nos melhores resultados para nossos clientes."
- Dois cards (grid md:grid-cols-2, max-w-4xl centralizado):
  - Card 1 — ícone Home: título "Regularização de Imóveis", descrição "Transformamos a posse em segurança jurídica por meio da regularização do seu imóvel." Itens: Usucapião Extrajudicial, Adjudicação Compulsória, Retificação de Área e Registro, Regularização de Matrículas.
  - Card 2 — ícone FileText: título "Consultoria Imobiliária", descrição "Orientação jurídica preventiva para proteger seu patrimônio antes de qualquer negociação." Itens: Compra e Venda de Imóveis, Análise de Documentação, Elaboração e Revisão de Contratos, Due Diligence Imobiliária.

### 4. Sobre (id="sobre")

#### 4.1 Sobre Nossa Equipe
- Fundo navy-50. Layout grid lg:grid-cols-2.
- Título "Sobre Nossa Equipe".
- Texto:
  - "Fundada com o propósito de oferecer serviços jurídicos de excelência, nossa advocacia se consolidou como referência no mercado por sua abordagem inovadora e compromisso com resultados efetivos."
  - "Nossa equipe é composta por profissionais altamente qualificados, com vasta experiência em diversas áreas do direito, sempre atualizados com as mais recentes mudanças na legislação e jurisprudência."
  - "Acreditamos que cada cliente é único, por isso desenvolvemos estratégias personalizadas que atendem às necessidades específicas de cada caso, sempre priorizando a ética, transparência e eficiência."
- Missão (card sand-50): "Fornecer assessoria jurídica de qualidade superior, defendendo os direitos de nossos clientes com dedicação, ética e excelência técnica, contribuindo para a construção de uma sociedade mais justa."
- Valores: Excelência, Ética, Transparência, Compromisso (com os mesmos textos atuais).

#### 4.2 Dr. Gustavo Quinto
- Fundo sand-50. Foto à esquerda, texto à direita.
- Título "Dr. Gustavo Quinto".
- Texto:
  - "Advogado aprovado em diversos concursos jurídicos, com formação sólida e atuação especializada em litígios complexos."
  - "Especialista em direito bancário, imobiliário e do consumidor, desenvolvendo soluções jurídicas estratégicas e personalizadas."
  - "Sua trajetória em concursos públicos e prática advocatícia garantem um atendimento de excelência, sempre focado na defesa efetiva dos interesses dos clientes."
- Especializações: Direito Imobiliário, Direito Bancário, Direito do Consumidor.

#### 4.3 Dra. Amabile Stefeni
- Fundo navy-50. Texto à esquerda, foto à direita.
- Título "Dra. Amabile Stefeni".
- Texto:
  - "Advogada com atuação voltada ao Direito Imobiliário, dedicada à regularização de imóveis e à construção de soluções jurídicas que proporcionem segurança patrimonial e tranquilidade aos clientes."
  - "Sua atuação concentra-se especialmente em procedimentos de usucapião extrajudicial, regularização documental e consultoria imobiliária, sempre com uma abordagem estratégica, técnica e personalizada para cada caso."
  - "Acredita que a advocacia vai além da aplicação da lei: consiste em compreender a realidade de cada cliente e oferecer um atendimento próximo, transparente e comprometido com a proteção do seu patrimônio."
- Especializações: Regularização de Imóveis, Usucapião Extrajudicial, Consultoria Imobiliária.

### 5. Contato (id="contato")
- Fundo sand-50. Título "Entre em Contato". Subtítulo: "Estamos prontos para ouvir seu caso e oferecer a melhor solução jurídica. Agende sua consultoria."
- Layout grid lg:grid-cols-2:
  - Card esquerdo: título "Como entrar em contato?", texto explicativo, lista de benefícios e botão terracotta "Falar no WhatsApp".
  - Bloco direito (bg-navy-800 text-white): Informações de contato — Telefone (51) 98057-0463, E-mail sqadvocaciaesp@gmail.com, Instagram @sqadvocacia (link instagram.com/sqadvocacia), Endereço "Atendimento online de excelência para todo o Brasil", Horário "Seg-Sex: 8h às 18h".
- NÃO incluir formulário de contato.

### 6. Footer
- Fundo navy-900 text-white.
- 4 colunas: logo + descrição + OAB/RS 121.915 + CNPJ 62.184.389/0001-20; links rápidos; contato; botão terracotta "Quero falar com um advogado".
- Copyright: "© 2024 SQ Advocacia. Todos os direitos reservados. | Desenvolvido com ❤️ para defender seus direitos".

### 7. Botão flutuante do WhatsApp
- Fixed bottom-6 right-6, bg-terracotta-400, ícone MessageCircle, pulse sutil, aria-label "Conversar no WhatsApp".

## INTERAÇÕES E INTEGRAÇÕES

- WhatsApp number: 5551980570463.
- Mensagens para encodeURIComponent:
  - Hero e Footer: "Olá! Quero falar com um advogado."
  - Card de contato: "Olá! Gostaria de falar com um advogado."
  - Botão flutuante: "Olá! Gostaria de agendar uma consultoria."
- URL do WhatsApp: `https://wa.me/5551980570463?text=<mensagem>`.
- Instagram: https://instagram.com/sqadvocacia.
- E-mail: mailto:sqadvocaciaesp@gmail.com.
- Telefone: tel:+5551980570463.

## SEO / HEAD

- lang pt-BR.
- title: "SQ Advocacia - Escritório de Advocacia".
- meta description: "SQ Advocacia - Escritório especializado em soluções jurídicas personalizadas. Excelência, ética e compromisso com nossos clientes."
- og:type website, og:title e og:description iguais; twitter:card summary_large_image.

## RESTRIÇÕES

- Não usar cores fora da paleta navy/sand/terracotta.
- Não adicionar formulário de contato.
- Fotos dos profissionais em container 320x320px (w-80 h-80), object-cover, rounded-2xl, sombra.
- Manter todas as classes utilitárias, espaçamentos e tipografia idênticos ao descrito acima.
```

## Entrega

Após aprovação, salvarei este prompt também como um arquivo Markdown (`prompt-recriar-sq-advocacia.md`) para você baixar/copiar com facilidade.
