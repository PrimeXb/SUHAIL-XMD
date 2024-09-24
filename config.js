const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347068041303";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_51_09_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDYwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDczLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjksXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlE3S3pzdHoyVlV0alJIb1JZaW8xdDdNR2RENnc0NGtaUXVFZTJWekZsMkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJ1MlFERGFPUm1lb3pDY3RPVzRjTVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTJlZGQ0NmQtMGVjYi00ZmU2LWI4NDQtMGVlNTU0MmUzMDY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgMTU0LFxuICAgICAgMTkwLFxuICAgICAgMTEzLFxuICAgICAgMTI3LFxuICAgICAgMTEyLFxuICAgICAgMTg5LFxuICAgICAgMjUwLFxuICAgICAgNjcsXG4gICAgICA1OSxcbiAgICAgIDIyNyxcbiAgICAgIDI2LFxuICAgICAgODgsXG4gICAgICAyMzQsXG4gICAgICA0MixcbiAgICAgIDEyNCxcbiAgICAgIDIyOSxcbiAgICAgIDIyMyxcbiAgICAgIDQwLFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDQsXG4gICAgICAyNDIsXG4gICAgICAyMDksXG4gICAgICAyMTcsXG4gICAgICA4MixcbiAgICAgIDIxOSxcbiAgICAgIDEyMSxcbiAgICAgIDE1LFxuICAgICAgOTQsXG4gICAgICAxNzcsXG4gICAgICAyMDYsXG4gICAgICA0NixcbiAgICAgIDE5MixcbiAgICAgIDIyMyxcbiAgICAgIDk3LFxuICAgICAgMTE4LFxuICAgICAgMTg5LFxuICAgICAgNTQsXG4gICAgICA0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lyU3c1d0dFSVQ0eTdjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUEIwbGlNT2M0UnJMbFdnbDRPbnRkNXpWRFFjTU9LSWcwTzhXV2xBVERnTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvWUxNOUlQaHlhZ2NQNjFrRGJoZERDYTBOYzBXak1wQlFkRHoycFNWV0NZRkswU3gwTkwvZGJWZVZNWDJROHFsaGt5VW9NWHlQeE5GYnh3QVF5SXZDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRd2NJc1pqQURFQTlhdkZ6ODZaV3ROVzVYRGx4UDQ5a2dXbkhzL2hQUElYK29iRkdJWjJyRmJLRE9kVTNkQkNnQnNHcmRMY3haeHJrVktLZXQvMDJnZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTY0NjA1NzY6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxMzg3NjY1NDIzOTg2OToyMEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTY0NjA1NzY6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjcyMDAyNjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMcm9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxyby5qc29uIjogIntcImtleURhdGFcIjpcImpZenhhQ3UrUGFlMERvZm5VbDRVM0RZeWhwYnNYWUNMQk56VFE4NVNMSWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY3MDQ0MTIyNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI3MjAwMTY1NDAyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
