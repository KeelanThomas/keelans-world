const STORAGE_KEY = "keelans-world-v1";

const avatars = ["😀","😎","🤩","🦖","🐶","🐱","🦁","🐼","🐸","🦊","🐙","🦄","🚀","🌈","⭐","🍕","🎮","⚽","🚗","🎵","🔤","🌎","👾","🤖"];
const colors = ["#2563eb","#7c3aed","#db2777","#e11d48","#ea580c","#ca8a04","#16a34a","#0d9488","#0891b2","#4f46e5","#9333ea","#475569"];

const BLOCK_COLUMNS = window.innerWidth <= 650 ? 12 : 16;
const BLOCK_ROWS = 12;
const BLOCK_TOTAL = BLOCK_COLUMNS * BLOCK_ROWS;
const blockTypes = [
  { id: "grass", emoji: "🌿", color: "#68a83b", label: "Grass" },
  { id: "dirt", emoji: "🟫", color: "#8b5a2b", label: "Dirt" },
  { id: "stone", emoji: "🪨", color: "#7b8490", label: "Stone" },
  { id: "wood", emoji: "🪵", color: "#9a632c", label: "Wood" },
  { id: "water", emoji: "💧", color: "#2f80ed", label: "Water" },
  { id: "sand", emoji: "🏖️", color: "#e5c672", label: "Sand" },
  { id: "lava", emoji: "🔥", color: "#f25c27", label: "Lava" },
  { id: "snow", emoji: "❄️", color: "#eef7ff", label: "Snow" },
  { id: "rainbow", emoji: "🌈", color: "linear-gradient(135deg,#ff595e,#ffca3a,#8ac926,#1982c4,#6a4c93)", label: "Rainbow" },
  { id: "glow", emoji: "✨", color: "#ffe66d", label: "Glow" }
];

