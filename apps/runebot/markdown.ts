const markdown_template = `
## RuneBot

Make Rune Easy.

### Your Setting:

Gas: Default (sat/vB)

UG Target sniper gas: Default (10sat/vB)

UG Sniper Mint Amount: Default (100/day)

Gas Level: Medium

--- Total Asset ---

💰BTC余额: 0 BTC ($0)

- w1(主钱包): \`bc1pg3u49t0280ea5fcjm6zry3vvj7tgauwjg9jpqal90vetl6v2l4hqd73z0e\`
  💰BTC余额: 0 BTC ($0)
- w2: \`bc1p728ddf7zgsne520e30s7sdk3m0tvh2wmthrj4jk853yfakex72dqjskt8s\`
  💰BTC余额: 0 BTC ($0)
`
export interface Asset {
    account: string;
    balance: string;
    balanceBTC: string;
}
export function getMarkdownString(
    gas: number,
    ugTargetGas: number,
    ugMintAmount: number,
    gasLevel: string,
    totalAsset: string,
    totalAssetBTC: string,
    allAssets: Asset[],
    mainWallet: number,
) {
    let template = `
## RuneBot

Make Rune Easy.

### Your Setting:

Gas: ${gas} (sat/vB)

UG Target sniper gas: ${ugTargetGas} (10sat/vB)

UG Sniper Mint Amount: ${ugMintAmount} (100/day)

Gas Level: ${gasLevel}

--- Total Asset ---

💰BTC Balance: ${totalAssetBTC} BTC (${totalAsset})
    `
    for (let i = 0; i < allAssets.length; i++) {
        if (i === mainWallet) 
            template += `
        - w${i + 1}(Main Wallet): \`${allAssets[i].account}\`
            💰BTC Balance: ${allAssets[i].balanceBTC} BTC ($${allAssets[i].balance})
                `
            else 
                template += `
        - w${i + 1}: \`${allAssets[i].account}\`
            💰BTC Balance: ${allAssets[i].balanceBTC} BTC ($${allAssets[i].balance})
                `
    }

    return template;
}

export function getMarkdownStringChinese(
    gas: number,
    ugTargetGas: number,
    ugMintAmount: number,
    gasLevel: string,
    totalAsset: string,
    totalAssetBTC: string,
    allAssets: Asset[],
    mainWallet: number,
) {
    let template = `
## 符文机器人

Make Rune Easy.

### 设置:

网络手续费价格: ${gas} (sat/vB)

狙击UG目标手续费价格: ${ugTargetGas} (10sat/vB)

狙击UG数量频率: ${ugMintAmount} (100/day)

网络手续费级别: ${gasLevel}

--- 总资产 ---

💰BTC余额: ${totalAssetBTC} BTC (${totalAsset})
    `
    for (let i = 0; i < allAssets.length; i++) {
        if (i === mainWallet) 
            template += `
        - w${i + 1}(主钱包): \`${allAssets[i].account}\`
            💰BTC余额: ${allAssets[i].balanceBTC} BTC ($${allAssets[i].balance})
                `
            else 
                template += `
        - w${i + 1}: \`${allAssets[i].account}\`
            💰BTC余额: ${allAssets[i].balanceBTC} BTC ($${allAssets[i].balance})
                `
    }

    return template;
}