const projects = [
  {
    title: "TrustRide",
    category: "product",
    icon: "car-front",
    url: "https://github.com/jungyeons/TrustRide",
    summary:
      "차량 거래/이동 맥락의 팀 프로젝트로, 기획부터 구현까지 서비스 단위 사고를 보여주기 좋은 대표 프로젝트입니다.",
    proof: "대용량 코드베이스, 화면/기능 흐름, 협업 흔적",
    tags: ["Full-stack", "Product", "Team"]
  },
  {
    title: "TrustRide AI",
    category: "data",
    icon: "brain-circuit",
    url: "https://github.com/jungyeons/TrustRide_AI",
    summary:
      "TrustRide의 AI 영역을 분리한 저장소입니다. 데이터 처리와 모델 활용 가능성을 보여주는 보조 포트폴리오로 좋습니다.",
    proof: "Python 기반 AI/데이터 실험",
    tags: ["Python", "AI", "Data"]
  },
  {
    title: "정보처리기사 CBT",
    category: "security",
    icon: "shield-question",
    url: "https://github.com/jungyeons/information-security-engineer-cbt",
    summary:
      "자격증 학습을 문제 풀이와 오답 관리 흐름으로 바꾼 실사용 학습 도구입니다.",
    proof: "반복 학습 UX, 정적 배포, 데이터 정리",
    tags: ["Security", "CBT", "Study tool"]
  },
  {
    title: "DdayPalette",
    category: "product",
    icon: "calendar-clock",
    url: "https://github.com/jungyeons/DdayPalette",
    summary:
      "날짜와 이벤트를 관리하는 생산성 앱입니다. 작은 문제를 제품화하는 감각을 보여주기 좋습니다.",
    proof: "개인 워크플로 개선, UI 정리, 최근 커밋",
    tags: ["Frontend", "Productivity", "UX"]
  },
  {
    title: "Mass Processing with MySQL",
    category: "data",
    icon: "database-zap",
    url: "https://github.com/jungyeons/Mass-processing-with-mysql",
    summary:
      "MySQL 대량 처리와 성능 관점을 학습한 저장소입니다. 백엔드 면접에서 DB 관심도를 설명하기 좋습니다.",
    proof: "MySQL, 쿼리, 성능 관찰",
    tags: ["MySQL", "Indexing", "Performance"]
  },
  {
    title: "SpringBootCuriosityLog",
    category: "backend",
    icon: "leaf",
    url: "https://github.com/jungyeons/SpringBootCuriosityLog",
    summary:
      "Spring Boot를 공부하며 생긴 질문과 실험을 기록한 저장소입니다. 꾸준한 학습 습관을 보여줍니다.",
    proof: "Spring Boot 학습 기록",
    tags: ["Spring Boot", "Java", "Learning"]
  },
  {
    title: "JPA Shop",
    category: "backend",
    icon: "shopping-bag",
    url: "https://github.com/jungyeons/JPA_Shop",
    summary:
      "JPA 도메인 관계와 영속성 모델링을 다룬 백엔드 프로젝트입니다.",
    proof: "JPA, 엔티티 설계, 도메인 모델",
    tags: ["JPA", "Spring", "Domain model"]
  },
  {
    title: "SQL Curiosity Log",
    category: "data",
    icon: "table-2",
    url: "https://github.com/jungyeons/SQLCuriosityLog",
    summary:
      "SQL 학습과 궁금증을 정리한 저장소입니다. 데이터베이스 기본기를 보완하는 자료로 쓸 수 있습니다.",
    proof: "SQL 문법, 개념 정리, 면접 대비",
    tags: ["SQL", "Database", "Notes"]
  },
  {
    title: "Git Command Summary",
    category: "backend",
    icon: "git-branch",
    url: "https://github.com/jungyeons/Git_command_summary",
    summary:
      "Git 명령어를 정리한 저장소입니다. 협업 도구를 꾸준히 정리하고 체득하는 습관을 보여줍니다.",
    proof: "Git 기본기와 문서화",
    tags: ["Git", "Docs", "Workflow"]
  }
];

const pitch =
  "배정연은 Java/Spring 기반 백엔드와 데이터베이스를 중심으로 서비스를 만들고, 보안 관점의 취약점 분석과 실전형 학습 도구까지 함께 쌓아가는 개발자입니다.";

const projectGrid = document.querySelector("#projectGrid");
const projectCount = document.querySelector("#projectCount");
const projectSearch = document.querySelector("#projectSearch");
const filterButtons = [...document.querySelectorAll(".filter")];
const copyPitchButton = document.querySelector("#copyPitch");
const toast = document.querySelector("#toast");

let activeFilter = "all";
let searchTerm = "";

function normalize(value) {
  return value.toLowerCase().trim();
}

function getVisibleProjects() {
  const query = normalize(searchTerm);

  return projects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter;
    const searchableText = normalize(
      [project.title, project.summary, project.proof, project.tags.join(" ")].join(" ")
    );
    return matchesFilter && (!query || searchableText.includes(query));
  });
}

function renderProjects() {
  const visibleProjects = getVisibleProjects();

  projectCount.textContent = `${projects.length}개 중 ${visibleProjects.length}개 표시`;

  if (visibleProjects.length === 0) {
    projectGrid.innerHTML = `
      <article class="empty-state">
        <i data-lucide="search-x" aria-hidden="true"></i>
        <h3>검색 결과가 없습니다</h3>
        <p>다른 키워드나 필터를 선택해보세요.</p>
      </article>
    `;
    refreshIcons();
    return;
  }

  projectGrid.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card" data-category="${project.category}">
          <div class="project-topline">
            <span class="project-icon">
              <i data-lucide="${project.icon}" aria-hidden="true"></i>
            </span>
            <a class="repo-link" href="${project.url}" target="_blank" rel="noreferrer" aria-label="${project.title} 저장소 열기">
              <i data-lucide="external-link" aria-hidden="true"></i>
            </a>
          </div>
          <div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <p class="proof"><strong>어필 포인트</strong> ${project.proof}</p>
          </div>
          <div class="tag-list" aria-label="${project.title} 태그">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  refreshIcons();
}

function refreshIcons() {
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
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderProjects();
  });
});

projectSearch.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderProjects();
});

copyPitchButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(pitch);
    showToast("소개 문구를 복사했습니다.");
  } catch {
    showToast("이 브라우저에서는 복사가 제한됩니다.");
  }
});

renderProjects();

window.addEventListener("load", refreshIcons);
