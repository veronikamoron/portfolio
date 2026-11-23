/**
 * VERONIKA MORON — BLACK & WHITE SCIENTIFIC MONOGRAPH ENGINE
 * Zero-dependency Vanilla JS for instant GitHub Pages deployment.
 */

(function () {
  const DATA = window.PORTFOLIO_DATA;
  if (!DATA) return;

  /* ---------- Bespoke Domain-Accurate SVG Visuals per Project ---------- */
  const VISUALS = {
    connectome: `<svg viewBox="0 0 220 50" class="card-visual" fill="none">
      <line x1="22" y1="25" x2="78" y2="10" stroke="#FFFFFF" stroke-opacity="0.32"/>
      <line x1="22" y1="25" x2="78" y2="40" stroke="#FFFFFF" stroke-opacity="0.32"/>
      <line x1="78" y1="10" x2="146" y2="25" stroke="#E843FF" stroke-width="1.4"/>
      <line x1="78" y1="40" x2="146" y2="25" stroke="#34D399" stroke-width="1.4"/>
      <line x1="146" y1="25" x2="198" y2="14" stroke="#FACC15" stroke-width="1.4"/>
      <circle cx="22" cy="25" r="3.5" fill="#FFFFFF"/><circle cx="78" cy="10" r="3.8" fill="#E843FF"/>
      <circle cx="78" cy="40" r="3.8" fill="#34D399"/><circle cx="146" cy="25" r="4.2" fill="#FFFFFF"/>
      <circle cx="198" cy="14" r="3.5" fill="#FACC15"/>
    </svg>`,
    consulting: `<svg viewBox="0 0 220 50" class="card-visual" fill="none">
      <rect x="6" y="12" width="46" height="26" rx="3" stroke="#FFFFFF" stroke-opacity="0.4"/>
      <text x="29" y="28" fill="#8E8E95" font-family="monospace" font-size="7" text-anchor="middle">INPUT</text>
      <line x1="52" y1="25" x2="76" y2="25" stroke="#FACC15" stroke-width="1.3"/>
      <rect x="76" y="8" width="66" height="34" rx="3" stroke="#FACC15" stroke-width="1.3"/>
      <text x="109" y="23" fill="#FACC15" font-family="monospace" font-size="7" text-anchor="middle">PROMPT</text>
      <text x="109" y="34" fill="#FFFFFF" font-family="monospace" font-size="7" text-anchor="middle">AGENT</text>
      <line x1="142" y1="25" x2="166" y2="16" stroke="#34D399" stroke-width="1.2"/>
      <line x1="142" y1="25" x2="166" y2="34" stroke="#E843FF" stroke-width="1.2"/>
      <rect x="166" y="8" width="48" height="14" rx="2" stroke="#34D399" stroke-opacity="0.8"/>
      <rect x="166" y="28" width="48" height="14" rx="2" stroke="#E843FF" stroke-opacity="0.8"/>
      <text x="190" y="17.5" fill="#34D399" font-family="monospace" font-size="6.5" text-anchor="middle">PLAN</text>
      <text x="190" y="37.5" fill="#E843FF" font-family="monospace" font-size="6.5" text-anchor="middle">SPEC</text>
    </svg>`,
    tables: `<svg viewBox="0 0 220 50" class="card-visual" fill="none">
      <rect x="6" y="7" width="52" height="15" stroke="#FFFFFF" stroke-opacity="0.35"/>
      <line x1="24" y1="7" x2="24" y2="22" stroke="#FFFFFF" stroke-opacity="0.2"/>
      <line x1="42" y1="7" x2="42" y2="22" stroke="#FFFFFF" stroke-opacity="0.2"/>
      <rect x="6" y="28" width="52" height="15" stroke="#FFFFFF" stroke-opacity="0.35"/>
      <line x1="24" y1="28" x2="24" y2="43" stroke="#FFFFFF" stroke-opacity="0.2"/>
      <line x1="42" y1="28" x2="42" y2="43" stroke="#FFFFFF" stroke-opacity="0.2"/>
      <path d="M58 14 L84 25 L58 36" stroke="#E843FF" stroke-width="1.2"/>
      <line x1="84" y1="25" x2="112" y2="25" stroke="#34D399" stroke-width="1.4"/>
      <rect x="112" y="10" width="98" height="30" stroke="#34D399" stroke-width="1.3"/>
      <line x1="112" y1="20" x2="210" y2="20" stroke="#34D399" stroke-opacity="0.4"/>
      <line x1="112" y1="30" x2="210" y2="30" stroke="#34D399" stroke-opacity="0.25"/>
      <line x1="145" y1="10" x2="145" y2="40" stroke="#34D399" stroke-opacity="0.3"/>
      <text x="161" y="17" fill="#34D399" font-family="monospace" font-size="6.5" text-anchor="middle">60K+ CLEAN ✓</text>
    </svg>`,
    secondBrain: `<svg viewBox="0 0 220 50" class="card-visual" fill="none">
      <rect x="10" y="9" width="24" height="32" rx="4" stroke="#FFFFFF" stroke-opacity="0.7"/>
      <line x1="18" y1="36" x2="26" y2="36" stroke="#FFFFFF" stroke-opacity="0.5"/>
      <path d="M34 25 L78 25" stroke="#E843FF" stroke-dasharray="3 2" stroke-width="1.3"/>
      <circle cx="96" cy="25" r="14" stroke="#E843FF" stroke-width="1.4"/>
      <text x="96" y="27.5" fill="#E843FF" font-family="monospace" font-size="7" text-anchor="middle">AI</text>
      <line x1="110" y1="25" x2="144" y2="14" stroke="#34D399" stroke-width="1.2"/>
      <line x1="110" y1="25" x2="144" y2="25" stroke="#FACC15" stroke-width="1.2"/>
      <line x1="110" y1="25" x2="144" y2="36" stroke="#FFFFFF" stroke-opacity="0.5"/>
      <rect x="144" y="8" width="66" height="10" rx="1.5" stroke="#34D399" stroke-opacity="0.8"/>
      <rect x="144" y="20" width="66" height="10" rx="1.5" stroke="#FACC15" stroke-opacity="0.8"/>
      <rect x="144" y="32" width="66" height="10" rx="1.5" stroke="#FFFFFF" stroke-opacity="0.4"/>
      <text x="177" y="15.5" fill="#34D399" font-family="monospace" font-size="6" text-anchor="middle">NOTION DB</text>
      <text x="177" y="27.5" fill="#FACC15" font-family="monospace" font-size="6" text-anchor="middle">AGENTS</text>
    </svg>`,
    npcGame: `<svg viewBox="0 0 220 50" class="card-visual" fill="none">
      <rect x="6" y="4" width="208" height="42" stroke="#FFFFFF" stroke-opacity="0.16" stroke-dasharray="2 3"/>
      <rect x="28" y="22" width="14" height="14" fill="#34D399"/>
      <rect x="31" y="25" width="3" height="3" fill="#050506"/><rect x="36" y="25" width="3" height="3" fill="#050506"/>
      <rect x="46" y="10" width="34" height="13" rx="2" stroke="#34D399"/>
      <text x="63" y="19" fill="#34D399" font-family="monospace" font-size="7" text-anchor="middle">?! ...</text>
      <path d="M84 26 L136 26" stroke="#FACC15" stroke-dasharray="3 3"/>
      <rect x="140" y="10" width="34" height="13" rx="2" stroke="#E843FF"/>
      <text x="157" y="19" fill="#E843FF" font-family="monospace" font-size="7" text-anchor="middle">[ACT]</text>
      <rect x="178" y="22" width="14" height="14" fill="#E843FF"/>
      <rect x="181" y="25" width="3" height="3" fill="#050506"/><rect x="186" y="25" width="3" height="3" fill="#050506"/>
    </svg>`,
    ukfAgent: `<svg viewBox="0 0 220 50" class="card-visual" fill="none">
      <rect x="6" y="10" width="52" height="30" rx="3" stroke="#FFFFFF" stroke-opacity="0.45" stroke-dasharray="2 2"/>
      <text x="32" y="23" fill="#FFFFFF" font-family="monospace" font-size="6.5" text-anchor="middle">WEB /</text>
      <text x="32" y="33" fill="#34D399" font-family="monospace" font-size="6.5" text-anchor="middle">RAG</text>
      <path d="M58 25 L82 25" stroke="#34D399" stroke-dasharray="3 2" stroke-width="1.3"/>
      <rect x="82" y="8" width="56" height="34" rx="3" stroke="#FACC15" stroke-width="1.3"/>
      <text x="110" y="23" fill="#FACC15" font-family="monospace" font-size="7" text-anchor="middle">AI</text>
      <text x="110" y="34" fill="#FFFFFF" font-family="monospace" font-size="7" text-anchor="middle">AGENT</text>
      <path d="M138 25 L162 25" stroke="#E843FF" stroke-dasharray="3 2" stroke-width="1.3"/>
      <rect x="162" y="10" width="52" height="30" rx="3" stroke="#E843FF" stroke-opacity="0.85"/>
      <text x="188" y="23" fill="#E843FF" font-family="monospace" font-size="6.5" text-anchor="middle">TICKET</text>
      <text x="188" y="33" fill="#8E8E95" font-family="monospace" font-size="6.5" text-anchor="middle">SYSTEM</text>
    </svg>`
  };

  function renderMediaInto(container, imgSrc, label, sublabel, hideWhenMissing) {
    container.innerHTML = "";
    const showFallback = () => {
      container.innerHTML = "";
      if (hideWhenMissing) {
        container.style.display = "none";
        return;
      }
      container.style.display = "";
      const fb = document.createElement("div");
      fb.innerHTML = `
        <div class="font-serif" style="font-size:1.5rem;color:var(--yellow);margin-bottom:4px;">${label}</div>
        <div class="font-mono" style="font-size:10px;color:var(--muted);">${sublabel}</div>
      `;
      container.appendChild(fb);
    };

    if (!imgSrc) {
      showFallback();
      return;
    }

    container.style.display = "";
    const img = document.createElement("img");
    img.alt = label;
    img.loading = "lazy";
    img.onerror = showFallback;
    img.src = imgSrc;
    container.appendChild(img);
  }

  /* ---------- 1. Profile, About, Contact & Connect Modal ---------- */
  const p = DATA.profile;
  document.getElementById("heroEyebrow").textContent = p.roleEyebrow;
  document.getElementById("heroHeadline").textContent = p.heroHeadline;
  document.getElementById("heroSubline").textContent = p.heroSubline;

  renderMediaInto(
    document.getElementById("portraitContainer"),
    p.portrait,
    "VERONIKA MORON",
    "Drop photo at ./assets/portrait.jpg",
    false
  );
  document.getElementById("portraitCapLeft").textContent = p.portraitCaptionLeft;
  document.getElementById("portraitCapRight").textContent = p.portraitCaptionRight;
  document.getElementById("aboutHeading").textContent = p.aboutHeading;

  const aboutParas = document.getElementById("aboutParagraphs");
  p.aboutParagraphs.forEach((html) => {
    const el = document.createElement("p");
    el.innerHTML = html;
    aboutParas.appendChild(el);
  });

  const princRow = document.getElementById("principlesRow");
  princRow.innerHTML = `<span style="color:var(--muted);">PRINCIPLES //</span>` +
    p.principles.map((pr) => `<span class="principle-chip">${pr}</span>`).join("");

  document.getElementById("exploringLabel").textContent = p.exploringLabel;
  document.getElementById("currentFocus").textContent = p.exploringText;
  document.getElementById("aboutLinkedin").href = p.linkedin;
  document.getElementById("aboutGithub").href = p.github;
  document.getElementById("projectsGithub").href = p.github;

  const capGrid = document.getElementById("capabilitiesGrid");
  if (capGrid && p.capabilities) {
    p.capabilities.forEach((col) => {
      const box = document.createElement("div");
      box.className = "cap-col";
      box.innerHTML = `
        <h3 class="cap-heading" style="color:${col.accentColor};">${col.heading}</h3>
        <div class="cap-list">
          ${col.items
            .map(
              (it) => `
              <div>
                <p class="cap-item-title">${it.title}</p>
                <p class="cap-item-desc">${it.desc}</p>
              </div>`
            )
            .join("")}
        </div>
      `;
      capGrid.appendChild(box);
    });
  }

  document.getElementById("contactEmail").textContent = p.email;
  document.getElementById("contactEmail").href = `mailto:${p.email}`;
  document.getElementById("contactLinkedin").href = p.linkedin;
  document.getElementById("contactGithub").href = p.github;

  document.getElementById("connectEmailText").textContent = p.email;
  document.getElementById("connectMailto").href = `mailto:${p.email}`;
  document.getElementById("connectLinkedin").href = p.linkedin;
  document.getElementById("connectGithub").href = p.github;

  /* ---------- 2. Projects & Lab-Report Modal ---------- */
  const rail = document.getElementById("hScrollRail");
  const projectDialog = document.getElementById("projectDialog");

  function openProjectReport(proj) {
    document.getElementById("projModalFig").textContent = `${proj.fig} · ${proj.status}`;
    document.getElementById("projModalTitle").textContent = proj.title;

    renderMediaInto(
      document.getElementById("projModalMedia"),
      proj.image,
      proj.title,
      "",
      true
    );

    document.getElementById("projProblem").textContent = proj.report.problem;
    document.getElementById("projApproach").textContent = proj.report.approach;
    document.getElementById("projOutcome").textContent = proj.report.outcome;

    const tagsWrap = document.getElementById("projModalTags");
    tagsWrap.innerHTML = proj.tags.map((tag) => `<span class="tag-chip">${tag}</span>`).join("");

    const linksWrap = document.getElementById("projModalLinks");
    linksWrap.innerHTML = "";
    if (proj.links && proj.links.length > 0) {
      proj.links.forEach((l, i) => {
        const a = document.createElement("a");
        a.href = l.url;
        a.target = "_blank";
        a.rel = "noreferrer";
        a.className = i === 0 ? "pill-btn pill-btn-solid" : "pill-btn";
        a.textContent = l.label;
        linksWrap.appendChild(a);
      });
    } else {
      const note = document.createElement("span");
      note.className = "font-mono";
      note.style.cssText = "font-size:11px;color:var(--muted);";
      note.textContent = `STATUS // ${proj.status.toUpperCase()}`;
      linksWrap.appendChild(note);
    }

    projectDialog.showModal();
  }

  DATA.projects.forEach((proj) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `project-card${proj.featured ? " featured" : ""}${proj.inExploration ? " exploration" : ""}`;
    btn.innerHTML = `
      <div>
        <p class="card-fig">${proj.fig}</p>
        ${VISUALS[proj.visual] || ""}
        <h3 class="card-title">${proj.title}</h3>
        <p class="card-desc">${proj.shortDesc}</p>
      </div>
      <div class="card-footer">
        <span class="card-tags">${proj.tags.slice(0, 3).join(" · ")}</span>
        <span class="card-cta">Lab Report ↗</span>
      </div>
    `;
    btn.addEventListener("click", () => openProjectReport(proj));
    rail.appendChild(btn);
  });

  /* ---------- 3. Lightbox Helper ---------- */
  const lbDialog = document.getElementById("lightboxDialog");
  function openLightbox({ eyebrow, title, image, caption, meta, verifyUrl, lightBg }) {
    document.getElementById("lbEyebrow").textContent = eyebrow;
    document.getElementById("lbTitle").textContent = title;
    const media = document.getElementById("lbMedia");
    media.classList.toggle("light-bg", Boolean(lightBg));
    renderMediaInto(media, image, title, image ? `Drop image at ${image}` : "", !image);
    document.getElementById("lbCaption").textContent = caption;
    document.getElementById("lbMeta").textContent = meta || "";

    const lbLink = document.getElementById("lbLink");
    if (verifyUrl) {
      lbLink.href = verifyUrl;
      lbLink.style.display = "inline-flex";
    } else {
      lbLink.style.display = "none";
    }
    lbDialog.showModal();
  }

  /* ---------- 4. Curated Research, Paper Authors & Academic Theses ---------- */
  const pub = DATA.publication;
  document.getElementById("pubIntro").innerHTML = `
    <p class="section-eyebrow">02 / ${pub.eyebrow}</p>
    <h2 class="section-title">${pub.title}</h2>
    <p class="pub-full-title">Co-authored in <em>Current Biology</em> (2026): <em>${pub.fullTitle}</em></p>
    ${pub.authors ? `<p class="pub-authors">${pub.authors}</p>` : ""}
    <div class="pub-actions">
      <a href="${pub.sciencedirectUrl}" target="_blank" rel="noreferrer" class="pill-btn pill-btn-solid">Read on ScienceDirect ↗</a>
      <a href="${pub.doiUrl}" target="_blank" rel="noreferrer" class="pill-btn font-mono" style="font-size:12px;">${pub.doiLabel} ↗</a>
    </div>
  `;

  const specGrid = document.getElementById("curatedSpecimens");
  pub.figures.forEach((f, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pub-fig-card";
    const mediaClass = f.darkSurface ? (idx === 1 ? "dark-plot" : "dark-bg") : "light-bg";
    btn.innerHTML = `
      <div class="pub-fig-media ${mediaClass}">
        <img src="${f.image}" alt="${f.title}" loading="lazy" />
      </div>
      <div>
        <div class="pub-fig-meta">
          <span style="color:${f.accentColor};">${f.fig}</span>
          <span style="color:var(--muted);">INSPECT ↗</span>
        </div>
        <h3 class="pub-fig-title">${f.title}</h3>
        <p class="pub-fig-cap">${f.caption}</p>
      </div>
    `;
    btn.addEventListener("click", () =>
      openLightbox({
        eyebrow: f.fig,
        title: f.title,
        image: f.image,
        caption: f.caption,
        meta: f.meta || "2025 · SIGRIST LAB · IN COLLABORATION WITH DR. CHENGJI PIAO",
        lightBg: !f.darkSurface
      })
    );
    specGrid.appendChild(btn);
  });

  const thesesGrid = document.getElementById("thesesGrid");
  if (thesesGrid && pub.theses) {
    pub.theses.forEach((th) => {
      const card = document.createElement("article");
      card.className = "thesis-card";
      card.innerHTML = `
        <p class="thesis-badge" style="color:${th.accentColor};">${th.badge}</p>
        <div class="thesis-topics">
          ${th.topics.map((tp) => `<span class="thesis-topic-chip">${tp}</span>`).join("")}
        </div>
        <h3 class="thesis-title">${th.title}</h3>
        <p class="thesis-summary">${th.summary}</p>
      `;
      thesesGrid.appendChild(card);
    });
  }

  /* ---------- 5. Experience & Education ---------- */
  const expList = document.getElementById("experienceList");
  DATA.experience.forEach((item) => {
    const row = document.createElement("article");
    row.className = "exp-row";
    row.innerHTML = `
      <div>
        <h3 class="exp-role">${item.role}</h3>
        <p class="exp-org">${item.org}</p>
        <p class="exp-period">${item.period}</p>
      </div>
      <div>
        <p class="exp-summary">${item.summary}</p>
        <p class="exp-skills">SKILLS // ${item.skills}</p>
      </div>
    `;
    expList.appendChild(row);
  });

  const eduGrid = document.getElementById("educationGrid");
  DATA.education.forEach((edu) => {
    const card = document.createElement("div");
    card.className = "edu-card";
    card.innerHTML = `
      <p class="edu-badge">${edu.badge}</p>
      <p class="edu-school">${edu.school}</p>
      <p class="edu-details">${edu.details}</p>
    `;
    eduGrid.appendChild(card);
  });

  /* ---------- 6. Field Notes ---------- */
  const fieldRail = document.getElementById("fieldNotesRail");
  DATA.fieldNotes.forEach((note) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "field-card";
    btn.innerHTML = `
      <div class="field-media"></div>
      <div class="field-meta">
        <span style="color:${note.accentColor};">${note.tag}</span>
        <span style="color:var(--muted);">${note.coord}</span>
      </div>
      <h3 class="field-title">${note.title}</h3>
      <p class="field-caption">${note.caption}</p>
    `;
    renderMediaInto(
      btn.querySelector(".field-media"),
      note.image,
      note.title,
      note.coord,
      false
    );
    btn.addEventListener("click", () =>
      openLightbox({
        eyebrow: `${note.tag} · ${note.coord}`,
        title: note.title,
        image: note.image,
        caption: note.caption,
        meta: "FIELD NOTE // PERSONAL ARCHIVE"
      })
    );
    fieldRail.appendChild(btn);
  });

  document.getElementById("railPrev").addEventListener("click", () => fieldRail.scrollBy({ left: -360, behavior: "smooth" }));
  document.getElementById("railNext").addEventListener("click", () => fieldRail.scrollBy({ left: 360, behavior: "smooth" }));

  /* ---------- 7. Certificates ---------- */
  const certGrid = document.getElementById("certGrid");
  DATA.certificates.forEach((cert) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cert-card";
    btn.innerHTML = `
      <div class="cert-top">
        <span>${cert.issuer} // ${cert.date}</span>
        <span>Inspect ↗</span>
      </div>
      <h3 class="cert-title">${cert.title}</h3>
      <p class="cert-id">Credential ID: ${cert.credentialId}</p>
    `;
    btn.addEventListener("click", () =>
      openLightbox({
        eyebrow: `${cert.issuer} // ${cert.date}`,
        title: cert.title,
        image: cert.image,
        caption: `Verified skills: ${cert.skills}`,
        meta: `ID: ${cert.credentialId}`,
        verifyUrl: cert.verifyUrl
      })
    );
    certGrid.appendChild(btn);
  });

  /* ---------- 8. Modals & Copy Email ---------- */
  const connectDialog = document.getElementById("connectDialog");
  document.querySelectorAll(".open-connect").forEach((el) => el.addEventListener("click", () => connectDialog.showModal()));
  document.querySelectorAll("dialog.modal").forEach((dlg) => {
    dlg.querySelector("[data-close]").addEventListener("click", () => dlg.close());
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  });

  const copyStatus = document.getElementById("copyEmailStatus");
  document.getElementById("copyEmailBtn").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(p.email);
      copyStatus.textContent = "COPIED ✓";
      setTimeout(() => (copyStatus.textContent = "COPY"), 2000);
    } catch {
      window.location.href = `mailto:${p.email}`;
    }
  });

  /* ---------- 9. Live Recording Coordinates ---------- */
  const liveCoords = document.getElementById("liveCoords");
  window.addEventListener("mousemove", (e) => {
    if (!liveCoords) return;
    liveCoords.textContent = `REC X: ${String(Math.round(e.clientX)).padStart(4, "0")} · Y: ${String(Math.round(e.clientY)).padStart(4, "0")}`;
  }, { passive: true });

  /* ---------- 10. Vintage Benchtop Oscilloscope (Real Action Potentials + Linear Regression) ---------- */
  const channels = DATA.channels;
  let chIndex = 0, running = true, t = 0, manualStim = 0, mouse = { x: 0.5, y: 0.5 };
  const scopeScreen = document.getElementById("scopeScreen");
  const canvas = document.getElementById("scopeCanvas");
  const ctx = canvas.getContext("2d");

  const keyWrap = document.getElementById("channelKeys");
  channels.forEach((ch, idx) => {
    const k = document.createElement("button");
    k.type = "button";
    k.className = `lab-key${idx === 0 ? " active" : ""}`;
    k.innerHTML = `<span>${ch.keyLabel}</span><span class="dot" style="background:${ch.dotColor};"></span>`;
    k.addEventListener("click", () => selectChannel(idx));
    keyWrap.appendChild(k);
  });

  function selectChannel(idx) {
    chIndex = idx;
    const c = channels[idx];
    document.getElementById("chBadge").textContent = c.badge;
    document.getElementById("chMetric").textContent = c.metric;
    document.getElementById("chTitle").textContent = c.title;
    document.getElementById("chSub").textContent = c.sub;
    keyWrap.querySelectorAll(".lab-key").forEach((el, i) => el.classList.toggle("active", i === idx));
  }

  document.getElementById("btnHold").addEventListener("click", (e) => {
    running = !running;
    e.currentTarget.classList.toggle("active", !running);
    const led = document.getElementById("ledStatus");
    led.style.color = running ? "var(--green)" : "var(--yellow)";
    led.innerHTML = running
      ? '<span class="dot dot-green pulse"></span><span>TRIG LOCK</span>'
      : '<span class="dot dot-yellow"></span><span>HOLD</span>';
  });

  document.getElementById("btnStim").addEventListener("click", () => {
    manualStim = 1.0;
    if (chIndex !== 0) selectChannel(0);
  });

  const regPts = Array.from({ length: 34 }, (_, i) => {
    const x = 0.08 + (i / 33) * 0.84;
    const y = 0.78 - x * 0.56 + Math.sin(i * 4.1) * 0.075 + Math.cos(i * 7.3) * 0.04;
    return { x, y, color: i % 3 === 0 ? "#E843FF" : i % 3 === 1 ? "#34D399" : "#FFFFFF" };
  });

  const nodes = Array.from({ length: 15 }, (_, i) => ({
    a: (i / 15) * Math.PI * 2,
    r: 42 + (i % 3) * 28,
    sp: 0.004 + (i % 4) * 0.002,
    color: i % 3 === 0 ? "#E843FF" : i % 3 === 1 ? "#34D399" : "#FACC15"
  }));

  function resize() {
    const r = scopeScreen.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = r.width * dpr;
    canvas.height = r.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", resize);
  resize();

  scopeScreen.addEventListener("mousemove", (e) => {
    const r = scopeScreen.getBoundingClientRect();
    mouse.x = (e.clientX - r.left) / r.width;
    mouse.y = (e.clientY - r.top) / r.height;
  });

  function actionPotential(u) {
    if (u < 0.14) return 0;
    if (u < 0.19) { const s = (u - 0.14) / 0.05; return 0.14 * s * s; }
    if (u < 0.24) { const s = (u - 0.19) / 0.05; return 0.14 + 0.86 * Math.sin(s * Math.PI * 0.5); }
    if (u < 0.34) { const s = (u - 0.24) / 0.10; return 1.0 - 1.22 * (1 - Math.pow(1 - s, 1.8)); }
    if (u < 0.62) { const s = (u - 0.34) / 0.28; return -0.22 * Math.exp(-4.2 * s); }
    return 0;
  }

  function drawFrame() {
    const w = scopeScreen.clientWidth;
    const h = scopeScreen.clientHeight;
    const c = channels[chIndex];
    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.065)";
    ctx.lineWidth = 1;
    for (let x = 36; x < w; x += 36) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
    for (let y = 32; y < h; y += 32) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

    if (c.mode === "ap") {
      const restY = h * 0.56;
      const amp = h * 0.36;
      const threshY = restY - amp * 0.14;
      ctx.strokeStyle = "rgba(232, 67, 255, 0.45)";
      ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(0, threshY); ctx.lineTo(w, threshY); ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.font = "10px monospace";
      ctx.fillText("+40 mV", 10, restY - amp + 4);
      ctx.fillText("-55 mV", 10, threshY - 4);
      ctx.fillText("-70 mV", 10, restY + 12);

      ctx.strokeStyle = "#34D399";
      ctx.lineWidth = 2;
      ctx.beginPath();
      const periodPx = 250;
      for (let x = 0; x <= w; x += 2) {
        const u = ((((x + t * 88) % periodPx) + periodPx) % periodPx) / periodPx;
        const v = actionPotential(u) * (1 + manualStim * 0.25);
        const y = restY - v * amp + Math.sin(x * 0.19 + t * 9) * 0.9;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.strokeStyle = "rgba(255, 255, 255, 0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 3) {
        const u = ((((x + t * 88 - 18) % periodPx) + periodPx) % periodPx) / periodPx;
        const y = restY - actionPotential(u) * 0.45 * amp + 8;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      manualStim = Math.max(0, manualStim - 0.02);
    } else if (c.mode === "linreg") {
      ctx.fillStyle = "rgba(232, 67, 255, 0.10)";
      ctx.beginPath();
      ctx.moveTo(w * 0.08, h * 0.72);
      ctx.lineTo(w * 0.92, h * 0.18);
      ctx.lineTo(w * 0.92, h * 0.32);
      ctx.lineTo(w * 0.08, h * 0.84);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = "#E843FF";
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(w * 0.08, h * 0.78); ctx.lineTo(w * 0.92, h * 0.25); ctx.stroke();

      ctx.strokeStyle = "rgba(250, 204, 21, 0.55)";
      ctx.setLineDash([5, 4]);
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(w * 0.08, h * 0.74); ctx.lineTo(w * 0.92, h * 0.42); ctx.stroke();
      ctx.setLineDash([]);

      regPts.forEach((pt, i) => {
        ctx.fillStyle = pt.color;
        ctx.beginPath();
        ctx.arc(pt.x * w, pt.y * h + Math.sin(t * 1.8 + i) * 2.5, 3.2, 0, Math.PI * 2);
        ctx.fill();
      });
    } else if (c.mode === "network") {
      const cx = w * 0.52 + (mouse.x - 0.5) * 32;
      const cy = h * 0.44 + (mouse.y - 0.5) * 18;
      const cs = nodes.map((n) => ({
        x: cx + Math.cos(n.a + t * n.sp * 16) * n.r * 1.45,
        y: cy + Math.sin(n.a * 1.25 + t * n.sp * 13) * n.r * 0.66,
        color: n.color
      }));
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1;
      for (let i = 0; i < cs.length; i++) {
        for (let j = i + 1; j < cs.length; j++) {
          const dx = cs[i].x - cs[j].x;
          const dy = cs[i].y - cs[j].y;
          if (dx * dx + dy * dy < 6200) {
            ctx.beginPath(); ctx.moveTo(cs[i].x, cs[i].y); ctx.lineTo(cs[j].x, cs[j].y); ctx.stroke();
          }
        }
      }
      cs.forEach((pt) => {
        ctx.fillStyle = pt.color;
        ctx.beginPath(); ctx.arc(pt.x, pt.y, 3.8, 0, Math.PI * 2); ctx.fill();
      });
    } else {
      const curves = [
        { color: "#34D399", base: 0.72, dash: [] },
        { color: "#E843FF", base: 0.66, dash: [4, 3] },
        { color: "#FACC15", base: 0.58, dash: [2, 3] }
      ];
      curves.forEach((cv) => {
        ctx.strokeStyle = cv.color;
        ctx.lineWidth = 1.8;
        ctx.setLineDash(cv.dash);
        ctx.beginPath();
        for (let x = 24; x <= w - 24; x += 4) {
          const norm = (x - 24) / (w - 48);
          const y = h * 0.16 + (h * cv.base - h * 0.16) * (1 - Math.exp(-norm * 3.8)) + Math.sin(norm * 24 - t * 2) * 2.2;
          if (x === 24) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
      ctx.setLineDash([]);
    }

    if (running) t += 0.016;
    requestAnimationFrame(drawFrame);
  }

  selectChannel(0);
  requestAnimationFrame(drawFrame);

  /* ---------- 11. Subtle Scope World Vignette (Zero Scroll-Hijacking!) ---------- */
  const scopeWorldOverlay = document.getElementById("scopeWorldOverlay");
  function onScroll() {
    const worldTop = document.getElementById("scopeWorld").getBoundingClientRect().top;
    scopeWorldOverlay.classList.toggle("active", worldTop < window.innerHeight * 0.35);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
