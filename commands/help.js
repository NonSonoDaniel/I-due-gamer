module.exports = {
    name: 'soloioesamusappiamoquestalistamoltosegreta',
    description: 'sends all commands',
    execute(message, args, Discord){
        const Embed = new Discord.MessageEmbed()
        .setTitle('Comandi:')
        .setColor('ORANGE')
        .setDescription("Qui sono elencati i comandi per 6.0")
        .addFields(
            {name: 'help', value: 'Manda questo elenco'},
            {name: 'ban', value: 'Banna un utente'},
            {name: 'unban', value: 'Sbanna un utente'},
            {name: 'kick', value: 'Espelli un utente'},
            {name: 'serverinfo', value: 'Visualizza le informazioni del server'},
            {name: 'userinfo', value: 'Visualizza le informazione dell utente'},
            {name: 'botinfo', value: 'Visualizza le informazione del bot'},
            {name: 'clear', value: 'Elimina un numero di messaggi'},
            {name: 'avatar', value: 'Mosta l\'avatar di un utente'},
            {name: 'ticket', value: 'Ti aiuta ad aprire un ticket di assistenza'},
            {name: 'warn', value: 'Warna un utente'},
            
        )
        .setImage('https://cdn.discordapp.com/attachments/922224453130272849/922229632361713744/1639914751404.png')
        .setFooter('I Due Gamer by 𝕯𝖆𝖓𝖎#7604');

        message.channel.send(Embed);
    }
}