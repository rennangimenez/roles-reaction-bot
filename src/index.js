const Discord = require('discord.js');
const dotenv = require('dotenv');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

dotenv.config();

bot.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm") return;

    let prefix = process.env.PREFIX;
    let messaArray = message.content.split(" ");
    let cmd = messaArray[0];
    let args = message.content.substring(message.content.indexOf(' ') + 1);

    if (!message.content.startsWith(prefix)) return;

    if (cmd === `${prefix}roles_reaction`) {
        let embed = new Discord.MessageEmbed()
            .setTitle("Utilize as reações para liberar as salas do jogo escolhido.")
            .setDescription("1. <:lollogo:765286832442966026> - League of Legends \n 2. <:tft:764585249543815228> - Teamfigth Tatics \n 3. <:valorant:764585242756644895> - Valorant \n 4. <:csgo:764704879859859506> - Counter Strike \n 5. <:cdwarzone:764585242995458069> - Call of Duty: Warzone \n 6. <:fortnite:764585242638942229> - Fortnite \n 7. <:amongus:764695467145297921> - Among Us \n 8. <:pes:764585250482552892> - Pro Evolution Soccer")
            .setColor("RED");
        let msgEmbed = await message.channel.send(embed);
        msgEmbed.react("765286832442966026");
        msgEmbed.react("764585249543815228");
        msgEmbed.react("764585242756644895");
        msgEmbed.react("764704879859859506");
        msgEmbed.react("764585242995458069");
        msgEmbed.react("764585242638942229");
        msgEmbed.react("764695467145297921");
        msgEmbed.react("764585250482552892");
    }
});

bot.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === '764183682692415531') {
        if (reaction.emoji.name === 'lollogo') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('764530338947924010');
        }
        if (reaction.emoji.name === 'tft') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('764530444611616809');
        }
        if (reaction.emoji.name === 'valorant') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('764530574978187305');
        }
        if (reaction.emoji.name === 'csgo') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('764530524001534002');
        }
        if (reaction.emoji.name === 'cdwarzone') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('764530721746321458');
        }
        if (reaction.emoji.name === 'fortnite') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('764530631723188264');
        }
        if (reaction.emoji.name === 'amongus') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('764704238244462602');
        }
        if (reaction.emoji.name === 'pes') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('764530658835038208');
        }
    }
});

bot.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === '764183682692415531') {
        if (reaction.emoji.name === 'lollogo') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('764530338947924010');
        }
        if (reaction.emoji.name === 'tft') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('764530444611616809');
        }
        if (reaction.emoji.name === 'valorant') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('764530574978187305');
        }
        if (reaction.emoji.name === 'csgo') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('764530524001534002');
        }
        if (reaction.emoji.name === 'cdwarzone') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('764530721746321458');
        }
        if (reaction.emoji.name === 'fortnite') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('764530631723188264');
        }
        if (reaction.emoji.name === 'amongus') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('764704238244462602');
        }
        if (reaction.emoji.name === 'pes') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('764530658835038208');
        }
    }
});

bot.login(process.env.TOKEN);