const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  if(message.author.id !== "349616310734553088") return;
  const prefix = "-";
  const args = message.content.split(" ").slice(1);

  if (message.content.startsWith(prefix + "eval")) {
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;
}

client.on("message", message => {
    var prefix = "-";
  let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + 'report')) {
      let user = message.mentions.users.first();
      let reason = args.slice(1).join(' ');
      let modlog = client.channels.find('name', 'report');
      if (!reason) return message.reply('**ضع سبباً مقنعاً**');
        if (message.mentions.users.size < 1) return message.reply('**يجب عليك عمل منشن للعضو المراد الابلاغ عليه**').catch(console.error);

  if (!modlog) return message.reply('**لا يوجد روم بأسم report**');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('نوع الرسالة:', 'Report')
    .addField('المراد الابلاغ عليه:', `${user.username}#${user.discriminator} (${user.id}`)
    .addField('صاحب الابلاغ:', `${message.author.username}#${message.author.discriminator}`)
    .addField('السبب', reason);
    message.delete()
    return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
