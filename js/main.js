const wedding = {
  groom: { ko: "형일", ja: "HyeongIl" },
  bride: { ko: "아야카", ja: "Ayaka" },
  date: "2026-11-29T12:00:00+09:00",
  venue: { ko: "셀레네 하우스웨딩 청주점", ja: "セレネハウスウェディング清州店" },
  address: "충청북도 청주시 흥덕구 직지대로693번길 21",
  mapUrl: "https://naver.me/5jJaDZgt",
  bus: {
    ko: "고인쇄박물관 정류장 하차\n버스: 831 · 823 · 862-2 · 863-1 · 747 · 745",
    ja: "「고인쇄박물관」停留所で下車\nバス：831・823・862-2・863-1・747・745",
  },
  parking: { ko: "웨딩홀 주차장 이용", ja: "式場の駐車場をご利用ください" },
  profiles: [
    {
      name: "HyeongIl",
      role: "GROOM",
      image: "assets/images/profile-hyon.jpg?v=20260920-1",
      birthDate: "1995-02-28",
      hometown: "韓国・報恩郡",
      hobby: "バイク・ゲーム・オパンチュウサギ",
      message: "メッセージを入力してください。",
    },
    {
      name: "Ayaka",
      role: "BRIDE",
      image: "assets/images/profile-aya.jpg?v=20260920-1",
      birthDate: "1995-09-30",
      hometown: "日本・東京都",
      hobby: "旅行・カフェ巡り・オパンチュウサギ",
      message: "メッセージを入力してください。",
    },
  ],
  accounts: [
    {
      label: { ko: "신랑 아버지" },
      bank: { ko: "농협" },
      number: "315-12-174695",
      owner: { ko: "박성주" },
    },
    {
      label: { ko: "신랑 어머니" },
      bank: { ko: "농협" },
      number: "403018-52-143435",
      owner: { ko: "엄상희" },
    },
  ],
};

// Deploy the Apps Script project as a web app, then enter the URL ending in /exec.
const guestbookEndpoint = "https://script.google.com/macros/s/AKfycbzwlfJ6y27snZXAvsvGnh9nUn2Pi3lmznSTXwOPx-aVQo2THe8rK8HsmnZyAWdJoLFz/exec";
const siteUrl = "https://park-gamza.github.io/Invitation/";
const shareVersion = "20260920";

