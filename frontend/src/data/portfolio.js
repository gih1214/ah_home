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

export const profile = {
  name: 'AHyun Gu',
  title: 'Software Engineer',
  tagline: '기획하는 개발자, 구아현입니다.',
  description:
    `데이터 수집, 백엔드 API, 웹/앱 프론트엔드, 인프라까지 — 서비스를 만드는
여러 단계를 직접 거치며 일했습니다. 한 분야의 깊이보다는, 전체 흐름을 보고
필요한 곳에 손을 댈 수 있는 감각을 키워왔습니다.
새로운 도메인에 빠르게 적응하고, 기획과 개발 사이의 간극을 메우는 역할을
즐깁니다.`,
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
    logo: codingptLogo,
    period: '2025.07 ~',
    status: '현재',
    description: '모바일에서 언제 어디서든 학습 가능한 코딩 학습 앱',
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
    github: 'https://github.com/whrksp126/codingpt',
    detailDescription:
      '학습 엔진 고도화 및 비즈니스 로직을 담당한 하이브리드 교육 앱',
    overview: {
      service: '14종의 인터랙티브 모듈을 활용한 슬라이드 기반 프로그래밍 학습 앱',
      team: '조건호, 구아현 (앱 프론트엔드 및 백엔드 로직 담당)',
      mainRole: '앱 UI 구현, 학습 엔진 모듈화, 비즈니스 API 및 DB 모델링',
      contribution: '70%',
    },
    contributions: [
      {
        title: '① 학습 엔진 고도화 및 인터랙티브 모듈 확장 (App)',
        items: [
          '엔진 리팩토링 및 확장: 초기 설계된 모듈 구조를 기반으로 확장성을 고려하여 고도화. CodeFillTheGapV2, ParagraphV2, CharacterSpeechBubble 등 10여 종의 학습 컴포넌트를 확장 구현.',
          '학습 흐름 로직 구현: 타이머 기반 Auto-Advance(슬라이드 자동 전환)와 제스처 기반 일시정지/재개 기능 구현.',
          '퀴즈 모듈 개선: 기존 객관식/빈칸 채우기 기능을 v2로 개선하고, OX 퀴즈 모듈을 신규 개발.',
          '음성 콘텐츠 연동: 슬라이드별 TTS 음성 파일을 큐로 관리해 자동 재생되도록 구현.',
        ],
      },
      {
        title: '② 학습 대시보드 구현 (App)',
        items: [
          '학습 시각화: AnimatedCircularProgress 기반 원형 차트와 GitHub 스타일의 6개월 학습 히트맵 컴포넌트 구현.',
          '최근 학습 추적: AsyncStorage를 활용해 사용자가 마지막으로 학습한 위치를 저장/복원하는 로직 설계.',
        ],
      },
      {
        title: '③ 비즈니스 API 및 데이터 모델링 (Backend)',
        items: [
          '인증 시스템: Google OAuth 소셜 로그인 및 JWT 기반 인증 체계(Access/Refresh Token) 구축.',
          'DB 모델 설계: 교육 서비스의 계층 구조(Product → Class → Section → Lesson → Slide)를 관리하기 위해 25개의 모델 및 매핑 테이블 설계 후 API 구현.',
        ],
      },
    ],

    features: [
      {
        title: '구글 소셜 로그인 및 JWT 인증',
        description: 'Access/Refresh Token 기반 인증 플로우를 구현해 로그인 세션을 관리합니다.',
        gif: '/src/assets/gif/cp_01_login.gif',
      },
      {
        title: '코드 자동 실행 터미널',
        description: '앱 내에서 코드를 작성하고 실행 결과를 확인할 수 있는 터미널 환경을 구현했습니다.',
        gif: '/src/assets/gif/cp_02_terminal.gif',
      },
      {
        title: '인터랙티브 학습 모듈',
        description: '빈칸 채우기, OX 퀴즈, 객관식 등 다양한 학습 컴포넌트를 슬라이드 기반으로 제공합니다.',
        gif: '/src/assets/gif/cp_03_quiz_alert.gif',
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
    title: 'heyvoca',
    logo: heyvocaLogo,
    period: '2024.04 ~',
    status: '현재',
    description: '재밌고 쉽게 영어 단어를 학습하는 나만의 단어장',
    thumbnailType: 'mobile',
    thumbnails: [hvHome, hvBookList, hvBookAdd, hvTestAnswer],
    tech: ['Python', 'Flask', 'SQLAlchemy', 'MySQL', 'Redis', 'React', 'Vite', 'React Native', 'Docker', 'Nginx'],
    role: '데이터 수집 / 백엔드 / 프론트엔드 / 앱',
    highlights: [
      '영단어 5만+ 어휘 데이터 웹 스크래핑·전처리·이관 파이프라인 구축',
      '5종 외부 플랫폼(Anki, Quizlet(Data, PDF), Google Sheets, Excel, CSV) 단어장 자동 연동',
      'Anki .apkg(SQLite) 직접 파싱 + 사용자 필드 매핑 UX 설계',
      'JOIN 최적화(joinedload)로 단어장 목록 조회 N+1 문제 해소',
    ],
    // — 상세 모달 전용 필드 —
    github: 'https://github.com/whrksp126/heyvoca_service',
    // detailDescription:
    // '데이터 수집/전처리부터 백엔드, 웹, 앱까지 풀스택으로 담당하며 신규 기능을 단독으로 기획·설계·배포하는 영단어 학습 서비스',
    overview: {
      service: '',
      team: '마케팅 1명, 디자이너 1명, 개발 3명',
      mainRole: '초기 데이터 수집·전처리 → 백엔드 API → 프론트/앱 풀스택으로 범위 확장',
      contribution: '25',
    },
    contributions: [
      {
        title: '① 외부 데이터 통합 시스템 — 6종 플랫폼 단어장 자동 연동 (Backend + Frontend)',
        items: [
          '플랫폼 6종 통합: Quizlet 텍스트, Quizlet PDF, Excel(.xlsx/.xls), CSV, Anki(.apkg), Google Spreadsheets 등 6종을 모두 동일한 정규화 포맷({origin, meanings, examples})으로 처리하도록 백엔드 파이프라인 설계.',
          '공통 영속화 레이어 추상화: bulk_persist_vocas / validate_word_lengths / read_csv_with_encoding_fallback 등 헬퍼로 분기를 일원화하여 신규 플랫폼 추가 시 파서 한 개만 추가하면 되도록 확장성 확보.',
          'Anki .apkg 직접 파싱: ZIP 해제 → 내부 SQLite(collection.anki21/anki2/anki21b) 직접 쿼리. 신·구 버전 스키마(notetypes 테이블 vs col.models JSON) 모두 지원하고 [sound:], <img>, {{c1::answer}} cloze deletion, HTML 엔티티를 정제하는 _clean_anki_field 구현.',
          'Quizlet PDF 파싱(pdfplumber): 3컬럼(번호+단어+뜻) / 2컬럼(단어+뜻) / 1컬럼(다중 라인) 등 다양한 레이아웃을 처리. "이 세트의 단어" 마커 이후부터 추출하고 퀴즐렛 UI 텍스트(노이즈) 정규식으로 필터링.',
          'Anki 필드 매핑 UX: 노트 타입별 필드명을 자동 추론(autoMapFields, front/word/term 등 힌트 매칭)하고, 사용자가 dropdown으로 수동 매핑 가능. 5건 샘플 미리보기 + 백엔드가 내려준 fieldStats(maxLen, avgLen)로 50자 초과 같은 무효 매핑을 사전 차단.',
          'Google Spreadsheets 연동: React Native 측 OAuth 액세스 토큰을 WebView postMessage로 전달받아, 사용자 시트 목록 → 탭 선택 → 데이터 조회의 3단계 플로우 구성.',
        ],
      },
      {
        title: '② 데이터 무결성 & 멱등성 처리 (Backend)',
        items: [
          '인코딩 fallback: CSV 업로드 시 utf-8-sig → cp949(엑셀 한국어 기본) 순서로 시도해 한글 사용자 인코딩 이슈 해소.',
          '단어 길이/줄바꿈 검증: 영단어가 50자를 넘는 경우는 사실상 없다는 도메인 가정으로 WORD_MAX_LEN=50 정책을 정해 표 추출이 깨진 케이스(여러 행이 한 셀로 합쳐진 경우)를 즉시 거부.',
          '중복 단어 병합: 동일 사용자가 같은 단어를 여러 단어장에서 가져올 때 UserVoca를 재사용하고 voca_meanings/voca_examples를 중복 제거 후 병합(merge_meanings/merge_examples).',
          '고아 데이터 정리: 단어장 삭제 시 해당 단어가 다른 단어장에 매핑되어 있는지 확인 후, 매핑이 없을 때만 UserVoca에서 삭제하여 학습 이력 보존.',
          '벌크 처리 최적화: bulk_insert_mappings + 사전 일괄 조회로 단어장 1건당 수백~수천 건의 단어를 한 트랜잭션 내에서 처리.',
        ],
      },
      {
        title: '③ 영단어 사전 데이터 구축 및 DB 스키마 설계 (Data + DB)',
        items: [
          '웹 스크래핑 파이프라인: Python·BeautifulSoup으로 영단어 5만+ 어휘와 뜻·예문·발음 데이터를 수집·정제 후, 로컬 DB → 서버 DB 마이그레이션 프로세스 주도. 초기 구축 후 팀 내 다른 멤버에게 인계되어 현재까지 서비스의 핵심 사전 데이터로 활용.',
          '관계 모델링: 단어(Voca) ↔ 단어장(VocaBook) ↔ 사용자(User) ↔ 사용자 단어장(UserVocaBook) ↔ 학습 상태(SM2 데이터) 간 N:N 관계를 매핑 테이블(VocaBookMap, UserVocaBookMap, AdminVocaBookMap 등)로 분리하여 단어 메타데이터와 학습 메타데이터를 독립적으로 관리.',
          'JSON 컬럼 활용: SM2 학습 알고리즘 상태(ef, repetition, interval, nextReview 등)와 단어별 뜻/예문은 빈번한 스키마 변경에 대응하기 위해 JSON 직렬화로 저장.',
        ],
      },
      {
        title: '④ 조회 성능 최적화 (Backend)',
        items: [
          'N+1 해소: 단어장 목록 조회 API에서 SQLAlchemy joinedload로 UserVocaBook → UserVocaBookMap → UserVoca를 한 번의 쿼리로 적재해 단어장 수가 늘어도 쿼리 수가 일정하도록 개선.',
          '단어장 진입 응답 일원화: build_voca_book_response / build_vocas_for_book 헬퍼로 응답 직렬화 로직을 통일하여 GET 단건/목록/생성 응답이 동일한 스키마를 갖도록 정리.',
        ],
      },
    ],
    features: [
      {
        title: '외부 데이터 통합 — Anki / Excel / CSV / Quizlet / Google Sheets',
        description:
          '6종 외부 플랫폼의 단어 데이터를 단어장으로 자동 변환. 플랫폼별 포맷 차이(.apkg SQLite, PDF 표, .xlsx, .csv, 시트 API)를 추상화한 통합 파이프라인으로 처리합니다.',
        gif: '/src/assets/gif/hv_03_file_upload.gif',
      },
      {
        title: 'Anki 필드 매핑 UX',
        description:
          '.apkg 내부 SQLite를 파싱해 노트 타입과 필드 구조를 추출. heyvoca의 word/meaning/pronunciation/example 필드에 자동 매핑하고, 사용자가 직접 매핑을 조정하면 5건 샘플로 즉시 미리보기를 제공합니다.',
        gif: '/src/assets/gif/hv_01_anki.gif',
      },
      {
        title: 'Google Spreadsheets 연동',
        description:
          'React Native에서 발급한 OAuth 액세스 토큰을 WebView postMessage로 전달받아, 사용자 시트 목록 → 탭 선택 → 데이터 조회까지 앱-웹 하이브리드로 처리합니다.',
        gif: '/src/assets/gif/hv_02_google_sheets.gif',
      },
    ],
    problemSolving: [
      {
        title: '서로 다른 6종 플랫폼 데이터 포맷의 일관 처리',
        situation:
          '각 외부 플랫폼이 사용하는 포맷이 모두 달랐다. Anki는 .apkg(ZIP+SQLite), Quizlet은 텍스트와 PDF, Excel/CSV는 사용자가 직접 작성한 헤더 양식, Google Sheets는 OAuth API. 플랫폼별로 별도 처리 코드가 늘어나면 신규 플랫폼이 추가될 때마다 검증·예외 처리·중복 단어 병합 로직이 중복 구현될 위험이 있었음.',
        solution:
          '백엔드 파이프라인을 "파싱 → 정규화 → 검증 → 영속화"의 4단계로 분리. 모든 파서가 공통 포맷({origin, meanings, examples})을 반환하도록 인터페이스를 통일하고, 영속화는 bulk_persist_vocas로 단일화. 검증(50자 제한, 줄바꿈 차단)과 중복 병합(merge_meanings/merge_examples)은 모든 경로에서 재사용. 결과적으로 신규 플랫폼 추가 시 파서 함수 한 개만 작성하면 나머지는 기존 헬퍼가 처리.',
      },
      {
        title: 'Anki 필드 자유도와 사용자 혼란 사이의 균형',
        situation:
          'Anki는 노트 타입(Note Type)에 따라 필드 이름과 개수가 사용자마다 자유롭다. heyvoca의 단어/뜻/예문 구조에 어떤 필드를 매핑할지 사용자가 직접 정해야 하지만, 매핑을 잘못하면 50자가 넘는 문장이 단어 필드에 들어가 DB 정합성이 깨지는 문제가 발생.',
        solution:
          '두 단계로 해결. (1) 프론트에서 필드명 키워드(front/word/term/단어 등)로 자동 추론하여 첫 매핑을 미리 채워줌. (2) 백엔드 미리보기 응답에 노트 전체 기준 필드 통계(fieldStats: avgLen, maxLen)를 포함시켜, 사용자가 매핑한 word 필드의 maxLen이 50자를 넘으면 업로드 버튼 단계에서 즉시 거부. 단순 5건 샘플로는 놓칠 수 있는 케이스를 전체 데이터 기준으로 가드.',
      },
      {
        title: 'CSV 한글 인코딩 문제',
        situation:
          '한국 사용자가 엑셀에서 "다른 이름으로 저장"으로 만든 CSV는 cp949로 저장되는 경우가 많았고, 일부는 UTF-8 BOM 포함. 단일 인코딩으로 읽으면 한쪽이 깨지는 문제가 반복적으로 발생.',
        solution:
          'utf-8-sig(BOM 포함 UTF-8) → cp949 순서로 fallback 하는 read_csv_with_encoding_fallback 헬퍼를 두어 두 케이스를 모두 커버. 둘 다 실패하면 사용자에게 명확한 안내 메시지(UTF-8 또는 CP949로 저장 요청)를 반환하도록 설계.',
      },
    ],
    takeaways: [
      '확장 가능한 파이프라인 설계: 6종이라는 다양한 외부 포맷을 다루며, 추상화 레이어를 잘 두면 신규 요구사항에 드는 비용이 선형이 아닌 상수에 가까워진다는 것을 체감.',
      '풀스택 사고: 데이터 수집/전처리 → 백엔드 API → 프론트 UX → 앱 WebView 연동까지 하나의 기능을 끝까지 책임지면서, 어느 한 레이어의 결정이 다른 레이어에 어떤 비용을 만드는지 직접 가늠하는 감각을 키움.',
      '도메인 기반 검증 정책: "영단어는 50자를 넘지 않는다"처럼 도메인 지식에서 출발한 가드가 단순한 length check보다 훨씬 많은 데이터 깨짐을 막아준다는 것을 학습.',
      '레거시 인계와 협업: 초기 구축한 스크래핑 파이프라인을 다른 멤버에게 인계한 뒤에도 해당 데이터가 서비스의 핵심으로 동작 중이라는 점에서, 코드보다 인터페이스/데이터 계약을 명확히 두는 것의 중요성을 배움.',
    ],
  },
  {
    title: '오더앤고 (Order&Go)',
    period: '2023.04 - 2024.02',
    status: '완료',
    description: '식당, 카페 등의 매장을 효율적으로 관리하기 위한 매장 관리 웹사이트',
    thumbnailType: 'web',
    thumbnails: [
      // '/thumbnails/orderandgo-1.webp',
      // '/thumbnails/orderandgo-2.webp',
      // '/thumbnails/orderandgo-3.webp',
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
    thumbnailType: 'web',
    thumbnails: [
      // '/thumbnails/nyangmeong-1.webp',
      // '/thumbnails/nyangmeong-2.webp',
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