const translations = {
  en: {
    languageName: "English", language: "Language", welcome: "Welcome to", chooseActivity: "Choose an activity",
    profileStudio: "Profile Studio", profileStudioSub: "Create, rename, recolor, and rearrange profiles.",
    alphabetExplorer: "Alphabet Explorer", alphabetExplorerSub: "Explore letters in different languages.",
    surpriseMe: "Surprise Me!", surpriseMeSub: "Change the whole look instantly.",
    whosWatching: "Who's Watching?", newProfile: "New Profile", editProfile: "Edit Profile",
    name: "Name", avatar: "Avatar", color: "Color", save: "Save", delete: "Delete",
    pickLetter: "Pick a letter", saved: "Saved!", created: "Profile created!", deleted: "Profile deleted!",    blockWorld: "Keelan\'s Block World", blockWorldSub: "Build, erase, save, and create anything.",
    buildAnything: "Build Anything", randomBuild: "Random Build", clearWorld: "Clear World", worldName: "World Name",
    nightMode: "Night Mode", dayMode: "Day Mode", chooseBlock: "Choose a Block", eraser: "Eraser",
    blockHelp: "Choose a block, then click or tap the grid to place it.", autoSave: "Your world saves automatically on this device.",
    worldCleared: "World cleared!", randomCreated: "Random build created!",
    arcade: "Keelan's Game Room", arcadeSub: "Pop, match, play, and have fun!", readyToPlay: "Ready to play?",
    balloonPop: "Balloon Pop", balloonPopSub: "Pop as many balloons as you can!",
    bubblePop: "Bubble Pop", bubblePopSub: "Pop floating bubbles for fun!",
    colorMatch: "Color Match", colorMatchSub: "Find the correct color!",
    surprise: "Surprise!"
  },
  es: {
    languageName: "Español", language: "Idioma", welcome: "Bienvenido a", chooseActivity: "Elige una actividad",
    profileStudio: "Estudio de perfiles", profileStudioSub: "Crea, cambia nombres, colores y perfiles.",
    alphabetExplorer: "Explorador del alfabeto", alphabetExplorerSub: "Explora letras en diferentes idiomas.",
    surpriseMe: "¡Sorpréndeme!", surpriseMeSub: "Cambia todo el diseño al instante.",
    whosWatching: "¿Quién está mirando?", newProfile: "Nuevo perfil", editProfile: "Editar perfil",
    name: "Nombre", avatar: "Avatar", color: "Color", save: "Guardar", delete: "Eliminar",
    pickLetter: "Elige una letra", saved: "¡Guardado!", created: "¡Perfil creado!", deleted: "¡Perfil eliminado!",    blockWorld: "Mundo de bloques de Keelan", blockWorldSub: "Construye, borra, guarda y crea.",
    buildAnything: "Construye lo que quieras", randomBuild: "Construcción aleatoria", clearWorld: "Borrar mundo", worldName: "Nombre del mundo",
    nightMode: "Modo nocturno", dayMode: "Modo diurno", chooseBlock: "Elige un bloque", eraser: "Borrador",
    blockHelp: "Elige un bloque y toca la cuadrícula para colocarlo.", autoSave: "Tu mundo se guarda automáticamente en este dispositivo.",
    worldCleared: "¡Mundo borrado!", randomCreated: "¡Construcción aleatoria creada!",

    surprise: "¡Sorpresa!"
  },
  fr: {
    languageName: "Français", language: "Langue", welcome: "Bienvenue dans", chooseActivity: "Choisis une activité",
    profileStudio: "Studio de profils", profileStudioSub: "Crée, renomme et recolore des profils.",
    alphabetExplorer: "Explorateur d'alphabet", alphabetExplorerSub: "Explore les lettres dans plusieurs langues.",
    surpriseMe: "Surprends-moi !", surpriseMeSub: "Change tout le style instantanément.",
    whosWatching: "Qui regarde ?", newProfile: "Nouveau profil", editProfile: "Modifier le profil",
    name: "Nom", avatar: "Avatar", color: "Couleur", save: "Enregistrer", delete: "Supprimer",
    pickLetter: "Choisis une lettre", saved: "Enregistré !", created: "Profil créé !", deleted: "Profil supprimé !",    blockWorld: "Le monde de blocs de Keelan", blockWorldSub: "Construis, efface, sauvegarde et crée.",
    buildAnything: "Construis ce que tu veux", randomBuild: "Construction aléatoire", clearWorld: "Effacer le monde", worldName: "Nom du monde",
    nightMode: "Mode nuit", dayMode: "Mode jour", chooseBlock: "Choisis un bloc", eraser: "Gomme",
    blockHelp: "Choisis un bloc, puis touche la grille pour le placer.", autoSave: "Ton monde est sauvegardé automatiquement sur cet appareil.",
    worldCleared: "Monde effacé !", randomCreated: "Construction aléatoire créée !",

    surprise: "Surprise !"
  },
  de: {
    languageName: "Deutsch", language: "Sprache", welcome: "Willkommen bei", chooseActivity: "Wähle eine Aktivität",
    profileStudio: "Profilstudio", profileStudioSub: "Erstelle, benenne und färbe Profile.",
    alphabetExplorer: "Alphabet-Entdecker", alphabetExplorerSub: "Entdecke Buchstaben in verschiedenen Sprachen.",
    surpriseMe: "Überrasch mich!", surpriseMeSub: "Ändere sofort das ganze Aussehen.",
    whosWatching: "Wer schaut?", newProfile: "Neues Profil", editProfile: "Profil bearbeiten",
    name: "Name", avatar: "Avatar", color: "Farbe", save: "Speichern", delete: "Löschen",
    pickLetter: "Wähle einen Buchstaben", saved: "Gespeichert!", created: "Profil erstellt!", deleted: "Profil gelöscht!",    blockWorld: "Keelans Blockwelt", blockWorldSub: "Baue, lösche, speichere und erschaffe.",
    buildAnything: "Baue alles", randomBuild: "Zufallsbau", clearWorld: "Welt löschen", worldName: "Weltname",
    nightMode: "Nachtmodus", dayMode: "Tagmodus", chooseBlock: "Block auswählen", eraser: "Radierer",
    blockHelp: "Wähle einen Block und tippe auf das Raster.", autoSave: "Deine Welt wird automatisch auf diesem Gerät gespeichert.",
    worldCleared: "Welt gelöscht!", randomCreated: "Zufallsbau erstellt!",

    surprise: "Überraschung!"
  },
  it: {
    languageName: "Italiano", language: "Lingua", welcome: "Benvenuto in", chooseActivity: "Scegli un'attività",
    profileStudio: "Studio profili", profileStudioSub: "Crea, rinomina e colora i profili.",
    alphabetExplorer: "Esplora alfabeto", alphabetExplorerSub: "Esplora le lettere in più lingue.",
    surpriseMe: "Sorprendimi!", surpriseMeSub: "Cambia subito tutto lo stile.",
    whosWatching: "Chi sta guardando?", newProfile: "Nuovo profilo", editProfile: "Modifica profilo",
    name: "Nome", avatar: "Avatar", color: "Colore", save: "Salva", delete: "Elimina",
    pickLetter: "Scegli una lettera", saved: "Salvato!", created: "Profilo creato!", deleted: "Profilo eliminato!",    blockWorld: "Il mondo a blocchi di Keelan", blockWorldSub: "Costruisci, cancella, salva e crea.",
    buildAnything: "Costruisci qualsiasi cosa", randomBuild: "Costruzione casuale", clearWorld: "Cancella mondo", worldName: "Nome del mondo",
    nightMode: "Modalità notte", dayMode: "Modalità giorno", chooseBlock: "Scegli un blocco", eraser: "Gomma",
    blockHelp: "Scegli un blocco e tocca la griglia per posizionarlo.", autoSave: "Il tuo mondo viene salvato automaticamente su questo dispositivo.",
    worldCleared: "Mondo cancellato!", randomCreated: "Costruzione casuale creata!",

    surprise: "Sorpresa!"
  },
  pt: {
    languageName: "Português", language: "Idioma", welcome: "Bem-vindo ao", chooseActivity: "Escolha uma atividade",
    profileStudio: "Estúdio de perfis", profileStudioSub: "Crie, renomeie e mude as cores dos perfis.",
    alphabetExplorer: "Explorador do alfabeto", alphabetExplorerSub: "Explore letras em vários idiomas.",
    surpriseMe: "Surpreenda-me!", surpriseMeSub: "Mude todo o visual instantaneamente.",
    whosWatching: "Quem está assistindo?", newProfile: "Novo perfil", editProfile: "Editar perfil",
    name: "Nome", avatar: "Avatar", color: "Cor", save: "Salvar", delete: "Excluir",
    pickLetter: "Escolha uma letra", saved: "Salvo!", created: "Perfil criado!", deleted: "Perfil excluído!",    blockWorld: "Mundo de blocos do Keelan", blockWorldSub: "Construa, apague, salve e crie.",
    buildAnything: "Construa qualquer coisa", randomBuild: "Construção aleatória", clearWorld: "Limpar mundo", worldName: "Nome do mundo",
    nightMode: "Modo noturno", dayMode: "Modo diurno", chooseBlock: "Escolha um bloco", eraser: "Borracha",
    blockHelp: "Escolha um bloco e toque na grade para colocá-lo.", autoSave: "Seu mundo é salvo automaticamente neste dispositivo.",
    worldCleared: "Mundo limpo!", randomCreated: "Construção aleatória criada!",

    surprise: "Surpresa!"
  },
  ja: {
    languageName: "日本語", language: "言語", welcome: "ようこそ", chooseActivity: "アクティビティを選んでください",
    profileStudio: "プロフィールスタジオ", profileStudioSub: "プロフィールの名前、色、アバターを変更できます。",
    alphabetExplorer: "文字エクスプローラー", alphabetExplorerSub: "いろいろな言語の文字を見てみよう。",
    surpriseMe: "おまかせ！", surpriseMeSub: "デザインをすぐに変えます。",
    whosWatching: "だれが見ていますか？", newProfile: "新しいプロフィール", editProfile: "プロフィールを編集",
    name: "名前", avatar: "アバター", color: "色", save: "保存", delete: "削除",
    pickLetter: "文字を選んでください", saved: "保存しました！", created: "プロフィールを作りました！", deleted: "プロフィールを削除しました！",    blockWorld: "キーランのブロックワールド", blockWorldSub: "ブロックを置いて、消して、保存して、自由に作ろう。",
    buildAnything: "なんでも作ろう", randomBuild: "ランダム建築", clearWorld: "ワールドを消す", worldName: "ワールド名",
    nightMode: "夜モード", dayMode: "昼モード", chooseBlock: "ブロックを選ぶ", eraser: "消しゴム",
    blockHelp: "ブロックを選んで、マスをタップして置こう。", autoSave: "この端末に自動で保存されます。",
    worldCleared: "ワールドを消しました！", randomCreated: "ランダム建築を作りました！",

    surprise: "サプライズ！"
  },
  ko: {
    languageName: "한국어", language: "언어", welcome: "환영합니다", chooseActivity: "활동을 선택하세요",
    profileStudio: "프로필 스튜디오", profileStudioSub: "프로필 이름, 색상, 아바타를 바꿔 보세요.",
    alphabetExplorer: "알파벳 탐험", alphabetExplorerSub: "여러 언어의 글자를 탐험해 보세요.",
    surpriseMe: "깜짝 변경!", surpriseMeSub: "전체 디자인을 바로 바꿉니다.",
    whosWatching: "누가 보고 있나요?", newProfile: "새 프로필", editProfile: "프로필 편집",
    name: "이름", avatar: "아바타", color: "색상", save: "저장", delete: "삭제",
    pickLetter: "글자를 선택하세요", saved: "저장했어요!", created: "프로필을 만들었어요!", deleted: "프로필을 삭제했어요!",    blockWorld: "킬런의 블록 월드", blockWorldSub: "블록을 놓고, 지우고, 저장하고, 만들어 보세요.",
    buildAnything: "무엇이든 만들기", randomBuild: "무작위 만들기", clearWorld: "월드 지우기", worldName: "월드 이름",
    nightMode: "밤 모드", dayMode: "낮 모드", chooseBlock: "블록 선택", eraser: "지우개",
    blockHelp: "블록을 선택한 다음 격자를 눌러 놓으세요.", autoSave: "이 기기에 월드가 자동으로 저장됩니다.",
    worldCleared: "월드를 지웠어요!", randomCreated: "무작위 월드를 만들었어요!",

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
  ],
  blockWorld: {
    name: "Keelan's World",
    night: false,
    cells: Array(BLOCK_TOTAL).fill(null)
  },
  melodyMakers: {
    discoveries: []
  },
  pip: {
    shirt: "blue",
    pants: "denim",
    visits: 0
  }
};

