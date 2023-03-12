__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, respon, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{  
const groupMetadata = isGroup ? await md.groupMetadata(from) : '';
const uwong = isGroup ? await groupMetadata.participants : '';
const groupAdmins = isGroup ? await uwong.filter(v => v.admin !== null).map(a => a.id) : '';
const isBotGroupAdmins = groupAdmins.includes(md.user.id.split(':')[0] + '@s.whatsapp.net') || false;
const isGroupAdmins = groupAdmins.includes(sender) || false;

if (!isGroup) return md.sendMessage(from, {text: "Tidak dapat melakukan perintah ini, karena perintah ini hanya bisa di lakukan di dalam group"},{quoted: md1 })
if (!isBotGroupAdmins) return md.sendMessage(from, {text: "Tidak dapat melakukan perintah ini, karena bot bukan admin!"},{quoted: md1 })
if (!isGroupAdmins) return md.sendMessage(from, {text: "Tidak dapat melakukan perintah ini, karena kamu bukan admin!"},{quoted: md1 })
 
await md.groupSettingUpdate(from, 'announcement')

md.sendMessage(from, {text: "Sukses"},{quoted: md1 })
} catch(e) {
md.sendMessage(from, {text: "Terjadi kesalahan, mungkin text deskripsi kosong/terlalu panjang"},{quoted: md1 }) }
} 
