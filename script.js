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