let state = loadState();
let editingId = null;
let draftAvatar = avatars[0];
let draftColor = colors[0];
let selectedBlock = "grass";
let eraserActive = false;
let balloonScore = 0;
let bubbleScore = 0;
let colorScore = 0;
let popSpawnTimer = null;
let currentColorAnswer = null;

const $ = (id) => document.getElementById(id);

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || !Array.isArray(saved.profiles)) return structuredClone(defaultState);

    const merged = {
      ...structuredClone(defaultState),
      ...saved,
      blockWorld: {
        ...structuredClone(defaultState.blockWorld),
        ...(saved.blockWorld ?? {})
      },
      melodyMakers: {
        ...structuredClone(defaultState.melodyMakers),
        ...(saved.melodyMakers ?? {})
      },
      pip: {
        ...structuredClone(defaultState.pip),
        ...(saved.pip ?? {})
      }
    };

    if (!Array.isArray(merged.blockWorld.cells) || merged.blockWorld.cells.length !== BLOCK_TOTAL) {
      merged.blockWorld.cells = Array(BLOCK_TOTAL).fill(null);
    }

    return merged;
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
  $("blockWorldText").textContent = t("blockWorld");
  $("blockWorldSubtext").textContent = t("blockWorldSub");
  $("blockWorldEyebrow").textContent = t("blockWorld");
  $("buildAnythingText").textContent = t("buildAnything");
  $("randomBuildText").textContent = t("randomBuild");
  $("clearWorldText").textContent = t("clearWorld");
  $("worldNameLabel").textContent = t("worldName");
  $("chooseBlockText").textContent = t("chooseBlock");
  $("eraserText").textContent = t("eraser");
  $("blockHelpText").textContent = t("blockHelp");
  $("autoSaveText").textContent = "💾 " + t("autoSave");
  $("arcadeText").textContent = t("arcade");
  $("arcadeSubtext").textContent = t("arcadeSub");
  $("arcadeEyebrow").textContent = t("arcade");
  updateArcadeGreeting();
  $("balloonPopText").textContent = t("balloonPop");
  $("balloonPopSubtext").textContent = t("balloonPopSub");
  $("bubblePopText").textContent = t("bubblePop");
  $("bubblePopSubtext").textContent = t("bubblePopSub");
  $("colorMatchText").textContent = t("colorMatch");
  $("colorMatchSubtext").textContent = t("colorMatchSub");
  updateDayNightButton();
  renderAlphabet();
}

