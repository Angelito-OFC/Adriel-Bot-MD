import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾',
body: '𝐀𝐝𝐫𝐢𝐞𝐥 𝐁𝐨𝐭 ✍',         
previewType: 0, thumbnail: fs.readFileSync("./views/Menu.jpg"),
sourceUrl: `https://github.com/GeralBot/prueba.git`}}})   
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.group = true
handler.botAdmin = true
handler.register = true
export default handler