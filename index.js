__path = process.cwd()
const {default: makeWAmdet, DisconnectReason, useSingleFileAuthState } = require('@adiwajshing/baileys');
const { Boom } = require('@hapi/boom');
const logg = require('pino')
const fs = require("fs");
const { state, saveState } = useSingleFileAuthState('./session.json')

async function connectToWhatsApp () { 
  const md = makeWAmdet({
    printQRInTerminal: true,
    logger: logg({ level: 'fatal' }),
    auth: state,
    browser: ["MD-BASE", "BOT", "3.0"]
  })
  md.ev.on('group-participants.update', async ({id, participants, action}) => {

try{

var dbWelcome = JSON.parse(fs.readFileSync(__path + '/setting/welcome.json'));

if (!dbWelcome.includes(id)) return

if (action == "add"){

var addText = `Halo @${participants[0].split("@")[0]}, Selamat datang!`

md.sendMessage(id, {image: {url: "https://www.linkpicture.com/q/20230304_064711.jpg"}, caption: addText, mentions: participants})

}

if (action == "remove"){

var removeText = `Dahhh @${participants[0].split("@")[0]}, Selamat tinggal!`

md.sendMessage(id, {image: {url: "https://www.linkpicture.com/q/20230304_064727.jpg"}, caption: removeText, mentions: participants})

}

} catch(e){

console.log(e)

}

})
md.ev.on('connection.update', (update) => {
  const { connection, lastDisconnect } = update
  if(connection === 'close') {
    connectToWhatsApp()
  } else if(connection === 'open') {
    console.log('[ INFO ] Berhasil connect di whatsapp web')
  } 
})
md.ev.on('messages.upsert', m => {
  require('./codes/md.js')(md, m)       
})
}
function nocache(module, cb = () => { }) {
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module))
    cb(module)
  })
}
    
function uncache(module = '.') {
  return new Promise((resolve, reject) => {
  try {
    delete require.cache[require.resolve(module)]
    resolve()
  } catch (e) {
    reject(e)
  }
  })
}  
fs.readdir(__path + '/codes/fitur',  (err, files) => {
Object.keys(files).forEach((a) => { 
require(__path + '/codes/fitur/' + files[a])
nocache(__path + '/codes/fitur/' + files[a], module => console.log("[ INFO ] Path " + files[a] + " mengalami perubahan"))
})
})
require('./codes/md.js')
nocache('./codes/md.js', module => console.log("[ INFO ] Path md.js mengalami perubahan"))


connectToWhatsApp()   
.catch(err => console.log(err))
    
    
