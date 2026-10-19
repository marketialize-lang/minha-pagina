/**
 * Primeira dobra inspirada diretamente na referência do vídeo enviada pelo cliente.
 * Identidade Rafael Fonseca e foto local de Rafael; sem uso de assets de terceiros.
 */
const WhatsAppLink =
  "https://wa.me/5521982027149?text=Ol%C3%A1%2C%20Rafael%20Fonseca!%20Quero%20conversar%20sobre%20um%20projeto.";

function ClockIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>;
}
function GridIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3.5" y="7" width="17" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3.5 11.5h17" /></svg>;
}
function UsersIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3" /><path d="M3.5 19v-2.3a5.5 5.5 0 0 1 11 0V19M16 5a3 3 0 0 1 0 6m2.5 3a5.2 5.2 0 0 1 2 4.1V19" /></svg>;
}

export function ReferenceHero() {
  return (
    <section id="inicio" className="reference-hero" aria-labelledby="reference-hero-title">
      <div className="reference-hero__scene" aria-hidden="true">
        <span className="reference-hero__lightwash" />
        <span className="reference-hero__beam reference-hero__beam--one" />
        <span className="reference-hero__beam reference-hero__beam--two" />
        <span className="reference-hero__beam reference-hero__beam--three" />
        <span className="reference-hero__beam reference-hero__beam--four" />
        <span className="reference-hero__bottom-bloom" />
        <span className="reference-hero__vignette" />
      </div>
      <div className="reference-hero__content">
        <h1 className="reference-hero__title" id="reference-hero-title">
          <span className="reference-hero__line reference-hero__line--first">
            <span className="reference-hero__avatar">
              <img src="/assets/rafael-estudio.png" alt="" width="76" height="76" loading="eager" fetchPriority="high" />
            </span>
            <span>Uma boa oferta</span>
          </span>
          <span className="reference-hero__line reference-hero__line--fade">merece uma página</span>
          <span className="reference-hero__line reference-hero__line--last">fora do padrão.</span>
        </h1>

        <p className="reference-hero__description">
          Seu negócio tem uma proposta própria. Rafael Fonseca transforma isso em{" "}
          <strong>páginas de vendas e sites</strong> com mensagem clara, identidade e um caminho até o contato.
        </p>

        <div className="reference-hero__actions">
          <button className="reference-hero__button reference-hero__button--portfolio" type="button" disabled title="Projetos serão adicionados nas próximas seções">
            Ver portfólio <span aria-hidden="true">↗</span>
          </button>
          <a className="reference-hero__button reference-hero__button--contact" href={WhatsAppLink} target="_blank" rel="noopener noreferrer">
            Quero tirar meu projeto do papel <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="reference-hero__proof" aria-label="Informações sobre o trabalho">
          <span className="reference-hero__proof-item"><ClockIcon />6 anos no marketing</span>
          <span className="reference-hero__proof-item"><GridIcon />Páginas de vendas e sites</span>
          <span className="reference-hero__proof-item"><UsersIcon />Mais de 50 clientes</span>
        </div>
        <div className="reference-hero__bottom-ghost" aria-hidden="true">
          <span>6 anos no marketing</span>
          <span>Páginas de vendas e sites</span>
          <span>Mais de 50 clientes</span>
        </div>
      </div>
    </section>
  );
}
