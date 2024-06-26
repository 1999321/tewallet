import { Telegraf, Markup } from "telegraf";
import { link } from "telegraf/format";
const TOKEN = "7147616693:AAHeYlmQW7RRJj9DJeRcg8Rw3wa3qS3sSYI"
const bot = new Telegraf(TOKEN);

//const WEB_APP_URL = "https://tewallet-sdk.vercel.app/"
//const WEB_APP_URL = "https://passkey-demo.zerodev.app/"
// const WEB_APP_URL = "https://webauthn.passwordless.id/demos/basic.html"
const WEB_APP_URL = "https://wallet.tx.xyz/"

bot.start((ctx) =>
    ctx.reply("Welcome :)))))", {
      reply_markup: {
        keyboard: [[{ text: "web app", web_app: { url: WEB_APP_URL } }]],
      },
    })
);

bot.command("inlinekb", ctx =>
	ctx.reply(
		"Launch mini app from inline keyboard!",
		Markup.inlineKeyboard([Markup.button.webApp("Launch", WEB_APP_URL)]),
	),
);

bot.command("link", ctx =>
	/*
		Go to @Botfather and create a new app for your bot first, using /newapp
		Then modify this link appropriately.
	
		startapp is optional.
		If provided, it will be passed as start_param in initData
		and as ?tgWebAppStartParam=$command in the Web App URL
	*/
	ctx.reply(link("Launch", "https://t.me/$botname/$appname?startapp=$command")),
);

bot.on("inline_query", ctx =>
	ctx.answerInlineQuery([], {
		button: { text: "Launch", web_app: { url: WEB_APP_URL } },
	}),
);

bot.command("setmenu", ctx =>
	// sets Web App as the menu button for current chat
	ctx.setChatMenuButton({
		text: "Launch",
		type: "web_app",
		web_app: { url: WEB_APP_URL },
	}),
);

bot.launch();