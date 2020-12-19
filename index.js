const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello there! Click this link if you want to add my bot to your server! https://discord.com/oauth2/authorize?client_id=730325671284572200&scope=bot&permissions=8'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello there! Click this link if you want to add my bot to your server! https://discord.com/oauth2/authorize?client_id=730325671284572200&scope=bot&permissions=8'));

app.listen(port, () => console.log(`Minecraft Block Bot listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

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
        image: {
		      url: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7e/Granite_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20200315183719',
	      },
        description: "Granite is a block in Minecraft.",
        fields: [{
          name: "Spawning",
          value: "Granite is commonly found in the Overworld."

        }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "This is called text"
        }
      }
    });
} else if (msg.content === `${prefix}beep`) {
	msg.reply('Boop.');

} else if (msg.content === `${prefix}konami`) {
  msg.reply('Up Up Down Down Left Right Left Right B A Start')   
 }
});
// 
client.login(process.env.DISCORD_TOKEN);
client.login('Secret')
