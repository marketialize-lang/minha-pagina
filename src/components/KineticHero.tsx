import { useEffect } from "react";
import type { CSSProperties } from "react";

/*
© Upward Creative Academy Ltda. Licença UPW-888B-FB55-D7DC.
Hero Tipografia Magnética, adaptado para React a partir do arquivo enviado pelo usuário.
Permitido para projetos próprios/clientes, sem revenda ou redistribuição como template.
https://app.upwardacademy.com.br/licenca
*/

export function KineticHero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/hero-kinetic.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <section className="upw-sec-kinetic" id="inicio" data-forca="0.38">
      <div className="upw-kn-bg" aria-hidden="true">
        <div className="upw-kn-cols"></div>
        <div className="upw-kn-mq" data-palavra="Padrão"></div>
      </div>
      <div className="upw-kn-in">
        <div className="upw-kn-stage">
          <div className="upw-kn-field" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
          <h1 className="upw-kn-title">
            <span className="upw-kn-line">Uma boa oferta</span>
            <span className="upw-kn-line">merece uma página</span>
            <span className="upw-kn-line">fora do <em>padrão.</em></span>
          </h1>
          <p className="upw-kn-note upw-kn-rv" style={{ "--upw-d": ".7s" } as CSSProperties}>
            <b>(01)</b>Da primeira impressão à próxima ação.
          </p>
          <div className="upw-kn-badge upw-kn-rv" aria-hidden="true">
            <svg viewBox="0 0 120 120" focusable="false">
              <circle className="upw-kn-badge-bg" cx="60" cy="60" r="60" />
              <g className="upw-kn-badge-ring">
                <path className="upw-kn-arc" id="upw-kn-arc" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" fill="none" />
                <text><textPath href="#upw-kn-arc" textLength="274" lengthAdjust="spacing">QUEBRE O PADRÃO ✦ ESTRATÉGIA ✦ COPY ✦</textPath></text>
              </g>
              <path className="upw-kn-badge-arrow" d="M50 50l20 20M71 53v17H54" />
            </svg>
          </div>
        </div>
        <p className="upw-kn-sub upw-kn-rv" style={{ "--upw-d": ".45s" } as CSSProperties}>
          Seu negócio tem uma proposta própria. A Quebre o Padrão transforma isso em <b>páginas de vendas e sites</b> com mensagem clara, identidade e um caminho até o contato.
        </p>
        <div className="upw-kn-act upw-kn-rv" style={{ "--upw-d": ".55s" } as CSSProperties}>
          <a className="upw-kn-cta" href="https://wa.me/5521982027149?text=Ol%C3%A1%2C%20Quebre%20o%20Padr%C3%A3o!%20Quero%20conversar%20sobre%20um%20projeto." target="_blank" rel="noopener noreferrer">
            <span className="upw-kn-cta-t">Quero tirar meu projeto do papel</span>
            <span className="upw-kn-cta-i" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </a>
          <p className="upw-kn-when">Estratégia · Copy · Design</p>
        </div>
        <ul className="upw-kn-stats upw-kn-rv" style={{ "--upw-d": ".65s" } as CSSProperties}>
          <li><b>6<small> anos</small></b><span>de experiência no marketing</span></li>
          <li><b>3</b><span>serviços: páginas, sites e copy</span></li>
          <li><b>R$ 497</b><span>projetos até R$ 1.500, conforme o escopo</span></li>
        </ul>
        <div className="upw-kn-tools upw-kn-rv" style={{ "--upw-d": ".35s" } as CSSProperties}>
          <span className="upw-kn-mark" aria-hidden="true"><b>X 0000</b></span>
          <p className="upw-kn-hint">
            <span className="upw-kn-h-m">Passe o mouse nas letras · clique para embaralhar</span>
            <span className="upw-kn-h-t">Arraste o dedo ou toque nas letras</span>
          </p>
          <div className="upw-kn-btns">
            <button type="button" className="upw-kn-btn upw-kn-shuffle">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5M5.3 5.3l3.5 3.5M15.2 15.2l3.5-3.5M5.3 18.7l3.5-3.5M15.2 8.8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="upw-kn-btn-t">Embaralhar</span>
            </button>
            <button type="button" className="upw-kn-btn upw-kn-pause" aria-pressed="false">
              <svg className="upw-kn-i-stop" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/></svg>
              <svg className="upw-kn-i-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>
              <span className="upw-kn-btn-t">Pausar</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
