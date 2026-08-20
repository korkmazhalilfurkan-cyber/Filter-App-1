# Faceplay Studio

Eine buildfreie Browser-App fur Kamera-Filter. Die Kamera wird erst nach Klick aktiviert. Wenn der Browser die native `FaceDetector`-API unterstutzt, wird das erkannte Gesicht live markiert; ansonsten bleibt die Vorschau mit dem aktivierten Look nutzbar.

## Start

Die Datei `index.html` direkt im Browser offnen. Fur Kamerazugriff kann je nach Browser eine sichere Umgebung (`localhost` oder HTTPS) erforderlich sein. Nach dem Start der Kamera nimmt der runde Ausloser ein Foto auf, legt es in der Galerie ab und bietet dort einen Download als JPG an. Die Galerie speichert bis zu 12 Fotos lokal im Browser.

Uber `Sound hinzufugen` konnen eigene MP3-Dateien ausgewahlt werden. Der aktive Sound wird bei Fotos als Metadatum gespeichert und bei Videoaufnahmen als Audiospur verwendet. Die App kopiert oder veroffentlicht keine Musik; fur die bereitgestellten urheberrechtlich geschutzten Dateien muss der Nutzer die erforderlichen Rechte besitzen.

## Groq Chatbot

1. `.env.example` als `.env` kopieren.
2. In `.env` den eigenen Groq-Key bei `GROQ_API_KEY` eintragen. Den Key niemals in `app.js` oder `index.html` speichern.
3. Im Projektordner `npm start` ausfuhren.
4. `http://localhost:3000` offnen und oben `Chatbot` auswahlen.

Der Node.js-Server schickt die Chatnachfrage an Groq und halt den API-Key serverseitig. Ohne `.env` zeigt der Chat eine klare Fehlermeldung, die Filter-App funktioniert trotzdem.

Die Filterliste ist als erweiterbares Array in `app.js` angelegt. Suche und Kategorien funktionieren direkt ohne Backend.
