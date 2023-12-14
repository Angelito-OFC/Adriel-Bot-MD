import fetch from 'node-fetch'
import { sizeFormatter } from 'human-readable'
let formatSize = sizeFormatter({
std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B` })
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*\n\n*- 𝙲𝙾𝚁𝚁𝙾𝙱𝙾𝚁𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝚂𝙴𝙰 𝚂𝙸𝙼𝙸𝙻𝙰𝚁 𝙰:*\n*◉ https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view*\n\n\n*[❗𝐈𝐍𝐅𝐎❗] ERROR TRY AGAIN*\n\n*HELP THAT THE LINK IS SIMILAR TO* ◉ https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view' 
try {
GDriveDl(args[0]).then(async (res) => {
conn.reply(m.chat, '*𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾 𝚂𝙸 𝙳𝙴𝙼𝙾𝚁𝙰 𝙼𝚄𝙲𝙷𝙾 𝚂𝙴𝚁Á 𝙿𝙾𝚁𝚀𝚄𝙴 𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾 𝙿𝙴𝚂𝙰 𝙼Á𝚂 𝟷𝟶𝟶 𝙼𝙱 𝙴𝚂 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝚀𝚄𝙴 𝙽𝙾 𝚂𝙴 𝙼𝙰𝙽𝙳𝙴 𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾*\n\n\n*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝚃𝙷𝙴 𝙵𝙸𝙻𝙴 𝙸𝙵 𝙸𝚃 𝚃𝙰𝙺𝙴𝚂 𝙰 𝙻𝙾𝙽𝙶 𝚃𝙸𝙼𝙴, 𝙸𝚃 𝚆𝙸𝙻𝙻 𝙱𝙴 𝙱𝙴𝙲𝙰𝚄𝚂𝙴 𝚃𝙷𝙴 𝙵𝙸𝙻𝙴 𝚆𝙴𝙸𝙶𝙷𝚂 𝙼𝙾𝚁𝙴 𝚃𝙷𝙰𝙽 𝟷𝟶𝟶 𝙼𝙱 𝙸𝚃 𝙸𝚂 𝙿𝙾𝚂𝚂𝙸𝙱𝙻𝙴 𝚃𝙷𝙰𝚃 𝚃𝙷𝙴 𝙵𝙸𝙻𝙴 𝚆𝙸𝙻𝙻 𝙽𝙾𝚃 𝙱𝙴 𝚂𝙴𝙽𝚃*', m)
if (!res) throw res
conn.sendFile(m.chat, res.downloadUrl, res.fileName, '', m, null, { mimetype: res.mimetype, asDocument: true })})
}catch(e){
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*\n\n*- 𝙲𝙾𝚁𝚁𝙾𝙱𝙾𝚁𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝚂𝙴𝙰 𝚂𝙸𝙼𝙸𝙻𝙰𝚁 𝙰:*\n*◉ https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view*\n\n\n[❗𝐈𝐍𝐅𝐎❗] ERROR TRY AGAIN*\n\n*HELP THAT THE LINK IS SIMILAR TO* ◉ https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view')
console.log(e)}}
handler.command = /^(gdrive)$/i
handler.register = true
handler.limit = 4
export default handler
async function GDriveDl(url) {
let id
if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL'
id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
if (!id) throw 'ID Not Found'
let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
method: 'post',
headers: {
'accept-encoding': 'gzip, deflate, br',
'content-length': 0,
'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
'origin': 'https://drive.google.com',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
'x-drive-first-party': 'DriveWebUi',
'x-json-requested': 'true'  }})
let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
if (!downloadUrl) throw 'Link Download Limit!'
let data = await fetch(downloadUrl)
if (data.status !== 200) throw data.statusText
return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type')}}

