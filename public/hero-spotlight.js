/*
© Upward Creative Academy Ltda. Todos os direitos reservados (Lei 9.610/98 e Lei 9.609/98).
Licença pessoal e intransferível nº UPW-4861-1CDD-EE1F.
Uso em projetos próprios e de clientes. Proibido revender, redistribuir ou compartilhar
como template, kit, curso ou produto.
https://app.upwardacademy.com.br/licenca
*/

(function () {
  var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FT = [0, .07, .13, .2, .29, .36], FV = [.7, .12, .85, .3, 1, 1]; // a luz pisca ao acender (tempo em s, força)
  function sp(s, to, k, c, dt) { s.v += ((to - s.p) * k - s.v * c) * dt; s.p += s.v * dt; } // mola
  function cl(v, a, b) { return v < a ? a : v > b ? b : v; }
  function now() { return performance.now() / 1000; }

  document.querySelectorAll('.upw-sec-reveal').forEach(function (root) {
    if (root.dataset.upwOn) return; root.dataset.upwOn = '1';
    var h1 = root.querySelector('.upw-sec-reveal__title'), stage = h1 && h1.parentNode;
    if (!h1) return;
    function $(n) { return root.querySelector('.upw-sec-reveal__' + n); }
    var pool = $('pool'), cone = $('cone'), flashEl = $('flash'), cta = $('btn'), sw = $('switch');
    var base = parseFloat(root.getAttribute('data-raio')) || 250;
    var laps = 0, maxLaps = parseInt(root.getAttribute('data-voltas'), 10); // voltas do passeio antes de a luz acender o palco
    if (isNaN(maxLaps)) maxLaps = 2;

    // camada "na luz": cópia visual do título (aria-hidden) com as palavras de data-luz
    var lit = document.createElement('div'), said = document.createElement('div');
    lit.className = 'upw-sec-reveal__type upw-sec-reveal__lit';
    lit.setAttribute('aria-hidden', 'true');
    lit.innerHTML = said.innerHTML = h1.innerHTML;
    said.querySelectorAll('.upw-sec-reveal__swap').forEach(function (s) { s.textContent = s.getAttribute('data-luz') || s.textContent; });
    [h1, lit].forEach(function (layer, n) {
      layer.querySelectorAll('.upw-sec-reveal__swap').forEach(function (s) {
        var a = document.createElement('span'), b = document.createElement('span');
        a.className = 'upw-sec-reveal__w0'; a.textContent = s.textContent;
        b.className = 'upw-sec-reveal__w1'; b.textContent = s.getAttribute('data-luz') || s.textContent;
        s.textContent = ''; s.appendChild(a); s.appendChild(b);
        if (n) b.insertAdjacentHTML('beforeend', '<svg class="upw-sec-reveal__scrib" viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path pathLength="1" d="M4 13C42 6 94 3 134 7s52 6 62 2"/></svg>');
      });
    });
    var sr = document.createElement('span'); // o leitor de tela lê também a frase da luz
    sr.className = 'upw-sec-reveal__sr'; sr.textContent = ' ' + said.textContent.replace(/\s+/g, ' ').trim();
    h1.appendChild(sr); stage.appendChild(lit);
    var swH = h1.querySelectorAll('.upw-sec-reveal__swap'), swL = lit.querySelectorAll('.upw-sec-reveal__swap');
    root.classList.add('upw-js', 'is-tour');

    var X = { p: 0, v: 0 }, Y = { p: 0, v: 0 }, R = { p: 0, v: 0 }, F = { p: 1, v: 0 }; // posição, raio e achatamento da luz
    var g = { w: 1, h: 1, hx: 0, hy: 0, hw: 1, hh: 1, r0: base, sx: 0, sy: -40 }, route = [], ready = false;
    var rg = document.createRange ? document.createRange() : null;
    var mode = 0, px = 0, py = 0, pcx = 0, pcy = 0, pdirty = false, pt = -99, touch = false, down = null; // mode 1 = segue o ponteiro
    var on = false, auto = false, hov = false, flashTo = -9, onAt = -1, inten = still ? 1 : 0;
    var step = 0, arrived = false, arrAt = 0, holdTo = 0, raf = 0, timer = 0, last = 0, seen = false, entered = false, wasLt = false, framed = -1, keep = -1, tour = true;

    function measure() {
      var rr = root.getBoundingClientRect(), hr = h1.getBoundingClientRect();
      if (!rr.width) return;
      g.w = rr.width; g.h = rr.height; g.hx = hr.left - rr.left; g.hy = hr.top - rr.top; g.hw = hr.width; g.hh = hr.height;
      g.r0 = cl(rr.width * .2, 112, base); g.sx = rr.width / 2;
      // roteiro do piloto automático: a luz para em cada palavra que muda e enquadra a palavra (elipse do tamanho dela,
      // sem vazar para a outra linha); depois passa rápido pelos trechos que não mudam e recomeça
      var plain = []; route = [];
      h1.querySelectorAll('.upw-sec-reveal__ln').forEach(function (ln) {
        var ss = ln.querySelectorAll('.upw-sec-reveal__swap'), s = ss[0], b;
        var dy = ln.getBoundingClientRect().top - hr.top - ln.offsetTop; // dy: quanto a linha ainda está deslocada pela entrada
        if (rg) {
          rg.setStart(ln, 0); if (s) rg.setEndBefore(s); else rg.setEnd(ln, ln.childNodes.length);
          b = rg.getBoundingClientRect();
          if (b.width > 40) {
            var pr = Math.min(g.r0 * .85, (b.width / 2 - 4) / 1.19); // 1.19 = 1,45 x 82%: a borda da luz para antes da palavra que muda
            plain.unshift({ x: b.left - rr.left + b.width / 2, y: b.top - dy - rr.top + b.height / 2, hold: .35, r: pr, f: Math.min(1, b.height * .72 / pr), i: -1 });
          }
        }
        [].forEach.call(ss, function (s) {
          var r = (Math.max(s.firstChild.offsetWidth, s.lastChild.offsetWidth) * .62 + 12) / .928, b = s.getBoundingClientRect(); // .928 = 1,45 x 64% (parte acesa)
          route.push({ x: b.left - rr.left + b.width / 2, y: b.top - dy - rr.top + b.height / 2, hold: 1.1, r: r, f: Math.min(1, b.height * .72 / r), i: [].indexOf.call(swH, s) });
        });
      });
      route = route.concat(plain);
      if (!route.length) route.push({ x: g.hx + g.hw / 2, y: g.hy + g.hh / 2, hold: 1, r: g.r0, f: 1, i: -1 });
      if (!ready) { ready = true; step = 0; X.p = route[0].x; Y.p = route[0].y; R.p = route[0].r; F.p = route[0].f; }
      if (still) pose(); else { if (!raf) write(); wake(); } // mudou o tamanho: a luz vai para a nova posição
    }
    function cover(x, y) { // raio que mostra o título inteiro a partir de (x, y)
      var dx = Math.max(Math.abs(x - g.hx), Math.abs(x - g.hx - g.hw)), dy = Math.max(Math.abs(y - g.hy), Math.abs(y - g.hy - g.hh));
      dx /= 1.45; return Math.sqrt(dx * dx + dy * dy) / .64 + 20; // a luz é uma elipse 1,45 vez mais larga
    }
    function frameEl(i, tr) { // i: palavra enquadrada (vira a nova na luz; a do escuro some). tr: passeio automático ligado
      if (tr !== tour) { tour = tr; root.classList.toggle('is-tour', tr); }
      if (i === framed) return;
      if (framed >= 0) { swH[framed].classList.remove('is-framed'); swL[framed].classList.remove('is-framed'); }
      if (i >= 0) { swH[i].classList.add('is-framed'); swL[i].classList.add('is-framed'); }
      framed = i;
    }
    function setOn(v, byAuto) { // byAuto: o passeio terminou e a luz acendeu sozinha
      on = v; auto = v && !!byAuto; if (!v) laps = 0;
      if (sw) sw.setAttribute('aria-pressed', v ? 'true' : 'false');
    }
    function write() {
      var r = Math.max(1, R.p * inten), x = X.p, y = Y.p, s = stage.style;
      s.setProperty('--upw-x', (x - g.hx).toFixed(1) + 'px');
      s.setProperty('--upw-y', (y - g.hy).toFixed(1) + 'px');
      s.setProperty('--upw-r', r.toFixed(1) + 'px');
      s.setProperty('--upw-f', F.p.toFixed(3));
      if (pool) {
        var q = Math.min(r * 1.2, g.w * .45) / 300;
        pool.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0) scale(' + (q * 1.45).toFixed(3) + ',' + (q * F.p).toFixed(3) + ')';
        pool.style.opacity = inten;
      }
      if (cone) {
        var dx = x - g.sx, dy = y - g.sy;
        cone.style.transform = 'translate3d(' + g.sx.toFixed(1) + 'px,' + g.sy + 'px,0) rotate(' + (Math.atan2(-dx, dy) * 57.296).toFixed(2) + 'deg) scale(' +
          cl(r / g.r0, .6, 2.2).toFixed(3) + ',' + (Math.sqrt(dx * dx + dy * dy) / 1000).toFixed(3) + ')';
        cone.style.opacity = inten;
      }
    }
    function pose() { // movimento reduzido: sem animação, só posições fixas
      var lt = on || hov, w = route[0];
      if (!w) return;
      X.p = lt ? g.hx + g.hw / 2 : mode ? px : w.x; Y.p = lt ? g.hy + g.hh / 2 : mode ? py : w.y;
      R.p = lt ? cover(X.p, Y.p) : mode ? g.r0 : w.r; F.p = lt || mode ? 1 : w.f; inten = 1; write();
      frameEl(!lt && !mode ? w.i : -1, !lt && !mode);
    }

    function frame(ms) {
      raf = 0;
      // passo da mola em pedaços de ~1/60 s: o movimento segue o relógio mesmo quando o aparelho está lento
      var t = ms / 1000, dt = last ? Math.min(t - last, .25) : .016, n = Math.ceil(dt / .017), h = dt / n; last = t;
      if (!ready) measure();
      if (!route.length) return;
      if (pdirty) { var rr = root.getBoundingClientRect(); aim(pcx - rr.left, pcy - rr.top); }
      var idle = touch ? 2.5 : 6;
      if (mode && !down && t - pt > idle) { mode = 0; arrived = false; }
      var lt = on || hov, tx, ty, tr, tf = 1, k, c;
      if (lt) wasLt = true;
      else if (wasLt) { // a luz fecha de novo: volta a enquadrar uma palavra que muda
        wasLt = false; arrived = false;
        for (var q = 0; q < route.length && route[step % route.length].i < 0; q++) step++;
        keep = route[step % route.length].i; // essa palavra já está "virada": continua assim enquanto a luz fecha nela
      }
      var w = route[step % route.length];
      if (lt) { tx = g.hx + g.hw / 2; ty = g.hy + g.hh / 2; tr = cover(tx, ty); k = 26; c = 9; }
      else if (mode) { tx = px; ty = py; tr = g.r0; k = 150; c = 22; }
      else {
        if (!arrived && Math.abs(w.x - X.p) + Math.abs(w.y - Y.p) < 14 && Math.abs(X.v) + Math.abs(Y.v) < 60) { arrived = true; arrAt = Math.max(t, onAt + .5); holdTo = arrAt + .3 + w.hold; }
        if (arrived && t > holdTo) {
          step++; arrived = false; keep = -1; w = route[step % route.length];
          if (step % route.length === 0 && maxLaps > 0 && ++laps >= maxLaps) setOn(true, true); // fim do passeio: acende tudo e para
        }
        tx = w.x; ty = w.y; k = 30; c = 9.5;
        // entre um trecho e outro a luz fecha num ponto pequeno e redondo (íris), anda, e abre no formato do próximo trecho
        var m = arrived ? 0 : cl((Math.abs(w.x - X.p) + Math.abs(w.y - Y.p)) / 180, 0, 1);
        tr = w.r * (1 - .68 * m); tf = w.f + (1 - w.f) * m;
      }
      // passeio: só quando a luz já fechou (ao fechar depois do palco aceso, a frase nova sai "por baixo" da borda da luz)
      var fl = t < flashTo, tn = !lt && !mode && !fl && (tour || R.p < tr * 1.25 + 20);
      frameEl(tn && (keep === w.i || arrived && t > arrAt + .15) ? w.i : -1, tn); // a palavra vira logo depois que a luz para nela
      if (fl) { tr = cover(X.p, Y.p); tf = 1; }
      for (var j = 0; j < n; j++) { sp(X, tx, k, c, h); sp(Y, ty, k, c, h); sp(R, tr, fl ? 260 : 80, fl ? 30 : 17, h); sp(F, tf, 45, 13, h); }
      var e = t - onAt, i = 0;
      while (i < FT.length - 1 && e >= FT[i + 1]) i++;
      inten = e < 0 ? 0 : FV[i];
      write();
      // dorme quando tudo parou (acorda no próximo movimento, troca de estado ou fim da pausa)
      var busy = e < .5 || t < flashTo + .4 || (tour && arrived && w.i >= 0 && framed !== w.i) || Math.abs(X.v) + Math.abs(Y.v) + Math.abs(R.v) + 99 * Math.abs(F.v) > 3 || Math.abs(tx - X.p) + Math.abs(ty - Y.p) + Math.abs(tr - R.p) + 99 * Math.abs(tf - F.p) > 1.5;
      if (busy) { raf = requestAnimationFrame(frame); return; }
      last = 0;
      var wait = lt ? -1 : mode ? pt + idle - t : arrived ? holdTo - t : 0;
      if (wait >= 0) timer = setTimeout(wake, wait * 1000 + 30);
    }
    function wake() {
      clearTimeout(timer);
      if (!raf && !still && seen && entered && !document.hidden) raf = requestAnimationFrame(frame);
    }
    function halt() { cancelAnimationFrame(raf); clearTimeout(timer); raf = 0; last = 0; }

    function point(e) { pcx = e.clientX; pcy = e.clientY; pdirty = true; pt = now(); touch = e.pointerType !== 'mouse'; }
    // a luz segue o ponteiro só perto do título; longe dele (texto, botões, cantos) o piloto automático continua
    function aim(x, y) {
      var z = (down && down.z) || (x > g.hx - 120 && x < g.hx + g.hw + 120 && y > g.hy - 110 && y < g.hy + g.hh + 110);
      px = x; py = y; pdirty = false;
      if (z && auto) setOn(false); // a luz tinha acendido sozinha: o ponteiro no título volta a guiar o holofote
      if (z && !mode) { mode = 1; arrived = false; } else if (!z && mode) { mode = 0; arrived = false; }
      return z;
    }
    function place() { var rr = root.getBoundingClientRect(); aim(pcx - rr.left, pcy - rr.top); pose(); }
    function flash(e) {
      if (still) return;
      var rr = root.getBoundingClientRect();
      flashTo = now() + .75;
      if (flashEl && flashEl.animate) {
        flashEl.style.setProperty('--upw-fx', (e.clientX - rr.left) + 'px'); flashEl.style.setProperty('--upw-fy', (e.clientY - rr.top) + 'px');
        flashEl.animate([{ opacity: 0 }, { opacity: 1, offset: .14 }, { opacity: 0 }], { duration: 1100, easing: 'ease-out' });
      }
    }
    function sync() { if (still) pose(); else wake(); }

    // mouse: a luz segue; dedo: arrastar de lado no título (a rolagem da página continua livre)
    root.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch' && !down) return;
      if (e.pointerType === 'mouse' && e.movementX === 0 && e.movementY === 0) return;
      point(e); if (still) place(); else wake();
    }, { passive: true });
    root.addEventListener('pointerdown', function (e) {
      if (e.target.closest && e.target.closest('a, button')) return;
      var rr = root.getBoundingClientRect();
      down = { x: e.clientX, y: e.clientY, t: now(), z: false }; point(e); down.z = aim(e.clientX - rr.left, e.clientY - rr.top);
      if (e.pointerType === 'mouse' && e.button === 0) flash(e); // clique: flash na hora; toque: só ao soltar sem arrastar
      if (still) place(); else wake();
    }, { passive: true });
    function up(e) {
      if (down && e.type === 'pointerup' && e.pointerType !== 'mouse' && Math.abs(e.clientX - down.x) + Math.abs(e.clientY - down.y) < 12 && now() - down.t < .5) flash(e);
      down = null; pt = now(); wake();
    }
    root.addEventListener('pointerup', up, { passive: true });
    root.addEventListener('pointercancel', up, { passive: true });
    root.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') { pt = now() - 5.4; wake(); } }, { passive: true });

    // passar o mouse (ou o foco do teclado) no botão principal acende o palco
    if (cta) {
      cta.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') { hov = true; sync(); } });
      cta.addEventListener('pointerleave', function () { if (hov) { hov = false; sync(); } });
      cta.addEventListener('focus', function () { var v = true; try { v = cta.matches(':focus-visible'); } catch (x) {} if (v) { hov = true; sync(); } });
      cta.addEventListener('blur', function () { if (!cta.matches(':hover')) { hov = false; sync(); } });
    }
    if (sw) sw.addEventListener('click', function () { setOn(!on); sync(); });

    function enter() {
      if (entered) return;
      entered = true; root.classList.add('is-in');
      onAt = still ? -9 : now() + .5; // as linhas sobem no escuro e só então a luz acende
      if (!still) setTimeout(function () { measure(); }, 1400); // posições finais depois da entrada
      wake();
    }
    if (window.ResizeObserver) { var ro = new ResizeObserver(function () { measure(); }); ro.observe(root); ro.observe(h1); }
    else { measure(); window.addEventListener('resize', measure); }
    if (window.IntersectionObserver) {
      new IntersectionObserver(function (en) {
        // olha todas as entradas: num aparelho lento elas chegam juntas (ex.: "apareceu" e "saiu" no mesmo aviso)
        for (var i = 0; i < en.length; i++) if (en[i].isIntersecting && en[i].intersectionRatio > .1) enter();
        var vis = en[en.length - 1].isIntersecting;
        if (vis && !seen && auto) setOn(false); // voltou para a tela: o passeio recomeça
        seen = vis; root.classList.toggle('is-off', !seen);
        if (seen) wake(); else halt();
      }, { threshold: [0, .15] }).observe(root);
    } else { seen = true; enter(); }
    document.addEventListener('visibilitychange', function () { if (document.hidden) halt(); else wake(); });
  });
})();
