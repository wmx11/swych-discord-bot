import { Qna } from '../../../types';

export default {
  id: 'i-cant-sell',
  keywords: [
    "why can't I sell",
    'how do I sell',
    'it gives me an error',
    "can't swap swych",
    "can't swap my tokens",
    'how to sell',
    "why I can't sell",
    'The input token cannot be transferred',
    '>atb',
  ],
  enabled: true,
  reactions: [],
  answers: [
    `
  **If you cannot swap your tokens, make sure you are following your ATB limits!**
  You can only sell **up to 20%** of your total tokens **every 10 days** during Phase 1.
  
  • If you are following your ATB limits, make sure you **have slippage set to 12%** and that you are swapping **Swych tokens to BNB**.
  
  • More about ATB:
  https://docs.swych.finance/swych-token/available-trading-balance-atb
  
  • Find your ATB limits here:
  https://app.swych.finance/staking`,
    `Please make sure you are following your ATB limits by selling up to 20% of your tokens every 10 days. Also, make sure you set the slippage at 12% and you are swapping to BNB tokens.`,
  ],
} as Qna;
