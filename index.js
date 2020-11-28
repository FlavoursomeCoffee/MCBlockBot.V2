const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello there! Click this link if you want to add my bot to your server! https://discord.com/oauth2/authorize?client_id=730325671284572200&scope=bot&permissions=8'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: "online",  //You can show online, idle....
    game: {
      name: "Type ping",  //The message shown
      type: "STREAMING"
    }
  });
});
const prefix = ")";
client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) return;

  if (msg.content.startsWith(prefix + "granite")) {
    msg.reply({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "**Granite**",
        url: "https://static.wikia.nocookie.net/minecraft/images/0/0b/PolishedGraniteNew.png/revision/latest?cb=20190903225756",
        description: "Granite is a block in Minecraft.",
        fields: [{
          name: "Spawning",
          value: "Granite is commonly found in the Overworld."

        }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© Mojang"
        }
      }
    });

  } else if (msg.content.startsWith(prefix + "beep")) {
    msg.reply('boop');
  }
});
// 
client.login(process.env.DISCORD_TOKEN);
client.login('Secret Token')
