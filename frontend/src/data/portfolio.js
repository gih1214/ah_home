// ============================================================
// 포트폴리오 데이터
// ============================================================

export const profile = {
  name: 'AHyun Gu',
  title: 'Full-Stack Developer',
  tagline: '안녕하세요. 기획하는 개발자 구아현입니다.',
  description:
    `화면 너머의 사용자가 겪는 불편함에 집중할 때 가장 몰입합니다. 데이터 수집부터 배포까지
서비스가 사용자에게 닿는 전 과정을 직접 설계하며, 기술 자체가 만드는 실질적인 가치에 비중을 둡니다.
여러 실무를 거치며 데이터 연동부터 UI 개발까지 다양한 도메인을 경험했고,
이 과정에서 얻은 인사이트를 동료들과 나누며 함께 성장하는 가치를 믿습니다.`,
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
};

export const projects = [
  {
    title: '코딩피티 (CodingPT)',
    period: '2025.07 ~',
    status: '현재',
    description: '모바일에서 언제 어디서든 학습 가능한 코딩 학습 앱',
    tech: ['React Native', 'TypeScript', 'Node.js', 'Docker', 'AWS', 'TailwindCSS'],
    role: '기획 / 디자인 / 콘텐츠 설계 / DB 설계 / 풀스택 개발',
    highlights: [
      '구글 소셜 로그인(Access/Refresh Token) 및 JWT 인증 구현',
      '학습 콘텐츠 기획 및 DB 설계, 학습 데이터 관리',
      '코드 자동 실행 터미널 구현',
      'TTS 활용 음성 학습, 코드 빈칸 채우기 등 인터랙티브 학습 기능',
    ],
    // — 상세 모달 전용 필드 —
    github: 'https://github.com/whrksp126/codingpt',
    detailDescription:
      '학습 엔진 고도화 및 비즈니스 로직 전반을 구현한 하이브리드 교육 앱',
    overview: {
      service: '14종의 인터랙티브 모듈을 활용한 슬라이드 기반 프로그래밍 학습 앱',
      team: '조건호, 구아현 (앱 프론트엔드 및 백엔드 로직 전담)',
      mainRole: '앱 UI/UX 전체 구현, 학습 엔진 모듈화 및 고도화, 비즈니스 핵심 API 및 DB 모델링',
      contribution: '70%',
    },
    contributions: [
      {
        title: '① 학습 엔진 고도화 및 인터랙티브 모듈 확장 (App)',
        items: [
          '엔진 리팩토링 및 확장: 초기 설계된 모듈 구조를 바탕으로 확장성을 고려하여 고도화. CodeFillTheGapV2, ParagraphV2, CharacterSpeechBubble 등 10여종의 학습 컴포넌트로 확장 구현.',
          '학습 시스템 로직 구현: 타이머 기반의 Auto-Advance(슬라이드 자동 전환) 시스템과 제스처를 활용한 일시정지/재개 기능을 구현하여 동적인 학습 흐름 구축.',
          '퀴즈 시스템 리뉴얼: 기존 객관식/빈칸 채우기 기능을 고도화(v2)하고, OX 퀴즈 모듈을 신규 개발하여 학습 콘텐츠의 다양성 확보.',
          '콘텐츠 연동: ElevenLabs API로 생성된 TTS 음성 파일을 슬라이드별 큐 관리를 통해 자동 재생되도록 구현.',
        ],
      },
      {
        title: '② 사용자 경험을 위한 대시보드 및 게이미피케이션 (App)',
        items: [
          '학습 시각화: AnimatedCircularProgress를 이용한 원형 차트 및 GitHub 스타일의 6개월 학습 히트맵 컴포넌트를 직접 구현하여 학습 동기 부여.',
          '하트 시스템(게이미피케이션): 30분 간격 자동 충전 로직 및 실시간 타이머 UI를 구축. 앱 내 모든 탭에서 접근 가능한 전역 모달 시스템으로 사용자 편의성 증대.',
          '최근 학습 추적: AsyncStorage를 활용하여 사용자가 마지막으로 학습한 위치를 저장하고 복원하는 브랜치 로직 설계.',
        ],
      },
      {
        title: '③ 비즈니스 핵심 API 및 데이터 모델링 (Backend)',
        items: [
          '인증 시스템: Google OAuth를 연동한 소셜 로그인 및 JWT 기반 인증 체계(Access/Refresh Token) 구축. 보안을 위해 만료 임박 시 Refresh Token 자동 재발급 로직 포함.',
          'DB 모델 설계: 교육 서비스의 복잡한 계층 구조(Product → Class → Section → Lesson → Slide)를 효율적으로 관리하기 위해 25개의 모델 및 매핑 테이블을 설계하고 API 구현.',
          '수강/결제 트랜잭션: 수강 신청 시 MyClass 생성과 상태 초기화가 원자적으로 이루어지도록 데이터베이스 트랜잭션 처리.',
        ],
      },
    ],
    features: [
      {
        title: '구글 소셜 로그인 및 JWT 인증',
        description: 'Access/Refresh Token 기반 인증 플로우를 구현하여 안전하고 편리한 로그인 경험을 제공합니다.',
        gif: '/src/assets/gif/whale.gif',
      },
      {
        title: '코드 자동 실행 터미널',
        description: '앱 내에서 직접 코드를 작성하고 실행 결과를 확인할 수 있는 터미널 환경을 구현했습니다.',
        gif: '/src/assets/gif/whale.gif',
      },
      {
        title: 'TTS 음성 학습 & 빈칸 채우기',
        description: 'TTS를 활용한 음성 기반 학습과 코드 빈칸 채우기 퀴즈로 인터랙티브한 학습 경험을 제공합니다.',
        gif: '/src/assets/gif/whale.gif',
      },
    ],
    problemSolving: [
      {
        title: '효율적인 협업을 통한 기능 고도화',
        situation: '팀원이 구현한 코드 실행 엔진 및 프리뷰 웹뷰 구조를 활용해야 함.',
        solution: '팀원과 긴밀한 소통을 통해 S3 경로 기반의 URL 연동 방식을 파악. 이를 학습 슬라이드 내 코드 실행 모듈에 성공적으로 결합하여 실제 코드가 동작하는 프리뷰 환경 완성.',
      },
      {
        title: 'WebView 내 커스텀 인터랙션 구현 (UI/UX 최적화)',
        situation: '학습 콘텐츠 내 JavaScript 레슨 진행 중, window.alert 호출 시 모바일 OS의 네이티브 alert이 호출되어 앱 전체 UI의 일관성을 해치고 학습 몰입도를 떨어뜨리는 문제 발생.',
        solution: 'WebView의 injectedJavaScript를 활용해 브라우저의 기본 window.alert 함수를 재정의(Overriding). 이를 통해 호출 발생 시 React Native 측으로 메시지를 전달(postMessage)하고, 미리 설계된 앱 내부 커스텀 모달 UI를 호출하도록 연동하여 웹뷰와 네이티브 간의 이질감 없는 사용자 경험을 구현.',
      },
    ],
    takeaways: [
      '기존 기반 활용 및 확장 능력: 팀원이 설계한 초기 아키텍처를 빠르게 파악하여 서비스 전체 기능으로 확장(10여종 모듈화 등)하는 협업 역량을 발휘했습니다.',
      'Full-stack 경험: 기획 단계부터 참여하여 DB 모델링, 인증 보안, 앱 UI/UX까지 서비스의 전체 생명 주기를 직접 경험하며 개발 시야를 넓혔습니다.',
      '데이터 중심 사고: 복잡한 교육 콘텐츠 데이터를 구조화하고, 트랜잭션 처리를 통해 데이터 무결성을 지키는 백엔드 개발의 중요성을 체득했습니다.',
    ],
  },
  {
    title: '헤이보카 (HeyVoca)',
    period: '2024.04 ~',
    status: '현재',
    description: '쉽고 재미있게 영어 단어를 학습할 수 있는 나만의 단어장 앱',
    tech: ['React Native', 'React', 'TypeScript', 'Python', 'Flask', 'MySQL', 'SQLAlchemy', 'BeautifulSoup'],
    role: '데이터 수집 / DB 설계 / 풀스택 개발 / QA',
    highlights: [
      '영어 단어 사전 DB 설계 및 구축',
      'BeautifulSoup 활용 웹 스크래핑으로 단어 데이터 자동 수집',
      'Flask 기반 검색 API 개발',
      'OCR(광학 문자 판독) 기능 연동',
      '외부 파일(CSV, 구글 스프레드시트 등) 연동 업로드',
    ],
    github: 'https://github.com/whrksp126/heyvoca_service',
    detailDescription:
      '헤이보카는 영어 단어 학습을 쉽고 재미있게 만들어주는 단어장 앱입니다.\n자체 영어 사전 DB를 구축하고, 웹 스크래핑을 통해 데이터를 자동 수집하며, OCR 기능과 외부 파일 연동으로 편리한 단어 등록을 지원합니다.',
    features: [
      {
        title: '영어 사전 DB 구축 & 검색 API',
        description: 'BeautifulSoup으로 단어 데이터를 자동 수집하고, Flask 기반 검색 API를 통해 빠른 단어 검색을 제공합니다.',
        gif: '',
      },
      {
        title: 'OCR 기능 연동',
        description: '카메라로 촬영한 텍스트를 OCR로 인식하여 자동으로 단어장에 등록할 수 있습니다.',
        gif: '',
      },
      {
        title: '외부 파일 연동 업로드',
        description: 'CSV, 구글 스프레드시트 등 외부 파일을 연동하여 대량의 단어를 한번에 업로드할 수 있습니다.',
        gif: '',
      },
    ],
  },
  {
    title: '오더앤고 (Order&Go)',
    period: '2023.04 - 2024.02',
    status: '완료',
    description: '식당, 카페 등의 매장을 효율적으로 관리하기 위한 매장 관리 웹사이트',
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
        description: '메뉴별 옵션 설정, 포지션 이동, 상세 설정 등 유연한 메뉴 관리 시스템을 구현했습니다.',
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
