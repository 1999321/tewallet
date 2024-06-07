import { Telegraf, Markup } from "telegraf";
import { link } from "telegraf/format";
import { Asset, getMarkdownString } from "./markdown";
const TOKEN = "7485518529:AAH1v2PaYei-FwZ6VYSdyTdlHww6X74E4Rw"
const bot = new Telegraf(TOKEN);

const WEB_APP_URL = "https://tewallet-sdk.vercel.app/"

bot.start((ctx) =>{

	const gas: number = 0;
    const ugTargetGas: number = 0;
    const ugMintAmount: number = 0;
    const gasLevel: string = "Medium";
    const totalAsset: string = '0'
    const totalAssetBTC: string = '0'
    const allAssets: Asset[] = []
    const mainWallet: number = 0

	let inlineKeyboard:any[] = []
	inlineKeyboard.push(
		[{ text: "English", callback_data: "en" },
		{ text: "中文", callback_data: "zh" }]
	)
	inlineKeyboard.push(
		[{ text: "创建钱包", callback_data: "create" },
		{ text: "导入钱包", callback_data: "import" }]
	)

	for(let i = 0; i < allAssets.length; i++){
		if(i === mainWallet){
			inlineKeyboard.push(
				[{ text: `🔑${allAssets[i].account}`, callback_data: `wallet_${i}` }]
			)
		}else{
			inlineKeyboard.push(
				[{ text: allAssets[i].account, callback_data: `wallet_${i}` }]
			)
		}
	
	}

	ctx.reply(getMarkdownString(
		gas,
		ugTargetGas,
		ugMintAmount,
		gasLevel,
		totalAsset,
		totalAssetBTC,
		allAssets,
		mainWallet
	), {
		reply_markup: {
			inline_keyboard: [
				[
					{ text: "English", callback_data: "en" },
					{ text: "中文", callback_data: "zh" }
				],
				[
					{ text: "创建钱包", callback_data: "create" },
					{ text: "导入钱包", callback_data: "import" }
				],

			]
		},
		parse_mode: "MarkdownV2"
	  })
}
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