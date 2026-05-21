// ============================================================
// 포트폴리오 데이터
// ============================================================

// — 썸네일 이미지 (Vite가 빌드 시 해시 처리 + 최적화) —
import cpHome from '../assets/thumbnails/cp_01_home.webp';
import cpMyLesson from '../assets/thumbnails/cp_02_mylesson.webp';
import cpStore from '../assets/thumbnails/cp_03_store.webp';
import cpMyPage from '../assets/thumbnails/cp_04_mypage.webp';
import cpLessonIntro from '../assets/thumbnails/cp_05_lesson_1_intro.webp';
import cpLesson2 from '../assets/thumbnails/cp_05_lesson_2.webp';
import cpLessonOx from '../assets/thumbnails/cp_05_lesson_3_ox.webp';
import cpLessonQuiz from '../assets/thumbnails/cp_05_lesson_4_quiz.webp';
import cpLessonFinish from '../assets/thumbnails/cp_05_lesson_5_finish.webp';
import hvHome from '../assets/thumbnails/hv_01_Home.webp';
import hvBookList from '../assets/thumbnails/hv_02_1_단어장 리스트.webp';
import hvBookAdd from '../assets/thumbnails/hv_02_2_단어장 추가.webp';
import hvTestAnswer from '../assets/thumbnails/hv_03_테스트 정답.webp';

// — 프로젝트 로고 아이콘 —
import codingptLogo from '../assets/icon/codingpt_icon.svg';
import heyvocaLogo from '../assets/icon/heyvoca_icon.svg';

// — AI Tools 아이콘 —
import chatgptIcon from '../assets/icon/chatGPT.svg';
import antigravityIcon from '../assets/icon/antigravity.svg';
import claudeIcon from '../assets/icon/claude.svg';
import geminiIcon from '../assets/icon/gemini.svg';

// — 프로젝트 데모 GIF —
import cpLoginGif from '../assets/gif/cp_01_login.gif';
import cpTerminalGif from '../assets/gif/cp_02_terminal.gif';
import cpQuizAlertGif from '../assets/gif/cp_03_quiz_alert.gif';
import hvAnkiGif from '../assets/gif/hv_01_anki.gif';
import hvGoogleSheetsGif from '../assets/gif/hv_02_google_sheets.gif';
import hvFileUploadGif from '../assets/gif/hv_03_file_upload.gif';

export const profile = {
  name: 'AHyun Gu',
  title: 'Software Engineer',
  tagline: '기획부터 개발까지, 서비스 전반을 다룹니다.',
  description:
    `데이터 수집, 백엔드 API, 웹/앱 프론트엔드, 인프라까지 —
    서비스를 만드는 여러 단계를 경험했습니다.
    새로운 도메인에 빠르게 적응하고, 팀원들과 함께 만들어가는 과정을 즐깁니다.`,
  velog: 'gucandoit',
  github: 'gih1214',
  email: 'rndkgus24@gmail.com',
};

// devicon CDN 기반 아이콘 URL 헬퍼
const icon = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

export const techStack = {
  language: [
    { name: 'Python', icon: icon('python') },
    { name: 'JavaScript', icon: icon('javascript') },
    { name: 'TypeScript', icon: icon('typescript') },
    { name: 'Java', icon: icon('java') },
  ],
  frontend: [
    { name: 'React', icon: icon('react') },
    { name: 'React Native', icon: icon('react') },
    { name: 'Tailwind CSS', icon: icon('tailwindcss') },
  ],
  backend: [
    { name: 'Node.js', icon: icon('nodejs') },
    { name: 'Express', icon: icon('express') },
    { name: 'Flask', icon: icon('flask', 'original-wordmark') },
    { name: 'Spring Boot', icon: icon('spring') },
    { name: 'MySQL', icon: icon('mysql') },
    { name: 'PostgreSQL', icon: icon('postgresql') },
    { name: 'MariaDB', icon: icon('mariadb') },
  ],
  infra: [
    { name: 'Docker', icon: icon('docker') },
    { name: 'NGINX', icon: icon('nginx') },
    { name: 'AWS', icon: icon('amazonwebservices', 'original-wordmark') },
    { name: 'Git', icon: icon('git') },
    { name: 'GitHub', icon: icon('github') },
    { name: 'Figma', icon: icon('figma') },
    { name: 'Notion', icon: icon('notion') },
    { name: 'Jupyter', icon: icon('jupyter') },
  ],
  ai: [
    { name: 'ChatGPT', icon: chatgptIcon },
    { name: 'Claude', icon: claudeIcon },
    { name: 'Gemini', icon: geminiIcon },
    { name: 'Cursor', icon: 'https://cdn.simpleicons.org/cursor' },
    { name: 'Antigravity', icon: antigravityIcon },
  ],
};

