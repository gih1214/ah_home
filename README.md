# ah_home

구아현 개인 포트폴리오 사이트입니다.

## 기술 스택
- React 19 + Vite
- Tailwind CSS v4
- framer-motion
- Vercel Serverless Functions (Velog 블로그 프록시)

## 개발 서버 실행
```bash
cd frontend
npm install
npm run dev
```

## 빌드 확인
```bash
cd frontend
npm run build
npm run preview
```

## 배포
Vercel에 연결되어 있으며, `frontend/` 디렉터리를 Root Directory로 지정해 배포합니다.

환경 변수:
- `VELOG_USERNAME` — Velog 게시글을 가져올 사용자명
