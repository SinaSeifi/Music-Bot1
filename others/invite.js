const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("If you like my robot, you can bring it to your server. Thank you for choosing us.")
      .setColor("#F0EAD6")
      .setAuthor('`ঐᴍʀ.ɴɪᴄᴏᴛɪɴᴇ','https://cdn.discordapp.com/attachments/778600026280558617/781024479623118878/ezgif.com-gif-maker_1.gif')
      .setThumbnail(message.guild.iconURL())
      .addField(`From the link below, you can bring my robot to your server`, 'https://discord.com/api/oauth2/authorize?client_id=885443578199932928&permissions=8&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};