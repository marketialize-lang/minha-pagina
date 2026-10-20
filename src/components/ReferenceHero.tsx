/**
 * Hero editorial Rafael Fonseca: foto do usuário com fundo transparente,
 * profundidade em camadas (QUEBRE atrás / PADRÃO à frente).
 * Mantém o design system Inter, preto, azul, ciano e violeta.
 */
const WhatsAppLink =
  "https://wa.me/5521982027149?text=Ol%C3%A1%2C%20Rafael%20Fonseca!%20Quero%20conversar%20sobre%20um%20projeto.";

function ClockIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>;
}
function GridIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3.5" y="7" width="17" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3.5 11.5h17"/></svg>;
}
function UsersIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 19v-2.3a5.5 5.5 0 0 1 11 0V19M16 5a3 3 0 0 1 0 6m2.5 3a5.2 5.2 0 0 1 2 4.1V19"/></svg>;
}

export function ReferenceHero() {
  return (
    <section id="inicio" className="reference-hero reference-hero--editorial" aria-labelledby="reference-hero-title">
      <div className="reference-hero__scene" aria-hidden="true">
        <span className="reference-hero__lightwash" />
        <span className="reference-hero__beam reference-hero__beam--one" />
        <span className="reference-hero__beam reference-hero__beam--two" />
        <span className="reference-hero__beam reference-hero__beam--three" />
        <span className="reference-hero__beam reference-hero__beam--four" />
        <span className="reference-hero__bottom-bloom" />
        <span className="reference-hero__vignette" />
      </div>

      <div className="editorial-hero__wrap">
        <div className="editorial-hero__art" aria-label="Foto de Rafael Fonseca">
          <span className="editorial-hero__rear-word" aria-hidden="true">QUEBRE</span>
          <div className="editorial-hero__halo" aria-hidden="true" />
          <img
            className="editorial-hero__portrait"
            src="/assets/rafael-hero-cutout.webp"
            alt="Rafael Fonseca de óculos escuros, em retrato com iluminação cinematográfica"
            width="941"
            height="1672"
            loading="eager"
            fetchPriority="high"
          />
          <span className="editorial-hero__front-word" aria-hidden="true">PADRÃO</span>
        </div>
        <div className="editorial-hero__copy">
          <p className="editorial-hero__eyebrow">ESTRATÉGIA <span aria-hidden="true">×</span> DESIGN <span aria-hidden="true">×</span> RESULTADOS</p>
          <h1 className="editorial-hero__title" id="reference-hero-title">
            <span>Uma boa oferta</span>
            <span>merece uma página</span>
            <span className="editorial-hero__title-accent">fora do padrão.</span>
          </h1>
          <p className="editorial-hero__description">
            Crio <strong>páginas de vendas e sites</strong> que destacam sua oferta com estratégia, design e clareza.
          </p>
          <div className="editorial-hero__actions">
            <button className="editorial-hero__button editorial-hero__button--portfolio" type="button" disabled title="Os projetos serão publicados na próxima dobra">
              Ver portfólio <span aria-hidden="true">↗</span>
            </button>
            <a className="editorial-hero__button editorial-hero__button--contact" href={WhatsAppLink} target="_blank" rel="noopener noreferrer">
              <span className="editorial-hero__cta-desktop">Quero tirar meu projeto do papel</span>
              <span className="editorial-hero__cta-mobile">Iniciar projeto</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="editorial-hero__proof" aria-label="Informações sobre o trabalho">
            <span className="editorial-hero__proof-item"><span className="editorial-hero__proof-icon"><ClockIcon /></span>6 anos de experiência</span>
            <span className="editorial-hero__proof-item"><span className="editorial-hero__proof-icon"><GridIcon /></span>Páginas de vendas e sites</span>
            <span className="editorial-hero__proof-item"><span className="editorial-hero__proof-icon"><UsersIcon /></span>Mais de 50 clientes</span>
          </div>
        </div>

      </div>
      <div className="editorial-hero__footer-blur" aria-hidden="true" />
    </section>
  );
}
