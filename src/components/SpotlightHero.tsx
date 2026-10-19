import { useEffect } from "react";

/*
  Hero Holofote Revela — arquivo licenciado enviado pelo titular da licença.
  © Upward Creative Academy Ltda. Licença UPW-4861-1CDD-EE1F.
  Uso em projetos próprios e de clientes; sem redistribuir ou revender este código.
  https://app.upwardacademy.com.br/licenca
*/
export function SpotlightHero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/hero-spotlight.js";
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <section className="upw-sec-reveal" id="inicio" data-raio="250" data-voltas="2">
      <div className="upw-sec-reveal__fx" aria-hidden="true">
        <div className="upw-sec-reveal__lamp" />
        <div className="upw-sec-reveal__cone" />
        <div className="upw-sec-reveal__pool" />
        <div className="upw-sec-reveal__vig" />
      </div>
      <div className="upw-sec-reveal__in">
        <p className="upw-sec-reveal__eyebrow upw-sec-reveal__rv">
          <span className="upw-sec-reveal__dot" aria-hidden="true" />
          <span><b>Quebre o Padrão</b> · Estratégia · Copy · Design</span>
        </p>
        <div className="upw-sec-reveal__stage">
          <h1 className="upw-sec-reveal__type upw-sec-reveal__title">
            <span className="upw-sec-reveal__ln">Uma boa oferta</span>
            <span className="upw-sec-reveal__ln">merece uma página</span>
            <span className="upw-sec-reveal__ln">fora do{" "}
              <span className="upw-sec-reveal__swap" data-luz="padrão.">padrão.</span>
            </span>
          </h1>
        </div>
        <div className="upw-sec-reveal__row">
          <div className="upw-sec-reveal__txt">
            <p className="upw-sec-reveal__sub upw-sec-reveal__rv" style={{ "--upw-d": 2 } as React.CSSProperties}>
              Seu negócio tem uma proposta própria. A Quebre o Padrão transforma isso em{" "}
              <strong>páginas de vendas e sites</strong> com mensagem clara, identidade e um caminho até o contato.
            </p>
            <div className="upw-sec-reveal__proof upw-sec-reveal__rv" style={{ "--upw-d": 4 } as React.CSSProperties}>
              <div className="upw-sec-reveal__faces" aria-hidden="true">
                <span className="upw-sec-reveal__face">
                  <img src="/assets/rafael-estudio.png" alt="" width="40" height="40" />
                </span>
              </div>
              <p className="upw-sec-reveal__ptxt">
                <b>6 anos no marketing</b>
                <span>Tráfego, copy e criação · Projetos de R$ 497 a R$ 1.500</span>
              </p>
            </div>
          </div>
          <div className="upw-sec-reveal__cta upw-sec-reveal__rv" style={{ "--upw-d": 3 } as React.CSSProperties}>
            <div className="upw-sec-reveal__btns">
              <a className="upw-sec-reveal__btn" href="#contato">
                Quero tirar meu projeto do papel
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a className="upw-sec-reveal__btn upw-sec-reveal__btn--ghost" href="#projetos">
                <span className="upw-sec-reveal__play" aria-hidden="true">
                  <svg viewBox="0 0 12 12" focusable="false">
                    <path d="M2 1.2v9.6L10.4 6z" />
                  </svg>
                </span>
                Explorar os projetos
              </a>
            </div>
            <div className="upw-sec-reveal__ctl">
              <button className="upw-sec-reveal__switch" type="button" aria-pressed="false">
                <span className="upw-sec-reveal__knob" aria-hidden="true" />
                Acender a luz
              </button>
              <span>ou mova a luz pelo título</span>
            </div>
          </div>
        </div>
      </div>
      <div className="upw-sec-reveal__grain" aria-hidden="true" />
      <div className="upw-sec-reveal__flash" aria-hidden="true" />
    </section>
  );
}
