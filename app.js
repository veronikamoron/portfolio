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

  /* ---------- 10. Vintage Benchtop Oscilloscope + Tactile Knobs + Pixel-Lab-Agent ---------- */
  const channels = DATA.channels;
  let chIndex = 0, running = true, phase = 0, stimPulse = 0;
  let noise = 0.52, gain = 0.50;
  let probeX = -1, probeY = -1;

  const scopeScreen = document.getElementById("scopeScreen");
  const canvas = document.getElementById("scopeCanvas");
  const ctx = canvas.getContext("2d");
  const chBadgeEl = document.getElementById("chBadge");
  const chMetricEl = document.getElementById("chMetric");
  const chTitleEl = document.getElementById("chTitle");
  const chSubEl = document.getElementById("chSub");
  const chReadoutBar = document.getElementById("chReadoutBar");
  const keyWrap = document.getElementById("channelKeys");
  const miniBtns = Array.from(document.querySelectorAll(".mini-trace-btn"));
  const sparkCanvases = Array.from(document.querySelectorAll(".mini-spark"));
  const btnHold = document.getElementById("btnHold");
  const btnStim = document.getElementById("btnStim");

  const knobNoiseEl = document.getElementById("knobNoise");
  const knobGainEl = document.getElementById("knobGain");
  const capNoise = document.getElementById("capNoise");
  const capGain = document.getElementById("capGain");
  const arcNoise = document.getElementById("arcNoise");
  const arcGain = document.getElementById("arcGain");
  const valNoise = document.getElementById("valNoise");
  const valGain = document.getElementById("valGain");

  const keyButtons = [];
  channels.forEach((ch, idx) => {
    const k = document.createElement("button");
    k.type = "button";
    k.className = `lab-key${idx === 0 ? " active" : ""}`;
    k.innerHTML = `<span>${ch.keyLabel}</span><span class="dot" style="background:${ch.dotColor};"></span>`;
    k.addEventListener("click", () => selectChannel(idx, true));
    keyWrap.appendChild(k);
    keyButtons.push(k);
  });

  miniBtns.forEach((b, i) => b.addEventListener("click", () => selectChannel(i, true)));

  function selectChannel(idx, fromUser = false) {
    chIndex = idx;
    const c = channels[idx];
    chBadgeEl.textContent = c.badge;
    chTitleEl.textContent = c.title;
    chSubEl.textContent = c.sub;
    if (chReadoutBar) chReadoutBar.style.setProperty("--cap-accent", c.dotColor);
    keyButtons.forEach((el, i) => el.classList.toggle("active", i === idx));
    miniBtns.forEach((el, i) => el.classList.toggle("active", i === idx));
    if (fromUser) interruptAgent();
  }

  function updateKnobsUI() {
    if (!capNoise || !capGain) return;
    capNoise.style.transform = `rotate(${-135 + noise * 270}deg)`;
    capGain.style.transform = `rotate(${-135 + gain * 270}deg)`;
    arcNoise.setAttribute("stroke-dasharray", `${(noise * 113).toFixed(1)} 151`);
    arcGain.setAttribute("stroke-dasharray", `${(gain * 113).toFixed(1)} 151`);
    valNoise.textContent = `${Math.round(noise * 100)}%`;
    valGain.textContent = `${(0.5 + gain * 1.3).toFixed(1)}×`;
  }
  updateKnobsUI();

  function bindKnob(el, getter, setter) {
    if (!el) return;
    let dragging = false, startY = 0, startVal = 0;
    el.addEventListener("pointerdown", (e) => {
      dragging = true;
      startY = e.clientY;
      startVal = getter();
      el.classList.add("dragging");
      el.setPointerCapture(e.pointerId);
      interruptAgent();
    });
    el.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const next = Math.max(0.05, Math.min(0.95, startVal + (startY - e.clientY) / 120));
      setter(next);
      updateKnobsUI();
    });
    const end = () => { dragging = false; el.classList.remove("dragging"); };
    el.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", end);
    el.addEventListener("wheel", (e) => {
      e.preventDefault();
      interruptAgent();
      const delta = e.deltaY < 0 ? 0.06 : -0.06;
      setter(Math.max(0.05, Math.min(0.95, getter() + delta)));
      updateKnobsUI();
    }, { passive: false });
  }
  bindKnob(knobNoiseEl, () => noise, (v) => { noise = v; });
  bindKnob(knobGainEl, () => gain, (v) => { gain = v; });

  btnHold.addEventListener("click", (e) => {
    running = !running;
    e.currentTarget.classList.toggle("active", !running);
    const led = document.getElementById("ledStatus");
    led.style.color = running ? "var(--green)" : "var(--yellow)";
    led.innerHTML = running
      ? '<span class="dot dot-green pulse"></span><span>TRIG LOCK</span>'
      : '<span class="dot dot-yellow"></span><span>HOLD</span>';
    interruptAgent();
  });

  function triggerStim(fromUser = false) {
    stimPulse = 1.0;
    btnStim.classList.add("stim-flash");
    setTimeout(() => btnStim.classList.remove("stim-flash"), 240);
    if (fromUser) interruptAgent();
  }
  btnStim.addEventListener("click", () => triggerStim(true));

  const OLS_POINTS = Array.from({ length: 34 }, (_, i) => {
    const x = 0.08 + (i / 33) * 0.84;
    const s1 = Math.sin(i * 12.9898 + 4.1414) * 43758.5453;
    const r = (s1 - Math.floor(s1)) * 2 - 1;
    const s2 = Math.sin(i * 78.233 + 1.23) * 19341.23;
    const r2 = (s2 - Math.floor(s2)) * 2 - 1;
    return { x, err: r * 0.7 + r2 * 0.3 };
  });

  const GRAPH_NODES = [
    { x: 0.14, y: 0.52, c: "#FFFFFF", label: "V1" },
    { x: 0.30, y: 0.25, c: "#E843FF", label: "AMY" },
    { x: 0.32, y: 0.76, c: "#34D399", label: "HIP" },
    { x: 0.52, y: 0.48, c: "#FACC15", label: "PFC" },
    { x: 0.70, y: 0.24, c: "#E843FF", label: "RAG" },
    { x: 0.72, y: 0.74, c: "#34D399", label: "MEM" },
    { x: 0.88, y: 0.48, c: "#FACC15", label: "ACT" }
  ];
  const GRAPH_EDGES = [[0,1],[0,2],[1,3],[2,3],[1,4],[2,5],[3,4],[3,5],[4,6],[5,6],[3,6]];
  const WEAK_EDGES = [[0,3],[1,2],[4,5],[0,4]];

  function resize() {
    const r = scopeScreen.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(280, Math.floor(r.width * dpr));
    canvas.height = Math.max(200, Math.floor(r.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", resize);
  resize();

  scopeScreen.addEventListener("pointermove", (e) => {
    const r = scopeScreen.getBoundingClientRect();
    probeX = e.clientX - r.left;
    probeY = e.clientY - r.top;
  });
  scopeScreen.addEventListener("pointerleave", () => { probeX = -1; probeY = -1; });

  function apShape(u) {
    const d1 = (u - 0.30) / 0.036;
    const d2 = (u - 0.37) / 0.055;
    return Math.exp(-d1 * d1) - 0.24 * Math.exp(-d2 * d2);
  }

  function renderMiniSparks(tNow) {
    sparkCanvases.forEach((cv) => {
      const idx = Number(cv.dataset.spark);
      const c = cv.getContext("2d");
      const w = cv.width, h = cv.height;
      c.clearRect(0, 0, w, h);
      if (idx === 0) {
        c.strokeStyle = "#34D399"; c.lineWidth = 1.4; c.beginPath();
        for (let x = 0; x <= w; x += 2) {
          const u = ((x / w) * 2 - tNow * 0.4) % 1;
          const uu = u < 0 ? u + 1 : u;
          const y = h * 0.78 - apShape(uu) * (h * 0.65) + Math.sin(x * 0.5 + tNow * 5) * noise * 2.2;
          if (x === 0) c.moveTo(x, y); else c.lineTo(x, y);
        }
        c.stroke();
      } else if (idx === 1) {
        c.strokeStyle = "#E843FF"; c.lineWidth = 1.4;
        c.beginPath(); c.moveTo(8, h - 4); c.lineTo(w - 8, 4); c.stroke();
        c.fillStyle = "rgba(255,255,255,0.72)";
        for (let i = 0; i < 9; i++) {
          const u = i / 8;
          const px = 10 + u * (w - 20);
          const py = (h - 5) - u * (h - 10) + Math.sin(i * 4.2) * noise * 6;
          c.fillRect(px - 1, py - 1, 2, 2);
        }
      } else if (idx === 2) {
        const pts = [[18,14],[52,6],[58,19],[95,12],[124,9]];
        c.strokeStyle = "rgba(250,204,21,0.45)"; c.lineWidth = 1;
        [[0,1],[0,2],[1,3],[2,3],[3,4]].forEach(([a,b]) => {
          c.beginPath(); c.moveTo(pts[a][0], pts[a][1]); c.lineTo(pts[b][0], pts[b][1]); c.stroke();
        });
        c.fillStyle = "#FACC15";
        pts.forEach(([x,y]) => { c.beginPath(); c.arc(x, y, 2.2, 0, Math.PI * 2); c.fill(); });
      } else {
        c.strokeStyle = "#FFFFFF"; c.lineWidth = 1.3; c.beginPath();
        for (let x = 0; x <= w; x += 3) {
          const u = x / w;
          const y = 3 + (1 - Math.exp(-u * 3.5)) * (h - 7);
          if (x === 0) c.moveTo(x, y); else c.lineTo(x, y);
        }
        c.stroke();
      }
    });
  }

  let lastTs = performance.now();
  function drawFrame(ts) {
    const dt = Math.min(0.05, (ts - lastTs) / 1000);
    lastTs = ts;
    if (running) phase += dt;
    stimPulse = Math.max(0, stimPulse - dt * 2.2);

    const w = scopeScreen.clientWidth;
    const h = scopeScreen.clientHeight;
    const c = channels[chIndex];

    ctx.fillStyle = "#040506";
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.048)";
    ctx.lineWidth = 1;
    for (let i = 1; i < 10; i++) { const x = (w / 10) * i; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
    for (let j = 1; j < 6; j++) { const y = (h / 6) * j; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

    if (c.mode === "ap") {
      const gainMult = 0.5 + gain * 1.3;
      const baseY = h * 0.72, threshY = h * 0.56;
      ctx.save();
      ctx.strokeStyle = "rgba(232, 67, 255, 0.36)";
      ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(0, threshY); ctx.lineTo(w, threshY); ctx.stroke();
      ctx.restore();

      ctx.fillStyle = "rgba(180,180,192,0.55)";
      ctx.font = "10px monospace";
      ctx.fillText("+40 mV", 10, h * 0.22);
      ctx.fillText("-55 mV", 10, threshY - 5);
      ctx.fillText("-70 mV", 10, baseY + 14);

      const cycles = 1.6 + gain * 1.2;
      const amp = (h * 0.46) * Math.min(1.15, 0.75 + gain * 0.4 + stimPulse * 0.25);

      ctx.beginPath();
      for (let x = 0; x <= w; x += 3) {
        const u = ((x / w) * cycles - (phase - 0.08) * 0.55) % 1;
        const uu = u < 0 ? u + 1 : u;
        const n = (Math.sin(x * 0.19 + phase * 8) * 0.5 + Math.cos(x * 0.43 - phase * 11) * 0.5) * noise * 18;
        const y = baseY - apShape(uu) * amp + n;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(52, 211, 153, 0.22)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.save();
      ctx.shadowColor = "rgba(52, 211, 153, 0.72)";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 2) {
        const u = ((x / w) * cycles - phase * 0.55) % 1;
        const uu = u < 0 ? u + 1 : u;
        const stimBump = stimPulse * Math.exp(-Math.pow((x / w - 0.52) / 0.035, 2)) * (h * 0.44);
        const n = (Math.sin(x * 0.23 + phase * 10) * 0.55 + Math.cos(x * 0.57 - phase * 13) * 0.45) * noise * 22;
        const y = baseY - apShape(uu) * amp - stimBump + n;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "#34D399";
      ctx.lineWidth = 2.2;
      ctx.stroke();
      ctx.restore();

      const snrDb = (24 - noise * 20).toFixed(1);
      chMetricEl.innerHTML = `SNR <strong>+${snrDb} dB</strong> · RATE <strong>${gainMult.toFixed(1)}×</strong>`;
    } else if (c.mode === "linreg") {
      const padX = 42, padY = 42;
      const plotW = w - padX * 2, plotH = h - padY * 2;
      const slope = 0.55 + gain * 0.35;
      const spread = 0.03 + noise * 0.36;

      const pts = OLS_POINTS.map((p, i) => {
        const wave = Math.sin(phase * 1.9 + i * 0.65) * (0.022 + noise * 0.065) + Math.cos(phase * 1.1 - i * 0.4) * 0.014;
        const burst = stimPulse * Math.sin(i * 1.7 + phase * 8) * 0.11;
        const y = Math.max(0.06, Math.min(0.94, 0.16 + p.x * slope + p.err * spread + wave + burst));
        return { x: p.x, y };
      });

      const meanX = pts.reduce((s, p) => s + p.x, 0) / pts.length;
      const meanY = pts.reduce((s, p) => s + p.y, 0) / pts.length;
      let num = 0, denX = 0, denY = 0;
      pts.forEach((p) => { const dx = p.x - meanX, dy = p.y - meanY; num += dx * dy; denX += dx * dx; denY += dy * dy; });
      const m = num / (denX || 1), b = meanY - m * meanX;
      const r2 = Math.max(0.12, Math.min(0.99, (num * num) / ((denX * denY) || 1)));

      ctx.strokeStyle = "rgba(255,255,255,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(padX, padY); ctx.lineTo(padX, h - padY); ctx.lineTo(w - padX, h - padY); ctx.stroke();

      const band = 10 + noise * 40;
      ctx.beginPath();
      for (let i = 0; i <= 24; i++) {
        const ux = i / 24, px = padX + ux * plotW, py = (h - padY) - (m * ux + b) * plotH;
        const inf = 1 + Math.pow(ux - 0.5, 2) * 1.4;
        if (i === 0) ctx.moveTo(px, py - band * inf); else ctx.lineTo(px, py - band * inf);
      }
      for (let i = 24; i >= 0; i--) {
        const ux = i / 24, px = padX + ux * plotW, py = (h - padY) - (m * ux + b) * plotH;
        const inf = 1 + Math.pow(ux - 0.5, 2) * 1.4;
        ctx.lineTo(px, py + band * inf);
      }
      ctx.closePath();
      ctx.fillStyle = "rgba(232, 67, 255, 0.14)";
      ctx.fill();

      ctx.save();
      ctx.shadowColor = "rgba(232, 67, 255, 0.72)";
      ctx.shadowBlur = 10;
      ctx.strokeStyle = "#E843FF";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(padX, (h - padY) - b * plotH);
      ctx.lineTo(padX + plotW, (h - padY) - (m + b) * plotH);
      ctx.stroke();
      ctx.restore();

      // Subtle live scanner dot along the OLS regression line
      const scanU = (phase * 0.28) % 1;
      const scanX = padX + scanU * plotW;
      const scanY = (h - padY) - (m * scanU + b) * plotH;
      ctx.save();
      ctx.shadowColor = "#E843FF"; ctx.shadowBlur = 14;
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath(); ctx.arc(scanX, scanY, 3.8, 0, Math.PI * 2); ctx.fill();
      ctx.restore();

      pts.forEach((p, idx) => {
        const px = padX + p.x * plotW;
        const py = (h - padY) - p.y * plotH;
        const nearScan = Math.abs(p.x - scanU) < 0.06;
        ctx.fillStyle = nearScan ? "#34D399" : (idx % 4 === 0 ? "#E843FF" : "#F4F4F6");
        ctx.beginPath(); ctx.arc(px, py, nearScan ? 4.2 : 3, 0, Math.PI * 2); ctx.fill();
      });

      chMetricEl.innerHTML = `OLS R² <strong>${r2.toFixed(2)}</strong> · 95% CI · NOISE <strong>${Math.round(noise * 100)}%</strong>`;
    } else if (c.mode === "network") {
      const speed = 0.5 + gain * 1.3;
      if (noise > 0.25) {
        ctx.save();
        ctx.strokeStyle = `rgba(255,255,255,${(noise - 0.2) * 0.25})`;
        ctx.setLineDash([3, 4]);
        WEAK_EDGES.forEach(([a, b]) => {
          ctx.beginPath();
          ctx.moveTo(GRAPH_NODES[a].x * w, GRAPH_NODES[a].y * h);
          ctx.lineTo(GRAPH_NODES[b].x * w, GRAPH_NODES[b].y * h);
          ctx.stroke();
        });
        ctx.restore();
      }
      GRAPH_EDGES.forEach(([a, b], idx) => {
        const na = GRAPH_NODES[a], nb = GRAPH_NODES[b];
        const x1 = na.x * w, y1 = na.y * h, x2 = nb.x * w, y2 = nb.y * h;
        ctx.strokeStyle = "rgba(250, 204, 21, 0.24)";
        ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();

        const prog = (phase * 0.55 * speed + idx * 0.17) % 1;
        ctx.save();
        ctx.shadowColor = "#FACC15"; ctx.shadowBlur = 8 + stimPulse * 10;
        ctx.fillStyle = stimPulse > 0.1 ? "#34D399" : "#FACC15";
        ctx.beginPath(); ctx.arc(x1 + (x2 - x1) * prog, y1 + (y2 - y1) * prog, 2.5 + stimPulse * 1.5, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      });
      GRAPH_NODES.forEach((n, idx) => {
        const nx = n.x * w, ny = n.y * h;
        const pulse = 1 + Math.sin(phase * 2.5 + idx) * 0.12 + stimPulse * 0.35;
        ctx.save();
        ctx.shadowColor = n.c; ctx.shadowBlur = 12; ctx.fillStyle = n.c;
        ctx.beginPath(); ctx.arc(nx, ny, 5 * pulse, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        ctx.fillStyle = "rgba(244,244,246,0.75)";
        ctx.font = "9.5px monospace";
        ctx.fillText(n.label, nx + 9, ny + 3);
      });
      chMetricEl.innerHTML = `GRAPHRAG <strong>7 NODES</strong> · HOPS <strong>3</strong> · FLOW <strong>${speed.toFixed(1)}×</strong>`;
    } else {
      const padX = 40, padY = 40, plotW = w - padX * 2, plotH = h - padY * 2;
      const decay = 2.0 + gain * 3.0;
      ctx.strokeStyle = "rgba(255,255,255,0.2)"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(padX, padY); ctx.lineTo(padX, h - padY); ctx.lineTo(w - padX, h - padY); ctx.stroke();

      ctx.save();
      ctx.shadowColor = "rgba(255,255,255,0.45)"; ctx.shadowBlur = 8;
      ctx.strokeStyle = "#FFFFFF"; ctx.lineWidth = 2.1; ctx.beginPath();
      for (let i = 0; i <= 80; i++) {
        const u = i / 80, x = padX + u * plotW;
        const loss = 0.08 + 0.85 * Math.exp(-u * decay) + Math.sin(u * 26 + phase * 3) * noise * 0.08;
        const y = (h - padY) - Math.max(0.03, Math.min(0.95, loss)) * plotH;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke(); ctx.restore();

      ctx.strokeStyle = "#34D399"; ctx.lineWidth = 1.7; ctx.beginPath();
      for (let i = 0; i <= 80; i++) {
        const u = i / 80, x = padX + u * plotW;
        const loss = 0.14 + 0.80 * Math.exp(-u * (decay * 0.82)) + Math.cos(u * 21 - phase * 2.5) * noise * 0.11;
        const y = (h - padY) - Math.max(0.04, Math.min(0.96, loss)) * plotH;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      chMetricEl.innerHTML = `TRAIN / VAL <strong>${(0.09 + noise * 0.12).toFixed(3)}</strong> · EPOCHS <strong>100</strong>`;
    }

    if (probeX >= 0 && probeY >= 0) {
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,0.18)";
      ctx.setLineDash([2, 3]);
      ctx.beginPath(); ctx.moveTo(probeX, 0); ctx.lineTo(probeX, h); ctx.moveTo(0, probeY); ctx.lineTo(w, probeY); ctx.stroke();
      ctx.restore();
    }

    renderMiniSparks(phase);
    requestAnimationFrame(drawFrame);
  }

  /* ---------- Minimalist 8-Bit Pixel-Lab-Agent Choreography ---------- */
  const stageEl = document.getElementById("scopeStage");
  const agentEl = document.getElementById("pixelAgent");
  const bubbleEl = document.getElementById("agentBubble");
  const autoToggleBtn = document.getElementById("autoToggleBtn");
  const agentBtnText = document.getElementById("agentBtnText");

  let agentAuto = true, agentTimers = [], agentAnimRaf = null;
  let agentPos = { x: 42, y: 0 };

  function clearAgentSchedule() {
    agentTimers.forEach((id) => clearTimeout(id));
    agentTimers = [];
    if (agentAnimRaf) cancelAnimationFrame(agentAnimRaf);
    if (knobNoiseEl) knobNoiseEl.classList.remove("agent-turning");
    if (knobGainEl) knobGainEl.classList.remove("agent-turning");
  }
  function schedule(fn, ms) { agentTimers.push(setTimeout(fn, ms)); }
  function setBubble(text, ms = 1800) {
    if (!bubbleEl) return;
    if (!text) { bubbleEl.classList.remove("show"); return; }
    bubbleEl.textContent = text;
    bubbleEl.classList.add("show");
    if (ms > 0) schedule(() => bubbleEl.classList.remove("show"), ms);
  }
  function getRelCenter(el, ox = 0, oy = 0) {
    const s = stageEl.getBoundingClientRect(), e = el.getBoundingClientRect();
    return { x: e.left - s.left + e.width * 0.5 - 16 + ox, y: e.top - s.top + oy };
  }
  function moveAgentTo(tx, ty, dur = 700, arc = 16, onDone) {
    if (!agentEl) return;
    const sx = agentPos.x, sy = agentPos.y, t0 = performance.now();
    agentEl.classList.remove("sitting", "waving", "turning");
    agentEl.classList.add("walking");
    agentEl.classList.toggle("facing-left", tx < sx);
    function step(now) {
      const p = Math.min(1, (now - t0) / dur);
      const ease = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      const x = sx + (tx - sx) * ease;
      const y = sy + (ty - sy) * ease - Math.sin(p * Math.PI) * arc;
      agentPos = { x, y };
      agentEl.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      if (p < 1) agentAnimRaf = requestAnimationFrame(step);
      else { agentEl.classList.remove("walking"); if (onDone) onDone(); }
    }
    agentAnimRaf = requestAnimationFrame(step);
  }
  function animateNoiseKnob(targetNoise, dur = 1650) {
    const startN = noise, t0 = performance.now();
    if (knobNoiseEl) knobNoiseEl.classList.add("agent-turning");
    if (agentEl) agentEl.classList.add("turning");
    function step(now) {
      if (!agentAuto) {
        if (knobNoiseEl) knobNoiseEl.classList.remove("agent-turning");
        if (agentEl) agentEl.classList.remove("turning");
        return;
      }
      const p = Math.min(1, (now - t0) / dur);
      noise = startN + (targetNoise - startN) * (1 - Math.pow(1 - p, 3));
      updateKnobsUI();
      if (p < 1) requestAnimationFrame(step);
      else {
        if (knobNoiseEl) knobNoiseEl.classList.remove("agent-turning");
        if (agentEl) agentEl.classList.remove("turning");
      }
    }
    requestAnimationFrame(step);
  }
  function perchOnBezel(msg = "") {
    if (!autoToggleBtn) return;
    const perch = getRelCenter(autoToggleBtn, -42, -34);
    moveAgentTo(perch.x, perch.y, 750, 24, () => {
      agentEl.classList.remove("facing-left");
      agentEl.classList.add("sitting");
      if (msg) setBubble(msg, 2200);
    });
  }
  function interruptAgent() {
    if (!agentAuto) return;
    agentAuto = false;
    clearAgentSchedule();
    if (autoToggleBtn) autoToggleBtn.classList.remove("active");
    if (agentBtnText) agentBtnText.textContent = "AGENT: IDLE";
    if (agentEl && agentEl.classList.contains("visible")) perchOnBezel("YOUR TURN!");
  }
  function runAgentDemo() {
    if (!agentEl || !stageEl || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    clearAgentSchedule();
    agentAuto = true;
    if (autoToggleBtn) autoToggleBtn.classList.add("active");
    if (agentBtnText) agentBtnText.textContent = "AGENT: AUTO";

    noise = 0.78; gain = 0.50; updateKnobsUI();
    selectChannel(0, false);

    agentPos = { x: 42, y: 0 };
    agentEl.style.transform = `translate3d(42px, 0px, 0)`;

    // 1. Calmly appear & wave hello after 2.4s
    schedule(() => { agentEl.classList.add("visible", "waving"); setBubble("HI!", 2200); }, 2400);

    // 2. Unhurried walk to CH 02 (Linear Regression)
    schedule(() => {
      const target = getRelCenter(keyButtons[1], -68, -8);
      moveAgentTo(target.x, target.y, 1250, 12, () => {
        keyButtons[1].classList.add("agent-press");
        selectChannel(1, false);
        setBubble("SIGNAL / NOISE", 1700);
        schedule(() => keyButtons[1].classList.remove("agent-press"), 260);
      });
    }, 5000);

    // 3. Slow hop to NOISE knob & smoothly tune noise 78% -> 12%
    schedule(() => {
      const target = getRelCenter(knobNoiseEl, -30, -2);
      moveAgentTo(target.x, target.y, 950, 10, () => {
        setBubble("TUNING SNR...", 2200);
        animateNoiseKnob(0.12, 2400);
      });
    }, 7600);

    // 4. Calmly perch on the top bezel edge and hand over to the visitor
    schedule(() => {
      agentAuto = false;
      if (autoToggleBtn) autoToggleBtn.classList.remove("active");
      if (agentBtnText) agentBtnText.textContent = "AGENT: IDLE";
      perchOnBezel("TRY ME!");
    }, 11600);
  }

  if (autoToggleBtn) autoToggleBtn.addEventListener("click", () => (agentAuto ? interruptAgent() : runAgentDemo()));
  if (agentEl) agentEl.addEventListener("click", () => (agentAuto ? interruptAgent() : runAgentDemo()));

  selectChannel(0, false);
  requestAnimationFrame(drawFrame);
  runAgentDemo();

  /* ---------- 11. Subtle Scope World Vignette (Zero Scroll-Hijacking!) ---------- */
  const scopeWorldOverlay = document.getElementById("scopeWorldOverlay");
  function onScroll() {
    const worldTop = document.getElementById("scopeWorld").getBoundingClientRect().top;
    scopeWorldOverlay.classList.toggle("active", worldTop < window.innerHeight * 0.35);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