const translations = {
  ko: {
    title: "결혼식 초대장", description: "소중한 분들을 저희의 결혼식에 초대합니다.",
    invitationTitle: "서로의 하루에<br>가장 다정한 사람이 되겠습니다.",
    invitationMessage: "계절이 바뀌는 동안 서로를 알아가며<br>함께하는 내일을 약속하게 되었습니다.<br><br>저희의 새로운 시작에 함께하시어<br>따뜻한 축복을 나누어 주시면 감사하겠습니다.",
    groomParents: "박성주 · 엄상희", sonOf: "의 아들 ", brideParents: "시라하시 히로미츠 · 시라하시 나오미", daughterOf: "의 딸 ",
    galleryTitle: "GALLERY", galleryDescription: "함께한 순간들을 담았습니다.", galleryLabel: "사진 갤러리", photoList: "전체 사진 목록", previousPhoto: "이전 사진", nextPhoto: "다음 사진", closePhoto: "확대 사진 닫기", enlargedPhoto: "확대 사진", samplePhoto: "사진 샘플", thumbnail: "썸네일",
    scheduleTitle: "SCHEDULE", locationTitle: "ACCESS", openMap: "지도 열기", copyAddress: "주소 복사", busLabel: "버스", parkingLabel: "주차", mapImageAlt: "셀레네 하우스웨딩 청주점 주변 지도",
    guestbookTitle: "GUESTBOOK", guestbookDescription: "두 사람에게 따뜻한 축하 메시지를 남겨주세요.", guestName: "이름", guestMessage: "메시지", guestNamePlaceholder: "이름을 입력해 주세요", guestMessagePlaceholder: "축하 메시지를 입력해 주세요", guestSubmit: "메시지 남기기", guestMore: "더 보기", guestLoading: "메시지를 불러오는 중입니다.", guestEmpty: "첫 번째 축하 메시지를 남겨주세요.", guestSaving: "메시지를 등록하는 중입니다.", guestSaved: "축하 메시지가 등록되었습니다.", guestLoadFailed: "방명록을 불러오지 못했습니다.", guestSaveFailed: "메시지를 등록하지 못했습니다. 잠시 후 다시 시도해 주세요.", guestSetup: "Apps Script 배포 URL을 설정하면 방명록을 사용할 수 있습니다.",
    departureTitle: "당일 귀국하시는 분들께", departureMessage: "당일 귀국 예정인 분들은<br><strong>오후 1시 50분까지 예식장 입구</strong>로 모여주세요.<br>공항까지 안내해 드립니다.",
    accountsTitle: "마음 전하실 곳", accountsDescription: "멀리서도 마음을 전해주시는 분들께 감사드립니다.", share: "청첩장 공유하기",
    calendarLabel: "예식 날짜 달력", weddingDay: "예식일", countdownLabel: "결혼식까지 남은 시간", completed: "함께해 주셔서 감사합니다.",
    copiedAddress: "주소를 복사했습니다.", copiedAccount: "계좌번호를 복사했습니다.", copiedLink: "청첩장 주소를 복사했습니다.", copyFailed: "복사하지 못했습니다. 다시 시도해 주세요.", shareFailed: "공유하지 못했습니다.", accountCopy: "계좌번호 복사", shareText: "결혼식에 초대합니다.", languageLabel: "언어 선택",
  },
  ja: {
    title: "結婚式のご招待", description: "私たちの結婚式にご招待いたします。",
    invitationTitle: "お互いの日々に寄り添い<br>優しさを分かち合ってまいります。",
    invitationMessage: "季節を重ねる中でお互いを知り<br>ともに歩む未来を約束しました。<br><br>私たちの新たな門出を<br>あたたかく見守っていただけましたら幸いです。",
    groomParents: "パク・ソンジュ · オム・サンヒ", sonOf: "の息子 ", brideParents: "シラハシ・ヒロミツ · シラハシ・ナオミ", daughterOf: "の娘 ",
    galleryTitle: "GALLERY", galleryDescription: "ともに過ごした日々の思い出です。", galleryLabel: "写真ギャラリー", photoList: "写真一覧", previousPhoto: "前の写真", nextPhoto: "次の写真", closePhoto: "拡大写真を閉じる", enlargedPhoto: "拡大写真", samplePhoto: "写真サンプル", thumbnail: "サムネイル",
    scheduleTitle: "SCHEDULE", locationTitle: "ACCESS", openMap: "地図を見る", copyAddress: "住所をコピー", busLabel: "バス", parkingLabel: "駐車場", mapImageAlt: "セレネハウスウェディング清州店の周辺地図",
    guestbookTitle: "GUESTBOOK", guestbookDescription: "ふたりへお祝いのメッセージをお寄せください。", guestName: "お名前", guestMessage: "メッセージ", guestNamePlaceholder: "お名前をご入力ください", guestMessagePlaceholder: "お祝いのメッセージをご入力ください", guestSubmit: "メッセージを送る", guestMore: "もっと見る", guestLoading: "メッセージを読み込んでいます。", guestEmpty: "最初のお祝いメッセージをお寄せください。", guestSaving: "メッセージを送信しています。", guestSaved: "メッセージを登録しました。", guestLoadFailed: "ゲストブックを読み込めませんでした。", guestSaveFailed: "メッセージを登録できませんでした。しばらくしてからもう一度お試しください。", guestSetup: "Apps ScriptのデプロイURLを設定するとゲストブックを利用できます。",
    profilePhoto: "プロフィール写真", profileBirthDate: "生年月日", profileHometown: "出身地", profileHobby: "趣味", profileMessage: "メッセージ",
    departureTitle: "当日ご帰国される皆さまへ", departureMessage: "当日ご帰国予定の方は、<br><strong>13時50分までに式場入口</strong>へお集まりください。<br>空港までご案内いたします。",
    accountsTitle: "ご祝儀のご案内", accountsDescription: "遠方からお祝いくださる皆さまに感謝申し上げます。", share: "招待状を共有",
    calendarLabel: "結婚式の日付のカレンダー", weddingDay: "挙式日", countdownLabel: "結婚式までの残り時間", completed: "お越しいただきありがとうございました。",
    copiedAddress: "住所をコピーしました。", copiedAccount: "口座番号をコピーしました。", copiedLink: "招待状のURLをコピーしました。", copyFailed: "コピーできませんでした。もう一度お試しください。", shareFailed: "共有できませんでした。", accountCopy: "口座番号をコピー", shareText: "結婚式にご招待いたします。", languageLabel: "言語選択",
  },
};

