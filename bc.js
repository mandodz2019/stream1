const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Darks`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By :Darks  ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`بيع حساب سبوتيفي=10 الف كريدت`,"http://twitch.tv")
client.user.setStatus("dnd")
});



client.login("NTQ2Mzc0MDY4MzQ2MTU5MTA0.D1WhYA.BzOUqU_H9Qm5rt2oDtK7JFzq1ew");