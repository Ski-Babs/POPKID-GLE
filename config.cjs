const fs = require("fs");
require("dotenv").config();

const config = {
  // 🧠 Session & Identity
  SESSION_ID: process.env.SESSION_ID || "POPKID;;;hr9HXJyY#hmasPTzVvyiE11nXiFKwsHrsIEhpbmfidDV78CrFFm4",
  PREFIX: process.env.PREFIX || '.',
  BOT_NAME: process.env.BOT_NAME || "Skimzy",
  BOT: process.env.BOT || "hello 👋",
  NEW_CMD: process.env.NEW_CMD || "ᴀᴅᴅᴠᴀʀ\n│ sᴜᴅᴏ\n| popkid",
  CAPTION: process.env.CAPTION || "ᴘᴏᴡᴇʀᴇᴅ by popkid",

  // 🤖 GPT/AI API KEYS
  GPT_API_KEY: process.env.GPT_API_KEY || "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", // Groq key
  GROQ_API_KEY: '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',
  WEATHER_API_KEY: "ec32bfa1c6b8ff81a636877b6ba302c8",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  PRINCETECH_APIKEY: "prince_api_tjhv",
 
  // 🔧 Auto features
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN === 'false',
  AUTO_BIO: process.env.AUTO_BIO === 'false',
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT === 'false',
  AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS === 'false',
  AUTO_STICKER: process.env.AUTO_STICKER === 'false',
  AUTO_READ: process.env.AUTO_READ === 'false',
  AUTO_TYPING: process.env.AUTO_TYPING === 'false',
  AUTO_RECORDING: process.env.AUTO_RECORDING === 'false',
  AUTO_REACT: process.env.AUTO_REACT === 'false',
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === 'false',
  AUTO_BLOCK: process.env.AUTO_BLOCK !== 'false', // true by default

  // 📦 Extra Features
  ANTI_LEFT: process.env.ANTI_LEFT === 'true',
  MASS_TARGET_JID: '254111385747@s.whatsapp.net',
  ANTILINK: process.env.ANTILINK === 'true',
  ANTI_DELETE: process.env.ANTI_DELETE === 'true',
  CHAT_BOT: process.env.CHAT_BOT === 'true',
  CHAT_BOT_MODE: process.env.CHAT_BOT_MODE || "public",
  LYDEA: process.env.LYDEA === 'true',
  REJECT_CALL: process.env.REJECT_CALL === 'false',
  NOT_ALLOW: process.env.NOT_ALLOW !== 'false',
  BLOCK_UNKNOWN: process.env.BLOCK_UNKNOWN === 'false',

  // 🛠 Other
  MODE: process.env.MODE || "private",
  DELETED_MESSAGES_CHAT_ID: process.env.DELETED_MESSAGES_CHAT_ID || "254111385747@s.whatsapp.net",

  // 👑 Owner & Permissions
  OWNER_NAME: process.env.OWNER_NAME || "Ski Babs",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "2347070564172",
  SUDO_NUMBER: process.env.SUDO_NUMBER || "2347070564172",

  // 💚 Auto react emoji
  AUTOLIKE_EMOJI: process.env.AUTOLIKE_EMOJI || '💚',
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || 'Status Viewed by popkid-Md',
  WELCOME: process.env.WELCOME === 'true',
};

module.exports = config;
