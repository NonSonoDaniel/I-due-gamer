const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'kick',
    description: 'kicks user',
    async execute(client, message, args, Discord){
        const author = message.member;
        const target = message.mentions.members.first();
        
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**Non usare questo comando se non hai il permesso di kikare**')

        const member = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "Nessuna ragione specificata";

        const embed = new Discord.MessageEmbed()
        .setTitle(`**Sei stato kickato da ${message.guild.name}**`)
        .setDescription(`**Ragione: ${reason}\n\n Moderatore: ${author.user.tag}**`)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())



        if (!args[0]) return message.channel.send('**Non hai taggato nessuno!**');

        if(!member)  return message.channel.send("**L'utente non è valido o non è più nel server!**");

        if(!member.kickable) return message.channel.send("**Non è stato possibile kickare questo utente!**");

        await member.send(embed);
        await member.kick({
            reason: reason
        })

        const kickEmbed = new MessageEmbed()
        .setTitle("**__Kick Report__**")
        .setColor('RANDOM')
        .setDescription(`**L'utente <@${member.id}> è stato kickato da <@${message.author.id}>**`)
        .addField(`**Motivo:**`, `\`${reason}\``)
        .addField(`**Azione:**`, `\`Kick\``)
        .addField(`**Moderatore:**`, `${message.author}`)
        message.channel.send(kickEmbed)


    }
}