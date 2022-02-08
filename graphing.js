const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  let graphing = new Discord.MessageEmbed()
    .setTitle("Desmos Graphing Calculator")
    .setURL("https://www.desmos.com/calculator")
    .setColor("GREEN")
    message.channel.send({embeds : [graphing]});
}

module.exports.name = "graphing"
