const Discord = require('discord.js');
const config = require('./config.json')
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
);


client.login('OTIyMTgyODMyODI1MTk2NjA0.Yb9vsA.Dphcqd-G1JQoG3FzFQsWKMn5etM');
const ytch = require("yt-channel-info")


client.on("message", (message) => {

})

setInterval(function () {
    var canale = client.channels.cache.get("922241668365828136")
    ytch.getChannelInfo("UCY4h93zhzR8stlhoI66vBXQ")
        .then(response => {
            canale.setName(`🧑|Iscritti: ${response.subscriberCount}`)
        })
}, 1000 * 60);



const prefix = config.prefix;

client.commands = new Discord.Collection();


const fs = require('fs');
const command = require('nodemon/lib/config/command');

client.once('ready', () => {
    console.log("I Due Gamer Bot è online!");
})



const status = [
    `| $ticket |`,
    `il server`,
];
    
    let index = 0;
    setInterval(() => {
        if(index === status.length) index = 0;
        const status2 = status[index];
        
        client.user.setActivity(status2, { type: "WATCHING" }).catch(console.error)
        index++;
    }, 7500)

    const welcome = require("./commands/welcome");

    welcome(client);

    //Member count
    const snipes = new Discord.Collection()
    
    client.on("guildMemberAdd", member => {
        var canale = client.channels.cache.get("922224152943931453")
        canale.setName("👫| Membri: " + member.guild.memberCount) //Impostare il nome del canale
    });
    client.on("guildMemberRemove", member => {
        var canale = client.channels.cache.get("922224152943931453")
       canale.setName("👫| Membri: " + member.guild.memberCount) //Impostare il nome del canale
    });


    
        //clear
        client.on("message", message => {
    if (message.content.startsWith("$clear")) {

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send('non hai il permesso di eseguire questo comando!');
            return;
        }
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
            message.channel.send('non ho il permesso di eseguire questo comando');
            return;
        }

        var count = message.content.slice(7);
        count = parseInt(count);

        if (!count) {
            message.channel.send("inserisci un numero valido!")
            return
        }

        message.channel.bulkDelete(count, true)
        message.channel.send("**Ho eliminato " + count + " messaggi**").then(msg => {
            msg.delete({ timeout: 5000 })
        })

    }
})



client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);
    
})

    client.on('guildMemberAdd', member => {
        //Autoruolo
    const ruolo = member.guild.roles.cache.find(r => r.name === '🙆 Iscritto');
    member.roles.add(ruolo);
})

const commandFiles = fs.readdirSync('./commands/').filter(File => File.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'online'){
       client.commands.get('online').execute(message, args);
    } else if(command == 'staff'){
        client.commands.get('staff').execute(message, args);
    } else if(command == 'ban'){
        client.commands.get('ban').execute(client, message, args, Discord);
    } else if(command == 'unban'){
        client.commands.get('unban').execute(client, message, args, Discord);
    } else if(command == 'kick'){
        client.commands.get('kick').execute(client, message, args, Discord);
    } else if(command == 'help'){
        client.commands.get('help').execute(message, args, Discord)
    }
    else if(command == 'serverinfo'){
        client.commands.get('serverinfo').execute(message, args);
    }
    else if(command == 'userinfo'){
        client.commands.get('userinfo').execute(message, args);
    }
    else if(command == 'botinfo'){
        client.commands.get('botinfo').execute(client, message, args);
    }
    else if(command == 'avatar'){
        client.commands.get('avatar').execute(client, message, args);
    }
    else if(command == 'ticket'){
        client.commands.get('ticket').execute(client, message, args);
    }
    else if(command == 'instagram'){
        client.commands.get('instagram').execute(client, message, args);
    }
    else if(command == 'sposta'){
        client.commands.get('sposta').execute(client, message, args);
    }
    else if(command == 'warn'){
        client.commands.get('warn').execute(client, message, args);
    }
    else if(command == 'helpcompleto'){
        client.commands.get('helpcompleto').execute(client, message, args, Discord);
    }
});
