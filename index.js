var TelegramBot = require('node-telegram-bot-api');
var TOKEN = '1294511706:AAGrODagk3YleJkwKrI29KT9gMB0yhORlcc';
var bot = new TelegramBot(TOKEN, {polling: true});

const express = require("express")
const cors = require("cors")

/* Dependencies */
const app = express()
app.use(express.json())
app.use(cors())

app.post("/webhooks", async (req, res) => {
    if (req.body.action == "created") {
        bot.sendMessage(msg.chat.id, `Got a like from ${req.body.sender.login}!`)
    } else {
      bot.sendMessage(msg.chat.id, `Like deleted from: ${req.body.sender.login}!`)
    }

    /* Remember to tell the API that we hear them. */
    res.status(200).send("Received!")
})

/* Start server */
const port = process.env.PORT
app.listen(port)

console.log(`Running on ${port}`)