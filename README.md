# 모바일 청첩장

GitHub Pages에 바로 배포할 수 있는 정적 모바일 청첩장입니다. 빌드나 패키지 설치가 필요하지 않습니다.

## 파일 구성

```text
index.html       화면 구조와 인사말
css/style.css    반응형 디자인
js/main.js       예식 정보와 달력·복사·공유 기능
assets/images/   갤러리 샘플 이미지
google-apps-script/Code.gs  Google Sheets 방명록 API
```

## 정보 수정

1. `js/main.js` 맨 위 `wedding` 객체에서 이름, 예식 일시, 장소, 주소, **버스**·주차 정보를 수정하세요. 이름·장소·버스·주차는 `ko`와 `ja` 값을 각각 입력합니다. 예식 일시는 `2026-11-29T12:00:00+09:00`처럼 시간대를 포함해 입력합니다.
2. `js/main.js`의 `translations`에서 한국어·일본어 초대 문구와 양가 부모님 성함을 수정하세요.
3. 계좌 안내가 필요하면 `wedding.accounts` 배열에 예시 형식으로 항목을 추가하세요. 배열이 비어 있으면 안내 영역이 숨겨집니다.
4. `index.html`의 `<meta name="description">` 문구도 실제 내용에 맞게 바꾸세요.

### 사진 교체·추가

`assets/images/`에 실제 사진을 넣고 `index.html`의 `#gallery` 안에 있는 메인 슬라이드와 다섯 개 `.gallery__thumbnail` 이미지 경로를 바꾸세요. 현재 검정색 샘플 5장이 `GALLERY A`부터 `GALLERY E`까지 표시됩니다. 썸네일을 클릭하거나 메인 사진의 좌우 화살표 및 좌우 스와이프로 사진을 바꿀 수 있습니다. 메인 뷰어는 4:3 비율이며, 다른 비율의 사진은 화면에 맞춰 중앙을 기준으로 잘립니다.

사진을 추가할 때는 `.gallery__thumbnails` 안에 기존 버튼과 같은 형식으로 버튼을 추가하고 `data-gallery-index`를 0부터 순서대로 지정하세요. 사진 수와 알파벳 이름은 자동으로 갱신됩니다.

화면 맨 위 버튼으로 한국어와 일본어를 전환할 수 있습니다. 일본어를 선택하면 URL에 `?lang=ja`가 붙어 공유받은 사람도 일본어 화면으로 열 수 있습니다. **버스 안내 문구는 실제 노선·정류장 정보로 교체하세요.**

## Google Sheets 방명록 연결

방명록은 Google Apps Script 웹 앱을 통해 비공개 스프레드시트를 읽고 새 행을 추가합니다.

1. Google Sheets에서 방명록용 스프레드시트를 새로 만듭니다.
2. 상단의 **확장 프로그램 → Apps Script**를 엽니다.
3. 기본 코드를 지우고 이 저장소의 `google-apps-script/Code.gs` 내용을 붙여 넣어 저장합니다.
4. Apps Script의 **배포 → 새 배포 → 웹 앱**을 선택합니다.
5. **다음 사용자로 실행**은 본인, **액세스 권한이 있는 사용자**는 로그인 없이 접근할 수 있는 **모든 사용자(Anyone)** 로 설정하고 배포합니다. 처음 한 번은 Google Sheets 접근 권한을 승인해야 합니다. 배포 URL을 로그아웃 또는 시크릿 창에서 열었을 때 Google 로그인 화면 대신 JSON이 보여야 합니다.
6. 배포 후 받은 `/exec`로 끝나는 웹 앱 URL을 `js/main.js`의 `guestbookEndpoint`에 입력합니다.

```js
const guestbookEndpoint = "https://script.google.com/macros/s/배포_ID/exec";
```

처음 조회하거나 글을 등록하면 `Guestbook` 시트와 `createdAt`, `name`, `message`, `lang` 열이 자동으로 생성됩니다. 최근 메시지 100개를 읽고 화면에서는 현재 언어와 일치하는 메시지만 5개씩 표시합니다. 한국어 화면에서 작성한 글은 한국어 화면에, 일본어 화면에서 작성한 글은 일본어 화면에 표시됩니다.

Apps Script 코드를 바꾼 경우 **배포 관리 → 수정 → 새 버전**으로 다시 배포해야 운영 URL에 반영됩니다. 웹 앱은 누구나 호출할 수 있으므로 스팸이 생길 수 있으며, 문제가 있는 행은 스프레드시트에서 직접 삭제할 수 있습니다. 스프레드시트 자체를 웹에 공개할 필요는 없습니다.

## 배포

GitHub 저장소의 **Settings → Pages → Build and deployment**에서 **Deploy from a branch**를 선택하고, 브랜치의 **/(root)** 폴더를 지정하세요. 루트의 `index.html`이 진입점입니다.

로컬에서는 `index.html`을 브라우저로 열어 확인할 수 있습니다. 공유 기능은 지원 브라우저에서 공유 메뉴를 열고, 그 외에는 현재 주소를 복사합니다.
