const projects = [
  {
    title: "ZOOP",
    subtitle: "AI 기반 부동산 매물 추천 플랫폼",
    categories: ["featured", "backend", "infra", "product", "ai"],
    icon: "home",
    url: "https://github.com/FC-DEV3-Final-Project/zoop-frontend",
    source: "PDF · FC-DEV3-Final-Project",
    summary:
      "RFP 분석을 바탕으로 자연어 매물 탐색, 리뷰/커뮤니티, 지도 기반 탐색을 제공하는 팀 서비스입니다.",
    role:
      "EC2 성능 업그레이드, self-hosted GitHub Actions Runner, Docker Compose 통합 배포, Nginx SSL 리버스 프록시와 헬스체크 기반 배포 흐름을 맡았습니다.",
    impact: [
      "GitHub Actions 과금 문제를 self-hosted runner 구성으로 우회",
      "Secrets 관리, 디스크 자동 정리, 무중단 배포 흐름까지 운영 이슈를 정리",
      "RFP 요구사항을 실제 서비스 수준의 배포 구조로 연결"
    ],
    tags: ["Spring Boot 3", "MySQL", "Docker", "EC2", "Nginx", "GitHub Actions", "S3"]
  },
  {
    title: "BookVillage Security Lab",
    subtitle: "웹·모바일·클라우드 통합 모의해킹 프로젝트",
    categories: ["featured", "security", "backend", "product", "infra"],
    icon: "shield-alert",
    url: "https://github.com/SecuR00T/book-back",
    source: "PDF · SecuR00T local clone",
    summary:
      "Spring Boot, React, Android, AWS 기반 실습 환경을 직접 만들고 취약점 주입과 공격 재현 흐름을 통제된 학습 형태로 설계했습니다.",
    role:
      "웹 21개, 앱 23개 기능의 취약점 발생 구조를 설계하고, 모바일 리패키징·코드 변조 기반 공격 시나리오까지 구성했습니다.",
    impact: [
      "XSS, SQL Injection, 파일 업로드, IDOR 등 요청 변조와 권한 상승 흐름 재현",
      "Burp Suite와 OWASP ZAP 기반 분석 및 패킷 변조 경험 확보",
      "백엔드에 안전한 시뮬레이션 응답과 감사 로그 구조를 함께 설계"
    ],
    tags: ["Spring Boot", "React", "Android", "AWS EC2", "S3", "Burp Suite", "OWASP ZAP"]
  },
  {
    title: "TrustRide",
    subtitle: "중고차 거래 웹사이트",
    categories: ["featured", "backend", "product"],
    icon: "car-front",
    url: "https://github.com/TrustRide/TrustRide",
    source: "PDF · TrustRide org",
    summary:
      "차량 등록, 검색, 필터링, 이미지 업로드, 사용자 프로필과 거래 흐름을 갖춘 Spring MVC 기반 중고차 거래 서비스입니다.",
    role:
      "웹 서비스 설계, 백엔드·프론트엔드 구현, MySQL 데이터 모델 설계, 사용자 인증과 데이터 접근 제어 로직을 담당했습니다.",
    impact: [
      "Spring MVC 요청 흐름과 JSP 화면 구성을 서비스 단위로 구현",
      "차량·사용자 데이터 구조를 설계하고 등록/조회/필터링 기능 개발",
      "입력값 처리와 인증 흐름에서 발생할 수 있는 취약점 지점을 함께 파악"
    ],
    tags: ["Java 11", "Spring MVC", "JSP", "MySQL", "AWS EC2", "S3"]
  },
  {
    title: "TrustRide AI",
    subtitle: "AI 기반 자동차 서비스 통합 시스템",
    categories: ["featured", "ai", "backend", "product"],
    icon: "brain-circuit",
    url: "https://github.com/TrustRide/TrustRide_AI",
    source: "PDF · TrustRide org",
    summary:
      "광고 문구 생성, 약관 Q&A 챗봇, 시세 비교, 자동차 뉴스 요약·추천을 하나의 FastAPI 서버로 묶은 AI 서비스입니다.",
    role:
      "LangChain 기반 LLM 연동, ChromaDB 벡터 저장소 구성, JSON 응답 포맷 설계, Swagger UI 기반 API 문서화를 진행했습니다.",
    impact: [
      "차량 정보 기반 광고 문구 생성과 사용자 질문 응답 API 구현",
      "사용자 제시 가격과 외부 시세 데이터를 비교하는 응답 로직 설계",
      "유사 뉴스 검색과 요약 기능을 통해 복합 AI 기능을 서비스 API로 통합"
    ],
    tags: ["Python", "FastAPI", "LangChain", "ChromaDB", "PyTorch", "LightGBM", "Swagger"]
  },
  {
    title: "Linux Security Audit Reporter",
    subtitle: "리눅스 서버 취약점 자동 점검 시스템",
    categories: ["featured", "security", "infra", "data"],
    icon: "square-terminal",
    url: "",
    source: "Portfolio PDF",
    summary:
      "주요정보통신기반시설 취약점 점검 가이드를 기준으로 서버 보안 상태를 수집하고 자동 리포트를 생성하는 점검 도구입니다.",
    role:
      "계정, 파일 권한, 서비스 영역의 점검 로직을 설계하고 Shell 명령어와 Python을 결합해 자동화했습니다.",
    impact: [
      "수작업 점검 과정을 JSON, Excel, PDF 리포트 생성 흐름으로 자동화",
      "Linux 명령어 기반 시스템 정보 수집과 보안 상태 판정 로직 구현",
      "실무형 점검 프로세스와 리포팅 자동화 경험 확보"
    ],
    tags: ["Python", "Linux", "Shell Script", "JSON", "Excel", "PDF"]
  },
  {
    title: "OWASP Top 10 Analysis",
    subtitle: "웹 취약점 분석 및 공격 재현 프로젝트",
    categories: ["security", "backend"],
    icon: "bug",
    url: "",
    source: "Portfolio PDF",
    summary:
      "Spring Boot/MySQL 서비스에서 발생 가능한 웹 취약점을 OWASP Top 10 기준으로 분석하고 재현한 보안 프로젝트입니다.",
    role:
      "IDOR, Stored XSS, 파일 업로드 취약점 등 입력값 검증 미흡 구간을 중심으로 공격 시나리오를 설계했습니다.",
    impact: [
      "Burp Suite 기반 HTTP 요청 인터셉트와 패킷 변조 수행",
      "취약점별 공격 흐름과 영향도를 정리해 방어 관점까지 학습",
      "실제 서비스 환경에서 발생할 수 있는 보안 위협 대응 감각 강화"
    ],
    tags: ["Spring Boot", "MySQL", "Burp Suite", "OWASP ZAP", "IDOR", "XSS"]
  },
  {
    title: "Insurance Recommendation Model",
    subtitle: "클러스터링 기반 맞춤형 보험 추천",
    categories: ["ai", "data", "product"],
    icon: "chart-scatter",
    url: "https://github.com/InsuranceSystem",
    source: "PDF · InsuranceSystem org",
    summary:
      "보험 상품과 고객 특성 데이터를 전처리하고 클러스터링 알고리즘을 비교해 사용자 맞춤 추천 기준을 만든 데이터 프로젝트입니다.",
    role:
      "데이터 정제·정규화, DBSCAN/K-Means/Fuzzy Clustering 적용, 성능 비교와 시각화를 담당했습니다.",
    impact: [
      "고객 그룹별 추천 기준을 모델별로 비교 분석",
      "시각화 결과를 바탕으로 보험 옵션 분류 흐름 설계",
      "데이터 기반 개인화 서비스 설계 경험 확보"
    ],
    tags: ["Python", "Pandas", "NumPy", "DBSCAN", "K-Means", "Fuzzy", "Matplotlib"]
  },
  {
    title: "Insurance Claim System",
    subtitle: "분산 구조 기반 보험사 손해 사정 시스템",
    categories: ["backend", "product"],
    icon: "network",
    url: "https://github.com/InsuranceSystem/InsuranceSystem2",
    source: "PDF · InsuranceSystem org",
    summary:
      "보험 고객, 계약, 보상청구 기능을 모듈화하고 Java RMI로 서버-클라이언트 통신을 구현한 분산 시스템 프로젝트입니다.",
    role:
      "분산 시스템 설계, Java RMI 통신 구현, MySQL 저장·조회 구조 설계, Enterprise Architect 기반 다이어그램 작성을 맡았습니다.",
    impact: [
      "기능별 서버 모듈화를 통해 확장성과 유지보수성을 실습",
      "데이터 흐름을 고려한 저장·조회 기능 구현",
      "클래스 다이어그램과 시스템 흐름도로 설계 의사결정을 문서화"
    ],
    tags: ["Java", "RMI", "MySQL", "Enterprise Architect"]
  },
  {
    title: "MSA Delivery Service",
    subtitle: "마이크로서비스 아키텍처 기반 배달 서비스",
    categories: ["backend", "infra"],
    icon: "boxes",
    url: "",
    source: "Portfolio PDF",
    summary:
      "기능별 독립 서비스를 설계하고 Kafka 기반 비동기 통신, Docker 컨테이너화, Jenkins 배포 흐름을 구성한 MSA 프로젝트입니다.",
    role:
      "백엔드 개발, 시스템 아키텍처 설계, Eureka 서비스 디스커버리와 Kafka 메시지 큐 구성을 담당했습니다.",
    impact: [
      "서비스 간 독립성과 확장성을 고려한 분산 구조 설계",
      "비동기 데이터 처리 흐름을 실제 서비스 모듈에 적용",
      "Docker와 Jenkins를 이용한 자동 배포 환경 구성"
    ],
    tags: ["Spring Boot", "Kafka", "Docker", "Eureka", "Jenkins"]
  },
  {
    title: "Information Security Engineer CBT",
    subtitle: "정보보안기사 학습용 CBT 도구",
    categories: ["security", "product"],
    icon: "shield-question",
    url: "https://github.com/jungyeons/information-security-engineer-cbt",
    source: "Personal repo",
    summary:
      "자격증 학습을 문제 풀이와 반복 복습 흐름으로 바꾼 정적 학습 도구입니다.",
    role:
      "문제 데이터 정리, 풀이 흐름, 검색과 반복 학습 UX를 구성해 실사용 가능한 도구로 만들었습니다.",
    impact: [
      "보안 지식 학습을 웹 도구 형태로 구조화",
      "정적 배포가 가능한 가벼운 학습 환경 구성",
      "개인 학습 기록을 재사용 가능한 프로젝트로 전환"
    ],
    tags: ["Security", "CBT", "Study Tool", "Static Web"]
  },
  {
    title: "DdayPalette",
    subtitle: "일정과 디데이를 관리하는 생산성 앱",
    categories: ["product"],
    icon: "calendar-clock",
    url: "https://github.com/jungyeons/DdayPalette",
    source: "Personal repo",
    summary:
      "날짜와 이벤트를 관리하는 개인 생산성 프로젝트로, 작은 문제를 사용 가능한 화면과 흐름으로 완성한 작업입니다.",
    role:
      "일정 관리 UI, 상태 흐름, 사용자에게 필요한 핵심 정보의 우선순위를 정리했습니다.",
    impact: [
      "개인 워크플로를 서비스 화면으로 구체화",
      "사용자가 반복해서 확인하는 날짜 정보를 간결하게 배치",
      "작은 도구라도 끝까지 다듬는 제품화 감각을 보여줌"
    ],
    tags: ["Productivity", "Frontend", "UX"]
  }
];

