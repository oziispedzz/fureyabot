"use strict"
exports.menukiw = 
(
    pushname,
    salam,
    mundur,
    upload,
    download,
    totalGb,
    usedGb,
    freeGb,
    ownerName,
    botName,
    jam,
    totalFitur,
  //  isCreator,
    //kon,
   // isPremium,
    tanggal,
    runtime,
    prefix
  ) => {
    return (`
*SELAMAT ${salam.slice(0, 1).toUpperCase() + salam.slice(1)
}* *${pushname}*

${botName}
⬫ *Date* : ${tanggal}
⬫ *Waktu* : ${jam}
⬫ *TotalFeature* : ${totalFitur()}
⬫ *prefix* : (${prefix})
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*INFORMATION*
┎❏ ${prefix}owner
│ ◦ ${prefix}ping
│ ◦ ${prefix}sc
│ ◦ ${prefix}runtime
│ ◦ ${prefix}limit
┖ ◦ ${prefix}gcbot

*AI*
┎ ◦ ${prefix}pauji
┖ ◦ ${prefix}

*DOWNLOAD*
┎ ◦ ${prefix}ytmp4
│ ◦ ${prefix}ytplay
│ ◦ ${prefix}tiktok
│ ◦ ${prefix}tiktokv2
│ ◦ ${prefix}ttslide
│ ◦ ${prefix}igdl
│ ◦ ${prefix}igdlv2
│ ◦ ${prefix}twdl
│ ◦ ${prefix}fbdl
│ ◦ ${prefix}git
┖ ◦ ${prefix}ytmp3

*TOOLS*
┎ ◦ ${prefix}stiker
│ ◦ ${prefix}brainly
│ ◦ ${prefix}wikipedia 
│ ◦ ${prefix}lirik
│ ◦ ${prefix}liriklagu
│ ◦ ${prefix}toimg
│ ◦ ${prefix}ssweb
│ ◦ ${prefix}translate
┖ ◦ ${prefix}swm

*GROUP*
┎ ◦ ${prefix}demote
│ ◦ ${prefix}add
│ ◦ ${prefix}kick
│ ◦ ${prefix}revoke
│ ◦ ${prefix}antiwame
│ ◦ ${prefix}antilink
│ ◦ ${prefix}antilink
│ ◦ ${prefix}antilink2
│ ◦ ${prefix}open
│ ◦ ${prefix}close
│ ◦ ${prefix}grup _open/close_
│ ◦ ${prefix}hidetag
│ ◦ ${prefix}totag
│ ◦ ${prefix}linkgc
┖ ◦ ${prefix}tagall
      
*CECAN*
┎ ◦ ${prefix}vietnam
│ ◦ ${prefix}thailand
│ ◦ ${prefix}korea
│ ◦ ${prefix}japan
│ ◦ ${prefix}malaysia
│ ◦ ${prefix}justinaxie
│ ◦ ${prefix}jeni
│ ◦ ${prefix}jiso
│ ◦ ${prefix}ryujin
│ ◦ ${prefix}rose
│ ◦ ${prefix}hijaber
┖ ◦ ${prefix}freya

*FUNN MENU*
┎ ◦ ${prefix}apakah
│ ◦ ${prefix}bagaimanakah
│ ◦ ${prefix}cekganteng
│ ◦ ${prefix}cekcantik
│ ◦ ${prefix}ceksange
│ ◦ ${prefix}nikahin
│ ◦ ${prefix}lesbicek
│ ◦ ${prefix}cekgay
│ ◦ ${prefix}rate
│ ◦ ${prefix}cekmati
│ ◦ ${prefix}jadian
│ ◦ ${prefix}tagme
│ ◦ ${prefix}jodohku
│ ◦ ${prefix}totag
│ ◦ ${prefix}reqtag
│ ◦ ${prefix}ngaceng
│ ◦ ${prefix}silit
│ ◦ ${prefix}bodoh
│ ◦ ${prefix}lesby
│ ◦ ${prefix}playboy
│ ◦ ${prefix}playgirl
│ ◦ ${prefix}monyet
│ ◦ ${prefix}mastah
│ ◦ ${prefix}newbie
│ ◦ ${prefix}bangke
│ ◦ ${prefix}sange
│ ◦ ${prefix}sangean
│ ◦ ${prefix}wibu
│ ◦ ${prefix}bocep
│ ◦ ${prefix}jomblo
│ ◦ ${prefix}slebew
│ ◦ ${prefix}kentut
│ ◦ ${prefix}bencong
│ ◦ ${prefix}ngakak
│ ◦ ${prefix}nganggur
│ ◦ ${prefix}pantek
│ ◦ ${prefix}halah
│ ◦ ${prefix}hilih
│ ◦ ${prefix}heleh
│ ◦ ${prefix}holoh
│ ◦ ${prefix}huluh
┖ ◦ ${prefix}bisakah

*RANDOM STICKER*
┎ ◦ ${prefix}patrick
│ ◦ ${prefix}popoci
│ ◦ ${prefix}sponsbob
│ ◦ ${prefix}kawan-sponsbob
│ ◦ ${prefix}awoawo
│ ◦ ${prefix}chat
│ ◦ ${prefix}benedict
│ ◦ ${prefix}dbfly
│ ◦ ${prefix}dino-kuning
│ ◦ ${prefix}doge
│ ◦ ${prefix}gojosatoru
│ ◦ ${prefix}hope-boy
│ ◦ ${prefix}jisoo
│ ◦ ${prefix}kr-robot
│ ◦ ${prefix}kucing
│ ◦ ${prefix}lonte
│ ◦ ${prefix}manusia-lidi
│ ◦ ${prefix}menjamet
│ ◦ ${prefix}meow
│ ◦ ${prefix}*nicholas*
┖ ◦ ${prefix}*tyni*

*CANVAS*
┎ ◦ ${prefix}nuliskanan
│ ◦ ${prefix}nuliskiri
┖ ◦ ${prefix}attp

*MENU STALK*
┎ ◦ ${prefix}igstalk
┖ ◦ ${prefix}ttstalk

*SPAM*
┎ ◦ ${prefix}spamgc _only prem_
│ ◦ ${prefix}spam _only prem_
┖ ◦ ${prefix}

*OWNER*  
┎ ◦ ${prefix}self
│ ◦ ${prefix}bcgc
│ ◦ ${prefix}addvn
│ ◦ ${prefix}listvn
│ ◦ ${prefix}delvn
│ ◦ ${prefix}leave
│ ◦ ${prefix}join
│ ◦ ${prefix}bcall
│ ◦ ${prefix}addprem
│ ◦ ${prefix}delprem
│ ◦ ${prefix}listprem
│ ◦ ${prefix}listpc
│ ◦ ${prefix}listgc
┖ ◦ ${prefix}public

*THANKS TO*
*FauziJayawardana* _(author)_
`)
}

