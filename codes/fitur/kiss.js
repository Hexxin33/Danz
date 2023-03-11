__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try {

await md.sendMessage(from, {text: "Permintaan sedang di proses, tunggu sebentar, ini akan membutuhkan waktu sedikit lama!"},{ quoted: md1})
var sfw = await fetchJson(`https://api.waifu.pics/sfw/${command}`)

if (sfw.url.includes(".gif")){
  return md.sendMessage(from, {video: {url: sfw.url }, mimetype: 'video/mp4', gifAttribution: 0, gifPlayback: true, caption: "Selesai, reply pesan ini lalu jadikan sticker"},{ quoted: md1})
} else if (!sfw.url.includes(".gif")){
  return md.sendMessage(from, {image: {url: sfw.url }, caption: "Selesai"},{ quoted: md1})
}

} catch(e) { console.log(e) }
} 
