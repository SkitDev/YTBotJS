const Discord = require('discord.js'),
    config = require('./config.json'),
    client = new Discord.Client();

client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
});

client.login(config.token);