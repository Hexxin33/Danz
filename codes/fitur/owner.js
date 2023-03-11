__path = process.cwd()
const fs = require('fs');
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{

md.sendMessage(from, {text: "Ini adalah owner dari bot ini"}, {quoted: md1})
var vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ `FN:${nama}\n` 
+ 'ORG:MessageType: Contacts;\n' 
+ `TEL;type=CELL;type=VOICE;waid=${owner}:+${owner}\n` 
+ 'END:VCARD'
md.sendMessage(from, { contacts: { displayName: 'Zizz', contacts: [{ vcard }] }})

} catch (e) { console.log(e) }
} 
