let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝐿𝐼𝑆𝑇𝐴 𝐹𝐸𝑀🐻‍❄️: ${pesan}`
let teks = `╭┈┈ ๑❀๑ •• ${oi} ๑❀๑ ••:\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}🐻‍❄️`}
│
│         🐻‍❄️ 𝐀𝐝𝐫𝐢𝐞𝐥𝐁𝐨𝐭 🐻‍❄️
│        ₊˚︶︶︶︶︶︶︶︶˚ ‧₊
│
│      ෆ 𝘌𝘯𝘤𝘢𝘳𝘨𝘢𝘥𝘢:
│      ෆ 𝘏𝘰𝘳𝘢𝘳𝘪𐐫:
│         ‧₊⏱️ 20 🇵🇪 ⌇ 21 🇧🇴 ⌇ 22 🇦🇷      
│
│ㅤㅤʚ 𝙹𝚄𝙶𝙰𝙳𝙾𝚁𝙰𝚂❄️:
│ㅤ🐻‍❄️• 
│ㅤ🐻‍❄️• 
│ㅤ🐻‍❄️• 
│ㅤ🐻‍❄️•
│   ㅤㅤ
│ㅤㅤʚ 𝚂𝚄𝙿𝙻𝙴𝙽𝚃𝙴𝚂❄️:
│ㅤ🐻‍❄️•
│ㅤ🐻‍❄️•
│
│   ⊹ ִֶָ𝙳𝙾𝙽𝙰𝙳𝙾𝚁𝙰 𝙳𝙴 𝚂𝙰𝙻𝙰: 
│ㅤ
│. 🐻‍❄️•
╰───────────────๑❀๑ •`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsf20 <mesaje>','fem20 <mesaje>']
handler.tags = ['group']
handler.command = /^(smsf20|fem20)$/i
handler.admin = true
handler.group = true
export default handler