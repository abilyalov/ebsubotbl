var TelegramBot = require('node-telegram-bot-api');
var TOKEN = '1294511706:AAGrODagk3YleJkwKrI29KT9gMB0yhORlcc';
var bot = new TelegramBot(TOKEN, {polling: true});

var http = require('http')
var createHandler = require('node-github-webhook')
var handler = createHandler([ // multiple handlers
  { path: '/webhook1', secret: 'secret1' },
  { path: '/webhook2', secret: 'secret2' }
])
// var handler = createHandler({ path: '/webhook1', secret: 'secret1' }) // single handler

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(7777)

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('push', function (event) {
  console.log(
    'Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref
  )
  switch(event.path) {
    case '/webhook1':
      // do sth about webhook1
      break
    case '/webhook2':
      // do sth about webhook2
      break
    default:
      // do sth else or nothing
      break
  }
})