export const projects = [
  {
    title: '코딩피티 (CodingPT)',
    logo: codingptLogo,
    period: '2025.07 ~',
    status: '현재',
    description: '모바일로 언제 어디서든 학습 가능한 코딩 학습 앱',
    thumbnailType: 'mobile',
    thumbnails: [
      cpHome,
      cpMyLesson,
      cpStore,
      cpMyPage,
      cpLessonIntro,
      cpLesson2,
      cpLessonOx,
      cpLessonQuiz,
      cpLessonFinish,
    ],
    tech: ['React Native', 'TypeScript', 'Node.js', 'Docker', 'AWS', 'TailwindCSS'],
    role: '기획 / DB 설계 / 앱 프론트엔드 / 백엔드 API 개발',
    highlights: [
      '구글 소셜 로그인(Access/Refresh Token) 및 JWT 인증 구현',
      '학습 콘텐츠 기획 및 DB 설계, 학습 데이터 관리',
      '코드 자동 실행 터미널 구현',
      '슬라이드 기반 인터랙티브 학습 모듈 확장 및 고도화',
    ],
    // — 상세 모달 전용 필드 —
    github: [
      { label: 'App', url: 'https://github.com/whrksp126/codingpt_app' },
      { label: 'Service', url: 'https://github.com/whrksp126/codingpt_service' },
    ],
    // detailDescription:
    //   '학습 엔진 고도화 및 비즈니스 로직을 담당한 하이브리드 교육 앱',
    overview: {
      service: '인터랙티브 모듈을 활용한 슬라이드 기반 프로그래밍 학습 앱',
      team: '조건호, 구아현 (앱 프론트엔드 및 백엔드 로직 담당)',
      mainRole: '앱 UI 구현, 학습 엔진 모듈화, 비즈니스 API 및 DB 모델링',
      contribution: '70%',
    },
    contributions: [
      {
        title: '① 학습 엔진 고도화 및 인터랙티브 모듈 확장 (App)',
        items: [
          '엔진 리팩토링 및 확장: 초기 설계된 모듈 구조를 기반으로 확장성을 고려하여 고도화 (코드 빈칸 채우기, 텍스트, 채팅 대화 등 10여 종의 학습 컴포넌트 확장 구현)',
          '학습 흐름 로직 구현: 타이머 기반 Auto-Advance(슬라이드 자동 전환)와 제스처 기반 일시정지/재개 기능 구현',
          '퀴즈 모듈 개선: 객관식/빈칸 채우기 기능을 v2로 개선하고, OX 퀴즈 모듈을 신규 개발',
          '음성 콘텐츠 연동: 슬라이드별 TTS 음성 파일 큐 관리 및 자동 재생 구현',
        ],
      },
      {
        title: '② 학습 대시보드 구현 (App)',
        items: [
          '학습 시각화: 원형 차트와 GitHub 스타일의 6개월 학습 히트맵 컴포넌트 구현',
          '최근 학습 추적: AsyncStorage를 활용하여 사용자가 마지막으로 학습한 위치를 저장/복원하는 로직 설계',
        ],
      },
      {
        title: '③ 비즈니스 API 및 데이터 모델링 (Backend)',
        items: [
          '인증 시스템: Google OAuth 소셜 로그인 및 JWT 기반 인증 체계(Access/Refresh Token) 구축',
          'DB 모델 설계: 교육 서비스의 계층 구조(Product → Class → Section → Lesson → Slide)를 관리하기 위해 25개의 모델 및 매핑 테이블 설계 후 API 구현',
        ],
      },
    ],

    features: [
      {
        title: '구글 소셜 로그인 및 JWT 인증',
        description: '구글 API를 연동하여 소셜 로그인과 Access/Refresh Token 기반 인증 플로우를 구현하여 로그인 세션을 관리합니다.',
        gif: cpLoginGif,
      },
      {
        title: '코드 자동 실행 터미널',
        description: '사용자가 터미널 환경에 익숙해질 수 있도록 앱 내에서 코드 실행 결과를 확인할 수 있는 터미널 환경을 구현했습니다.',
        gif: cpTerminalGif,
      },
      {
        title: '인터랙티브 학습 모듈',
        description: '개념 설명만으로 부족한 부분을 웹뷰 기반 시각화(ex. CSS 적용, alert/버튼 이벤트 등)로 보완하고, 코드 빈칸 채우기/OX 퀴즈/객관식 등 다양한 인터랙티브 학습 컴포넌트를 제공합니다.',
        gif: cpQuizAlertGif,
      },
    ],
    problemSolving: [
      {
        title: 'WebView 내 window.alert를 앱 커스텀 모달로 대체',
        situation: 'JavaScript 레슨 중 window.alert이 호출되면 모바일 OS의 네이티브 alert이 떠서, 앱 전체 UI 일관성이 깨지는 문제가 있었습니다.',
        solution: 'WebView의 injectedJavaScript로 window.alert을 오버라이드해, 호출 시 React Native 측으로 postMessage를 보내고 앱 내부 커스텀 모달을 띄우도록 연동했습니다.',
      },
    ],

    takeaways: [
      {
        keyword: '기존 아키텍처 확장',
        description: '팀원이 설계한 초기 아키텍처를 빠르게 파악하여 서비스 전체 기능으로 확장(10여종 모듈화 등)하는 경험을 쌓았습니다.',
      },
      {
        keyword: '풀스택 작업 흐름',
        description: '기획 단계부터 참여하여 DB 모델링, 인증 보안, 앱 UI/UX까지 서비스의 전체 생명 주기를 경험하며 시야를 넓혔습니다.',
      },
      {
        keyword: '데이터 구조화',
        description: '복잡한 교육 콘텐츠 데이터를 구조화하고, 사용자에게는 단순한 학습 흐름으로 노출되도록 설계했습니다.',
      },
    ],
  },
  {
    title: 'heyvoca',
    logo: heyvocaLogo,
    period: '2024.04 ~',
    status: '현재',
    description: '쉽고 재미있게 영단어를 외우는 나만의 단어장',
    thumbnailType: 'mobile',
    thumbnails: [hvHome, hvBookList, hvBookAdd, hvTestAnswer],
    tech: ['Python', 'Flask', 'SQLAlchemy', 'MySQL', 'Redis', 'React', 'Vite', 'React Native', 'Docker', 'Nginx'],
    role: '데이터 수집 / 백엔드 / 프론트엔드 / 앱',
    highlights: [
      '영단어 5만+ 어휘 데이터 웹 스크래핑·전처리·이관 파이프라인 구축',
      '5종 외부 플랫폼(Anki, Quizlet(Data/PDF), Google Sheets, Excel, CSV) 단어장 연동',
      'Anki .apkg(SQLite) 파싱 + 사용자 필드 매핑 UX 설계'
    ],
    // — 상세 모달 전용 필드 —
    github: [
      { label: 'App', url: 'https://github.com/whrksp126/heyvoca' },
      { label: 'Service', url: 'https://github.com/whrksp126/heyvoca_service' },
    ],
    // detailDescription:
    // '데이터 수집/전처리부터 백엔드, 웹, 앱까지 풀스택으로 담당하며 신규 기능을 단독으로 기획·설계·배포하는 영단어 학습 서비스',
    overview: {
      service: 'FSRS 알고리즘 기반의 효율적인 복습 시스템과 퀴즈를 제공하는 영단어 학습 앱',
      team: '마케팅 1명, 디자이너 1명, 개발 3명',
      mainRole: '초기 데이터 수집·전처리 → 백엔드 API → 프론트/앱 풀스택으로 범위 확장',
      contribution: '25',
    },
    contributions: [
      {
        title: '① 외부 데이터 통합 시스템 — 6종 플랫폼 단어장 자동 연동 (Backend + Frontend)',
        items: [
          '6종 포맷 통합: Anki, Quizlet(텍스트/PDF), Excel, CSV, Google Sheets 데이터를 공통 포맷으로 정규화하는 파이프라인 설계',
          '공통 영속화 레이어 추상화: 파싱 → 정규화 → 검증 → 영속화 4단계로 분리하고 공통 헬퍼로 분기를 일원화. 신규 플랫폼 추가 시 파서 함수 하나만 작성하면 되도록 구성',
          'Anki .apkg 파싱: ZIP 해제 후 내부 SQLite를 쿼리해 신·구 버전 스키마 모두 지원. `[sound:]`, `<img>`, `{{c1::answer}}` 등 노이즈 정제 포함',
          'Quizlet PDF 파싱(pdfplumber): 다양한 레이아웃과 UI 텍스트 노이즈를 정규식으로 필터링',
          'Anki 필드 매핑 UX: 필드명 키워드(front/word/term 등)로 자동 추론 + 사용자 수동 매핑 + 5건 샘플 미리보기 제공',
          'Google Sheets 연동: React Native OAuth 토큰을 WebView postMessage로 전달받아, 시트 목록 → 탭 선택 → 데이터 조회 플로우 구성',
          'OCR 기반 단어 입력: React Native에서 이미지 인식으로 단어를 추출해 단어장에 자동 추가하는 기능 구현',
        ],
      },
      {
        title: '② 영단어 사전 데이터 구축 및 DB 스키마 설계 (Data + DB)',
        items: [
          '웹 스크래핑 파이프라인: BeautifulSoup과 Selenium을 활용해 영단어 어휘·뜻·예문·발음을 수집·정제 후 서버 DB로 이관',
          '단어 메타데이터 보강: 수집한 단어의 품사(동사/형용사 등)와 동사 활용형(현재/과거 등) 정보를 추출해 사전 데이터 구조화',
          '관계 모델링: 단어, 단어장, 사용자, 사용자 단어장 등 핵심 엔티티 간 N:N 관계를 매핑 테이블로 분리해 설계'
        ],
      },
    ],
    features: [
      {
        title: '외부 데이터 통합 — Anki / Excel / CSV / Quizlet / Google Sheets',
        description:
          '5종 외부 플랫폼의 단어 데이터를 플랫폼별 포맷 차이(.apkg SQLite, PDF 표, .xlsx, .csv, 시트 API)를 추상화한 통합 파이프라인으로 처리하여 단어장을 구축합니다.',
        gif: hvFileUploadGif,
      },
      {
        title: 'Anki 필드 매핑 UX',
        description:
          '.apkg 내부 SQLite를 파싱해 노트 타입과 필드 구조를 추출합니다. 단어장의 필드에 자동 매핑하고, 사용자가 직접 매핑을 조정하면 미리보기를 제공합니다.',
        gif: hvAnkiGif,
      },
      {
        title: 'Google Spreadsheets 연동',
        description:
          'React Native에서 발급한 OAuth 액세스 토큰을 WebView postMessage로 전달받아, 사용자 시트 목록 → 탭 선택 → 데이터 조회까지 앱-웹 하이브리드로 처리합니다.',
        gif: hvGoogleSheetsGif,
      },
    ],
    problemSolving: [
      {
        title: '외부 데이터 포맷의 일관 처리',
        situation:
          '외부 플랫폼마다 데이터 포맷이 모두 달라 플랫폼별로 별도 처리 코드를 두면 신규 플랫폼이 추가될 때마다 검증·예외 처리·중복 병합 로직이 중복 구현될 위험이 있었습니다.',
        solution:
          '백엔드 파이프라인을 "파싱 → 정규화 → 검증 → 영속화" 4단계로 분리했습니다. 각 파서가 공통 포맷을 반환하도록 구조를 잡아 검증·병합 로직의 중복을 줄였고, 신규 플랫폼 추가 시 파서 함수만 작성하면 나머지 단계는 재사용되도록 구성했습니다.',
      },
      {
        title: 'Anki 필드 자유도와 사용자 입력 검증',
        situation:
          'Anki는 노트 타입에 따라 필드 이름과 개수가 사용자마다 달라서 heyvoca의 단어/뜻/예문 구조에 어떤 필드를 매핑할지 사용자가 직접 정해야 하는데, 매핑을 잘못하면 50자가 넘는 문장이 단어 필드에 들어가 DB 정합성이 깨지는 문제가 있었습니다.',
        solution:
          '프론트에서 필드명 키워드로 자동 추론해 첫 매핑을 미리 채워주고, 백엔드 미리보기 응답에 노트 전체 기준 필드 통계를 포함시켜 매핑된 word 필드의 최대 길이가 50자를 넘으면 업로드 단계에서 거부하도록 구현했습니다.',
      },
      {
        title: '사이트별 구조 차이로 인한 스크래핑 한계',
        situation:
          '초기에는 자체 사전 사이트의 일정한 구조 덕분에 BeautifulSoup만으로 단어를 수집할 수 있었습니다. 이후 추가 사이트에서 단어를 보강하려 했는데, 사용자가 직접 등록한 단어장 페이지가 많아 페이지마다 구조가 다르고 동적 렌더링이 섞여 있어 정적 파싱으로는 안정적인 추출이 어려웠습니다.',
        solution:
          '정적 페이지는 BeautifulSoup으로 유지하고, 구조 변동이 크거나 JS 렌더링이 필요한 페이지에만 Selenium을 도입했습니다. 사이트 특성에 따라 두 도구를 분기 처리해 처리 비용을 최소화하면서 수집 범위를 넓혔습니다.',
      },
    ],
    takeaways: [
      {
        keyword: '확장 가능한 파이프라인 설계',
        description: '5종의 외부 포맷을 다루면서, 단계별로 책임을 분리해두면 신규 포맷이 추가돼도 파서 한 단계만 추가하는 정도로 확장성이 확보된다는 것을 느꼈습니다.',
      },
      {
        keyword: '풀스택 사고',
        description: '데이터 수집/전처리 → 백엔드 API → 프론트 UX → 앱 WebView 연동까지 하나의 기능을 끝까지 책임지면서, 어느 한 레이어의 결정이 다른 레이어에 어떤 영향을 주는지 깊이 있게 이해하게 되었습니다.',
      },
    ],
  },
  {
    title: '오더앤고 (Order&Go)',
    period: '2023.04 - 2024.02',
    status: '완료',
    description: '식당, 카페 등의 매장을 효율적으로 관리하기 위한 매장 관리 웹사이트',
    thumbnailType: 'web',
    thumbnails: [
    ],
    tech: ['Python', 'Flask', 'MySQL', 'SQLAlchemy', 'JavaScript'],
    role: '백엔드 API 개발',
    highlights: [
      '회원 정보 관리(가입/수정) 시스템 구현',
      '스토어 및 카테고리 CRUD 개발',
      '메뉴/옵션 관리(포지션 이동 및 상세 설정)',
      '테이블 관리(삭제/이동/합석 등) 기능 구현',
    ],
    github: 'https://github.com/whrksp126/orderandgo_service',
    detailDescription:
      '오더앤고는 식당, 카페 등 매장의 메뉴·테이블·주문을 통합 관리할 수 있는 웹 기반 매장 관리 시스템입니다.\n회원 관리부터 메뉴 옵션 설정, 테이블 배치 관리까지 매장 운영에 필요한 핵심 기능을 구현했습니다.',
    features: [
      {
        title: '스토어 및 카테고리 CRUD',
        description: '매장 정보와 메뉴 카테고리를 직관적으로 생성·수정·삭제할 수 있는 관리 기능을 제공합니다.',
        gif: '',
      },
      {
        title: '메뉴/옵션 관리',
        description: '메뉴별 옵션 설정, 포지션 이동, 상세 설정 등 다양한 메뉴 관리 시스템을 구현했습니다.',
        gif: '',
      },
      {
        title: '테이블 관리',
        description: '테이블 삭제, 이동, 합석 등 매장 레이아웃 관리 기능을 통해 효율적인 좌석 운영을 지원합니다.',
        gif: '',
      },
    ],
  },
  {
    title: '냥도 놀러가고 싶댕',
    period: '2022.03 - 2022.05',
    status: '완료',
    description: '반려동물 동반 가능 관광 정보 안내 플랫폼',
    thumbnailType: 'web',
    thumbnails: [
    ],
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'MariaDB', 'Mustache'],
    role: '정보 구조(IA) 설계 / 백엔드 API 개발',
    highlights: [
      '유효성 검사 기반 회원가입 시스템 구현',
      '쿠키 기반 ID 기억 로그인 및 세션 관리',
      '권한 체크를 통한 회원 정보 수정 및 탈퇴',
      '아이디/비밀번호 찾기 기능 구현',
    ],
    github: 'https://github.com/gih1214/Teamproject_Nyangmeong',
    detailDescription:
      '반려동물과 함께 방문할 수 있는 관광지, 숙소, 식당 등의 정보를 제공하는 플랫폼입니다.\n유효성 검사 기반 회원 시스템과 쿠키·세션 기반 인증을 구현하여 안정적인 사용자 경험을 제공합니다.',
    features: [
      {
        title: '회원가입 및 인증 시스템',
        description: '유효성 검사 기반 회원가입, 쿠키 기반 ID 기억 로그인, 세션 관리를 구현했습니다.',
        gif: '',
      },
      {
        title: '회원 정보 관리',
        description: '권한 체크를 통한 정보 수정 및 탈퇴, 아이디/비밀번호 찾기 기능을 제공합니다.',
        gif: '',
      },
    ],
  },
];

