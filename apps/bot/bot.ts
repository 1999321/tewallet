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

async function botStart(){
    console.log("Bot started")
    await bot.start((ctx) => ctx.reply('Welcome'))
    await bot.launch();
    console.log("Bot launched")
}

botStart();