const $ = (selector) => document.querySelector(selector);
const date = new Date(wedding.date);
const [eventYear, eventMonth, eventDay] = wedding.date.slice(0, 10).split("-").map(Number);
const timeZone = "Asia/Seoul";
let toastTimer;
let language = new URLSearchParams(location.search).get("lang") === "ja" ? "ja" : "ko";
let galleryIndex = 0;
let galleryAnimating = false;
let lightboxLastFocus = null;
let guestbookMessages = [];
let guestbookVisibleCount = 5;

function setText(selector, value) { $(selector).textContent = value; }

function getShareUrl() {
  const url = language === "ja" ? new URL("ja/", siteUrl) : new URL(siteUrl);
  url.searchParams.set("v", shareVersion);
  return url.href;
}

function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove("is-visible"), 2500);
}

function initHero() {
  const hero = $(".hero");
  const loader = $(".hero__loading");
  const sources = ["assets/images/screen-1.jpg", "assets/images/screen-2.jpg"];
  const preload = (source) => new Promise((resolve) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = resolve;
    image.src = source;
  });

  Promise.all(sources.map(preload)).then(() => {
    requestAnimationFrame(() => hero.classList.add("is-ready"));
    setTimeout(() => { loader.hidden = true; }, 700);
  });
}

async function copy(value, message) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
    } else {
      const input = document.createElement("textarea");
      input.value = value;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.append(input);
      input.select();
      const success = document.execCommand("copy");
      input.remove();
      if (!success) throw new Error("Copy failed");
    }
    toast(message);
  } catch { toast(translations[language].copyFailed); }
}

function renderCalendar() {
  const t = translations[language];
  const year = eventYear;
  const month = eventMonth - 1;
  const day = eventDay;
  const grid = $("#calendar-grid");
  grid.replaceChildren();
  $(".calendar").setAttribute("aria-label", t.calendarLabel);
  ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].forEach((label, index) => {
    const cell = document.createElement("span");
    cell.textContent = label;
    cell.className = `weekday${index === 0 ? " sunday" : ""}`;
    grid.append(cell);
  });
  const offset = new Date(year, month, 1).getDay();
  const total = new Date(year, month + 1, 0).getDate();
  for (let i = 0; i < offset; i++) grid.append(document.createElement("span"));
  for (let i = 1; i <= total; i++) {
    const cell = document.createElement("span");
    cell.textContent = i;
    if ((offset + i - 1) % 7 === 0) cell.classList.add("sunday");
    if (i === day) { cell.classList.add("wedding-day"); cell.setAttribute("aria-label", `${i}${language === "ko" ? "일" : "日"}, ${t.weddingDay}`); }
    grid.append(cell);
  }
  setText("#calendar-month", new Intl.DateTimeFormat("en", { month: "long", year: "numeric", timeZone }).format(date).toUpperCase());
}

function renderCountdown() {
  const element = $("#countdown");
  const t = translations[language];
  const remaining = date.getTime() - Date.now();
  if (remaining <= 0) { element.textContent = t.completed; return; }

  const totalSeconds = Math.floor(remaining / 1000);
  const values = [
    [Math.floor(totalSeconds / 86400), "Days"],
    [Math.floor((totalSeconds % 86400) / 3600), "Hours"],
    [Math.floor((totalSeconds % 3600) / 60), "Minutes"],
    [totalSeconds % 60, "Seconds"],
  ];

  const fragment = document.createDocumentFragment();
  const heading = document.createElement("span");
  heading.className = "countdown__title";
  heading.innerHTML = '<span aria-hidden="true">♡</span> UNTIL OUR WEDDING <span aria-hidden="true">♡</span>';
  fragment.append(heading);
  values.forEach(([value, label], index) => {
    const unit = document.createElement("span");
    unit.className = "countdown__unit";
    const number = document.createElement("strong");
    number.textContent = index === 0 ? String(value) : String(value).padStart(2, "0");
    const caption = document.createElement("span");
    caption.textContent = label;
    unit.append(number, caption);
    fragment.append(unit);
  });
  element.setAttribute("aria-label", t.countdownLabel);
  element.replaceChildren(fragment);
}

