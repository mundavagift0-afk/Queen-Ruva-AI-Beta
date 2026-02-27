const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

global.queenruva = "𝐐𝐔𝐄𝐄𝐍 𝐑𝐔𝐕𝐀";
global.prefix = '.';
global.iconictechMenu = "v1";
global.version = "3.0";

global.autoRecording = true;
global.backenddynamic = false;
global.autoTyping = true;
global.savestatus = true;
global.dmUnavailable = true;
global.autorecordtype = false;
global.autoread = true;
global.autobio = true;
global.private = true;
global.group = true;
global.welcome = true;
global.anticall = true;
global.audioblock = true;
global.stickerBlock = true;
global.antilink = true;
global.chataudio = false;
global.likestatus = true;
global.chatbot = false;
global.chatbotgroup = false;
global.autoreact = false;
global.blockDM = false;
global.statusmessg = true;
global.statusText = "😍 hope";
global.ignoreGroups = false;

global.blockedCountryCodes = ["+92", "91", "+62"];
global.codewave = 'codewave-unit-force.zone.id';
global.youwatchmovies = 'codewave-unit-force.zone.id/online/screamer/youwatch';
global.codewaveapis = 'apis-codewave-unit-force.zone.id';
global.ownername = "ICONICS-TECH";
global.ownernumber = '263786115435';

global.ytname = "YouTube: https://www.youtube.com/@iconic-tech";
global.socialm = "GitHub: https://github.com/iconictech-dev";
global.location = "Zimbabwe, Harare;
global.botname = "Queen Amir";
global.packname = "Queen Amir;
global.author =AMIR tech";
global.iconic_channel = "https://whatsapp.com/channel/0029Vb7H0lTGZNCuwI8A7E0i;

global.mess = {
    antilink: "⚠️ Link sharing is not allowed in this group!",
    owner: "⛔ This command is reserved for the bot owner only!",
    wait: "⏳ Please wait while I process your request...",
    done: "✅ Operation completed successfully!",
    prem: "🌟 This feature requires premium access. Upgrade to unlock!",
    admin: "⛔ You must be an administrator to use this command",
    botAdmin: "🤖 I need admin permissions to perform this action",
    error: "❌ An error occurred. Please try again later",
    group: "💬 This feature is only available in group chats",
    private: "📩 Please use this command in our private chat"
};

const thumbnails = ["amir.jpg", "amir.jpg"];
const randomThumb = thumbnails[Math.floor(Math.random() * thumbnails.length)];
global.thumb = fs.readFileSync(path.join("./QueenMedia", randomThumb));

const file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`🔄 Updated '${__filename}'`));
    delete require.cache[file];
    require(file);
});

console.log(chalk.green('👑 QUEEN AMIR AI Configuration Loaded Successfully'));

// read documents at ./information/doc.txt
