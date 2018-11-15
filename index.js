const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) =>{

    if(message.content == 'ping'){
        message.channel.sendMessage('pong'); 
    }
    if(message.content == 'hello there'){
        message.channel.sendMessage('GENERAL KENOBI'); 
    }
    if(message.content == 'kinky'){
        message.channel.sendMessage('konky bonky'); 
    }
    if(message.content == 'sieg'){
        message.channel.sendMessage('heil'); 
    }
    if(message.content == 'i hate my life'){
        message.channel.sendMessage('me too'); 
    }
    if(message.content == 'I hate my life'){
        message.channel.sendMessage('#metoo'); 
    }
    if(message.content == 'kut'){
        message.channel.sendMessage('KETTER'); 
    }
    if(message.content == 'fuck'){
        message.channel.sendMessage('ONCHRISTELIJK'); 
    }
    if(message.content == 'i wanna die'){
        message.channel.sendMessage('lemme help ya'); 
    }
    if(message.content == 'Alluh'){
        message.channel.sendMessage('AKBAR'); 
    }
    if(message.content == 'Ebola'){
        message.channel.sendMessage('kinky'); 
    }
    if(message.content == 'yeet'){
        message.channel.sendMessage('your meat'); 
    }
    if(message.content == 'your meat'){
        message.channel.sendMessage('to the beat'); 
    }
    if(message.content == 'to the beat'){
        message.channel.sendMessage('of the dancing feet'); 
    }
    if(message.content == 'this bitch empty'){
        message.channel.sendMessage('yeet'); 
    }
    if(message.content == 'HA'){
        message.channel.sendMessage('GAYYYYY'); 
    }
    if(message.content == 'incest'){
        message.channel.sendMessage('is wincest'); 
    }
    if(message.content == 'bips'){
        message.channel.sendMessage(':peach: '); 
    }

})

bot.login('NTEyNjQzODM1MzQ0NDUzNjMz.Ds8e0w.KYg6_P9M4YcchZ079FMh2g3cibw');