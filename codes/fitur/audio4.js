__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try {
md.sendMessage(from, {audio: {url:"https://github.com/naylachan/AUDIO/blob/main/" + command + ".mp3?raw=true"}, mimetype: "audio/mp4", ptt: true},{quoted:md1})
} catch (e) { console.log(e) }
};