const Music = require('discord.js-musicbot-addon');
const music = new Music(client, {
    prefix: "-", // Prefix for the commands.
    youtubeKey: 'AIzaSyApvbcgvYRGulf1I1Ffjfhr2K-S6TX0e9w',
    global: false,            // Non-server-specific queues.
    maxQueueSize: 50,        // Maximum queue size of 25.
    playCmd: 'p',        // Sets the name for the 'play' command.
    playAlts: ["play", 'paly'],
    volumeCmd: 'vol',     // Sets the name for the 'volume' command.
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
