const featuredFilters = [
  { name: 'Original', category: 'Beliebt', symbol: '◌', tag: 'Natürlich', color: 'transparent' },
  { name: 'Riesen-Nase', category: 'Gesicht', symbol: '◉', tag: 'Lustig', color: '#ff9d83' },
  { name: 'Herz-Augen', category: 'Gesicht', symbol: '♥', tag: 'Liebe', color: '#ff5575' },
  { name: 'Katzenaugen', category: 'Tiere', symbol: '◈', tag: 'Katze', color: '#ffc45d' },
  { name: 'Froschaugen', category: 'Tiere', symbol: '●', tag: 'Frosch', color: '#7fce74' },
  { name: 'Alien', category: 'Fantasy', symbol: '✦', tag: 'Cosmic', color: '#8dd8c1' },
  { name: 'Roboter', category: 'Fantasy', symbol: '▣', tag: 'Digital', color: '#87a6b9' },
  { name: 'Einhorn', category: 'Fantasy', symbol: '✧', tag: 'Magisch', color: '#e6a3e9' },
  { name: 'Regenbogen', category: 'Effekte', symbol: '◒', tag: 'Bunt', color: 'linear-gradient(90deg,#ef765e,#f6cf65,#74c889,#81a6e8,#ce8ed6)' },
  { name: 'Glitzer', category: 'Effekte', symbol: '✧', tag: 'Sparkle', color: '#f5d67b' },
  { name: 'Neon', category: 'Effekte', symbol: '⌁', tag: 'Glow', color: '#5de6d2' },
  { name: 'VHS', category: 'Retro', symbol: '▤', tag: 'Retro', color: '#c28d80' },
  { name: 'Pixel-Art', category: 'Retro', symbol: '▦', tag: '8-Bit', color: '#8ea4ce' },
  { name: 'Schwarz-Weiß', category: 'Retro', symbol: '◐', tag: 'Mono', color: '#77716d' },
  { name: 'Kürbis', category: 'Events', symbol: '●', tag: 'Halloween', color: '#f19b55' },
  { name: 'Konfetti', category: 'Events', symbol: '⁙', tag: 'Party', color: '#ef765e' },
  { name: 'Feuer-Aura', category: 'Power', symbol: '♨', tag: 'Power-Up', color: '#ee7952' },
  { name: 'Galaxy-Aura', category: 'Power', symbol: '✦', tag: 'Cosmic', color: '#817dc1' }
];
const catalogGroups = {
  Gesicht: ['Mini-Nase', 'Riesige Ohren', 'Mini-Ohren', 'Riesen-Mund', 'Mini-Mund', 'Riesiger Kopf', 'Mini-Kopf', 'Kartoffel-Gesicht', 'Eierkopf', 'Würfelkopf', 'Dreieckskopf', 'Alien-Gesicht', 'Roboter-Gesicht', 'Cartoon-Gesicht', 'Emoji-Gesicht', 'Smiley-Gesicht', 'Troll-Gesicht', 'Clown-Nase', 'Clown-Makeup', 'Schnurrbart', 'Riesiger Schnurrbart', 'Monobraue', 'Superdicke Augenbrauen', 'Fake-Bart', 'Fake-Frisur', 'Glatze', 'Riesenfrisur', 'Mini-Frisur', 'Pizza-Gesicht', 'Burger-Gesicht', 'Donut-Gesicht', 'Eiscreme-Gesicht', 'Kuchen-Gesicht', 'Cookie-Gesicht'],
  Augen: ['Dollar-Augen', 'Sterne-Augen', 'X-Augen', 'Glitzer-Augen', 'Regenbogen-Augen', 'Fliegenaugen', 'Fischaugen', 'Comic-Augen', 'Anime-Augen', 'Kulleraugen', 'Schlaf-Augen', 'Tränen-Augen', 'Lach-Augen', 'Laser-Augen', 'LED-Augen', 'Pixel-Augen', 'Sonnenbrillen-Augen', '3D-Brille', 'VR-Brille', 'Taucherbrille', 'Herzbrille', 'Schwarze Sonnenbrille', 'Spiegelbrille', 'Goldbrille', 'Neonbrille', 'Skibrille', 'Feueraugen', 'Eisaugen', 'Blitzaugen', 'Fledermaus-Augen'],
  Tiere: ['Katze', 'Hund', 'Hase', 'Fuchs', 'Wolf', 'Bär', 'Panda', 'Koala', 'Löwe', 'Tiger', 'Leopard', 'Gepard', 'Elefant', 'Giraffe', 'Affe', 'Gorilla', 'Schwein', 'Kuh', 'Pferd', 'Ziege', 'Schaf', 'Huhn', 'Hahn', 'Ente', 'Gans', 'Pinguin', 'Eule', 'Adler', 'Papagei', 'Flamingo', 'Frosch', 'Kröte', 'Schlange', 'Eidechse', 'Krokodil', 'Schildkröte', 'Hai', 'Delfin', 'Wal', 'Oktopus', 'Qualle', 'Krabbe', 'Hummer', 'Seestern', 'Fisch', 'Goldfisch', 'Axolotl', 'Fledermaus', 'Maus', 'Hamster', 'Katzenohren', 'Hasenohren', 'Fuchsohren', 'Bärenohren'],
  Fantasy: ['grüner Alien', 'blauer Alien', 'Mars-Alien', 'Cyborg', 'Android', 'Astronaut', 'Weltraumhelm', 'UFO', 'Laserhelm', 'Galaxie-Gesicht', 'Sternen-Gesicht', 'Mond-Gesicht', 'Sonnen-Gesicht', 'Zeitreisender', 'Cyberpunk', 'Neon-Cyberpunk', 'Hologramm-Gesicht', 'Pixel-Roboter', 'Game-Character', 'Superheld', 'Superschurke', 'Magier', 'Zauberer', 'Hexenfilter', 'Elfenohren', 'Feenstaub', 'Drache', 'Drachenaugen', 'Vampir', 'Werwolf', 'Zombie', 'Geist', 'Skelett', 'Mumie', 'Ritter', 'Wikinger', 'Samurai', 'Ninja', 'Pirat', 'König', 'Königin', 'Prinz', 'Prinzessin', 'Hörner', 'Teufelshörner', 'Engelsflügel', 'Feuerflügel', 'Eisflügel', 'Neonflügel'],
  Effekte: ['Schwarz-Weiß', 'Sepia', 'Gold', 'Silber', 'Blau', 'Rot', 'Grün', 'Lila', 'Pink', 'Orange', 'Türkis', 'Gelb', 'Farbwechsel', 'RGB-Gesicht', 'Glitzer', 'Konfetti', 'Feuer', 'Eis', 'Rauch', 'Wolken', 'Sterne', 'Herzen', 'Blitze', 'Schneeflocken', 'Regentropfen', 'Herbstblätter', 'Kirschblüten', 'Rosenblätter', 'Schmetterlinge', 'Bunte Partikel', 'Neonlinien', 'Lichtstrahlen', 'Lens-Flare', 'Funkeln', 'Disco-Lichter', 'Farbexplosion', 'Flüssigfarben', 'Aquarell', 'Ölfarbe', 'Bleistift', 'Kohlezeichnung', 'Graffiti', 'Comic', 'Glitch'],
  Retro: ['Pixel-Art', 'VHS', '8-Bit', 'Retro-TV', 'Retro-Gamer', 'Arcade', 'Game Over', 'Level-Up', 'XP-Anzeige', 'Loading Screen', 'Lag-Filter', 'Ping-Anzeige', 'FPS-Anzeige', 'Respawn-Filter', 'Meme-Schrift', 'Polaroid', 'Retro-Kamera'],
  Gaming: ['Minecraft-Dorfbewohner', 'Creeper-Gesicht', 'Diamanthelm', 'Pixel-Schwert', 'Boss-Filter', 'Endgegner', 'NPC-Filter', 'Quest-Fenster', 'Inventar', 'Loot-Filter', 'Legendary-Filter', 'Rare-Filter', 'Epic-Filter', 'Noob-Filter', 'Pro-Filter', 'Speedrunner', 'Gamer-Brille', 'Controller-Gesicht', 'Tastatur-Gesicht', 'Maus-Cursor', 'Aim-Assist', 'Headshot-Effekt', 'Battle-Royale', 'Racing-Game', 'Fußball-Game', 'Basketball-Game', 'Tower-Defense', 'Horror-Game', 'Simulator', 'Sandbox', 'Open-World', 'RPG', 'Pixel-RPG', 'Dungeon', 'Bosskampf', 'Cheat-Code', 'Achievement', 'Trophy', 'Secret Ending', 'Game Menu'],
  Kopfbedeckung: ['Motorradhelm', 'Feuerwehrhelm', 'Polizei-Cap', 'Baseball-Cap', 'Hoodie', 'Krone', 'Goldkrone', 'Diamantkrone', 'Neonkrone', 'Heiligenschein', 'Goldene Aura', 'Blaue Aura', 'Rote Aura', 'Schwarze Aura', 'Blitz-Aura', 'Energie-Aura', 'Schatten-Aura', 'Rauch-Aura', 'Eis-Aura', 'Matrix-Aura', 'Cyber-Aura', 'Speed-Aura', 'Power-Up', 'Supermodus', 'God-Mode', 'Boss-Mode', 'Legendärer Modus', 'Ultra-Modus', 'Shadow-Modus', 'Neon-Modus', 'Glitch-Modus'],
  Essen: ['Kartoffelkopf', 'Tomatenkopf', 'Apfelkopf', 'Wassermelonenkopf', 'Kürbiskopf', 'Käse-Gesicht', 'Popcorn-Gesicht', 'Pommes-Gesicht', 'Döner-inspirierter Filter', 'Taco-Gesicht', 'Sushi-Gesicht', 'Spaghetti-Gesicht', 'Hotdog-Gesicht', 'Wassereis-Gesicht', 'Schokoladen-Gesicht', 'Gummibärchen-Gesicht', 'Marshmallow-Gesicht', 'Limonaden-Gesicht', 'Kaffeetassen-Filter', 'Teekannen-Filter', 'Milchbart', 'Schokobart', 'Zuckerguss-Gesicht'],
  Events: ['Geburtstag', 'Geburtstagsparty', 'Geburtstagshut', 'Luftballons', 'Weihnachten', 'Weihnachtsmütze', 'Rentiergeweih', 'Schneemann', 'Nikolaus', 'Advent', 'Silvester', 'Feuerwerk', 'Neujahr', 'Valentinstag', 'Ostern', 'Osterhase', 'Ostereier', 'Frühling', 'Sommer', 'Herbst', 'Winter', 'Halloween', 'Karneval', 'Fasching', 'Fußball-WM', 'Fußballfan', 'Stadion', 'Pokal', 'Kürbis', 'Hexenhut', 'Vampirzähne', 'Skelett-Maske', 'Mumienbandagen', 'Monster', 'Cartoon-Monster', 'Schattenmonster', 'Schleimmonster', 'Alienmonster', 'Roboter-Monster', 'Drachenmonster', 'Zyklop', 'Drei-Augen-Monster', 'Vier-Augen-Monster', 'Monsterzähne', 'Monsteraugen', 'Monsterohren', 'Monsterhörner', 'Spuknebel', 'Geisterlichter', 'Kürbisaugen', 'Fledermaus-Schwarm', 'Spinnenfilter', 'Cartoon-Spinnennetz'],
  Social: ['Gehirn-Emoji', 'Gedankenblasen', 'LOL-Gesicht', 'WOW-Gesicht', 'BRUH-Filter', 'NO WAY-Filter', 'Fake-Tränen', 'Fake-Schweiß', 'Überraschung', 'Wut-Emoji', 'Lach-Emoji', 'Traurig-Emoji', 'Cool-Emoji', 'Feuer-Emoji', 'Raketen-Emoji', 'Party-Emoji', 'Herz-Emoji', 'Augen-Emoji', '100-Emoji', 'Fragezeichen', 'Ausrufezeichen', 'Meme-Pfeile', 'Likes über dem Kopf', 'Follower-Zähler', 'Live-Stream', 'Kommentarblasen', 'Herz-Regen', 'Like-Regen', 'Follow-Button', 'Subscribe-Button', 'Verifizierungs-Haken', 'Trending-Filter', 'Viral-Filter', 'POV-Filter', 'Story-Filter', 'Reel-Filter', 'Short-Video-Filter', 'Kamera-Rahmen', 'Selfie-Rahmen', 'Foto-Blitz', 'Aufnahme-Symbol', 'Live-Symbol', 'Mikrofon', 'Headset', 'Creator-Filter', 'Vlog-Filter', 'News-Filter', 'Breaking-News', 'Wetterbericht'],
  Power: ['Super-Saiyan-inspirierte Aura', 'Hacker-inspirierter Look', 'Matrix-Code', 'Digitales Gesicht', 'Hologramm', 'Cyber-Maske', 'Baby-Gesicht', 'Opa-Look', 'Comicfigur', 'Cartoonfigur', 'Roboterkopf', 'Alienkopf', 'Tierkopf', 'Froschkopf', 'Katzenkopf', 'Hundekopf', 'Panda-Kopf', 'Bärenkopf', 'Löwenkopf', 'Tigerkopf', 'Dinosaurierkopf', 'Fischkopf', 'Haikopf', 'Oktopuskopf', 'Unsichtbares Gesicht', 'Spiegel-Gesicht']
};
const filters = [...featuredFilters, ...Object.entries(catalogGroups).flatMap(([category, names]) => names.map((name, index) => ({ name, category, symbol: ['✦', '◈', '●', '✧', '◒'][index % 5], tag: category, color: ['#ef765e', '#e6a3e9', '#7fce74', '#81a6e8', '#f5d67b'][index % 5] })) )];
const categories = ['Alle', ...new Set(filters.map(filter => filter.category))];
const list = document.querySelector('#filterList');
const tabs = document.querySelector('#categoryTabs');
const count = document.querySelector('#filterCount');
const selectedName = document.querySelector('#selectedName');
const selectedTag = document.querySelector('#selectedTag');
const stageTint = document.querySelector('#stageTint');
const stage = document.querySelector('#cameraStage');
const video = document.querySelector('#video');
const placeholder = document.querySelector('#cameraPlaceholder');
const status = document.querySelector('#cameraStatus');
const detectionStatus = document.querySelector('#detectionStatus');
let activeCategory = 'Alle';
let selectedFilter = filters[0];
let stream;
let gallery = JSON.parse(localStorage.getItem('faceplay-gallery') || '[]');
const soundFiles = [
  'absolutesound-brazilian-phonk-brazil-529761.mp3',
  'absolutesound-hard-phonk-phonk-music-529766.mp3',
  'alex-morgan-phonk-aggressive-drift-night-573644.mp3',
  'alex-morgan-phonk-brazilian-phonk-phonk-music-545509.mp3',
  'alex-morgan-rap-street-cypher-bounce-578491.mp3',
  'alexguz-funk-amp-breakbeat-541097.mp3',
  'audiocopper-dark-571483.mp3',
  'jonasblakewood-pop-524132.mp3',
  'jonasblakewood-pop-vibe-569719.mp3',
  'jonasblakewood-summer-pop-546980.mp3',
  'kontraa-hype-drill-music-438398.mp3',
  'leberch-ambient-578724.mp3',
  'leberch-instrumental-580519.mp3',
  'leberch-piano-580534.mp3',
  'mirostar-rap-rap-beat-beats-music-560329.mp3',
  'mondamusic-phonk-gym-phonk-560143.mp3',
  'nastelbom-rap-rap-beats-427008.mp3',
  'prettyjohn1-rap-rap-beat-beats-music-527076.mp3',
  'prettyjohn1-rap-rap-beat-beats-music_66sec-495236.mp3',
  'sigmamusicart-football-football-music-551346.mp3',
  'sigmamusicart-phonk-music-409064.mp3',
  'solarflex-brazilian-phonk-phonk-558230.mp3',
  'the_mountain-phonk-567414.mp3',
  'vibemode-pop-barcelona-545899.mp3'
];
let sounds = soundFiles.map(file => ({ name: file.replace(/\.mp3$/i, '').replace(/[-_]/g, ' '), url: `Sounds/${encodeURIComponent(file)}` }));
let recorder;
let recordedChunks = [];
let recordingAudio;
localStorage.removeItem('faceplay-user');
localStorage.removeItem('faceplay-friends');
localStorage.removeItem('faceplay-messages');

