const Discord = require('discord.js'); 
const config = require('./config.json'); 
const client = new Discord.Client();

client.on('ready', () => { 
    console.log(`I'm ready!`);
});

client.on("message", message => { 
    
    if(message.author.bot) return; 

    if(message.content.indexOf(config.prefix) e?== 0) return; 

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g); 
    const command = args.shift().toLowerCase();

    //Commands
    if(command === "ping") { // "!ping"
        message.channel.send('Pong!'); 
    }
});
client.login(config.token);
