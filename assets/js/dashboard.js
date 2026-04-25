const directions = [
  {
    id: "g0",
    title: "Start Here: 7 Days Challenge",
    sphere: "Bridge",
    focus: ["academy", "networking"],
    summary: "A test-drive lane to taste several directions before committing.",
    tasks: [
      "Try one mini task from three different spheres.",
      "Write what felt energizing, confusing, and promising.",
      "Pick one next path instead of trying everything at once."
    ]
  },
  {
    id: "1",
    title: "Tech + AI & Data Careers",
    sphere: "T",
    focus: ["academy", "mvp"],
    summary: "Analytics, AI productivity, and ML-adjacent thinking.",
    tasks: [
      "Build one tiny dataset and explain one insight.",
      "Compare three AI tools for one recurring workflow.",
      "Design one starter dashboard or prompt workflow."
    ]
  },
  {
    id: "2",
    title: "Tech + Code & Engineering",
    sphere: "T",
    focus: ["academy", "mvp"],
    summary: "Frontend, backend, mobile, and QA foundations.",
    tasks: [
      "Choose one stack and draft a beginner build plan.",
      "Ship one small visible interface or logic feature.",
      "Open one readability or docs PR in a learning repo."
    ]
  },
  {
    id: "3",
    title: "Tech + Cybersecurity & Infrastructure",
    sphere: "T",
    focus: ["academy", "mvp"],
    summary: "Cyber hygiene, cloud basics, DevOps, and system reliability.",
    tasks: [
      "Create a personal cyber hygiene checklist.",
      "Map one app into cloud, security, and deployment layers.",
      "Explain one CI/CD flow in plain language."
    ]
  },
  {
    id: "4",
    title: "Tech + Digital Product & Growth",
    sphere: "E",
    focus: ["academy", "mvp", "networking"],
    summary: "Startup, PM, validation, growth, and creator logic.",
    tasks: [
      "Turn one vague idea into a structured opportunity map.",
      "Write five useful customer interview questions.",
      "Draft one no-fluff validation sprint for an MVP."
    ]
  },
  {
    id: "5",
    title: "Tech + Design & UX",
    sphere: "Bridge",
    focus: ["academy", "mvp"],
    summary: "UI/UX, web design, and product-facing clarity.",
    tasks: [
      "Redesign one cluttered user flow.",
      "Write one user journey from first click to action.",
      "Turn one MVP idea into a simple wireframe set."
    ]
  },
  {
    id: "6",
    title: "Tech + Medicine / Biology",
    sphere: "S",
    focus: ["academy", "mvp"],
    summary: "HealthTech, MedTech, BioTech, and translational thinking.",
    tasks: [
      "Create a plain-language glossary for 10 key terms.",
      "Map one science problem into a practical product direction.",
      "Compare three beginner resources and recommend one."
    ]
  },
  {
    id: "7",
    title: "Tech + Green / Sustainability",
    sphere: "S",
    focus: ["academy", "mvp"],
    summary: "Climate, ecology, sustainability, and impact systems.",
    tasks: [
      "Map one sustainability problem into actors and interventions.",
      "Write one practical entry guide for a newcomer.",
      "Frame one climate idea as S, S+E, or S+E+T."
    ]
  },
  {
    id: "8",
    title: "Tech + AgTech & Food Security",
    sphere: "S",
    focus: ["academy", "mvp"],
    summary: "AgTech, food systems, agri-data, and practical impact work.",
    tasks: [
      "Compare AgriTech, FoodTech, and agri-data in one note.",
      "Draft one simple project brief for a learner team.",
      "Create a checklist for evaluating an agri problem."
    ]
  },
  {
    id: "9",
    title: "Tech + MilTech & Dual-Use",
    sphere: "Bridge",
    focus: ["academy", "mvp"],
    summary: "Defense-adjacent engineering, logistics, safety, and dual-use ideas.",
    tasks: [
      "Map one dual-use problem into domain, venture, and technical layers.",
      "Write a starter explainer for one defense-adjacent technology.",
      "Frame one safe beginner research question in this space."
    ]
  },
  {
    id: "10",
    title: "Tech + HardTech & Industry 4.0",
    sphere: "Bridge",
    focus: ["academy", "mvp"],
    summary: "Robotics, prototyping, manufacturing, and atom-world systems.",
    tasks: [
      "Compare software MVP vs hardware MVP constraints.",
      "Create a 3-stage prototype plan for one hardtech idea.",
      "Map what belongs to S, E, and T in one industry case."
    ]
  },
  {
    id: "11",
    title: "Tech + ChemTech & Materials",
    sphere: "S",
    focus: ["academy", "mvp"],
    summary: "Energy storage, materials, and chemistry-facing innovation.",
    tasks: [
      "Write one beginner overview of a materials direction.",
      "Map one materials problem to a venture use case.",
      "Create a resource ladder: first / next / deep dive."
    ]
  },
  {
    id: "12",
    title: "NonTech + General Development",
    sphere: "Bridge",
    focus: ["academy"],
    summary: "Logic, learning foundations, and personal systems.",
    tasks: [
      "Create a 7-day focus and study reset.",
      "Summarize one learning strategy in plain language.",
      "Build one practical anti-chaos checklist."
    ]
  },
  {
    id: "13",
    title: "NonTech + General Language Learning",
    sphere: "Bridge",
    focus: ["academy", "networking"],
    summary: "Language habits, comprehension, and communication growth.",
    tasks: [
      "Create a weekly language practice rhythm.",
      "Compare active vs passive language learning.",
      "Design one learn-in-public language micro-challenge."
    ]
  },
  {
    id: "14",
    title: "NonTech + People-Intensive (Human Factor)",
    sphere: "Bridge",
    focus: ["academy", "networking", "mvp"],
    summary: "Leadership, resilience, coaching, and human systems.",
    tasks: [
      "Write one team communication protocol for a small project.",
      "Create a burnout-prevention checklist for a sprint.",
      "Draft one workshop or teaching outline from your knowledge."
    ]
  }
];

const raceCards = [
  {
    title: "T1 · Analytics Sprint",
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
    title: "E2 · Validation Race",
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
    title: "S2 · Climate Track",
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
    .map(
      (direction) => `
        <article class="direction-card">
          <div class="direction-topline">
            <span class="chip chip-${direction.sphere.toLowerCase()}">${direction.sphere}</span>
            <span class="chip subtle">${direction.focus.join(" / ")}</span>
          </div>
          <h3>${direction.title}</h3>
          <p>${direction.summary}</p>
          <ul>
            ${direction.tasks.map((task) => `<li>${task}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
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
