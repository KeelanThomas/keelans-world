const STORAGE_KEY = "keelans-world-v1";

const avatars = ["😀","😎","🤩","🦖","🐶","🐱","🦁","🐼","🐸","🦊","🐙","🦄","🚀","🌈","⭐","🍕","🎮","⚽","🚗","🎵","🔤","🌎","👾","🤖"];
const colors = ["#2563eb","#7c3aed","#db2777","#e11d48","#ea580c","#ca8a04","#16a34a","#0d9488","#0891b2","#4f46e5","#9333ea","#475569"];

const translations = {
  en: {
    languageName: "English", language: "Language", welcome: "Welcome to", chooseActivity: "Choose an activity",
    profileStudio: "Profile Studio", profileStudioSub: "Create, rename, recolor, and rearrange profiles.",
    alphabetExplorer: "Alphabet Explorer", alphabetExplorerSub: "Explore letters in different languages.",
    surpriseMe: "Surprise Me!", surpriseMeSub: "Change the whole look instantly.",
    whosWatching: "Who's Watching?", newProfile: "New Profile", editProfile: "Edit Profile",
    name: "Name", avatar: "Avatar", color: "Color", save: "Save", delete: "Delete",
    pickLetter: "Pick a letter", saved: "Saved!", created: "Profile created!", deleted: "Profile deleted!",
    surprise: "Surprise!"
  },
  es: {
    languageName: "Español", language: "Idioma", welcome: "Bienvenido a", chooseActivity: "Elige una actividad",
    profileStudio: "Estudio de perfiles", profileStudioSub: "Crea, cambia nombres, colores y perfiles.",
    alphabetExplorer: "Explorador del alfabeto", alphabetExplorerSub: "Explora letras en diferentes idiomas.",
    surpriseMe: "¡Sorpréndeme!", surpriseMeSub: "Cambia todo el diseño al instante.",
    whosWatching: "¿Quién está mirando?", newProfile: "Nuevo perfil", editProfile: "Editar perfil",
    name: "Nombre", avatar: "Avatar", color: "Color", save: "Guardar", delete: "Eliminar",
    pickLetter: "Elige una letra", saved: "¡Guardado!", created: "¡Perfil creado!", deleted: "¡Perfil eliminado!",
    surprise: "¡Sorpresa!"
  },
  fr: {
    languageName: "Français", language: "Langue", welcome: "Bienvenue dans", chooseActivity: "Choisis une activité",
    profileStudio: "Studio de profils", profileStudioSub: "Crée, renomme et recolore des profils.",
    alphabetExplorer: "Explorateur d'alphabet", alphabetExplorerSub: "Explore les lettres dans plusieurs langues.",
    surpriseMe: "Surprends-moi !", surpriseMeSub: "Change tout le style instantanément.",
    whosWatching: "Qui regarde ?", newProfile: "Nouveau profil", editProfile: "Modifier le profil",
    name: "Nom", avatar: "Avatar", color: "Couleur", save: "Enregistrer", delete: "Supprimer",
    pickLetter: "Choisis une lettre", saved: "Enregistré !", created: "Profil créé !", deleted: "Profil supprimé !",
    surprise: "Surprise !"
  },
  de: {
    languageName: "Deutsch", language: "Sprache", welcome: "Willkommen bei", chooseActivity: "Wähle eine Aktivität",
    profileStudio: "Profilstudio", profileStudioSub: "Erstelle, benenne und färbe Profile.",
    alphabetExplorer: "Alphabet-Entdecker", alphabetExplorerSub: "Entdecke Buchstaben in verschiedenen Sprachen.",
    surpriseMe: "Überrasch mich!", surpriseMeSub: "Ändere sofort das ganze Aussehen.",
    whosWatching: "Wer schaut?", newProfile: "Neues Profil", editProfile: "Profil bearbeiten",
    name: "Name", avatar: "Avatar", color: "Farbe", save: "Speichern", delete: "Löschen",
    pickLetter: "Wähle einen Buchstaben", saved: "Gespeichert!", created: "Profil erstellt!", deleted: "Profil gelöscht!",
    surprise: "Überraschung!"
  },
  it: {
    languageName: "Italiano", language: "Lingua", welcome: "Benvenuto in", chooseActivity: "Scegli un'attività",
    profileStudio: "Studio profili", profileStudioSub: "Crea, rinomina e colora i profili.",
    alphabetExplorer: "Esplora alfabeto", alphabetExplorerSub: "Esplora le lettere in più lingue.",
    surpriseMe: "Sorprendimi!", surpriseMeSub: "Cambia subito tutto lo stile.",
    whosWatching: "Chi sta guardando?", newProfile: "Nuovo profilo", editProfile: "Modifica profilo",
    name: "Nome", avatar: "Avatar", color: "Colore", save: "Salva", delete: "Elimina",
    pickLetter: "Scegli una lettera", saved: "Salvato!", created: "Profilo creato!", deleted: "Profilo eliminato!",
    surprise: "Sorpresa!"
  },
  pt: {
    languageName: "Português", language: "Idioma", welcome: "Bem-vindo ao", chooseActivity: "Escolha uma atividade",
    profileStudio: "Estúdio de perfis", profileStudioSub: "Crie, renomeie e mude as cores dos perfis.",
    alphabetExplorer: "Explorador do alfabeto", alphabetExplorerSub: "Explore letras em vários idiomas.",
    surpriseMe: "Surpreenda-me!", surpriseMeSub: "Mude todo o visual instantaneamente.",
    whosWatching: "Quem está assistindo?", newProfile: "Novo perfil", editProfile: "Editar perfil",
    name: "Nome", avatar: "Avatar", color: "Cor", save: "Salvar", delete: "Excluir",
    pickLetter: "Escolha uma letra", saved: "Salvo!", created: "Perfil criado!", deleted: "Perfil excluído!",
    surprise: "Surpresa!"
  },
  ja: {
    languageName: "日本語", language: "言語", welcome: "ようこそ", chooseActivity: "アクティビティを選んでください",
    profileStudio: "プロフィールスタジオ", profileStudioSub: "プロフィールの名前、色、アバターを変更できます。",
    alphabetExplorer: "文字エクスプローラー", alphabetExplorerSub: "いろいろな言語の文字を見てみよう。",
    surpriseMe: "おまかせ！", surpriseMeSub: "デザインをすぐに変えます。",
    whosWatching: "だれが見ていますか？", newProfile: "新しいプロフィール", editProfile: "プロフィールを編集",
    name: "名前", avatar: "アバター", color: "色", save: "保存", delete: "削除",
    pickLetter: "文字を選んでください", saved: "保存しました！", created: "プロフィールを作りました！", deleted: "プロフィールを削除しました！",
    surprise: "サプライズ！"
  },
  ko: {
    languageName: "한국어", language: "언어", welcome: "환영합니다", chooseActivity: "활동을 선택하세요",
    profileStudio: "프로필 스튜디오", profileStudioSub: "프로필 이름, 색상, 아바타를 바꿔 보세요.",
    alphabetExplorer: "알파벳 탐험", alphabetExplorerSub: "여러 언어의 글자를 탐험해 보세요.",
    surpriseMe: "깜짝 변경!", surpriseMeSub: "전체 디자인을 바로 바꿉니다.",
    whosWatching: "누가 보고 있나요?", newProfile: "새 프로필", editProfile: "프로필 편집",
    name: "이름", avatar: "아바타", color: "색상", save: "저장", delete: "삭제",
    pickLetter: "글자를 선택하세요", saved: "저장했어요!", created: "프로필을 만들었어요!", deleted: "프로필을 삭제했어요!",
    surprise: "짜잔!"
  }
};

