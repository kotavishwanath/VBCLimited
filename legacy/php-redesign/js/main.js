(function () {
    'use strict';

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var body = document.body;

    /* ---------- Navigation ---------- */
    var nav = document.querySelector('[data-nav]');
    var toggle = document.querySelector('[data-nav-toggle]');

    function onScroll() {
        nav.classList.toggle('is-scrolled', window.scrollY > 24);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    function setMenu(open) {
        body.classList.toggle('nav-open', open);
        toggle.setAttribute('aria-expanded', String(open));
    }
    toggle.addEventListener('click', function () {
        setMenu(!body.classList.contains('nav-open'));
    });
    document.querySelectorAll('.nav-links a').forEach(function (link) {
        link.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') setMenu(false);
    });

    // Highlight the nav link for the section in view
    var navLinks = document.querySelectorAll('[data-nav-link]');
    var sections = Array.prototype.map.call(navLinks, function (link) {
        var hash = link.getAttribute('href').split('#')[1];
        return document.getElementById(hash);
    }).filter(Boolean);

    if (sections.length && 'IntersectionObserver' in window) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                navLinks.forEach(function (link) {
                    link.classList.toggle('is-active', link.getAttribute('href').endsWith('#' + entry.target.id));
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach(function (s) { spy.observe(s); });
    }

    /* ---------- Reveal on scroll ---------- */
    var revealEls = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window && !reduceMotion) {
        var revealer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(function (el) { revealer.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }

    /* ---------- Card spotlight ---------- */
    document.querySelectorAll('[data-spotlight]').forEach(function (card) {
        card.addEventListener('pointermove', function (e) {
            var r = card.getBoundingClientRect();
            card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
            card.style.setProperty('--my', (e.clientY - r.top) + 'px');
        });
    });

    /* ---------- Count-up stat ---------- */
    document.querySelectorAll('[data-count]').forEach(function (el) {
        if (reduceMotion || !('IntersectionObserver' in window)) return;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        el.textContent = '0' + suffix;
        var io = new IntersectionObserver(function (entries) {
            if (!entries[0].isIntersecting) return;
            io.disconnect();
            var start = performance.now();
            (function tick(now) {
                var p = Math.min((now - start) / 1600, 1);
                var eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(target * eased) + suffix;
                if (p < 1) requestAnimationFrame(tick);
            })(start);
        }, { threshold: 0.6 });
        io.observe(el);
    });

    /* ---------- Contact form: client-side validation ---------- */
    var form = document.querySelector('[data-form]');
    if (form) {
        form.addEventListener('submit', function (e) {
            var firstInvalid = null;
            form.querySelectorAll('.field input, .field textarea').forEach(function (input) {
                var valid = input.checkValidity();
                input.closest('.field').classList.toggle('is-invalid', !valid);
                if (!valid && !firstInvalid) firstInvalid = input;
            });
            if (firstInvalid) {
                e.preventDefault();
                firstInvalid.focus();
            }
        });
        form.addEventListener('input', function (e) {
            var field = e.target.closest('.field');
            if (field && e.target.checkValidity()) field.classList.remove('is-invalid');
        });
    }

    /* ---------- Hero network canvas ---------- */
    var canvas = document.querySelector('[data-network]');
    if (!canvas || reduceMotion) return;

    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var points = [];
    var mouse = { x: -9999, y: -9999 };
    var width, height, running = true;
    var LINK = 140;

    function resize() {
        var rect = canvas.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        var count = Math.round(Math.min(90, (width * height) / 16000));
        points = [];
        for (var i = 0; i < count; i++) {
            points.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 1.6 + 0.6
            });
        }
    }

    function draw() {
        if (!running) return;
        ctx.clearRect(0, 0, width, height);

        for (var i = 0; i < points.length; i++) {
            var p = points[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            for (var j = i + 1; j < points.length; j++) {
                var q = points[j];
                var dx = p.x - q.x, dy = p.y - q.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < LINK) {
                    ctx.strokeStyle = 'rgba(124,108,255,' + (0.22 * (1 - dist / LINK)) + ')';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.stroke();
                }
            }

            var mdx = p.x - mouse.x, mdy = p.y - mouse.y;
            var md = Math.sqrt(mdx * mdx + mdy * mdy);
            if (md < 180) {
                ctx.strokeStyle = 'rgba(34,211,238,' + (0.45 * (1 - md / 180)) + ')';
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }

            ctx.fillStyle = 'rgba(200,230,255,0.75)';
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        }
        requestAnimationFrame(draw);
    }

    var hero = canvas.parentElement;
    hero.addEventListener('pointermove', function (e) {
        var rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    hero.addEventListener('pointerleave', function () { mouse.x = mouse.y = -9999; });

    // Pause when hero is off-screen to save battery
    new IntersectionObserver(function (entries) {
        var visible = entries[0].isIntersecting;
        if (visible && !running) { running = true; requestAnimationFrame(draw); }
        running = visible;
    }).observe(hero);

    var resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resize, 150);
    });

    resize();
    requestAnimationFrame(draw);
})();
