__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{  
const { 
  downloadMediaMessage, 
  downloadContentFromMessage 
} = require('@adiwajshing/baileys');
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs')

if (isMedia || isQuotedImage) { 
  var stream = await downloadContentFromMessage(bot.message.imageMessage || bot.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
  var buffer = Buffer.from([])
  for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
  }
  fs.writeFileSync('./media/res_buffer.jpg', buffer)
  const image = './media/res_buffer.jpg'
  await ffmpeg(image).input(image).on('error', function (error) { 
    console.log(error) 
  }).on('end', function () {
    md.sendMessage(from, { sticker: {url: './media/mysticker.webp'}, mimetype: 'image/webp' })}).addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`]).toFormat('webp').save('./media/mysticker.webp')
} else 
if (isMedia || isQuotedVideo) { 
  var stream = await downloadContentFromMessage(bot.message.videoMessage || bot.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
  var buffer = Buffer.from([])
  for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
  }
  fs.writeFileSync('./media/res_buffer.mp4', buffer)
  const video = './media/res_buffer.mp4'
  await ffmpeg(video).input(video).on('error', function (error) {
    console.log("error") 
  }).on('end', function () {
    md.sendMessage(from, { sticker: {url: './media/mysticker2.webp' }, mimetype: 'image/webp' })
  }).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"]).toFormat('webp').save('./media/mysticker2.webp')
} else {
  md.sendMessage(from, {image: { url: "https://i.ibb.co/871JW0s/Screenshot-2023-02-10-15-00-38-72-6012fa4d4ddec268fc5c7112cbb265e7.jpg" }, caption: "Kirim media image/video, Lalu reply dan gunakan command !sticker"}, {quoted: md1})
}
} catch (e) { console.log(e) }
} 
