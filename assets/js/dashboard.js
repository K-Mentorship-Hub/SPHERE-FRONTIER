const directions = [
  {
    id: "g0",
    title: "Start Here: 7 Days Challenge",
    sphere: "Bridge",
    focus: ["academy", "networking"],
    summary: "A test-drive lane to taste several directions before committing.",
    resources: [
      { label: "roadmap.sh", url: "https://roadmap.sh/" },
      { label: "freeCodeCamp Learn", url: "https://www.freecodecamp.org/learn/" },
      { label: "Codédex GitHub Student Guide", url: "https://www.codedex.io/blog/codedex-github-edu" }
    ],
    tasks: [
      "Try one mini task from three different spheres.",
      "Write what felt energizing, confusing, and promising.",
      "Pick one next path instead of trying everything at once."
    ],
    ideas: [
      "Build a personal direction map after 7 days of experiments.",
      "Create a 'what fits me best' reflection board."
    ]
  },
  {
    id: "1",
    title: "Tech + AI & Data Careers",
    sphere: "T",
    focus: ["academy", "mvp"],
    summary: "Analytics, AI productivity, and ML-adjacent thinking.",
    resources: [
      { label: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
      { label: "SQLBolt", url: "https://sqlbolt.com/" },
      { label: "Tableau Training", url: "https://www.tableau.com/learn/training" }
    ],
    tasks: [
      "Build one tiny dataset and explain one insight.",
      "Compare three AI tools for one recurring workflow.",
      "Design one starter dashboard or prompt workflow."
    ],
    ideas: [
      "Personal productivity dashboard with AI-assisted summaries.",
      "Small analytics tracker for a local project, creator, or NGO."
    ]
  },
  {
    id: "2",
    title: "Tech + Code & Engineering",
    sphere: "T",
    focus: ["academy", "mvp"],
    summary: "Frontend, backend, mobile, and QA foundations.",
    resources: [
      { label: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
      { label: "React Learn", url: "https://react.dev/learn" },
      { label: "Python Tutorial", url: "https://docs.python.org/3/tutorial/index.html" }
    ],
    tasks: [
      "Choose one stack and draft a beginner build plan.",
      "Ship one small visible interface or logic feature.",
      "Open one readability or docs PR in a learning repo."
    ],
    ideas: [
      "Study buddy web app with tasks and checkpoints.",
      "Tiny portfolio builder for hub members."
    ]
  },
  {
    id: "3",
    title: "Tech + Cybersecurity & Infrastructure",
    sphere: "T",
    focus: ["academy", "mvp"],
    summary: "Cyber hygiene, cloud basics, DevOps, and system reliability.",
    resources: [
      { label: "GitHub Actions Basics", url: "https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions" },
      { label: "Docker Get Started", url: "https://docs.docker.com/get-started/" },
      { label: "AWS Account Getting Started", url: "https://docs.aws.amazon.com/accounts/latest/reference/welcome-first-time-user.html" }
    ],
    tasks: [
      "Create a personal cyber hygiene checklist.",
      "Map one app into cloud, security, and deployment layers.",
      "Explain one CI/CD flow in plain language."
    ],
    ideas: [
      "Simple security checklist site for beginners.",
      "Starter deployment template for student projects."
    ]
  },
  {
    id: "4",
    title: "Tech + Digital Product & Growth",
    sphere: "E",
    focus: ["academy", "mvp", "networking"],
    summary: "Startup, PM, validation, growth, and creator logic.",
    resources: [
      { label: "Y Combinator Library", url: "https://www.ycombinator.com/library" },
      { label: "Google SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { label: "Google Analytics Help", url: "https://support.google.com/analytics/?hl=en" }
    ],
    tasks: [
      "Turn one vague idea into a structured opportunity map.",
      "Write five useful customer interview questions.",
      "Draft one no-fluff validation sprint for an MVP."
    ],
    ideas: [
      "Validation workspace for a founder idea.",
      "Audience and message board for a small startup."
    ]
  },
  {
    id: "5",
    title: "Tech + Design & UX",
    sphere: "Bridge",
    focus: ["academy", "mvp"],
    summary: "UI/UX, web design, and product-facing clarity.",
    resources: [
      { label: "Figma Resource Library", url: "https://www.figma.com/resource-library/" },
      { label: "Material Design", url: "https://m3.material.io/" },
      { label: "The A11Y Project", url: "https://www.a11yproject.com/" }
    ],
    tasks: [
      "Redesign one cluttered user flow.",
      "Write one user journey from first click to action.",
      "Turn one MVP idea into a simple wireframe set."
    ],
    ideas: [
      "UX refresh for the hub onboarding flow.",
      "Landing page kit for a student or startup project."
    ]
  },
  {
    id: "6",
    title: "Tech + Medicine / Biology",
    sphere: "S",
    focus: ["academy", "mvp"],
    summary: "HealthTech, MedTech, BioTech, and translational thinking.",
    resources: [
      { label: "NCBI Basics", url: "https://www.ncbi.nlm.nih.gov/guide/howto/learn-basics" },
      { label: "NCBI Bioinformatics Book", url: "https://www.ncbi.nlm.nih.gov/books/NBK569562/" },
      { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/" }
    ],
    tasks: [
      "Create a plain-language glossary for 10 key terms.",
      "Map one science problem into a practical product direction.",
      "Compare three beginner resources and recommend one."
    ],
    ideas: [
      "Simple symptom or research-navigation explainer site.",
      "Bioinformatics resource dashboard for beginners."
    ]
  },
  {
    id: "7",
    title: "Tech + Green / Sustainability",
    sphere: "S",
    focus: ["academy", "mvp"],
    summary: "Climate, ecology, sustainability, and impact systems.",
    resources: [
      { label: "IPCC Reports", url: "https://www.ipcc.ch/reports/" },
      { label: "UNEP Climate Action", url: "https://www.unep.org/explore-topics/climate-action" },
      { label: "AWS Sustainability", url: "https://docs.aws.amazon.com/sustainability/latest/userguide/getting-started.html" }
    ],
    tasks: [
      "Map one sustainability problem into actors and interventions.",
      "Write one practical entry guide for a newcomer.",
      "Frame one climate idea as S, S+E, or S+E+T."
    ],
    ideas: [
      "Carbon or habit tracking dashboard for a small group.",
      "Climate resource map for local communities."
    ]
  },
  {
    id: "8",
    title: "Tech + AgTech & Food Security",
    sphere: "S",
    focus: ["academy", "mvp"],
    summary: "AgTech, food systems, agri-data, and practical impact work.",
    resources: [
      { label: "FAO Food Safety", url: "https://www.fao.org/food-safety/en/" },
      { label: "FAO Main Site", url: "https://www.fao.org/" },
      { label: "CGIAR", url: "https://www.cgiar.org/" }
    ],
    tasks: [
      "Compare AgriTech, FoodTech, and agri-data in one note.",
      "Draft one simple project brief for a learner team.",
      "Create a checklist for evaluating an agri problem."
    ],
    ideas: [
      "Simple crop or food security information dashboard.",
      "Urban farming knowledge tracker for local use."
    ]
  },
  {
    id: "9",
    title: "Tech + MilTech & Dual-Use",
    sphere: "Bridge",
    focus: ["academy", "mvp"],
    summary: "Defense-adjacent engineering, logistics, safety, and dual-use ideas.",
    resources: [
      { label: "FAA UAS Getting Started", url: "https://www.faa.gov/uas/getting_started" },
      { label: "NASA Aeronautics", url: "https://www.nasa.gov/aeronautics/" },
      { label: "CISA Cyber Guidance", url: "https://www.cisa.gov/" }
    ],
    tasks: [
      "Map one dual-use problem into domain, venture, and technical layers.",
      "Write a starter explainer for one defense-adjacent technology.",
      "Frame one safe beginner research question in this space."
    ],
    ideas: [
      "Logistics and field-readiness checklist app.",
      "Safe dual-use resource board for awareness and planning."
    ]
  },
  {
    id: "10",
    title: "Tech + HardTech & Industry 4.0",
    sphere: "Bridge",
    focus: ["academy", "mvp"],
    summary: "Robotics, prototyping, manufacturing, and atom-world systems.",
    resources: [
      { label: "Arduino Docs", url: "https://docs.arduino.cc/" },
      { label: "ROS 2 Docs", url: "https://docs.ros.org/en/rolling/index.html" },
      { label: "Prusa Knowledge Base", url: "https://help.prusa3d.com/" }
    ],
    tasks: [
      "Compare software MVP vs hardware MVP constraints.",
      "Create a 3-stage prototype plan for one hardtech idea.",
      "Map what belongs to S, E, and T in one industry case."
    ],
    ideas: [
      "Prototype tracker for hardware iterations.",
      "Industry 4.0 starter map for a student team."
    ]
  },
  {
    id: "11",
    title: "Tech + ChemTech & Materials",
    sphere: "S",
    focus: ["academy", "mvp"],
    summary: "Energy storage, materials, and chemistry-facing innovation.",
    resources: [
      { label: "Materials Project", url: "https://next-gen.materialsproject.org/" },
      { label: "MIT OCW Solid State Chemistry", url: "https://ocw.mit.edu/courses/3-091sc-introduction-to-solid-state-chemistry-fall-2010/" },
      { label: "US DOE Energy Storage", url: "https://www.energy.gov/eere/vehicles/electric-vehicle-batteries" }
    ],
    tasks: [
      "Write one beginner overview of a materials direction.",
      "Map one materials problem to a venture use case.",
      "Create a resource ladder: first, next, deep dive."
    ],
    ideas: [
      "Energy storage explainer board for non-specialists.",
      "Materials discovery resource navigator."
    ]
  },
  {
    id: "12",
    title: "NonTech + General Development",
    sphere: "Bridge",
    focus: ["academy"],
    summary: "Logic, learning foundations, and personal systems.",
    resources: [
      { label: "Khan Academy Math", url: "https://www.khanacademy.org/math" },
      { label: "Learning How to Learn", url: "https://www.coursera.org/learn/learning-how-to-learn" },
      { label: "Deep Work Summary", url: "https://www.calnewport.com/books/deep-work/" }
    ],
    tasks: [
      "Create a 7-day focus and study reset.",
      "Summarize one learning strategy in plain language.",
      "Build one practical anti-chaos checklist."
    ],
    ideas: [
      "Personal learning operating system dashboard.",
      "Beginner study rhythm planner."
    ]
  },
  {
    id: "13",
    title: "NonTech + General Language Learning",
    sphere: "Bridge",
    focus: ["academy", "networking"],
    summary: "Language habits, comprehension, and communication growth.",
    resources: [
      { label: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish" },
      { label: "Cambridge Dictionary", url: "https://dictionary.cambridge.org/" },
      { label: "Language Reactor", url: "https://www.languagereactor.com/" }
    ],
    tasks: [
      "Create a weekly language practice rhythm.",
      "Compare active vs passive language learning.",
      "Design one learn-in-public language micro-challenge."
    ],
    ideas: [
      "Language accountability board for a small community.",
      "Vocabulary tracker with contextual examples."
    ]
  },
  {
    id: "14",
    title: "NonTech + People-Intensive (Human Factor)",
    sphere: "Bridge",
    focus: ["academy", "networking", "mvp"],
    summary: "Leadership, resilience, coaching, and human systems.",
    resources: [
      { label: "Atlassian Team Playbook", url: "https://www.atlassian.com/team-playbook" },
      { label: "Google re:Work", url: "https://rework.withgoogle.com/" },
      { label: "Center for Creative Leadership", url: "https://www.ccl.org/articles/leading-effectively-articles/" }
    ],
    tasks: [
      "Write one team communication protocol for a small project.",
      "Create a burnout-prevention checklist for a sprint.",
      "Draft one workshop or teaching outline from your knowledge."
    ],
    ideas: [
      "Team health check dashboard for small groups.",
      "Micro-coaching toolkit for peer support circles."
    ]
  }
];

const raceCards = [
  {
    title: "T1 / Analytics Sprint",
    prompt: "Blue runs 4 cells per turn for 3 turns. Gold runs 5 cells per turn for 2 turns. Green runs 3 cells per turn for 4 turns. Coral runs 6 cells per turn for 1 turn. Which horse wins?",
    horses: [
      { id: "blue", label: "Blue", distance: 12 },
      { id: "gold", label: "Gold", distance: 10 },
      { id: "green", label: "Green", distance: 12 },
      { id: "coral", label: "Coral", distance: 6 }
    ],
    answer: "blue",
    explanation: "Blue and Green tie at 12, but Blue reaches the practical finish pace earlier in the sprint logic."
  },
  {
    title: "E2 / Validation Race",
    prompt: "Purple gets 3 valid responses per day for 4 days. Amber gets 5 valid responses per day for 2 days. Teal gets 2 valid responses per day for 5 days. Rose gets 4 valid responses per day for 3 days. Who gets the strongest result?",
    horses: [
      { id: "purple", label: "Purple", distance: 12 },
      { id: "amber", label: "Amber", distance: 10 },
      { id: "teal", label: "Teal", distance: 10 },
      { id: "rose", label: "Rose", distance: 12 }
    ],
    answer: "rose",
    explanation: "Purple and Rose both reach 12, but Rose does it in fewer rounds, so it wins the sprint."
  },
  {
    title: "S2 / Climate Track",
    prompt: "Mint saves 8 units once. Sun saves 3 units over 3 rounds. Indigo saves 2 units over 5 rounds. Scarlet saves 4 units over 2 rounds. Which outcome is strongest?",
    horses: [
      { id: "mint", label: "Mint", distance: 8 },
      { id: "sun", label: "Sun", distance: 9 },
      { id: "indigo", label: "Indigo", distance: 10 },
      { id: "scarlet", label: "Scarlet", distance: 8 }
    ],
    answer: "indigo",
    explanation: "Indigo reaches the largest total effect at 10."
  }
];

const directionGrid = document.getElementById("directionGrid");
const sphereFilter = document.getElementById("sphereFilter");
const focusFilter = document.getElementById("focusFilter");
const simulatorCard = document.getElementById("simulatorCard");
const horsePicker = document.getElementById("horsePicker");
const trackList = document.getElementById("trackList");
const raceButton = document.getElementById("raceButton");
const nextCardButton = document.getElementById("nextCardButton");
const simulatorResult = document.getElementById("simulatorResult");

let selectedHorse = null;
let cardIndex = 0;

function renderDirections() {
  const sphereValue = sphereFilter.value;
  const focusValue = focusFilter.value;

  const filtered = directions.filter((direction) => {
    const sphereMatch = sphereValue === "all" || direction.sphere === sphereValue;
    const focusMatch = focusValue === "all" || direction.focus.includes(focusValue);
    return sphereMatch && focusMatch;
  });

  directionGrid.innerHTML = filtered
    .map((direction) => {
      const surface = getSurface(direction.sphere);
      return `
        <article class="direction-card">
          <div class="direction-topline">
            <span class="chip chip-${direction.sphere.toLowerCase()}">${direction.sphere}</span>
            <span class="chip subtle">${direction.focus.join(" / ")}</span>
          </div>
          <h3>${direction.title}</h3>
          <p>${direction.summary}</p>
          <p class="card-meta">
            Best shared surface:
            <a href="${surface.url}" target="_blank" rel="noreferrer">${surface.label}</a>
          </p>
          <details open>
            <summary>Starter resources</summary>
            <ul class="resource-list">
              ${direction.resources
                .map((resource) => `<li><a href="${resource.url}" target="_blank" rel="noreferrer">${resource.label}</a></li>`)
                .join("")}
            </ul>
          </details>
          <details>
            <summary>Practice tasks</summary>
            <ul>
              ${direction.tasks.map((task) => `<li>${task}</li>`).join("")}
            </ul>
          </details>
          <details>
            <summary>MVP ideas</summary>
            <ul>
              ${direction.ideas.map((idea) => `<li>${idea}</li>`).join("")}
            </ul>
          </details>
          <div class="card-actions">
            <a href="${surface.url}" target="_blank" rel="noreferrer">Open Repo Surface</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function getSurface(sphere) {
  switch (sphere) {
    case "S":
      return {
        label: "SPHERE-I-SCIENCE",
        url: "https://github.com/K-Mentorship-Hub/SPHERE-I-SCIENCE"
      };
    case "E":
      return {
        label: "SPHERE-II-ENTREPRENEURSHIP",
        url: "https://github.com/K-Mentorship-Hub/SPHERE-II-ENTREPRENEURSHIP"
      };
    case "T":
      return {
        label: "SPHERE-III-TECHNOLOGY",
        url: "https://github.com/K-Mentorship-Hub/SPHERE-III-TECHNOLOGY"
      };
    default:
      return {
        label: "K-Mentorship-Hub",
        url: "https://github.com/K-Mentorship-Hub/K-Mentorship-Hub"
      };
  }
}

function renderCard() {
  const card = raceCards[cardIndex];
  selectedHorse = null;
  simulatorResult.textContent = "";

  simulatorCard.innerHTML = `
    <p class="eyebrow">${card.title}</p>
    <h3>Race Question</h3>
    <p>${card.prompt}</p>
  `;

  horsePicker.innerHTML = card.horses
    .map(
      (horse) => `
        <button class="horse-option" data-horse="${horse.id}" type="button">
          <span class="horse-dot horse-${horse.id}"></span>
          ${horse.label}
        </button>
      `
    )
    .join("");

  trackList.innerHTML = card.horses
    .map(
      (horse) => `
        <div class="track-row">
          <div class="track-label"><span class="horse-dot horse-${horse.id}"></span>${horse.label}</div>
          <div class="track">
            <div class="runner horse-${horse.id}" id="runner-${horse.id}"></div>
          </div>
        </div>
      `
    )
    .join("");

  document.querySelectorAll(".horse-option").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".horse-option").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      selectedHorse = button.dataset.horse;
    });
  });
}

function runRace() {
  const card = raceCards[cardIndex];
  if (!selectedHorse) {
    simulatorResult.textContent = "Pick one horse first.";
    return;
  }

  const maxDistance = Math.max(...card.horses.map((horse) => horse.distance));
  card.horses.forEach((horse) => {
    const runner = document.getElementById(`runner-${horse.id}`);
    const progress = (horse.distance / maxDistance) * 100;
    runner.style.width = `${Math.max(progress, 12)}%`;
  });

  if (selectedHorse === card.answer) {
    simulatorResult.textContent = `Correct. ${card.explanation}`;
  } else {
    const winner = card.horses.find((horse) => horse.id === card.answer);
    simulatorResult.textContent = `Not this round. ${winner.label} wins. ${card.explanation}`;
  }
}

sphereFilter.addEventListener("change", renderDirections);
focusFilter.addEventListener("change", renderDirections);
raceButton.addEventListener("click", runRace);
nextCardButton.addEventListener("click", () => {
  cardIndex = (cardIndex + 1) % raceCards.length;
  renderCard();
});

renderDirections();
renderCard();