const alphabetSets = {
  en: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  es: "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split(""),
  fr: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  de: "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜẞ".split(""),
  it: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  pt: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  ja: ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん"],
  ko: ["ㄱ","ㄴ","ㄷ","ㄹ","ㅁ","ㅂ","ㅅ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ","ㅏ","ㅑ","ㅓ","ㅕ","ㅗ","ㅛ","ㅜ","ㅠ","ㅡ","ㅣ"]
};

const defaultState = {
  language: "en",
  theme: 0,
  profiles: [
    { id: crypto.randomUUID(), name: "Keelan", avatar: "😀", color: "#2563eb" },
    { id: crypto.randomUUID(), name: "Dinosaur", avatar: "🦖", color: "#16a34a" },
    { id: crypto.randomUUID(), name: "Rocket", avatar: "🚀", color: "#7c3aed" }
  ]
};

let state = loadState();
let editingId = null;
let draftAvatar = avatars[0];
let draftColor = colors[0];

const $ = (id) => document.getElementById(id);

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && Array.isArray(saved.profiles) ? saved : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function t(key) {
  return translations[state.language]?.[key] ?? translations.en[key] ?? key;
}

function initLanguageSelect() {
  $("languageSelect").innerHTML = Object.entries(translations)
    .map(([code, data]) => `<option value="${code}">${data.languageName}</option>`)
    .join("");
  $("languageSelect").value = state.language;
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  $("languageLabel").textContent = t("language");
  $("welcomeText").textContent = t("welcome");
  $("chooseActivityText").textContent = t("chooseActivity");
  $("profileStudioText").textContent = t("profileStudio");
  $("profileStudioSubtext").textContent = t("profileStudioSub");
  $("alphabetExplorerText").textContent = t("alphabetExplorer");
  $("alphabetExplorerSubtext").textContent = t("alphabetExplorerSub");
  $("surpriseMeText").textContent = t("surpriseMe");
  $("surpriseMeSubtext").textContent = t("surpriseMeSub");
  $("profileStudioEyebrow").textContent = t("profileStudio");
  $("whosWatchingText").textContent = t("whosWatching");
  $("newProfileText").textContent = t("newProfile");
  $("alphabetEyebrow").textContent = t("alphabetExplorer");
  $("pickLetterText").textContent = t("pickLetter");
  $("editProfileTitle").textContent = t("editProfile");
  $("nameLabel").textContent = t("name");
  $("avatarLabel").textContent = t("avatar");
  $("colorLabel").textContent = t("color");
  $("deleteText").textContent = t("delete");
  $("saveText").textContent = t("save");
  renderAlphabet();
}

