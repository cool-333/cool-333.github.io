const pageTitle = document.querySelector("#pageTitle");
const pageContent = document.querySelector("#pageContent");
const closeWindow = document.querySelector("#closeWindow");
const hotspots = document.querySelectorAll(".hotspot");

const homeTitle = "안녕하세요!";
const homeContent = `
  <h2>신입 프론트엔드 개발자 성시원입니다.</h2>
  <p>
    만들고 싶은 것을 하나씩 만들어가며,<br />
    차근차근 공부하는 개발자가 되고 싶습니다.
  </p>`;

const pages = {
  career: {
    title: "자기소개",
    content: `
      <div class="timeline">
        <div class="info-card">
          <strong>인적사항</strong>
          <p><strong>MBTI</strong> INFJ</p>
          <p><strong>생년월일</strong> 2002.06.12</p>
          <p><strong>주소지</strong> 서울 관악구 신림동</p>

        </div>
        <div class="info-card">
          <strong>학력사항</strong>
          <p><strong>18.08.27 ~ 21.02.02</strong> 전남여자상업고등학교 졸업</p>
        </div>

        </div>
        <div class="info-card">
          <strong>교육사항</strong>
          <p><strong>26.08.12 ~ 27.01.28</strong> 생성형 AI 융합 (영상제작 UI/UX) 웹개발 웹기획자 양성과정</p>
        </div>

        <div class="info-card">
          <strong>기술 스택</strong>
          <p><strong>FrontEnd</strong> HTML5, CSS3, JavaScript (ES6), React</p>
          <p><strong>BackEnd</strong> Node.js, Express, Supabase (PostgreSQL)</p>
        </div>
      </div>
    `,
  },

  projects: {
    title: "포트폴리오",
    content: `
      <div class="project-list">
        <div class="info-card">
          <strong>Personal Project : Profile Card Maker</strong>
          <p>게임 컨셉으로 간단한 자기소개를 할 수 있는 카드를 만드는 사이트입니다.</p>
          <a href="https://profile-card-maker-five.vercel.app/" target="_blank" aria-label="메이커 사이트 바로가기">메이커 사이트 바로가기</a>&nbsp; &nbsp;
          <a href="#" target="_blank" aria-label="메이커 코드 바로가기">메이커 코드 바로가기</a>
        </div>
        <div class="info-card">
        
          <strong>Personal Project 02</strong>
          <p>개인 프로젝트 (수정 예정)</p>
          <a href="#" aria-label="개인 프로젝트 (수정 예정) 자세히 보기">자세히 보기</a>
        </div>
        <div class="info-card">
          <strong>Team Project : 코레일 사이트 리뉴얼 _ Re:Rail</strong>
          <p>코레일 사이트를 직관적이고 사용자 중심적으로 리뉴얼한 팀 프로젝트입니다.</p>

          // 사이트 내 깃허브로 포크해온 후 사이트 직링 수정 예정
          <a href="https://github.com/leesansa/re_rail" target="_blank" aria-label="Re:Rail 코드">Re:Rail 코드</a>&nbsp; &nbsp;
          <a href="https://leesansa.github.io/re_rail/" target="_blank" aria-label="Re:Rail 사이트">Re:Rail 사이트</a>
        </div>
        <div class="info-card">
          <strong>Server Team Project</strong>
          <p>서버 연동 팀 프로젝트 예정</p>
          <a href="#" aria-label="팀 프로젝트 사이트">팀 프로젝트 사이트</a>
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
          <p>cool333@kakao.com</p>
        </div>
        <div class="info-card">
          <strong>GitHub</strong>
          <p>github.com/cool-333</p>
        </div>
        <div class="info-card">
          <strong>Phone Number</strong>
          <p>010-4268-7520</p>
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
