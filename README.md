# 피수민 포트폴리오

순수 HTML/CSS/JS로 만든 개발자 포트폴리오 사이트입니다. 빌드 도구 없이 바로 브라우저에서 열어볼 수 있습니다.

**배포 주소: https://portfolio-psm.vercel.app**

## 미리보기

`index.html` 파일을 더블클릭하거나, VSCode의 Live Server 확장으로 열어보세요.

## 폴더 구조

```
index.html                    메인 페이지
css/style.css                 스타일 (다크 테마 + 포인트 컬러)
js/script.js                  인터랙션 (스크롤 애니메이션, 스킬 툴팁 등)
assets/icons/                 프로젝트 로고/아이콘
assets/resume.pdf             이력서 PDF (추가 예정)
projects/beautyguard.html     BeautyGuard 프로젝트 상세 페이지
projects/jcrew.html           J-CREW 프로젝트 상세 페이지
projects/jejutrip.html        JejuTrip AI 프로젝트 상세 페이지
```

## 남은 TODO

- [ ] `assets/resume.pdf` — 실제 이력서 PDF 파일 추가 (현재는 파일이 없어 다운로드 버튼이 404가 납니다)
- [ ] 프로젝트 상세 페이지 스크린샷 추가 (검토 중)

## 배포

GitHub 저장소(`PSM-0403/psm-portfolio`)와 Vercel이 연결되어 있어서, `main` 브랜치에 push하면 자동으로 재배포됩니다.

```
git add .
git commit -m "커밋 메시지"
git push
```

## 커스터마이징 팁

- 색상: `css/style.css` 상단 `:root` 변수(`--accent-1`, `--accent-2` 등)만 바꾸면 전체 톤이 바뀝니다.
- 섹션 추가/삭제: `index.html`의 `<section class="section" id="...">` 블록 단위로 되어 있어 복사/삭제가 쉽습니다.
- 프로젝트 상세 페이지: `projects/*.html`은 서로 구조가 동일해서, 새 프로젝트 추가 시 기존 파일을 복사해 내용만 바꾸면 됩니다.
