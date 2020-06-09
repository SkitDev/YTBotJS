const Discord = require('discord.js'),
    config = require('./config.json'),
    client = new Discord.Client();

client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on('guildMemberAdd', member => {
    const guild = member.guild,
        channel = guild.channels.cache.get(config.welcome);
    if(channel == null)return;
    
    const embed = new Discord.MessageEmbed()
        .setTitle("Nouvel arrivant !")
        .setDescription(`Bienvenue ${member} sur le discord !`)
        .setThumbnail(member.user.avatarURL)
        .setColor(123456);
    channel.send(embed);
});

client.on('guildMemberRemove', member => {
    const guild = member.guild,
        channel = guild.channels.cache.get(config.welcome);
    if(channel == null)return;
    
    const embed = new Discord.MessageEmbed()
        .setTitle("Un membre nous a quitté !")
        .setDescription(`A bientôt ${member.user.tag} !`)
        .setThumbnail(member.user.avatarURL)
        .setColor(600000);
    channel.send(embed);
});
client.login(config.token);