const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client(); 
const music = new Music(client, {
    prefix: "*", 
    youtubeKey: 'AIzaSyApvbcgvYRGulf1I1Ffjfhr2K-S6TX0e9w',
    global: false,
    maxQueueSize: 50,        // Maximum queue size of 25.
    playCmd: 'play',        // Sets the name for the 'play' command.
    playAlts: ["play", 'paly'],
    volumeCmd: 'vol',     // Sets the name for the 'volume' command.
    thumbnailType: 'high',
    leaveCmd: 'leave',      // Sets the name for the 'leave' command.
    anyoneCanSkip: true,
    disableLoop: false,
    searchCmd: 'search',
    requesterName: true,
    inlineEmbeds: true,     
    queueCmd: 'queue',
    queueAlts: ['queue', 'queueue'],
    pauseCmd: 'pause',
    resumeCmd: 'resume',
    skipCmd: 'skip',
    skipAlts: ["skip", "skipp"],
    loopCmd: 'loop',
    enableQueueStat: true,
  });

client.on('message', message => {
	var prefix ="-";
if (message.content.startsWith(prefix + 'help')) {
  var embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
        **اوامر تشغيل القران**  

-play <name> | لتشغيل القران

-leave | لتوقيف القران وخروج البوت من الرووم 

-skip | لتخطي القران
 
 -vol <number> | لتغيير الصوت 

 -pause | ايقاف بشكل موقت

 -resume | تكميل القران 

 -loop | لاعادة القران بوحدها 

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
`)
  message.author.sendEmbed(embed)

}
});

client.on('ready', () => {
	console.log('I am ready!'); 
  })
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
