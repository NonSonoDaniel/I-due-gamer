const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'regolamento',
    description: 'kicks user',
    async execute(client, message, args, Discord){

       
        const administrator = new Discord.MessageEmbed()
        .setTitle(`regolamento`)
        .setDescription('Non puoi usare questo comando perchè non sei DANI o SAMU')
        .setColor('RANDOM')
       
           if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(administrator)


           const regolamento = new Discord.MessageEmbed()
           .setTitle('Regolamento')
           .setColor('RANDOM')
           .setDescription("Qui è elencato il regolamento per il server di i Due Gamer")
           .addFields(
               {name: '1.', value: 'Non bestemmiare'},
               {name: '2.', value: 'Non usare sounboard nei canali vocali'},
               {name: '3.', value: 'Non insultare'},
               {name: '4.', value: 'Non spammare link di server'},
               {name: '5.', value: 'Non promuovere altri canali youtube o twitch'},
               {name: '6.', value: 'Mantenere un comportamento corretto nei canali vocali e testuali'},
               {name: '7.', value: 'Buona Permanenza 😁'},

               )
               .setImage('https://cdn.discordapp.com/attachments/922224453130272849/922229632361713744/1639914751404.png')
               .setFooter('I Due Gamer by 𝕯𝖆𝖓𝖎#7604');
       
               message.channel.send(regolamento);


    }
}