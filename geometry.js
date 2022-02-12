const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
  let geometry = new Discord.MessageEmbed()
    .setTitle("Geometry Calculator")
    .setURL("https://www.desmos.com/geometry")
    .setColor("GREEN")
    message.channel.send({embeds : [geometry]});
}

module.exports.name = "geometry"
