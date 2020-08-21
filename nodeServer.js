const http = require('http');

// need the filesystem module
const fs = require('fs');

// the http module had createServer method takes 1 arg which is callback
// req = request
// res = response

const server = http.createServer((req, res) => {
  // req is data that send to us from the client
  // res is the data we send back to the client
  console.log('request ', req.url);
  if (req.url === '/') {
    // server up the home page
    res.writeHead(200, { 'context-type': 'text/html' });
    const homePageHtml = fs.readFileSync('node.html');
    res.write(homePageHtml);
    res.end();
  } else if (req.url === '/1024px-Node.js_logo.svg.png') {
    res.writeHead(200, { 'context-type': 'image/png' });
    const image = fs.readFileSync('./1024px-Node.js_logo.svg.png');
    res.write(image);
    res.end();
  } else {
    res.writeHead(404, { 'context-type': 'text/html' });
    res.write(`<h4>Sorry this isn't the page you are looking for</h4>`);
    res.end();
  }
});

// createServer return an object with a listen method
// listen takes 1 arg
// 1.  port to listen for http traffic on
server.listen(3000, () => {
  console.log('server listing on port 3000');
});
