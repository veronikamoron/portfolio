/**
 * VERONIKA MORON — PORTFOLIO DATA
 * ------------------------------------------------------------
 * Edit all your texts, links, project lab reports, field notes,
 * and image paths right here. No need to touch index.html or app.js!
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Veronika Moron",
    roleEyebrow: "M.Sc. Biology (Neuroscience & Computational Biology) · IT Project Mgmt · AI Builder",
    heroHeadline: "Questioning systems. Building tools.",
    heroSubline:
      "M.Sc. Biology (Neuroscience & Computational Biology). Steering complex clinical IT projects, bridging scientific research, quantitative data modeling, and applied AI / Machine Learning.",
    email: "veronika@moron.de",
    location: "Berlin → Freiburg, Germany",
    linkedin: "https://www.linkedin.com/in/veronika-moron-2b6415303",
    github: "https://github.com/veronikamoron",
    portrait: "./assets/portrait.jpg",
    portraitCaptionLeft: "VERONIKA MORON",
    portraitCaptionRight: "BERLIN → FREIBURG",
    aboutHeading: "Science, critical thinking, and building with purpose.",
    aboutParagraphs: [
      "Trained as a neuroscientist, I conducted research on sleep homeostasis, synaptic plasticity, learning, and memory. Science is rarely a straight path. It taught me how to sit with complexity and think critically. As more decisions and responsibility are handed over to machine learning models, that mindset matters more than ever, and it is exactly what I want to bring to my work.",
      "Today I work in <strong>IT project management</strong> at the University Medical Center Freiburg, aligning clinical departments, external vendors, and technical teams across complex IT projects in critical healthcare infrastructure.",
      "Beyond clinical IT, I build applied AI prototypes and pay close attention to where models hold up or break down in practice. Grounded in experimental research, I test assumptions empirically, welcome data that proves me wrong, and move quickly from open questions to working code. ML and agent behavior are my passion."
    ],
    principles: ["CRITICAL THINKING", "SCIENTIFIC RIGOR", "OWNERSHIP", "CURIOSITY"],
    exploringLabel: "Open to collaboration & exchange",
    exploringText:
      "I welcome thoughtful conversations, coffee chats, and collaborative opportunities across startups, research initiatives, and AI / Machine Learning projects. Approaching every exchange with intellectual humility and a genuine willingness to help where I can add value, I particularly enjoy discussing ideas in a scientific context. Feel free to reach out anytime.",
    capabilities: [
      {
        heading: "APPLIED AI & DATA SYSTEMS",
        accentColor: "#E843FF",
        items: [
          {
            title: "Applied AI & RAG Prototyping",
            desc: "Building practical LLM workflows, Custom GPTs, and local-first GraphRAG prototypes to solve concrete operational problems."
          },
          {
            title: "Data Pipelines & Quantitative Analysis",
            desc: "Automating data validation in Python, analyzing experimental datasets, and turning messy inputs into reliable outputs."
          },
          {
            title: "Critical Testing & Reliability",
            desc: "Stress-testing AI tools hands-on for edge cases, failure modes, and practical limits before using them in real workflows."
          }
        ]
      },
      {
        heading: "DELIVERY & SCIENTIFIC RIGOR",
        accentColor: "#34D399",
        items: [
          {
            title: "Complex IT Project Steering",
            desc: "Aligning clinical departments, medical directors, external vendors, and IT teams in regulated healthcare infrastructure (KRITIS)."
          },
          {
            title: "Scientific & Analytical Rigor",
            desc: "Framing open questions clearly, testing assumptions against data, and updating conclusions when evidence disagrees."
          },
          {
            title: "Clear Cross-Functional Communication",
            desc: "Translating between scientific, clinical, and technical stakeholders concisely and without unnecessary jargon."
          }
        ]
      }
    ]
  },

  channels: [
    {
      keyLabel: "01 AP SPIKE",
      dotColor: "#34D399",
      badge: "CH 01 // ACTION POTENTIAL",
      metric: "-70 mV → +40 mV · 10 ms/div",
      title: "From neuroscience to systems.",
      sub: "Electrophysiology, synaptic dynamics, and testing hypotheses against real experimental data.",
      mode: "ap"
    },
    {
      keyLabel: "02 LIN REG",
      dotColor: "#E843FF",
      badge: "CH 02 // LINEAR REGRESSION",
      metric: "OLS FIT · R² = 0.89 · p < 0.001",
      title: "Signal out of noise.",
      sub: "Linear regression with 95% confidence band across experimental observations.",
      mode: "linreg"
    },
    {
      keyLabel: "03 CONNECTOME",
      dotColor: "#FACC15",
      badge: "CH 03 // CONNECTOME GRAPH",
      metric: "GRAPHRAG · MULTI-HOP TOPOLOGY",
      title: "Applied AI & GraphRAG.",
      sub: "Interactive brain-region connectivity, personal Notion workflows, and emergent NPCs.",
      mode: "network"
    },
    {
      keyLabel: "04 CONVERGE",
      dotColor: "#FFFFFF",
      badge: "CH 04 // MODEL CONVERGENCE",
      metric: "TRAIN / VAL LOSS · EPOCHS 0–100",
      title: "stay curious. let's build.",
      sub: "Iterative hypothesis testing from the lab bench to independent AI prototyping.",
      mode: "loss"
    }
  ],

  publication: {
    eyebrow: "PUBLISHED RESEARCH & ACADEMIC THESES // CURRENT BIOLOGY (2026)",
    title: "Reboundless & Sleep Homeostasis",
    fullTitle:
      "Constitutively active presynaptic release factor Unc13A prevents homeostatic sleep rebound in Drosophila",
    authors:
      "Sheng Huang, Debora Fusca, <strong>Veronika Moron</strong>, Marc Escher, Niraja Ramesh, David Toppe, Zhiying Zhao, Oriane Turrel, Yifan Wu, Sha Liu, Alexander M. Walter, Zhihua Liu, Peter Kloppenburg, Stephan J. Sigrist, Chengji Piao",
    summary:
      "Co-authored peer-reviewed study and Master's Thesis (Grade 1.1, FU Berlin) investigating how synaptic release probability and SNARE complex dynamics regulate homeostatic recovery sleep, based on hands-on tissue preparation, fluorescence microscopy, and neuromuscular junction electrophysiology.",
    sciencedirectUrl:
      "https://www.sciencedirect.com/science/article/abs/pii/S0960982226011838?dgcid=coauthor",
    doiLabel: "DOI: 10.1016/j.cub.2026.09.007",
    doiUrl: "https://doi.org/10.1016/j.cub.2026.09.007",
    figures: [
      {
        fig: "SPECIMEN A // SIGRIST LAB · W/ DR. CHENGJI PIAO",
        title: "Amygdala Fluorescence Microscopy (200 µm)",
        caption:
          "Fluorescence microscopy of the Amygdala (200 µm scale), acquired in collaboration with Dr. Chengji Piao at Sigrist Lab (2025), building on our Shaker knockout allele sleep research.",
        meta: "2025 · SIGRIST LAB · IN COLLABORATION WITH DR. CHENGJI PIAO · SHAKER KNOCKOUT ALLELE SLEEP RESEARCH",
        image: "./assets/thesis-amygdala.jpg",
        darkSurface: true,
        accentColor: "#E843FF"
      },
      {
        fig: "SPECIMEN B // ELECTROPHYSIOLOGY · ANONYMIZED",
        title: "Cumulative Synaptic Release (NMJ)",
        caption:
          "Anonymized electrophysiology recording comparing cumulative synaptic release across control and mutant conditions at Drosophila neuromuscular junctions (Sigrist Lab, M.Sc. Thesis, 2025; specific genotypes redacted).",
        meta: "2025 · SIGRIST LAB · IN COLLABORATION WITH DR. CHENGJI PIAO · M.SC. THESIS (FU BERLIN, GRADE 1.1)",
        image: "./assets/thesis-unc13a-rescue.jpg?v=2",
        darkSurface: true,
        accentColor: "#34D399"
      }
    ],
    theses: [
      {
        badge: "M.SC. THESIS · GRADE 1.1 · FU BERLIN",
        accentColor: "#E843FF",
        topics: ["Sleep Homeostasis", "Synaptic Plasticity", "Presynapse", "Electrophysiology"],
        title:
          "Insights into Sleep Regulation in Drosophila Emerge from Sleep Mutants Affecting Presynaptic Release Probability and Neuronal Excitability",
        summary:
          "Explores how heightened synaptic signaling disrupts sleep in <em>Drosophila</em>. Compares two independent presynaptic pathways: increased neuronal excitability (<em>Shaker</em> potassium channel mutants) and active-zone vesicle priming (<em>Unc13A</em> gain-of-function variants). Both alter transmitter release at the neuromuscular junction and converge on impaired sleep rebound, pointing to shared presynaptic principles in sleep regulation."
      },
      {
        badge: "B.SC. THESIS · GRADE 1.0 · FU BERLIN",
        accentColor: "#34D399",
        topics: ["Learning & Memory", "Presynaptic Homeostatic Potentiation (PHP)", "cAMP-PKA Signaling", "Active Zone"],
        title:
          "The Relationship Between cAMP-PKA Signaling and Presynaptic Homeostatic Potentiation (PHP) in Drosophila",
        summary:
          "Investigates how synapses stabilize neural signaling through presynaptic homeostatic potentiation (PHP) when postsynaptic GluRIIA receptors are blocked with PhTx. Using learning and memory mutants (<em>rutabaga</em>, <em>dunce</em>, and <em>DC0</em>), the study links cellular cAMP-PKA balance to rapid active-zone remodeling (BRP) and fast PHP, showing how disrupted cAMP homeostasis impairs both synaptic plasticity and associative learning."
      }
    ]
  },

  projects: [
    {
      id: "nexus-gpt",
      fig: "FIG 01 // UKF · CUSTOM GPT",
      title: "Nexus IT Consulting Custom GPT",
      shortDesc:
        "A Custom GPT built at University Medical Center Freiburg (UKF) to automate project intake forms and identify project risks early across clinical IT workflows.",
      tags: ["Custom GPT", "Prompt Engineering", "Risk Detection", "IT Project Management"],
      visual: "consulting",
      status: "Work Project · UKF",
      image: "",
      report: {
        problem:
          "Completing standardized IT project intake forms manually takes significant time, and critical project risks or missing requirements often surface too late.",
        approach:
          "Designed and iterated a tailored Custom GPT with structured system prompts and domain templates to auto-populate project forms from stakeholder inputs and flag potential risks early.",
        outcome:
          "Faster, more consistent project intake documentation and earlier visibility into technical, compliance, and coordination risks."
      },
      links: []
    },
    {
      id: "second-brain",
      fig: "FIG 02 // PERSONAL · AGENTIC AI",
      title: "Agentic Second Brain & Mobile OS",
      shortDesc:
        "Personal cognitive OS connecting phone capture, Notion databases, and autonomous AI agents into live, structured context across devices.",
      tags: ["AI Agents", "Notion", "Mobile Sync", "Automation", "Knowledge Systems"],
      visual: "secondBrain",
      status: "Personal System",
      image: "",
      report: {
        problem:
          "Ideas, research notes, and mobile captures scatter across apps and lose context before turning into action.",
        approach:
          "Connected mobile triggers with Notion and autonomous AI agents for instant on-the-go capture, routing, and structured memory.",
        outcome:
          "A continuously running personal cognitive operating system across phone and desktop."
      },
      links: []
    },
    {
      id: "neurograph",
      fig: "FIG 03 // PERSONAL · GRAPHRAG & AGENTIC AI",
      title: "NeuroGraph: Brain Connectivity Analysis",
      shortDesc:
        "Independent GraphRAG and agentic AI project on GitHub modeling brain regions with local-first embeddings and an interactive 3D explorer.",
      tags: ["Python", "FastAPI", "NetworkX", "ChromaDB", "Gemini", "Three.js", "Docker"],
      visual: "connectome",
      status: "Personal · Open Source",
      image: "",
      report: {
        problem:
          "Neuroscience literature connects hundreds of brain regions, pathways, and functions across fragmented papers, while standard vector search loses multi-hop structural relationships.",
        approach:
          "Built an end-to-end GraphRAG architecture combining NetworkX knowledge graphs, local ChromaDB embeddings, Gemini reasoning, and a containerized FastAPI backend paired with an interactive Three.js 3D explorer.",
        outcome:
          "Enables intuitive multi-hop exploration of anatomical and functional connectivity in a local-first Docker setup."
      },
      links: [
        { label: "Live Demo ↗", url: "https://veronikamoron.github.io/neurograph/" },
        { label: "View on GitHub ↗", url: "https://github.com/veronikamoron" }
      ]
    },
    {
      id: "infrest-pipeline",
      fig: "FIG 04 // INFREST · DATA ENGINEERING",
      title: "Automated Python Data Validation Pipeline",
      shortDesc:
        "Co-developed and deployed a Python tool at Infrest merging and validating 60,000+ Excel records, reducing manual reporting overhead by ~90%.",
      tags: ["Python", "Excel Merge", "Data Validation", "Gemini", "MS Copilot"],
      visual: "tables",
      status: "Work Project · Infrest",
      image: "",
      report: {
        problem:
          "Manually merging and validating 60,000+ energy and digital infrastructure spreadsheet records was slow, error-prone, and hard to scale.",
        approach:
          "Co-developed and deployed a Python table-merging and validation pipeline building on an existing script, complemented by rapid LLM prototypes (Google Gemini, MS Copilot) for KPI extraction.",
        outcome:
          "Cut manual reporting overhead by ~90% and significantly increased data integrity across stakeholders."
      },
      links: []
    },
    {
      id: "npc-game",
      fig: "FIG 05 // EARLY STAGE · COLLABORATION",
      title: "Emergent Multi-Agent NPC Game",
      shortDesc:
        "Early-stage behavioral science and model-psychology experiment with Jan Cichosz (Software Engineer) exploring unpredictable emergent multi-agent behavior.",
      tags: ["Model Psychology", "Behavioral Science", "Multi-Agent AI", "Evals"],
      inExploration: true,
      visual: "npcGame",
      status: "Early Stage · w/ Jan Cichosz",
      image: "",
      report: {
        problem:
          "Conventional game NPCs rely on rigid, pre-scripted dialogue trees, leaving no room for genuine behavioral emergence or unexpected multi-agent dynamics.",
        approach:
          "Developing an open-ended behavioral research and multi-agent sandbox together with Jan Cichosz (Software Engineer) to observe how autonomous agents communicate, adapt, and surface unexpected edge-case behaviors.",
        outcome:
          "In early research and concept phase, bridging behavioral science, model psychology, and multi-agent system design."
      },
      links: []
    },
    {
      id: "ukf-rag-agent",
      fig: "FIG 06 // UPCOMING · EARLY PHASE · UKF",
      title: "AI Support Agent (RAG & Ticket System)",
      shortDesc:
        "Upcoming early-phase project at University Medical Center Freiburg (UKF): connecting an AI agent via RAG to institutional website knowledge to help answer incoming IT tickets.",
      tags: ["RAG", "AI Agent", "Ticket System", "UKF", "Upcoming"],
      inExploration: true,
      visual: "ukfAgent",
      status: "Upcoming · Early Phase · UKF",
      image: "",
      report: {
        problem:
          "Recurring IT support tickets and routine inquiries take up significant capacity across hospital IT teams, even when answers already exist on institutional web pages and documentation.",
        approach:
          "Involved in scoping an upcoming RAG-based AI agent at University Medical Center Freiburg (UKF) planned to connect to company website knowledge and assist in answering incoming ticket system requests.",
        outcome:
          "Currently in early preparation phase (implementation not yet started), aligning retrieval requirements, ticket system integration, and reliability standards in a regulated healthcare setting."
      },
      links: []
    }
  ],

  experience: [
    {
      role: "IT-Consultant & Project Management",
      org: "University Medical Center Freiburg (Digitalization & Tech)",
      period: "Aug 2026 – Present · Freiburg",
      summary:
        "Steering 3 concurrent complex IT projects (including a six-figure software rollout) in critical healthcare infrastructure (KRITIS), bringing Medical Directors, 4+ clinical departments, external vendors, and technical teams together.",
      skills: "IT Project Management · KRITIS · Stakeholder Alignment · Process Optimization"
    },
    {
      role: "Working Student",
      org: "Infrest GmbH (Energy & Digital Infrastructure)",
      period: "Feb 2024 – Feb 2026 · Berlin",
      summary:
        "Co-development and deployment of a Python automation and data validation pipeline building on an existing script for 60,000+ records (reducing manual reporting overhead by ~90%), alongside LLM-powered analytical workflows (Google Gemini, MS Copilot).",
      skills: "Co-Development & Deployment · Python · Excel / Data Validation · LLM Workflows"
    },
    {
      role: "Research Intern",
      org: "Sigrist Lab / Charité CCO",
      period: "Mar 2022 – Dec 2022 · Berlin",
      summary:
        "Learned hands-on electrophysiology and experimental scientific rigor while contributing to learning and memory projects linked to Alzheimer's research. Actively engaged in lab meetings, scientific project management, research ethics discussions, and MATLAB scripting for data analysis, laying the foundation for my later Master's research and Current Biology (2026) co-authorship.",
      skills: "Electrophysiology · Learning & Memory · Alzheimer's Research · MATLAB Scripting · Scientific Project Mgmt · Research Ethics"
    }
  ],

  education: [
    {
      badge: "M.SC. BIOLOGY · FINAL GRADE 1.1",
      school: "Freie Universität Berlin",
      details:
        "Majors: Neuroscience & Computational Biology · 2023 – 2026 · Thesis: 1.1 · Highlights: Bioinformatics (1.0), Mathematical Modelling (1.3), Molecular Neurogenetics (1.0)"
    },
    {
      badge: "B.SC. BIOLOGY · FINAL GRADE 2.1",
      school: "Freie Universität Berlin",
      details: "2019 – 2023 · Bachelor's Thesis: 1.0 (cAMP-PKA Signaling & Synaptic Plasticity)"
    }
  ],

  fieldNotes: [
    {
      tag: "NOTE 01 // IN THE LAB",
      accentColor: "#34D399",
      title: "Measuring Synaptic Activity",
      caption:
        "Hands-on experimental neuroscience at Sigrist Lab / Charité CCO, recording live synaptic traces at neuromuscular junctions for sleep homeostasis, memory, learning, and Alzheimer's research.",
      image: "./assets/field-lab.jpg",
      coord: "52.52°N · 13.40°E"
    },
    {
      tag: "NOTE 02 // SANTIAGO, CHILE",
      accentColor: "#FACC15",
      title: "Deutsche Schule Santiago",
      caption:
        "Spent several months at the German School in Santiago, Chile, immersing in a new culture, collaborating across languages, and broadening my perspective beyond the lab.",
      image: "./assets/field-chile.png",
      coord: "33.45°S · 70.66°W"
    },
    {
      tag: "NOTE 03 // PERSONAL",
      accentColor: "#E843FF",
      title: "Beyond the Screen",
      caption:
        "Stepping back from data, research, and technical projects, recharging with good company and a clear head.",
      image: "./assets/field-life.jpg",
      coord: "47.99°N · 7.84°E"
    }
  ],

  certificates: [
    {
      issuer: "Anthropic",
      date: "Issued Sep 2026",
      title: "AI Fluency for Builders",
      credentialId: "csm9x46eoh9v",
      skills: "AI Product Strategy · Agentic Workflows",
      verifyUrl: "https://verify.skilljar.com/c/csm9x46eoh9v",
      image: ""
    },
    {
      issuer: "Databricks",
      date: "Issued Sep 2026",
      title: "Generative AI Fundamentals",
      credentialId: "193424763",
      skills: "Azure Databricks · Retrieval-Augmented Generation (RAG)",
      verifyUrl: "https://credentials.databricks.com/08d26e31-cb0a-45c2-a6c0-0b64eddb0ecf",
      image: ""
    }
  ]
};
