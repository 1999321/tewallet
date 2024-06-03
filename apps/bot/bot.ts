import { Telegraf } from "telegraf";
const TOKEN = "7485518529:AAH1v2PaYei-FwZ6VYSdyTdlHww6X74E4Rw"
const bot = new Telegraf(TOKEN);

// bot.start((ctx) => ctx.reply("Welcome", {
//     reply_markup: {
//         inline_keyboard: [
//             [{ text: "Click me", callback_data: "click" }]
//         ]
        
//     },
    
// }));

async function botStart(){
    console.log("Bot start")
    await bot.start((ctx) => ctx.reply('Welcome'))
    console.log("starting process")
    await bot.launch();
    console.log("Bot launched")
}

botStart();