function showScreen(name) {
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  $(name + "Screen").classList.add("active");
}

function renderProfiles() {
  $("profilesGrid").innerHTML = "";
  state.profiles.forEach(profile => {
    const button = document.createElement("button");
    button.className = "profile-tile";
    button.style.background = `linear-gradient(145deg, ${profile.color}, #111827)`;
    button.innerHTML = `
      <span class="profile-avatar">${profile.avatar}</span>
      <span class="profile-name">${escapeHtml(profile.name)}</span>
    `;
    button.addEventListener("click", () => openProfileModal(profile.id));
    $("profilesGrid").appendChild(button);
  });
}

function renderAlphabet() {
  const letters = alphabetSets[state.language] ?? alphabetSets.en;
  $("alphabetGrid").innerHTML = "";
  letters.forEach(letter => {
    const button = document.createElement("button");
    button.className = "letter-button";
    button.textContent = letter;
    button.addEventListener("click", () => {
      $("bigLetter").textContent = letter;
      $("letterLanguageName").textContent = translations[state.language].languageName;
      $("letterDisplay").classList.remove("hidden");
    });
    $("alphabetGrid").appendChild(button);
  });
}

function buildPickers() {
  $("avatarPicker").innerHTML = "";
  avatars.forEach(avatar => {
    const button = document.createElement("button");
    button.className = "avatar-option";
    button.textContent = avatar;
    button.addEventListener("click", () => {
      draftAvatar = avatar;
      updatePickerSelections();
    });
    $("avatarPicker").appendChild(button);
  });

  $("colorPicker").innerHTML = "";
  colors.forEach(color => {
    const button = document.createElement("button");
    button.className = "color-option";
    button.style.background = color;
    button.setAttribute("aria-label", color);
    button.addEventListener("click", () => {
      draftColor = color;
      updatePickerSelections();
    });
    $("colorPicker").appendChild(button);
  });
}

