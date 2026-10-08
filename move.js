const pageTitle = document.querySelector("#pageTitle");
const pageContent = document.querySelector("#pageContent");
const closeWindow = document.querySelector("#closeWindow");
const hotspots = document.querySelectorAll(".hotspot");

const homeTitle = "안녕하세요!";
const homeContent = `
  <h2>신입 프론트엔드 개발자 000입니다.</h2>
  <p>
    좋아하는 것을 꾸준히 공부하며,<br />
    하나씩 만들어가는 개발자가 되고 싶습니다.
  </p>

  <div class="profile-list">
    <p><strong>이름</strong><span>000</span></p>
    <p><strong>분야</strong><span>Frontend Developer</span></p>
    <p><strong>관심 분야</strong><span>웹 개발, UI/UX, 인터랙션</span></p>
    <p><strong>한마디</strong><span>꾸준히 공부하고 즐겁게 개발하고 싶습니다.</span></p>
  </div>
`;

const pages = {
  career: {
    title: "경력 및 활동",
    content: `
      <div class="timeline">
        <div class="info-card">
          <strong>Frontend Study</strong>
          <p>HTML, CSS, JavaScript를 중심으로 프론트엔드를 공부하고 있습니다.</p>
        </div>
        <div class="info-card">
          <strong>Personal Projects</strong>
          <p>개인 프로젝트 2개를 완성했습니다.</p>
        </div>
        <div class="info-card">
          <strong>Team Project</strong>
          <p>팀 프로젝트 1개를 완성했습니다.</p>
        </div>
        <div class="info-card">
          <strong>Server Team Project</strong>
          <p>서버가 있는 팀 프로젝트를 추가로 진행할 예정입니다.</p>
        </div>
      </div>
    `,
  },

  projects: {
    title: "포트폴리오",
    content: `
      <div class="project-list">
        <div class="info-card">
          <strong>Personal Project 01</strong>
          <p>개인 프로젝트</p>
          <a href="#" aria-label="개인 프로젝트 1 자세히 보기">자세히 보기 →</a>
        </div>
        <div class="info-card">
          <strong>Personal Project 02</strong>
          <p>개인 프로젝트</p>
          <a href="#" aria-label="개인 프로젝트 2 자세히 보기">자세히 보기 →</a>
        </div>
        <div class="info-card">
          <strong>Team Project</strong>
          <p>완성된 팀 프로젝트</p>
          <a href="#" aria-label="팀 프로젝트 자세히 보기">자세히 보기 →</a>
        </div>
        <div class="info-card">
          <strong>Server Team Project</strong>
          <p>서버 연동 팀 프로젝트 예정</p>
          <a href="#" aria-label="서버 팀 프로젝트 자세히 보기">자세히 보기 →</a>
        </div>
      </div>
    `,
  },

  contact: {
    title: "연락처",
    content: `
      <div class="contact-list">
        <div class="info-card">
          <strong>E-mail</strong>
          <p>example@email.com</p>
        </div>
        <div class="info-card">
          <strong>GitHub</strong>
          <p>github.com/cool-333</p>
        </div>
        <div class="info-card">
          <strong>Blog</strong>
          <p>blog.example.com</p>
        </div>
      </div>
    `,
  },
};

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    const page = pages[hotspot.dataset.page];

    pageTitle.textContent = page.title;
    pageContent.innerHTML = page.content;
    pageContent.closest(".window-content").scrollTop = 0;
    closeWindow.classList.add("is-visible");
  });
});

closeWindow.addEventListener("click", () => {
  pageTitle.textContent = homeTitle;
  pageContent.innerHTML = homeContent;
  pageContent.closest(".window-content").scrollTop = 0;
  closeWindow.classList.remove("is-visible");
});
