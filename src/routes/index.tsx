import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ReferenceHero } from "@/components/ReferenceHero";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip" href="#inicio">Ir ao conteúdo</a>
      <header className="reference-header" ref={headerRef}>
        <nav className="reference-header__nav" aria-label="Navegação principal">
          <a className="reference-header__brand" href="#inicio" aria-label="Rafael Fonseca — início" onClick={() => setMenuOpen(false)}>
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
          <button
            className="reference-header__menu-toggle"
            type="button"
            aria-controls="reference-mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={menuOpen ? "reference-header__hamburger is-open" : "reference-header__hamburger"} aria-hidden="true">
              <i /><i />
            </span>
          </button>
        </nav>
        <nav
          className={menuOpen ? "reference-header__mobile-menu is-open" : "reference-header__mobile-menu"}
          id="reference-mobile-menu"
          aria-label="Menu mobile"
          aria-hidden={!menuOpen}
          inert={!menuOpen}
        >
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
          <span aria-disabled="true" title="Seção em preparação">Portfólio <small>Em breve</small></span>
          <span aria-disabled="true" title="Seção em preparação">Sobre <small>Em breve</small></span>
          <span aria-disabled="true" title="Seção em preparação">Serviços <small>Em breve</small></span>
          <span aria-disabled="true" title="Seção em preparação">Processo <small>Em breve</small></span>
          <a href={contactLink} onClick={() => setMenuOpen(false)} target="_blank" rel="noopener noreferrer">Contato <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="principal">
        <ReferenceHero />
      </main>
    </>
  );
}
