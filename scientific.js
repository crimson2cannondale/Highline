const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  let scientific = new Discord.MessageEmbed()
    .setTitle("Scientific Calculator")
    .setURL("https://www.desmos.com/scientific")
    .setColor("GREEN")
    message.channel.send({embeds : [scientific]});
}

module.exports.name = "scientific"