export const experiences = [
  {
    company: '(주)바다플랫폼',
    period: '2024.09 - 2025.06',
    role: '연구개발팀 / 연구원',
    highlights: [
      'Docker 및 NGINX 환경을 이용한 안정적인 웹 서빙 인프라 구축 및 관리',
      '나이스(NEIS) 등 공공데이터 API 연동을 통한 학교별 급식 데이터 실시간 수집 및 DB화',
      '사용자 데이터 분석 로직 개발 및 PDF 동적 생성/다운로드 기능 구현으로 영양교사 행정 업무 효율 개선',
      '레거시 코드 분석을 통한 웹 표준 준수 및 전 기기(PC/모바일/태블릿) 대응 반응형 UI/UX 구현',
    ],
  },
  {
    company: '(주)히어로웍스',
    period: '2023.02 - 2024.05',
    role: '데이터팀 / 매니저',
    highlights: [
      'Python 기반 웹 크롤링 파이프라인 구축 (아고다, 부킹닷컴 등 글로벌 5개 이상 OTA 숙박 데이터 자동 수집)',
      'Jupyter 활용 형태소 분석 및 데이터 전처리를 통한 머신러닝 모델 예측 신뢰도 향상',
      '국내외 숙박 시설 POI 및 가격 변동 정보 등 5종 핵심 데이터 테이블 정의 및 표준화 주도',
      "기술 감리 산출물 작성 및 품질 진단 — '문화빅데이터 플랫폼 사업 수행 평가' 우수 달성",
      '데이터 라벨링 검수 기준 수립 및 피드백 루프 구축으로 데이터 신뢰도 강화',
    ],
  },
  {
    company: '(주)그린블루',
    period: '2022.06 - 2022.12',
    role: '웹1팀 / 주임',
    highlights: [
      '전자정부프레임워크 기반 설문조사 CRUD 모듈 구현 및 공공기관 웹 시스템 유지보수',
      '복잡한 해양 예보 데이터의 직관적 확인을 위한 면 단위 데이터 공간 시각화 구현',
      '프로젝트 전 과정(제안서, 착수/중간/최종 보고서)의 기술 문서화 수행',
      '시스템 버그 픽스 및 파일 다운로드 로직 개선을 통한 서비스 안정성 증대',
    ],
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
];