function showScreen(name) {
  stopPopGames();
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  $(name + "Screen").classList.add("active");
  if (name === "arcade") updateArcadeGreeting();
  if (name === "melody") playMelodyEntrance();
  if (name === "instrument") renderMusicStickers();
  if (name === "pip") enterPipsPlace();
  if (name === "balloonGame") startPopGame("balloon");
  if (name === "bubbleGame") startPopGame("bubble");
  if (name === "colorGame") startColorMatch();
  window.scrollTo({ top: 0, behavior: "smooth" });
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


function renderBlockPalette() {
  $("blockPalette").innerHTML = "";

  blockTypes.forEach(block => {
    const button = document.createElement("button");
    button.className = "block-option";
    if (!eraserActive && selectedBlock === block.id) button.classList.add("selected");
    button.textContent = block.emoji;
    button.style.background = block.color;
    button.title = block.label;
    button.setAttribute("aria-label", block.label);

    button.addEventListener("click", () => {
      selectedBlock = block.id;
      eraserActive = false;
      renderBlockPalette();
      $("eraserButton").classList.remove("selected");
    });

    $("blockPalette").appendChild(button);
  });
}

function renderBlockGrid() {
  $("blockGrid").innerHTML = "";

  state.blockWorld.cells.forEach((blockId, index) => {
    const cell = document.createElement("button");
    cell.className = "block-cell";

    if (blockId) {
      const block = blockTypes.find(item => item.id === blockId);
      if (block) {
        cell.classList.add("filled");
        cell.style.background = block.color;
        cell.title = block.label;
      }
    }

    cell.addEventListener("click", () => {
      state.blockWorld.cells[index] = eraserActive ? null : selectedBlock;
      saveState();
      renderBlockGrid();
    });

    $("blockGrid").appendChild(cell);
  });
}

function clearBlockWorld() {
  state.blockWorld.cells = Array(BLOCK_TOTAL).fill(null);
  saveState();
  renderBlockGrid();
  showToast(t("worldCleared"));
}

function createRandomBuild() {
  state.blockWorld.cells = state.blockWorld.cells.map((_, index) => {
    const row = Math.floor(index / BLOCK_COLUMNS);
    const placementChance = row > BLOCK_ROWS - 4 ? .86 : .18;
    if (Math.random() >= placementChance) return null;
    return blockTypes[Math.floor(Math.random() * blockTypes.length)].id;
  });

  saveState();
  renderBlockGrid();
  showToast(t("randomCreated"));
}

function updateDayNightButton() {
  const isNight = state.blockWorld.night;
  $("blockWorldCanvas").classList.toggle("night", isNight);
  $("blockWorldCanvas").classList.toggle("day", !isNight);
  $("sunMoonIcon").textContent = isNight ? "🌙" : "☀️";
  $("dayNightButton").innerHTML = isNight
    ? `☀️ <span id="dayModeText">${t("dayMode")}</span>`
    : `🌙 <span id="nightModeText">${t("nightMode")}</span>`;
}

function toggleDayNight() {
  state.blockWorld.night = !state.blockWorld.night;
  saveState();
  updateDayNightButton();
}

function initializeBlockWorld() {
  $("worldNameInput").value = state.blockWorld.name;
  renderBlockPalette();
  renderBlockGrid();
  updateDayNightButton();
}

function activePlayerName() {
  return state.profiles?.[0]?.name?.trim() || "Keelan";
}

function updateArcadeGreeting() {
  $("arcadeGreeting").textContent = `Hi, ${activePlayerName()}! ${t("readyToPlay")}`;
}

function playTone(frequency = 520, duration = .08) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.value = frequency;
    oscillator.type = "sine";
    gain.gain.setValueAtTime(.08, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + duration);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + duration);
    oscillator.addEventListener("ended", () => context.close());
  } catch {}
}

function stopPopGames() {
  clearInterval(popSpawnTimer);
  popSpawnTimer = null;
  ["balloonPlayArea", "bubblePlayArea"].forEach(id => {
    const area = $(id);
    if (area) area.innerHTML = "";
  });
}

function startPopGame(type) {
  const isBalloon = type === "balloon";
  if (isBalloon) {
    balloonScore = 0;
    $("balloonScore").textContent = balloonScore;
  } else {
    bubbleScore = 0;
    $("bubbleScore").textContent = bubbleScore;
  }
  const spawn = () => spawnPopItem(type);
  for (let i = 0; i < 5; i++) setTimeout(spawn, i * 260);
  popSpawnTimer = setInterval(spawn, isBalloon ? 720 : 620);
}

function spawnPopItem(type) {
  const isBalloon = type === "balloon";
  const area = $(isBalloon ? "balloonPlayArea" : "bubblePlayArea");
  if (!area || !area.closest(".screen.active")) return;
  const item = document.createElement("button");
  item.className = `pop-item ${isBalloon ? "pop-balloon" : "pop-bubble"}`;
  const size = isBalloon ? 54 + Math.random() * 48 : 40 + Math.random() * 70;
  item.style.width = `${size}px`;
  item.style.height = `${size}px`;
  item.style.left = `${Math.random() * Math.max(10, area.clientWidth - size)}px`;
  item.style.bottom = `-${size + 10}px`;
  item.style.animationDuration = `${isBalloon ? 5.2 + Math.random() * 2.8 : 6.2 + Math.random() * 3.2}s`;
  if (isBalloon) {
    const balloons = ["🎈","🎈","🎈","🎈","🎈"];
    item.textContent = balloons[Math.floor(Math.random() * balloons.length)];
    item.style.fontSize = `${size}px`;
    item.style.filter = `hue-rotate(${Math.floor(Math.random()*330)}deg) drop-shadow(0 8px 6px rgba(0,0,0,.18))`;
  }
  item.setAttribute("aria-label", isBalloon ? "Pop balloon" : "Pop bubble");
  item.addEventListener("click", event => {
    event.stopPropagation();
    const rect = area.getBoundingClientRect();
    const burst = document.createElement("span");
    burst.className = "pop-burst";
    burst.textContent = isBalloon ? "✨" : "💫";
    burst.style.left = `${event.clientX - rect.left - 18}px`;
    burst.style.top = `${event.clientY - rect.top - 18}px`;
    area.appendChild(burst);
    setTimeout(() => burst.remove(), 500);
    if (isBalloon) $("balloonScore").textContent = ++balloonScore;
    else $("bubbleScore").textContent = ++bubbleScore;
    playTone(isBalloon ? 620 : 760, .09);
    item.remove();
  }, { once: true });
  item.addEventListener("animationend", () => item.remove());
  area.appendChild(item);
}

