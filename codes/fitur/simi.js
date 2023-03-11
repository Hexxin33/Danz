__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{ 

if (!q) return md.sendMessage(from, { text: "Masukkan text" },{quoted: md1})
var simi = await fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=id`)
md.sendMessage(from, { text: simi.success },{quoted: md1})

} catch (e) { console.log(e) }
} 
