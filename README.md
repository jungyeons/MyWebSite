# Bae JungYeon Portfolio

배정연의 포트폴리오 PDF, 개인 GitHub 레포, 팀/조직 레포를 함께 검토해서 정리한 정적 포트폴리오 웹사이트입니다.
백엔드, 보안, AI/데이터, 인프라 프로젝트를 면접에서 바로 설명할 수 있는 형태로 묶었습니다.

## 바로 실행

터미널에서:

```bash
cd MyWebSite
./run-local.command
```

브라우저가 자동으로 `http://127.0.0.1:4173/`를 엽니다.
멈추려면 터미널에서 `Ctrl + C`를 누르면 됩니다.

더블클릭으로 실행하고 싶으면 Finder에서 `run-local.command`를 열어도 됩니다.

## 사이트에서 하는 일

- 핵심 프로젝트를 `전체`, `우선 어필`, `백엔드`, `보안`, `AI·데이터`, `인프라`, `프로덕트`로 필터링
- 검색어로 프로젝트 빠르게 찾기
- 프로젝트별 GitHub 저장소 또는 PDF 기반 근거 출처 표시
- 면접/자기소개용 짧은 소개 문구 복사
- 백엔드, 보안, AI/데이터, 배포 역량을 한 화면에서 정리

## 반영한 근거

- 개인 포트폴리오 PDF(로컬 참고 자료이며 저장소에는 포함하지 않음)
- `TrustRide/TrustRide`, `TrustRide/TrustRide_AI`
- `FC-DEV3-Final-Project/zoop-frontend`
- 로컬 클론 `book-back`, `book-front`, `book-android`
- `InsuranceSystem` 관련 조직 레포

## GitHub Pages로 공개하기

현재 레포에 파일은 올라가 있지만, GitHub Pages가 꺼져 있으면 공개 주소는 404가 납니다.
GitHub에서 아래처럼 한 번만 켜면 됩니다.

1. `jungyeons/MyWebSite` 저장소로 이동
2. `Settings` 클릭
3. 왼쪽 메뉴에서 `Pages` 클릭
4. `Build and deployment`의 `Source`를 `GitHub Actions`로 선택
5. `Actions` 탭에서 `Deploy static site to Pages` 워크플로를 수동 실행하거나 다음 커밋을 푸시

Pages가 켜진 뒤 예상 주소:

```text
https://jungyeons.github.io/MyWebSite/
```

## 수정 포인트

프로젝트 목록은 [app.js](./app.js)의 `projects` 배열에서 관리합니다.
문구와 레이아웃은 [index.html](./index.html),
디자인은 [styles.css](./styles.css)를 수정하면 됩니다.