const matchColors = [
  { name:"RED", value:"#ef4444" }, { name:"BLUE", value:"#3b82f6" },
  { name:"GREEN", value:"#22c55e" }, { name:"YELLOW", value:"#facc15" },
  { name:"PURPLE", value:"#a855f7" }, { name:"ORANGE", value:"#f97316" },
  { name:"PINK", value:"#ec4899" }, { name:"BLACK", value:"#111827" }
];

function startColorMatch() {
  colorScore = 0;
  $("colorScore").textContent = colorScore;
  nextColorRound();
}

function nextColorRound() {
  const choices = [...matchColors].sort(() => Math.random() - .5).slice(0, 4);
  currentColorAnswer = choices[Math.floor(Math.random() * choices.length)];
  $("targetColorName").textContent = currentColorAnswer.name;
  $("targetColorName").style.color = currentColorAnswer.value;
  $("colorMessage").textContent = "Pick a color!";
  $("colorMessage").classList.remove("celebrate");
  $("colorChoices").innerHTML = "";
  choices.sort(() => Math.random() - .5).forEach(color => {
    const button = document.createElement("button");
    button.className = "color-choice";
    button.style.background = color.value;
    button.setAttribute("aria-label", color.name);
    button.addEventListener("click", () => chooseColor(color, button));
    $("colorChoices").appendChild(button);
  });
}

function chooseColor(color, button) {
  if (color.name === currentColorAnswer.name) {
    colorScore += 1;
    $("colorScore").textContent = colorScore;
    $("colorMessage").textContent = `🎉 Great job, ${activePlayerName()}!`;
    $("colorMessage").classList.add("celebrate");
    playTone(880, .14);
    [...$("colorChoices").children].forEach(child => child.disabled = true);
    setTimeout(nextColorRound, 850);
  } else {
    $("colorMessage").textContent = "Try again! 😊";
    button.animate([{transform:"translateX(0)"},{transform:"translateX(-8px)"},{transform:"translateX(8px)"},{transform:"translateX(0)"}],{duration:260});
    playTone(220, .08);
  }
}


// Melody Makers Expansion Pack 1
const pianoNotes = [
  { label: "C", frequency: 261.63, color: "#ef4444" },
  { label: "D", frequency: 293.66, color: "#f97316" },
  { label: "E", frequency: 329.63, color: "#facc15" },
  { label: "F", frequency: 349.23, color: "#22c55e" },
  { label: "G", frequency: 392.00, color: "#3b82f6" },
  { label: "A", frequency: 440.00, color: "#6366f1" },
  { label: "B", frequency: 493.88, color: "#a855f7" },
  { label: "C", frequency: 523.25, color: "#ec4899" }
];

const musicStickers = [
  { id: "piano", emoji: "🎹", name: "Piano Player" },
  { id: "drums", emoji: "🥁", name: "First Beat" },
  { id: "both", emoji: "⭐", name: "Melody Maker" }
];

function playMelodyEntrance() {
  const entrance = $("melodyEntrance");
  if (!entrance) return;
  entrance.classList.remove("finished", "opening");
  void entrance.offsetWidth;
  entrance.classList.add("opening");
  clearTimeout(playMelodyEntrance.timer);
  playMelodyEntrance.timer = setTimeout(() => entrance.classList.add("finished"), 1900);
}

function initializePiano() {
  const piano = $("pianoKeys");
  if (!piano) return;
  piano.innerHTML = "";
  pianoNotes.forEach(note => {
    const button = document.createElement("button");
    button.className = "piano-key";
    button.style.background = note.color;
    button.textContent = note.label;
    button.setAttribute("aria-label", `Play ${note.label}`);
    button.addEventListener("click", () => {
      playTone(note.frequency, .28);
      animateMusicPlay(button, "piano", "🎵 Piano sounds wonderful!");
    });
    piano.appendChild(button);
  });
}

function playDrum(kind, button) {
  const sounds = {
    kick: [110, .18],
    snare: [210, .11],
    hat: [850, .055],
    tom: [165, .16]
  };
  const [frequency, duration] = sounds[kind] ?? sounds.tom;
  playTone(frequency, duration);
  animateMusicPlay(button, "drums", "🥁 Buddy loves that beat!");
}

function animateMusicPlay(button, discovery, message) {
  button.classList.add("playing");
  setTimeout(() => button.classList.remove("playing"), 150);
  const buddy = $("studioBuddy");
  buddy.classList.remove("dancing");
  void buddy.offsetWidth;
  buddy.classList.add("dancing");
  $("buddyMusicMessage").textContent = message;
  createFloatingNote();
  unlockMusicDiscovery(discovery);
}

function createFloatingNote() {
  const layer = $("studioNotes");
  const note = document.createElement("span");
  note.className = "floating-note";
  note.textContent = ["♪", "♫", "🎵", "✨"][Math.floor(Math.random() * 4)];
  note.style.setProperty("--x", `${-90 + Math.random() * 180}px`);
  note.style.left = `${25 + Math.random() * 50}%`;
  layer.appendChild(note);
  setTimeout(() => note.remove(), 1200);
}

