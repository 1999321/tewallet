import { Telegraf } from "telegraf";
const TOKEN = "7305646910:AAFOeHKIx2tFHTNKgWk5mRBgWApKEepsJ74"
const bot = new Telegraf(TOKEN);

// bot.start((ctx) => ctx.reply("Welcome", {
//     reply_markup: {
//         inline_keyboard: [
//             [{ text: "Click me", callback_data: "click" }]
//         ]
        
//     },
    
// }));

bot.start((ctx) => ctx.reply('Welcome'))

bot.launch();