function renderTabs() {
  tabs.innerHTML = categories.map(category => `<button class="${category === activeCategory ? 'active' : ''}" data-category="${category}">${category}</button>`).join('');
  tabs.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    renderTabs();
    renderFilters();
  }));
}
function renderFilters() {
  const query = document.querySelector('#searchInput').value.toLowerCase().trim();
  const visible = filters.filter(filter => (activeCategory === 'Alle' || filter.category === activeCategory) && filter.name.toLowerCase().includes(query));
  count.textContent = String(visible.length).padStart(2, '0');
  list.innerHTML = visible.map(filter => `<button class="filter-card ${selectedFilter.name === filter.name ? 'selected' : ''}" data-filter="${filter.name}"><span class="filter-symbol" style="color:${filter.color}">${filter.symbol}</span><strong>${filter.name}</strong><small>${filter.tag}</small></button>`).join('') || '<p class="empty-state">Kein Filter gefunden.</p>';
  list.querySelectorAll('.filter-card').forEach(card => card.addEventListener('click', () => selectFilter(filters.find(filter => filter.name === card.dataset.filter))));
}
function selectFilter(filter) {
  selectedFilter = filter;
  selectedName.textContent = filter.name;
  selectedTag.textContent = filter.tag;
  stageTint.style.background = filter.color;
  document.querySelector('#faceLabel').textContent = filter.name;
  renderFilters();
  showToast(`${filter.name} aktiviert`);
}
function showToast(message) { const toast = document.querySelector('#toast'); toast.textContent = message; toast.classList.add('show'); window.clearTimeout(showToast.timer); showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 1800); }
async function startCamera() {
  if (!navigator.mediaDevices?.getUserMedia) { showToast('Diese Umgebung unterstützt keine Kamera.'); return; }
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 1280 } }, audio: true });
    video.srcObject = stream;
    placeholder.style.display = 'none';
    stage.classList.add('detected');
    status.textContent = 'Kamera aktiv';
    document.querySelector('.status-dot').classList.add('active');
    document.querySelector('.live-dot').classList.add('active');
    detectionStatus.textContent = 'Gesicht erkannt';
    detectFace();
  } catch { showToast('Kamerazugriff wurde nicht erlaubt.'); }
}
async function detectFace() {
  if ('FaceDetector' in window) {
    try {
      const detector = new FaceDetector({ fastMode: true, maxDetectedFaces: 1 });
      const faces = await detector.detect(video);
      stage.classList.toggle('detected', faces.length > 0);
      detectionStatus.textContent = faces.length ? 'Gesicht erkannt' : 'Gesicht wird gesucht';
    } catch { detectionStatus.textContent = 'Gesicht erkannt'; }
  }
  window.setTimeout(detectFace, 700);
}
function renderGallery() {
  const grid = document.querySelector('#galleryGrid');
  document.querySelector('#galleryCount').textContent = `${gallery.length} FOTO${gallery.length === 1 ? '' : 'S'}`;
  if (!gallery.length) {
    grid.innerHTML = '<div class="gallery-empty"><span>✦</span><strong>Noch keine Fotos</strong><p>Drücke den Auslöser, um deinen ersten Look zu speichern.</p></div>';
    return;
  }
  grid.innerHTML = gallery.map((photo, index) => `<article class="gallery-card">${photo.type === 'video' ? `<video src="${photo.data}" controls preload="metadata"></video>` : `<img src="${photo.data}" alt="${photo.filter} Filterfoto">`}<div class="gallery-meta"><div><strong>${photo.filter}</strong><small>${photo.music ? `♫ ${photo.music}` : photo.date}</small>${photo.type !== 'video' && photo.soundUrl ? `<audio src="${photo.soundUrl}" controls preload="none"></audio>` : ''}</div><div class="gallery-actions"><button data-download="${index}" title="Datei herunterladen" aria-label="Datei herunterladen">↓</button><button data-delete="${index}" title="Datei löschen" aria-label="Datei löschen">×</button></div></div></article>`).join('');
  grid.querySelectorAll('[data-download]').forEach(button => button.addEventListener('click', () => downloadPhoto(gallery[button.dataset.download])));
  grid.querySelectorAll('[data-delete]').forEach(button => button.addEventListener('click', () => { gallery.splice(button.dataset.delete, 1); persistGallery(); renderGallery(); }));
}
function persistGallery() { localStorage.setItem('faceplay-gallery', JSON.stringify(gallery)); }
function capturePhoto() {
  if (!video.srcObject || video.readyState < 2) { showToast('Starte zuerst die Kamera.'); return; }
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth || 1280;
  canvas.height = video.videoHeight || 720;
  const context = canvas.getContext('2d');
  if (stage.classList.contains('mirrored')) { context.translate(canvas.width, 0); context.scale(-1, 1); }
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  if (selectedFilter.color.startsWith('#')) { context.globalAlpha = .16; context.fillStyle = selectedFilter.color; context.fillRect(0, 0, canvas.width, canvas.height); context.globalAlpha = 1; }
  context.fillStyle = '#ffffff'; context.font = `${Math.max(16, canvas.width / 48)}px Space Grotesk, sans-serif`; context.fillText(selectedFilter.name, canvas.width * .04, canvas.height * .92);
  const sound = selectedSound();
  gallery.unshift({ data: canvas.toDataURL('image/jpeg', .9), type: 'photo', filter: selectedFilter.name, music: sound?.name || '', soundUrl: sound?.url || '', date: new Date().toLocaleString('de-DE', { dateStyle: 'short', timeStyle: 'short' }) });
  gallery = gallery.slice(0, 12); persistGallery(); renderGallery(); showToast('Foto zur Galerie hinzugefügt');
}
function renderSounds() { document.querySelector('#captureMusicSelect').innerHTML = '<option value="">Ohne Sound</option>' + sounds.map((sound, index) => `<option value="${index}">${sound.name}</option>`).join(''); }
function selectedSound() { const value = document.querySelector('#captureMusicSelect').value; return value === '' ? null : sounds[Number(value)]; }
function addSounds(files) { sounds.push(...[...files].map(file => ({ name: file.name.replace(/\.[^.]+$/, ''), url: URL.createObjectURL(file), file }))); renderSounds(); showToast(`${files.length} Sound${files.length === 1 ? '' : 's'} hinzugefügt`); }
function downloadPhoto(photo) { const link = document.createElement('a'); link.href = photo.data; link.download = `faceplay-${photo.filter.toLowerCase().replace(/[^a-z0-9]+/gi, '-')}.${photo.type === 'video' ? 'webm' : 'jpg'}`; link.click(); }
function recordVideo() {
  if (!video.srcObject || video.readyState < 2) { showToast('Starte zuerst die Kamera.'); return; }
  if (recorder?.state === 'recording') { recorder.stop(); return; }
  const selected = selectedSound();
  const tracks = [...stream.getVideoTracks()];
  let audioContext;
  if (selected) {
    recordingAudio = new Audio(selected.url); recordingAudio.loop = true;
    audioContext = new AudioContext();
    const source = audioContext.createMediaElementSource(recordingAudio);
    const destination = audioContext.createMediaStreamDestination();
    source.connect(destination); source.connect(audioContext.destination);
    tracks.push(...destination.stream.getAudioTracks());
    recordingAudio.play();
  } else tracks.push(...stream.getAudioTracks());
  const recordStream = new MediaStream(tracks);
  const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus') ? 'video/webm;codecs=vp9,opus' : 'video/webm';
  recordedChunks = []; recorder = new MediaRecorder(recordStream, { mimeType });
  recorder.ondataavailable = event => { if (event.data.size) recordedChunks.push(event.data); };
  recorder.onstop = () => { const blob = new Blob(recordedChunks, { type: mimeType }); const reader = new FileReader(); reader.onload = () => { gallery.unshift({ data: reader.result, type: 'video', filter: selectedFilter.name, music: selected?.name || '', date: new Date().toLocaleString('de-DE', { dateStyle: 'short', timeStyle: 'short' }) }); gallery = gallery.slice(0, 12); persistGallery(); renderGallery(); showToast('Video zur Galerie hinzugefügt'); }; reader.readAsDataURL(blob); if (recordingAudio) recordingAudio.pause(); if (audioContext) audioContext.close(); document.querySelector('#recordButton').textContent = '◉ Video aufnehmen'; };
  recorder.start(); document.querySelector('#recordButton').textContent = '■ Aufnahme stoppen'; showToast('Videoaufnahme läuft');
}
document.querySelector('#startButton').addEventListener('click', startCamera);
document.querySelector('#searchInput').addEventListener('input', renderFilters);
document.querySelector('#mirrorButton').addEventListener('click', () => stage.classList.toggle('mirrored'));
document.querySelector('#snapshotButton').addEventListener('click', capturePhoto);
document.querySelector('#soundInput').addEventListener('change', event => addSounds(event.target.files));
document.querySelector('#recordButton').addEventListener('click', recordVideo);
const chatbotPanel = document.querySelector('#chatbotPanel');
const chatbotMessages = document.querySelector('#chatbotMessages');
function addChatbotMessage(text, type) { const message = document.createElement('div'); message.className = type === 'user' ? 'user-message' : 'bot-message'; message.textContent = text; chatbotMessages.appendChild(message); chatbotMessages.scrollTop = chatbotMessages.scrollHeight; return message; }
document.querySelector('#chatbotButton').addEventListener('click', () => { chatbotPanel.classList.add('open'); chatbotPanel.setAttribute('aria-hidden', 'false'); document.querySelector('#chatbotInput').focus(); });
document.querySelector('#closeChatbot').addEventListener('click', () => { chatbotPanel.classList.remove('open'); chatbotPanel.setAttribute('aria-hidden', 'true'); });
document.querySelector('#chatbotForm').addEventListener('submit', async event => { event.preventDefault(); const input = document.querySelector('#chatbotInput'); const text = input.value.trim(); if (!text) return; addChatbotMessage(text, 'user'); input.value = ''; const loading = addChatbotMessage('Ich denke kurz nach ...', 'bot'); try { const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text }) }); const data = await response.json(); if (!response.ok) throw new Error(data.error || 'Chatbot nicht erreichbar'); loading.textContent = data.reply; } catch (error) { loading.textContent = `${error.message}. Starte die App mit npm start und prüfe deinen Groq-Key in .env.`; } });
renderTabs(); renderFilters(); renderGallery(); renderSounds();
