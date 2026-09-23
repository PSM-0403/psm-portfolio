# 피수민 포트폴리오

순수 HTML/CSS/JS로 만든 개발자 포트폴리오 사이트입니다. 빌드 도구 없이 바로 브라우저에서 열어볼 수 있습니다.

## 미리보기

`index.html` 파일을 더블클릭하거나, VSCode의 Live Server 확장으로 열어보세요.

## 폴더 구조

```
index.html        메인 페이지
css/style.css      스타일 (다크 테마 + 그라디언트 포인트 컬러)
js/script.js       인터랙션 (타이핑 효과, 스크롤 애니메이션, 파티클 배경 등)
assets/            이력서 PDF, 이미지 등을 넣는 폴더
```

## 꼭 수정해야 할 부분 (index.html 안 `TODO` 주석 참고)

- [ ] 소개 문구 / 자기소개 (`hero-desc`, `about-text`)
- [ ] 학력, 위치 등 기본 정보 (`about-facts`)
- [ ] 기술 스택 목록 (`skills-grid`)
- [ ] 프로젝트 4개 → 실제 프로젝트로 교체 (`projects-grid`) — 썸네일 이모지, 제목, 설명, 기술 태그, GitHub/데모 링크
- [ ] 경력/활동 타임라인 (`timeline`)
- [ ] 이메일 주소 (`#emailText`, `mailto:` 링크)
- [ ] GitHub / LinkedIn 링크
- [ ] `js/script.js`의 `roles` 배열 — 실제 직군/타이틀로 수정
- [ ] `assets/resume.pdf` — 실제 이력서 PDF 파일을 넣어주세요 (현재는 파일이 없어 다운로드 버튼이 404가 납니다)

## 배포 (GitHub Pages 추천)

1. 이 폴더를 새 GitHub 저장소로 push
2. 저장소 Settings → Pages → Branch를 `main` / `root`로 설정
3. 몇 분 후 `https://<username>.github.io/<repo>` 로 접속 가능

## 커스터마이징 팁

- 색상: `css/style.css` 상단 `:root` 변수(`--accent-1`, `--accent-2` 등)만 바꾸면 전체 톤이 바뀝니다.
- 섹션 추가/삭제: `index.html`의 `<section class="section" id="...">` 블록 단위로 되어 있어 복사/삭제가 쉽습니다.
