const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'youtube',
    description: 'Sposta un utente',
    execute(client, message, args, Discord){
    
        const youtube = new Discord.MessageEmbed()
        .setTitle('I Due Gamer')
        .setColor('RANDOM')
        .setDescription('https://www.youtube.com/channel/UCY4h93zhzR8stlhoI66vBXQ')

        message.channel.send(youtube)
    
    }
    }