function renderProfiles() {
  const family = $(".family");
  const profiles = $("#profiles");
  family.hidden = language === "ja";
  profiles.hidden = language !== "ja";
  profiles.replaceChildren();
  if (language !== "ja") return;

  const t = translations.ja;
  wedding.profiles.forEach((profile) => {
    const card = document.createElement("article");
    card.className = "profile";

    const image = document.createElement("img");
    image.className = "profile__photo";
    image.src = profile.image;
    image.alt = `${profile.name} ${t.profilePhoto}`;
    image.width = 1086;
    image.height = 1448;

    const role = document.createElement("span");
    role.className = "profile__role";
    role.textContent = profile.role;
    const name = document.createElement("h3");
    name.textContent = profile.name;

    const details = document.createElement("dl");
    [[t.profileBirthDate, profile.birthDate], [t.profileHometown, profile.hometown], [t.profileHobby, profile.hobby], [t.profileMessage, profile.message]].forEach(([label, value]) => {
      const term = document.createElement("dt");
      term.textContent = label;
      const description = document.createElement("dd");
      description.textContent = value;
      details.append(term, description);
    });

    card.append(image, role, name, details);
    profiles.append(card);
  });
}

function renderAccounts() {
  const section = $("#accounts");
  const list = $("#account-list");
  list.replaceChildren();
  if (language !== "ko" || !wedding.accounts.length) {
    section.hidden = true;
    return;
  }
  section.hidden = false;
  wedding.accounts.forEach(({ label, bank, number, owner }) => {
    const account = document.createElement("div");
    account.className = "account";
    const heading = document.createElement("strong");
    heading.className = "account__label";
    heading.textContent = typeof label === "string" ? label : label[language];
    const body = document.createElement("div");
    body.className = "account__body";
    const info = document.createElement("p");
    const localizedBank = typeof bank === "string" ? bank : bank[language];
    const localizedOwner = typeof owner === "string" ? owner : owner[language];
    info.textContent = `${localizedBank} ${number} · ${localizedOwner}`;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = translations[language].accountCopy;
    button.addEventListener("click", () => copy(number.replace(/\D/g, ""), translations[language].copiedAccount));
    body.append(info, button);
    account.append(heading, body);
    list.append(account);
  });
}

function renderGuestbook() {
  const t = translations[language];
  const list = $("#guestbook-list");
  const localizedMessages = guestbookMessages.filter((entry) => entry.lang === language);
  list.replaceChildren();
  if (!guestbookEndpoint) {
    const notice = document.createElement("p");
    notice.className = "guestbook__notice";
    notice.textContent = t.guestSetup;
    list.append(notice);
    return;
  }
  if (!localizedMessages.length) {
    const empty = document.createElement("p");
    empty.className = "guestbook__notice";
    empty.textContent = t.guestEmpty;
    list.append(empty);
    $("#guestbook-more").hidden = true;
    return;
  }
  const locale = language === "ko" ? "ko-KR" : "ja-JP";
  localizedMessages.slice(0, guestbookVisibleCount).forEach((entry) => {
    const article = document.createElement("article");
    article.className = "guestbook__entry";
    const header = document.createElement("header");
    const name = document.createElement("strong");
    name.textContent = entry.name;
    const dateText = document.createElement("time");
    const createdAt = new Date(entry.createdAt);
    dateText.dateTime = entry.createdAt;
    dateText.textContent = Number.isNaN(createdAt.getTime()) ? "" : new Intl.DateTimeFormat(locale, { year: "numeric", month: "short", day: "numeric" }).format(createdAt);
    const message = document.createElement("p");
    message.textContent = entry.message;
    header.append(name, dateText);
    article.append(header, message);
    list.append(article);
  });
  $("#guestbook-more").hidden = guestbookVisibleCount >= localizedMessages.length;
}