function unlockMusicDiscovery(id) {
  const discoveries = state.melodyMakers.discoveries;
  if (!discoveries.includes(id)) {
    discoveries.push(id);
    showToast(id === "piano" ? "🎹 Piano Player sticker unlocked!" : "🥁 First Beat sticker unlocked!");
  }
  if (discoveries.includes("piano") && discoveries.includes("drums") && !discoveries.includes("both")) {
    discoveries.push("both");
    setTimeout(() => showToast("⭐ Melody Maker sticker unlocked!"), 600);
  }
  saveState();
  renderMusicStickers();
}

function renderMusicStickers() {
  const shelf = $("stickerShelf");
  if (!shelf) return;
  const discoveries = state.melodyMakers?.discoveries ?? [];
  shelf.innerHTML = musicStickers.map(sticker => `
    <div class="discovery-sticker ${discoveries.includes(sticker.id) ? "" : "locked"}">
      ${discoveries.includes(sticker.id) ? sticker.emoji : "🔒"} ${sticker.name}
    </div>`).join("");
  $("musicStickerCount").textContent = `⭐ ${discoveries.filter(id => musicStickers.some(s => s.id === id)).length}/3`;
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


// Adventure Plaza
const buddyMessages = [
  "Hi, Keelan! Where should we explore?",
  "Melody Makers is ready for a song!",
  "Want to build something amazing?",
  "The Game Room has balloons to pop!",
  "Alphabet Academy is full of letters!",
  "I wonder what will open at the Discovery Lab!"
];
let buddyMessageIndex = 0;

function talkToBuddy() {
  buddyMessageIndex = (buddyMessageIndex + 1) % buddyMessages.length;
  const speech = $("buddySpeech");
  const buddyButton = $("plazaBuddy");
  speech.textContent = buddyMessages[buddyMessageIndex];
  showBuddySpeech(buddyMessages[buddyMessageIndex], 4200);
  speech.animate(
    [{ transform: "scale(.92)", opacity: .5 }, { transform: "scale(1.06)", opacity: 1 }, { transform: "scale(1)", opacity: 1 }],
    { duration: 360, easing: "ease-out" }
  );
  buddyButton.classList.remove("is-happy", "is-running", "is-sitting");
  void buddyButton.offsetWidth;
  buddyButton.classList.add("is-happy");
  for (let i = 0; i < 3; i += 1) {
    const heart = document.createElement("span");
    heart.className = "buddy-heart";
    heart.textContent = i === 1 ? "💙" : "❤️";
    heart.style.left = `${42 + i * 10}%`;
    heart.style.top = `${22 + i * 5}%`;
    heart.style.animationDelay = `${i * 90}ms`;
    buddyButton.appendChild(heart);
    window.setTimeout(() => heart.remove(), 1700);
  }
  window.setTimeout(() => buddyButton.classList.remove("is-happy"), 1800);
  playTone(520 + buddyMessageIndex * 45, .08);
}

// Buddy 3.0 movement is controlled by the village waypoint engine near the end of this file.

document.querySelectorAll("[data-open]").forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.open));
});

$("homeButton").addEventListener("click", () => showScreen("home"));
$("plazaBuddy").addEventListener("click", talkToBuddy);
$("backToMelody").addEventListener("click", () => showScreen("melody"));
document.querySelectorAll(".drum-pad").forEach(button => {
  button.addEventListener("click", () => playDrum(button.dataset.drum, button));
});
document.querySelectorAll(".back-to-arcade").forEach(button => button.addEventListener("click", () => showScreen("arcade")));
$("addProfileButton").addEventListener("click", () => openProfileModal());
$("closeModalButton").addEventListener("click", closeProfileModal);
$("saveProfileButton").addEventListener("click", saveProfile);
$("deleteProfileButton").addEventListener("click", deleteProfile);
$("surpriseButton").addEventListener("click", surpriseMe);
$("closeLetterButton").addEventListener("click", () => $("letterDisplay").classList.add("hidden"));
$("eraserButton").addEventListener("click", () => {
  eraserActive = true;
  renderBlockPalette();
  $("eraserButton").classList.add("selected");
});
$("clearWorldButton").addEventListener("click", clearBlockWorld);
$("randomBuildButton").addEventListener("click", createRandomBuild);
$("dayNightButton").addEventListener("click", toggleDayNight);
$("worldNameInput").addEventListener("input", event => {
  state.blockWorld.name = event.target.value;
  saveState();
});

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
initializeBlockWorld();
initializePiano();
renderMusicStickers();

// Village Polish Pack 1
const villageTips = [
  "Can you find the duck pond?",
  "Tap the mailbox for a note from Buddy!",
  "The flowers may be hiding a butterfly.",
  "Try tapping the fountain!",
  "A little bird is waiting to sing for you.",
  "Visit Melody Makers and create a song!",
  "Every building has something fun to discover."
];

function getDailyVillageTip() {
  const now = new Date();
  const dayNumber = Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000);
  return villageTips[dayNumber % villageTips.length];
}

function setDailyVillageTip() {
  const tip = document.getElementById("dailyBuddyTip");
  if (tip) tip.textContent = getDailyVillageTip();
}

function createVillageEffect(emoji, source, className) {
  if (!source) return;
  const world = document.querySelector(".village-world");
  if (!world) return;
  const worldBox = world.getBoundingClientRect();
  const sourceBox = source.getBoundingClientRect();
  const effect = document.createElement("span");
  effect.className = className;
  effect.textContent = emoji;
  effect.style.left = `${sourceBox.left - worldBox.left + sourceBox.width / 2}px`;
  effect.style.top = `${sourceBox.top - worldBox.top + sourceBox.height / 2}px`;
  world.appendChild(effect);
  setTimeout(() => effect.remove(), 2400);
}

