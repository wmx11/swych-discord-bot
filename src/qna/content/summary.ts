import { Qna } from '../../../types';

export default {
  id: 'summary',
  keywords: ['>summary', 'what is the migration', 'what is migration'],
  enabled: true,
  reactions: [],
  allowUserTag: true,
  answers: `
**MIGRATION SUMMARY**
Official Contract Address: 0x9334e37faD7c41Cd6C9565Bff3A97CE31CEE52a3

**Phase 1: Distribution Phase**
 • Swych token will be an inflationary token during this phase.
 • The aim is to get more tokens in circulation and in the hands of investors.
 • Taxes will be put on sales and transfers to gather funds for development, marketing, and staff payments.
 • Up to 20% sell limit every 10 days is in place to prevent large negative sell pressure.
 • There is no max supply set for the token during this phase.
 • Staking rewards offer a fixed APY of 500% paid in Swych tokens.
 • BuyBackBurns will be conducted every 24-72 hours to keep positive momentum during the distribution phase.

**Phase 2: Growing Phase**
 • Swych token will transition to a deflationary method during this phase.
 • Burns will be conducted to reduce overall supply and create more value for each token.
 • There will be no taxes on sales or transfers during this phase.
 • There will be no limitation on sales or transfers during this phase.
 • A fixed supply will be calculated and set for the token.
 • Staking will evolve to a "Real Yield" method, with rewards paid in tokens such as BUSD/ETH/BTC/etc.
 • Swych token can be opened to different chains and venture into the DEX.
 • Swych token can potentially be listed on centralized exchanges.`,
} as Qna;
