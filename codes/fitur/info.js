__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{  

var textInfo = `[ *${namabot}-INFO* ]
• *Nama* : ${nama}
• *namabot* : ${namabot}
• *owner* : @${owner}

*-* *Bot ini masih dalam tahap pengembangan*

© ${namabot} | by *${nama}* | 🇮🇩`

md.sendMessage(from, { text: textInfo, mentions: [owner + "@s.whatsapp.net"]}, {quoted: md1})
} catch (e) { console.log(e) }
} 
