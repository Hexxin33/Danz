__path = process.cwd()
const fs = require('fs');
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{
if (!q && q.split('&')[0] && q.split('&')[1]) return md.sendMessage(from, { image: { url: "https://i.ibb.co/Btr0bWb/Screenshot-2023-03-05-06-14-56-22-6012fa4d4ddec268fc5c7112cbb265e7.jpg"}, caption: "Masukkan query (Nomer & text)\n• Contoh !menfess 62xxx&Halo\n\n~> Berikan kode '&' untuk pembatas antara nomer dan text\n~> Nomer jangan di ber spasi, kode + atau -"},{quoted: md1}) 

var textMenfess = `[ *PESAN RAHASIA* ]
Halo @${q.split('&')[0]} 👋, 
Ada pesan rahasia nih!.

~> _${q.split('&')[1]}_`

md.sendMessage(q.split('&')[0] + "@s.whatsapp.net", {text: textMenfess, mentions: [q.split('&')[0] + "@s.whatsapp.net"]}, {quoted: md1})
md.sendMessage(from, {text: "Sukses mengirim pesan rahasia"}, {quoted: md1})
} catch (e) { console.log(e)
  md.sendMessage(from, {text: "Terjadi kesalahan pastikan mengikuti tutorial penggunaan yang benar"}, {quoted: md1})
}
} 