function updatePickerSelections() {
  [...$("avatarPicker").children].forEach(btn => btn.classList.toggle("selected", btn.textContent === draftAvatar));
  [...$("colorPicker").children].forEach(btn => btn.classList.toggle("selected", rgbToHex(btn.style.backgroundColor) === draftColor.toLowerCase()));
}

function openProfileModal(id = null) {
  editingId = id;
  const profile = state.profiles.find(p => p.id === id);
  $("profileName").value = profile?.name ?? "";
  draftAvatar = profile?.avatar ?? avatars[Math.floor(Math.random() * avatars.length)];
  draftColor = profile?.color ?? colors[Math.floor(Math.random() * colors.length)];
  $("deleteProfileButton").classList.toggle("hidden", !profile);
  updatePickerSelections();
  $("profileModal").classList.remove("hidden");
  setTimeout(() => $("profileName").focus(), 50);
}

function closeProfileModal() {
  $("profileModal").classList.add("hidden");
  editingId = null;
}

function saveProfile() {
  const name = $("profileName").value.trim() || t("newProfile");

  if (editingId) {
    const profile = state.profiles.find(p => p.id === editingId);
    if (profile) Object.assign(profile, { name, avatar: draftAvatar, color: draftColor });
  } else {
    state.profiles.push({ id: crypto.randomUUID(), name, avatar: draftAvatar, color: draftColor });
  }

  saveState();
  renderProfiles();
  closeProfileModal();
  showToast(editingId ? t("saved") : t("created"));
}

function deleteProfile() {
  if (!editingId) return;
  state.profiles = state.profiles.filter(p => p.id !== editingId);
  saveState();
  renderProfiles();
  closeProfileModal();
  showToast(t("deleted"));
}

function surpriseMe() {
  const themes = [
    ["#0b1220","#111c31","#182640","#6ee7ff","#a78bfa"],
    ["#241231","#351449","#521c63","#ff8bd1","#a78bfa"],
    ["#08261d","#103b2d","#17543f","#7cf29a","#facc15"],
    ["#22140a","#3b210e","#583116","#ffb86b","#ff6b7a"],
    ["#071d2f","#0d3150","#13486f","#4dd0e1","#93c5fd"]
  ];
  state.theme = (state.theme + 1) % themes.length;
  const [bg,panel,panel2,accent,accent2] = themes[state.theme];
  const root = document.documentElement;
  root.style.setProperty("--bg", bg);
  root.style.setProperty("--panel", panel);
  root.style.setProperty("--panel-2", panel2);
  root.style.setProperty("--accent", accent);
  root.style.setProperty("--accent-2", accent2);

  state.language = Object.keys(translations)[Math.floor(Math.random() * Object.keys(translations).length)];
  $("languageSelect").value = state.language;
  saveState();
  applyTranslations();
  showToast(t("surprise"));
}

function showToast(message) {
  $("toast").textContent = message;
  $("toast").classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => $("toast").classList.add("hidden"), 1500);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[char]));
}

function rgbToHex(rgb) {
  const parts = rgb.match(/\d+/g);
  if (!parts) return rgb.toLowerCase();
  return "#" + parts.slice(0,3).map(n => Number(n).toString(16).padStart(2,"0")).join("");
}

document.querySelectorAll("[data-open]").forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.open));
});

$("homeButton").addEventListener("click", () => showScreen("home"));
$("addProfileButton").addEventListener("click", () => openProfileModal());
$("closeModalButton").addEventListener("click", closeProfileModal);
$("saveProfileButton").addEventListener("click", saveProfile);
$("deleteProfileButton").addEventListener("click", deleteProfile);
$("surpriseButton").addEventListener("click", surpriseMe);
$("closeLetterButton").addEventListener("click", () => $("letterDisplay").classList.add("hidden"));

$("languageSelect").addEventListener("change", (event) => {
  state.language = event.target.value;
  saveState();
  applyTranslations();
});

$("profileModal").addEventListener("click", (event) => {
  if (event.target === $("profileModal")) closeProfileModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProfileModal();
    $("letterDisplay").classList.add("hidden");
  }
});

initLanguageSelect();
buildPickers();
applyTranslations();
renderProfiles();
renderAlphabet();
