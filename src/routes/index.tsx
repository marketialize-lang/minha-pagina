import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { initializePortfolio } from "@/lib/portfolio";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  useEffect(() => initializePortfolio(), []);
  return (
    <>
      <a className="skip" href="#principal">
        Ir ao conteúdo
      </a>
      <header className="header">
        <nav className="container nav" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="Quebre o Padrão, início">
            <span>Quebre o Padrão</span>
            <span className="brand-dot">.</span>
          </a>
          <div className="navlinks" id="navlinks">
            <a href="#projetos">Projetos</a>
            <a href="#abordagem">A abordagem</a>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Processo</a>
            <a href="#contato">Contato</a>
          </div>
          <a className="btn glass nav-cta" href="#contato">
            Vamos conversar <span>↗</span>
          </a>
          <button
            className="menu-toggle"
            aria-expanded="false"
            aria-controls="navlinks"
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
      <main id="principal">
        <section className="hero" id="inicio">
          <div className="hero-world" aria-hidden="true">
            <div className="light-field">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div
              className="spline-wrap"
              data-spline="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW/"
            ></div>
          </div>
          <div className="container hero-inner">
            <div className="eyebrow">
              <span className="status-dot"></span> ESTRATÉGIA · COPY · DESIGN
            </div>
            <h1>
              <span className="hero-line">
                <span className="hero-avatar">
                  <img src="/assets/rafael-estudio.png" alt="" width="72" height="72" />
                </span>{" "}
                Uma boa oferta
              </span>
              <span className="hero-line"> merece uma página</span>
              <span className="hero-line soft-shine"> fora do padrão.</span>
            </h1>
            <p className="hero-description">
              Seu negócio tem uma proposta própria. A Quebre o Padrão transforma isso em{" "}
              <strong>páginas de vendas e sites</strong> com mensagem clara, identidade e um caminho
              até o contato.
            </p>
            <div className="hero-actions">
              <a className="btn primary float-cta" href="#contato">
                Quero tirar meu projeto do papel <span>↗</span>
              </a>
              <a className="btn glass" href="#projetos">
                Explorar os projetos <span>↓</span>
              </a>
            </div>
            <div className="hero-proof">
              <span>
                <b>6 anos</b> no marketing
              </span>
              <span>Tráfego, copy e criação</span>
              <span>
                Projetos de <b>R$ 497 a R$ 1.500</b>
              </span>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>Da primeira impressão à próxima ação.</span>
            <button className="motion-toggle" aria-pressed="false" aria-label="Pausar animações">
              <span className="motion-icon">Ⅱ</span>{" "}
              <span className="motion-label">Pausar movimento</span>
            </button>
            <a href="#projetos" className="scroll-cue" aria-label="Rolar para projetos">
              ↓
            </a>
          </div>
        </section>
        <section className="projects section" id="projetos">
          <div className="container">
            <div className="section-top" data-reveal>
              <div>
                <span className="pill">
                  <span className="lime">✦</span> Do conceito à experiência
                </span>
                <h2>
                  Veja o que sua ideia
                  <br />
                  pode se tornar.
                </h2>
              </div>
              <p className="section-deck">
                Três projetos demonstrativos para explorar diferentes negócios, estilos e objetivos.
                Abra e navegue.
              </p>
            </div>
            <div className="project-controls">
              <div className="filters" role="group" aria-label="Filtrar projetos">
                <button className="filter active" aria-pressed="true" data-category="all">
                  Todos
                </button>
                <button className="filter" aria-pressed="false" data-category="landing">
                  Página de vendas
                </button>
                <button className="filter" aria-pressed="false" data-category="site">
                  Site
                </button>
                <button className="filter" aria-pressed="false" data-category="saas">
                  SaaS
                </button>
              </div>
              <div className="arrows">
                <button className="icon-btn" data-slide="-1" aria-label="Projetos anteriores">
                  ←
                </button>
                <button className="icon-btn" data-slide="1" aria-label="Próximos projetos">
                  →
                </button>
              </div>
            </div>
            <div className="project-track" aria-label="Projetos demonstrativos">
              <article className="project-card" data-type="saas" data-reveal>
                <a
                  href="/projetos/atlas.html"
                  target="_blank"
                  rel="noopener"
                  className="project-preview atlas-preview"
                  aria-label="Abrir demonstração Atlas, SaaS"
                >
                  <div className="browser-bar">
                    <i></i>
                    <i></i>
                    <i></i>
                    <span>atlas · workspace</span>
                  </div>
                  <div className="atlas-mini">
                    <div className="mini-side">
                      <b>
                        atlas<span>✳</span>
                      </b>
                      <small>Workspace</small>
                      <em>Visão geral</em>
                      <small>Projetos</small>
                      <small>Equipe</small>
                    </div>
                    <div className="mini-main">
                      <span className="mini-eyebrow">MENOS RUÍDO. MAIS DIREÇÃO.</span>
                      <h3>
                        Um lugar para
                        <br />
                        fazer acontecer.
                      </h3>
                      <div className="mini-metrics">
                        <div>
                          <small>Em andamento</small>
                          <strong>08</strong>
                        </div>
                        <div>
                          <small>Seu próximo passo</small>
                          <strong>Revisar ↗</strong>
                        </div>
                      </div>
                      <div className="mini-chart">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                    </div>
                  </div>
                  <span className="preview-open">Explorar projeto ↗</span>
                </a>
                <div className="project-info">
                  <div>
                    <span className="project-kind">SaaS / PRODUTO DIGITAL</span>
                    <h3>Atlas Workspace</h3>
                  </div>
                  <a
                    className="icon-btn"
                    href="/projetos/atlas.html"
                    target="_blank"
                    rel="noopener"
                    aria-label="Abrir Atlas"
                  >
                    ↗
                  </a>
                </div>
                <p>Uma interface para organizar projetos com menos ruído.</p>
                <span className="concept-label">Projeto conceito · demonstração autoral</span>
              </article>
              <article className="project-card" data-type="site" data-reveal>
                <a
                  href="/projetos/forma.html"
                  target="_blank"
                  rel="noopener"
                  className="project-preview forma-preview"
                  aria-label="Abrir demonstração Forma, site de estúdio"
                >
                  <div className="browser-bar">
                    <i></i>
                    <i></i>
                    <i></i>
                    <span>forma · estúdio criativo</span>
                  </div>
                  <div className="forma-mini">
                    <div className="mini-nav">
                      <b>forma®</b>
                      <small>Ideias com presença.</small>
                    </div>
                    <h3>
                      O comum
                      <br />
                      fica lá fora<span>↗</span>
                    </h3>
                    <div className="forma-orbit"></div>
                    <div className="mini-line">
                      ESTRATÉGIA &nbsp; / &nbsp; IDENTIDADE &nbsp; / &nbsp; DIGITAL
                    </div>
                  </div>
                  <span className="preview-open">Explorar projeto ↗</span>
                </a>
                <div className="project-info">
                  <div>
                    <span className="project-kind">SITE / NEGÓCIO DE SERVIÇOS</span>
                    <h3>Forma Studio</h3>
                  </div>
                  <a
                    className="icon-btn"
                    href="/projetos/forma.html"
                    target="_blank"
                    rel="noopener"
                    aria-label="Abrir Forma"
                  >
                    ↗
                  </a>
                </div>
                <p>Um site editorial para uma marca que quer ter presença.</p>
                <span className="concept-label">Projeto conceito · demonstração autoral</span>
              </article>
              <article className="project-card" data-type="landing" data-reveal>
                <a
                  href="/projetos/dominio.html"
                  target="_blank"
                  rel="noopener"
                  className="project-preview dominio-preview"
                  aria-label="Abrir demonstração Domínio, página de vendas"
                >
                  <div className="browser-bar">
                    <i></i>
                    <i></i>
                    <i></i>
                    <span>domínio · apresentação</span>
                  </div>
                  <div className="dominio-mini">
                    <div className="mini-nav">
                      <b>
                        DOMÍNIO<span>®</span>
                      </b>
                      <small>DO RASCUNHO AO PROJETO.</small>
                    </div>
                    <span className="mini-eyebrow">IDEIAS BOAS MERECEM SAIR DO PAPEL.</span>
                    <h3>
                      Seu conhecimento.
                      <br />
                      Uma oferta
                      <br />
                      <i>bem construída.</i>
                    </h3>
                    <span className="mini-button">Conhecer o programa ↗</span>
                    <div className="book-shape">
                      <span>
                        DO
                        <br />
                        CONHECER
                        <br />
                        AO CRIAR.
                      </span>
                    </div>
                  </div>
                  <span className="preview-open">Explorar projeto ↗</span>
                </a>
                <div className="project-info">
                  <div>
                    <span className="project-kind">LANDING PAGE / EDUCAÇÃO</span>
                    <h3>Domínio</h3>
                  </div>
                  <a
                    className="icon-btn"
                    href="/projetos/dominio.html"
                    target="_blank"
                    rel="noopener"
                    aria-label="Abrir Domínio"
                  >
                    ↗
                  </a>
                </div>
                <p>Uma oferta apresentada com argumento, ritmo e clareza.</p>
                <span className="concept-label">Projeto conceito · demonstração autoral</span>
              </article>
            </div>
            <p className="portfolio-note">
              Esses projetos foram criados para demonstrar possibilidades de trabalho. Não
              representam clientes atendidos ou resultados comerciais.
            </p>
          </div>
        </section>
        <section className="approach section" id="abordagem">
          <div className="container approach-grid">
            <div className="portrait-sticky">
              <span className="pill">
                <span className="status-dot"></span> Quem está por trás
              </span>
              <div className="portrait-wrap">
                <div className="portrait-glow"></div>
                <img
                  src="/assets/rafael-estudio.png"
                  alt="Retrato de Rafael, profissional de marketing"
                  width="1122"
                  height="1402"
                  loading="lazy"
                />
                <div className="portrait-caption glass">
                  <div>
                    <strong data-owner>Rafael</strong>
                    <small>Estratégia, copy e criação.</small>
                  </div>
                  <span className="experience-number">
                    6<span>anos</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="story-panels">
              <article className="story-panel active" data-story>
                <span className="eyebrow">01 / A MENSAGEM CONTINUA</span>
                <h2>
                  O anúncio faz
                  <br />
                  uma promessa.
                  <br />A página precisa
                  <br />
                  fazer sentido.
                </h2>
                <p>
                  Você chama a atenção de alguém. Essa pessoa clica. E começa a procurar o que
                  interessa: o que você oferece, por que isso importa e como dar o próximo passo.
                </p>
                <p>
                  Quando a mensagem do anúncio e a da página seguem caminhos diferentes, o visitante
                  precisa montar essa conexão sozinho.
                </p>
                <p className="story-highlight">Meu trabalho é construir essa conexão.</p>
              </article>
              <article className="story-panel" data-story>
                <span className="eyebrow">02 / EXPERIÊNCIA QUE SE CONECTA</span>
                <h2>
                  Um projeto visto
                  <br />
                  além do layout.
                </h2>
                <p>
                  Sou Rafael, criador da Quebre o Padrão. Trabalho com marketing há 6 anos, com
                  experiência em tráfego pago, copy, sites e páginas de vendas.
                </p>
                <p>
                  Essa visão me ajuda a pensar na página como parte do caminho do cliente: de onde
                  ele vem, o que precisa entender e qual ação deve encontrar.
                </p>
                <div className="expertise-tags">
                  <span>Tráfego pago</span>
                  <span>Copywriting</span>
                  <span>Sites</span>
                  <span>Páginas de vendas</span>
                </div>
              </article>
              <article className="story-panel" data-story>
                <span className="eyebrow">03 / CADA PEÇA TEM UMA FUNÇÃO</span>
                <h2>
                  Design para chamar.
                  <br />
                  Copy para explicar.
                  <br />
                  Clareza para decidir.
                </h2>
                <p>
                  A imagem cria a primeira impressão. O texto apresenta a oferta. A estrutura coloca
                  cada argumento no momento certo.
                </p>
                <p>
                  Por isso, começo entendendo seu negócio. Depois, organizo o conteúdo, o visual e o
                  caminho até o contato ou a compra.
                </p>
                <a className="text-link" href="#processo">
                  Conheça o processo <span>↗</span>
                </a>
              </article>
            </div>
          </div>
        </section>
        <section className="section services" id="servicos">
          <div className="container">
            <div className="section-top" data-reveal>
              <div>
                <span className="pill">O que podemos criar</span>
                <h2>
                  O formato certo
                  <br />
                  para a sua oferta.
                </h2>
              </div>
              <p className="section-deck">
                Uma página focada em vender. Um site para apresentar seu negócio. A copy para
                conectar tudo.
              </p>
            </div>
            <div className="services-grid">
              <article className="service-card border-gradient" data-reveal>
                <span className="service-icon blue-icon">↗</span>
                <h3>Páginas de vendas</h3>
                <p>
                  Uma estrutura dedicada a uma oferta, com argumentos, apresentação do produto e
                  chamadas para a ação.
                </p>
                <div className="service-tags">
                  <span>Produtos digitais</span>
                  <span>Campanhas</span>
                  <span>Serviços</span>
                </div>
                <a className="text-link" href="#contato" data-service="Página de vendas">
                  Quero uma página <span>↗</span>
                </a>
              </article>
              <article className="service-card border-gradient" data-reveal>
                <span className="service-icon violet-icon">▱</span>
                <h3>Sites profissionais</h3>
                <p>
                  Seu negócio apresentado com identidade, informação organizada e um caminho claro
                  até o contato.
                </p>
                <div className="service-tags">
                  <span>Negócios locais</span>
                  <span>Profissionais</span>
                  <span>Marcas</span>
                </div>
                <a className="text-link" href="#contato" data-service="Site profissional">
                  Quero um site <span>↗</span>
                </a>
              </article>
              <article className="service-card border-gradient" data-reveal>
                <span className="service-icon cyan-icon">Aa</span>
                <h3>Copy para a página</h3>
                <p>
                  Se o texto ainda está no rascunho, podemos construir a mensagem com base no seu
                  público, na oferta e nas dúvidas de compra.
                </p>
                <div className="service-tags">
                  <span>Argumentação</span>
                  <span>Oferta</span>
                  <span>Objeções</span>
                </div>
                <a className="text-link" href="#contato" data-service="Página com criação da copy">
                  Preciso da copy também <span>↗</span>
                </a>
              </article>
            </div>
          </div>
        </section>
        <section className="section process" id="processo">
          <div className="container process-grid">
            <div className="process-heading" data-reveal>
              <span className="pill">Como vamos trabalhar</span>
              <h2>
                Da conversa
                <br />à página
                <br /> navegável.
              </h2>
              <p>
                As decisões de texto e visual partem do seu negócio. Cada etapa prepara a próxima.
              </p>
            </div>
            <ol className="steps">
              <li data-reveal>
                <span className="step-number">01</span>
                <div>
                  <h3>Entender antes de desenhar.</h3>
                  <p>
                    Alinhamos o objetivo, o público, a oferta e os materiais que você já tem. Aqui
                    também definimos se a copy será criada.
                  </p>
                </div>
              </li>
              <li data-reveal>
                <span className="step-number">02</span>
                <div>
                  <h3>Organizar o que precisa ser dito.</h3>
                  <p>
                    Estruturamos as seções e o caminho da mensagem. Cada dobra entra porque ajuda o
                    visitante a entender ou decidir.
                  </p>
                </div>
              </li>
              <li data-reveal>
                <span className="step-number">03</span>
                <div>
                  <h3>Dar forma à sua mensagem.</h3>
                  <p>
                    O conteúdo ganha identidade visual, imagens e interações, com atenção à leitura
                    e à navegação no celular.
                  </p>
                </div>
              </li>
              <li data-reveal>
                <span className="step-number">04</span>
                <div>
                  <h3>Revisar e preparar a entrega.</h3>
                  <p>
                    Conferimos conteúdo, links e comportamento das telas. Ajustes, publicação e
                    detalhes de entrega são combinados no escopo.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className="section investment" id="investimento">
          <div className="container investment-grid">
            <div data-reveal>
              <span className="pill">Investimento com escopo claro</span>
              <h2>
                Você entende
                <br />o que vai receber.
                <br />
                Antes de começar.
              </h2>
              <p className="section-deck">
                O orçamento acompanha o que seu projeto precisa, sem tentar encaixar todo negócio no
                mesmo pacote.
              </p>
            </div>
            <div className="price-panel border-gradient" data-reveal>
              <span className="eyebrow">PÁGINAS DE VENDAS E SITES</span>
              <div className="price">
                <span>R$</span> 497 <small>a</small> <span>R$</span> 1.500
              </div>
              <p>Faixa de investimento conforme o escopo.</p>
              <div className="price-divider"></div>
              <h3>O que define o valor</h3>
              <ul>
                <li>Quantidade de dobras ou páginas.</li>
                <li>Complexidade do layout e das interações.</li>
                <li>Necessidade de criação da copy.</li>
                <li>Funcionalidades e integrações combinadas.</li>
              </ul>
              <a className="btn primary" href="#contato">
                Conversar sobre meu projeto <span>↗</span>
              </a>
              <small className="price-note">
                Prazo, condições de pagamento, domínio e hospedagem são alinhados na proposta.
              </small>
            </div>
          </div>
        </section>
        <section className="section faq-section">
          <div className="container faq-grid">
            <div data-reveal>
              <span className="pill">Antes de começar</span>
              <h2>
                Alguns pontos
                <br />
                que vale alinhar.
              </h2>
            </div>
            <div className="faq-list">
              <details data-reveal>
                <summary>
                  Ainda não tenho os textos. Podemos começar?<span>+</span>
                </summary>
                <p>
                  Sim. A criação da copy pode fazer parte do projeto. Primeiro alinhamos seu
                  público, sua oferta e as informações que sustentam a mensagem. Essa necessidade
                  entra no orçamento.
                </p>
              </details>
              <details data-reveal>
                <summary>
                  Qual é a diferença entre uma página de vendas e um site?<span>+</span>
                </summary>
                <p>
                  A página de vendas concentra a atenção em uma oferta e uma ação. Um site pode
                  apresentar diferentes serviços, informações da empresa e caminhos de contato.
                  Escolhemos pelo objetivo do seu negócio.
                </p>
              </details>
              <details data-reveal>
                <summary>
                  Como sei quanto meu projeto vai custar?<span>+</span>
                </summary>
                <p>
                  A faixa vai de R$ 497 a R$ 1.500. O valor depende da quantidade de seções, da
                  complexidade, das funcionalidades e da criação de texto. Depois da conversa
                  inicial, você recebe o escopo e o orçamento para avaliar.
                </p>
              </details>
              <details data-reveal>
                <summary>
                  Meu site vai funcionar no celular?<span>+</span>
                </summary>
                <p>
                  A versão para celular faz parte da construção. Texto, imagens, botões e navegação
                  são pensados para diferentes tamanhos de tela, e o comportamento é conferido antes
                  da entrega.
                </p>
              </details>
              <details data-reveal>
                <summary>
                  Você garante vendas depois que a página estiver pronta?<span>+</span>
                </summary>
                <p>
                  Vendas também dependem da oferta, do público, do tráfego e do atendimento. O
                  trabalho da página é apresentar sua proposta com clareza e organizar o próximo
                  passo. Não existe garantia de faturamento.
                </p>
              </details>
              <details data-reveal>
                <summary>
                  Os projetos apresentados são de clientes?<span>+</span>
                </summary>
                <p>
                  Os três projetos desta seleção são demonstrações autorais. Você pode navegar por
                  eles para conhecer possibilidades de design, copy e interação. Eles estão
                  identificados como projetos conceito.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="contact section" id="contato">
          <div className="contact-light" aria-hidden="true"></div>
          <div className="container contact-inner">
            <div className="contact-action-card" data-reveal>
              <span className="pill">Vamos dar o próximo passo</span>
            <h2>
              Vamos tirar sua ideia
              <br />
              do lugar-comum?
            </h2>
            <p>
              Me conte o que você vende, para quem e o que precisa criar. A partir disso, alinhamos
              o formato e o investimento.
            </p>
              <div className="contact-direct-actions">
                <a className="btn primary" href="https://wa.me/5521982027149?text=Ol%C3%A1%2C%20Quebre%20o%20Padr%C3%A3o!%20Quero%20conversar%20sobre%20um%20projeto." target="_blank" rel="noopener noreferrer">
                  Conversar no WhatsApp <span>↗</span>
                </a>
                <a className="btn glass" href="#brief-form">Enviar briefing <span>↓</span></a>
              </div>
              <div className="contact-social-line">
                <span>Uma ideia boa merece sair do papel.</span>
                <a href="https://www.instagram.com/quebradepadrao.oficial/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
              </div>
            </div>
            <div className="brief-intro">
              <span className="eyebrow">OU CONTE A SUA IDEIA</span>
              <p>Prefere explicar o que precisa? Preencha o resumo e continue a conversa pelo WhatsApp.</p>
            </div>
            <form id="brief-form" className="brief-form">
              <div className="form-grid">
                <label>
                  Seu nome
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Como posso te chamar?"
                    required
                    maxLength={100}
                  />
                </label>
                <label>
                  O que você precisa?
                  <select name="service">
                    <option>Página de vendas</option>
                    <option>Site profissional</option>
                    <option>Página com criação da copy</option>
                    <option>Quero entender qual formato faz sentido</option>
                  </select>
                </label>
              </div>
              <label>
                Conte um pouco sobre a sua ideia
                <textarea
                  name="idea"
                  rows={3}
                  placeholder="Meu negócio é… Quero uma página para…"
                  required
                  maxLength={2000}
                ></textarea>
              </label>
              <button className="btn primary" type="submit">
                <span className="contact-button-label">Conversar no WhatsApp</span>
                <span>↗</span>
              </button>
              <p className="form-note">Esse primeiro resumo ajuda a começar pelo que importa.</p>
            </form>
            <div className="contact-result" hidden>
              <h3>Seu resumo está pronto.</h3>
              <p>Confira o texto e copie para compartilhar na conversa sobre o projeto.</p>
              <pre id="brief-output"></pre>
              <button className="btn glass" id="copy-brief">
                Copiar resumo <span>↗</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand-col">
            <a className="brand" href="#inicio" aria-label="Quebre o Padrão — voltar ao início">
              <span>Quebre o Padrão</span><span className="brand-dot">.</span>
            </a>
            <p>Estratégia, copy e design para marcas que querem uma presença própria.</p>
            <a className="footer-social" href="https://www.instagram.com/quebradepadrao.oficial/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
          </div>
          <div className="footer-col">
            <h3>Navegação</h3>
            <a href="#projetos">Projetos</a>
            <a href="#abordagem">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Processo</a>
            <a href="#contato">Contato</a>
          </div>
          <div className="footer-col">
            <h3>Serviços</h3>
            <a href="#contato" data-service="Página de vendas">Páginas de vendas</a>
            <a href="#contato" data-service="Site profissional">Sites profissionais</a>
            <a href="#contato" data-service="Página com criação da copy">Copywriting</a>
            <a href="#investimento">Investimento</a>
          </div>
          <div className="footer-col footer-contact">
            <h3>Vamos conversar</h3>
            <p>Tem um projeto em mente? Conte sua ideia e vamos encontrar o formato certo.</p>
            <a href="https://wa.me/5521982027149?text=Ol%C3%A1%2C%20Quebre%20o%20Padr%C3%A3o!%20Quero%20conversar%20sobre%20um%20projeto." target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
            <a className="footer-contact-link" href="#brief-form">Enviar briefing <span>→</span></a>
          </div>
        </div>
        <div className="container footer-bottom">
          <small>© 2026 Quebre o Padrão. Todos os direitos reservados.</small>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>
      <div className="toast" role="status" hidden></div>
    </>
  );
}
