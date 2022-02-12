const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
  let fourFunction = new Discord.MessageEmbed()
    .setTitle("Four Function Calculator")
    .setURL("https://www.desmos.com/fourfunction")
    .setColor("GREEN")
    message.channel.send({embeds : [fourFunction]});
}

module.exports.name = "fourFunction"
