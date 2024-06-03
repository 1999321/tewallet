import { Telegraf } from "telegraf";
const TOKEN = "7485518529:AAH1v2PaYei-FwZ6VYSdyTdlHww6X74E4Rw"
const bot = new Telegraf(TOKEN);

const web_link = "https://tewallet-sdk.vercel.app/"

bot.start((ctx) =>
    ctx.reply("Welcome :)))))", {
      reply_markup: {
        keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
      },
    })
);

bot.launch();