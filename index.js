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
    
    