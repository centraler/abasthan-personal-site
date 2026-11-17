const http = require('node:http');

const page = `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>个人主页</title>
<style>body{margin:0;background:#f5f7f5;color:#1d2c26;font:16px/1.7 system-ui,sans-serif}main{max-width:720px;margin:9vh auto;padding:32px}small{color:#577468;letter-spacing:.12em}h1{font-size:clamp(2.3rem,7vw,4rem);line-height:1.12;margin:1rem 0}p{color:#4d5e55}section{margin-top:36px;border-top:1px solid #dbe4de;padding-top:20px}a{color:#226744}</style></head>
<body><main><small>PERSONAL SPACE</small><h1>你好，欢迎来到<br>我的个人空间。</h1><p>这里记录学习、实践和正在探索的想法。</p><section><h2>探索方向</h2><p>运筹优化 · 交通运输 · AI 应用</p></section><section><h2>网站状态</h2><p>这是一个初始版本，内容会逐步完善。</p><a href="/api/status">查看服务状态</a></section></main></body></html>`;

http.createServer((req, res) => {
  if (req.url === '/api/status' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store'});
    return res.end(JSON.stringify({status: 'ok', service: 'personal-site'}));
  }
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    return res.end(page);
  }
  res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('Not found');
}).listen(Number(process.env.PORT) || 3000, '0.0.0.0');
