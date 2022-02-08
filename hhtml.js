const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  let highlinehtml = new Discord.MessageEmbed()
    .setTitle("Highline HTML")
    .setURL("https://codepen.io/memelord1120/pen/QWbrjYQ?editors=1100")
    .setColor("#1e92b3")
    message.channel.send({embeds : [highlinehtml]});
}

module.exports.name = "hhtml"
