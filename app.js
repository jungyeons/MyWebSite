const projects = [
  {
    title: "TrustRide",
    category: "product",
    icon: "car-front",
    url: "https://github.com/jungyeons/TrustRide",
    summary:
      "A large product project that signals end-to-end application thinking across planning, implementation, and supporting systems.",
    tags: ["Full-stack", "Product", "Team"]
  },
  {
    title: "TrustRide AI",
    category: "data",
    icon: "brain-circuit",
    url: "https://github.com/jungyeons/TrustRide_AI",
    summary:
      "AI-side companion work for TrustRide, useful for showing data modeling and applied Python/ML curiosity.",
    tags: ["Python", "AI", "Data"]
  },
  {
    title: "Information Security Engineer CBT",
    category: "security",
    icon: "shield-question",
    url: "https://github.com/jungyeons/information-security-engineer-cbt",
    summary:
      "A focused study tool that turns certification preparation into repeatable practice and review workflows.",
    tags: ["Security", "CBT", "Study tool"]
  },
  {
    title: "DdayPalette",
    category: "product",
    icon: "calendar-clock",
    url: "https://github.com/jungyeons/DdayPalette",
    summary:
      "A compact productivity app that combines date tracking with a cleaner personal workflow interface.",
    tags: ["Frontend", "Productivity", "UX"]
  },
  {
    title: "Mass Processing with MySQL",
    category: "data",
    icon: "database-zap",
    url: "https://github.com/jungyeons/Mass-processing-with-mysql",
    summary:
      "Database practice focused on scale, query behavior, and the kind of details that matter in backend systems.",
    tags: ["MySQL", "Indexing", "Performance"]
  },
  {
    title: "Spring Boot Curiosity Log",
    category: "backend",
    icon: "leaf",
    url: "https://github.com/jungyeons/SpringBootCuriosityLog",
    summary:
      "A learning repository that shows steady Spring Boot exploration and the habit of documenting technical questions.",
    tags: ["Spring Boot", "Java", "Learning"]
  },
  {
    title: "JPA Shop",
    category: "backend",
    icon: "shopping-bag",
    url: "https://github.com/jungyeons/JPA_Shop",
    summary:
      "A practical JPA project for persistence modeling, domain relationships, and backend application structure.",
    tags: ["JPA", "Spring", "Domain model"]
  },
  {
    title: "Car Ad Scribe",
    category: "product",
    icon: "file-pen-line",
    url: "https://github.com/jungyeons/car-ad-scribe",
    summary:
      "A product-oriented writing tool that connects automation, usability, and a clear target workflow.",
    tags: ["Automation", "Writing", "Private"]
  },
  {
    title: "SQL Curiosity Log",
    category: "data",
    icon: "table-2",
    url: "https://github.com/jungyeons/SQLCuriosityLog",
    summary:
      "A compact record of SQL practice that supports database interview readiness and query fluency.",
    tags: ["SQL", "Database", "Notes"]
  }
];

const pitch =
  "Bae JungYeon is a full-stack developer focused on Java/Spring backend systems, databases, and practical security. Their GitHub shows steady work across product projects, certification tools, JPA/MySQL practice, and security-minded engineering.";

const projectGrid = document.querySelector("#projectGrid");
const filterButtons = [...document.querySelectorAll(".filter")];
const copyPitchButton = document.querySelector("#copyPitch");
const toast = document.querySelector("#toast");

function renderProjects(filter = "all") {
  const visibleProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  projectGrid.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card" data-category="${project.category}">
          <div class="project-topline">
            <span class="project-icon">
              <i data-lucide="${project.icon}" aria-hidden="true"></i>
            </span>
            <a class="repo-link" href="${project.url}" target="_blank" rel="noreferrer" aria-label="${project.title} repository">
              <i data-lucide="external-link" aria-hidden="true"></i>
            </a>
          </div>
          <div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
          </div>
          <div class="tag-list" aria-label="${project.title} tags">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderProjects(filter);
  });
});

copyPitchButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(pitch);
    showToast("Intro copied.");
  } catch {
    showToast("Copy unavailable in this browser.");
  }
});

renderProjects();

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
