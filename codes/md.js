__path = process.cwd()
const fs = require('fs');
const fetch = require('node-fetch');
const { set } = require(__path + '/setting/set.js')
const { fetchJson } = require(__path + '/codes/fetch.js')
module.exports = async (md, m) => {
const bot = m.messages[0]
try{
  const nama = set("nama")
  const namabot = set("namabot")
  const owner = set("owner")
  const reply = set("reply")
  const donasi = set("donasi")
  const type = Object.keys(m.messages[0].message)[0];
  const body = (type === 'conversation') ? bot.message.conversation : (type == 'imageMessage') ? bot.message.imageMessage.caption : (type == 'videoMessage') ? bot.message.videoMessage.caption : (type == 'extendedTextMessage') ? bot.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? bot.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? bot.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? bot.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (bot.message.buttonsResponseMessage?.selectedButtonId || bot.message.listResponseMessage?.singleSelectReply.selectedRowId || bot.text) : ''
  const budy = (type === 'conversation') ? bot.message.conversation : (type === 'extendedTextMessage') ? bot.message.extendedTextMessage.text : ''
  const prefix = /^[./~!#%^&=\,;:()z]/.test(body) ? body.match(/^[./~!#%^&=\,;:()z]/gi) : '#';
  const isCommand = body.startsWith(prefix);
  const command = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;
  const isGroup = bot.key.remoteJid.endsWith('@g.us');
  const from = bot.key.remoteJid;
  const sender = isGroup ? (bot.key.participant ? bot.key.participant : bot.participant) : bot.key.remoteJid;
  const content = JSON.stringify(bot.message);
  const args = body.trim().split(/ +/).slice(1);
  const q = args.join(" ");
  const pushname = bot.pushName;
  const md1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption": reply } } }       
  const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' );
  const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
  const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
  const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
  const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
  const respon = (a, b) => {
    md.sendMessage(from, {text: a, mentions:b}, {quoted: md1})
  }  
  async function shortUrl(url) {
	return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
  }  
switch (command) { 
  case command: 
    try {    
      require(__path + `/codes/fitur/${command}.js`)(md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio)       
    } catch(e) { 
      return
    }   
  break
  default:
  
} } catch (e) { return console.log(e) } }