exports.downloadmenu = (prefix) => { return (
`
┌───「 DOWNLOADMENU 」
│❏ ${prefix}ytmp4
│❏ ${prefix}ytplay
│❏ ${prefix}tiktok
│❏ ${prefix}tiktokv2
│❏ ${prefix}ttslide
│❏ ${prefix}igdl
│❏ ${prefix}igdlv2
│❏ ${prefix}twdl
│❏ ${prefix}fbdl
│❏ ${prefix}git
│❏ ${prefix}ytmp3
│ 
└───「 *Fureya Bot* 」`
)}

exports.toolsmenu = (prefix) => { return (
`
┌───「 TOOLS MENU 」
│❏ ${prefix}stiker
│❏ ${prefix}brainly
│❏ ${prefix}wikipedia 
│❏ ${prefix}lirik
│❏ ${prefix}liriklagu
│❏ ${prefix}toimg
│❏ ${prefix}ssweb
│❏ ${prefix}translate
│❏ ${prefix}swm
│❏ ${prefix}smeme
│❏ ${prefix}fauzi
│❏ ${prefix}nino
│❏ ${prefix}ytsearch
│❏ ${prefix}igstalk
│❏ ${prefix}ttstalk
│❏ ${prefix}nuliskiri
│❏ ${prefix}ttsid
│❏ ${prefix}ttsen
│
└───「 *Fureya Bot* 」  
    `
)}

exports.ownermenu = (prefix) => { return (
`
┌───「 OWNER MENU 」
│❏ ${prefix}self 👑
│❏ ${prefix}bcgc 👑
│❏ ${prefix}addvn 👑
│❏ ${prefix}listvn 👑
│❏ ${prefix}delvn 👑
│❏ ${prefix}leave 👑
│❏ ${prefix}join 👑
│❏ ${prefix}bcall 👑
│❏ ${prefix}addprem 👑
│❏ ${prefix}delprem 👑
│❏ ${prefix}listprem 👑
│❏ ${prefix}listpc 👑
│❏ ${prefix}listgc 👑
│❏ ${prefix}public 👑
│
└───「 *Fureya Bot* 」`
)}

