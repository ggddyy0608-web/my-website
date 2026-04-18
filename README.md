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

## 주요 개선 이력

- 메인 히어로 문구 개편 및 사진 레이아웃 조정
- 위치 섹션 2열 카드 + 안내 배너로 재설계
- 프로필 바로가기 링크 추가
- 블로그 RSS 로딩 속도 개선 (CDN stale-while-revalidate + 클라이언트 세션 캐시)
- 모바일 반응형 개선 (헤더 축약, 히어로 가독성 오버레이)

## 빌드 및 배포

```bash
npm run build
vercel --prod
```
