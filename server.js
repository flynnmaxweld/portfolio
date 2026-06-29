const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.otf': 'font/otf',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  try {
    let rawUrl = req.url.split('?')[0];
    let decodedUrl = decodeURIComponent(rawUrl);
    
    let filePath = path.join(PUBLIC_DIR, decodedUrl);

    fs.stat(filePath, (err, stats) => {
      if (!err && stats.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }

      fs.stat(filePath, (err2, stats2) => {
        if (err2 || !stats2.isFile()) {
          const ext = path.extname(decodedUrl).toLowerCase();
          if (ext && ext !== '.html') {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 Not Found');
          }
          filePath = path.join(PUBLIC_DIR, '404.html');
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        fs.readFile(filePath, (err3, content) => {
          if (err3) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Server Error');
          } else {
            res.writeHead(200, {
              'Content-Type': contentType,
              'Access-Control-Allow-Origin': '*',
              'Cache-Control': 'no-cache'
            });
            res.end(content);
          }
        });
      });
    });
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('400 Bad Request');
  }
});

server.listen(PORT, () => {
  console.log(`Portfolio server running cleanly at http://localhost:${PORT}/`);
});
