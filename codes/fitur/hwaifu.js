__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try {

await md.sendMessage(from, {text: "Permintaan sedang di proses, tunggu sebentar, ini akan membutuhkan waktu sedikit lama!"},{ quoted: md1})
var nsfw = await fetchJson(`https://api.waifu.pics/nsfw/waifu`)
return md.sendMessage(from, {image: {url: nsfw.url }, caption: "Selesai"},{ quoted: md1})


} catch(e) { console.log(e) }
} 
