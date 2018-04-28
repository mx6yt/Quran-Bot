const Music = require('discord.js-musicbot-addon');
const music = new Music(client, {
    prefix: "-", 
    youtubeKey: 'AIzaSyApvbcgvYRGulf1I1Ffjfhr2K-S6TX0e9w',
    global: false,           
    maxQueueSize: 50,        
    playCmd: 'p',        
    playAlts: ["play", 'paly'],
    volumeCmd: 'vol',     
    thumbnailType: 'high',
    leaveCmd: 'stop',      // Sets the name for the 'leave' command.
    anyoneCanSkip: true,
    disableLoop: false,
    searchCmd: 'search',
    requesterName: true,
    inlineEmbeds: true,     
    queueCmd: 'q',
    queueAlts: ['queue', 'queueue'],
    pauseCmd: 'pause',
    resumeCmd: 'resume',
    skipCmd: 's',
    skipAlts: ["skip", "skipp"],
    loopCmd: 'loop',
    enableQueueStat: true,
  });

client.login(process.env.BOT_TOKEN);
