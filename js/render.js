/* RENDER: turns the data in data.js into HTML.
   You normally never need to edit this file. */

// Escape text so special characters in data.js can't break the page
const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const $ = (id) => document.getElementById(id);

const NAV = [
  { id: "home", icon: "⌂", label: "Home" },
  { id: "about", icon: "♟", label: "About" },
  { id: "projects", icon: "⌘", label: "Projects" },
  { id: "skills", icon: "⚙", label: "Skills" },
  { id: "experience", icon: "▣", label: "Experience" },
  { id: "contact", icon: "✉", label: "Contact" },
];

function renderTopbar() {
  $("topbar").innerHTML = `
    <div class="lights" aria-hidden="true"><i class="light red"></i><i class="light yellow"></i><i class="light green"></i></div>
    <a class="brand" href="#home">${esc(SITE.name)} <span>~</span> Portfolio</a>
    <div class="top-tag">&lt; Build * Learn * Grow &gt;</div>`;
}

function renderSidebar() {
  $("sidebar").innerHTML = `
    <div class="profile">
      <div class="pixel-logo" role="img" aria-label="${esc(SITE.initials)} logo">${esc(SITE.initials)}</div>
      <div><h2>${esc(SITE.name)}</h2><p>${esc(SITE.role)}_</p></div>
    </div>
    <nav class="nav" aria-label="Main navigation">
      ${NAV.map((n, i) => `<a href="#${n.id}"${i === 0 ? ' class="active"' : ""}><span class="ico" aria-hidden="true">${n.icon}</span> ${n.label}</a>`).join("")}
    </nav>
    <div class="side-note">Code today.<br>Build tomorrow.</div>`;
}

function renderHero() {
  $("home").innerHTML = `
    <div class="hero-copy">
      <div class="eyebrow">${esc(SITE.eyebrow)}</div>
      <h1>Hello, I'm <span>${esc(SITE.name)}!</span></h1>
      <div class="terminal" id="terminal" aria-hidden="true"></div>
      <p>${esc(SITE.intro)}</p>
      <div class="actions">
        <a class="btn" href="#projects">View My Projects <span aria-hidden="true">→</span></a>
        <a class="btn secondary" href="#contact">Contact Me</a>
        ${SITE.resume ? `<a class="btn secondary" href="${esc(SITE.resume)}" download>Resume</a>` : ""}
      </div>
    </div>
    <div class="scene" role="img" aria-label="Pixel illustration of a developer at a desk below a moonlit city">
      <div class="stars"></div><div class="moon"></div><div class="city"></div>
      <div class="monitor left"></div><div class="monitor right"></div>
      <div class="desk"></div><div class="plant"></div><div class="person"></div><div class="mug"></div>
    </div>`;
}

function renderAbout() {
  $("about").innerHTML = `
    <h2><span class="mark">▣</span>About Me</h2>
    <p>${esc(SITE.about)}</p>
    <div class="facts">
      ${SITE.facts.map((f) => `<div><span aria-hidden="true" style="margin:0">${f.icon}</span> <span>${esc(f.text)}</span></div>`).join("")}
    </div>`;
}

function bar(level) {
  const on = "█".repeat(level);
  const off = "░".repeat(10 - level);
  return `<span class="bar" aria-hidden="true">${on}<span class="off">${off}</span></span>`;
}

function renderSkills() {
  $("skills").innerHTML = `
    <h2><span class="mark">★</span>Skills</h2>
    <div class="skill-groups">
      ${SKILLS.map((g) => `
        <div class="skill-group">
          <h3>${esc(g.group)}</h3>
          ${g.items.map((s) => `<div class="skill-row"><span>${esc(s.name)}</span>${bar(s.level)}</div>`).join("")}
        </div>`).join("")}
    </div>`;
}

function renderProjects() {
  $("projects").innerHTML = `
    <h2><span class="mark">▶</span>Featured Projects</h2>
    <div class="project-grid">
      ${PROJECTS.map((p) => `
        <article class="project">
          <div class="project-art" aria-hidden="true">${esc(p.icon)}</div>
          <div>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.description)}</p>
            <div class="tags">${p.stack.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
            <div class="links">
              ${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">→ Code</a>` : ""}
              ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener noreferrer">→ Live demo</a>` : ""}
            </div>
          </div>
        </article>`).join("")}
    </div>`;
}

function renderExperience() {
  $("experience").innerHTML = `
    <h2><span class="mark">▣</span>Experience</h2>
    ${EXPERIENCE.map((j) => `
      <div class="job">
        <div class="job-head"><strong>${esc(j.role)} · ${esc(j.org)}</strong><span class="period">${esc(j.period)}</span></div>
        <ul>${j.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
      </div>`).join("")}`;
}

function renderFooter() {
  $("contact").innerHTML = `
    <div>› ${esc(SITE.footerLine)} <span class="cursor" aria-hidden="true">█</span></div>
    <div class="socials">
      <a href="${esc(SITE.github)}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
      <a href="${esc(SITE.linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
      <a href="mailto:${esc(SITE.email)}" aria-label="Email">${esc(SITE.email)}</a>
    </div>`;
  $("smallprint").textContent = `© ${new Date().getFullYear()} ${SITE.name} // INSERT COFFEE, COMMIT CODE.`;
}

document.title = `${SITE.name} — Portfolio`;
renderTopbar();
renderSidebar();
renderHero();
renderAbout();
renderSkills();
renderProjects();
renderExperience();
renderFooter();
