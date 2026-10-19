/*
© Upward Creative Academy Ltda. Todos os direitos reservados.
Licença de uso nº UPW-888B-FB55-D7DC: pessoal e intransferível.
Permitido o uso em projetos próprios e de clientes.
Proibida a revenda, redistribuição ou compartilhamento como template, kit, curso ou produto.
https://app.upwardacademy.com.br/licenca
*/

  (function () {
    var RM = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    var count = 0;
    Array.prototype.forEach.call(document.querySelectorAll('.upw-sec-kinetic'), function (root) {
      if (root.dataset.upwOn) return;
      root.dataset.upwOn = '1';
      var uid = 'upw-kn-' + (++count) + '-' + Math.random().toString(36).slice(2, 7);
      function q(s) { return root.querySelector(s); }
      var stage = q('.upw-kn-stage'), title = q('.upw-kn-title');
      if (!stage || !title) return;
      var badge = q('.upw-kn-badge'), tools = q('.upw-kn-tools'), mark = q('.upw-kn-mark'), tag = q('.upw-kn-mark b');
      var cta = q('.upw-kn-cta'), mq = q('.upw-kn-mq'), field = q('.upw-kn-field'), btnMix = q('.upw-kn-shuffle'), btnPause = q('.upw-kn-pause');
      var power = parseFloat(root.getAttribute('data-forca')) || 1, pilot = root.getAttribute('data-piloto') !== 'nao';
      var still = !!(RM && RM.matches), paused = false;

      // id único para o texto em círculo do selo (o bloco pode estar 2x na mesma página)
      var arc = q('.upw-kn-arc'), tp = q('.upw-kn-badge textPath');
      if (arc && tp) { arc.id = uid + '-arc'; tp.setAttribute('href', '#' + arc.id); }

      // palavra gigante do fundo, vazada, correndo devagar
      var word = mq ? (mq.getAttribute('data-palavra') || '').trim() : '';
      if (word) {
        var layer = document.createElement('div'), track = document.createElement('div');
        layer.className = 'upw-kn-mq-l';
        track.className = 'upw-kn-mq-t';
        for (var j = 0; j < (word.length < 6 ? 6 : 4); j++) {
          var sp = document.createElement('span'); sp.textContent = word + ' / '; track.appendChild(sp);
        }
        layer.appendChild(track); mq.appendChild(layer);
      }

      // quebra o título em letras (o leitor de tela lê a frase inteira, escondida)
      var letters = [], words = [], plain = [];
      Array.prototype.forEach.call(title.querySelectorAll('.upw-kn-line'), function (line, li) {
        var parts = [], frag = document.createDocumentFragment(), w = null, idx = 0;
        plain.push(line.textContent.replace(/\s+/g, ' ').trim());
        Array.prototype.forEach.call(line.childNodes, function (nd) {
          if (nd.nodeType === 3) parts.push([nd.nodeValue, 0]);
          else if (nd.nodeType === 1) parts.push([nd.textContent, nd.tagName === 'EM' ? 1 : 0]);
        });
        parts.forEach(function (p) {
          (p[0].match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\s\S]/g) || []).forEach(function (c) {
            if (/\s/.test(c)) {
              if (w) { frag.appendChild(w); frag.appendChild(document.createTextNode(' ')); w = null; }
              return;
            }
            if (!w) { w = document.createElement('span'); w.className = 'upw-kn-w'; words.push(w); }
            var el = document.createElement('span');
            el.className = 'upw-kn-ch' + (p[1] ? ' upw-kn-em' : '');
            el.textContent = c;
            w.appendChild(el);
            letters.push({ el: el, li: li, i: idx++, cx: 0, cy: 0, x: 0, y: 0, r: 0, s: 1, h: 0, vx: 0, vy: 0, vr: 0, vs: 0, rel: 1e15, ok: false, wt: '', wh: -1, z: 0 });
          });
        });
        if (w) frag.appendChild(w);
        line.textContent = '';
        line.appendChild(frag);
        line.setAttribute('aria-hidden', 'true');
      });
      var srt = document.createElement('span');
      srt.className = 'upw-kn-sr';
      srt.textContent = plain.join(' ');
      title.appendChild(srt);
      root.classList.add('upw-js');
      if (still) root.classList.add('is-still');

      // medidas (refeitas quando a largura muda)
      var fs = 100, R = 150, bx0 = 0, bx1 = 0, by0 = 0, by1 = 0, tlx = 0, tw = 0;
      var bcx = 0, bcy = 0, ccx = 0, ccy = 0, cw = 0, chh = 0;
      var bd = { x: 0, y: 0, vx: 0, vy: 0, wt: '' }, cm = { x: 0, y: 0, vx: 0, vy: 0, wt: '' };
      function measure() {
        stage.style.setProperty('--upw-fit', '1');
        var avail = stage.clientWidth, maxR = 0;
        words.forEach(function (w) { var r = w.offsetLeft + w.offsetWidth; if (r > maxR) maxR = r; });
        if (maxR > avail + 1) stage.style.setProperty('--upw-fit', (avail / maxR * .98).toFixed(4));
        fs = parseFloat(getComputedStyle(stage).fontSize) || 100;
        R = Math.max(fs * 1.5, 130);
        bx0 = by0 = 1e9; bx1 = by1 = -1e9;
        letters.forEach(function (L) {
          L.cx = L.el.offsetLeft + L.el.offsetWidth / 2;
          L.cy = L.el.offsetTop + L.el.offsetHeight / 2;
          bx0 = Math.min(bx0, L.cx); bx1 = Math.max(bx1, L.cx); by0 = Math.min(by0, L.cy); by1 = Math.max(by1, L.cy);
        });
        var sr = stage.getBoundingClientRect(), rr = root.getBoundingClientRect();
        if (mq) mq.style.top = Math.round(sr.top - rr.top + sr.height / 2) + 'px';
        if (field) { var fd = Math.round(R * 2) + 'px'; field.style.width = field.style.height = fd; field.style.margin = '-' + Math.round(R) + 'px 0 0 -' + Math.round(R) + 'px'; }
        if (tools) { var tr = tools.getBoundingClientRect(); tlx = sr.left - tr.left; tw = tr.width; }
        if (badge) { bcx = badge.offsetLeft + badge.offsetWidth / 2; bcy = badge.offsetTop + badge.offsetHeight / 2; }
        if (cta) {
          var cr = cta.getBoundingClientRect();
          cw = cr.width; chh = cr.height; ccx = cr.left - sr.left + cw / 2 - cm.x; ccy = cr.top - sr.top + chh / 2 - cm.y;
        }
      }

      function put(L) {
        var t = 'translate(' + L.x.toFixed(1) + 'px,' + L.y.toFixed(1) + 'px) rotate(' + L.r.toFixed(2) + 'deg) scale(' + L.s.toFixed(3) + ')';
        if (t !== L.wt) { L.wt = t; L.el.style.transform = t; }
        var h = L.h < .12 ? 0 : L.h > .72 ? 1 : Math.round((L.h - .12) * 66.7) / 40, z = L.h > .25 ? 1 : 0;
        if (h !== L.wh) { L.wh = h; L.el.style.setProperty('--upw-h', h); }
        if (z !== L.z) { L.z = z; L.el.style.zIndex = z ? '2' : ''; }
      }
      function put2(el, o) {
        var t = 'translate(' + o.x.toFixed(1) + 'px,' + o.y.toFixed(1) + 'px)';
        if (t !== o.wt) { o.wt = t; el.style.transform = t; }
      }
      function spring(o, gx, gy, n, st) {
        for (var m = 0; m < n; m++) {
          o.vx += ((gx - o.x) * 170 - o.vx * 16) * st; o.x += o.vx * st;
          o.vy += ((gy - o.y) * 170 - o.vy * 16) * st; o.y += o.vy * st;
        }
        if (Math.abs(gx - o.x) + Math.abs(gy - o.y) + Math.abs(o.vx) + Math.abs(o.vy) > .05) return true;
        o.x = gx; o.y = gy; o.vx = o.vy = 0;
        return false;
      }

      // estado do ímã: mouse/dedo de verdade ou o piloto automático
      var ptr = { on: false, down: false, mouse: false, x: 0, y: 0, t: 0 };
      var fx = 0, fy = 0, amp = 0, tA = 0, lastUser = -1e9, autoUntil = 0, raf = 0, last = 0, vis = false, started = false;
      var mark0 = -1, markA = -1, fldA = -1, fldT = '', K = 190, C = 15, CI = 22;

      function tick(now) {
        raf = 0;
        var dt = (now - last) / 1000;
        last = now;
        if (!(dt > 0)) dt = .016;
        if (dt > .25) dt = .25;
        var n = Math.ceil(dt * 60 - .01), st = dt / n; // passos curtos: a mola fica estável mesmo com poucos quadros
        var sr = stage.getBoundingClientRect();
        var want = 0, tx = fx, ty = fy, near = false;
        // o ímã segue o mouse/dedo só em cima do título (parado há 2,6 s ou no botão/números: o piloto continua)
        if (ptr.on && !(ptr.mouse && now - ptr.t > 2600)) {
          var px0 = ptr.x - sr.left, py0 = ptr.y - sr.top;
          if (px0 >= 0 && py0 >= 0 && px0 <= sr.width && py0 <= sr.height) {
            var ox = Math.max(bx0 - fs * .4 - px0, 0, px0 - bx1 - fs * .4), oy = Math.max(by0 - fs * .5 - py0, 0, py0 - by1 - fs * .5);
            want = Math.max(0, 1 - Math.sqrt(ox * ox + oy * oy) / (R * .7)); // longe das letras o ímã some
            if (want > 0) { near = true; tx = px0; ty = py0; lastUser = now; autoUntil = now + 24000; }
          }
        }
        var auto = !near && pilot && !paused && now < autoUntil;
        if (auto && now - lastUser > 1500) {
          // o ímã automático "lê" o título: vai de letra em letra, ida e volta, ondulando
          tA += dt; want = .92;
          var N = letters.length, span = Math.max(1, 2 * N - 2), k = (tA * 2.8) % span, p = k < N - 1 ? k : span - k, i0 = Math.max(0, Math.min(N - 2, Math.floor(p)));
          var A = letters[i0], B = letters[i0 + 1] || A, fr = Math.min(1, p - i0);
          tx = A.cx + (B.cx - A.cx) * fr; ty = A.cy + (B.cy - A.cy) * fr + Math.sin(tA * 2.1) * fs * .3;
        }
        if (amp < .02) { fx = tx; fy = ty; }
        else { var kf = 1 - Math.exp(-dt * (near ? 18 : 6)); fx += (tx - fx) * kf; fy += (ty - fy) * kf; }
        amp += (want - amp) * (1 - Math.exp(-dt * (want > amp ? 5 : 2.6)));
        if (!want && amp < .004) amp = 0;
        var pu = fs * .11 * power, eh = 1 - Math.exp(-dt * 8), busy = amp > 0 || want > 0 || auto; // auto: inclui a espera de 1,5 s
        for (var i = 0; i < letters.length; i++) {
          var L = letters[i], gx = 0, gy = 0, gr = 0, gs = 1, gh = 0;
          if (now < L.rel) { busy = true; continue; }
          if (amp > 0) {
            var dx = L.cx - fx, dy = L.cy - fy, d2 = dx * dx + dy * dy;
            if (d2 < R * R) {
              var d = Math.sqrt(d2) || 1, f = 1 - d / R;
              f = f * f * (3 - 2 * f) * amp;
              gx = dx / d * pu * f; gy = dy / d * pu * f * .85; gr = dx / R * 12 * f * power; gs = 1 + .12 * f * power; gh = Math.min(1, Math.max(0, (f - .3) * 1.75));
            }
          }
          if (L.ok && gx === L.x && gy === L.y && gr === L.r && gs === L.s && gh === L.h) continue;
          var c = now < L.rel + 700 ? CI : C;
          for (var m = 0; m < n; m++) {
            L.vx += ((gx - L.x) * K - L.vx * c) * st; L.x += L.vx * st;
            L.vy += ((gy - L.y) * K - L.vy * c) * st; L.y += L.vy * st;
            L.vr += ((gr - L.r) * K - L.vr * c) * st; L.r += L.vr * st;
            L.vs += ((gs - L.s) * K - L.vs * c) * st; L.s += L.vs * st;
          }
          L.h += (gh - L.h) * eh;
          L.ok = !(Math.abs(gx - L.x) + Math.abs(gy - L.y) + Math.abs(L.vx) + Math.abs(L.vy) > .03 || Math.abs(gr - L.r) + Math.abs(L.vr) > .03 || Math.abs(gs - L.s) + Math.abs(L.vs) > .001 || Math.abs(gh - L.h) > .004);
          if (L.ok) { L.x = gx; L.y = gy; L.r = gr; L.s = gs; L.h = gh; L.vx = L.vy = L.vr = L.vs = 0; } else busy = true;
          put(L);
        }
        // o selo é puxado pelo ímã
        if (badge) {
          var bgx = 0, bgy = 0;
          if (amp > 0) {
            var ex = fx - bcx, ey = fy - bcy, ed = Math.sqrt(ex * ex + ey * ey) || 1, ef = Math.max(0, 1 - ed / (R * 1.8)) * amp, el = Math.min(ed, fs * .22) * ef;
            bgx = ex / ed * el; bgy = ey / ed * el;
          }
          if (spring(bd, bgx, bgy, n, st)) busy = true;
          put2(badge, bd);
        }
        // o botão é puxado pelo mouse quando ele chega perto
        if (cta) {
          var cgx = 0, cgy = 0;
          if (ptr.on && ptr.mouse) {
            var px = ptr.x - sr.left - ccx, py = ptr.y - sr.top - ccy;
            if (Math.abs(px) < cw / 2 + 50 && Math.abs(py) < chh / 2 + 36) { cgx = Math.max(-14, Math.min(14, px * .16)); cgy = Math.max(-9, Math.min(9, py * .28)); }
          }
          if (spring(cm, cgx, cgy, n, st)) busy = true;
          put2(cta, cm);
        }
        // os anéis do campo seguem o ímã e a régua marca a posição
        var a = Math.round(amp * 100) / 100;
        if (field) {
          if (a !== fldA) { fldA = a; field.style.opacity = a; }
          var ft = 'translate(' + fx.toFixed(1) + 'px,' + fy.toFixed(1) + 'px) scale(' + (.6 + a * .4).toFixed(3) + ')';
          if (a > 0 && ft !== fldT) { fldT = ft; field.style.transform = ft; }
        }
        if (mark) {
          if (a !== markA) { markA = a; mark.style.opacity = a; }
          var mx = Math.round(Math.max(0, Math.min(tw - 1, fx + tlx)));
          if (a > 0 && mx !== mark0) { mark0 = mx; mark.style.transform = 'translateX(' + mx + 'px)'; if (tag) tag.textContent = 'X ' + ('000' + mx).slice(-4); }
        }
        if (busy) raf = requestAnimationFrame(tick);
      }
      function wake() {
        if (!raf && started && vis && !still && !document.hidden) { last = performance.now(); raf = requestAnimationFrame(tick); }
      }
      function halt() { if (raf) cancelAnimationFrame(raf); raf = 0; }

      function burst(px, py) {
        if (still || !started) return;
        autoUntil = performance.now() + 24000;
        var reach = fs * 3.2;
        letters.forEach(function (L) {
          var dx = L.cx - px, dy = L.cy - py, d = Math.sqrt(dx * dx + dy * dy) || 1, g = Math.max(.25, 1 - d / reach) * power, j = .7 + Math.random() * .6;
          L.vx += dx / d * fs * 3.2 * g * j;
          L.vy += (dy / d * 3.2 * j - .9) * fs * g;
          L.vr += (Math.random() - .5) * 380 * g;
          L.vs += .55 * g;
          L.h = Math.min(1, Math.max(L.h, (g - .4) * 2.5));
          L.ok = false;
        });
        bd.vx += (bcx - px > 0 ? 1 : -1) * 65; bd.vy -= 50;
        wake();
      }

      // mouse, dedo, clique e teclado
      if (!still) {
        root.addEventListener('pointermove', function (e) {
          if (e.pointerType === 'touch' && !ptr.down) return;
          ptr.on = true; ptr.mouse = e.pointerType !== 'touch'; ptr.x = e.clientX; ptr.y = e.clientY; ptr.t = performance.now();
          wake();
        }, { passive: true });
        root.addEventListener('pointerleave', function (e) {
          if (e.pointerType !== 'touch' && ptr.on) { ptr.on = false; wake(); }
        }, { passive: true });
        stage.addEventListener('pointerdown', function (e) {
          if (e.pointerType !== 'touch') return;
          ptr.down = ptr.on = true; ptr.mouse = false; ptr.x = e.clientX; ptr.y = e.clientY; ptr.t = performance.now();
          wake();
        }, { passive: true });
        var lift = function (e) { if (e.pointerType === 'touch' && ptr.down) { ptr.down = ptr.on = false; wake(); } };
        root.addEventListener('pointerup', lift, { passive: true });
        root.addEventListener('pointercancel', lift, { passive: true });
        stage.addEventListener('click', function (e) { var r = stage.getBoundingClientRect(); burst(e.clientX - r.left, e.clientY - r.top); });
        if (btnMix) btnMix.addEventListener('click', function () { var on = amp > .2; burst(on ? fx : (bx0 + bx1) / 2, on ? fy : (by0 + by1) / 2); });
        if (btnPause) btnPause.addEventListener('click', function () {
          paused = !paused;
          btnPause.setAttribute('aria-pressed', paused ? 'true' : 'false');
          root.classList.toggle('is-paused', paused);
          var now = performance.now(); lastUser = now - 1500; autoUntil = now + 24000; wake();
        });
        document.addEventListener('visibilitychange', function () { if (document.hidden) halt(); else wake(); });
      }

      measure();
      if (!still) {
        root.classList.add('is-intro');
        letters.forEach(function (L) { L.y = fs * .55; L.r = 3; put(L); });
      }
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measure(); });
      var mPend = 0;
      if (window.ResizeObserver) {
        new ResizeObserver(function () {
          if (!mPend) mPend = requestAnimationFrame(function () { mPend = 0; measure(); wake(); });
        }).observe(root);
      }

      function start() {
        started = true;
        root.classList.add('is-in');
        if (still) return;
        var now = performance.now(), maxD = 0;
        letters.forEach(function (L) { var d = 60 + L.li * 130 + L.i * 32; L.rel = now + d; maxD = Math.max(maxD, d); });
        lastUser = now - 300; autoUntil = now + 24000; // o piloto entra logo depois da entrada
        setTimeout(function () { root.classList.remove('is-intro'); }, maxD + 700);
        wake();
      }
      // só anima quando a dobra está na tela
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (es) {
          es.forEach(function (e) {
            vis = e.isIntersecting;
            if (vis && !started && e.intersectionRatio >= .1) start();
            else if (vis) { autoUntil = Math.max(autoUntil, performance.now() + 12000); wake(); }
            else halt();
          });
        }, { threshold: [0, .1] }).observe(root);
      } else { vis = true; start(); }

      if (RM && RM.addEventListener) RM.addEventListener('change', function () {
        if (!RM.matches || still) return;
        still = true; halt();
        root.classList.add('is-still'); root.classList.remove('is-intro');
        letters.forEach(function (L) { L.el.style.transform = ''; L.el.style.removeProperty('--upw-h'); L.el.style.zIndex = ''; });
        if (field) field.style.opacity = '0';
        if (mark) mark.style.opacity = '0';
        if (badge) badge.style.transform = '';
        if (cta) cta.style.transform = '';
      });
    });
  })();
