const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  let alum = new Discord.MessageEmbed()
    .setTitle("Alum Website")
    .setURL("https://thenovaceo.wixsite.com/alumcomponents")
    .setColor("#1e92b3")
    message.channel.send({embeds : [alum]});
}

module.exports.name = "alum"
