# 반반운동센터 · 강동윤 개인 웹사이트

반반운동센터 운동지도사 강동윤의 센터 소개 및 개인 프로필 홈페이지입니다.

**배포 URL**: https://kang-dongyoon.vercel.app

## 기술 스택

- **React 19** + **TypeScript**
- **Vite** — 빌드 도구
- **Tailwind CSS v4** — 스타일링
- **Framer Motion** — 애니메이션
- **Vercel** — 배포 (Serverless Functions)

## 페이지 구조

| 경로 | 내용 |
|------|------|
| `/` | 메인 — 센터 히어로 + 위치 안내 (반반운동센터 · 365반반한의원) |
| `/profile` | 프로필 — 강동윤 학력 / 경력 / 자격증 / 연락처 |
| `/blog` | 블로그 — 네이버 블로그 RSS 카드 (9개/페이지) |

## 로컬 실행

```bash
npm install
npm run dev
```

## 빌드 및 배포

```bash
npm run build
vercel --prod
```
