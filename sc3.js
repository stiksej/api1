const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);

    // Sprawdź, czy żądanie dotyczy ścieżki /api/jsonData.json
    if (parsedUrl.pathname === '/api/jsonData.json') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost'
        });
        // Pobierz dane z pliku jsonData.json i wyślij jako odpowiedź
        fs.readFile('jsonData.json', 'utf8', function(err, data) {
            if (err) throw err;
            res.end(data);
        });
    } else {
        // Obsługa innych ścieżek
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found\n');
    }
}).listen(8080);