async function loadGuestbook() {
  const status = $("#guestbook-status");
  if (!guestbookEndpoint) { renderGuestbook(); return false; }
  status.textContent = translations[language].guestLoading;
  try {
    const result = await loadGuestbookJsonp();
    if (!result.ok || !Array.isArray(result.messages)) throw new Error("Invalid response");
    guestbookMessages = result.messages;
    status.textContent = "";
    renderGuestbook();
    return true;
  } catch (error) {
    console.error("Guestbook load failed", error);
    status.textContent = translations[language].guestLoadFailed;
    return false;
  }
}

function loadGuestbookJsonp() {
  return new Promise((resolve, reject) => {
    const callbackName = `guestbookCallback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const url = new URL(guestbookEndpoint);
    const cleanup = () => { delete window[callbackName]; script.remove(); clearTimeout(timer); };
    const timer = setTimeout(() => { cleanup(); reject(new Error("Guestbook request timed out")); }, 10000);
    window[callbackName] = (result) => { cleanup(); resolve(result); };
    url.searchParams.set("action", "list");
    url.searchParams.set("prefix", callbackName);
    url.searchParams.set("_", Date.now());
    script.src = url;
    script.onerror = () => { cleanup(); reject(new Error("Guestbook request failed")); };
    document.head.append(script);
  });
}

async function submitGuestbook(event) {
  event.preventDefault();
  const t = translations[language];
  const form = event.currentTarget;
  const status = $("#guestbook-status");
  if (!guestbookEndpoint) { status.textContent = t.guestSetup; return; }
  const button = form.querySelector("button[type='submit']");
  const data = new URLSearchParams(new FormData(form));
  const submittedName = data.get("name").trim();
  const submittedMessage = data.get("message").trim();
  const submittedLanguage = language;
  data.set("lang", submittedLanguage);
  button.disabled = true;
  status.textContent = t.guestSaving;
  try {
    await fetch(guestbookEndpoint, { method: "POST", body: data, mode: "no-cors", redirect: "follow" });
    guestbookVisibleCount = 5;
    await new Promise((resolve) => setTimeout(resolve, 800));
    const loaded = await loadGuestbook();
    const saved = loaded && guestbookMessages.some((entry) => entry.lang === submittedLanguage && entry.name === submittedName && entry.message === submittedMessage);
    if (!saved) throw new Error("The submitted message was not found in the guestbook response.");
    form.reset();
    status.textContent = t.guestSaved;
  } catch (error) {
    console.error("Guestbook save failed", error);
    status.textContent = t.guestSaveFailed;
  } finally {
    button.disabled = false;
  }
}

function showGalleryImage(index) {
  const thumbnails = [...document.querySelectorAll(".gallery__thumbnail")];
  galleryIndex = (index + thumbnails.length) % thumbnails.length;
  const selected = thumbnails[galleryIndex];
  setText(".gallery__count", `${galleryIndex + 1} / ${thumbnails.length}`);
  document.querySelectorAll(".gallery__slide").forEach((slide) => slide.classList.toggle("is-active", Number(slide.dataset.galleryIndex) === galleryIndex));
  thumbnails.forEach((thumbnail, thumbnailIndex) => {
    const active = thumbnailIndex === galleryIndex;
    thumbnail.classList.toggle("is-active", active);
    if (active) thumbnail.setAttribute("aria-current", "true");
    else thumbnail.removeAttribute("aria-current");
  });
  positionGalleryTrack(galleryIndex + 1, false);
  revealGalleryThumbnail(selected);
}

function revealGalleryThumbnail(selected) {
  const strip = $(".gallery__thumbnails");
  const thumbnails = [...strip.querySelectorAll(".gallery__thumbnail")];
  const index = thumbnails.indexOf(selected);
  const maxScroll = strip.scrollWidth - strip.clientWidth;
  let target = strip.scrollLeft;

  if (index === 0) target = 0;
  else if (index === thumbnails.length - 1) target = maxScroll;
  else {
    const stripRect = strip.getBoundingClientRect();
    const selectedRect = selected.getBoundingClientRect();
    const edgeGap = 8;
    if (selectedRect.left < stripRect.left + edgeGap) target -= stripRect.left + edgeGap - selectedRect.left;
    if (selectedRect.right > stripRect.right - edgeGap) target += selectedRect.right - stripRect.right + edgeGap;
  }

  strip.scrollTo({ left: Math.max(0, Math.min(target, maxScroll)), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

function positionGalleryTrack(position, animate = true) {
  const viewer = $(".gallery__window");
  const track = $(".gallery__track");
  const slides = [...track.querySelectorAll(".gallery__slide")];
  const selectedSlide = slides[position];
  if (!selectedSlide) return;
  track.classList.toggle("is-jumping", !animate);
  const offset = viewer.clientWidth / 2 - selectedSlide.offsetLeft - selectedSlide.clientWidth / 2;
  track.style.transform = `translate3d(${offset}px, 0, 0)`;
  if (!animate) requestAnimationFrame(() => requestAnimationFrame(() => track.classList.remove("is-jumping")));
}

function moveGallery(direction) {
  if (galleryAnimating) return;
  const total = document.querySelectorAll(".gallery__thumbnail").length;
  const nextIndex = (galleryIndex + direction + total) % total;
  const crossesStart = galleryIndex === 0 && direction < 0;
  const crossesEnd = galleryIndex === total - 1 && direction > 0;
  const targetPosition = crossesStart ? 0 : crossesEnd ? total + 1 : nextIndex + 1;
  const snapPosition = crossesStart ? total : crossesEnd ? 1 : null;
  galleryIndex = nextIndex;
  updateGallerySelection(targetPosition);
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    positionGalleryTrack(snapPosition === null ? targetPosition : snapPosition, false);
    if (snapPosition !== null) updateGallerySelection(snapPosition);
    return;
  }
  galleryAnimating = true;
  const track = $(".gallery__track");
  const finish = (event) => {
    if (event.target !== track || event.propertyName !== "transform") return;
    track.removeEventListener("transitionend", finish);
    if (snapPosition !== null) {
      positionGalleryTrack(snapPosition, false);
      updateGallerySelection(snapPosition);
    }
    galleryAnimating = false;
  };
  track.addEventListener("transitionend", finish);
  positionGalleryTrack(targetPosition, true);
}

function updateGallerySelection(activePosition) {
  const thumbnails = [...document.querySelectorAll(".gallery__thumbnail")];
  const allSlides = [...document.querySelectorAll(".gallery__slide")];
  setText(".gallery__count", `${galleryIndex + 1} / ${thumbnails.length}`);
  allSlides.forEach((slide, index) => slide.classList.toggle("is-active", index === activePosition));
  thumbnails.forEach((thumbnail, index) => {
    const active = index === galleryIndex;
    thumbnail.classList.toggle("is-active", active);
    if (active) thumbnail.setAttribute("aria-current", "true");
    else thumbnail.removeAttribute("aria-current");
  });
  const selected = thumbnails[galleryIndex];
  revealGalleryThumbnail(selected);
}

function renderLightbox() {
  const slides = [...document.querySelectorAll(".gallery__slide:not(.is-clone)")];
  const source = slides[galleryIndex].querySelector("img");
  const image = $("#lightbox-image");
  image.src = source.src;
  image.alt = source.alt;
  setText("#lightbox-count", `${galleryIndex + 1} / ${slides.length}`);
}

function openLightbox() {
  lightboxLastFocus = document.activeElement;
  renderLightbox();
  $("#gallery-lightbox").hidden = false;
  document.body.classList.add("lightbox-open");
  $("#lightbox-close").focus();
}

function closeLightbox() {
  $("#gallery-lightbox").hidden = true;
  document.body.classList.remove("lightbox-open");
  lightboxLastFocus?.focus();
}

function moveLightbox(direction) {
  showGalleryImage(galleryIndex + direction);
  renderLightbox();
}

async function discoverGalleryImages() {
  const sources = [];
  for (let number = 1; number <= 100; number += 1) {
    const source = `assets/images/gallary-${number}.jpg`;
    const exists = await new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve(true);
      image.onerror = () => resolve(false);
      image.src = source;
    });
    if (!exists) break;
    sources.push(source);
  }
  return sources;
}

function buildGallery(sources) {
  const track = $(".gallery__track");
  const thumbnails = $(".gallery__thumbnails");
  sources.forEach((source, index) => {
    const slide = document.createElement("button");
    slide.type = "button";
    slide.className = "gallery__slide";
    slide.dataset.galleryIndex = index;
    const image = document.createElement("img");
    image.src = source;
    image.alt = `갤러리 사진 ${index + 1}`;
    image.decoding = "async";
    slide.append(image);
    track.append(slide);

    const thumbnail = document.createElement("button");
    thumbnail.type = "button";
    thumbnail.className = "gallery__thumbnail";
    thumbnail.dataset.galleryIndex = index;
    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = source;
    thumbnailImage.alt = `갤러리 사진 ${index + 1} 썸네일`;
    thumbnailImage.loading = "lazy";
    thumbnail.append(thumbnailImage);
    thumbnails.append(thumbnail);
  });
}

async function initGallery() {
  const viewer = $(".gallery__viewer");
  const track = $(".gallery__track");
  const sources = await discoverGalleryImages();
  if (!sources.length) {
    viewer.hidden = true;
    $(".gallery__caption").hidden = true;
    $(".gallery__thumbnails").hidden = true;
    return;
  }
  buildGallery(sources);
  const originalSlides = [...track.querySelectorAll(".gallery__slide")];
  const firstClone = originalSlides[0].cloneNode(true);
  const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);
  [firstClone, lastClone].forEach((clone) => {
    clone.classList.add("is-clone");
    clone.setAttribute("aria-hidden", "true");
    clone.tabIndex = -1;
  });
  track.prepend(lastClone);
  track.append(firstClone);
  let touchStartX = 0;
  let lightboxTouchStartX = 0;
  $(".gallery__arrow--prev").addEventListener("click", () => moveGallery(-1));
  $(".gallery__arrow--next").addEventListener("click", () => moveGallery(1));
  document.querySelectorAll(".gallery__thumbnail").forEach((thumbnail) => thumbnail.addEventListener("click", () => { if (!galleryAnimating) showGalleryImage(Number(thumbnail.dataset.galleryIndex)); }));
  document.querySelectorAll(".gallery__slide:not(.is-clone)").forEach((slide) => slide.addEventListener("click", () => {
    if (galleryAnimating) return;
    const index = Number(slide.dataset.galleryIndex);
    if (index === galleryIndex) openLightbox();
    else showGalleryImage(index);
  }));
  viewer.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") moveGallery(-1);
    if (event.key === "ArrowRight") moveGallery(1);
  });
  viewer.addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  viewer.addEventListener("touchend", (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 45) moveGallery(distance < 0 ? 1 : -1);
  }, { passive: true });
  $("#lightbox-close").addEventListener("click", closeLightbox);
  $("#lightbox-prev").addEventListener("click", () => moveLightbox(-1));
  $("#lightbox-next").addEventListener("click", () => moveLightbox(1));
  $("#gallery-lightbox").addEventListener("click", (event) => { if (event.target === event.currentTarget) closeLightbox(); });
  $("#gallery-lightbox").addEventListener("touchstart", (event) => { lightboxTouchStartX = event.changedTouches[0].clientX; }, { passive: true });
  $("#gallery-lightbox").addEventListener("touchend", (event) => {
    const distance = event.changedTouches[0].clientX - lightboxTouchStartX;
    if (Math.abs(distance) > 45) moveLightbox(distance < 0 ? 1 : -1);
  }, { passive: true });
  document.addEventListener("keydown", (event) => {
    if ($("#gallery-lightbox").hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") moveLightbox(-1);
    if (event.key === "ArrowRight") moveLightbox(1);
  });
  window.addEventListener("resize", () => positionGalleryTrack(galleryIndex + 1, false));
  showGalleryImage(0);
}

function renderGalleryLanguage() {
  const t = translations[language];
  $(".gallery__viewer").setAttribute("aria-label", t.galleryLabel);
  $(".gallery__thumbnails").setAttribute("aria-label", t.photoList);
  $(".gallery__arrow--prev").setAttribute("aria-label", t.previousPhoto);
  $(".gallery__arrow--next").setAttribute("aria-label", t.nextPhoto);
  $("#gallery-lightbox").setAttribute("aria-label", t.enlargedPhoto);
  $("#lightbox-close").setAttribute("aria-label", t.closePhoto);
  $("#lightbox-prev").setAttribute("aria-label", t.previousPhoto);
  $("#lightbox-next").setAttribute("aria-label", t.nextPhoto);
  document.querySelectorAll(".gallery__thumbnail").forEach((thumbnail, index) => {
    const letter = String.fromCharCode(65 + index);
    thumbnail.setAttribute("aria-label", `Gallery ${letter} · ${t.thumbnail}`);
    thumbnail.querySelector("img").alt = `Gallery ${letter} · ${t.thumbnail}`;
  });
  document.querySelectorAll(".gallery__slide").forEach((slide) => {
    const logicalIndex = Number(slide.dataset.galleryIndex);
    const letter = String.fromCharCode(65 + logicalIndex);
    slide.setAttribute("aria-label", `Gallery ${letter} · ${t.samplePhoto}`);
    slide.querySelector("img").alt = `Gallery ${letter} · ${t.samplePhoto}`;
  });
  showGalleryImage(galleryIndex);
}

function renderLanguage() {
  const t = translations[language];
  const locale = language === "ko" ? "ko-KR" : "ja-JP";
  const dateText = new Intl.DateTimeFormat(locale, { year: "numeric", month: "long", day: "numeric", weekday: "long", hour: "numeric", minute: "2-digit", hour12: language === "ko", timeZone }).format(date);
  document.documentElement.lang = language;
  document.title = `${wedding.groom[language]} & ${wedding.bride[language]} | ${t.title}`;
  document.querySelector('meta[name="description"]').content = t.description;
  $(".language-switch").setAttribute("aria-label", t.languageLabel);
  document.querySelectorAll("[data-lang]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === language)));
  document.querySelectorAll("[data-i18n]").forEach((node) => { node.textContent = t[node.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-html]").forEach((node) => { node.innerHTML = t[node.dataset.i18nHtml]; });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => { node.placeholder = t[node.dataset.i18nPlaceholder]; });
  document.querySelectorAll("[data-groom]").forEach((node) => { node.textContent = wedding.groom[language]; });
  document.querySelectorAll("[data-bride]").forEach((node) => { node.textContent = wedding.bride[language]; });
  setText("#hero-date", language === "ko" ? `${eventYear}.${String(eventMonth).padStart(2, "0")}.${String(eventDay).padStart(2, "0")}(일) 오후12:00` : `${eventYear}.${String(eventMonth).padStart(2, "0")}.${String(eventDay).padStart(2, "0")}(日) 12:00`);
  setText("#hero-place", wedding.venue[language]);
  setText("#schedule-date", dateText);
  setText("#venue", wedding.venue[language]);
  setText("#address", wedding.address);
  setText("#bus", wedding.bus[language]);
  setText("#parking", wedding.parking[language]);
  $("#location-map-image").alt = t.mapImageAlt;
  $("#departure-guide").hidden = language !== "ja";
  renderGalleryLanguage();
  renderGuestbook();
  renderCalendar();
  renderCountdown();
  renderProfiles();
  renderAccounts();
}

async function init() {
  if (Number.isNaN(date.getTime())) { console.error("The wedding date format is invalid."); return; }
  initHero();
  await initGallery();
  $("#guestbook-form").addEventListener("submit", submitGuestbook);
  $("#guestbook-more").addEventListener("click", () => { guestbookVisibleCount += 5; renderGuestbook(); });
  $("#map-link").href = wedding.mapUrl || `https://map.naver.com/p/search/${encodeURIComponent(wedding.address)}`;
  $("#location-map-link").href = wedding.mapUrl || `https://map.naver.com/p/search/${encodeURIComponent(wedding.address)}`;
  document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => {
    language = button.dataset.lang;
    const url = new URL(location.href);
    if (language === "ja") url.searchParams.set("lang", "ja");
    else url.searchParams.delete("lang");
    history.replaceState(null, "", url);
    renderLanguage();
  }));
  $("#copy-address").addEventListener("click", () => copy(wedding.address, translations[language].copiedAddress));
  $("#share").addEventListener("click", async () => {
    const t = translations[language];
    const shareUrl = getShareUrl();
    if (navigator.share) {
      try { await navigator.share({ title: document.title, text: `${wedding.groom[language]} ♥ ${wedding.bride[language]} ${t.shareText}`, url: shareUrl }); }
      catch (error) { if (error.name !== "AbortError") toast(t.shareFailed); }
    } else { copy(shareUrl, t.copiedLink); }
  });
  renderLanguage();
  setInterval(renderCountdown, 1000);
  loadGuestbook();
}

init();
