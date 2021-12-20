module.exports = (client) => {
    const channelid = "922163303214616639";
    client.on("guildMemberAdd", (member) => {

        const message = `👋 Heilà <@${member.id}> Benvenuto/a nel server **I Due Gamer! Il prefisso del bot è $**\n\n😁 Buona permanenza!`;
        
        const channel = member.guild.channels.cache.get(channelid);
        channel.send(message);
    });
};
