import { createFileRoute } from "@tanstack/react-router";
import { ReferenceHero } from "@/components/ReferenceHero";

export const Route = createFileRoute("/")({ component: Index });
const contactLink = "https://wa.me/5521982027149?text=Ol%C3%A1%2C%20Quebre%20o%20Padr%C3%A3o!%20Quero%20conversar%20sobre%20um%20projeto.";

function Index() {
  return (
    <>
      <a className="skip" href="#inicio">Ir ao conteúdo</a>
      <header className="reference-header">
        <nav className="reference-header__nav" aria-label="Navegação principal">
          <a className="reference-header__brand" href="#inicio" aria-label="Quebre o Padrão — início">
            Quebre o Padrão<span className="reference-header__brand-dot">.</span>
          </a>
          <div className="reference-header__links" aria-label="Seções em preparação">
            <span title="Em preparação">Projetos</span>
            <span title="Em preparação">Sobre</span>
            <span title="Em preparação">Serviços</span>
            <span title="Em preparação">Processo</span>
            <span title="Em preparação">Planos</span>
          </div>
          <a className="reference-header__cta" href={contactLink} target="_blank" rel="noopener noreferrer">
            Vamos conversar <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <main id="principal">
        <ReferenceHero />
      </main>
    </>
  );
}
