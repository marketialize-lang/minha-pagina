import { createFileRoute } from "@tanstack/react-router";
import { ReferenceHero } from "@/components/ReferenceHero";

export const Route = createFileRoute("/")({ component: Index });

const contactLink = "https://wa.me/5521982027149?text=Ol%C3%A1%2C%20Rafael%20Fonseca!%20Quero%20conversar%20sobre%20um%20projeto.";

function Index() {
  return (
    <>
      <a className="skip" href="#inicio">Ir ao conteúdo</a>
      <header className="reference-header">
        <nav className="reference-header__nav" aria-label="Navegação principal">
          <a className="reference-header__brand" href="#inicio" aria-label="Rafael Fonseca — início">
            Rafael Fonseca
          </a>
          <div className="reference-header__links" aria-label="Seções em preparação">
            <span title="Em preparação">Portfólio</span>
            <span title="Em preparação">Sobre</span>
            <span title="Em preparação">Serviços</span>
            <span title="Em preparação">Processo</span>
            <a href={contactLink} target="_blank" rel="noopener noreferrer">Contato</a>
          </div>
          <a className="reference-header__cta" href={contactLink} target="_blank" rel="noopener noreferrer">
            Vamos conversar <span aria-hidden="true">↗</span>
          </a>
          <details className="reference-header__mobile-navigation">
            <summary className="reference-header__menu-toggle" aria-label="Abrir opções do menu">
              <span className="reference-header__hamburger" aria-hidden="true">
                <i /><i />
              </span>
            </summary>
            <nav className="reference-header__mobile-menu" aria-label="Menu mobile">
              <a href="#inicio">Início</a>
              <span aria-disabled="true" title="Seção em preparação">Portfólio <small>Em breve</small></span>
              <span aria-disabled="true" title="Seção em preparação">Sobre <small>Em breve</small></span>
              <span aria-disabled="true" title="Seção em preparação">Serviços <small>Em breve</small></span>
              <span aria-disabled="true" title="Seção em preparação">Processo <small>Em breve</small></span>
              <a href={contactLink} target="_blank" rel="noopener noreferrer">Contato <span aria-hidden="true">↗</span></a>
            </nav>
          </details>
        </nav>
      </header>
      <main id="principal">
        <ReferenceHero />
      </main>
    </>
  );
}
