const http = require('http');
const myDateTime = require('./myDateTime');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Current date and time: ${myDateTime.getCurrentDateTime()}\n`);
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
