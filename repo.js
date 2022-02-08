const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  let repo = new Discord.MessageEmbed()
    .setTitle("Highline GitHub repo")
    .setURL("https://github.com/crimson2cannondale/Highline")
    .setColor("#1e92b3")
    message.channel.send({embeds : [repo]});
}

module.exports.name = "repo"
