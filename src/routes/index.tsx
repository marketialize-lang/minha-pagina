import { createFileRoute } from "@tanstack/react-router";
import { SpotlightHero } from "@/components/SpotlightHero";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return (
    <>
      <a className="skip" href="#inicio">Ir ao conteúdo</a>
      <header className="header">
        <nav className="container nav" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="Quebre o Padrão, início">
            <span>Quebre o Padrão</span><span className="brand-dot">.</span>
          </a>
          <a className="btn glass nav-cta" href="https://wa.me/5521982027149?text=Ol%C3%A1%2C%20Quebre%20o%20Padr%C3%A3o!%20Quero%20conversar%20sobre%20um%20projeto." target="_blank" rel="noopener noreferrer">
            Vamos conversar <span>↗</span>
          </a>
        </nav>
      </header>
      <main id="principal">
        <SpotlightHero />
      </main>
    </>
  );
}
