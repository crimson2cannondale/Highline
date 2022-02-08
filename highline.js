const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  let highline = new Discord.MessageEmbed()
    .setTitle("Highline Website")
    .setURL("https://thenovaceo.wixsite.com/highlinecustoms")
    .setColor("#1e92b3")
    message.channel.send({embeds : [highline]});
}

module.exports.name = "highline"