const welcomeSign = document.getElementById("welcomeSign");
if (welcomeSign) welcomeSign.addEventListener("click", () => {
  const message = `🐶 Buddy's tip: ${getDailyVillageTip()}`;
  showToast(message);
  const speech = document.getElementById("buddySpeech");
  if (speech) speech.textContent = getDailyVillageTip();
  playTone(660, .1);
});

const villageMailbox = document.getElementById("villageMailbox");
if (villageMailbox) villageMailbox.addEventListener("click", () => {
  const notes = [
    "You make this village brighter, Keelan!",
    "Buddy says: Let's explore together!",
    "A new adventure is always nearby!",
    "You are an amazing builder and explorer!"
  ];
  const note = notes[Math.floor(Math.random() * notes.length)];
  showToast(`📬 ${note}`);
  const speech = document.getElementById("buddySpeech");
  if (speech) speech.textContent = note;
  villageMailbox.animate([{transform:"rotate(-8deg)"},{transform:"rotate(8deg)"},{transform:"rotate(0)"}],{duration:420});
  playTone(720, .12);
});

const villageFountain = document.getElementById("villageFountain");
if (villageFountain) villageFountain.addEventListener("click", () => {
  villageFountain.classList.remove("splash");
  void villageFountain.offsetWidth;
  villageFountain.classList.add("splash");
  showToast("⛲ Whoosh! The fountain made a giant splash!");
  playTone(560, .08);
  setTimeout(() => playTone(760, .09), 90);
});

const villagePond = document.getElementById("villagePond");
if (villagePond) villagePond.addEventListener("click", () => {
  const sounds = ["Quack, quack!", "The frog says ribbit!", "The ducks are going for a swim!"];
  showToast(`🦆 ${sounds[Math.floor(Math.random() * sounds.length)]}`);
  villagePond.animate([{transform:"scale(1)"},{transform:"scale(1.07)"},{transform:"scale(1)"}],{duration:450});
  playTone(390, .08);
  setTimeout(() => playTone(320, .08), 110);
});

const singingBird = document.getElementById("singingBird");
if (singingBird) singingBird.addEventListener("click", () => {
  showToast("🐦 Tweet-tweet! You found the singing bird!");
  [740, 880, 1040].forEach((tone, index) => setTimeout(() => playTone(tone, .08), index * 100));
  singingBird.animate([{transform:"translateY(0)"},{transform:"translateY(-18px) rotate(8deg)"},{transform:"translateY(0)"}],{duration:500});
});

const magicTree = document.getElementById("magicTree");
if (magicTree) magicTree.addEventListener("click", () => {
  showToast("🍃 A tiny breeze shook the tree!");
  for (let i = 0; i < 6; i += 1) {
    setTimeout(() => createVillageEffect(i % 2 ? "🍂" : "🍃", magicTree, "magic-leaf"), i * 90);
  }
  playTone(470, .09);
});

document.querySelectorAll(".secret-flowers").forEach(flowers => {
  flowers.addEventListener("click", event => {
    event.stopPropagation();
    flowers.classList.remove("bloom");
    void flowers.offsetWidth;
    flowers.classList.add("bloom");
    createVillageEffect("🦋", flowers, "secret-butterfly");
    showToast("🦋 A butterfly was hiding in the flowers!");
    playTone(820, .08);
  });
});

setDailyVillageTip();



// Meet Pip — first friend update
const pipMessages = [
  "I was hoping you'd stop by today!",
  "I saw a butterfly outside my window!",
  "Your outfit choice is one of my favorites.",
  "Want to explore the village together?",
  "It's nice just hanging out with you.",
  "I put my books in rainbow order today!",
  "I think the ducks know your name now."
];
let pipMessageIndex = 0;

function currentExplorerName() {
  return state.profiles?.[0]?.name || "Keelan";
}

function renderPipOutfit() {
  const pip = $("pipAvatar");
  if (!pip) return;
  pip.className = `pip-avatar shirt-${state.pip.shirt} pants-${state.pip.pants}`;
  document.querySelectorAll(".pip-outfit-choice").forEach(button => {
    button.classList.toggle("selected", state.pip[button.dataset.pipPart] === button.dataset.pipValue);
  });
}

function enterPipsPlace() {
  state.pip.visits = (state.pip.visits || 0) + 1;
  saveState();
  const name = currentExplorerName();
  $("pipGreeting").textContent = state.pip.visits === 1
    ? `Hi, ${name}! I'm Pip. I'm so glad you're here!`
    : `There you are, ${name}! I was hoping you'd visit!`;
  $("pipMessage").textContent = state.pip.visits === 1
    ? "This is my place. You can help me choose what to wear!"
    : pipMessages[state.pip.visits % pipMessages.length];
  renderPipOutfit();
  playTone(523.25, .08);
  setTimeout(() => playTone(659.25, .09), 100);
}

function talkToPip() {
  pipMessageIndex = (pipMessageIndex + 1) % pipMessages.length;
  $("pipMessage").textContent = pipMessages[pipMessageIndex];
  const pip = $("pipAvatar");
  pip.animate([{transform:"translateY(0)"},{transform:"translateY(-12px)"},{transform:"translateY(0)"}],{duration:520,easing:"ease-out"});
  playTone(580 + pipMessageIndex * 24, .08);
}

document.querySelectorAll(".pip-outfit-choice").forEach(button => {
  button.addEventListener("click", () => {
    state.pip[button.dataset.pipPart] = button.dataset.pipValue;
    saveState();
    renderPipOutfit();
    $("pipMessage").textContent = "I love it! Thanks for helping me choose.";
    playTone(700, .09);
  });
});