exports.funmenu = (prefix) => { return (
`
┌───「 FUN MENU 」
│❏ ${prefix}apakah
│❏ ${prefix}bagaimanakah
│❏ ${prefix}cekganteng
│❏ ${prefix}cekcantik
│❏ ${prefix}ceksange
│❏ ${prefix}nikahin
│❏ ${prefix}lesbicek
│❏ ${prefix}cekgay
│❏ ${prefix}rate
│❏ ${prefix}cekmati
│❏ ${prefix}jadian
│❏ ${prefix}tagme
│❏ ${prefix}jodohku
│❏ ${prefix}totag
│❏ ${prefix}reqtag
│❏ ${prefix}ngaceng
│❏ ${prefix}silit
│❏ ${prefix}bodoh
│❏ ${prefix}lesby
│❏ ${prefix}playboy
│❏ ${prefix}playgirl
│❏ ${prefix}monyet
│❏ ${prefix}mastah
│❏ ${prefix}newbie
│❏ ${prefix}bangke
│❏ ${prefix}sange
│❏ ${prefix}sangean
│❏ ${prefix}wibu
│❏ ${prefix}bocep
│❏ ${prefix}jomblo
│❏ ${prefix}slebew
│❏ ${prefix}kentut
│❏ ${prefix}bencong
│❏ ${prefix}ngakak
│❏ ${prefix}nganggur
│❏ ${prefix}pantek
│❏ ${prefix}halah
│❏ ${prefix}hilih
│❏ ${prefix}heleh
│❏ ${prefix}holoh
│❏ ${prefix}huluh
│❏ ${prefix}bisakah
│
└───「 *Fureya Bot* 」  
`
)}

exports.groupmenu = (prefix) => { return (
`
┌───「 GROUP MENU 」
│❏ ${prefix}demote
│❏ ${prefix}add
│❏ ${prefix}kick
│❏ ${prefix}revoke
│❏ ${prefix}antiwame
│❏ ${prefix}antilink
│❏ ${prefix}antilink
│❏ ${prefix}antilink2
│❏ ${prefix}open
│❏ ${prefix}close
│❏ ${prefix}grup _open/close_
│❏ ${prefix}hidetag
│❏ ${prefix}totag
│❏ ${prefix}linkgc
│❏ ${prefix}tagall
│
└───「 *Fureya Bot* 」  
`
)}

exports.cecan = (prefix) => { return (
`
┌───「 RANDOM CECAN 」
│❏ ${prefix}vietnam
│❏ ${prefix}thailand
│❏ ${prefix}korea
│❏ ${prefix}japan
│❏ ${prefix}malaysia
│❏ ${prefix}justinaxie
│❏ ${prefix}jeni
│❏ ${prefix}jiso
│❏ ${prefix}ryujin
│❏ ${prefix}rose
│❏ ${prefix}hijaber
│❏ ${prefix}freya
│
└───「 *Fureya Bot* 」  
`
)}

exports.randomstiker = (prefix) => { 
return (
`
┌───「 RANDOM STIKER 」
│❏ ${prefix}patrick
│❏ ${prefix}popoci
│❏ ${prefix}sponsbob
│❏ ${prefix}kawan-sponsbob
│❏ ${prefix}awoawo
│❏ ${prefix}chat
│❏ ${prefix}benedict
│❏ ${prefix}dbfly
│❏ ${prefix}dino-kuning
│❏ ${prefix}doge
│❏ ${prefix}gojosatoru
│❏ ${prefix}hope-boy
│❏ ${prefix}jisoo
│❏ ${prefix}kr-robot
│❏ ${prefix}kucing
│❏ ${prefix}lonte
│❏ ${prefix}manusia-lidi
│❏ ${prefix}menjamet
│❏ ${prefix}meow
│❏ ${prefix}*nicholas*
│❏ ${prefix}*tyni*
│
└───「 *Fureya Bot* 」  
`)
}

exports.infomenu = (prefix) => { return (
`
┌───「 INFORMATION 」
│❏ ${prefix}owner
│❏ ${prefix}ping
│❏ ${prefix}sc
│❏ ${prefix}runtime
│ ◦ ${prefix}limit
│◦ ${prefix}gcbot
│
└───「 *Fureya Bot* 」  
`
)}

