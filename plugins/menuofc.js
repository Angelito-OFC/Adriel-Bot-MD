import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = imagen2
//let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(global.img)).buffer(), sourceUrl: redesMenu.getRandom() }}}


let menu = `*╭━━❍𝐀𝐃𝐑𝐈𝐄𝐋-𝐁𝐎𝐓❍━━╮*
*┃ ╭━━━━━━━━━━━━━━━━╮*
*┃ ┃ ╭┈────────────╮*
*┃ ┃ │❍  𝐌𝐄𝐍𝐔 ❍*
*┃ ┃ ╰┈────────────╯*
*┃ ╰━━━━━━━━━━━━━━━━╯*
*┣━━━▢ ❤𝐇𝐎𝐋𝐀, ${username}❤*
*┃╭━━━━━━━━━━━━━━━━╾•* 
*┃┃  ❍ ${ucapan()} ❍* 
*┃┣━━━━━━━━━━━━━━━━╾•* 
*┃┃ ⋄ NUMERO DEL CREADOR: wa.me/59176181985 (𝐍𝐎 𝐁𝐎𝐓)* 
*┃┃ ⋄ VERSION » {1.1.0}* 
*┃┃ ⋄ FECHA » ${week}, ${date}* 
*┃┃ ⋄ TIEMPO ACTIVO » ${uptime}* 
*┃┃ ⋄ LIBRERIA » ${library}* 
*┃╰━━━━━━━━━━━━━━━━╾•* 
*┃┃ ⋄ *🎖️ Nivel:* ${level}
*┃┃ ⋄ *💎 Diamantes:* ${limit}
*┃┃ ⋄ *👾 AdriCoins:* ${money}
*┃┃ ⋄ *🪙 Tokens:* ${joincount}
*┃┃ ⋄ *🧰 Experiencia:* ${exp}
*┃┃ ⋄ *⚓ Rango:* ${role}
*┃┃ ⋄ ${readMore}
*┃╰━━━━━━━━━━━━━━━━╾•*
*╰━━━╼𝐀𝐝𝐫𝐢𝐞𝐥 𝐁𝐨𝐭╾━━━╯*

╭━〔🛍️𝙋𝘼𝙍𝘼 𝘾𝙊𝙈𝙋𝙍𝘼𝙍🛍️〕━⬣
│☭ .precios*
│☭ .adrielinfo
│☭ .adrielprecios
╰━━━━━━━━━━━━━━━━╾•

╭━〔🎈𝙄𝙉𝙁𝙊 𝘿𝙀𝙇 𝘽𝙊𝙏🎈〕━⬣*
│☭ _${usedPrefix}infobot_
│☭ _${usedPrefix}grupos_
│☭ _${usedPrefix}instalarbot_
│☭ _${usedPrefix}menu2_
│☭ _${usedPrefix}estado_
│☭ _${usedPrefix}sc_
│☭ _${usedPrefix}ping_
│☭ _Bot_
│☭ _¿Qué es un Bot?_
│☭ _Términos y condiciones_
└─────────────

┌───⊷ *UNER UN BOT A TU GRUPO*
┆ 🤖 _${usedPrefix}join *link del grupo*_ 
┆ 🤖 _${usedPrefix}botemporal *link de grupo*_
└─────────────

┌───⊷ *SERBOT & JADIBOT*
┆ 🤖 _${usedPrefix}serbot_
┆ 🤖 _${usedPrefix}stop_
┆ 🤖 _${usedPrefix}bots_
└─────────────

╭━〔🗺️𝙈𝘼𝙋𝘼𝙎 𝙑𝙎🗺️〕━⬣
│☭ _fem00_ 🌸
│☭ _fem14_ 🌸
│☭ _fem16_ 🌸
│☭ _fem18_ 🌸
│☭ _fem19_ 🌸
│☭ _fem20_ 🌸
│☭ _fem21_ 🌸
│☭ _fem22_ 🌸
│☭ _fem23_ 🌸
│☭ _femtodas_ 🌸
│☭ _masc00_ 🐼
│☭ _masc14_ 🐼
│☭ _masc16_ 🐼
│☭ _masc18_ 🐼
│☭ _masc19_ 🐼
│☭ _masc20_ 🐼
│☭ _masc21_ 🐼
│☭ _masc22_ 🐼
│☭ _masc23_ 🐼
│☭ _masctodos_ 🐼
│☭ _mapa8vs8_ 🐼
│☭ _mapa12vs12_ 🐼
│☭ _mapa16vs16_ 🐼
╰─────────────────╯

╭━〔🎮𝙅𝙐𝙀𝙂𝙊𝙎🎮〕━⬣
│☭ 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚙𝚊𝚛𝚊 𝚕𝚊 𝚍𝚒𝚟𝚎𝚛𝚜𝚒ó𝚗 𝚍𝚎𝚕 𝚝𝚞 𝙶𝚛𝚞𝚙𝚘𝚜
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭🎮 _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
│☭🎮 _${usedPrefix}ppt *<papel / tijera /piedra>*_
│☭️🎮 _${usedPrefix}prostituto *<nombre / @tag>*_
│☭🎮 _${usedPrefix}prostituta *<nombre / @tag>*_
│☭🎮 _${usedPrefix}gay2 *<nombre / @tag>*_
│☭🎮 _${usedPrefix}lesbiana *<nombre / @tag>*_
│☭🎮 _${usedPrefix}pajero *<nombre / @tag>*_
│☭🎮 _${usedPrefix}pajera *<nombre / @tag>*_
│☭🎮 _${usedPrefix}puto *<nombre / @tag>*_
│☭🎮 _${usedPrefix}puta *<nombre / @tag>*_
│☭🎮 _${usedPrefix}manco *<nombre / @tag>*_
│☭🎮 _${usedPrefix}manca *<nombre / @tag>*_
│☭🎮 _${usedPrefix}rata *<nombre / @tag>*_
│☭🎮 _${usedPrefix}love *<nombre / @tag>*_
│☭🎮 _${usedPrefix}doxear *<nombre / @tag>*_
│☭🎮 _${usedPrefix}pregunta *<texto>*_
│☭🎮 _${usedPrefix}suitpvp *<@tag>*_
│☭🎮 _${usedPrefix}slot *<apuesta>*_
│☭🎮 _${usedPrefix}ttt *<nombre sala>*_
│☭🎮 _${usedPrefix}delttt_
│☭🎮 _${usedPrefix}simi *<texto>*_
│☭🎮 _${usedPrefix}top *<texto>*_
│☭🎮 _${usedPrefix}topotakus_
│☭🎮 _${usedPrefix}top10gays_
│☭🎮 _${usedPrefix}toplind@s_
│☭🎮 _${usedPrefix}topput@s_
│☭🎮 _${usedPrefix}toppajer@s_
│☭🎮 _${usedPrefix}topotakus_
│☭🎮 _${usedPrefix}topintegrantes_
│☭🎮 _${usedPrefix}toplagrasa_
│☭🎮 _${usedPrefix}toppanafrescos_
│☭🎮 _${usedPrefix}topshiposters_
│☭🎮 _${usedPrefix}toppajeros_
│☭🎮 _${usedPrefix}toplind@s_
│☭🎮 _${usedPrefix}topfamosos_
│☭🎮 _${usedPrefix}topsoltero
│☭🎮 _${usedPrefix}topparejas_
│☭🎮 _${usedPrefix}formarpareja_
│☭🎮 _${usedPrefix}verdad_
│☭🎮 _${usedPrefix}reto_
│☭🎮 _${usedPrefix}cancion_
│☭🎮 _${usedPrefix}pista_
╰─────────────────╯
╭━〔💞𝙋𝘼𝙍𝙀𝙅𝘼𝙎💞〕━⬣
│𝙳𝚎𝚌𝚕𝚊𝚛𝚊𝚝𝚎 𝚌𝚘𝚗 𝚊𝚕𝚐𝚞𝚒𝚎𝚗 
│𝚙𝚊𝚛𝚊 𝚚𝚞𝚎 𝚜𝚎𝚊𝚗 𝙿𝚊𝚛𝚎𝚓𝚊𝚜!!
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭💞 _${usedPrefix}listaparejas_
│☭💞 _${usedPrefix}mipareja_
│☭💞 _${usedPrefix}pareja *@tag*_
│☭💞 _${usedPrefix}aceptar *@tag*_
│☭💞 _${usedPrefix}rechazar *@tag*_
│☭💞 _${usedPrefix}terminar *@tag*_
╰─────────────────╯

╭━〔✅𝘼𝘾𝙏𝙄𝙑𝘼 𝙊 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍❎〕━⬣
│☭𝙲𝚘𝚗𝚏𝚒𝚐𝚞𝚛𝚊 𝚜𝚒 𝚎𝚛𝚎𝚜 
│☭𝙿𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒𝚘(𝚊)𝚘 𝙰𝚍𝚖𝚒𝚗!!
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭✅ */enable welcome*
│☭❎ */disable welcome*
│☭✅ */enable public*
│☭❎ */disable public*
│☭✅ */enable restrict*
│☭❎ */disable restrict*
│☭✅ */enable pconly*
│☭❎ */disable pconly*
│☭✅ */enable anticall*
│☭❎ */disable anticall*
│☭✅ */enable simsimi*
│☭❎ */disable simsimi*
│☭✅ */enable modohorny*
│☭❎ */disable modohorny*
│☭✅ */enable antilink*
│☭❎ */disable antilink*
│☭✅ */enable antilink2*
│☭❎ */disable antilink2*
│☭✅ */enable detect*
│☭❎ */disable detect*
│☭✅ */enable detect2*
│☭❎ */disable detect2*
│☭✅ */enable autosticker*
│☭❎ */disable autosticker*
│☭✅ */enable antiviewonce*
│☭❎ */disable antiviewonce*
│☭✅ */enable antitoxic*
│☭❎ */disable antitoxic*
│☭✅ */enable antitraba*
│☭❎ */disable antitraba*
│☭✅ */enable antiarabes*
│☭❎ */disable antiarabes*
│☭✅ */enable modoadmin*
│☭❎ */disable modoadmin*
╰─────────────────╯

╭━〔⚠️𝙍𝙀𝙋𝙊𝙍𝙏𝘼 𝙀𝙍𝙍𝙊𝙍𝙀𝙎⚠️〕━⬣
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│𝚁𝚎𝚙𝚘𝚛𝚝𝚊 𝚌𝚞𝚊𝚕𝚚𝚞𝚒𝚎𝚛 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 
│𝚚𝚞𝚎 𝚏𝚊𝚕𝚕𝚎 𝚙𝚊𝚛𝚊 𝚙𝚘𝚍𝚎𝚛 𝚜𝚘𝚕𝚞𝚌𝚒𝚘𝚗𝚊𝚛𝚕𝚘
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭⚠️ _${usedPrefix}reporte *<texto>*_
└─────────────

╭━〔🎫𝙎𝙀𝙍 𝙋𝙍𝙀𝙈𝙄𝙐𝙈🎫〕━⬣
│𝙲𝚘𝚗𝚟𝚒𝚎𝚛𝚝𝚎 𝚎𝚗 𝚞𝚗(𝚊)
│ 𝚄𝚜𝚞𝚊𝚛𝚒𝚘(𝚊) 𝙿𝚛𝚎𝚖𝚒𝚞𝚖!!
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭🎫 _${usedPrefix}listapremium_
│☭🎫 _${usedPrefix}pase premium_
│☭🎫 _${usedPrefix}pass premium_
╰─────────────────╯

╭━〔📥𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎📥〕━⬣
│☭📥 _${usedPrefix}play *<texto>*_
│☭📥 _${usedPrefix}play.1 *<texto>*_
│☭📥 _${usedPrefix}play.2 *<texto>*_
│☭📥 _${usedPrefix}playdoc *<texto>*_
│☭📥 _${usedPrefix}playlist *<texto>*_
│☭📥 _${usedPrefix}playlist2 *<texto>*_
│☭📥 _${usedPrefix}spotify *<texto>*_
│☭📥 _${usedPrefix}tiktok *<enlace / link / url>*_
│☭📥 _${usedPrefix}instagram *<enlace / link / url>*_
│☭📥 _${usedPrefix}mediafire *<enlace / link / url>*_
│☭📥 _${usedPrefix}instagram *<enlace / link / url>*_
│☭📥 _${usedPrefix}gitclone *<enlace / link / url>*_
│☭📥 _${usedPrefix}gdrive *<enlace / link / url>*_
│☭📥 _${usedPrefix}xnxxdl *<enlace / link / url>*_
│☭📥 _${usedPrefix}xvideosdl *<enlace / link / url>*_
│☭📥 _${usedPrefix}twitter *<enlace / link / url>*_
│☭📥 _${usedPrefix}fb *<enlace / link / url>*_
│☭📥 _${usedPrefix}fb2 *<enlace / link / url>*_
│☭📥 _${usedPrefix}fb3 *<enlace / link / url>*_
│☭📥 _${usedPrefix}fb4 *<enlace / link / url>*_
│☭📥 _${usedPrefix}fb5 *<enlace / link / url>*_
│☭📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
│☭📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
│☭📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
│☭📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
│☭📥 _${usedPrefix}stickerpack *<enlace / link / url>*_
│☭📥 _${usedPrefix}stickerly *<texto>*_
│☭📥 _${usedPrefix}ringtone *<texto>*_
│☭📥 _${usedPrefix}soundcloud *<texto>*_
│☭📥 _${usedPrefix}imagen *<texto>*_
│☭📥 _${usedPrefix}pinteret *<texto>*_
│☭📥 _${usedPrefix}wallpaper *<texto>*_
│☭📥 _${usedPrefix}wallpaper2 *<texto>*_
│☭📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
│☭📥 _${usedPrefix}igstalk *<nombre de usuario>*_
│☭📥 _${usedPrefix}igstory *<nombre de usuario>*_
│☭📥 _${usedPrefix}tiktokstalk *<username>*_
╰─────────────────────╯

╭━〔💎𝙂𝙍𝙐𝙋𝙊𝙎💎〕━⬣
│☭𝙼𝚎𝚓𝚘𝚛𝚊 𝚝ú 𝙶𝚛𝚞𝚙𝚘 𝚌𝚘𝚗 𝙰𝚍𝚛𝚒𝚎𝚕𝙱𝚘𝚝
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭💎 _${usedPrefix}add *<numero>*_
│☭💎 _${usedPrefix}kick *<@tag>*_
│☭💎 _${usedPrefix}grupo *<abrir / cerrar>*_
│☭💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
│☭💎 _${usedPrefix}promote *<@tag>*_
│☭💎 _${usedPrefix}demote *<@tag>*_
│☭💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
│☭💎 _${usedPrefix}demote *<@tag>*_
│☭💎 _${usedPrefix}infogroup_
│☭💎 _${usedPrefix}resetlink_
│☭💎 _${usedPrefix}link_
│☭💎 _${usedPrefix}setname *<texto>*_
│☭💎 _${usedPrefix}setdesc *<texto>*_
│☭💎 _${usedPrefix}invocar *<texto>*_
│☭💎 _${usedPrefix}setwelcome *<texto>*_
│☭💎 _${usedPrefix}setbye *<texto>*_
│☭💎 _${usedPrefix}hidetag *<texto>*_
│☭💎 _${usedPrefix}warn *<@tag>*_
│☭💎 _${usedPrefix}unwarn *<@tag>*_
│☭💎 _${usedPrefix}listwarn_
│☭💎 _${usedPrefix}fantasmas_
│☭💎 _${usedPrefix}destraba_
│☭💎 _${usedPrefix}setpp *<imagen>*_
╰─────────────────╯

╭━〔🧧𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍𝙀𝙎🧧〕━⬣
│☭𝙲𝚘𝚗𝚟𝚒𝚎𝚛𝚝𝚎 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚎𝚗 𝚒𝚖𝚊𝚐𝚎𝚗!!
│☭𝙲𝚛𝚎𝚊 𝚎𝚗𝚕𝚊𝚌𝚎 𝚍𝚎 𝚊𝚛𝚌𝚑𝚒𝚟𝚘𝚜!!*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭🧧 _${usedPrefix}togifaud *<video>*_
│☭🧧 _${usedPrefix}robar *texto*
│☭🧧 _${usedPrefix}wm *texto*
│☭🧧 _${usedPrefix}toimg *<sticker>*_
│☭🧧 _${usedPrefix}tomp3 *<video>*_
│☭🧧 _${usedPrefix}tomp3 *<nota de voz>*_
│☭🧧 _${usedPrefix}toptt *<video / audio>*_
│☭🧧 _${usedPrefix}tovideo *<sticker>*_
│☭🧧 _${usedPrefix}tourl *<video / imagen / audio>*_
│☭🧧 _${usedPrefix}tts es *<texto>*_
╰─────────────────╯

╭━〔✍️𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝙔 𝙇𝙊𝙂𝙊𝙎✍️〕━⬣
│☭ 𝙲𝚛𝚎𝚊 𝙻𝚘𝚐𝚘𝚜 𝚘 𝚙𝚎𝚛𝚜𝚘𝚗𝚊𝚕𝚒𝚣𝚊 
│☭ 𝚕𝚊 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚌𝚒ó𝚗 𝚍𝚎𝚕 𝙻𝚘𝚐𝚘!!
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭🖍️ _${usedPrefix}mensajefalso *<nombre|mensaje>*_
│☭🖍️ _${usedPrefix}phmaker *<opcion> <imagen>*_
│☭🖍️ _${usedPrefix}logos *<efecto> <texto>*_
│☭🖍️ _${usedPrefix}logochristmas *<texto>*_
│☭🖍️ _${usedPrefix}logocorazon *<texto>*_
│☭🖍️ _${usedPrefix}ytcomment *<texto>*_
│☭🖍️ _${usedPrefix}hornycard *<@tag>*_
│☭🖍️ _${usedPrefix}simpcard *<@tag>*_
│☭🖍️ _${usedPrefix}lolice *<@tag>*_
│☭🖍️ _${usedPrefix}itssostupid_
│☭🖍️ _${usedPrefix}pixelar_
│☭🖍️ _${usedPrefix}blur_
╰─────────────────╯

╭━〔🌺𝙁𝙍𝘼𝙎𝙀𝙎 𝙔 𝙏𝙀𝙓𝙏𝙊𝙎🌺〕━⬣
│☭𝙴𝚗𝚊𝚖𝚘𝚛𝚊 𝚊 𝚝𝚞 𝚎𝚗𝚊𝚖𝚘𝚛𝚊𝚍𝚊/𝚘 
│☭𝚌𝚘𝚗 𝚎𝚜𝚝𝚊 𝚏𝚛𝚊𝚜𝚎𝚜/𝚙𝚒𝚛𝚘𝚙𝚘 𝚞𝚠𝚞
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭🌺 _${usedPrefix}piropo_
│☭🌺 _${usedPrefix}consejo_
│☭🌺 _${usedPrefix}fraseromantica_
╰─────────────────╯

╭━〔👾𝙍𝘼𝙉𝘿𝙊𝙈👾〕━⬣
│☭👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
│☭👾 _${usedPrefix}cristianoronaldo_
│☭👾 _${usedPrefix}messi_
│☭👾 _${usedPrefix}meme_
│☭👾 _${usedPrefix}itzy_
│☭👾 _${usedPrefix}blackpink_
│☭👾 _${usedPrefix}lolivid_
│☭👾 _${usedPrefix}loli_
│☭👾 _${usedPrefix}navidad_
│☭👾 _${usedPrefix}ppcouple_
│☭👾 _${usedPrefix}wpmontaña_
│☭👾 _${usedPrefix}pubg_
│☭👾 _${usedPrefix}wpgaming_
│☭👾 _${usedPrefix}wpaesthetic_
│☭👾 _${usedPrefix}wpaesthetic2_
│☭👾 _${usedPrefix}wprandom_
│☭👾 _${usedPrefix}wallhp_
│☭👾 _${usedPrefix}wpvehiculo_
│☭👾 _${usedPrefix}wpmoto_
│☭👾 _${usedPrefix}coffee_
│☭👾 _${usedPrefix}pentol_
│☭👾 _${usedPrefix}caricatura_
│☭👾 _${usedPrefix}ciberespacio_
│☭👾 _${usedPrefix}technology_
│☭👾 _${usedPrefix}doraemon_
│☭👾 _${usedPrefix}hacker_
│☭👾 _${usedPrefix}planeta_
│☭👾 _${usedPrefix}randomprofile_
│☭👾 _${usedPrefix}neko_
│☭👾 _${usedPrefix}waifu_
│☭👾 _${usedPrefix}akira_
│☭👾 _${usedPrefix}akiyama_
│☭👾 _${usedPrefix}anna_
│☭👾 _${usedPrefix}asuna_
│☭👾 _${usedPrefix}ayuzawa_
│☭👾 _${usedPrefix}boruto_
│☭👾 _${usedPrefix}chiho_
│☭👾 _${usedPrefix}chitoge_
│☭👾 _${usedPrefix}deidara_
│☭👾 _${usedPrefix}erza_
│☭👾 _${usedPrefix}elaina_
│☭👾 _${usedPrefix}eba_
│☭👾 _${usedPrefix}emilia_
│☭👾 _${usedPrefix}hestia_
│☭👾 _${usedPrefix}hinata_
│☭👾 _${usedPrefix}inori_
│☭👾 _${usedPrefix}isuzu_
│☭👾 _${usedPrefix}itachi_
│☭👾 _${usedPrefix}itori_
│☭👾 _${usedPrefix}kaga_
│☭👾 _${usedPrefix}kagura_
│☭👾 _${usedPrefix}kaori_
│☭👾 _${usedPrefix}keneki_
│☭👾 _${usedPrefix}kotori_
│☭👾 _${usedPrefix}kurumi_
│☭👾 _${usedPrefix}madara_
│☭👾 _${usedPrefix}mikasa_
│☭👾 _${usedPrefix}miku_
│☭👾 _${usedPrefix}minato_
│☭👾 _${usedPrefix}naruto_
│☭👾 _${usedPrefix}nezuko_
│☭👾 _${usedPrefix}sagiri_
│☭👾 _${usedPrefix}sasuke_
│☭👾 _${usedPrefix}sakura_
│☭👾 _${usedPrefix}cosplay_
╰─────────────────╯

╭━〔🔞𝘾𝙊𝙈𝘼𝙉𝘿𝙊🔞〕━⬣
│☭𝚄𝚜𝚊𝚛 𝚋𝚊𝚓𝚘 𝚜𝚞 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚊𝚋𝚒𝚕𝚒𝚍𝚊𝚍* 
│☭𝙽𝚘𝚝𝚊: 𝚗𝚘 𝚜𝚎𝚊 𝚙𝚊𝚓𝚎𝚛𝚘
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭🔞 _${usedPrefix}hornymenu_
╰─────────────────╯

*╭━〔🎤𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎🎤〕━⬣
┌───⊷ **
│☭𝚁𝚎𝚊𝚕𝚒𝚣𝚊 𝙼𝚘𝚍𝚒𝚏𝚒𝚌𝚊𝚌𝚒𝚘𝚗𝚎𝚜 
│☭𝚊𝚕 𝙰𝚞𝚍𝚒𝚘 𝚘 𝙽𝚘𝚝𝚊 𝚍𝚎 𝚅𝚘𝚣!!
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭🎤 _${usedPrefix}audioefectomenu_
╰─────────────────╯

╭━〔🔊𝘼𝙐𝘿𝙄𝙊𝙎🔊〕━⬣
│☭𝚅𝚒𝚜𝚒𝚝𝚊 𝚎𝚕 𝙼𝚎𝚗ú 𝚍𝚎 𝙰𝚞𝚍𝚒𝚘𝚜!!
│☭𝙳𝚒𝚜𝚏𝚛𝚞𝚝𝚊 𝚍𝚎 𝚞𝚗𝚊 𝙶𝚛𝚊𝚗 𝚅𝚊𝚛𝚒𝚎𝚍𝚊𝚍
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭🔊 _${usedPrefix}menu2_
│☭🔊 _${usedPrefix}audios_
╰─────────────────╯

╭━〔📳𝘾𝙃𝘼𝙏𝙎 𝘼𝙉𝙊𝙉𝙄𝙈𝙊📳〕━⬣
│☭¡𝙴𝚜𝚌𝚛𝚒𝚋𝚎 𝚌𝚘𝚗 𝙰𝚕𝚐𝚞𝚒𝚎𝚗
│☭𝚍𝚎 𝚏𝚘𝚛𝚖𝚊 𝙰𝚗ó𝚗𝚒𝚖𝚊!
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭📳 _${usedPrefix}start_
│☭📳 _${usedPrefix}next_
│☭📳 _${usedPrefix}leave_
╰─────────────────╯

╭━〔🔍𝘽𝙐𝙎𝘾𝘼𝘿𝙊𝙍𝙀𝙎🔍〕━⬣
│☭𝙱𝚞𝚜𝚌𝚊 𝚕𝚘 𝚚𝚞𝚎 𝚚𝚞𝚒𝚎𝚛𝚎𝚜 𝚌𝚘𝚗 𝚎𝚕 𝙱𝚘𝚝!!
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭🔍 _${usedPrefix}stickersearch *<texto>*_
│☭🔍 _${usedPrefix}stickersearch2 *<texto>*_
│☭🔍 _${usedPrefix}xnxxsearch *<texto>*_
│☭🔍 _${usedPrefix}animeinfo *<texto>*_
│☭🔍 _${usedPrefix}google *<texto>*_
│☭🔍 _${usedPrefix}letra *<texto>*_
│☭🔍 _${usedPrefix}wikipedia *<texto>*_
│☭🔍 _${usedPrefix}ytsearch *<texto>*_
│☭🔍 _${usedPrefix}apkdone *<texto>*_
│☭🔍 _${usedPrefix}apkgoogle *<texto>*_
│☭🔍 _${usedPrefix}apkmody *<texto>*_
│☭🔍 _${usedPrefix}apkshub *<texto>*_
│☭🔍 _${usedPrefix}happymod *<texto>*_
│☭🔍 _${usedPrefix}hostapk *<texto>*_
│☭🔍 _${usedPrefix}revdl *<texto>*_
│☭🔍 _${usedPrefix}toraccino *<texto>*_
│☭🔍 _${usedPrefix}uapkpro *<texto>*_
│☭🔍 _${usedPrefix}playstore *<texto>*_
╰─────────────────╯

╭━〔⚙️𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎⚙️〕━⬣
│☭🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
│☭🛠️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
│☭🛠️ _${usedPrefix}clima *<país> <ciudad>*_
│☭🛠️ _${usedPrefix}encuesta *<texto1|texto2...>*_
│☭🛠️ _${usedPrefix}afk *<motivo>*_
│☭🛠️ _${usedPrefix}ocr *<responde a imagen>*_
│☭🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
│☭🛠️ _${usedPrefix}calc *<operacion math>*_
│☭🛠️ _${usedPrefix}del *<mensaje>*_
│☭🛠️ _${usedPrefix}whatmusic *<audio>*_
│☭🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
│☭🛠️ _${usedPrefix}qrcode *<texto>*_
│☭🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
│☭🛠️ _${usedPrefix}styletext *<texto>*_
│☭🛠️ _${usedPrefix}traducir *<texto>*_
│☭🛠️ _${usedPrefix}zoom *<texto>*_
│☭🛠️ _${usedPrefix}nowa *<numero>*_
│☭🛠️ _${usedPrefix}horario_
╰─────────────────╯

╭━〔💸𝙍𝙋𝙂-𝙇𝙄𝙈𝙄𝙏𝙀𝙎-𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝘼𝙎💸〕━⬣
│☭𝙲𝚘𝚖𝚙𝚛𝚊, 𝙰𝚍𝚚𝚞𝚒𝚎𝚛𝚎 𝚁𝚎𝚌𝚞𝚎𝚛𝚜𝚘𝚜 
│☭𝙼𝚎𝚓𝚘𝚛𝚊 𝚃ú 𝙽𝚒𝚟𝚎𝚕 𝚢 𝚁𝚊𝚗𝚐𝚘!!
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭💵 _${usedPrefix}verificar_
│☭💵 _${usedPrefix}unreg *<numero de serie>*_
│☭💵 _${usedPrefix}claim_
│☭💵 _${usedPrefix}lb_
│☭💵 _${usedPrefix}levelup_
│☭💵 _${usedPrefix}perfil_
│☭💵 _${usedPrefix}minar_
│☭💵 _${usedPrefix}buy_
│☭💵 _${usedPrefix}balance_
│☭💵 _${usedPrefix}myns_
│☭💵 _${usedPrefix}work_
│☭💵 _${usedPrefix}buyall_
│☭💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
╰─────────────────╯

╭━〔👽𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎👽〕━⬣
│☭𝚁𝚎𝚊𝚕𝚒𝚣𝚊 𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜 𝚘 𝚌𝚛𝚎𝚊
│☭𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜 𝚌𝚘𝚗 𝚏𝚒𝚕𝚝𝚛𝚘𝚜!!
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭👽 _${usedPrefix}sticker *<responder a imagen o video>*_
│☭👽 _${usedPrefix}sticker *<enlace / link / url>*_
│☭👽 _${usedPrefix}s *<responder a imagen o video>*_
│☭👽 _${usedPrefix}s *<enlace / link / url>*_
│☭👽 _${usedPrefix}sfull *<imagen o video>*_
│☭👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
│☭👽 _${usedPrefix}scircle *<imagen>*_
│☭👽 _${usedPrefix}sremovebg *<imagen>*_
│☭👽 _${usedPrefix}semoji *<tipo> <emoji>*_
│☭👽 _${usedPrefix}attp *<texto>*_
│☭👽 _${usedPrefix}attp2 *<texto>*_
│☭👽 _${usedPrefix}attp3 *<texto>*_
│☭👽 _${usedPrefix}ttp *<texto>*_
│☭👽 _${usedPrefix}ttp2 *<texto>*_
│☭👽 _${usedPrefix}ttp3 *<texto>*_
│☭👽 _${usedPrefix}ttp4 *<texto>*_
│☭👽 _${usedPrefix}ttp5 *<texto>*_
│☭👽 _${usedPrefix}pat *<@tag>*_
│☭👽 _${usedPrefix}slap *<@tag>*_
│☭👽 _${usedPrefix}kiss *<@tag>*_
│☭👽 _${usedPrefix}dado_
│☭👽 _${usedPrefix}wm *<packname> <author>*_
│☭👽 _${usedPrefix}stickermarker *<efecto> <imagen>*_
│☭👽 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
╰─────────────────╯

╭━〔⛱️𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊𝙎⛱️〕━⬣
│☭𝚁𝚎𝚊𝚕𝚒𝚣𝚊 𝚊𝚌𝚌𝚒𝚘𝚗𝚎𝚜 𝚌𝚘𝚗 𝚂𝚝𝚒𝚌𝚔𝚎𝚛𝚜
│☭𝙴𝚝𝚒𝚚𝚞𝚎𝚝𝚊𝚗𝚍𝚘 𝚊 𝚊𝚕𝚐𝚞𝚒𝚎𝚗!!
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭⛱️ _${usedPrefix}palmaditas | pat *@tag*_
│☭⛱️ _${usedPrefix}bofetada | slap *@tag*_
│☭⛱️ _${usedPrefix}golpear *@tag*_
│☭⛱️ _${usedPrefix}besar | kiss *@tag*_
│☭⛱️ _${usedPrefix}alimentar | food *@tag*
╰─────────────────╯

╭━〔🤴𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊 𝘿𝙀𝙇 𝘽𝙊𝙏🤴〕━⬣
│☭𝙲𝚘𝚖𝚊𝚗𝚍𝚘 𝚎𝚡𝚌𝚕𝚞𝚜𝚒𝚟𝚘 𝚙𝚊𝚛𝚊 
│☭𝙿𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒𝚘/𝚘𝚠𝚗𝚎𝚛 𝚍𝚎𝚕 𝚋𝚘𝚝
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☭👑 > *<funcion>*
│☭👑 => *<funcion>*
│☭👑 $ *<funcion>*
│☭👑 _${usedPrefix}setprefix *<prefijo>*_
│☭👑 _${usedPrefix}resetprefix_
│☭👑 _${usedPrefix}autoadmin_
│☭👑 _${usedPrefix}leavegc_
│☭👑 _${usedPrefix}cajafuerte_
│☭👑 _${usedPrefix}blocklist_
│☭👑 _${usedPrefix}block *<@tag / numero>*_
│☭👑 _${usedPrefix}unblock *<@tag / numero>*_
│☭👑 _${usedPrefix}enable *restrict*_
│☭👑 _${usedPrefix}disable *restrict*_
│☭👑 _${usedPrefix}enable *autoread*_
│☭👑 _${usedPrefix}disable *autoread*_
│☭👑 _${usedPrefix}enable *public*_
│☭👑 _${usedPrefix}disable *public*_
│☭👑 _${usedPrefix}enable *pconly*_
│☭👑 _${usedPrefix}disable *pconly*_
│☭👑 _${usedPrefix}enable *gconly*_
│☭👑 _${usedPrefix}disable *gconly*_
│☭👑 _${usedPrefix}enable *anticall*_
│☭👑 _${usedPrefix}disable *anticall*_
│☭👑 _${usedPrefix}enable *antiprivado*_
│☭👑 _${usedPrefix}disable *antiprivado*_
│☭👑 _${usedPrefix}msg *<texto>*_
│☭👑 _${usedPrefix}banchat_
│☭👑 _${usedPrefix}unbanchat_
│☭👑 _${usedPrefix}banuser *<@tag>*_
│☭👑 _${usedPrefix}unbanuser *<@tag>*_
│☭👑 _${usedPrefix}dardiamantes *<@tag>*_
│☭👑 _${usedPrefix}añadirxp *<@tag>*_
│☭👑 _${usedPrefix}banuser *<@tag>*_
│☭👑 _${usedPrefix}bc *<texto>*_
│☭👑 _${usedPrefix}bcchats *<texto>*_
│☭👑 _${usedPrefix}bcgc *<texto>*_
│☭👑 _${usedPrefix}bcbot *<texto>*_
│☭👑 _${usedPrefix}cleartpm_
│☭👑 _${usedPrefix}restart_
│☭👑 _${usedPrefix}update_
│☭👑 _${usedPrefix}banlist_
│☭👑 _${usedPrefix}addprem *<@tag>*_
│☭👑 _${usedPrefix}delprem *<@tag>*_
│☭👑 _${usedPrefix}listprem_
│☭👑 _${usedPrefix}listcmd_
│☭👑 _${usedPrefix}setppbot *<responder a imagen>*_
│☭👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
│☭👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
╰─────────────────╯`.trim()
    conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
	
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu10|menú|menu|menucompleto|allmenu|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