$("pipTalkButton")?.addEventListener("click", talkToPip);
$("pipHomeButton")?.addEventListener("click", () => showScreen("home"));

// Buddy 3.0 — The Village Pup Update
const buddyWaypoints = [
  { name: "welcome path", x: 52, y: 38, thought: "Let's explore!" },
  { name: "Melody Makers", x: 24, y: 36, thought: "I hear music!" },
  { name: "Alphabet Academy", x: 76, y: 36, thought: "So many letters!" },
  { name: "duck pond", x: 39, y: 61, thought: "Hi, ducks!" },
  { name: "fountain", x: 57, y: 57, thought: "Splashy!" },
  { name: "Builder's Workshop", x: 26, y: 76, thought: "What should we build?" },
  { name: "Game Arcade", x: 73, y: 76, thought: "Games sound fun!" },
  { name: "Profile Studio", x: 50, y: 23, thought: "Looking good!" },
  { name: "Discovery Lab", x: 51, y: 83, thought: "I wonder what's inside..." },
  { name: "big tree", x: 13, y: 55, thought: "Nice shade." },
  { name: "flower path", x: 84, y: 53, thought: "These flowers smell good!" },
  { name: "village square", x: 50, y: 68, thought: "I like it here." }
];

const buddyLifeStates = [
  { className: "is-sniffing", duration: 2100 },
  { className: "is-sitting", duration: 3200 },
  { className: "is-looking", duration: 1900 },
  { className: "is-stretching", duration: 2300 },
  { className: "is-resting", duration: 3800 }
];

let buddyJourneyTimer = null;
let buddySpeechTimer = null;
let buddyLastWaypoint = -1;
let buddyIsTraveling = false;

function showBuddySpeech(message, duration = 3400) {
  const buddy = document.getElementById("plazaBuddy");
  const speech = document.getElementById("buddySpeech");
  if (!buddy || !speech) return;
  speech.textContent = message;
  buddy.classList.add("is-speaking");
  clearTimeout(buddySpeechTimer);
  buddySpeechTimer = setTimeout(() => buddy.classList.remove("is-speaking"), duration);
}

function clearBuddyLifeState() {
  const buddy = document.getElementById("plazaBuddy");
  if (!buddy) return;
  buddy.classList.remove("is-running", "is-walking", "is-sitting", "is-sniffing", "is-looking", "is-stretching", "is-resting");
}

function chooseBuddyWaypoint() {
  let next = Math.floor(Math.random() * buddyWaypoints.length);
  if (buddyWaypoints.length > 1) {
    while (next === buddyLastWaypoint) next = Math.floor(Math.random() * buddyWaypoints.length);
  }
  buddyLastWaypoint = next;
  return buddyWaypoints[next];
}

function positionBuddyAt(waypoint, instant = false) {
  const buddy = document.getElementById("plazaBuddy");
  if (!buddy) return;
  if (instant) buddy.classList.add("no-transition");
  buddy.style.left = `${waypoint.x}%`;
  buddy.style.top = `${waypoint.y}%`;
  if (instant) requestAnimationFrame(() => buddy.classList.remove("no-transition"));
}

function buddyPauseAt(waypoint) {
  const buddy = document.getElementById("plazaBuddy");
  if (!buddy) return;
  buddyIsTraveling = false;
  clearBuddyLifeState();

  const state = buddyLifeStates[Math.floor(Math.random() * buddyLifeStates.length)];
  buddy.classList.add(state.className);

  if (Math.random() < .42) showBuddySpeech(waypoint.thought, 3000);

  buddyJourneyTimer = setTimeout(() => {
    buddy.classList.remove(state.className);
    sendBuddyExploring();
  }, state.duration + 900 + Math.random() * 2200);
}

function sendBuddyExploring() {
  const buddy = document.getElementById("plazaBuddy");
  const home = document.getElementById("homeScreen");
  if (!buddy || !home) return;

  clearTimeout(buddyJourneyTimer);
  if (!home.classList.contains("active") || document.hidden) {
    buddyJourneyTimer = setTimeout(sendBuddyExploring, 1800);
    return;
  }

  clearBuddyLifeState();
  const waypoint = chooseBuddyWaypoint();
  const currentX = parseFloat(buddy.style.left || "82");
  const distance = Math.abs(currentX - waypoint.x);
  const running = distance > 45 && Math.random() < .36;
  const travelSeconds = running ? 3.4 + Math.random() * 1.2 : 5.2 + Math.random() * 2.1;

  buddyIsTraveling = true;
  buddy.classList.add(running ? "is-running" : "is-walking");
  buddy.style.setProperty("--buddy-travel-time", `${travelSeconds}s`);
  buddy.classList.toggle("faces-left", waypoint.x > currentX); // Buddy artwork faces left by default; flip only when traveling right.
  positionBuddyAt(waypoint);

  buddyJourneyTimer = setTimeout(() => buddyPauseAt(waypoint), travelSeconds * 1000 + 120);
}

function startBuddyVillageLife() {
  const buddy = document.getElementById("plazaBuddy");
  if (!buddy) return;
  positionBuddyAt({ x: 82, y: 56 }, true);
  buddy.classList.remove("is-speaking");
  clearTimeout(buddyJourneyTimer);
  buddyJourneyTimer = setTimeout(sendBuddyExploring, 1200);
}

document.addEventListener("visibilitychange", () => {
  if (!document.hidden && !buddyIsTraveling) {
    clearTimeout(buddyJourneyTimer);
    buddyJourneyTimer = setTimeout(sendBuddyExploring, 700);
  }
});

window.addEventListener("resize", () => {
  const buddy = document.getElementById("plazaBuddy");
  if (!buddy) return;
  const x = Math.min(88, Math.max(12, parseFloat(buddy.style.left || "82")));
  buddy.style.left = `${x}%`;
});

startBuddyVillageLife();
