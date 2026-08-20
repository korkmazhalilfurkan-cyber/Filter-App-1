const http = require('http');
const fs = require('fs');
const path = require('path');

loadEnv();
const port = Number(process.env.PORT || 3000);
const root = __dirname;
const mimeTypes = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.mp3': 'audio/mpeg', '.jpg': 'image/jpeg', '.png': 'image/png', '.webm': 'video/webm' };

function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) return;
  fs.readFileSync(envPath, 'utf8').split(/\r?\n/).forEach(line => {
    const match = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/i);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, '');
  });
}
function sendJson(response, status, data) { response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' }); response.end(JSON.stringify(data)); }
function serveFile(request, response) {
  const requested = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  const filePath = path.resolve(root, `.${requested === '/' ? '/index.html' : requested}`);
  if (!filePath.startsWith(root) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) { response.writeHead(404); response.end('Not found'); return; }
  response.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream' }); fs.createReadStream(filePath).pipe(response);
}
function readBody(request) { return new Promise((resolve, reject) => { let body = ''; request.on('data', chunk => { body += chunk; if (body.length > 100000) request.destroy(); }); request.on('end', () => resolve(body)); request.on('error', reject); }); }
const server = http.createServer(async (request, response) => {
  if (request.method === 'POST' && request.url === '/api/chat') {
    if (!process.env.GROQ_API_KEY) { sendJson(response, 500, { error: 'GROQ_API_KEY fehlt in .env' }); return; }
    try {
      const { message } = JSON.parse(await readBody(request));
      if (!message || typeof message !== 'string') { sendJson(response, 400, { error: 'Nachricht fehlt' }); return; }
      const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.GROQ_API_KEY}` }, body: JSON.stringify({ model: process.env.GROQ_MODEL || 'llama-3.3-70b-versatile', temperature: 0.7, max_tokens: 500, messages: [{ role: 'system', content: 'Du bist Faceplay AI. Antworte freundlich, kurz und auf Deutsch. Hilf bei Filterideen, Kamera und kreativen Foto- und Videoideen.' }, { role: 'user', content: message }] }) });
      const data = await groqResponse.json();
      if (!groqResponse.ok) { sendJson(response, groqResponse.status, { error: data.error?.message || 'Groq-Anfrage fehlgeschlagen' }); return; }
      sendJson(response, 200, { reply: data.choices?.[0]?.message?.content || 'Ich habe gerade keine Antwort.' });
    } catch (error) { sendJson(response, 500, { error: error.message || 'Serverfehler' }); }
    return;
  }
  if (request.method === 'GET') { serveFile(request, response); return; }
  response.writeHead(405); response.end('Method not allowed');
});
server.listen(port, () => console.log(`Faceplay Studio läuft auf http://localhost:${port}`));
