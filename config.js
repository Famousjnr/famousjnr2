const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "B.m.b-Xmd~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlSeVpBVUduSWJHTithOXpjM2VzSzA0cFFzQzF4Sm1GYnRsM3ZWR1Ixcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclNocjJtUHNQaTdBUjJGemZYRFpQQTNHRmxRU015Uk9VcDJTM2thaXZtVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLR2k3VU1aUTZYYlRmUnU1N2k1cmduck84d3lqK2Z6THJxbVhrRmZ2TkVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLdG9rdVI5SytvY0tNUm0wSElYU3RobWUwVm5LME55QSs0UmxjMTZTMUdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlBWHBhc2FIWnNRME1vc0pmZ0xnMzNqVDgyZVBYVjd6OGl2OEZQVDM0R009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlRMERZYnkrbTJsZ1M0WlBYaXVqeE5sRUtHRFBNLzRBN3NKWlZLbzBLbGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0NSU1dPZUc2cDBpTU1LT0F3YVZla3N4SmlBQmpLeUlyV3pXaTcrN3FtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXg0amZIWk9yU2RlSGVWMjVVU2FGUVVMaUF5ajBPVjhDRkI2aUZBNlN3TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlHK05aQ20xUWZqN0NROHc3VWxvRHFDbFFnbHpkSkZZdzVobGZNbXlvRDIweGtEdi9nMHEyaFdGdVlSUk5oSnF4aFNPdFN6L3llazlCOUJRY0VYd0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6Ik9QaGdhRXB2MkFSemFVeHFpblZ5MjVjbHgvUzZhbG9aTDZySWxmR1crb2M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjMzMjY5MDEyNzE1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRBMkY3MEFDQkQ0NTgyNEU3RTQ2RjJDRjFEQThDRTBCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDkzMzY4NDN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzMzI2OTAxMjcxNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3NjAzNjBCQ0FCM0JEREQ2REI2OUJDNjUxRTE3QzRENyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ5MzM2ODUwfV0sIm5leHRQcmVLZXlJZCI6MzQsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozNCwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJCTE5MVko0QyIsIm1lIjp7ImlkIjoiMjMzMjY5MDEyNzE1Ojc3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjQ5ODczMjExMzcxNTI2Ojc3QGxpZCIsIm5hbWUiOiJGYW1vdXNfam5y8J+kk+Kcje+4jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnZML3FZRUVPK0ZrOElHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRHB5aUwzWkkvR2hqUGcxbkJQb1JnMUlWSCs2TEtUU1lxNW1SZSs3WU9IQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVk9sK1RHUFJiWndGTWI2YVdSUE5GSXZUSWE4V2pHVlNyeUM1TjRKVC9RanJHYnlHamNEeGpFZkh5eEVvMjBqWFJuOGN0RGhXMVlyUlRrNCtDeGk1Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkF6ekh6N0ZnTkNQYmpuU01oMTVpcm81TU5qVUpCZUtqQzN4T0VCcGszR1RJM1VyUWJQdWJHdHVsUVAxc1BHZEx2REw3bHFjSUZ0dm1mZUFQcGJXYUJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzMjY5MDEyNzE1Ojc3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE2Y29pOTJTUHhvWXo0Tlp3VDZFWU5TRlIvdWl5azBtS3Vaa1h2dTJEaHcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTMzNjgyOSwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIcEgifQ==",
// add your Session Id 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "✦ B.M.B-XMD ✦ XMD ✦",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "233269012715",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "✦ B.M.B-XMD ✦ XMD ✦",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦ B.M.B-XMD ✦ XMD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p9hyal.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || ">B.M.B IS ACTIVE AND ALIVE\n\n\nKEEP USING B.M.B-XMD FROM B.M.B TECH INC⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by B.m.b-xmd 🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "false",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
