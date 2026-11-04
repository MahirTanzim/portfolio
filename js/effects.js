/* EFFECTS: typing intro and scroll-spy navigation. */

// 1) Typing intro in the hero
(function typeIntro() {
  const el = document.getElementById("terminal");
  if (!el || !SITE.typing || !SITE.typing.length) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) { el.textContent = SITE.typing[SITE.typing.length - 1]; return; }

  let line = 0, ch = 0;
  function tick() {
    const text = SITE.typing[line];
    el.textContent = text.slice(0, ch++);
    if (ch <= text.length) return setTimeout(tick, 70);
    if (line < SITE.typing.length - 1) {
      line++; ch = 0;
      return setTimeout(tick, 900);
    }
  }
  tick();
})();

// 2) Highlight the nav link of the section you're looking at
(function scrollSpy() {
  const links = [...document.querySelectorAll(".nav a")];
  const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const targets = [...map.keys()].map((id) => document.getElementById(id)).filter(Boolean);

  const setActive = (id) => links.forEach((a) => a.classList.toggle("active", a === map.get(id)));

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: [0, .25, .5, 1] }
  );
  targets.forEach((t) => io.observe(t));
})();