exports.allmenu = (prefix) => { return (
`
*INFORMATION*
┎❏ ${prefix}owner
│❏ ${prefix}ping
│❏ ${prefix}sc
│❏ ${prefix}runtime
│❏ ${prefix}limit
┖❏ ${prefix}gcbot

*AI*
┎❏ ${prefix}pauji
┖❏ ${prefix}

*DOWNLOAD*
┎❏ ${prefix}ytmp4
│❏ ${prefix}ytplay
│❏ ${prefix}tiktok
│❏ ${prefix}tiktokv2
│❏ ${prefix}ttslide
│❏ ${prefix}igdl
│❏ ${prefix}igdlv2
│❏ ${prefix}twdl
│❏ ${prefix}fbdl
│❏ ${prefix}git
┖❏ ${prefix}ytmp3

*TOOLS*
┎❏ ${prefix}stiker
│❏ ${prefix}brainly
│❏ ${prefix}wikipedia 
│❏ ${prefix}lirik
│❏ ${prefix}liriklagu
│❏ ${prefix}toimg
│❏ ${prefix}ssweb
│❏ ${prefix}translate
│❏ ${prefix}smeme
│❏ ${prefix}ttsid
│❏ ${prefix}ttsen
┖❏ ${prefix}swm

*GROUP*
┎❏ ${prefix}demote
│❏ ${prefix}add
│❏ ${prefix}kick
│❏ ${prefix}revoke
│❏ ${prefix}antiwame
│❏ ${prefix}antilink
│❏ ${prefix}antilink
│❏ ${prefix}antilink2
│❏ ${prefix}open
│❏ ${prefix}close
│❏ ${prefix}grup _open/close_
│❏ ${prefix}hidetag
│❏ ${prefix}totag
│❏ ${prefix}linkgc
┖❏ ${prefix}tagall
      
*CECAN*
┎❏ ${prefix}vietnam
│❏ ${prefix}thailand
│❏ ${prefix}korea
│❏ ${prefix}japan
│❏ ${prefix}malaysia
│❏ ${prefix}justinaxie
│❏ ${prefix}jeni
│❏ ${prefix}jiso
│❏ ${prefix}ryujin
│❏ ${prefix}rose
│❏ ${prefix}hijaber
┖❏ ${prefix}freya

*FUNN MENU*
┎❏ ${prefix}apakah
│❏ ${prefix}bagaimanakah
│❏ ${prefix}cekganteng
│❏ ${prefix}cekcantik
│❏ ${prefix}ceksange
│❏ ${prefix}nikahin
│❏ ${prefix}lesbicek
│❏ ${prefix}cekgay
│❏ ${prefix}rate
│❏ ${prefix}cekmati
│❏ ${prefix}jadian
│❏ ${prefix}tagme
│❏ ${prefix}jodohku
│❏ ${prefix}totag
│❏ ${prefix}reqtag
│❏ ${prefix}ngaceng
│❏ ${prefix}silit
│❏ ${prefix}bodoh
│❏ ${prefix}lesby
│❏ ${prefix}playboy
│❏ ${prefix}playgirl
│❏ ${prefix}monyet
│❏ ${prefix}mastah
│❏ ${prefix}newbie
│❏ ${prefix}bangke
│❏ ${prefix}sange
│❏ ${prefix}sangean
│❏ ${prefix}wibu
│❏ ${prefix}bocep
│❏ ${prefix}jomblo
│❏ ${prefix}slebew
│❏ ${prefix}kentut
│❏ ${prefix}bencong
│❏ ${prefix}ngakak
│❏ ${prefix}nganggur
│❏ ${prefix}pantek
│❏ ${prefix}halah
│❏ ${prefix}hilih
│❏ ${prefix}heleh
│❏ ${prefix}holoh
│❏ ${prefix}huluh
┖❏ ${prefix}bisakah

*RANDOM STICKER*
┎❏ ${prefix}patrick
│❏ ${prefix}popoci
│❏ ${prefix}sponsbob
│❏ ${prefix}kawan-sponsbob
│❏ ${prefix}awoawo
│❏ ${prefix}chat
│❏ ${prefix}benedict
│❏ ${prefix}dbfly
│❏ ${prefix}dino-kuning
│❏ ${prefix}doge
│❏ ${prefix}gojosatoru
│❏ ${prefix}hope-boy
│❏ ${prefix}jisoo
│❏ ${prefix}kr-robot
│❏ ${prefix}kucing
│❏ ${prefix}lonte
│❏ ${prefix}manusia-lidi
│❏ ${prefix}menjamet
│❏ ${prefix}meow
│❏ ${prefix}*nicholas*
┖❏ ${prefix}*tyni*

*CANVAS*
┎❏ ${prefix}nuliskanan
│❏ ${prefix}nuliskiri
┖❏ ${prefix}attp

*MENU STALK*
┎❏ ${prefix}igstalk
┖❏ ${prefix}ttstalk

*SPAM*
┎❏ ${prefix}spamgc _only prem_
│❏ ${prefix}spam _only prem_
┖❏ ${prefix}

*OWNER*  
┎❏ ${prefix}self
│❏ ${prefix}bcgc
│❏ ${prefix}addvn
│❏ ${prefix}listvn
│❏ ${prefix}delvn
│❏ ${prefix}leave
│❏ ${prefix}join
│❏ ${prefix}bcall
│❏ ${prefix}addprem
│❏ ${prefix}delprem
│❏ ${prefix}listprem
│❏ ${prefix}listpc
│❏ ${prefix}listgc
┖❏ ${prefix}public

*THANKS TO*
*FauziJayawardana* _(author)_
`
)}