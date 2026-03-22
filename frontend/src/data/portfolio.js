// ============================================================
// 포트폴리오 데이터
// ============================================================

export const profile = {
  name: 'AHyun Gu',
  title: 'Full-Stack Developer',
  tagline: '안녕하세요. 기획하는 개발자 구아현입니다.',
  description:
    '데이터 수집부터 백엔드 API, 모바일 앱, 인프라 구성까지 — 서비스의 전체 흐름을 설계하고 구현하는 개발자입니다. 3개 기업에서 공공 데이터 연동, 웹 크롤링 파이프라인, 반응형 UI 개발 등 다양한 도메인의 실무를 경험했습니다. 기술 선택에는 항상 "왜?"라는 질문을 던지며, 사용자와 팀 모두에게 실질적인 가치를 전달하는 코드를 작성합니다.',
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
      '코딩피티는 모바일 환경에 최적화된 코딩 학습 앱으로, 언제 어디서든 손쉽게 프로그래밍을 배울 수 있도록 설계되었습니다.\n구글 소셜 로그인을 통한 간편한 인증, TTS 음성 학습, 코드 빈칸 채우기 퀴즈 등 다양한 인터랙티브 학습 기능을 제공합니다.',
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
