const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By ESMAEL");


client.on("ready", () => {
let channel =     client.channels.get("502954490975223848")
setInterval(function() {
channel.send(`فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي `);
}, 25)
})







client.on("ready", () => {
    client.user.setPresence({
      status: 'dnd',
      game: { 
         type: 0,
         name: '!spam  ',
         details: `I'm : ♛ 『DE』 NovritschPro#6808`,
         url: 'http://twitch.tv/Streammingg',
         state: `اذا تريد بوت مثل ذا راسلني      ♛ 『DE』 NovritschPro#6808`,
        application_id: '281376075802476544',
         assets: {
            small_image: `366835431037337600`,
            small_text: ' Take This ! ' ,
            large_image: `370451271133429760`,
            large_text: `ҜṦẰ FOREVER ♥` }
    
      }
        });
    });
    
    






        var prefix = "$";
    client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "spam") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR**');


   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
