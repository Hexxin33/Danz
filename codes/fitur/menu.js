__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{  // Untuk tampilan/text pada menu bisa kalian gandi di volder setting > textMenu.js
var { textMenu } = require(__path + '/setting/textMenu.js')
md.sendMessage(from, { text: textMenu(sender, nama, namabot), mentions: [sender]}, {quoted: md1})
} catch (e) { console.log(e) }
} 
