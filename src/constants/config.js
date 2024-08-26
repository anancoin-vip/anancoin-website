export default {
  rpc: 'https://solana-mainnet.g.alchemy.com/v2/s9hXAbD-sa3eILjNmk20Cbz0jGELy2L6',
  mintInfo: {
    name: 'ANAN',
    symbol: 'ANAN',
    amount: 999999999999,
    tax: '0%',
    lp: 'BURNED',
    slogan: 'Let a Million Own ANAN Tokens!',
    mint: 'ANANAUvhgAuqMeoEqGtgCa5P1gNt4ZjDU7ZM1nskE23U',
    chain: 'SOLANA',
    description: 'ANAN is designed to spread joy and laughter within the blockchain community while providing tangible benefits to its holders.',
    telegram: 'https://t.me/ANAN_Coin',
    twitter: 'https://x.com/ANAN_Coin',
  },

  marketLinks: [
    {
      link: 'https://raydium.io/swap/?inputMint=sol&outputMint=ANANAUvhgAuqMeoEqGtgCa5P1gNt4ZjDU7ZM1nskE23U',
      text: 'RAYDIUM',
      icon: 'raydium',
    },
    {
      link: 'https://jup.ag/swap/SOL-ANANAUvhgAuqMeoEqGtgCa5P1gNt4ZjDU7ZM1nskE23U',
      text: 'JUPITTER',
      icon: 'jup',
    },
    {
      link: 'https://www.okx.com/zh-hans/web3/dex-swap?inputChain=501&inputCurrency=11111111111111111111111111111111&outputChain=501&outputCurrency=ANANAUvhgAuqMeoEqGtgCa5P1gNt4ZjDU7ZM1nskE23U',
      text: 'OKX DEX',
      icon: 'okx',
    }
  ],

  tokenomics: {
    title: 'Tokenomics',
    list: [
      {
        percent: '90%',
        title: 'Liquidity Pool',
        description: 'Add DEX Liquidity',
        address: {
          text: 'HP4D25RckEJSMsgrEmmZrWAqyzCWNPbLcnXQkG3mZRVc',
          link: 'https://solscan.io/token/HP4D25RckEJSMsgrEmmZrWAqyzCWNPbLcnXQkG3mZRVc'
        }
      },
      {
        percent: '3%',
        title: 'Community Rewards',
        description: 'Allocated to Community Users',
        address: {
          text: '9999pYKgsKvSKFt7r784hAumgEFfKAdoXCf7pQQ1sq7p',
          link: 'https://solscan.io/account/9999pYKgsKvSKFt7r784hAumgEFfKAdoXCf7pQQ1sq7p'
        }
      },
      {
        percent: '2%',
        title: 'Event Marketing',
        description: 'Allocated to Marketing Team',
        address: {
          text: '9999o9d8a5ksWr4eFf9NCZcz8DqfR8UZG7VahmBuJDfA',
          link: 'https://solscan.io/account/9999o9d8a5ksWr4eFf9NCZcz8DqfR8UZG7VahmBuJDfA'
        }
      },
      {
        percent: '5%',
        title: 'Development Team',
        description: 'Allocated to Development Team',
        address: {
          text: '9999HUTUzQUAwXKvSAZa1u2nRq3KiuuqnptoAdsvUoY9',
          link: 'https://solscan.io/account/9999HUTUzQUAwXKvSAZa1u2nRq3KiuuqnptoAdsvUoY9'
        }
      }
    ]
  },

  roadmaps: {
    title: 'Roadmap',
    list: [
      {
        title: 'Phase 1',
        content: [
          { text: 'Complete website and logo design', done: true },
          { text: 'Create Telegram group', done: true },
          { text: 'Create X (Twitter) community', done: true },
          { text: 'Develop smart contract', done: true },
          { text: 'Develop official website', done: true },
          { text: 'Create ANAN token on Solana chain', done: true },
          { text: 'Revoke ANAN token freezing', done: true },
          { text: 'Revoke ANAN token minting', done: true },
        ]
      },
      {
        title: 'Phase 2',
        content: [
          { text: 'Launch community rewards', done: true },
          { text: 'Create Central Order Book (OpenBook)', done: true },
          { text: 'Create trading market (AMM)', done: true },
          { text: 'Add 90% supply to liquidity pool', done: true },
          { text: 'Burn liquidity certificates (LP)', done: true },
          { text: 'Listed on Raydium DEX', done: true },
          { text: 'Listed on Jupiter DEX', done: true },
          { text: 'Listed on Orca DEX', done: false },
          { text: 'Listed on CoinGecko Website', done: false },
        ]
      },
      {
        title: 'Phase 3',
        content: [
          { text: 'Listed on CoinMarketCap Website', done: false },
          { text: 'Listed on Gate.io CEX', done: false },
          { text: 'Listed on MEXC CEX', done: false },
          { text: 'Listed on OKX CEX', done: false },
        ]
      },
      {
        title: 'Phase 4',
        content: [
          { text: 'Develop ANAN Mint service', done: false },
          { text: 'Develop ANAN Swap service', done: false },
          { text: 'Develop ANAN Domain service', done: false },
          { text: 'Create ANAN token on Avalanche chain', done: false },
          { text: 'Create ANAN token on BSC chain', done: false },
          { text: 'Create ANAN token on Ethereum chain', done: false },
          { text: 'Maintain competitiveness and innovation', done: false },
        ]
      }
    ]
  }
}