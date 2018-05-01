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
        if (message.content === "*inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`اضغط هنا `)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=440816418381103105&permissions=8&scope=bot`)
        .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
     message.channel.sendEmbed(embed);
       }
   });

client.on('message', message => {
    if (message.content === '*help') {
   var embed = new Discord.RichEmbed()
        .setTitle('تم ارسال جميع الاوامر على الخاص ,, :e_mail: ')
        .setColor('RED')
       message.channel.sendEmbed(embed)
    }
});

client.on('ready', function(){	
    var ms = 40000 ;	
    var setGame = ['*inv','*help'];	
    var i = -1;	
    var j = 0;	
    setInterval(function (){	
        if( i == -1 ){	
j = 1;	
       }	
        if( i == (setGame.length)-1 ){	
            j = -1;	
      }	
       i = i+j;	
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);	
}, ms);	
	
});

client.on('message', message => {
	var prefix ="*";
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
 
 -vol number <1-200> | لتغيير الصوت 

 -pause | ايقاف بشكل موقت

 -resume | تكميل القران 

 -loop | لاعادة القران بوحدها 

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
المرجو عدم تشغيل الموسيقى في هذا البوت
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
