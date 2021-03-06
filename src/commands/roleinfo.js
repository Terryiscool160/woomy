const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
  if (!args[0])
  return message.channel.send(
    `<:error:466995152976871434> You didn't provide me with a role name or ID! Usage: \`${client.commands.get(`roleinfo`).help.usage}\``
  );

  let role = client.findRole(args.join(" "), message);

  if (!role) {
    return message.channel.send(`<:error:466995152976871434> That role doesn't seem to exist. Try again!`);
  };

  if(!role) {
    return message.channel.send(`<:error:466995152976871434> Role not found.`)
  }

  if(role.hoist === true) {
    var hoist = `Yes`
  } else {
    var hoist = `No`
  }

  var embed = new Discord.MessageEmbed();
  embed.setColor(role.color)
  embed.setDescription(
    `• **Name:** ${role.name}\n• **ID:** ${role.id}\n• **Hex:** ${role.hexColor}\n• **Members:** ${role.members.size}\n• **Position:** ${role.position}\n• **Hoisted:** ${hoist}`
  );
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rinfo"],
  permLevel: "User",
  requiredPerms: []
};

exports.help = {
  name: "roleinfo",
  category: "Utility",
  description: "Gives information about a role.",
  usage: "roleinfo [role]"
};