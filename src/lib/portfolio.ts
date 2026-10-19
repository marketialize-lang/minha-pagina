const WHATSAPP = "5521982027149";

/** All interactions are local until the visitor explicitly opens WhatsApp. */
export function initializePortfolio() {
  const controller = new AbortController();
  const { signal } = controller;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const observers: IntersectionObserver[] = [];
  const timers: number[] = [];
  const menu = document.querySelector<HTMLButtonElement>(".menu-toggle")!;
  const nav = document.querySelector<HTMLElement>(".navlinks")!;
  const closeMenu = () => {
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Abrir menu");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
  };
  menu.addEventListener(
    "click",
    () => {
      const open = menu.getAttribute("aria-expanded") !== "true";
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      nav.classList.toggle("open", open);
      document.body.classList.toggle("menu-open", open);
    },
    { signal },
  );
  nav
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMenu, { signal }));
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") closeMenu();
    },
    { signal },
  );

  if ("IntersectionObserver" in window && !reduced.matches) {
    document.documentElement.classList.add("reveal-enabled");
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            reveal.unobserve(entry.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px 30px 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => reveal.observe(element));
    const story = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelectorAll("[data-story]")
              .forEach((element) => element.classList.remove("active"));
            entry.target.classList.add("active");
          }
        }),
      { rootMargin: "-20% 0px -35% 0px", threshold: 0 },
    );
    document.querySelectorAll("[data-story]").forEach((element) => story.observe(element));
    observers.push(reveal, story);
  }

  const track = document.querySelector<HTMLElement>(".project-track")!;
  document.querySelectorAll<HTMLButtonElement>("[data-slide]").forEach((button) =>
    button.addEventListener(
      "click",
      () => {
        track.scrollBy({
          left: Number(button.dataset["slide"]) * (track.clientWidth / 2 + 12),
          behavior: reduced.matches ? "auto" : "smooth",
        });
      },
      { signal },
    ),
  );
  document.querySelectorAll<HTMLButtonElement>(".filter").forEach((button) =>
    button.addEventListener(
      "click",
      () => {
        document.querySelectorAll<HTMLButtonElement>(".filter").forEach((other) => {
          other.classList.toggle("active", other === button);
          other.setAttribute("aria-pressed", String(other === button));
        });
        document.querySelectorAll<HTMLElement>(".project-card").forEach((card) => {
          card.hidden =
            button.dataset["category"] !== "all" &&
            button.dataset["category"] !== card.dataset["type"];
          if (!card.hidden) card.classList.add("is-visible");
        });
        track.scrollTo({ left: 0, behavior: "auto" });
      },
      { signal },
    ),
  );

  let frame: HTMLIFrameElement | null = null;
  let paused = reduced.matches;
  const splineWrap = document.querySelector<HTMLElement>(".spline-wrap")!;
  const motionButton = document.querySelector<HTMLButtonElement>(".motion-toggle")!;
  const removeSpline = () => {
    frame?.remove();
    frame = null;
  };
  const mountSpline = () => {
    if (
      frame ||
      !splineWrap.dataset["spline"] ||
      reduced.matches ||
      paused ||
      document.hidden ||
      window.innerWidth < 768 ||
      signal.aborted
    )
      return;
    frame = document.createElement("iframe");
    frame.src = splineWrap.dataset["spline"]!;
    frame.title = "Ambientação abstrata 3D";
    frame.tabIndex = -1;
    frame.setAttribute("aria-hidden", "true");
    frame.loading = "lazy";
    frame.referrerPolicy = "no-referrer";
    splineWrap.append(frame);
  };
  const applyMotion = () => {
    document.body.classList.toggle("motion-paused", paused);
    motionButton.setAttribute("aria-pressed", String(paused));
    motionButton.setAttribute("aria-label", paused ? "Retomar animações" : "Pausar animações");
    motionButton.querySelector(".motion-label")!.textContent = paused
      ? "Retomar movimento"
      : "Pausar movimento";
    motionButton.querySelector(".motion-icon")!.textContent = paused ? "▷" : "Ⅱ";
    if (paused) {
      removeSpline();
      document
        .querySelectorAll("[data-reveal]")
        .forEach((element) => element.classList.add("is-visible"));
    } else mountSpline();
  };
  motionButton.addEventListener(
    "click",
    () => {
      paused = !paused;
      applyMotion();
    },
    { signal },
  );
  reduced.addEventListener(
    "change",
    (event) => {
      paused = event.matches;
      applyMotion();
    },
    { signal },
  );
  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) removeSpline();
      else mountSpline();
    },
    { signal },
  );
  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth < 768) removeSpline();
      else mountSpline();
    },
    { signal },
  );
  timers.push(window.setTimeout(mountSpline, 1000));

  const select = document.querySelector<HTMLSelectElement>("select[name=service]")!;
  document.querySelectorAll<HTMLAnchorElement>("[data-service]").forEach((link) =>
    link.addEventListener(
      "click",
      () => {
        select.value = link.dataset["service"]!;
      },
      { signal },
    ),
  );
  const form = document.querySelector<HTMLFormElement>("#brief-form")!;
  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const idea = String(data.get("idea") || "").trim();
      if (!name || !idea) return;
      const message = `Olá, Quebre o Padrão. Meu nome é ${name}.\n\nQuero conversar sobre: ${data.get("service")}.\n\nMinha ideia:\n${idea}\n\nGostaria de entender o escopo e receber um orçamento.`;
      const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
      const result = document.querySelector<HTMLElement>(".contact-result")!;
      const output = document.querySelector<HTMLElement>("#brief-output")!;
      output.textContent = message;
      // A visible fallback also lets visitors copy the brief when a popup is blocked.
      result.hidden = false;
      const tab = window.open(url, "_blank", "noopener,noreferrer");
      if (tab) tab.opener = null;
    },
    { signal },
  );
  const toast = document.querySelector<HTMLElement>(".toast")!;
  document.querySelector<HTMLButtonElement>("#copy-brief")!.addEventListener(
    "click",
    async () => {
      const text = document.querySelector<HTMLElement>("#brief-output")!.textContent || "";
      try {
        await navigator.clipboard.writeText(text);
        toast.textContent = "Resumo copiado.";
      } catch {
        const range = document.createRange();
        range.selectNodeContents(document.querySelector("#brief-output")!);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(range);
        toast.textContent = "Selecione e copie o resumo.";
      }
      toast.hidden = false;
      timers.push(
        window.setTimeout(() => {
          toast.hidden = true;
        }, 3000),
      );
    },
    { signal },
  );

  return () => {
    controller.abort();
    observers.forEach((observer) => observer.disconnect());
    timers.forEach(window.clearTimeout);
    removeSpline();
    document.documentElement.classList.remove("reveal-enabled");
    document.body.classList.remove("motion-paused", "menu-open");
  };
}