const pitch =
  "배정연은 Java/Spring 백엔드를 중심으로 서비스 구현, 보안 취약점 분석, EC2·Docker·GitHub Actions 기반 배포까지 연결해 보는 개발자입니다.";

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
    const matchesFilter = activeFilter === "all" || project.categories.includes(activeFilter);
    const searchableText = normalize(
      [
        project.title,
        project.subtitle,
        project.summary,
        project.role,
        project.source,
        project.impact.join(" "),
        project.tags.join(" ")
      ].join(" ")
    );
    return matchesFilter && (!query || searchableText.includes(query));
  });
}

function renderProjectLink(project) {
  if (!project.url) {
    return "";
  }

  return `
    <a class="repo-link" href="${project.url}" target="_blank" rel="noreferrer" aria-label="${project.title} 근거 저장소 열기">
      <i data-lucide="external-link" aria-hidden="true"></i>
    </a>
  `;
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
        <article class="project-card" data-categories="${project.categories.join(" ")}">
          <div class="project-topline">
            <span class="project-icon">
              <i data-lucide="${project.icon}" aria-hidden="true"></i>
            </span>
            ${renderProjectLink(project)}
          </div>
          <div class="project-body">
            <p class="project-source">${project.source}</p>
            <h3>${project.title}</h3>
            <p class="project-subtitle">${project.subtitle}</p>
            <p>${project.summary}</p>
            <p class="role"><strong>담당</strong> ${project.role}</p>
            <ul class="impact-list">
              ${project.impact.map((item) => `<li>${item}</li>`).join("")}
            </ul>
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
