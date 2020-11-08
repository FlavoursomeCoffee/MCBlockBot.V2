const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello there'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong!');
  }
});
// 
client.login(process.env.DISCORD_TOKEN);
client.login('NzMwMzI1NjcxMjg0NTcyMjAw.XwV2yA.OxO5rv7_5QeX1PQBAHwIvZMLQH4')