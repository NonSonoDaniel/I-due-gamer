const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'ticketcommand',
    description: 'kicks user',
    async execute(client, message, args, Discord){

        const author = message.member;
       
        const administrator = new Discord.MessageEmbed()
        .setTitle(`ticketcommand`)
        .setDescription('Non puoi usare questo comando perchè non sei DANI o SAMU')
        .setColor('RANDOM')
       
           if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(administrator)


           const comando = new Discord.MessageEmbed()
           .setTitle(`ticketcommand`)
           .setDescription('Per richiedere un ticket digita $ticket')
           .setColor('RANDOM')

           message.channel.send(comando)
    
    
    }
    }